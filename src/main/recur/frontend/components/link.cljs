(ns recur.frontend.components.Link
  (:require
   [reitit.frontend.easy :as rfe]))

(defn Link [{:keys [href] :as props} & children]
  (let [attrs (merge (dissoc props :href)
                     {:href href
                      :on-click (fn [^js/MouseEvent e]
                                  (.preventDefault e)
                                  (rfe/push-state :target-route))})]
    (into [:a attrs] children)))