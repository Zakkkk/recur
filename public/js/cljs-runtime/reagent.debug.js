goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__29011__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__29011 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29012__i = 0, G__29012__a = new Array(arguments.length -  0);
while (G__29012__i < G__29012__a.length) {G__29012__a[G__29012__i] = arguments[G__29012__i + 0]; ++G__29012__i;}
  args = new cljs.core.IndexedSeq(G__29012__a,0,null);
} 
return G__29011__delegate.call(this,args);};
G__29011.cljs$lang$maxFixedArity = 0;
G__29011.cljs$lang$applyTo = (function (arglist__29013){
var args = cljs.core.seq(arglist__29013);
return G__29011__delegate(args);
});
G__29011.cljs$core$IFn$_invoke$arity$variadic = G__29011__delegate;
return G__29011;
})()
);

(o.error = (function() { 
var G__29014__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__29014 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29015__i = 0, G__29015__a = new Array(arguments.length -  0);
while (G__29015__i < G__29015__a.length) {G__29015__a[G__29015__i] = arguments[G__29015__i + 0]; ++G__29015__i;}
  args = new cljs.core.IndexedSeq(G__29015__a,0,null);
} 
return G__29014__delegate.call(this,args);};
G__29014.cljs$lang$maxFixedArity = 0;
G__29014.cljs$lang$applyTo = (function (arglist__29016){
var args = cljs.core.seq(arglist__29016);
return G__29014__delegate(args);
});
G__29014.cljs$core$IFn$_invoke$arity$variadic = G__29014__delegate;
return G__29014;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
