goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37530,p__37531){
var map__37532 = p__37530;
var map__37532__$1 = cljs.core.__destructure_map(map__37532);
var svc = map__37532__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37532__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37532__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37532__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37533 = p__37531;
var map__37533__$1 = cljs.core.__destructure_map(map__37533);
var msg = map__37533__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37533__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37533__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37533__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37533__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37539,p__37540){
var map__37541 = p__37539;
var map__37541__$1 = cljs.core.__destructure_map(map__37541);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37541__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37542 = p__37540;
var map__37542__$1 = cljs.core.__destructure_map(map__37542);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37542__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37543,p__37544){
var map__37545 = p__37543;
var map__37545__$1 = cljs.core.__destructure_map(map__37545);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37545__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37545__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37546 = p__37544;
var map__37546__$1 = cljs.core.__destructure_map(map__37546);
var msg = map__37546__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37546__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37548,tid){
var map__37549 = p__37548;
var map__37549__$1 = cljs.core.__destructure_map(map__37549);
var svc = map__37549__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37549__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37557 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37558 = null;
var count__37559 = (0);
var i__37560 = (0);
while(true){
if((i__37560 < count__37559)){
var vec__37567 = chunk__37558.cljs$core$IIndexed$_nth$arity$2(null,i__37560);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37567,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37567,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37575 = seq__37557;
var G__37576 = chunk__37558;
var G__37577 = count__37559;
var G__37578 = (i__37560 + (1));
seq__37557 = G__37575;
chunk__37558 = G__37576;
count__37559 = G__37577;
i__37560 = G__37578;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37557);
if(temp__5825__auto__){
var seq__37557__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37557__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37557__$1);
var G__37579 = cljs.core.chunk_rest(seq__37557__$1);
var G__37580 = c__5548__auto__;
var G__37581 = cljs.core.count(c__5548__auto__);
var G__37582 = (0);
seq__37557 = G__37579;
chunk__37558 = G__37580;
count__37559 = G__37581;
i__37560 = G__37582;
continue;
} else {
var vec__37570 = cljs.core.first(seq__37557__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37570,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37570,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37583 = cljs.core.next(seq__37557__$1);
var G__37584 = null;
var G__37585 = (0);
var G__37586 = (0);
seq__37557 = G__37583;
chunk__37558 = G__37584;
count__37559 = G__37585;
i__37560 = G__37586;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37553_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37553_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37554_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37554_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37555_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37555_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37556_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37556_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37573){
var map__37574 = p__37573;
var map__37574__$1 = cljs.core.__destructure_map(map__37574);
var svc = map__37574__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37574__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
