(ns recur.frontend.router
  (:require [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [recur.frontend.views.home]
            [recur.frontend.views.signin]))

(def routes
  [{:name :home
    :path "/"
    :component #'recur.frontend.views.home/Home}
   {:name :signin
    :path "/signin"
    :component #'recur.frontend.views.signin/Signin}])

(def route-table
  (mapv (fn [{:keys [path name component]}]
          [path {:name name :component component}])
        routes))

(def router
  (rf/router route-table))

(def current-route (r/atom nil))

(defn init-router []
  (rfe/start!
   router
   (fn [match] (reset! current-route match))
   {:use-fragment false}))

(defn href
  ([route-name] (rfe/href router route-name))
  ([route-name params] (rfe/href router route-name params))
  ([route-name params query] (rfe/href router route-name params query)))

(defn match-by-name [name]
  (rf/match-by-name router name))