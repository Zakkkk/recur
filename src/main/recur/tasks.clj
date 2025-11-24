(ns recur.tasks)

(def example-task
  {:title "comp2022: pre read a week of content, with notes"
   :due {:day :tuesday
         :is-end-of-day true}
   :renews [{:day :tuesday}]})

(def example-task-2
  {:title "comp2022: finish weekly quiz"
   :due {:days 6}
   :renews [{:day :sunday}]})

(defn get-tasks [generators last-login current-time])

(java.util.Date.)