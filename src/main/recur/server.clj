(ns recur.server
  (:require [ring.adapter.jetty :as jetty]
            [ring.middleware.file :as ring-file]
            [ring.middleware.file-info :as ring-file-info]
            [compojure.core :as cc]))

(defn my-handler [req]
  {:status 200
   :headers {"content-type" "text/plain"}
   :body "hello world from my-handler"})

(cc/defroutes app-routes
  (cc/POST "/api/get-tasks" req
    (println (slurp (:body req)))
    {:status 200
     :headers {"content-type" "text/plain"}
     :body "hello world response"}))

(def handler
  (-> #'app-routes
      (ring-file/wrap-file "public")
      (ring-file-info/wrap-file-info)))

(defn -main [& args]
  (jetty/run-jetty handler {:port 3000}))