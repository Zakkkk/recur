goog.provide('recur.frontend.app');
recur.frontend.app.my_element = (function recur$frontend$app$my_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/test",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"edn-params","edn-params",894273052),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"foo","foo",1268894036),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null)], null)], 0));
})], null),"Send post request!"], null)], null);
});
if((typeof recur !== 'undefined') && (typeof recur.frontend !== 'undefined') && (typeof recur.frontend.app !== 'undefined') && (typeof recur.frontend.app.root !== 'undefined')){
} else {
recur.frontend.app.root = (new cljs.core.Delay((function (){
return reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app"));
}),null));
}
recur.frontend.app.init = (function recur$frontend$app$init(){
reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(recur.frontend.app.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recur.frontend.app.my_element], null));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["helloworld"], 0));
});

//# sourceMappingURL=recur.frontend.app.js.map
