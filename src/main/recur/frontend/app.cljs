(ns recur.frontend.app
  (:require
   [reagent.dom.client :as rdc]
   [recur.frontend.router]))

(defn main-view []
  (let [comp (get-in @recur.frontend.router/current-route [:data :component])]
    (when comp
      [comp])))

(defonce root (delay (rdc/create-root (.getElementById js/document "app"))))

(defn init []
  (recur.frontend.router/init-router)
  (rdc/render @root [main-view]))