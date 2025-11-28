(ns recur.frontend.views.Signin
  (:require
   [recur.frontend.components.Link :refer [Link]]))

(defn Signin []
  [:div.max-w-xl.mx-auto.mt-6
   (Link {:href "/"} "Home")
   [:h2.text-5xl "Sign up"]
   [:form
    [:label "Username"]
    [:input.block.w-full.border-2.border-solid.border-slate-950.p-2]
    [:label "Password"]
    [:input.block.w-full.border-2.border-solid.border-slate-950.p-2
     {:type "password"}]
    [:button.block.w-full.border-2.border-solid.border-slate-950.p-2.mt-6
     "Submit"]]
   [:h2.text-5xl "Sign in"]
   [:form
    [:label "Username"]
    [:input.block.w-full.border-2.border-solid.border-slate-950.p-2]
    [:label "Password"]
    [:input.block.w-full.border-2.border-solid.border-slate-950.p-2
     {:type "password"}]
    [:button.block.w-full.border-2.border-solid.border-slate-950.p-2.mt-6
     "Submit"]]])