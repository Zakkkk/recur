(ns repl
  (:import [java.lang ProcessBuilder ProcessBuilder$Redirect Process])
  (:require
   [shadow.cljs.devtools.api :as shadow]
   [recur.server :as srv]
   [ring.adapter.jetty :as jetty]))

(defonce jetty-ref (atom nil))
(defonce css-watch-ref (atom nil))

(defn css-watch []
  (-> ["npx" "tailwindcss" "-i" "src/main/recur/frontend/site.css" "-o" "public/css/site.css" "--watch"]
      (ProcessBuilder.)
      (.redirectError ProcessBuilder$Redirect/INHERIT)
      (.redirectOutput ProcessBuilder$Redirect/INHERIT)
      (.start)))

(defn start
  {:shadow/requires-server true}
  []
  (shadow/watch :frontend)

  (reset! css-watch-ref
          (css-watch))

  (reset! jetty-ref
          (jetty/run-jetty #'srv/handler
                           {:port 3000
                            :join? false}))
  ::started)

(defn stop []
  (when-some [css-watch @css-watch-ref]
    (.destroyForcibly css-watch)
    (reset! css-watch-ref nil))
  (when-some [jetty @jetty-ref]
    (reset! jetty-ref nil)
    (.stop jetty))
  ::stopped)

(defn go []
  (stop)
  (start))