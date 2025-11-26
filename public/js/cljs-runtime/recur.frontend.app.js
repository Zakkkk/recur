goog.provide('recur.frontend.app');
if((typeof recur !== 'undefined') && (typeof recur.frontend !== 'undefined') && (typeof recur.frontend.app !== 'undefined') && (typeof recur.frontend.app.button_text !== 'undefined')){
} else {
recur.frontend.app.button_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("Send post!");
}
recur.frontend.app.my_element = (function recur$frontend$app$my_element(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var date = (new Date());
var c__30953__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__30954__auto__ = (function (){var switch__30789__auto__ = (function (state_32069){
var state_val_32070 = (state_32069[(1)]);
if((state_val_32070 === (1))){
var inst_32049 = [new cljs.core.Keyword(null,"edn-params","edn-params",894273052)];
var inst_32050 = [new cljs.core.Keyword(null,"year","year",335913393),new cljs.core.Keyword(null,"month","month",-1960248533),new cljs.core.Keyword(null,"day","day",-274800446),new cljs.core.Keyword(null,"hour","hour",-555989214),new cljs.core.Keyword(null,"minute","minute",-642875969),new cljs.core.Keyword(null,"timezone","timezone",1831928099)];
var inst_32051 = date.getFullYear();
var inst_32052 = date.getMonth();
var inst_32053 = (inst_32052 + (1));
var inst_32054 = date.getDate();
var inst_32055 = date.getHours();
var inst_32056 = date.getMinutes();
var inst_32057 = date.getTimezoneOffset();
var inst_32058 = (inst_32057 / (-60));
var inst_32059 = [inst_32051,inst_32053,inst_32054,inst_32055,inst_32056,inst_32058];
var inst_32060 = cljs.core.PersistentHashMap.fromArrays(inst_32050,inst_32059);
var inst_32061 = [inst_32060];
var inst_32062 = cljs.core.PersistentHashMap.fromArrays(inst_32049,inst_32061);
var inst_32063 = cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic("/api/get-tasks",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_32062], 0));
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32069__$1,(2),inst_32063);
} else {
if((state_val_32070 === (2))){
var inst_32065 = (state_32069[(2)]);
var inst_32066 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_32065);
var inst_32067 = cljs.core.reset_BANG_(recur.frontend.app.button_text,inst_32066);
var state_32069__$1 = state_32069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32069__$1,inst_32067);
} else {
return null;
}
}
});
return (function() {
var recur$frontend$app$my_element_$_state_machine__30790__auto__ = null;
var recur$frontend$app$my_element_$_state_machine__30790__auto____0 = (function (){
var statearr_32071 = [null,null,null,null,null,null,null];
(statearr_32071[(0)] = recur$frontend$app$my_element_$_state_machine__30790__auto__);

(statearr_32071[(1)] = (1));

return statearr_32071;
});
var recur$frontend$app$my_element_$_state_machine__30790__auto____1 = (function (state_32069){
while(true){
var ret_value__30791__auto__ = (function (){try{while(true){
var result__30792__auto__ = switch__30789__auto__(state_32069);
if(cljs.core.keyword_identical_QMARK_(result__30792__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30792__auto__;
}
break;
}
}catch (e32072){var ex__30793__auto__ = e32072;
var statearr_32073_32076 = state_32069;
(statearr_32073_32076[(2)] = ex__30793__auto__);


if(cljs.core.seq((state_32069[(4)]))){
var statearr_32074_32077 = state_32069;
(statearr_32074_32077[(1)] = cljs.core.first((state_32069[(4)])));

} else {
throw ex__30793__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__30791__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32078 = state_32069;
state_32069 = G__32078;
continue;
} else {
return ret_value__30791__auto__;
}
break;
}
});
recur$frontend$app$my_element_$_state_machine__30790__auto__ = function(state_32069){
switch(arguments.length){
case 0:
return recur$frontend$app$my_element_$_state_machine__30790__auto____0.call(this);
case 1:
return recur$frontend$app$my_element_$_state_machine__30790__auto____1.call(this,state_32069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
recur$frontend$app$my_element_$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$0 = recur$frontend$app$my_element_$_state_machine__30790__auto____0;
recur$frontend$app$my_element_$_state_machine__30790__auto__.cljs$core$IFn$_invoke$arity$1 = recur$frontend$app$my_element_$_state_machine__30790__auto____1;
return recur$frontend$app$my_element_$_state_machine__30790__auto__;
})()
})();
var state__30955__auto__ = (function (){var statearr_32075 = f__30954__auto__();
(statearr_32075[(6)] = c__30953__auto__);

return statearr_32075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__30955__auto__);
}));

return c__30953__auto__;
})], null),cljs.core.deref(recur.frontend.app.button_text)], null)], null);
});
if((typeof recur !== 'undefined') && (typeof recur.frontend !== 'undefined') && (typeof recur.frontend.app !== 'undefined') && (typeof recur.frontend.app.root !== 'undefined')){
} else {
recur.frontend.app.root = (new cljs.core.Delay((function (){
return reagent.dom.client.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("app"));
}),null));
}
recur.frontend.app.init = (function recur$frontend$app$init(){
return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(recur.frontend.app.root),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [recur.frontend.app.my_element], null));
});

//# sourceMappingURL=recur.frontend.app.js.map
