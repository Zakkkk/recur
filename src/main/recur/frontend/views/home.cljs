(ns recur.frontend.views.Home
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]
            [recur.frontend.components.Link :refer [Link]]))

(defonce tasks (r/atom ""))

(defn my-element []
  [:div
   [:button {:on-click
             (fn []
               (let [date (js/Date.)]
                 (go (reset!
                      tasks
                      (:body (<! (http/post
                                  "/api/get-tasks"
                                  {:edn-params {:year (.getFullYear date)
                                                :month (inc (.getMonth date))
                                                :day (.getDate date)
                                                :hour (.getHours date)
                                                :minute (.getMinutes date)
                                                :timezone (/ (.getTimezoneOffset date) -60)}})))))))}
    "Request Tasks from the last week!"]

   [:div @tasks]])

(defn Home []
  [:div
   [:h2 "Home"]
   (Link {:href "/signin"} "Go to sign in!")
   [:hr]
   [:hr]
   ;; [:> Button "hello"]
   [:br]
   ;;(Button {:class "add onto"} "hello world")
   (my-element)])