(ns recur.frontend.app
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [reagent.dom :as rd]
            [reagent.dom.client :as rdc]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defonce button-text (r/atom "Send post!"))

(defn my-element []
  [:div
   [:button {:on-click
             (fn []
               (let [date (js/Date.)]
                 (go (reset!
                      button-text
                      (:body (<! (http/post
                                  "/api/get-tasks"
                                  {:edn-params {:year (.getFullYear date)
                                                :month (inc (.getMonth date))
                                                :day (.getDate date)
                                                :hour (.getHours date)
                                                :minute (.getMinutes date)
                                                :timezone (/ (.getTimezoneOffset date) -60)}})))))))}
    @button-text]])

(defonce root (delay (rdc/create-root (.getElementById js/document "app"))))

(defn init []
  (rdc/render @root [my-element]))