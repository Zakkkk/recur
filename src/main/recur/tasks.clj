(ns recur.tasks
  (:import (java.time ZonedDateTime ZoneOffset LocalDate)
           (java.time.temporal ChronoUnit)))

(defn normalize-timezone
  "Create a ZonedDateTime from a time map using the included timezone offset."
  [{:keys [year month day hour minute timezone]}]
  (ZonedDateTime/of year month day hour minute 0 0 (ZoneOffset/ofHours (int timezone))))

(defn days-between-midnights
  "Returns the number of midnights that have passed between 2 days, where a day is in the map format."
  [day-1 day-2]
  (let [time-1 (normalize-timezone day-1)
        time-2 (normalize-timezone day-2)
        date-1 (.toLocalDate time-1)
        date-2 (.toLocalDate time-2)]
    (long (.between ChronoUnit/DAYS date-1 date-2))))

(defn add-days
  "Returns a Java LocalDate from a time map, and a number of days to add."
  [date-map n]
  (let [{:keys [year month day]} date-map
        d (LocalDate/of year month day)]
    (.plusDays d n)))

(defn java-weekday->keyword
  "Converts a Java Time DayOfWeek to a keyword day of the week."
  [weekday]
  (condp = weekday
    java.time.DayOfWeek/MONDAY :monday
    java.time.DayOfWeek/TUESDAY :tuesday
    java.time.DayOfWeek/WEDNESDAY :wednesday
    java.time.DayOfWeek/THURSDAY :thursday
    java.time.DayOfWeek/FRIDAY :friday
    java.time.DayOfWeek/SATURDAY :saturday
    java.time.DayOfWeek/SUNDAY :sunday))

(defn match-task-generator-with-day
  "Returns a collection of task generators which apply for the given day LocalDate."
  [generators day]
  (filter #(and (not= (:is-paused %) :true)
                (= (java-weekday->keyword (LocalDate/.getDayOfWeek day))
                   (:day (:renews %))))
          generators))

(defn create-task
  "Returns a task map from a generator and LocalDate."
  [generator current-time]
  {:name (:title generator)
   :created current-time})

(defn generators->tasks
  "Returns a collection of tasks from each generator."
  [time-of-creation generators]
  (map #(create-task % time-of-creation)
       (match-task-generator-with-day generators time-of-creation)))

(defn get-tasks
  "Returns a collection of tasks from task generators and the number of days passed."
  [generators last-login current-time]
  (let [days-passed (days-between-midnights last-login current-time)]
    (loop [days-left days-passed
           new-day (add-days last-login 0)
           tasks []]
      (if (= days-left 0)
        (filter seq tasks)
        (recur
         (dec days-left)
         (add-days last-login (inc (- days-passed days-left)))
         (apply conj tasks (generators->tasks new-day generators)))))))