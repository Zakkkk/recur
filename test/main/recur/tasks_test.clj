(ns recur.tasks-test
  (:import (java.time LocalDate))
  (:require [clojure.test :refer [deftest is testing]]
            [recur.tasks :as tasks]))

(def timestamps [{:day 26 :hour 1 :timezone 11 :month 11 :year 2025 :minute 31}])

(deftest days-between-midnights-test
  (testing "Same time does not change day count."
    (is (= 0 (tasks/days-between-midnights
              (first timestamps)
              (first timestamps)))))
  (testing "Hour changes do not change day count."
    (is (= 0 (tasks/days-between-midnights
              (first timestamps)
              (assoc (first timestamps) :hour 23)))))
  (testing "Minute changes do not change day count."
    (is (= 0 (tasks/days-between-midnights
              (first timestamps)
              (assoc (first timestamps) :minute 0)))))
  (testing "Single day change will change the day count."
    (is (= 1 (tasks/days-between-midnights
              (first timestamps)
              (assoc (first timestamps) :day 27)))))
  (testing "Changes across months are counted properly."
    (is (= 1 (tasks/days-between-midnights
              {:day 30 :hour 1 :timezone 11 :month 11 :year 2025 :minute 31}
              {:day 1 :hour 1 :timezone 11 :month 12 :year 2025 :minute 31}))))
  (testing "Changes across several months are counted properly."
    (is (= 61 (tasks/days-between-midnights
               {:day 1 :hour 1 :timezone 11 :month 3 :year 2025 :minute 31}
               {:day 1 :hour 1 :timezone 11 :month 5 :year 2025 :minute 31})))))

(deftest add-days-test
  (testing "Adding 0 days does not change the date."
    (is (= (tasks/add-days {:year 2025 :month 10 :day 12} 0)
           (LocalDate/of 2025 10 12))))
  (testing "Adding 1 day changes the date correctly."
    (is (= (tasks/add-days {:year 2025 :month 10 :day 11} 1)
           (LocalDate/of 2025 10 12))))
  (testing "Adding multiple days changes the date by the correct amount."
    (is (= (tasks/add-days {:year 2025 :month 2 :day 1} 20)
           (LocalDate/of 2025 2 21))))
  (testing "Adding days over a month works correctly."
    (is (= (tasks/add-days {:year 2003 :month 9 :day 8} 34)
           (LocalDate/of 2003 10 12)))))

(def example-task-generators
  [{:title "title1"
    :due {:day :tuesday
          :is-end-of-day true}
    :renews {:day :tuesday}}

   {:title "title2"
    :due {:day :monday
          :is-end-of-day true}
    :renews {:day :sunday}}

   {:title "title3"
    :due {:day :friday
          :is-end-of-day true}
    :renews {:day :sunday}}

   {:title "title4"
    :due {:day :friday
          :is-end-of-day true}
    :renews {:day :friday}
    :is-paused :true}])

(deftest match-task-generator-with-day-test
  (let [monday (LocalDate/of 2025 11 24)
        tuesday (LocalDate/of 2025 11 25)
        friday (LocalDate/of 2025 11 28)
        sunday (LocalDate/of 2025 11 30)]
    ;; TODO: Remove all `let`s from tests.
    (testing "Task generator matches days."
      (is (= (tasks/match-task-generator-with-day example-task-generators tuesday)
             [(first example-task-generators)]))
      (is (= (tasks/match-task-generator-with-day example-task-generators sunday)
             [(second example-task-generators)
              (nth example-task-generators 2)]))
      (is (= (tasks/match-task-generator-with-day example-task-generators (LocalDate/of 2025 11 30))
             [(second example-task-generators)
              (nth example-task-generators 2)])))
    (testing "Task generator ignores incorrect days."
      (is (empty? (tasks/match-task-generator-with-day example-task-generators monday)))
      (is (empty? (some #(not= :tuesday (:day (:due %)))
                        (tasks/match-task-generator-with-day example-task-generators tuesday)))))
    (testing "Task generator is not activated when paused."
      (is (empty? (tasks/match-task-generator-with-day example-task-generators friday))))))

(deftest generators->tasks-test
  (let [tuesday (LocalDate/of 2025 11 25)
        friday (LocalDate/of 2025 11 28)
        sunday (LocalDate/of 2025 11 30)]
    (testing "Empty list of generators does not return tasks."
      (is (empty? (tasks/generators->tasks sunday []))))
    (testing "Incorrect date does not return generators"
      (is (empty? (tasks/generators->tasks friday [(first example-task-generators)]))))
    (testing "Single generator in list returns correct task."
      (is (= (tasks/generators->tasks tuesday [(first example-task-generators)])
             [(tasks/create-task (first example-task-generators) tuesday)]))
      (is (= (tasks/generators->tasks sunday [(second example-task-generators)])
             [(tasks/create-task (second example-task-generators) sunday)])))
    (testing "List of multiple generators returns all correct tasks."
      (is (= (tasks/generators->tasks sunday example-task-generators)
             [(tasks/create-task (second example-task-generators) sunday)
              (tasks/create-task (nth example-task-generators 2) sunday)])))))

(deftest get-tasks-test
  (testing "No tasks are returned when there are no generators."
    (is (empty? (tasks/get-tasks
                 []
                 {:day 19 :hour 16 :timezone 11 :month 11 :year 2025 :minute 39}
                 {:day 26 :hour 16 :timezone 11 :month 11 :year 2025 :minute 39}))))
  (testing "No tasks are returned when no time has passed."
    (is (empty? (tasks/get-tasks
                 example-task-generators
                 {:day 19 :hour 16 :timezone 11 :month 11 :year 2025 :minute 39}
                 {:day 19 :hour 16 :timezone 11 :month 11 :year 2025 :minute 39}))))
  (testing "Correct tasks are returned over a week."
    (is (= (tasks/get-tasks
            example-task-generators
            {:day 19 :hour 16 :timezone 11 :month 11 :year 2025 :minute 39}
            {:day 26 :hour 16 :timezone 11 :month 11 :year 2025 :minute 39})
           [(tasks/create-task (second example-task-generators) (LocalDate/of 2025 11 23))
            (tasks/create-task (nth example-task-generators 2) (LocalDate/of 2025 11 23))
            (tasks/create-task (first example-task-generators) (LocalDate/of 2025 11 25))])))
  (testing "Correct tasks are returned when over 2 weeks have passed."
    (is (= (tasks/get-tasks
            example-task-generators
            {:day 1 :hour 16 :timezone 11 :month 11 :year 2025 :minute 39}
            {:day 15 :hour 16 :timezone 11 :month 11 :year 2025 :minute 39})
           [(tasks/create-task (second example-task-generators) (LocalDate/of 2025 11 2))
            (tasks/create-task (nth example-task-generators 2) (LocalDate/of 2025 11 2))
            (tasks/create-task (first example-task-generators) (LocalDate/of 2025 11 4))
            (tasks/create-task (second example-task-generators) (LocalDate/of 2025 11 9))
            (tasks/create-task (nth example-task-generators 2) (LocalDate/of 2025 11 9))
            (tasks/create-task (first example-task-generators) (LocalDate/of 2025 11 11))]))))