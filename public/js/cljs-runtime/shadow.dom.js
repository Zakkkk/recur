goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_29815 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_29815(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_29819 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_29819(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__28897 = coll;
var G__28898 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__28897,G__28898) : shadow.dom.lazy_native_coll_seq.call(null,G__28897,G__28898));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5025__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__28936 = arguments.length;
switch (G__28936) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__28942 = arguments.length;
switch (G__28942) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__28944 = arguments.length;
switch (G__28944) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__28960 = arguments.length;
switch (G__28960) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__28962 = arguments.length;
switch (G__28962) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__28980 = arguments.length;
switch (G__28980) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e28981){if((e28981 instanceof Object)){
var e = e28981;
return console.log("didnt support attachEvent",el,e);
} else {
throw e28981;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5025__auto__ = (!((typeof document !== 'undefined')));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__28985 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__28986 = null;
var count__28987 = (0);
var i__28988 = (0);
while(true){
if((i__28988 < count__28987)){
var el = chunk__28986.cljs$core$IIndexed$_nth$arity$2(null,i__28988);
var handler_29855__$1 = ((function (seq__28985,chunk__28986,count__28987,i__28988,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28985,chunk__28986,count__28987,i__28988,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29855__$1);


var G__29857 = seq__28985;
var G__29858 = chunk__28986;
var G__29859 = count__28987;
var G__29860 = (i__28988 + (1));
seq__28985 = G__29857;
chunk__28986 = G__29858;
count__28987 = G__29859;
i__28988 = G__29860;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__28985);
if(temp__5825__auto__){
var seq__28985__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28985__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__28985__$1);
var G__29862 = cljs.core.chunk_rest(seq__28985__$1);
var G__29863 = c__5548__auto__;
var G__29864 = cljs.core.count(c__5548__auto__);
var G__29865 = (0);
seq__28985 = G__29862;
chunk__28986 = G__29863;
count__28987 = G__29864;
i__28988 = G__29865;
continue;
} else {
var el = cljs.core.first(seq__28985__$1);
var handler_29866__$1 = ((function (seq__28985,chunk__28986,count__28987,i__28988,el,seq__28985__$1,temp__5825__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__28985,chunk__28986,count__28987,i__28988,el,seq__28985__$1,temp__5825__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_29866__$1);


var G__29867 = cljs.core.next(seq__28985__$1);
var G__29868 = null;
var G__29869 = (0);
var G__29870 = (0);
seq__28985 = G__29867;
chunk__28986 = G__29868;
count__28987 = G__29869;
i__28988 = G__29870;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__28993 = arguments.length;
switch (G__28993) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__29006 = cljs.core.seq(events);
var chunk__29007 = null;
var count__29008 = (0);
var i__29009 = (0);
while(true){
if((i__29009 < count__29008)){
var vec__29018 = chunk__29007.cljs$core$IIndexed$_nth$arity$2(null,i__29009);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29018,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29018,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29874 = seq__29006;
var G__29875 = chunk__29007;
var G__29876 = count__29008;
var G__29877 = (i__29009 + (1));
seq__29006 = G__29874;
chunk__29007 = G__29875;
count__29008 = G__29876;
i__29009 = G__29877;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29006);
if(temp__5825__auto__){
var seq__29006__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29006__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29006__$1);
var G__29878 = cljs.core.chunk_rest(seq__29006__$1);
var G__29879 = c__5548__auto__;
var G__29880 = cljs.core.count(c__5548__auto__);
var G__29881 = (0);
seq__29006 = G__29878;
chunk__29007 = G__29879;
count__29008 = G__29880;
i__29009 = G__29881;
continue;
} else {
var vec__29021 = cljs.core.first(seq__29006__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29021,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29021,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__29883 = cljs.core.next(seq__29006__$1);
var G__29884 = null;
var G__29885 = (0);
var G__29886 = (0);
seq__29006 = G__29883;
chunk__29007 = G__29884;
count__29008 = G__29885;
i__29009 = G__29886;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__29025 = cljs.core.seq(styles);
var chunk__29026 = null;
var count__29027 = (0);
var i__29028 = (0);
while(true){
if((i__29028 < count__29027)){
var vec__29039 = chunk__29026.cljs$core$IIndexed$_nth$arity$2(null,i__29028);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29039,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29039,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29889 = seq__29025;
var G__29890 = chunk__29026;
var G__29891 = count__29027;
var G__29892 = (i__29028 + (1));
seq__29025 = G__29889;
chunk__29026 = G__29890;
count__29027 = G__29891;
i__29028 = G__29892;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29025);
if(temp__5825__auto__){
var seq__29025__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29025__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29025__$1);
var G__29895 = cljs.core.chunk_rest(seq__29025__$1);
var G__29896 = c__5548__auto__;
var G__29897 = cljs.core.count(c__5548__auto__);
var G__29898 = (0);
seq__29025 = G__29895;
chunk__29026 = G__29896;
count__29027 = G__29897;
i__29028 = G__29898;
continue;
} else {
var vec__29047 = cljs.core.first(seq__29025__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29047,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__29900 = cljs.core.next(seq__29025__$1);
var G__29901 = null;
var G__29902 = (0);
var G__29903 = (0);
seq__29025 = G__29900;
chunk__29026 = G__29901;
count__29027 = G__29902;
i__29028 = G__29903;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__29056_29905 = key;
var G__29056_29906__$1 = (((G__29056_29905 instanceof cljs.core.Keyword))?G__29056_29905.fqn:null);
switch (G__29056_29906__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_29909 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5025__auto__ = goog.string.startsWith(ks_29909,"data-");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return goog.string.startsWith(ks_29909,"aria-");
}
})())){
el.setAttribute(ks_29909,value);
} else {
(el[ks_29909] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29089){
var map__29090 = p__29089;
var map__29090__$1 = cljs.core.__destructure_map(map__29090);
var props = map__29090__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29090__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29091 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29091,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29091,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29091,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29094 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29094,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29094;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29098 = arguments.length;
switch (G__29098) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5825__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5825__auto__)){
var n = temp__5825__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29107){
var vec__29109 = p__29107;
var seq__29110 = cljs.core.seq(vec__29109);
var first__29111 = cljs.core.first(seq__29110);
var seq__29110__$1 = cljs.core.next(seq__29110);
var nn = first__29111;
var first__29111__$1 = cljs.core.first(seq__29110__$1);
var seq__29110__$2 = cljs.core.next(seq__29110__$1);
var np = first__29111__$1;
var nc = seq__29110__$2;
var node = vec__29109;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29115 = nn;
var G__29116 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29115,G__29116) : create_fn.call(null,G__29115,G__29116));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29117 = nn;
var G__29118 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29117,G__29118) : create_fn.call(null,G__29117,G__29118));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__29119 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29119,(1),null);
var seq__29122_29928 = cljs.core.seq(node_children);
var chunk__29123_29929 = null;
var count__29124_29930 = (0);
var i__29125_29931 = (0);
while(true){
if((i__29125_29931 < count__29124_29930)){
var child_struct_29933 = chunk__29123_29929.cljs$core$IIndexed$_nth$arity$2(null,i__29125_29931);
var children_29934 = shadow.dom.dom_node(child_struct_29933);
if(cljs.core.seq_QMARK_(children_29934)){
var seq__29157_29935 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29934));
var chunk__29159_29936 = null;
var count__29160_29937 = (0);
var i__29161_29938 = (0);
while(true){
if((i__29161_29938 < count__29160_29937)){
var child_29939 = chunk__29159_29936.cljs$core$IIndexed$_nth$arity$2(null,i__29161_29938);
if(cljs.core.truth_(child_29939)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29939);


var G__29940 = seq__29157_29935;
var G__29941 = chunk__29159_29936;
var G__29942 = count__29160_29937;
var G__29943 = (i__29161_29938 + (1));
seq__29157_29935 = G__29940;
chunk__29159_29936 = G__29941;
count__29160_29937 = G__29942;
i__29161_29938 = G__29943;
continue;
} else {
var G__29944 = seq__29157_29935;
var G__29945 = chunk__29159_29936;
var G__29946 = count__29160_29937;
var G__29947 = (i__29161_29938 + (1));
seq__29157_29935 = G__29944;
chunk__29159_29936 = G__29945;
count__29160_29937 = G__29946;
i__29161_29938 = G__29947;
continue;
}
} else {
var temp__5825__auto___29948 = cljs.core.seq(seq__29157_29935);
if(temp__5825__auto___29948){
var seq__29157_29949__$1 = temp__5825__auto___29948;
if(cljs.core.chunked_seq_QMARK_(seq__29157_29949__$1)){
var c__5548__auto___29950 = cljs.core.chunk_first(seq__29157_29949__$1);
var G__29951 = cljs.core.chunk_rest(seq__29157_29949__$1);
var G__29952 = c__5548__auto___29950;
var G__29953 = cljs.core.count(c__5548__auto___29950);
var G__29954 = (0);
seq__29157_29935 = G__29951;
chunk__29159_29936 = G__29952;
count__29160_29937 = G__29953;
i__29161_29938 = G__29954;
continue;
} else {
var child_29955 = cljs.core.first(seq__29157_29949__$1);
if(cljs.core.truth_(child_29955)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29955);


var G__29956 = cljs.core.next(seq__29157_29949__$1);
var G__29957 = null;
var G__29958 = (0);
var G__29959 = (0);
seq__29157_29935 = G__29956;
chunk__29159_29936 = G__29957;
count__29160_29937 = G__29958;
i__29161_29938 = G__29959;
continue;
} else {
var G__29960 = cljs.core.next(seq__29157_29949__$1);
var G__29961 = null;
var G__29962 = (0);
var G__29963 = (0);
seq__29157_29935 = G__29960;
chunk__29159_29936 = G__29961;
count__29160_29937 = G__29962;
i__29161_29938 = G__29963;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29934);
}


var G__29965 = seq__29122_29928;
var G__29966 = chunk__29123_29929;
var G__29967 = count__29124_29930;
var G__29968 = (i__29125_29931 + (1));
seq__29122_29928 = G__29965;
chunk__29123_29929 = G__29966;
count__29124_29930 = G__29967;
i__29125_29931 = G__29968;
continue;
} else {
var temp__5825__auto___29969 = cljs.core.seq(seq__29122_29928);
if(temp__5825__auto___29969){
var seq__29122_29970__$1 = temp__5825__auto___29969;
if(cljs.core.chunked_seq_QMARK_(seq__29122_29970__$1)){
var c__5548__auto___29971 = cljs.core.chunk_first(seq__29122_29970__$1);
var G__29972 = cljs.core.chunk_rest(seq__29122_29970__$1);
var G__29973 = c__5548__auto___29971;
var G__29974 = cljs.core.count(c__5548__auto___29971);
var G__29975 = (0);
seq__29122_29928 = G__29972;
chunk__29123_29929 = G__29973;
count__29124_29930 = G__29974;
i__29125_29931 = G__29975;
continue;
} else {
var child_struct_29976 = cljs.core.first(seq__29122_29970__$1);
var children_29977 = shadow.dom.dom_node(child_struct_29976);
if(cljs.core.seq_QMARK_(children_29977)){
var seq__29163_29978 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_29977));
var chunk__29165_29979 = null;
var count__29166_29980 = (0);
var i__29167_29981 = (0);
while(true){
if((i__29167_29981 < count__29166_29980)){
var child_29983 = chunk__29165_29979.cljs$core$IIndexed$_nth$arity$2(null,i__29167_29981);
if(cljs.core.truth_(child_29983)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29983);


var G__29984 = seq__29163_29978;
var G__29985 = chunk__29165_29979;
var G__29986 = count__29166_29980;
var G__29987 = (i__29167_29981 + (1));
seq__29163_29978 = G__29984;
chunk__29165_29979 = G__29985;
count__29166_29980 = G__29986;
i__29167_29981 = G__29987;
continue;
} else {
var G__29988 = seq__29163_29978;
var G__29989 = chunk__29165_29979;
var G__29990 = count__29166_29980;
var G__29991 = (i__29167_29981 + (1));
seq__29163_29978 = G__29988;
chunk__29165_29979 = G__29989;
count__29166_29980 = G__29990;
i__29167_29981 = G__29991;
continue;
}
} else {
var temp__5825__auto___29992__$1 = cljs.core.seq(seq__29163_29978);
if(temp__5825__auto___29992__$1){
var seq__29163_29993__$1 = temp__5825__auto___29992__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29163_29993__$1)){
var c__5548__auto___29994 = cljs.core.chunk_first(seq__29163_29993__$1);
var G__29995 = cljs.core.chunk_rest(seq__29163_29993__$1);
var G__29996 = c__5548__auto___29994;
var G__29997 = cljs.core.count(c__5548__auto___29994);
var G__29998 = (0);
seq__29163_29978 = G__29995;
chunk__29165_29979 = G__29996;
count__29166_29980 = G__29997;
i__29167_29981 = G__29998;
continue;
} else {
var child_29999 = cljs.core.first(seq__29163_29993__$1);
if(cljs.core.truth_(child_29999)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_29999);


var G__30000 = cljs.core.next(seq__29163_29993__$1);
var G__30001 = null;
var G__30002 = (0);
var G__30003 = (0);
seq__29163_29978 = G__30000;
chunk__29165_29979 = G__30001;
count__29166_29980 = G__30002;
i__29167_29981 = G__30003;
continue;
} else {
var G__30004 = cljs.core.next(seq__29163_29993__$1);
var G__30005 = null;
var G__30006 = (0);
var G__30007 = (0);
seq__29163_29978 = G__30004;
chunk__29165_29979 = G__30005;
count__29166_29980 = G__30006;
i__29167_29981 = G__30007;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_29977);
}


var G__30008 = cljs.core.next(seq__29122_29970__$1);
var G__30009 = null;
var G__30010 = (0);
var G__30011 = (0);
seq__29122_29928 = G__30008;
chunk__29123_29929 = G__30009;
count__29124_29930 = G__30010;
i__29125_29931 = G__30011;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__29178 = cljs.core.seq(node);
var chunk__29179 = null;
var count__29180 = (0);
var i__29181 = (0);
while(true){
if((i__29181 < count__29180)){
var n = chunk__29179.cljs$core$IIndexed$_nth$arity$2(null,i__29181);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30018 = seq__29178;
var G__30019 = chunk__29179;
var G__30020 = count__29180;
var G__30021 = (i__29181 + (1));
seq__29178 = G__30018;
chunk__29179 = G__30019;
count__29180 = G__30020;
i__29181 = G__30021;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29178);
if(temp__5825__auto__){
var seq__29178__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29178__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29178__$1);
var G__30022 = cljs.core.chunk_rest(seq__29178__$1);
var G__30023 = c__5548__auto__;
var G__30024 = cljs.core.count(c__5548__auto__);
var G__30025 = (0);
seq__29178 = G__30022;
chunk__29179 = G__30023;
count__29180 = G__30024;
i__29181 = G__30025;
continue;
} else {
var n = cljs.core.first(seq__29178__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__30026 = cljs.core.next(seq__29178__$1);
var G__30027 = null;
var G__30028 = (0);
var G__30029 = (0);
seq__29178 = G__30026;
chunk__29179 = G__30027;
count__29180 = G__30028;
i__29181 = G__30029;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__29192 = arguments.length;
switch (G__29192) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__29202 = arguments.length;
switch (G__29202) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__29248 = arguments.length;
switch (G__29248) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5025__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30043 = arguments.length;
var i__5750__auto___30044 = (0);
while(true){
if((i__5750__auto___30044 < len__5749__auto___30043)){
args__5755__auto__.push((arguments[i__5750__auto___30044]));

var G__30046 = (i__5750__auto___30044 + (1));
i__5750__auto___30044 = G__30046;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__29307_30055 = cljs.core.seq(nodes);
var chunk__29308_30056 = null;
var count__29309_30057 = (0);
var i__29310_30058 = (0);
while(true){
if((i__29310_30058 < count__29309_30057)){
var node_30060 = chunk__29308_30056.cljs$core$IIndexed$_nth$arity$2(null,i__29310_30058);
fragment.appendChild(shadow.dom._to_dom(node_30060));


var G__30061 = seq__29307_30055;
var G__30062 = chunk__29308_30056;
var G__30063 = count__29309_30057;
var G__30064 = (i__29310_30058 + (1));
seq__29307_30055 = G__30061;
chunk__29308_30056 = G__30062;
count__29309_30057 = G__30063;
i__29310_30058 = G__30064;
continue;
} else {
var temp__5825__auto___30065 = cljs.core.seq(seq__29307_30055);
if(temp__5825__auto___30065){
var seq__29307_30066__$1 = temp__5825__auto___30065;
if(cljs.core.chunked_seq_QMARK_(seq__29307_30066__$1)){
var c__5548__auto___30067 = cljs.core.chunk_first(seq__29307_30066__$1);
var G__30068 = cljs.core.chunk_rest(seq__29307_30066__$1);
var G__30069 = c__5548__auto___30067;
var G__30070 = cljs.core.count(c__5548__auto___30067);
var G__30071 = (0);
seq__29307_30055 = G__30068;
chunk__29308_30056 = G__30069;
count__29309_30057 = G__30070;
i__29310_30058 = G__30071;
continue;
} else {
var node_30073 = cljs.core.first(seq__29307_30066__$1);
fragment.appendChild(shadow.dom._to_dom(node_30073));


var G__30075 = cljs.core.next(seq__29307_30066__$1);
var G__30076 = null;
var G__30077 = (0);
var G__30078 = (0);
seq__29307_30055 = G__30075;
chunk__29308_30056 = G__30076;
count__29309_30057 = G__30077;
i__29310_30058 = G__30078;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq29303){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29303));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__29320_30082 = cljs.core.seq(scripts);
var chunk__29321_30083 = null;
var count__29322_30084 = (0);
var i__29323_30085 = (0);
while(true){
if((i__29323_30085 < count__29322_30084)){
var vec__29352_30086 = chunk__29321_30083.cljs$core$IIndexed$_nth$arity$2(null,i__29323_30085);
var script_tag_30087 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29352_30086,(0),null);
var script_body_30088 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29352_30086,(1),null);
eval(script_body_30088);


var G__30091 = seq__29320_30082;
var G__30092 = chunk__29321_30083;
var G__30093 = count__29322_30084;
var G__30094 = (i__29323_30085 + (1));
seq__29320_30082 = G__30091;
chunk__29321_30083 = G__30092;
count__29322_30084 = G__30093;
i__29323_30085 = G__30094;
continue;
} else {
var temp__5825__auto___30095 = cljs.core.seq(seq__29320_30082);
if(temp__5825__auto___30095){
var seq__29320_30096__$1 = temp__5825__auto___30095;
if(cljs.core.chunked_seq_QMARK_(seq__29320_30096__$1)){
var c__5548__auto___30097 = cljs.core.chunk_first(seq__29320_30096__$1);
var G__30100 = cljs.core.chunk_rest(seq__29320_30096__$1);
var G__30101 = c__5548__auto___30097;
var G__30102 = cljs.core.count(c__5548__auto___30097);
var G__30103 = (0);
seq__29320_30082 = G__30100;
chunk__29321_30083 = G__30101;
count__29322_30084 = G__30102;
i__29323_30085 = G__30103;
continue;
} else {
var vec__29356_30105 = cljs.core.first(seq__29320_30096__$1);
var script_tag_30106 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29356_30105,(0),null);
var script_body_30107 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29356_30105,(1),null);
eval(script_body_30107);


var G__30108 = cljs.core.next(seq__29320_30096__$1);
var G__30109 = null;
var G__30110 = (0);
var G__30111 = (0);
seq__29320_30082 = G__30108;
chunk__29321_30083 = G__30109;
count__29322_30084 = G__30110;
i__29323_30085 = G__30111;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__29362){
var vec__29363 = p__29362;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29363,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29363,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__29375 = arguments.length;
switch (G__29375) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__29393 = cljs.core.seq(style_keys);
var chunk__29394 = null;
var count__29395 = (0);
var i__29396 = (0);
while(true){
if((i__29396 < count__29395)){
var it = chunk__29394.cljs$core$IIndexed$_nth$arity$2(null,i__29396);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30135 = seq__29393;
var G__30136 = chunk__29394;
var G__30137 = count__29395;
var G__30138 = (i__29396 + (1));
seq__29393 = G__30135;
chunk__29394 = G__30136;
count__29395 = G__30137;
i__29396 = G__30138;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__29393);
if(temp__5825__auto__){
var seq__29393__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29393__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__29393__$1);
var G__30139 = cljs.core.chunk_rest(seq__29393__$1);
var G__30140 = c__5548__auto__;
var G__30141 = cljs.core.count(c__5548__auto__);
var G__30142 = (0);
seq__29393 = G__30139;
chunk__29394 = G__30140;
count__29395 = G__30141;
i__29396 = G__30142;
continue;
} else {
var it = cljs.core.first(seq__29393__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__30144 = cljs.core.next(seq__29393__$1);
var G__30145 = null;
var G__30146 = (0);
var G__30147 = (0);
seq__29393 = G__30144;
chunk__29394 = G__30145;
count__29395 = G__30146;
i__29396 = G__30147;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k29461,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__29513 = k29461;
var G__29513__$1 = (((G__29513 instanceof cljs.core.Keyword))?G__29513.fqn:null);
switch (G__29513__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29461,else__5326__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__29518){
var vec__29519 = p__29518;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29519,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29519,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29460){
var self__ = this;
var G__29460__$1 = this;
return (new cljs.core.RecordIter((0),G__29460__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29463,other29464){
var self__ = this;
var this29463__$1 = this;
return (((!((other29464 == null)))) && ((((this29463__$1.constructor === other29464.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29463__$1.x,other29464.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29463__$1.y,other29464.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29463__$1.__extmap,other29464.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k29461){
var self__ = this;
var this__5330__auto____$1 = this;
var G__29558 = k29461;
var G__29558__$1 = (((G__29558 instanceof cljs.core.Keyword))?G__29558.fqn:null);
switch (G__29558__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29461);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__29460){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__29561 = cljs.core.keyword_identical_QMARK_;
var expr__29562 = k__5332__auto__;
if(cljs.core.truth_((pred__29561.cljs$core$IFn$_invoke$arity$2 ? pred__29561.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__29562) : pred__29561.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__29562)))){
return (new shadow.dom.Coordinate(G__29460,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29561.cljs$core$IFn$_invoke$arity$2 ? pred__29561.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__29562) : pred__29561.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__29562)))){
return (new shadow.dom.Coordinate(self__.x,G__29460,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__29460),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__29460){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__29460,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__29483){
var extmap__5365__auto__ = (function (){var G__29572 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29483,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__29483)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29572);
} else {
return G__29572;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__29483),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__29483),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5323__auto__,k__5324__auto__){
var self__ = this;
var this__5323__auto____$1 = this;
return this__5323__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5324__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5325__auto__,k29580,else__5326__auto__){
var self__ = this;
var this__5325__auto____$1 = this;
var G__29589 = k29580;
var G__29589__$1 = (((G__29589 instanceof cljs.core.Keyword))?G__29589.fqn:null);
switch (G__29589__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k29580,else__5326__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5343__auto__,f__5344__auto__,init__5345__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5346__auto__,p__29592){
var vec__29593 = p__29592;
var k__5347__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29593,(0),null);
var v__5348__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29593,(1),null);
return (f__5344__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5344__auto__.cljs$core$IFn$_invoke$arity$3(ret__5346__auto__,k__5347__auto__,v__5348__auto__) : f__5344__auto__.call(null,ret__5346__auto__,k__5347__auto__,v__5348__auto__));
}),init__5345__auto__,this__5343__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5338__auto__,writer__5339__auto__,opts__5340__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
var pr_pair__5341__auto__ = (function (keyval__5342__auto__){
return cljs.core.pr_sequential_writer(writer__5339__auto__,cljs.core.pr_writer,""," ","",opts__5340__auto__,keyval__5342__auto__);
});
return cljs.core.pr_sequential_writer(writer__5339__auto__,pr_pair__5341__auto__,"#shadow.dom.Size{",", ","}",opts__5340__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__29579){
var self__ = this;
var G__29579__$1 = this;
return (new cljs.core.RecordIter((0),G__29579__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5321__auto__){
var self__ = this;
var this__5321__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5318__auto__){
var self__ = this;
var this__5318__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5327__auto__){
var self__ = this;
var this__5327__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5319__auto__){
var self__ = this;
var this__5319__auto____$1 = this;
var h__5134__auto__ = self__.__hash;
if((!((h__5134__auto__ == null)))){
return h__5134__auto__;
} else {
var h__5134__auto____$1 = (function (coll__5320__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5320__auto__));
})(this__5319__auto____$1);
(self__.__hash = h__5134__auto____$1);

return h__5134__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this29581,other29582){
var self__ = this;
var this29581__$1 = this;
return (((!((other29582 == null)))) && ((((this29581__$1.constructor === other29582.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29581__$1.w,other29582.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29581__$1.h,other29582.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this29581__$1.__extmap,other29582.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5333__auto__,k__5334__auto__){
var self__ = this;
var this__5333__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5334__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5333__auto____$1),self__.__meta),k__5334__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5334__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5330__auto__,k29580){
var self__ = this;
var this__5330__auto____$1 = this;
var G__29605 = k29580;
var G__29605__$1 = (((G__29605 instanceof cljs.core.Keyword))?G__29605.fqn:null);
switch (G__29605__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k29580);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5331__auto__,k__5332__auto__,G__29579){
var self__ = this;
var this__5331__auto____$1 = this;
var pred__29607 = cljs.core.keyword_identical_QMARK_;
var expr__29608 = k__5332__auto__;
if(cljs.core.truth_((pred__29607.cljs$core$IFn$_invoke$arity$2 ? pred__29607.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__29608) : pred__29607.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__29608)))){
return (new shadow.dom.Size(G__29579,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__29607.cljs$core$IFn$_invoke$arity$2 ? pred__29607.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__29608) : pred__29607.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__29608)))){
return (new shadow.dom.Size(self__.w,G__29579,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5332__auto__,G__29579),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5336__auto__){
var self__ = this;
var this__5336__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5322__auto__,G__29579){
var self__ = this;
var this__5322__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__29579,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5328__auto__,entry__5329__auto__){
var self__ = this;
var this__5328__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5329__auto__)){
return this__5328__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5329__auto__,(0)),cljs.core._nth(entry__5329__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5328__auto____$1,entry__5329__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5369__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5369__auto__,writer__5370__auto__){
return cljs.core._write(writer__5370__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__29586){
var extmap__5365__auto__ = (function (){var G__29614 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__29586,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__29586)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__29614);
} else {
return G__29614;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__29586),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__29586),null,cljs.core.not_empty(extmap__5365__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5613__auto__ = opts;
var l__5614__auto__ = a__5613__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5614__auto__)){
var G__30227 = (i + (1));
var G__30228 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__30227;
ret = G__30228;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__29644){
var vec__29647 = p__29644;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29647,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29647,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__29658 = arguments.length;
switch (G__29658) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5823__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5823__auto__)){
var child = temp__5823__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__30238 = ps;
var G__30239 = (i + (1));
el__$1 = G__30238;
i = G__30239;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__29678 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29678,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29678,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29678,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__29683_30247 = cljs.core.seq(props);
var chunk__29684_30248 = null;
var count__29685_30249 = (0);
var i__29686_30250 = (0);
while(true){
if((i__29686_30250 < count__29685_30249)){
var vec__29703_30251 = chunk__29684_30248.cljs$core$IIndexed$_nth$arity$2(null,i__29686_30250);
var k_30252 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29703_30251,(0),null);
var v_30253 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29703_30251,(1),null);
el.setAttributeNS((function (){var temp__5825__auto__ = cljs.core.namespace(k_30252);
if(cljs.core.truth_(temp__5825__auto__)){
var ns = temp__5825__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30252),v_30253);


var G__30254 = seq__29683_30247;
var G__30255 = chunk__29684_30248;
var G__30256 = count__29685_30249;
var G__30257 = (i__29686_30250 + (1));
seq__29683_30247 = G__30254;
chunk__29684_30248 = G__30255;
count__29685_30249 = G__30256;
i__29686_30250 = G__30257;
continue;
} else {
var temp__5825__auto___30258 = cljs.core.seq(seq__29683_30247);
if(temp__5825__auto___30258){
var seq__29683_30259__$1 = temp__5825__auto___30258;
if(cljs.core.chunked_seq_QMARK_(seq__29683_30259__$1)){
var c__5548__auto___30260 = cljs.core.chunk_first(seq__29683_30259__$1);
var G__30262 = cljs.core.chunk_rest(seq__29683_30259__$1);
var G__30263 = c__5548__auto___30260;
var G__30264 = cljs.core.count(c__5548__auto___30260);
var G__30265 = (0);
seq__29683_30247 = G__30262;
chunk__29684_30248 = G__30263;
count__29685_30249 = G__30264;
i__29686_30250 = G__30265;
continue;
} else {
var vec__29708_30266 = cljs.core.first(seq__29683_30259__$1);
var k_30267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29708_30266,(0),null);
var v_30268 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29708_30266,(1),null);
el.setAttributeNS((function (){var temp__5825__auto____$1 = cljs.core.namespace(k_30267);
if(cljs.core.truth_(temp__5825__auto____$1)){
var ns = temp__5825__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_30267),v_30268);


var G__30276 = cljs.core.next(seq__29683_30259__$1);
var G__30277 = null;
var G__30278 = (0);
var G__30279 = (0);
seq__29683_30247 = G__30276;
chunk__29684_30248 = G__30277;
count__29685_30249 = G__30278;
i__29686_30250 = G__30279;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__29721 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29721,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29721,(1),null);
var seq__29726_30286 = cljs.core.seq(node_children);
var chunk__29729_30287 = null;
var count__29730_30288 = (0);
var i__29732_30289 = (0);
while(true){
if((i__29732_30289 < count__29730_30288)){
var child_struct_30290 = chunk__29729_30287.cljs$core$IIndexed$_nth$arity$2(null,i__29732_30289);
if((!((child_struct_30290 == null)))){
if(typeof child_struct_30290 === 'string'){
var text_30291 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30291),child_struct_30290].join(''));
} else {
var children_30292 = shadow.dom.svg_node(child_struct_30290);
if(cljs.core.seq_QMARK_(children_30292)){
var seq__29762_30293 = cljs.core.seq(children_30292);
var chunk__29764_30294 = null;
var count__29765_30295 = (0);
var i__29766_30296 = (0);
while(true){
if((i__29766_30296 < count__29765_30295)){
var child_30297 = chunk__29764_30294.cljs$core$IIndexed$_nth$arity$2(null,i__29766_30296);
if(cljs.core.truth_(child_30297)){
node.appendChild(child_30297);


var G__30298 = seq__29762_30293;
var G__30299 = chunk__29764_30294;
var G__30300 = count__29765_30295;
var G__30301 = (i__29766_30296 + (1));
seq__29762_30293 = G__30298;
chunk__29764_30294 = G__30299;
count__29765_30295 = G__30300;
i__29766_30296 = G__30301;
continue;
} else {
var G__30304 = seq__29762_30293;
var G__30305 = chunk__29764_30294;
var G__30306 = count__29765_30295;
var G__30307 = (i__29766_30296 + (1));
seq__29762_30293 = G__30304;
chunk__29764_30294 = G__30305;
count__29765_30295 = G__30306;
i__29766_30296 = G__30307;
continue;
}
} else {
var temp__5825__auto___30308 = cljs.core.seq(seq__29762_30293);
if(temp__5825__auto___30308){
var seq__29762_30309__$1 = temp__5825__auto___30308;
if(cljs.core.chunked_seq_QMARK_(seq__29762_30309__$1)){
var c__5548__auto___30310 = cljs.core.chunk_first(seq__29762_30309__$1);
var G__30311 = cljs.core.chunk_rest(seq__29762_30309__$1);
var G__30313 = c__5548__auto___30310;
var G__30314 = cljs.core.count(c__5548__auto___30310);
var G__30315 = (0);
seq__29762_30293 = G__30311;
chunk__29764_30294 = G__30313;
count__29765_30295 = G__30314;
i__29766_30296 = G__30315;
continue;
} else {
var child_30316 = cljs.core.first(seq__29762_30309__$1);
if(cljs.core.truth_(child_30316)){
node.appendChild(child_30316);


var G__30317 = cljs.core.next(seq__29762_30309__$1);
var G__30318 = null;
var G__30319 = (0);
var G__30320 = (0);
seq__29762_30293 = G__30317;
chunk__29764_30294 = G__30318;
count__29765_30295 = G__30319;
i__29766_30296 = G__30320;
continue;
} else {
var G__30321 = cljs.core.next(seq__29762_30309__$1);
var G__30322 = null;
var G__30323 = (0);
var G__30324 = (0);
seq__29762_30293 = G__30321;
chunk__29764_30294 = G__30322;
count__29765_30295 = G__30323;
i__29766_30296 = G__30324;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30292);
}
}


var G__30326 = seq__29726_30286;
var G__30327 = chunk__29729_30287;
var G__30328 = count__29730_30288;
var G__30329 = (i__29732_30289 + (1));
seq__29726_30286 = G__30326;
chunk__29729_30287 = G__30327;
count__29730_30288 = G__30328;
i__29732_30289 = G__30329;
continue;
} else {
var G__30330 = seq__29726_30286;
var G__30331 = chunk__29729_30287;
var G__30332 = count__29730_30288;
var G__30333 = (i__29732_30289 + (1));
seq__29726_30286 = G__30330;
chunk__29729_30287 = G__30331;
count__29730_30288 = G__30332;
i__29732_30289 = G__30333;
continue;
}
} else {
var temp__5825__auto___30334 = cljs.core.seq(seq__29726_30286);
if(temp__5825__auto___30334){
var seq__29726_30335__$1 = temp__5825__auto___30334;
if(cljs.core.chunked_seq_QMARK_(seq__29726_30335__$1)){
var c__5548__auto___30337 = cljs.core.chunk_first(seq__29726_30335__$1);
var G__30338 = cljs.core.chunk_rest(seq__29726_30335__$1);
var G__30339 = c__5548__auto___30337;
var G__30340 = cljs.core.count(c__5548__auto___30337);
var G__30341 = (0);
seq__29726_30286 = G__30338;
chunk__29729_30287 = G__30339;
count__29730_30288 = G__30340;
i__29732_30289 = G__30341;
continue;
} else {
var child_struct_30342 = cljs.core.first(seq__29726_30335__$1);
if((!((child_struct_30342 == null)))){
if(typeof child_struct_30342 === 'string'){
var text_30344 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_30344),child_struct_30342].join(''));
} else {
var children_30345 = shadow.dom.svg_node(child_struct_30342);
if(cljs.core.seq_QMARK_(children_30345)){
var seq__29777_30346 = cljs.core.seq(children_30345);
var chunk__29779_30347 = null;
var count__29780_30348 = (0);
var i__29781_30349 = (0);
while(true){
if((i__29781_30349 < count__29780_30348)){
var child_30350 = chunk__29779_30347.cljs$core$IIndexed$_nth$arity$2(null,i__29781_30349);
if(cljs.core.truth_(child_30350)){
node.appendChild(child_30350);


var G__30351 = seq__29777_30346;
var G__30352 = chunk__29779_30347;
var G__30353 = count__29780_30348;
var G__30354 = (i__29781_30349 + (1));
seq__29777_30346 = G__30351;
chunk__29779_30347 = G__30352;
count__29780_30348 = G__30353;
i__29781_30349 = G__30354;
continue;
} else {
var G__30355 = seq__29777_30346;
var G__30356 = chunk__29779_30347;
var G__30357 = count__29780_30348;
var G__30358 = (i__29781_30349 + (1));
seq__29777_30346 = G__30355;
chunk__29779_30347 = G__30356;
count__29780_30348 = G__30357;
i__29781_30349 = G__30358;
continue;
}
} else {
var temp__5825__auto___30359__$1 = cljs.core.seq(seq__29777_30346);
if(temp__5825__auto___30359__$1){
var seq__29777_30360__$1 = temp__5825__auto___30359__$1;
if(cljs.core.chunked_seq_QMARK_(seq__29777_30360__$1)){
var c__5548__auto___30361 = cljs.core.chunk_first(seq__29777_30360__$1);
var G__30362 = cljs.core.chunk_rest(seq__29777_30360__$1);
var G__30363 = c__5548__auto___30361;
var G__30364 = cljs.core.count(c__5548__auto___30361);
var G__30365 = (0);
seq__29777_30346 = G__30362;
chunk__29779_30347 = G__30363;
count__29780_30348 = G__30364;
i__29781_30349 = G__30365;
continue;
} else {
var child_30366 = cljs.core.first(seq__29777_30360__$1);
if(cljs.core.truth_(child_30366)){
node.appendChild(child_30366);


var G__30367 = cljs.core.next(seq__29777_30360__$1);
var G__30368 = null;
var G__30369 = (0);
var G__30370 = (0);
seq__29777_30346 = G__30367;
chunk__29779_30347 = G__30368;
count__29780_30348 = G__30369;
i__29781_30349 = G__30370;
continue;
} else {
var G__30371 = cljs.core.next(seq__29777_30360__$1);
var G__30372 = null;
var G__30373 = (0);
var G__30374 = (0);
seq__29777_30346 = G__30371;
chunk__29779_30347 = G__30372;
count__29780_30348 = G__30373;
i__29781_30349 = G__30374;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_30345);
}
}


var G__30375 = cljs.core.next(seq__29726_30335__$1);
var G__30376 = null;
var G__30377 = (0);
var G__30378 = (0);
seq__29726_30286 = G__30375;
chunk__29729_30287 = G__30376;
count__29730_30288 = G__30377;
i__29732_30289 = G__30378;
continue;
} else {
var G__30379 = cljs.core.next(seq__29726_30335__$1);
var G__30380 = null;
var G__30381 = (0);
var G__30382 = (0);
seq__29726_30286 = G__30379;
chunk__29729_30287 = G__30380;
count__29730_30288 = G__30381;
i__29732_30289 = G__30382;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5755__auto__ = [];
var len__5749__auto___30384 = arguments.length;
var i__5750__auto___30387 = (0);
while(true){
if((i__5750__auto___30387 < len__5749__auto___30384)){
args__5755__auto__.push((arguments[i__5750__auto___30387]));

var G__30389 = (i__5750__auto___30387 + (1));
i__5750__auto___30387 = G__30389;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq29801){
var G__29802 = cljs.core.first(seq29801);
var seq29801__$1 = cljs.core.next(seq29801);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29802,seq29801__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
