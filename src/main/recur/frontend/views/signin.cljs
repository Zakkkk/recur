(ns recur.frontend.views.signin
  (:require
   [recur.frontend.components.link :refer [Link]]))

(defn Signin []
  [:div
   [:h2 "Signin"]
   (Link {:href "/"} "Home")])