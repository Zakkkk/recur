goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38453 = arguments.length;
var i__5750__auto___38454 = (0);
while(true){
if((i__5750__auto___38454 < len__5749__auto___38453)){
args__5755__auto__.push((arguments[i__5750__auto___38454]));

var G__38455 = (i__5750__auto___38454 + (1));
i__5750__auto___38454 = G__38455;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq37943){
var G__37944 = cljs.core.first(seq37943);
var seq37943__$1 = cljs.core.next(seq37943);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37944,seq37943__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__37952 = cljs.core.seq(sources);
var chunk__37953 = null;
var count__37954 = (0);
var i__37955 = (0);
while(true){
if((i__37955 < count__37954)){
var map__37961 = chunk__37953.cljs$core$IIndexed$_nth$arity$2(null,i__37955);
var map__37961__$1 = cljs.core.__destructure_map(map__37961);
var src = map__37961__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37962){var e_38456 = e37962;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38456);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38456.message)].join('')));
}

var G__38457 = seq__37952;
var G__38458 = chunk__37953;
var G__38459 = count__37954;
var G__38460 = (i__37955 + (1));
seq__37952 = G__38457;
chunk__37953 = G__38458;
count__37954 = G__38459;
i__37955 = G__38460;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37952);
if(temp__5825__auto__){
var seq__37952__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37952__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37952__$1);
var G__38461 = cljs.core.chunk_rest(seq__37952__$1);
var G__38462 = c__5548__auto__;
var G__38463 = cljs.core.count(c__5548__auto__);
var G__38464 = (0);
seq__37952 = G__38461;
chunk__37953 = G__38462;
count__37954 = G__38463;
i__37955 = G__38464;
continue;
} else {
var map__37963 = cljs.core.first(seq__37952__$1);
var map__37963__$1 = cljs.core.__destructure_map(map__37963);
var src = map__37963__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e37966){var e_38465 = e37966;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_38465);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_38465.message)].join('')));
}

var G__38466 = cljs.core.next(seq__37952__$1);
var G__38467 = null;
var G__38468 = (0);
var G__38469 = (0);
seq__37952 = G__38466;
chunk__37953 = G__38467;
count__37954 = G__38468;
i__37955 = G__38469;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__37975 = cljs.core.seq(js_requires);
var chunk__37976 = null;
var count__37977 = (0);
var i__37978 = (0);
while(true){
if((i__37978 < count__37977)){
var js_ns = chunk__37976.cljs$core$IIndexed$_nth$arity$2(null,i__37978);
var require_str_38470 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38470);


var G__38471 = seq__37975;
var G__38472 = chunk__37976;
var G__38473 = count__37977;
var G__38474 = (i__37978 + (1));
seq__37975 = G__38471;
chunk__37976 = G__38472;
count__37977 = G__38473;
i__37978 = G__38474;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__37975);
if(temp__5825__auto__){
var seq__37975__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37975__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__37975__$1);
var G__38475 = cljs.core.chunk_rest(seq__37975__$1);
var G__38476 = c__5548__auto__;
var G__38477 = cljs.core.count(c__5548__auto__);
var G__38478 = (0);
seq__37975 = G__38475;
chunk__37976 = G__38476;
count__37977 = G__38477;
i__37978 = G__38478;
continue;
} else {
var js_ns = cljs.core.first(seq__37975__$1);
var require_str_38479 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_38479);


var G__38480 = cljs.core.next(seq__37975__$1);
var G__38481 = null;
var G__38482 = (0);
var G__38483 = (0);
seq__37975 = G__38480;
chunk__37976 = G__38481;
count__37977 = G__38482;
i__37978 = G__38483;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__37980){
var map__37982 = p__37980;
var map__37982__$1 = cljs.core.__destructure_map(map__37982);
var msg = map__37982__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37982__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37984(s__37985){
return (new cljs.core.LazySeq(null,(function (){
var s__37985__$1 = s__37985;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__37985__$1);
if(temp__5825__auto__){
var xs__6385__auto__ = temp__5825__auto__;
var map__37990 = cljs.core.first(xs__6385__auto__);
var map__37990__$1 = cljs.core.__destructure_map(map__37990);
var src = map__37990__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37990__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37990__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5499__auto__ = ((function (s__37985__$1,map__37990,map__37990__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37982,map__37982__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37984_$_iter__37986(s__37987){
return (new cljs.core.LazySeq(null,((function (s__37985__$1,map__37990,map__37990__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37982,map__37982__$1,msg,info,reload_info){
return (function (){
var s__37987__$1 = s__37987;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__37987__$1);
if(temp__5825__auto____$1){
var s__37987__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__37987__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__37987__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__37989 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__37988 = (0);
while(true){
if((i__37988 < size__5502__auto__)){
var warning = cljs.core._nth(c__5501__auto__,i__37988);
cljs.core.chunk_append(b__37989,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__38484 = (i__37988 + (1));
i__37988 = G__38484;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__37989),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37984_$_iter__37986(cljs.core.chunk_rest(s__37987__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__37989),null);
}
} else {
var warning = cljs.core.first(s__37987__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37984_$_iter__37986(cljs.core.rest(s__37987__$2)));
}
} else {
return null;
}
break;
}
});})(s__37985__$1,map__37990,map__37990__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37982,map__37982__$1,msg,info,reload_info))
,null,null));
});})(s__37985__$1,map__37990,map__37990__$1,src,resource_name,warnings,xs__6385__auto__,temp__5825__auto__,map__37982,map__37982__$1,msg,info,reload_info))
;
var fs__5500__auto__ = cljs.core.seq(iterys__5499__auto__(warnings));
if(fs__5500__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5500__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__37984(cljs.core.rest(s__37985__$1)));
} else {
var G__38485 = cljs.core.rest(s__37985__$1);
s__37985__$1 = G__38485;
continue;
}
} else {
var G__38486 = cljs.core.rest(s__37985__$1);
s__37985__$1 = G__38486;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__37991_38487 = cljs.core.seq(warnings);
var chunk__37992_38488 = null;
var count__37993_38489 = (0);
var i__37994_38490 = (0);
while(true){
if((i__37994_38490 < count__37993_38489)){
var map__37998_38491 = chunk__37992_38488.cljs$core$IIndexed$_nth$arity$2(null,i__37994_38490);
var map__37998_38492__$1 = cljs.core.__destructure_map(map__37998_38491);
var w_38493 = map__37998_38492__$1;
var msg_38494__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_38492__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38495 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_38492__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38496 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_38492__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37998_38492__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38497)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38495),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38496),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38494__$1)].join(''));


var G__38498 = seq__37991_38487;
var G__38499 = chunk__37992_38488;
var G__38500 = count__37993_38489;
var G__38501 = (i__37994_38490 + (1));
seq__37991_38487 = G__38498;
chunk__37992_38488 = G__38499;
count__37993_38489 = G__38500;
i__37994_38490 = G__38501;
continue;
} else {
var temp__5825__auto___38502 = cljs.core.seq(seq__37991_38487);
if(temp__5825__auto___38502){
var seq__37991_38503__$1 = temp__5825__auto___38502;
if(cljs.core.chunked_seq_QMARK_(seq__37991_38503__$1)){
var c__5548__auto___38504 = cljs.core.chunk_first(seq__37991_38503__$1);
var G__38505 = cljs.core.chunk_rest(seq__37991_38503__$1);
var G__38506 = c__5548__auto___38504;
var G__38507 = cljs.core.count(c__5548__auto___38504);
var G__38508 = (0);
seq__37991_38487 = G__38505;
chunk__37992_38488 = G__38506;
count__37993_38489 = G__38507;
i__37994_38490 = G__38508;
continue;
} else {
var map__37999_38509 = cljs.core.first(seq__37991_38503__$1);
var map__37999_38510__$1 = cljs.core.__destructure_map(map__37999_38509);
var w_38511 = map__37999_38510__$1;
var msg_38512__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999_38510__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_38513 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999_38510__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_38514 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999_38510__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_38515 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37999_38510__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_38515)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_38513),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_38514),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_38512__$1)].join(''));


var G__38516 = cljs.core.next(seq__37991_38503__$1);
var G__38517 = null;
var G__38518 = (0);
var G__38519 = (0);
seq__37991_38487 = G__38516;
chunk__37992_38488 = G__38517;
count__37993_38489 = G__38518;
i__37994_38490 = G__38519;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__37979_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__37979_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5023__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5023__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__38003 = node_uri;
G__38003.setQuery(null);

G__38003.setPath(new$);

return G__38003;
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38012){
var map__38019 = p__38012;
var map__38019__$1 = cljs.core.__destructure_map(map__38019);
var msg = map__38019__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38019__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38019__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38022 = cljs.core.seq(updates);
var chunk__38024 = null;
var count__38025 = (0);
var i__38026 = (0);
while(true){
if((i__38026 < count__38025)){
var path = chunk__38024.cljs$core$IIndexed$_nth$arity$2(null,i__38026);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38323_38520 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38327_38521 = null;
var count__38328_38522 = (0);
var i__38329_38523 = (0);
while(true){
if((i__38329_38523 < count__38328_38522)){
var node_38524 = chunk__38327_38521.cljs$core$IIndexed$_nth$arity$2(null,i__38329_38523);
if(cljs.core.not(node_38524.shadow$old)){
var path_match_38525 = shadow.cljs.devtools.client.browser.match_paths(node_38524.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38525)){
var new_link_38526 = (function (){var G__38355 = node_38524.cloneNode(true);
G__38355.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38525),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38355;
})();
(node_38524.shadow$old = true);

(new_link_38526.onload = ((function (seq__38323_38520,chunk__38327_38521,count__38328_38522,i__38329_38523,seq__38022,chunk__38024,count__38025,i__38026,new_link_38526,path_match_38525,node_38524,path,map__38019,map__38019__$1,msg,updates,reload_info){
return (function (e){
var seq__38356_38527 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38358_38528 = null;
var count__38359_38529 = (0);
var i__38360_38530 = (0);
while(true){
if((i__38360_38530 < count__38359_38529)){
var map__38364_38531 = chunk__38358_38528.cljs$core$IIndexed$_nth$arity$2(null,i__38360_38530);
var map__38364_38532__$1 = cljs.core.__destructure_map(map__38364_38531);
var task_38533 = map__38364_38532__$1;
var fn_str_38534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38364_38532__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38535 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38364_38532__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38536 = goog.getObjectByName(fn_str_38534,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38535)].join(''));

(fn_obj_38536.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38536.cljs$core$IFn$_invoke$arity$2(path,new_link_38526) : fn_obj_38536.call(null,path,new_link_38526));


var G__38537 = seq__38356_38527;
var G__38538 = chunk__38358_38528;
var G__38539 = count__38359_38529;
var G__38540 = (i__38360_38530 + (1));
seq__38356_38527 = G__38537;
chunk__38358_38528 = G__38538;
count__38359_38529 = G__38539;
i__38360_38530 = G__38540;
continue;
} else {
var temp__5825__auto___38541 = cljs.core.seq(seq__38356_38527);
if(temp__5825__auto___38541){
var seq__38356_38542__$1 = temp__5825__auto___38541;
if(cljs.core.chunked_seq_QMARK_(seq__38356_38542__$1)){
var c__5548__auto___38543 = cljs.core.chunk_first(seq__38356_38542__$1);
var G__38544 = cljs.core.chunk_rest(seq__38356_38542__$1);
var G__38545 = c__5548__auto___38543;
var G__38546 = cljs.core.count(c__5548__auto___38543);
var G__38547 = (0);
seq__38356_38527 = G__38544;
chunk__38358_38528 = G__38545;
count__38359_38529 = G__38546;
i__38360_38530 = G__38547;
continue;
} else {
var map__38365_38548 = cljs.core.first(seq__38356_38542__$1);
var map__38365_38549__$1 = cljs.core.__destructure_map(map__38365_38548);
var task_38550 = map__38365_38549__$1;
var fn_str_38551 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38365_38549__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38552 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38365_38549__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38553 = goog.getObjectByName(fn_str_38551,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38552)].join(''));

(fn_obj_38553.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38553.cljs$core$IFn$_invoke$arity$2(path,new_link_38526) : fn_obj_38553.call(null,path,new_link_38526));


var G__38554 = cljs.core.next(seq__38356_38542__$1);
var G__38555 = null;
var G__38556 = (0);
var G__38557 = (0);
seq__38356_38527 = G__38554;
chunk__38358_38528 = G__38555;
count__38359_38529 = G__38556;
i__38360_38530 = G__38557;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38524);
});})(seq__38323_38520,chunk__38327_38521,count__38328_38522,i__38329_38523,seq__38022,chunk__38024,count__38025,i__38026,new_link_38526,path_match_38525,node_38524,path,map__38019,map__38019__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38525], 0));

goog.dom.insertSiblingAfter(new_link_38526,node_38524);


var G__38558 = seq__38323_38520;
var G__38559 = chunk__38327_38521;
var G__38560 = count__38328_38522;
var G__38561 = (i__38329_38523 + (1));
seq__38323_38520 = G__38558;
chunk__38327_38521 = G__38559;
count__38328_38522 = G__38560;
i__38329_38523 = G__38561;
continue;
} else {
var G__38562 = seq__38323_38520;
var G__38563 = chunk__38327_38521;
var G__38564 = count__38328_38522;
var G__38565 = (i__38329_38523 + (1));
seq__38323_38520 = G__38562;
chunk__38327_38521 = G__38563;
count__38328_38522 = G__38564;
i__38329_38523 = G__38565;
continue;
}
} else {
var G__38566 = seq__38323_38520;
var G__38567 = chunk__38327_38521;
var G__38568 = count__38328_38522;
var G__38569 = (i__38329_38523 + (1));
seq__38323_38520 = G__38566;
chunk__38327_38521 = G__38567;
count__38328_38522 = G__38568;
i__38329_38523 = G__38569;
continue;
}
} else {
var temp__5825__auto___38570 = cljs.core.seq(seq__38323_38520);
if(temp__5825__auto___38570){
var seq__38323_38571__$1 = temp__5825__auto___38570;
if(cljs.core.chunked_seq_QMARK_(seq__38323_38571__$1)){
var c__5548__auto___38572 = cljs.core.chunk_first(seq__38323_38571__$1);
var G__38573 = cljs.core.chunk_rest(seq__38323_38571__$1);
var G__38574 = c__5548__auto___38572;
var G__38575 = cljs.core.count(c__5548__auto___38572);
var G__38576 = (0);
seq__38323_38520 = G__38573;
chunk__38327_38521 = G__38574;
count__38328_38522 = G__38575;
i__38329_38523 = G__38576;
continue;
} else {
var node_38577 = cljs.core.first(seq__38323_38571__$1);
if(cljs.core.not(node_38577.shadow$old)){
var path_match_38578 = shadow.cljs.devtools.client.browser.match_paths(node_38577.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38578)){
var new_link_38579 = (function (){var G__38366 = node_38577.cloneNode(true);
G__38366.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38578),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38366;
})();
(node_38577.shadow$old = true);

(new_link_38579.onload = ((function (seq__38323_38520,chunk__38327_38521,count__38328_38522,i__38329_38523,seq__38022,chunk__38024,count__38025,i__38026,new_link_38579,path_match_38578,node_38577,seq__38323_38571__$1,temp__5825__auto___38570,path,map__38019,map__38019__$1,msg,updates,reload_info){
return (function (e){
var seq__38367_38580 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38369_38581 = null;
var count__38370_38582 = (0);
var i__38371_38583 = (0);
while(true){
if((i__38371_38583 < count__38370_38582)){
var map__38375_38584 = chunk__38369_38581.cljs$core$IIndexed$_nth$arity$2(null,i__38371_38583);
var map__38375_38585__$1 = cljs.core.__destructure_map(map__38375_38584);
var task_38586 = map__38375_38585__$1;
var fn_str_38587 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38375_38585__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38588 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38375_38585__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38589 = goog.getObjectByName(fn_str_38587,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38588)].join(''));

(fn_obj_38589.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38589.cljs$core$IFn$_invoke$arity$2(path,new_link_38579) : fn_obj_38589.call(null,path,new_link_38579));


var G__38590 = seq__38367_38580;
var G__38591 = chunk__38369_38581;
var G__38592 = count__38370_38582;
var G__38593 = (i__38371_38583 + (1));
seq__38367_38580 = G__38590;
chunk__38369_38581 = G__38591;
count__38370_38582 = G__38592;
i__38371_38583 = G__38593;
continue;
} else {
var temp__5825__auto___38594__$1 = cljs.core.seq(seq__38367_38580);
if(temp__5825__auto___38594__$1){
var seq__38367_38595__$1 = temp__5825__auto___38594__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38367_38595__$1)){
var c__5548__auto___38596 = cljs.core.chunk_first(seq__38367_38595__$1);
var G__38597 = cljs.core.chunk_rest(seq__38367_38595__$1);
var G__38598 = c__5548__auto___38596;
var G__38599 = cljs.core.count(c__5548__auto___38596);
var G__38600 = (0);
seq__38367_38580 = G__38597;
chunk__38369_38581 = G__38598;
count__38370_38582 = G__38599;
i__38371_38583 = G__38600;
continue;
} else {
var map__38376_38601 = cljs.core.first(seq__38367_38595__$1);
var map__38376_38602__$1 = cljs.core.__destructure_map(map__38376_38601);
var task_38603 = map__38376_38602__$1;
var fn_str_38604 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38376_38602__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38605 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38376_38602__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38606 = goog.getObjectByName(fn_str_38604,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38605)].join(''));

(fn_obj_38606.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38606.cljs$core$IFn$_invoke$arity$2(path,new_link_38579) : fn_obj_38606.call(null,path,new_link_38579));


var G__38607 = cljs.core.next(seq__38367_38595__$1);
var G__38608 = null;
var G__38609 = (0);
var G__38610 = (0);
seq__38367_38580 = G__38607;
chunk__38369_38581 = G__38608;
count__38370_38582 = G__38609;
i__38371_38583 = G__38610;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38577);
});})(seq__38323_38520,chunk__38327_38521,count__38328_38522,i__38329_38523,seq__38022,chunk__38024,count__38025,i__38026,new_link_38579,path_match_38578,node_38577,seq__38323_38571__$1,temp__5825__auto___38570,path,map__38019,map__38019__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38578], 0));

goog.dom.insertSiblingAfter(new_link_38579,node_38577);


var G__38611 = cljs.core.next(seq__38323_38571__$1);
var G__38612 = null;
var G__38613 = (0);
var G__38614 = (0);
seq__38323_38520 = G__38611;
chunk__38327_38521 = G__38612;
count__38328_38522 = G__38613;
i__38329_38523 = G__38614;
continue;
} else {
var G__38615 = cljs.core.next(seq__38323_38571__$1);
var G__38616 = null;
var G__38617 = (0);
var G__38618 = (0);
seq__38323_38520 = G__38615;
chunk__38327_38521 = G__38616;
count__38328_38522 = G__38617;
i__38329_38523 = G__38618;
continue;
}
} else {
var G__38619 = cljs.core.next(seq__38323_38571__$1);
var G__38620 = null;
var G__38621 = (0);
var G__38622 = (0);
seq__38323_38520 = G__38619;
chunk__38327_38521 = G__38620;
count__38328_38522 = G__38621;
i__38329_38523 = G__38622;
continue;
}
}
} else {
}
}
break;
}


var G__38623 = seq__38022;
var G__38624 = chunk__38024;
var G__38625 = count__38025;
var G__38626 = (i__38026 + (1));
seq__38022 = G__38623;
chunk__38024 = G__38624;
count__38025 = G__38625;
i__38026 = G__38626;
continue;
} else {
var G__38627 = seq__38022;
var G__38628 = chunk__38024;
var G__38629 = count__38025;
var G__38630 = (i__38026 + (1));
seq__38022 = G__38627;
chunk__38024 = G__38628;
count__38025 = G__38629;
i__38026 = G__38630;
continue;
}
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38022);
if(temp__5825__auto__){
var seq__38022__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38022__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__38022__$1);
var G__38631 = cljs.core.chunk_rest(seq__38022__$1);
var G__38632 = c__5548__auto__;
var G__38633 = cljs.core.count(c__5548__auto__);
var G__38634 = (0);
seq__38022 = G__38631;
chunk__38024 = G__38632;
count__38025 = G__38633;
i__38026 = G__38634;
continue;
} else {
var path = cljs.core.first(seq__38022__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38377_38635 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38381_38636 = null;
var count__38382_38637 = (0);
var i__38383_38638 = (0);
while(true){
if((i__38383_38638 < count__38382_38637)){
var node_38639 = chunk__38381_38636.cljs$core$IIndexed$_nth$arity$2(null,i__38383_38638);
if(cljs.core.not(node_38639.shadow$old)){
var path_match_38640 = shadow.cljs.devtools.client.browser.match_paths(node_38639.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38640)){
var new_link_38641 = (function (){var G__38409 = node_38639.cloneNode(true);
G__38409.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38640),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38409;
})();
(node_38639.shadow$old = true);

(new_link_38641.onload = ((function (seq__38377_38635,chunk__38381_38636,count__38382_38637,i__38383_38638,seq__38022,chunk__38024,count__38025,i__38026,new_link_38641,path_match_38640,node_38639,path,seq__38022__$1,temp__5825__auto__,map__38019,map__38019__$1,msg,updates,reload_info){
return (function (e){
var seq__38410_38642 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38412_38643 = null;
var count__38413_38644 = (0);
var i__38414_38645 = (0);
while(true){
if((i__38414_38645 < count__38413_38644)){
var map__38418_38646 = chunk__38412_38643.cljs$core$IIndexed$_nth$arity$2(null,i__38414_38645);
var map__38418_38647__$1 = cljs.core.__destructure_map(map__38418_38646);
var task_38648 = map__38418_38647__$1;
var fn_str_38649 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38418_38647__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38650 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38418_38647__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38651 = goog.getObjectByName(fn_str_38649,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38650)].join(''));

(fn_obj_38651.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38651.cljs$core$IFn$_invoke$arity$2(path,new_link_38641) : fn_obj_38651.call(null,path,new_link_38641));


var G__38652 = seq__38410_38642;
var G__38653 = chunk__38412_38643;
var G__38654 = count__38413_38644;
var G__38655 = (i__38414_38645 + (1));
seq__38410_38642 = G__38652;
chunk__38412_38643 = G__38653;
count__38413_38644 = G__38654;
i__38414_38645 = G__38655;
continue;
} else {
var temp__5825__auto___38656__$1 = cljs.core.seq(seq__38410_38642);
if(temp__5825__auto___38656__$1){
var seq__38410_38657__$1 = temp__5825__auto___38656__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38410_38657__$1)){
var c__5548__auto___38658 = cljs.core.chunk_first(seq__38410_38657__$1);
var G__38659 = cljs.core.chunk_rest(seq__38410_38657__$1);
var G__38660 = c__5548__auto___38658;
var G__38661 = cljs.core.count(c__5548__auto___38658);
var G__38662 = (0);
seq__38410_38642 = G__38659;
chunk__38412_38643 = G__38660;
count__38413_38644 = G__38661;
i__38414_38645 = G__38662;
continue;
} else {
var map__38419_38663 = cljs.core.first(seq__38410_38657__$1);
var map__38419_38664__$1 = cljs.core.__destructure_map(map__38419_38663);
var task_38665 = map__38419_38664__$1;
var fn_str_38666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38419_38664__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38667 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38419_38664__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38668 = goog.getObjectByName(fn_str_38666,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38667)].join(''));

(fn_obj_38668.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38668.cljs$core$IFn$_invoke$arity$2(path,new_link_38641) : fn_obj_38668.call(null,path,new_link_38641));


var G__38669 = cljs.core.next(seq__38410_38657__$1);
var G__38670 = null;
var G__38671 = (0);
var G__38672 = (0);
seq__38410_38642 = G__38669;
chunk__38412_38643 = G__38670;
count__38413_38644 = G__38671;
i__38414_38645 = G__38672;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38639);
});})(seq__38377_38635,chunk__38381_38636,count__38382_38637,i__38383_38638,seq__38022,chunk__38024,count__38025,i__38026,new_link_38641,path_match_38640,node_38639,path,seq__38022__$1,temp__5825__auto__,map__38019,map__38019__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38640], 0));

goog.dom.insertSiblingAfter(new_link_38641,node_38639);


var G__38673 = seq__38377_38635;
var G__38674 = chunk__38381_38636;
var G__38675 = count__38382_38637;
var G__38676 = (i__38383_38638 + (1));
seq__38377_38635 = G__38673;
chunk__38381_38636 = G__38674;
count__38382_38637 = G__38675;
i__38383_38638 = G__38676;
continue;
} else {
var G__38677 = seq__38377_38635;
var G__38678 = chunk__38381_38636;
var G__38679 = count__38382_38637;
var G__38680 = (i__38383_38638 + (1));
seq__38377_38635 = G__38677;
chunk__38381_38636 = G__38678;
count__38382_38637 = G__38679;
i__38383_38638 = G__38680;
continue;
}
} else {
var G__38681 = seq__38377_38635;
var G__38682 = chunk__38381_38636;
var G__38683 = count__38382_38637;
var G__38684 = (i__38383_38638 + (1));
seq__38377_38635 = G__38681;
chunk__38381_38636 = G__38682;
count__38382_38637 = G__38683;
i__38383_38638 = G__38684;
continue;
}
} else {
var temp__5825__auto___38685__$1 = cljs.core.seq(seq__38377_38635);
if(temp__5825__auto___38685__$1){
var seq__38377_38686__$1 = temp__5825__auto___38685__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38377_38686__$1)){
var c__5548__auto___38687 = cljs.core.chunk_first(seq__38377_38686__$1);
var G__38688 = cljs.core.chunk_rest(seq__38377_38686__$1);
var G__38689 = c__5548__auto___38687;
var G__38690 = cljs.core.count(c__5548__auto___38687);
var G__38691 = (0);
seq__38377_38635 = G__38688;
chunk__38381_38636 = G__38689;
count__38382_38637 = G__38690;
i__38383_38638 = G__38691;
continue;
} else {
var node_38692 = cljs.core.first(seq__38377_38686__$1);
if(cljs.core.not(node_38692.shadow$old)){
var path_match_38693 = shadow.cljs.devtools.client.browser.match_paths(node_38692.getAttribute("href"),path);
if(cljs.core.truth_(path_match_38693)){
var new_link_38694 = (function (){var G__38420 = node_38692.cloneNode(true);
G__38420.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_38693),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38420;
})();
(node_38692.shadow$old = true);

(new_link_38694.onload = ((function (seq__38377_38635,chunk__38381_38636,count__38382_38637,i__38383_38638,seq__38022,chunk__38024,count__38025,i__38026,new_link_38694,path_match_38693,node_38692,seq__38377_38686__$1,temp__5825__auto___38685__$1,path,seq__38022__$1,temp__5825__auto__,map__38019,map__38019__$1,msg,updates,reload_info){
return (function (e){
var seq__38421_38695 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38423_38696 = null;
var count__38424_38697 = (0);
var i__38425_38698 = (0);
while(true){
if((i__38425_38698 < count__38424_38697)){
var map__38429_38699 = chunk__38423_38696.cljs$core$IIndexed$_nth$arity$2(null,i__38425_38698);
var map__38429_38700__$1 = cljs.core.__destructure_map(map__38429_38699);
var task_38701 = map__38429_38700__$1;
var fn_str_38702 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429_38700__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38703 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38429_38700__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38704 = goog.getObjectByName(fn_str_38702,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38703)].join(''));

(fn_obj_38704.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38704.cljs$core$IFn$_invoke$arity$2(path,new_link_38694) : fn_obj_38704.call(null,path,new_link_38694));


var G__38705 = seq__38421_38695;
var G__38706 = chunk__38423_38696;
var G__38707 = count__38424_38697;
var G__38708 = (i__38425_38698 + (1));
seq__38421_38695 = G__38705;
chunk__38423_38696 = G__38706;
count__38424_38697 = G__38707;
i__38425_38698 = G__38708;
continue;
} else {
var temp__5825__auto___38709__$2 = cljs.core.seq(seq__38421_38695);
if(temp__5825__auto___38709__$2){
var seq__38421_38710__$1 = temp__5825__auto___38709__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38421_38710__$1)){
var c__5548__auto___38711 = cljs.core.chunk_first(seq__38421_38710__$1);
var G__38712 = cljs.core.chunk_rest(seq__38421_38710__$1);
var G__38713 = c__5548__auto___38711;
var G__38714 = cljs.core.count(c__5548__auto___38711);
var G__38715 = (0);
seq__38421_38695 = G__38712;
chunk__38423_38696 = G__38713;
count__38424_38697 = G__38714;
i__38425_38698 = G__38715;
continue;
} else {
var map__38430_38716 = cljs.core.first(seq__38421_38710__$1);
var map__38430_38717__$1 = cljs.core.__destructure_map(map__38430_38716);
var task_38718 = map__38430_38717__$1;
var fn_str_38719 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38430_38717__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_38720 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38430_38717__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_38721 = goog.getObjectByName(fn_str_38719,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_38720)].join(''));

(fn_obj_38721.cljs$core$IFn$_invoke$arity$2 ? fn_obj_38721.cljs$core$IFn$_invoke$arity$2(path,new_link_38694) : fn_obj_38721.call(null,path,new_link_38694));


var G__38722 = cljs.core.next(seq__38421_38710__$1);
var G__38723 = null;
var G__38724 = (0);
var G__38725 = (0);
seq__38421_38695 = G__38722;
chunk__38423_38696 = G__38723;
count__38424_38697 = G__38724;
i__38425_38698 = G__38725;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_38692);
});})(seq__38377_38635,chunk__38381_38636,count__38382_38637,i__38383_38638,seq__38022,chunk__38024,count__38025,i__38026,new_link_38694,path_match_38693,node_38692,seq__38377_38686__$1,temp__5825__auto___38685__$1,path,seq__38022__$1,temp__5825__auto__,map__38019,map__38019__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_38693], 0));

goog.dom.insertSiblingAfter(new_link_38694,node_38692);


var G__38726 = cljs.core.next(seq__38377_38686__$1);
var G__38727 = null;
var G__38728 = (0);
var G__38729 = (0);
seq__38377_38635 = G__38726;
chunk__38381_38636 = G__38727;
count__38382_38637 = G__38728;
i__38383_38638 = G__38729;
continue;
} else {
var G__38730 = cljs.core.next(seq__38377_38686__$1);
var G__38731 = null;
var G__38732 = (0);
var G__38733 = (0);
seq__38377_38635 = G__38730;
chunk__38381_38636 = G__38731;
count__38382_38637 = G__38732;
i__38383_38638 = G__38733;
continue;
}
} else {
var G__38734 = cljs.core.next(seq__38377_38686__$1);
var G__38735 = null;
var G__38736 = (0);
var G__38737 = (0);
seq__38377_38635 = G__38734;
chunk__38381_38636 = G__38735;
count__38382_38637 = G__38736;
i__38383_38638 = G__38737;
continue;
}
}
} else {
}
}
break;
}


var G__38738 = cljs.core.next(seq__38022__$1);
var G__38739 = null;
var G__38740 = (0);
var G__38741 = (0);
seq__38022 = G__38738;
chunk__38024 = G__38739;
count__38025 = G__38740;
i__38026 = G__38741;
continue;
} else {
var G__38742 = cljs.core.next(seq__38022__$1);
var G__38743 = null;
var G__38744 = (0);
var G__38745 = (0);
seq__38022 = G__38742;
chunk__38024 = G__38743;
count__38025 = G__38744;
i__38026 = G__38745;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__38432 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38432) : success.call(null,G__38432));
}catch (e38431){var e = e38431;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__38433,success,fail){
var map__38434 = p__38433;
var map__38434__$1 = cljs.core.__destructure_map(map__38434);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38434__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__38436 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__38436) : success.call(null,G__38436));
}catch (e38435){var e = e38435;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38437,done,error){
var map__38438 = p__38437;
var map__38438__$1 = cljs.core.__destructure_map(map__38438);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38438__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38439,done,error){
var map__38440 = p__38439;
var map__38440__$1 = cljs.core.__destructure_map(map__38440);
var msg = map__38440__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38440__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38440__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38440__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38441){
var map__38442 = p__38441;
var map__38442__$1 = cljs.core.__destructure_map(map__38442);
var src = map__38442__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38442__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5023__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5023__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38443 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38443) : done.call(null,G__38443));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38444){
var map__38445 = p__38444;
var map__38445__$1 = cljs.core.__destructure_map(map__38445);
var msg__$1 = map__38445__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38445__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38446){var ex = e38446;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38447){
var map__38448 = p__38447;
var map__38448__$1 = cljs.core.__destructure_map(map__38448);
var env = map__38448__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38448__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38449){
var map__38450 = p__38449;
var map__38450__$1 = cljs.core.__destructure_map(map__38450);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38450__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38450__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38451){
var map__38452 = p__38451;
var map__38452__$1 = cljs.core.__destructure_map(map__38452);
var svc = map__38452__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38452__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
