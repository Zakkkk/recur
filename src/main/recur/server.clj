(ns recur.server
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.file :as ring-file]
            [ring.middleware.file-info :as ring-file-info]
            [ring.util.response]
            [compojure.core :as cc]
            [compojure.route :as route]
            [clojure.edn]
            [recur.tasks :as tasks]))

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

(cc/defroutes app-routes
  (cc/POST "/api/get-tasks" req
    (let [body (clojure.edn/read-string (slurp (:body req)))]
      {:status 200
       :headers {"content-type" "text/plain"}
       :body (pr-str (tasks/get-tasks example-task-generators
                                      {:day 20 :hour 1 :timezone 11 :month 11 :year 2025 :minute 7}
                                      body))}))
  (route/not-found (-> (ring.util.response/file-response "public/index.html")
                       (ring.util.response/content-type "text/html"))))

(tasks/get-tasks example-task-generators
                 {:day 20 :hour 1 :timezone 11 :month 11 :year 2025 :minute 21}
                 {:day 27 :hour 1 :timezone 11 :month 11 :year 2025 :minute 7})

(def handler
  (-> #'app-routes
      (ring-file/wrap-file "public")
      (ring-file-info/wrap-file-info)))

(defn -main [& args]
  (jetty/run-jetty handler {:port 3000}))