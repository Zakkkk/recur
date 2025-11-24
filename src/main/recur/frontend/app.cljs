(ns recur.frontend.app
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [reagent.core :as r]
            [reagent.dom :as rd]
            [reagent.dom.client :as rdc]
            [cljs-http.client :as http]
            [cljs.core.async :refer [<!]]))

(defn my-element []
  [:div
   [:button {:on-click #(http/post "/api/test" {:edn-params {:foo :bar}})}
    "Send post request!"]])

(defonce root (delay (rdc/create-root (.getElementById js/document "app"))))

(defn init []
  (rdc/render @root [my-element])
  (println "helloworld"))