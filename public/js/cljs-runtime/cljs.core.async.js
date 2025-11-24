goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31568 = (function (f,blockable,meta31569){
this.f = f;
this.blockable = blockable;
this.meta31569 = meta31569;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31568.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31570,meta31569__$1){
var self__ = this;
var _31570__$1 = this;
return (new cljs.core.async.t_cljs$core$async31568(self__.f,self__.blockable,meta31569__$1));
}));

(cljs.core.async.t_cljs$core$async31568.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31570){
var self__ = this;
var _31570__$1 = this;
return self__.meta31569;
}));

(cljs.core.async.t_cljs$core$async31568.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31568.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31568.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async31568.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async31568.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta31569","meta31569",572750454,null)], null);
}));

(cljs.core.async.t_cljs$core$async31568.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31568.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31568");

(cljs.core.async.t_cljs$core$async31568.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31568");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31568.
 */
cljs.core.async.__GT_t_cljs$core$async31568 = (function cljs$core$async$__GT_t_cljs$core$async31568(f,blockable,meta31569){
return (new cljs.core.async.t_cljs$core$async31568(f,blockable,meta31569));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__31563 = arguments.length;
switch (G__31563) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async31568(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__31584 = arguments.length;
switch (G__31584) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed, then return the value (or nil) forever. See chan for the
 *   semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__31588 = arguments.length;
switch (G__31588) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__31593 = arguments.length;
switch (G__31593) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_34806 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34806) : fn1.call(null,val_34806));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_34806) : fn1.call(null,val_34806));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__31599 = arguments.length;
switch (G__31599) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5823__auto__)){
var ret = temp__5823__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5823__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5823__auto__)){
var retb = temp__5823__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5616__auto___34811 = n;
var x_34812 = (0);
while(true){
if((x_34812 < n__5616__auto___34811)){
(a[x_34812] = x_34812);

var G__34813 = (x_34812 + (1));
x_34812 = G__34813;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31608 = (function (flag,meta31609){
this.flag = flag;
this.meta31609 = meta31609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31610,meta31609__$1){
var self__ = this;
var _31610__$1 = this;
return (new cljs.core.async.t_cljs$core$async31608(self__.flag,meta31609__$1));
}));

(cljs.core.async.t_cljs$core$async31608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31610){
var self__ = this;
var _31610__$1 = this;
return self__.meta31609;
}));

(cljs.core.async.t_cljs$core$async31608.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31608.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31608.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31608.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async31608.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta31609","meta31609",465529860,null)], null);
}));

(cljs.core.async.t_cljs$core$async31608.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31608.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31608");

(cljs.core.async.t_cljs$core$async31608.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31608");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31608.
 */
cljs.core.async.__GT_t_cljs$core$async31608 = (function cljs$core$async$__GT_t_cljs$core$async31608(flag,meta31609){
return (new cljs.core.async.t_cljs$core$async31608(flag,meta31609));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async31608(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31615 = (function (flag,cb,meta31616){
this.flag = flag;
this.cb = cb;
this.meta31616 = meta31616;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31617,meta31616__$1){
var self__ = this;
var _31617__$1 = this;
return (new cljs.core.async.t_cljs$core$async31615(self__.flag,self__.cb,meta31616__$1));
}));

(cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31617){
var self__ = this;
var _31617__$1 = this;
return self__.meta31616;
}));

(cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async31615.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta31616","meta31616",-106616050,null)], null);
}));

(cljs.core.async.t_cljs$core$async31615.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31615.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31615");

(cljs.core.async.t_cljs$core$async31615.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async31615");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31615.
 */
cljs.core.async.__GT_t_cljs$core$async31615 = (function cljs$core$async$__GT_t_cljs$core$async31615(flag,cb,meta31616){
return (new cljs.core.async.t_cljs$core$async31615(flag,cb,meta31616));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async31615(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var ports__$1 = cljs.core.vec(ports);
var n = cljs.core.count(ports__$1);
var _ = (function (){var i = (0);
while(true){
if((i < n)){
var port_34818 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,i);
if(cljs.core.vector_QMARK_(port_34818)){
if((!(((port_34818.cljs$core$IFn$_invoke$arity$1 ? port_34818.cljs$core$IFn$_invoke$arity$1((1)) : port_34818.call(null,(1))) == null)))){
} else {
throw (new Error(["Assert failed: ","can't put nil on channel","\n","(some? (port 1))"].join('')));
}
} else {
}

var G__34819 = (i + (1));
i = G__34819;
continue;
} else {
return null;
}
break;
}
})();
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports__$1,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31625_SHARP_){
var G__31636 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31625_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31636) : fret.call(null,G__31636));
});})(i,val,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,ports__$1,n,_,idxs,priority){
return (function (p1__31627_SHARP_){
var G__31637 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31627_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__31637) : fret.call(null,G__31637));
});})(i,idx,port,wport,flag,ports__$1,n,_,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5025__auto__ = wport;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34820 = (i + (1));
i = G__34820;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5025__auto__ = ret;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5825__auto__ = (function (){var and__5023__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5023__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(temp__5825__auto__)){
var got = temp__5825__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___34825 = arguments.length;
var i__5750__auto___34826 = (0);
while(true){
if((i__5750__auto___34826 < len__5749__auto___34825)){
args__5755__auto__.push((arguments[i__5750__auto___34826]));

var G__34827 = (i__5750__auto___34826 + (1));
i__5750__auto___34826 = G__34827;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__31647){
var map__31648 = p__31647;
var map__31648__$1 = cljs.core.__destructure_map(map__31648);
var opts = map__31648__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq31642){
var G__31643 = cljs.core.first(seq31642);
var seq31642__$1 = cljs.core.next(seq31642);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31643,seq31642__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__31661 = arguments.length;
switch (G__31661) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__31472__auto___34829 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_31724){
var state_val_31728 = (state_31724[(1)]);
if((state_val_31728 === (7))){
var inst_31714 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31794_34830 = state_31724__$1;
(statearr_31794_34830[(2)] = inst_31714);

(statearr_31794_34830[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (1))){
var state_31724__$1 = state_31724;
var statearr_31795_34831 = state_31724__$1;
(statearr_31795_34831[(2)] = null);

(statearr_31795_34831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (4))){
var inst_31680 = (state_31724[(7)]);
var inst_31680__$1 = (state_31724[(2)]);
var inst_31688 = (inst_31680__$1 == null);
var state_31724__$1 = (function (){var statearr_31796 = state_31724;
(statearr_31796[(7)] = inst_31680__$1);

return statearr_31796;
})();
if(cljs.core.truth_(inst_31688)){
var statearr_31797_34832 = state_31724__$1;
(statearr_31797_34832[(1)] = (5));

} else {
var statearr_31798_34833 = state_31724__$1;
(statearr_31798_34833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (13))){
var state_31724__$1 = state_31724;
var statearr_31799_34834 = state_31724__$1;
(statearr_31799_34834[(2)] = null);

(statearr_31799_34834[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (6))){
var inst_31680 = (state_31724[(7)]);
var state_31724__$1 = state_31724;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31724__$1,(11),to,inst_31680);
} else {
if((state_val_31728 === (3))){
var inst_31716 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31724__$1,inst_31716);
} else {
if((state_val_31728 === (12))){
var state_31724__$1 = state_31724;
var statearr_31807_34835 = state_31724__$1;
(statearr_31807_34835[(2)] = null);

(statearr_31807_34835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (2))){
var state_31724__$1 = state_31724;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31724__$1,(4),from);
} else {
if((state_val_31728 === (11))){
var inst_31705 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
if(cljs.core.truth_(inst_31705)){
var statearr_31810_34836 = state_31724__$1;
(statearr_31810_34836[(1)] = (12));

} else {
var statearr_31811_34837 = state_31724__$1;
(statearr_31811_34837[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (9))){
var state_31724__$1 = state_31724;
var statearr_31817_34838 = state_31724__$1;
(statearr_31817_34838[(2)] = null);

(statearr_31817_34838[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (5))){
var state_31724__$1 = state_31724;
if(cljs.core.truth_(close_QMARK_)){
var statearr_31818_34839 = state_31724__$1;
(statearr_31818_34839[(1)] = (8));

} else {
var statearr_31819_34840 = state_31724__$1;
(statearr_31819_34840[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (14))){
var inst_31711 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31822_34841 = state_31724__$1;
(statearr_31822_34841[(2)] = inst_31711);

(statearr_31822_34841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (10))){
var inst_31702 = (state_31724[(2)]);
var state_31724__$1 = state_31724;
var statearr_31825_34844 = state_31724__$1;
(statearr_31825_34844[(2)] = inst_31702);

(statearr_31825_34844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (8))){
var inst_31693 = cljs.core.async.close_BANG_(to);
var state_31724__$1 = state_31724;
var statearr_31826_34851 = state_31724__$1;
(statearr_31826_34851[(2)] = inst_31693);

(statearr_31826_34851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31278__auto__ = null;
var cljs$core$async$state_machine__31278__auto____0 = (function (){
var statearr_31827 = [null,null,null,null,null,null,null,null];
(statearr_31827[(0)] = cljs$core$async$state_machine__31278__auto__);

(statearr_31827[(1)] = (1));

return statearr_31827;
});
var cljs$core$async$state_machine__31278__auto____1 = (function (state_31724){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_31724);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e31832){var ex__31281__auto__ = e31832;
var statearr_31833_34858 = state_31724;
(statearr_31833_34858[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_31724[(4)]))){
var statearr_31834_34859 = state_31724;
(statearr_31834_34859[(1)] = cljs.core.first((state_31724[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34860 = state_31724;
state_31724 = G__34860;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$state_machine__31278__auto__ = function(state_31724){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31278__auto____1.call(this,state_31724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31278__auto____0;
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31278__auto____1;
return cljs$core$async$state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_31835 = f__31473__auto__();
(statearr_31835[(6)] = c__31472__auto___34829);

return statearr_31835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__31844){
var vec__31845 = p__31844;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31845,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31845,(1),null);
var job = vec__31845;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__31472__auto___34867 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_31853){
var state_val_31854 = (state_31853[(1)]);
if((state_val_31854 === (1))){
var state_31853__$1 = state_31853;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31853__$1,(2),res,v);
} else {
if((state_val_31854 === (2))){
var inst_31850 = (state_31853[(2)]);
var inst_31851 = cljs.core.async.close_BANG_(res);
var state_31853__$1 = (function (){var statearr_31856 = state_31853;
(statearr_31856[(7)] = inst_31850);

return statearr_31856;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31853__$1,inst_31851);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0 = (function (){
var statearr_31857 = [null,null,null,null,null,null,null,null];
(statearr_31857[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__);

(statearr_31857[(1)] = (1));

return statearr_31857;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1 = (function (state_31853){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_31853);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e31858){var ex__31281__auto__ = e31858;
var statearr_31859_34872 = state_31853;
(statearr_31859_34872[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_31853[(4)]))){
var statearr_31860_34873 = state_31853;
(statearr_31860_34873[(1)] = cljs.core.first((state_31853[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34874 = state_31853;
state_31853 = G__34874;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__ = function(state_31853){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1.call(this,state_31853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_31861 = f__31473__auto__();
(statearr_31861[(6)] = c__31472__auto___34867);

return statearr_31861;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__31865){
var vec__31866 = p__31865;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31866,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31866,(1),null);
var job = vec__31866;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5616__auto___34878 = n;
var __34879 = (0);
while(true){
if((__34879 < n__5616__auto___34878)){
var G__31876_34880 = type;
var G__31876_34881__$1 = (((G__31876_34880 instanceof cljs.core.Keyword))?G__31876_34880.fqn:null);
switch (G__31876_34881__$1) {
case "compute":
var c__31472__auto___34883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34879,c__31472__auto___34883,G__31876_34880,G__31876_34881__$1,n__5616__auto___34878,jobs,results,process__$1,async){
return (function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = ((function (__34879,c__31472__auto___34883,G__31876_34880,G__31876_34881__$1,n__5616__auto___34878,jobs,results,process__$1,async){
return (function (state_31933){
var state_val_31934 = (state_31933[(1)]);
if((state_val_31934 === (1))){
var state_31933__$1 = state_31933;
var statearr_31952_34884 = state_31933__$1;
(statearr_31952_34884[(2)] = null);

(statearr_31952_34884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31934 === (2))){
var state_31933__$1 = state_31933;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31933__$1,(4),jobs);
} else {
if((state_val_31934 === (3))){
var inst_31930 = (state_31933[(2)]);
var state_31933__$1 = state_31933;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31933__$1,inst_31930);
} else {
if((state_val_31934 === (4))){
var inst_31919 = (state_31933[(2)]);
var inst_31923 = process__$1(inst_31919);
var state_31933__$1 = state_31933;
if(cljs.core.truth_(inst_31923)){
var statearr_31956_34886 = state_31933__$1;
(statearr_31956_34886[(1)] = (5));

} else {
var statearr_31959_34887 = state_31933__$1;
(statearr_31959_34887[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31934 === (5))){
var state_31933__$1 = state_31933;
var statearr_31960_34888 = state_31933__$1;
(statearr_31960_34888[(2)] = null);

(statearr_31960_34888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31934 === (6))){
var state_31933__$1 = state_31933;
var statearr_31965_34889 = state_31933__$1;
(statearr_31965_34889[(2)] = null);

(statearr_31965_34889[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31934 === (7))){
var inst_31928 = (state_31933[(2)]);
var state_31933__$1 = state_31933;
var statearr_31976_34890 = state_31933__$1;
(statearr_31976_34890[(2)] = inst_31928);

(statearr_31976_34890[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34879,c__31472__auto___34883,G__31876_34880,G__31876_34881__$1,n__5616__auto___34878,jobs,results,process__$1,async))
;
return ((function (__34879,switch__31277__auto__,c__31472__auto___34883,G__31876_34880,G__31876_34881__$1,n__5616__auto___34878,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0 = (function (){
var statearr_31992 = [null,null,null,null,null,null,null];
(statearr_31992[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__);

(statearr_31992[(1)] = (1));

return statearr_31992;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1 = (function (state_31933){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_31933);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e31996){var ex__31281__auto__ = e31996;
var statearr_31998_34892 = state_31933;
(statearr_31998_34892[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_31933[(4)]))){
var statearr_32001_34893 = state_31933;
(statearr_32001_34893[(1)] = cljs.core.first((state_31933[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34895 = state_31933;
state_31933 = G__34895;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__ = function(state_31933){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1.call(this,state_31933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__;
})()
;})(__34879,switch__31277__auto__,c__31472__auto___34883,G__31876_34880,G__31876_34881__$1,n__5616__auto___34878,jobs,results,process__$1,async))
})();
var state__31474__auto__ = (function (){var statearr_32011 = f__31473__auto__();
(statearr_32011[(6)] = c__31472__auto___34883);

return statearr_32011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
});})(__34879,c__31472__auto___34883,G__31876_34880,G__31876_34881__$1,n__5616__auto___34878,jobs,results,process__$1,async))
);


break;
case "async":
var c__31472__auto___34896 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__34879,c__31472__auto___34896,G__31876_34880,G__31876_34881__$1,n__5616__auto___34878,jobs,results,process__$1,async){
return (function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = ((function (__34879,c__31472__auto___34896,G__31876_34880,G__31876_34881__$1,n__5616__auto___34878,jobs,results,process__$1,async){
return (function (state_32025){
var state_val_32026 = (state_32025[(1)]);
if((state_val_32026 === (1))){
var state_32025__$1 = state_32025;
var statearr_32031_34897 = state_32025__$1;
(statearr_32031_34897[(2)] = null);

(statearr_32031_34897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (2))){
var state_32025__$1 = state_32025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32025__$1,(4),jobs);
} else {
if((state_val_32026 === (3))){
var inst_32023 = (state_32025[(2)]);
var state_32025__$1 = state_32025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32025__$1,inst_32023);
} else {
if((state_val_32026 === (4))){
var inst_32015 = (state_32025[(2)]);
var inst_32016 = async(inst_32015);
var state_32025__$1 = state_32025;
if(cljs.core.truth_(inst_32016)){
var statearr_32037_34898 = state_32025__$1;
(statearr_32037_34898[(1)] = (5));

} else {
var statearr_32038_34899 = state_32025__$1;
(statearr_32038_34899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (5))){
var state_32025__$1 = state_32025;
var statearr_32044_34900 = state_32025__$1;
(statearr_32044_34900[(2)] = null);

(statearr_32044_34900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (6))){
var state_32025__$1 = state_32025;
var statearr_32046_34901 = state_32025__$1;
(statearr_32046_34901[(2)] = null);

(statearr_32046_34901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32026 === (7))){
var inst_32021 = (state_32025[(2)]);
var state_32025__$1 = state_32025;
var statearr_32051_34902 = state_32025__$1;
(statearr_32051_34902[(2)] = inst_32021);

(statearr_32051_34902[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__34879,c__31472__auto___34896,G__31876_34880,G__31876_34881__$1,n__5616__auto___34878,jobs,results,process__$1,async))
;
return ((function (__34879,switch__31277__auto__,c__31472__auto___34896,G__31876_34880,G__31876_34881__$1,n__5616__auto___34878,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0 = (function (){
var statearr_32069 = [null,null,null,null,null,null,null];
(statearr_32069[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__);

(statearr_32069[(1)] = (1));

return statearr_32069;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1 = (function (state_32025){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_32025);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e32077){var ex__31281__auto__ = e32077;
var statearr_32082_34912 = state_32025;
(statearr_32082_34912[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_32025[(4)]))){
var statearr_32088_34914 = state_32025;
(statearr_32088_34914[(1)] = cljs.core.first((state_32025[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34915 = state_32025;
state_32025 = G__34915;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__ = function(state_32025){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1.call(this,state_32025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__;
})()
;})(__34879,switch__31277__auto__,c__31472__auto___34896,G__31876_34880,G__31876_34881__$1,n__5616__auto___34878,jobs,results,process__$1,async))
})();
var state__31474__auto__ = (function (){var statearr_32095 = f__31473__auto__();
(statearr_32095[(6)] = c__31472__auto___34896);

return statearr_32095;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
});})(__34879,c__31472__auto___34896,G__31876_34880,G__31876_34881__$1,n__5616__auto___34878,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31876_34881__$1)].join('')));

}

var G__34916 = (__34879 + (1));
__34879 = G__34916;
continue;
} else {
}
break;
}

var c__31472__auto___34918 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_32134){
var state_val_32137 = (state_32134[(1)]);
if((state_val_32137 === (7))){
var inst_32120 = (state_32134[(2)]);
var state_32134__$1 = state_32134;
var statearr_32152_34923 = state_32134__$1;
(statearr_32152_34923[(2)] = inst_32120);

(statearr_32152_34923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (1))){
var state_32134__$1 = state_32134;
var statearr_32155_34924 = state_32134__$1;
(statearr_32155_34924[(2)] = null);

(statearr_32155_34924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (4))){
var inst_32100 = (state_32134[(7)]);
var inst_32100__$1 = (state_32134[(2)]);
var inst_32101 = (inst_32100__$1 == null);
var state_32134__$1 = (function (){var statearr_32156 = state_32134;
(statearr_32156[(7)] = inst_32100__$1);

return statearr_32156;
})();
if(cljs.core.truth_(inst_32101)){
var statearr_32157_34925 = state_32134__$1;
(statearr_32157_34925[(1)] = (5));

} else {
var statearr_32158_34926 = state_32134__$1;
(statearr_32158_34926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (6))){
var inst_32100 = (state_32134[(7)]);
var inst_32107 = (state_32134[(8)]);
var inst_32107__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_32109 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32111 = [inst_32100,inst_32107__$1];
var inst_32112 = (new cljs.core.PersistentVector(null,2,(5),inst_32109,inst_32111,null));
var state_32134__$1 = (function (){var statearr_32165 = state_32134;
(statearr_32165[(8)] = inst_32107__$1);

return statearr_32165;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32134__$1,(8),jobs,inst_32112);
} else {
if((state_val_32137 === (3))){
var inst_32122 = (state_32134[(2)]);
var state_32134__$1 = state_32134;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32134__$1,inst_32122);
} else {
if((state_val_32137 === (2))){
var state_32134__$1 = state_32134;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32134__$1,(4),from);
} else {
if((state_val_32137 === (9))){
var inst_32116 = (state_32134[(2)]);
var state_32134__$1 = (function (){var statearr_32166 = state_32134;
(statearr_32166[(9)] = inst_32116);

return statearr_32166;
})();
var statearr_32167_34927 = state_32134__$1;
(statearr_32167_34927[(2)] = null);

(statearr_32167_34927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (5))){
var inst_32104 = cljs.core.async.close_BANG_(jobs);
var state_32134__$1 = state_32134;
var statearr_32169_34928 = state_32134__$1;
(statearr_32169_34928[(2)] = inst_32104);

(statearr_32169_34928[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32137 === (8))){
var inst_32107 = (state_32134[(8)]);
var inst_32114 = (state_32134[(2)]);
var state_32134__$1 = (function (){var statearr_32173 = state_32134;
(statearr_32173[(10)] = inst_32114);

return statearr_32173;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32134__$1,(9),results,inst_32107);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0 = (function (){
var statearr_32174 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32174[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__);

(statearr_32174[(1)] = (1));

return statearr_32174;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1 = (function (state_32134){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_32134);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e32175){var ex__31281__auto__ = e32175;
var statearr_32176_34929 = state_32134;
(statearr_32176_34929[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_32134[(4)]))){
var statearr_32177_34930 = state_32134;
(statearr_32177_34930[(1)] = cljs.core.first((state_32134[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34934 = state_32134;
state_32134 = G__34934;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__ = function(state_32134){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1.call(this,state_32134);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_32181 = f__31473__auto__();
(statearr_32181[(6)] = c__31472__auto___34918);

return statearr_32181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


var c__31472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_32226){
var state_val_32227 = (state_32226[(1)]);
if((state_val_32227 === (7))){
var inst_32222 = (state_32226[(2)]);
var state_32226__$1 = state_32226;
var statearr_32228_34935 = state_32226__$1;
(statearr_32228_34935[(2)] = inst_32222);

(statearr_32228_34935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (20))){
var state_32226__$1 = state_32226;
var statearr_32229_34936 = state_32226__$1;
(statearr_32229_34936[(2)] = null);

(statearr_32229_34936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (1))){
var state_32226__$1 = state_32226;
var statearr_32230_34937 = state_32226__$1;
(statearr_32230_34937[(2)] = null);

(statearr_32230_34937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (4))){
var inst_32188 = (state_32226[(7)]);
var inst_32188__$1 = (state_32226[(2)]);
var inst_32189 = (inst_32188__$1 == null);
var state_32226__$1 = (function (){var statearr_32232 = state_32226;
(statearr_32232[(7)] = inst_32188__$1);

return statearr_32232;
})();
if(cljs.core.truth_(inst_32189)){
var statearr_32233_34938 = state_32226__$1;
(statearr_32233_34938[(1)] = (5));

} else {
var statearr_32234_34939 = state_32226__$1;
(statearr_32234_34939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (15))){
var inst_32204 = (state_32226[(8)]);
var state_32226__$1 = state_32226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32226__$1,(18),to,inst_32204);
} else {
if((state_val_32227 === (21))){
var inst_32217 = (state_32226[(2)]);
var state_32226__$1 = state_32226;
var statearr_32235_34940 = state_32226__$1;
(statearr_32235_34940[(2)] = inst_32217);

(statearr_32235_34940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (13))){
var inst_32219 = (state_32226[(2)]);
var state_32226__$1 = (function (){var statearr_32239 = state_32226;
(statearr_32239[(9)] = inst_32219);

return statearr_32239;
})();
var statearr_32240_34941 = state_32226__$1;
(statearr_32240_34941[(2)] = null);

(statearr_32240_34941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (6))){
var inst_32188 = (state_32226[(7)]);
var state_32226__$1 = state_32226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32226__$1,(11),inst_32188);
} else {
if((state_val_32227 === (17))){
var inst_32212 = (state_32226[(2)]);
var state_32226__$1 = state_32226;
if(cljs.core.truth_(inst_32212)){
var statearr_32241_34942 = state_32226__$1;
(statearr_32241_34942[(1)] = (19));

} else {
var statearr_32242_34943 = state_32226__$1;
(statearr_32242_34943[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (3))){
var inst_32224 = (state_32226[(2)]);
var state_32226__$1 = state_32226;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32226__$1,inst_32224);
} else {
if((state_val_32227 === (12))){
var inst_32201 = (state_32226[(10)]);
var state_32226__$1 = state_32226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32226__$1,(14),inst_32201);
} else {
if((state_val_32227 === (2))){
var state_32226__$1 = state_32226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32226__$1,(4),results);
} else {
if((state_val_32227 === (19))){
var state_32226__$1 = state_32226;
var statearr_32243_34945 = state_32226__$1;
(statearr_32243_34945[(2)] = null);

(statearr_32243_34945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (11))){
var inst_32201 = (state_32226[(2)]);
var state_32226__$1 = (function (){var statearr_32247 = state_32226;
(statearr_32247[(10)] = inst_32201);

return statearr_32247;
})();
var statearr_32248_34947 = state_32226__$1;
(statearr_32248_34947[(2)] = null);

(statearr_32248_34947[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (9))){
var state_32226__$1 = state_32226;
var statearr_32249_34948 = state_32226__$1;
(statearr_32249_34948[(2)] = null);

(statearr_32249_34948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (5))){
var state_32226__$1 = state_32226;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32250_34949 = state_32226__$1;
(statearr_32250_34949[(1)] = (8));

} else {
var statearr_32251_34950 = state_32226__$1;
(statearr_32251_34950[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (14))){
var inst_32204 = (state_32226[(8)]);
var inst_32206 = (state_32226[(11)]);
var inst_32204__$1 = (state_32226[(2)]);
var inst_32205 = (inst_32204__$1 == null);
var inst_32206__$1 = cljs.core.not(inst_32205);
var state_32226__$1 = (function (){var statearr_32252 = state_32226;
(statearr_32252[(8)] = inst_32204__$1);

(statearr_32252[(11)] = inst_32206__$1);

return statearr_32252;
})();
if(inst_32206__$1){
var statearr_32253_34951 = state_32226__$1;
(statearr_32253_34951[(1)] = (15));

} else {
var statearr_32254_34952 = state_32226__$1;
(statearr_32254_34952[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (16))){
var inst_32206 = (state_32226[(11)]);
var state_32226__$1 = state_32226;
var statearr_32255_34953 = state_32226__$1;
(statearr_32255_34953[(2)] = inst_32206);

(statearr_32255_34953[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (10))){
var inst_32198 = (state_32226[(2)]);
var state_32226__$1 = state_32226;
var statearr_32256_34954 = state_32226__$1;
(statearr_32256_34954[(2)] = inst_32198);

(statearr_32256_34954[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (18))){
var inst_32209 = (state_32226[(2)]);
var state_32226__$1 = state_32226;
var statearr_32257_34956 = state_32226__$1;
(statearr_32257_34956[(2)] = inst_32209);

(statearr_32257_34956[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32227 === (8))){
var inst_32195 = cljs.core.async.close_BANG_(to);
var state_32226__$1 = state_32226;
var statearr_32258_34957 = state_32226__$1;
(statearr_32258_34957[(2)] = inst_32195);

(statearr_32258_34957[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0 = (function (){
var statearr_32259 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32259[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__);

(statearr_32259[(1)] = (1));

return statearr_32259;
});
var cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1 = (function (state_32226){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_32226);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e32260){var ex__31281__auto__ = e32260;
var statearr_32261_34961 = state_32226;
(statearr_32261_34961[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_32226[(4)]))){
var statearr_32262_34962 = state_32226;
(statearr_32262_34962[(1)] = cljs.core.first((state_32226[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34965 = state_32226;
state_32226 = G__34965;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__ = function(state_32226){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1.call(this,state_32226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__31278__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_32263 = f__31473__auto__();
(statearr_32263[(6)] = c__31472__auto__);

return statearr_32263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));

return c__31472__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32269 = arguments.length;
switch (G__32269) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32305 = arguments.length;
switch (G__32305) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32318 = arguments.length;
switch (G__32318) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__31472__auto___34974 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_32353){
var state_val_32354 = (state_32353[(1)]);
if((state_val_32354 === (7))){
var inst_32349 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32364_34975 = state_32353__$1;
(statearr_32364_34975[(2)] = inst_32349);

(statearr_32364_34975[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (1))){
var state_32353__$1 = state_32353;
var statearr_32365_34976 = state_32353__$1;
(statearr_32365_34976[(2)] = null);

(statearr_32365_34976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (4))){
var inst_32330 = (state_32353[(7)]);
var inst_32330__$1 = (state_32353[(2)]);
var inst_32331 = (inst_32330__$1 == null);
var state_32353__$1 = (function (){var statearr_32366 = state_32353;
(statearr_32366[(7)] = inst_32330__$1);

return statearr_32366;
})();
if(cljs.core.truth_(inst_32331)){
var statearr_32369_34977 = state_32353__$1;
(statearr_32369_34977[(1)] = (5));

} else {
var statearr_32371_34978 = state_32353__$1;
(statearr_32371_34978[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (13))){
var state_32353__$1 = state_32353;
var statearr_32374_34979 = state_32353__$1;
(statearr_32374_34979[(2)] = null);

(statearr_32374_34979[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (6))){
var inst_32330 = (state_32353[(7)]);
var inst_32336 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_32330) : p.call(null,inst_32330));
var state_32353__$1 = state_32353;
if(cljs.core.truth_(inst_32336)){
var statearr_32377_34980 = state_32353__$1;
(statearr_32377_34980[(1)] = (9));

} else {
var statearr_32378_34981 = state_32353__$1;
(statearr_32378_34981[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (3))){
var inst_32351 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32353__$1,inst_32351);
} else {
if((state_val_32354 === (12))){
var state_32353__$1 = state_32353;
var statearr_32379_34982 = state_32353__$1;
(statearr_32379_34982[(2)] = null);

(statearr_32379_34982[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (2))){
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32353__$1,(4),ch);
} else {
if((state_val_32354 === (11))){
var inst_32330 = (state_32353[(7)]);
var inst_32340 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32353__$1,(8),inst_32340,inst_32330);
} else {
if((state_val_32354 === (9))){
var state_32353__$1 = state_32353;
var statearr_32384_34985 = state_32353__$1;
(statearr_32384_34985[(2)] = tc);

(statearr_32384_34985[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (5))){
var inst_32333 = cljs.core.async.close_BANG_(tc);
var inst_32334 = cljs.core.async.close_BANG_(fc);
var state_32353__$1 = (function (){var statearr_32385 = state_32353;
(statearr_32385[(8)] = inst_32333);

return statearr_32385;
})();
var statearr_32386_34998 = state_32353__$1;
(statearr_32386_34998[(2)] = inst_32334);

(statearr_32386_34998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (14))){
var inst_32347 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
var statearr_32387_35002 = state_32353__$1;
(statearr_32387_35002[(2)] = inst_32347);

(statearr_32387_35002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (10))){
var state_32353__$1 = state_32353;
var statearr_32388_35003 = state_32353__$1;
(statearr_32388_35003[(2)] = fc);

(statearr_32388_35003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32354 === (8))){
var inst_32342 = (state_32353[(2)]);
var state_32353__$1 = state_32353;
if(cljs.core.truth_(inst_32342)){
var statearr_32389_35004 = state_32353__$1;
(statearr_32389_35004[(1)] = (12));

} else {
var statearr_32390_35006 = state_32353__$1;
(statearr_32390_35006[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31278__auto__ = null;
var cljs$core$async$state_machine__31278__auto____0 = (function (){
var statearr_32391 = [null,null,null,null,null,null,null,null,null];
(statearr_32391[(0)] = cljs$core$async$state_machine__31278__auto__);

(statearr_32391[(1)] = (1));

return statearr_32391;
});
var cljs$core$async$state_machine__31278__auto____1 = (function (state_32353){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_32353);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e32393){var ex__31281__auto__ = e32393;
var statearr_32394_35019 = state_32353;
(statearr_32394_35019[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_32353[(4)]))){
var statearr_32395_35020 = state_32353;
(statearr_32395_35020[(1)] = cljs.core.first((state_32353[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35029 = state_32353;
state_32353 = G__35029;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$state_machine__31278__auto__ = function(state_32353){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31278__auto____1.call(this,state_32353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31278__auto____0;
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31278__auto____1;
return cljs$core$async$state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_32400 = f__31473__auto__();
(statearr_32400[(6)] = c__31472__auto___34974);

return statearr_32400;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__31472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_32430){
var state_val_32431 = (state_32430[(1)]);
if((state_val_32431 === (7))){
var inst_32419 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
var statearr_32455_35067 = state_32430__$1;
(statearr_32455_35067[(2)] = inst_32419);

(statearr_32455_35067[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (1))){
var inst_32401 = init;
var inst_32402 = inst_32401;
var state_32430__$1 = (function (){var statearr_32462 = state_32430;
(statearr_32462[(7)] = inst_32402);

return statearr_32462;
})();
var statearr_32466_35068 = state_32430__$1;
(statearr_32466_35068[(2)] = null);

(statearr_32466_35068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (4))){
var inst_32405 = (state_32430[(8)]);
var inst_32405__$1 = (state_32430[(2)]);
var inst_32406 = (inst_32405__$1 == null);
var state_32430__$1 = (function (){var statearr_32469 = state_32430;
(statearr_32469[(8)] = inst_32405__$1);

return statearr_32469;
})();
if(cljs.core.truth_(inst_32406)){
var statearr_32470_35069 = state_32430__$1;
(statearr_32470_35069[(1)] = (5));

} else {
var statearr_32471_35070 = state_32430__$1;
(statearr_32471_35070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (6))){
var inst_32402 = (state_32430[(7)]);
var inst_32405 = (state_32430[(8)]);
var inst_32409 = (state_32430[(9)]);
var inst_32409__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_32402,inst_32405) : f.call(null,inst_32402,inst_32405));
var inst_32411 = cljs.core.reduced_QMARK_(inst_32409__$1);
var state_32430__$1 = (function (){var statearr_32484 = state_32430;
(statearr_32484[(9)] = inst_32409__$1);

return statearr_32484;
})();
if(inst_32411){
var statearr_32494_35071 = state_32430__$1;
(statearr_32494_35071[(1)] = (8));

} else {
var statearr_32495_35072 = state_32430__$1;
(statearr_32495_35072[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (3))){
var inst_32422 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32430__$1,inst_32422);
} else {
if((state_val_32431 === (2))){
var state_32430__$1 = state_32430;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32430__$1,(4),ch);
} else {
if((state_val_32431 === (9))){
var inst_32409 = (state_32430[(9)]);
var inst_32402 = inst_32409;
var state_32430__$1 = (function (){var statearr_32518 = state_32430;
(statearr_32518[(7)] = inst_32402);

return statearr_32518;
})();
var statearr_32529_35095 = state_32430__$1;
(statearr_32529_35095[(2)] = null);

(statearr_32529_35095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (5))){
var inst_32402 = (state_32430[(7)]);
var state_32430__$1 = state_32430;
var statearr_32542_35096 = state_32430__$1;
(statearr_32542_35096[(2)] = inst_32402);

(statearr_32542_35096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (10))){
var inst_32417 = (state_32430[(2)]);
var state_32430__$1 = state_32430;
var statearr_32544_35097 = state_32430__$1;
(statearr_32544_35097[(2)] = inst_32417);

(statearr_32544_35097[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32431 === (8))){
var inst_32409 = (state_32430[(9)]);
var inst_32413 = cljs.core.deref(inst_32409);
var state_32430__$1 = state_32430;
var statearr_32546_35098 = state_32430__$1;
(statearr_32546_35098[(2)] = inst_32413);

(statearr_32546_35098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__31278__auto__ = null;
var cljs$core$async$reduce_$_state_machine__31278__auto____0 = (function (){
var statearr_32548 = [null,null,null,null,null,null,null,null,null,null];
(statearr_32548[(0)] = cljs$core$async$reduce_$_state_machine__31278__auto__);

(statearr_32548[(1)] = (1));

return statearr_32548;
});
var cljs$core$async$reduce_$_state_machine__31278__auto____1 = (function (state_32430){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_32430);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e32567){var ex__31281__auto__ = e32567;
var statearr_32568_35099 = state_32430;
(statearr_32568_35099[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_32430[(4)]))){
var statearr_32570_35100 = state_32430;
(statearr_32570_35100[(1)] = cljs.core.first((state_32430[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35101 = state_32430;
state_32430 = G__35101;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__31278__auto__ = function(state_32430){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__31278__auto____1.call(this,state_32430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__31278__auto____0;
cljs$core$async$reduce_$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__31278__auto____1;
return cljs$core$async$reduce_$_state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_32579 = f__31473__auto__();
(statearr_32579[(6)] = c__31472__auto__);

return statearr_32579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));

return c__31472__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__31472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_32591){
var state_val_32592 = (state_32591[(1)]);
if((state_val_32592 === (1))){
var inst_32586 = cljs.core.async.reduce(f__$1,init,ch);
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32591__$1,(2),inst_32586);
} else {
if((state_val_32592 === (2))){
var inst_32588 = (state_32591[(2)]);
var inst_32589 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_32588) : f__$1.call(null,inst_32588));
var state_32591__$1 = state_32591;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32591__$1,inst_32589);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__31278__auto__ = null;
var cljs$core$async$transduce_$_state_machine__31278__auto____0 = (function (){
var statearr_32593 = [null,null,null,null,null,null,null];
(statearr_32593[(0)] = cljs$core$async$transduce_$_state_machine__31278__auto__);

(statearr_32593[(1)] = (1));

return statearr_32593;
});
var cljs$core$async$transduce_$_state_machine__31278__auto____1 = (function (state_32591){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_32591);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e32594){var ex__31281__auto__ = e32594;
var statearr_32595_35104 = state_32591;
(statearr_32595_35104[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_32591[(4)]))){
var statearr_32596_35105 = state_32591;
(statearr_32596_35105[(1)] = cljs.core.first((state_32591[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35109 = state_32591;
state_32591 = G__35109;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__31278__auto__ = function(state_32591){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__31278__auto____1.call(this,state_32591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__31278__auto____0;
cljs$core$async$transduce_$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__31278__auto____1;
return cljs$core$async$transduce_$_state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_32598 = f__31473__auto__();
(statearr_32598[(6)] = c__31472__auto__);

return statearr_32598;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));

return c__31472__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__32600 = arguments.length;
switch (G__32600) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__31472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_32625){
var state_val_32626 = (state_32625[(1)]);
if((state_val_32626 === (7))){
var inst_32607 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
var statearr_32627_35125 = state_32625__$1;
(statearr_32627_35125[(2)] = inst_32607);

(statearr_32627_35125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (1))){
var inst_32601 = cljs.core.seq(coll);
var inst_32602 = inst_32601;
var state_32625__$1 = (function (){var statearr_32628 = state_32625;
(statearr_32628[(7)] = inst_32602);

return statearr_32628;
})();
var statearr_32629_35126 = state_32625__$1;
(statearr_32629_35126[(2)] = null);

(statearr_32629_35126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (4))){
var inst_32602 = (state_32625[(7)]);
var inst_32605 = cljs.core.first(inst_32602);
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_32625__$1,(7),ch,inst_32605);
} else {
if((state_val_32626 === (13))){
var inst_32619 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
var statearr_32630_35129 = state_32625__$1;
(statearr_32630_35129[(2)] = inst_32619);

(statearr_32630_35129[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (6))){
var inst_32610 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
if(cljs.core.truth_(inst_32610)){
var statearr_32631_35131 = state_32625__$1;
(statearr_32631_35131[(1)] = (8));

} else {
var statearr_32632_35132 = state_32625__$1;
(statearr_32632_35132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (3))){
var inst_32623 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32625__$1,inst_32623);
} else {
if((state_val_32626 === (12))){
var state_32625__$1 = state_32625;
var statearr_32633_35134 = state_32625__$1;
(statearr_32633_35134[(2)] = null);

(statearr_32633_35134[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (2))){
var inst_32602 = (state_32625[(7)]);
var state_32625__$1 = state_32625;
if(cljs.core.truth_(inst_32602)){
var statearr_32634_35139 = state_32625__$1;
(statearr_32634_35139[(1)] = (4));

} else {
var statearr_32636_35140 = state_32625__$1;
(statearr_32636_35140[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (11))){
var inst_32616 = cljs.core.async.close_BANG_(ch);
var state_32625__$1 = state_32625;
var statearr_32637_35141 = state_32625__$1;
(statearr_32637_35141[(2)] = inst_32616);

(statearr_32637_35141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (9))){
var state_32625__$1 = state_32625;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32638_35142 = state_32625__$1;
(statearr_32638_35142[(1)] = (11));

} else {
var statearr_32639_35143 = state_32625__$1;
(statearr_32639_35143[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (5))){
var inst_32602 = (state_32625[(7)]);
var state_32625__$1 = state_32625;
var statearr_32641_35144 = state_32625__$1;
(statearr_32641_35144[(2)] = inst_32602);

(statearr_32641_35144[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (10))){
var inst_32621 = (state_32625[(2)]);
var state_32625__$1 = state_32625;
var statearr_32643_35145 = state_32625__$1;
(statearr_32643_35145[(2)] = inst_32621);

(statearr_32643_35145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32626 === (8))){
var inst_32602 = (state_32625[(7)]);
var inst_32612 = cljs.core.next(inst_32602);
var inst_32602__$1 = inst_32612;
var state_32625__$1 = (function (){var statearr_32645 = state_32625;
(statearr_32645[(7)] = inst_32602__$1);

return statearr_32645;
})();
var statearr_32646_35146 = state_32625__$1;
(statearr_32646_35146[(2)] = null);

(statearr_32646_35146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31278__auto__ = null;
var cljs$core$async$state_machine__31278__auto____0 = (function (){
var statearr_32648 = [null,null,null,null,null,null,null,null];
(statearr_32648[(0)] = cljs$core$async$state_machine__31278__auto__);

(statearr_32648[(1)] = (1));

return statearr_32648;
});
var cljs$core$async$state_machine__31278__auto____1 = (function (state_32625){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_32625);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e32649){var ex__31281__auto__ = e32649;
var statearr_32650_35147 = state_32625;
(statearr_32650_35147[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_32625[(4)]))){
var statearr_32654_35148 = state_32625;
(statearr_32654_35148[(1)] = cljs.core.first((state_32625[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35149 = state_32625;
state_32625 = G__35149;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$state_machine__31278__auto__ = function(state_32625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31278__auto____1.call(this,state_32625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31278__auto____0;
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31278__auto____1;
return cljs$core$async$state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_32655 = f__31473__auto__();
(statearr_32655[(6)] = c__31472__auto__);

return statearr_32655;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));

return c__31472__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__32660 = arguments.length;
switch (G__32660) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35152 = (function (_){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5374__auto__.call(null,_));
} else {
var m__5372__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5372__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35152(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35163 = (function (m,ch,close_QMARK_){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5374__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5372__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35163(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35164 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35164(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35165 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35165(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32678 = (function (ch,cs,meta32679){
this.ch = ch;
this.cs = cs;
this.meta32679 = meta32679;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32680,meta32679__$1){
var self__ = this;
var _32680__$1 = this;
return (new cljs.core.async.t_cljs$core$async32678(self__.ch,self__.cs,meta32679__$1));
}));

(cljs.core.async.t_cljs$core$async32678.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32680){
var self__ = this;
var _32680__$1 = this;
return self__.meta32679;
}));

(cljs.core.async.t_cljs$core$async32678.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32678.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async32678.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32678.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async32678.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async32678.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async32678.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta32679","meta32679",-851779968,null)], null);
}));

(cljs.core.async.t_cljs$core$async32678.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32678.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32678");

(cljs.core.async.t_cljs$core$async32678.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32678");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32678.
 */
cljs.core.async.__GT_t_cljs$core$async32678 = (function cljs$core$async$__GT_t_cljs$core$async32678(ch,cs,meta32679){
return (new cljs.core.async.t_cljs$core$async32678(ch,cs,meta32679));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async32678(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__31472__auto___35176 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_32820){
var state_val_32821 = (state_32820[(1)]);
if((state_val_32821 === (7))){
var inst_32815 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32822_35179 = state_32820__$1;
(statearr_32822_35179[(2)] = inst_32815);

(statearr_32822_35179[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (20))){
var inst_32719 = (state_32820[(7)]);
var inst_32731 = cljs.core.first(inst_32719);
var inst_32732 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32731,(0),null);
var inst_32733 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32731,(1),null);
var state_32820__$1 = (function (){var statearr_32823 = state_32820;
(statearr_32823[(8)] = inst_32732);

return statearr_32823;
})();
if(cljs.core.truth_(inst_32733)){
var statearr_32824_35180 = state_32820__$1;
(statearr_32824_35180[(1)] = (22));

} else {
var statearr_32825_35181 = state_32820__$1;
(statearr_32825_35181[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (27))){
var inst_32761 = (state_32820[(9)]);
var inst_32763 = (state_32820[(10)]);
var inst_32769 = (state_32820[(11)]);
var inst_32687 = (state_32820[(12)]);
var inst_32769__$1 = cljs.core._nth(inst_32761,inst_32763);
var inst_32770 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32769__$1,inst_32687,done);
var state_32820__$1 = (function (){var statearr_32828 = state_32820;
(statearr_32828[(11)] = inst_32769__$1);

return statearr_32828;
})();
if(cljs.core.truth_(inst_32770)){
var statearr_32829_35186 = state_32820__$1;
(statearr_32829_35186[(1)] = (30));

} else {
var statearr_32830_35199 = state_32820__$1;
(statearr_32830_35199[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (1))){
var state_32820__$1 = state_32820;
var statearr_32831_35200 = state_32820__$1;
(statearr_32831_35200[(2)] = null);

(statearr_32831_35200[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (24))){
var inst_32719 = (state_32820[(7)]);
var inst_32738 = (state_32820[(2)]);
var inst_32739 = cljs.core.next(inst_32719);
var inst_32696 = inst_32739;
var inst_32697 = null;
var inst_32698 = (0);
var inst_32699 = (0);
var state_32820__$1 = (function (){var statearr_32832 = state_32820;
(statearr_32832[(13)] = inst_32738);

(statearr_32832[(14)] = inst_32696);

(statearr_32832[(15)] = inst_32697);

(statearr_32832[(16)] = inst_32698);

(statearr_32832[(17)] = inst_32699);

return statearr_32832;
})();
var statearr_32833_35201 = state_32820__$1;
(statearr_32833_35201[(2)] = null);

(statearr_32833_35201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (39))){
var state_32820__$1 = state_32820;
var statearr_32841_35212 = state_32820__$1;
(statearr_32841_35212[(2)] = null);

(statearr_32841_35212[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (4))){
var inst_32687 = (state_32820[(12)]);
var inst_32687__$1 = (state_32820[(2)]);
var inst_32688 = (inst_32687__$1 == null);
var state_32820__$1 = (function (){var statearr_32842 = state_32820;
(statearr_32842[(12)] = inst_32687__$1);

return statearr_32842;
})();
if(cljs.core.truth_(inst_32688)){
var statearr_32843_35213 = state_32820__$1;
(statearr_32843_35213[(1)] = (5));

} else {
var statearr_32844_35214 = state_32820__$1;
(statearr_32844_35214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (15))){
var inst_32699 = (state_32820[(17)]);
var inst_32696 = (state_32820[(14)]);
var inst_32697 = (state_32820[(15)]);
var inst_32698 = (state_32820[(16)]);
var inst_32715 = (state_32820[(2)]);
var inst_32716 = (inst_32699 + (1));
var tmp32834 = inst_32697;
var tmp32835 = inst_32696;
var tmp32836 = inst_32698;
var inst_32696__$1 = tmp32835;
var inst_32697__$1 = tmp32834;
var inst_32698__$1 = tmp32836;
var inst_32699__$1 = inst_32716;
var state_32820__$1 = (function (){var statearr_32845 = state_32820;
(statearr_32845[(18)] = inst_32715);

(statearr_32845[(14)] = inst_32696__$1);

(statearr_32845[(15)] = inst_32697__$1);

(statearr_32845[(16)] = inst_32698__$1);

(statearr_32845[(17)] = inst_32699__$1);

return statearr_32845;
})();
var statearr_32847_35230 = state_32820__$1;
(statearr_32847_35230[(2)] = null);

(statearr_32847_35230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (21))){
var inst_32742 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32852_35231 = state_32820__$1;
(statearr_32852_35231[(2)] = inst_32742);

(statearr_32852_35231[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (31))){
var inst_32769 = (state_32820[(11)]);
var inst_32773 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32769);
var state_32820__$1 = state_32820;
var statearr_32855_35241 = state_32820__$1;
(statearr_32855_35241[(2)] = inst_32773);

(statearr_32855_35241[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (32))){
var inst_32763 = (state_32820[(10)]);
var inst_32760 = (state_32820[(19)]);
var inst_32761 = (state_32820[(9)]);
var inst_32762 = (state_32820[(20)]);
var inst_32775 = (state_32820[(2)]);
var inst_32776 = (inst_32763 + (1));
var tmp32848 = inst_32761;
var tmp32849 = inst_32760;
var tmp32850 = inst_32762;
var inst_32760__$1 = tmp32849;
var inst_32761__$1 = tmp32848;
var inst_32762__$1 = tmp32850;
var inst_32763__$1 = inst_32776;
var state_32820__$1 = (function (){var statearr_32857 = state_32820;
(statearr_32857[(21)] = inst_32775);

(statearr_32857[(19)] = inst_32760__$1);

(statearr_32857[(9)] = inst_32761__$1);

(statearr_32857[(20)] = inst_32762__$1);

(statearr_32857[(10)] = inst_32763__$1);

return statearr_32857;
})();
var statearr_32858_35258 = state_32820__$1;
(statearr_32858_35258[(2)] = null);

(statearr_32858_35258[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (40))){
var inst_32788 = (state_32820[(22)]);
var inst_32792 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_32788);
var state_32820__$1 = state_32820;
var statearr_32859_35259 = state_32820__$1;
(statearr_32859_35259[(2)] = inst_32792);

(statearr_32859_35259[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (33))){
var inst_32779 = (state_32820[(23)]);
var inst_32781 = cljs.core.chunked_seq_QMARK_(inst_32779);
var state_32820__$1 = state_32820;
if(inst_32781){
var statearr_32861_35260 = state_32820__$1;
(statearr_32861_35260[(1)] = (36));

} else {
var statearr_32862_35261 = state_32820__$1;
(statearr_32862_35261[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (13))){
var inst_32709 = (state_32820[(24)]);
var inst_32712 = cljs.core.async.close_BANG_(inst_32709);
var state_32820__$1 = state_32820;
var statearr_32863_35262 = state_32820__$1;
(statearr_32863_35262[(2)] = inst_32712);

(statearr_32863_35262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (22))){
var inst_32732 = (state_32820[(8)]);
var inst_32735 = cljs.core.async.close_BANG_(inst_32732);
var state_32820__$1 = state_32820;
var statearr_32864_35263 = state_32820__$1;
(statearr_32864_35263[(2)] = inst_32735);

(statearr_32864_35263[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (36))){
var inst_32779 = (state_32820[(23)]);
var inst_32783 = cljs.core.chunk_first(inst_32779);
var inst_32784 = cljs.core.chunk_rest(inst_32779);
var inst_32785 = cljs.core.count(inst_32783);
var inst_32760 = inst_32784;
var inst_32761 = inst_32783;
var inst_32762 = inst_32785;
var inst_32763 = (0);
var state_32820__$1 = (function (){var statearr_32865 = state_32820;
(statearr_32865[(19)] = inst_32760);

(statearr_32865[(9)] = inst_32761);

(statearr_32865[(20)] = inst_32762);

(statearr_32865[(10)] = inst_32763);

return statearr_32865;
})();
var statearr_32866_35264 = state_32820__$1;
(statearr_32866_35264[(2)] = null);

(statearr_32866_35264[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (41))){
var inst_32779 = (state_32820[(23)]);
var inst_32794 = (state_32820[(2)]);
var inst_32795 = cljs.core.next(inst_32779);
var inst_32760 = inst_32795;
var inst_32761 = null;
var inst_32762 = (0);
var inst_32763 = (0);
var state_32820__$1 = (function (){var statearr_32868 = state_32820;
(statearr_32868[(25)] = inst_32794);

(statearr_32868[(19)] = inst_32760);

(statearr_32868[(9)] = inst_32761);

(statearr_32868[(20)] = inst_32762);

(statearr_32868[(10)] = inst_32763);

return statearr_32868;
})();
var statearr_32869_35265 = state_32820__$1;
(statearr_32869_35265[(2)] = null);

(statearr_32869_35265[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (43))){
var state_32820__$1 = state_32820;
var statearr_32870_35266 = state_32820__$1;
(statearr_32870_35266[(2)] = null);

(statearr_32870_35266[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (29))){
var inst_32803 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32872_35267 = state_32820__$1;
(statearr_32872_35267[(2)] = inst_32803);

(statearr_32872_35267[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (44))){
var inst_32812 = (state_32820[(2)]);
var state_32820__$1 = (function (){var statearr_32874 = state_32820;
(statearr_32874[(26)] = inst_32812);

return statearr_32874;
})();
var statearr_32875_35274 = state_32820__$1;
(statearr_32875_35274[(2)] = null);

(statearr_32875_35274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (6))){
var inst_32752 = (state_32820[(27)]);
var inst_32751 = cljs.core.deref(cs);
var inst_32752__$1 = cljs.core.keys(inst_32751);
var inst_32753 = cljs.core.count(inst_32752__$1);
var inst_32754 = cljs.core.reset_BANG_(dctr,inst_32753);
var inst_32759 = cljs.core.seq(inst_32752__$1);
var inst_32760 = inst_32759;
var inst_32761 = null;
var inst_32762 = (0);
var inst_32763 = (0);
var state_32820__$1 = (function (){var statearr_32878 = state_32820;
(statearr_32878[(27)] = inst_32752__$1);

(statearr_32878[(28)] = inst_32754);

(statearr_32878[(19)] = inst_32760);

(statearr_32878[(9)] = inst_32761);

(statearr_32878[(20)] = inst_32762);

(statearr_32878[(10)] = inst_32763);

return statearr_32878;
})();
var statearr_32879_35281 = state_32820__$1;
(statearr_32879_35281[(2)] = null);

(statearr_32879_35281[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (28))){
var inst_32760 = (state_32820[(19)]);
var inst_32779 = (state_32820[(23)]);
var inst_32779__$1 = cljs.core.seq(inst_32760);
var state_32820__$1 = (function (){var statearr_32881 = state_32820;
(statearr_32881[(23)] = inst_32779__$1);

return statearr_32881;
})();
if(inst_32779__$1){
var statearr_32882_35284 = state_32820__$1;
(statearr_32882_35284[(1)] = (33));

} else {
var statearr_32883_35285 = state_32820__$1;
(statearr_32883_35285[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (25))){
var inst_32763 = (state_32820[(10)]);
var inst_32762 = (state_32820[(20)]);
var inst_32766 = (inst_32763 < inst_32762);
var inst_32767 = inst_32766;
var state_32820__$1 = state_32820;
if(cljs.core.truth_(inst_32767)){
var statearr_32884_35286 = state_32820__$1;
(statearr_32884_35286[(1)] = (27));

} else {
var statearr_32885_35287 = state_32820__$1;
(statearr_32885_35287[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (34))){
var state_32820__$1 = state_32820;
var statearr_32886_35288 = state_32820__$1;
(statearr_32886_35288[(2)] = null);

(statearr_32886_35288[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (17))){
var state_32820__$1 = state_32820;
var statearr_32887_35289 = state_32820__$1;
(statearr_32887_35289[(2)] = null);

(statearr_32887_35289[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (3))){
var inst_32817 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32820__$1,inst_32817);
} else {
if((state_val_32821 === (12))){
var inst_32747 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32888_35291 = state_32820__$1;
(statearr_32888_35291[(2)] = inst_32747);

(statearr_32888_35291[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (2))){
var state_32820__$1 = state_32820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32820__$1,(4),ch);
} else {
if((state_val_32821 === (23))){
var state_32820__$1 = state_32820;
var statearr_32889_35292 = state_32820__$1;
(statearr_32889_35292[(2)] = null);

(statearr_32889_35292[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (35))){
var inst_32801 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32890_35294 = state_32820__$1;
(statearr_32890_35294[(2)] = inst_32801);

(statearr_32890_35294[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (19))){
var inst_32719 = (state_32820[(7)]);
var inst_32723 = cljs.core.chunk_first(inst_32719);
var inst_32724 = cljs.core.chunk_rest(inst_32719);
var inst_32725 = cljs.core.count(inst_32723);
var inst_32696 = inst_32724;
var inst_32697 = inst_32723;
var inst_32698 = inst_32725;
var inst_32699 = (0);
var state_32820__$1 = (function (){var statearr_32892 = state_32820;
(statearr_32892[(14)] = inst_32696);

(statearr_32892[(15)] = inst_32697);

(statearr_32892[(16)] = inst_32698);

(statearr_32892[(17)] = inst_32699);

return statearr_32892;
})();
var statearr_32893_35297 = state_32820__$1;
(statearr_32893_35297[(2)] = null);

(statearr_32893_35297[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (11))){
var inst_32696 = (state_32820[(14)]);
var inst_32719 = (state_32820[(7)]);
var inst_32719__$1 = cljs.core.seq(inst_32696);
var state_32820__$1 = (function (){var statearr_32894 = state_32820;
(statearr_32894[(7)] = inst_32719__$1);

return statearr_32894;
})();
if(inst_32719__$1){
var statearr_32895_35298 = state_32820__$1;
(statearr_32895_35298[(1)] = (16));

} else {
var statearr_32896_35299 = state_32820__$1;
(statearr_32896_35299[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (9))){
var inst_32749 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32897_35300 = state_32820__$1;
(statearr_32897_35300[(2)] = inst_32749);

(statearr_32897_35300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (5))){
var inst_32694 = cljs.core.deref(cs);
var inst_32695 = cljs.core.seq(inst_32694);
var inst_32696 = inst_32695;
var inst_32697 = null;
var inst_32698 = (0);
var inst_32699 = (0);
var state_32820__$1 = (function (){var statearr_32898 = state_32820;
(statearr_32898[(14)] = inst_32696);

(statearr_32898[(15)] = inst_32697);

(statearr_32898[(16)] = inst_32698);

(statearr_32898[(17)] = inst_32699);

return statearr_32898;
})();
var statearr_32899_35301 = state_32820__$1;
(statearr_32899_35301[(2)] = null);

(statearr_32899_35301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (14))){
var state_32820__$1 = state_32820;
var statearr_32901_35302 = state_32820__$1;
(statearr_32901_35302[(2)] = null);

(statearr_32901_35302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (45))){
var inst_32809 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32902_35311 = state_32820__$1;
(statearr_32902_35311[(2)] = inst_32809);

(statearr_32902_35311[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (26))){
var inst_32752 = (state_32820[(27)]);
var inst_32805 = (state_32820[(2)]);
var inst_32806 = cljs.core.seq(inst_32752);
var state_32820__$1 = (function (){var statearr_32903 = state_32820;
(statearr_32903[(29)] = inst_32805);

return statearr_32903;
})();
if(inst_32806){
var statearr_32904_35312 = state_32820__$1;
(statearr_32904_35312[(1)] = (42));

} else {
var statearr_32905_35313 = state_32820__$1;
(statearr_32905_35313[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (16))){
var inst_32719 = (state_32820[(7)]);
var inst_32721 = cljs.core.chunked_seq_QMARK_(inst_32719);
var state_32820__$1 = state_32820;
if(inst_32721){
var statearr_32908_35314 = state_32820__$1;
(statearr_32908_35314[(1)] = (19));

} else {
var statearr_32911_35315 = state_32820__$1;
(statearr_32911_35315[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (38))){
var inst_32798 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32912_35318 = state_32820__$1;
(statearr_32912_35318[(2)] = inst_32798);

(statearr_32912_35318[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (30))){
var state_32820__$1 = state_32820;
var statearr_32913_35319 = state_32820__$1;
(statearr_32913_35319[(2)] = null);

(statearr_32913_35319[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (10))){
var inst_32697 = (state_32820[(15)]);
var inst_32699 = (state_32820[(17)]);
var inst_32708 = cljs.core._nth(inst_32697,inst_32699);
var inst_32709 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32708,(0),null);
var inst_32710 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_32708,(1),null);
var state_32820__$1 = (function (){var statearr_32914 = state_32820;
(statearr_32914[(24)] = inst_32709);

return statearr_32914;
})();
if(cljs.core.truth_(inst_32710)){
var statearr_32915_35324 = state_32820__$1;
(statearr_32915_35324[(1)] = (13));

} else {
var statearr_32916_35325 = state_32820__$1;
(statearr_32916_35325[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (18))){
var inst_32745 = (state_32820[(2)]);
var state_32820__$1 = state_32820;
var statearr_32918_35326 = state_32820__$1;
(statearr_32918_35326[(2)] = inst_32745);

(statearr_32918_35326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (42))){
var state_32820__$1 = state_32820;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32820__$1,(45),dchan);
} else {
if((state_val_32821 === (37))){
var inst_32779 = (state_32820[(23)]);
var inst_32788 = (state_32820[(22)]);
var inst_32687 = (state_32820[(12)]);
var inst_32788__$1 = cljs.core.first(inst_32779);
var inst_32789 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_32788__$1,inst_32687,done);
var state_32820__$1 = (function (){var statearr_32921 = state_32820;
(statearr_32921[(22)] = inst_32788__$1);

return statearr_32921;
})();
if(cljs.core.truth_(inst_32789)){
var statearr_32923_35329 = state_32820__$1;
(statearr_32923_35329[(1)] = (39));

} else {
var statearr_32924_35330 = state_32820__$1;
(statearr_32924_35330[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32821 === (8))){
var inst_32699 = (state_32820[(17)]);
var inst_32698 = (state_32820[(16)]);
var inst_32702 = (inst_32699 < inst_32698);
var inst_32703 = inst_32702;
var state_32820__$1 = state_32820;
if(cljs.core.truth_(inst_32703)){
var statearr_32926_35336 = state_32820__$1;
(statearr_32926_35336[(1)] = (10));

} else {
var statearr_32928_35337 = state_32820__$1;
(statearr_32928_35337[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__31278__auto__ = null;
var cljs$core$async$mult_$_state_machine__31278__auto____0 = (function (){
var statearr_32929 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32929[(0)] = cljs$core$async$mult_$_state_machine__31278__auto__);

(statearr_32929[(1)] = (1));

return statearr_32929;
});
var cljs$core$async$mult_$_state_machine__31278__auto____1 = (function (state_32820){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_32820);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e32931){var ex__31281__auto__ = e32931;
var statearr_32932_35338 = state_32820;
(statearr_32932_35338[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_32820[(4)]))){
var statearr_32933_35339 = state_32820;
(statearr_32933_35339[(1)] = cljs.core.first((state_32820[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35340 = state_32820;
state_32820 = G__35340;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__31278__auto__ = function(state_32820){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__31278__auto____1.call(this,state_32820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__31278__auto____0;
cljs$core$async$mult_$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__31278__auto____1;
return cljs$core$async$mult_$_state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_32934 = f__31473__auto__();
(statearr_32934[(6)] = c__31472__auto___35176);

return statearr_32934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__32937 = arguments.length;
switch (G__32937) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35397 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35397(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35398 = (function (m,ch){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5374__auto__.call(null,m,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5372__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35398(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35400 = (function (m){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5374__auto__.call(null,m));
} else {
var m__5372__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5372__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35400(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35401 = (function (m,state_map){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5374__auto__.call(null,m,state_map));
} else {
var m__5372__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5372__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35401(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35402 = (function (m,mode){
var x__5373__auto__ = (((m == null))?null:m);
var m__5374__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5374__auto__.call(null,m,mode));
} else {
var m__5372__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5372__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35402(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___35406 = arguments.length;
var i__5750__auto___35407 = (0);
while(true){
if((i__5750__auto___35407 < len__5749__auto___35406)){
args__5755__auto__.push((arguments[i__5750__auto___35407]));

var G__35408 = (i__5750__auto___35407 + (1));
i__5750__auto___35407 = G__35408;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__32971){
var map__32972 = p__32971;
var map__32972__$1 = cljs.core.__destructure_map(map__32972);
var opts = map__32972__$1;
var statearr_32974_35409 = state;
(statearr_32974_35409[(1)] = cont_block);


var temp__5825__auto__ = cljs.core.async.do_alts((function (val){
var statearr_32977_35410 = state;
(statearr_32977_35410[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5825__auto__)){
var cb = temp__5825__auto__;
var statearr_32978_35415 = state;
(statearr_32978_35415[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq32964){
var G__32965 = cljs.core.first(seq32964);
var seq32964__$1 = cljs.core.next(seq32964);
var G__32966 = cljs.core.first(seq32964__$1);
var seq32964__$2 = cljs.core.next(seq32964__$1);
var G__32967 = cljs.core.first(seq32964__$2);
var seq32964__$3 = cljs.core.next(seq32964__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32965,G__32966,G__32967,seq32964__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32985 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32986){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta32986 = meta32986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32987,meta32986__$1){
var self__ = this;
var _32987__$1 = this;
return (new cljs.core.async.t_cljs$core$async32985(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta32986__$1));
}));

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32987){
var self__ = this;
var _32987__$1 = this;
return self__.meta32986;
}));

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32985.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async32985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta32986","meta32986",-1665448714,null)], null);
}));

(cljs.core.async.t_cljs$core$async32985.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async32985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32985");

(cljs.core.async.t_cljs$core$async32985.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async32985");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32985.
 */
cljs.core.async.__GT_t_cljs$core$async32985 = (function cljs$core$async$__GT_t_cljs$core$async32985(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32986){
return (new cljs.core.async.t_cljs$core$async32985(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta32986));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (cljs.core.seq(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async32985(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__31472__auto___35466 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_33065){
var state_val_33066 = (state_33065[(1)]);
if((state_val_33066 === (7))){
var inst_33023 = (state_33065[(2)]);
var state_33065__$1 = state_33065;
if(cljs.core.truth_(inst_33023)){
var statearr_33067_35468 = state_33065__$1;
(statearr_33067_35468[(1)] = (8));

} else {
var statearr_33068_35469 = state_33065__$1;
(statearr_33068_35469[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (20))){
var inst_33016 = (state_33065[(7)]);
var state_33065__$1 = state_33065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33065__$1,(23),out,inst_33016);
} else {
if((state_val_33066 === (1))){
var inst_32999 = calc_state();
var inst_33000 = cljs.core.__destructure_map(inst_32999);
var inst_33001 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33000,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33002 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33000,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33003 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33000,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33004 = inst_32999;
var state_33065__$1 = (function (){var statearr_33077 = state_33065;
(statearr_33077[(8)] = inst_33001);

(statearr_33077[(9)] = inst_33002);

(statearr_33077[(10)] = inst_33003);

(statearr_33077[(11)] = inst_33004);

return statearr_33077;
})();
var statearr_33080_35482 = state_33065__$1;
(statearr_33080_35482[(2)] = null);

(statearr_33080_35482[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (24))){
var inst_33007 = (state_33065[(12)]);
var inst_33004 = inst_33007;
var state_33065__$1 = (function (){var statearr_33082 = state_33065;
(statearr_33082[(11)] = inst_33004);

return statearr_33082;
})();
var statearr_33085_35483 = state_33065__$1;
(statearr_33085_35483[(2)] = null);

(statearr_33085_35483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (4))){
var inst_33016 = (state_33065[(7)]);
var inst_33018 = (state_33065[(13)]);
var inst_33015 = (state_33065[(2)]);
var inst_33016__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33015,(0),null);
var inst_33017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33015,(1),null);
var inst_33018__$1 = (inst_33016__$1 == null);
var state_33065__$1 = (function (){var statearr_33089 = state_33065;
(statearr_33089[(7)] = inst_33016__$1);

(statearr_33089[(14)] = inst_33017);

(statearr_33089[(13)] = inst_33018__$1);

return statearr_33089;
})();
if(cljs.core.truth_(inst_33018__$1)){
var statearr_33090_35485 = state_33065__$1;
(statearr_33090_35485[(1)] = (5));

} else {
var statearr_33091_35486 = state_33065__$1;
(statearr_33091_35486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (15))){
var inst_33008 = (state_33065[(15)]);
var inst_33037 = (state_33065[(16)]);
var inst_33037__$1 = cljs.core.empty_QMARK_(inst_33008);
var state_33065__$1 = (function (){var statearr_33097 = state_33065;
(statearr_33097[(16)] = inst_33037__$1);

return statearr_33097;
})();
if(inst_33037__$1){
var statearr_33099_35487 = state_33065__$1;
(statearr_33099_35487[(1)] = (17));

} else {
var statearr_33101_35488 = state_33065__$1;
(statearr_33101_35488[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (21))){
var inst_33007 = (state_33065[(12)]);
var inst_33004 = inst_33007;
var state_33065__$1 = (function (){var statearr_33103 = state_33065;
(statearr_33103[(11)] = inst_33004);

return statearr_33103;
})();
var statearr_33104_35489 = state_33065__$1;
(statearr_33104_35489[(2)] = null);

(statearr_33104_35489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (13))){
var inst_33030 = (state_33065[(2)]);
var inst_33031 = calc_state();
var inst_33004 = inst_33031;
var state_33065__$1 = (function (){var statearr_33106 = state_33065;
(statearr_33106[(17)] = inst_33030);

(statearr_33106[(11)] = inst_33004);

return statearr_33106;
})();
var statearr_33107_35494 = state_33065__$1;
(statearr_33107_35494[(2)] = null);

(statearr_33107_35494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (22))){
var inst_33058 = (state_33065[(2)]);
var state_33065__$1 = state_33065;
var statearr_33109_35495 = state_33065__$1;
(statearr_33109_35495[(2)] = inst_33058);

(statearr_33109_35495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (6))){
var inst_33017 = (state_33065[(14)]);
var inst_33021 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_33017,change);
var state_33065__$1 = state_33065;
var statearr_33113_35496 = state_33065__$1;
(statearr_33113_35496[(2)] = inst_33021);

(statearr_33113_35496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (25))){
var state_33065__$1 = state_33065;
var statearr_33116_35497 = state_33065__$1;
(statearr_33116_35497[(2)] = null);

(statearr_33116_35497[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (17))){
var inst_33009 = (state_33065[(18)]);
var inst_33017 = (state_33065[(14)]);
var inst_33039 = (inst_33009.cljs$core$IFn$_invoke$arity$1 ? inst_33009.cljs$core$IFn$_invoke$arity$1(inst_33017) : inst_33009.call(null,inst_33017));
var inst_33040 = cljs.core.not(inst_33039);
var state_33065__$1 = state_33065;
var statearr_33117_35500 = state_33065__$1;
(statearr_33117_35500[(2)] = inst_33040);

(statearr_33117_35500[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (3))){
var inst_33062 = (state_33065[(2)]);
var state_33065__$1 = state_33065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33065__$1,inst_33062);
} else {
if((state_val_33066 === (12))){
var state_33065__$1 = state_33065;
var statearr_33123_35503 = state_33065__$1;
(statearr_33123_35503[(2)] = null);

(statearr_33123_35503[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (2))){
var inst_33004 = (state_33065[(11)]);
var inst_33007 = (state_33065[(12)]);
var inst_33007__$1 = cljs.core.__destructure_map(inst_33004);
var inst_33008 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33007__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33009 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33007__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33010 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33007__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33065__$1 = (function (){var statearr_33125 = state_33065;
(statearr_33125[(12)] = inst_33007__$1);

(statearr_33125[(15)] = inst_33008);

(statearr_33125[(18)] = inst_33009);

return statearr_33125;
})();
return cljs.core.async.ioc_alts_BANG_(state_33065__$1,(4),inst_33010);
} else {
if((state_val_33066 === (23))){
var inst_33048 = (state_33065[(2)]);
var state_33065__$1 = state_33065;
if(cljs.core.truth_(inst_33048)){
var statearr_33129_35505 = state_33065__$1;
(statearr_33129_35505[(1)] = (24));

} else {
var statearr_33131_35506 = state_33065__$1;
(statearr_33131_35506[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (19))){
var inst_33043 = (state_33065[(2)]);
var state_33065__$1 = state_33065;
var statearr_33134_35507 = state_33065__$1;
(statearr_33134_35507[(2)] = inst_33043);

(statearr_33134_35507[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (11))){
var inst_33017 = (state_33065[(14)]);
var inst_33027 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_33017);
var state_33065__$1 = state_33065;
var statearr_33138_35508 = state_33065__$1;
(statearr_33138_35508[(2)] = inst_33027);

(statearr_33138_35508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (9))){
var inst_33008 = (state_33065[(15)]);
var inst_33017 = (state_33065[(14)]);
var inst_33034 = (state_33065[(19)]);
var inst_33034__$1 = (inst_33008.cljs$core$IFn$_invoke$arity$1 ? inst_33008.cljs$core$IFn$_invoke$arity$1(inst_33017) : inst_33008.call(null,inst_33017));
var state_33065__$1 = (function (){var statearr_33139 = state_33065;
(statearr_33139[(19)] = inst_33034__$1);

return statearr_33139;
})();
if(cljs.core.truth_(inst_33034__$1)){
var statearr_33140_35509 = state_33065__$1;
(statearr_33140_35509[(1)] = (14));

} else {
var statearr_33141_35510 = state_33065__$1;
(statearr_33141_35510[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (5))){
var inst_33018 = (state_33065[(13)]);
var state_33065__$1 = state_33065;
var statearr_33154_35518 = state_33065__$1;
(statearr_33154_35518[(2)] = inst_33018);

(statearr_33154_35518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (14))){
var inst_33034 = (state_33065[(19)]);
var state_33065__$1 = state_33065;
var statearr_33161_35532 = state_33065__$1;
(statearr_33161_35532[(2)] = inst_33034);

(statearr_33161_35532[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (26))){
var inst_33054 = (state_33065[(2)]);
var state_33065__$1 = state_33065;
var statearr_33168_35553 = state_33065__$1;
(statearr_33168_35553[(2)] = inst_33054);

(statearr_33168_35553[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (16))){
var inst_33045 = (state_33065[(2)]);
var state_33065__$1 = state_33065;
if(cljs.core.truth_(inst_33045)){
var statearr_33171_35554 = state_33065__$1;
(statearr_33171_35554[(1)] = (20));

} else {
var statearr_33172_35555 = state_33065__$1;
(statearr_33172_35555[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (10))){
var inst_33060 = (state_33065[(2)]);
var state_33065__$1 = state_33065;
var statearr_33177_35562 = state_33065__$1;
(statearr_33177_35562[(2)] = inst_33060);

(statearr_33177_35562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (18))){
var inst_33037 = (state_33065[(16)]);
var state_33065__$1 = state_33065;
var statearr_33185_35563 = state_33065__$1;
(statearr_33185_35563[(2)] = inst_33037);

(statearr_33185_35563[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33066 === (8))){
var inst_33016 = (state_33065[(7)]);
var inst_33025 = (inst_33016 == null);
var state_33065__$1 = state_33065;
if(cljs.core.truth_(inst_33025)){
var statearr_33195_35564 = state_33065__$1;
(statearr_33195_35564[(1)] = (11));

} else {
var statearr_33200_35565 = state_33065__$1;
(statearr_33200_35565[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__31278__auto__ = null;
var cljs$core$async$mix_$_state_machine__31278__auto____0 = (function (){
var statearr_33213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33213[(0)] = cljs$core$async$mix_$_state_machine__31278__auto__);

(statearr_33213[(1)] = (1));

return statearr_33213;
});
var cljs$core$async$mix_$_state_machine__31278__auto____1 = (function (state_33065){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_33065);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e33218){var ex__31281__auto__ = e33218;
var statearr_33219_35572 = state_33065;
(statearr_33219_35572[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_33065[(4)]))){
var statearr_33220_35573 = state_33065;
(statearr_33220_35573[(1)] = cljs.core.first((state_33065[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35574 = state_33065;
state_33065 = G__35574;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__31278__auto__ = function(state_33065){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__31278__auto____1.call(this,state_33065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__31278__auto____0;
cljs$core$async$mix_$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__31278__auto____1;
return cljs$core$async$mix_$_state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_33221 = f__31473__auto__();
(statearr_33221[(6)] = c__31472__auto___35466);

return statearr_33221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35575 = (function (p,v,ch,close_QMARK_){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5374__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5372__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5372__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35575(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35599 = (function (p,v,ch){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5374__auto__.call(null,p,v,ch));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5372__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35599(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35603 = (function() {
var G__35604 = null;
var G__35604__1 = (function (p){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5374__auto__.call(null,p));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5372__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35604__2 = (function (p,v){
var x__5373__auto__ = (((p == null))?null:p);
var m__5374__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5374__auto__.call(null,p,v));
} else {
var m__5372__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5372__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35604 = function(p,v){
switch(arguments.length){
case 1:
return G__35604__1.call(this,p);
case 2:
return G__35604__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35604.cljs$core$IFn$_invoke$arity$1 = G__35604__1;
G__35604.cljs$core$IFn$_invoke$arity$2 = G__35604__2;
return G__35604;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33255 = arguments.length;
switch (G__33255) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35603(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35603(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33319 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33320){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33320 = meta33320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33321,meta33320__$1){
var self__ = this;
var _33321__$1 = this;
return (new cljs.core.async.t_cljs$core$async33319(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33320__$1));
}));

(cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33321){
var self__ = this;
var _33321__$1 = this;
return self__.meta33320;
}));

(cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5825__auto__)){
var m = temp__5825__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async33319.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async33319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33320","meta33320",-1902553377,null)], null);
}));

(cljs.core.async.t_cljs$core$async33319.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33319");

(cljs.core.async.t_cljs$core$async33319.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async33319");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33319.
 */
cljs.core.async.__GT_t_cljs$core$async33319 = (function cljs$core$async$__GT_t_cljs$core$async33319(ch,topic_fn,buf_fn,mults,ensure_mult,meta33320){
return (new cljs.core.async.t_cljs$core$async33319(ch,topic_fn,buf_fn,mults,ensure_mult,meta33320));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33268 = arguments.length;
switch (G__33268) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__33257_SHARP_){
if(cljs.core.truth_((p1__33257_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__33257_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__33257_SHARP_.call(null,topic)))){
return p1__33257_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__33257_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async33319(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__31472__auto___35614 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_33448){
var state_val_33449 = (state_33448[(1)]);
if((state_val_33449 === (7))){
var inst_33444 = (state_33448[(2)]);
var state_33448__$1 = state_33448;
var statearr_33450_35615 = state_33448__$1;
(statearr_33450_35615[(2)] = inst_33444);

(statearr_33450_35615[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (20))){
var state_33448__$1 = state_33448;
var statearr_33453_35616 = state_33448__$1;
(statearr_33453_35616[(2)] = null);

(statearr_33453_35616[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (1))){
var state_33448__$1 = state_33448;
var statearr_33457_35617 = state_33448__$1;
(statearr_33457_35617[(2)] = null);

(statearr_33457_35617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (24))){
var inst_33425 = (state_33448[(7)]);
var inst_33436 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_33425);
var state_33448__$1 = state_33448;
var statearr_33458_35618 = state_33448__$1;
(statearr_33458_35618[(2)] = inst_33436);

(statearr_33458_35618[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (4))){
var inst_33375 = (state_33448[(8)]);
var inst_33375__$1 = (state_33448[(2)]);
var inst_33377 = (inst_33375__$1 == null);
var state_33448__$1 = (function (){var statearr_33459 = state_33448;
(statearr_33459[(8)] = inst_33375__$1);

return statearr_33459;
})();
if(cljs.core.truth_(inst_33377)){
var statearr_33460_35619 = state_33448__$1;
(statearr_33460_35619[(1)] = (5));

} else {
var statearr_33461_35620 = state_33448__$1;
(statearr_33461_35620[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (15))){
var inst_33418 = (state_33448[(2)]);
var state_33448__$1 = state_33448;
var statearr_33463_35621 = state_33448__$1;
(statearr_33463_35621[(2)] = inst_33418);

(statearr_33463_35621[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (21))){
var inst_33441 = (state_33448[(2)]);
var state_33448__$1 = (function (){var statearr_33465 = state_33448;
(statearr_33465[(9)] = inst_33441);

return statearr_33465;
})();
var statearr_33466_35622 = state_33448__$1;
(statearr_33466_35622[(2)] = null);

(statearr_33466_35622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (13))){
var inst_33400 = (state_33448[(10)]);
var inst_33402 = cljs.core.chunked_seq_QMARK_(inst_33400);
var state_33448__$1 = state_33448;
if(inst_33402){
var statearr_33467_35623 = state_33448__$1;
(statearr_33467_35623[(1)] = (16));

} else {
var statearr_33468_35624 = state_33448__$1;
(statearr_33468_35624[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (22))){
var inst_33433 = (state_33448[(2)]);
var state_33448__$1 = state_33448;
if(cljs.core.truth_(inst_33433)){
var statearr_33472_35625 = state_33448__$1;
(statearr_33472_35625[(1)] = (23));

} else {
var statearr_33473_35629 = state_33448__$1;
(statearr_33473_35629[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (6))){
var inst_33375 = (state_33448[(8)]);
var inst_33425 = (state_33448[(7)]);
var inst_33428 = (state_33448[(11)]);
var inst_33425__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_33375) : topic_fn.call(null,inst_33375));
var inst_33427 = cljs.core.deref(mults);
var inst_33428__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_33427,inst_33425__$1);
var state_33448__$1 = (function (){var statearr_33474 = state_33448;
(statearr_33474[(7)] = inst_33425__$1);

(statearr_33474[(11)] = inst_33428__$1);

return statearr_33474;
})();
if(cljs.core.truth_(inst_33428__$1)){
var statearr_33475_35630 = state_33448__$1;
(statearr_33475_35630[(1)] = (19));

} else {
var statearr_33478_35631 = state_33448__$1;
(statearr_33478_35631[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (25))){
var inst_33438 = (state_33448[(2)]);
var state_33448__$1 = state_33448;
var statearr_33481_35632 = state_33448__$1;
(statearr_33481_35632[(2)] = inst_33438);

(statearr_33481_35632[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (17))){
var inst_33400 = (state_33448[(10)]);
var inst_33409 = cljs.core.first(inst_33400);
var inst_33410 = cljs.core.async.muxch_STAR_(inst_33409);
var inst_33411 = cljs.core.async.close_BANG_(inst_33410);
var inst_33412 = cljs.core.next(inst_33400);
var inst_33386 = inst_33412;
var inst_33387 = null;
var inst_33388 = (0);
var inst_33389 = (0);
var state_33448__$1 = (function (){var statearr_33491 = state_33448;
(statearr_33491[(12)] = inst_33411);

(statearr_33491[(13)] = inst_33386);

(statearr_33491[(14)] = inst_33387);

(statearr_33491[(15)] = inst_33388);

(statearr_33491[(16)] = inst_33389);

return statearr_33491;
})();
var statearr_33497_35633 = state_33448__$1;
(statearr_33497_35633[(2)] = null);

(statearr_33497_35633[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (3))){
var inst_33446 = (state_33448[(2)]);
var state_33448__$1 = state_33448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33448__$1,inst_33446);
} else {
if((state_val_33449 === (12))){
var inst_33420 = (state_33448[(2)]);
var state_33448__$1 = state_33448;
var statearr_33533_35635 = state_33448__$1;
(statearr_33533_35635[(2)] = inst_33420);

(statearr_33533_35635[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (2))){
var state_33448__$1 = state_33448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33448__$1,(4),ch);
} else {
if((state_val_33449 === (23))){
var state_33448__$1 = state_33448;
var statearr_33554_35636 = state_33448__$1;
(statearr_33554_35636[(2)] = null);

(statearr_33554_35636[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (19))){
var inst_33428 = (state_33448[(11)]);
var inst_33375 = (state_33448[(8)]);
var inst_33431 = cljs.core.async.muxch_STAR_(inst_33428);
var state_33448__$1 = state_33448;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33448__$1,(22),inst_33431,inst_33375);
} else {
if((state_val_33449 === (11))){
var inst_33386 = (state_33448[(13)]);
var inst_33400 = (state_33448[(10)]);
var inst_33400__$1 = cljs.core.seq(inst_33386);
var state_33448__$1 = (function (){var statearr_33564 = state_33448;
(statearr_33564[(10)] = inst_33400__$1);

return statearr_33564;
})();
if(inst_33400__$1){
var statearr_33565_35637 = state_33448__$1;
(statearr_33565_35637[(1)] = (13));

} else {
var statearr_33568_35638 = state_33448__$1;
(statearr_33568_35638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (9))){
var inst_33422 = (state_33448[(2)]);
var state_33448__$1 = state_33448;
var statearr_33571_35639 = state_33448__$1;
(statearr_33571_35639[(2)] = inst_33422);

(statearr_33571_35639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (5))){
var inst_33383 = cljs.core.deref(mults);
var inst_33384 = cljs.core.vals(inst_33383);
var inst_33385 = cljs.core.seq(inst_33384);
var inst_33386 = inst_33385;
var inst_33387 = null;
var inst_33388 = (0);
var inst_33389 = (0);
var state_33448__$1 = (function (){var statearr_33573 = state_33448;
(statearr_33573[(13)] = inst_33386);

(statearr_33573[(14)] = inst_33387);

(statearr_33573[(15)] = inst_33388);

(statearr_33573[(16)] = inst_33389);

return statearr_33573;
})();
var statearr_33574_35643 = state_33448__$1;
(statearr_33574_35643[(2)] = null);

(statearr_33574_35643[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (14))){
var state_33448__$1 = state_33448;
var statearr_33581_35644 = state_33448__$1;
(statearr_33581_35644[(2)] = null);

(statearr_33581_35644[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (16))){
var inst_33400 = (state_33448[(10)]);
var inst_33404 = cljs.core.chunk_first(inst_33400);
var inst_33405 = cljs.core.chunk_rest(inst_33400);
var inst_33406 = cljs.core.count(inst_33404);
var inst_33386 = inst_33405;
var inst_33387 = inst_33404;
var inst_33388 = inst_33406;
var inst_33389 = (0);
var state_33448__$1 = (function (){var statearr_33584 = state_33448;
(statearr_33584[(13)] = inst_33386);

(statearr_33584[(14)] = inst_33387);

(statearr_33584[(15)] = inst_33388);

(statearr_33584[(16)] = inst_33389);

return statearr_33584;
})();
var statearr_33586_35652 = state_33448__$1;
(statearr_33586_35652[(2)] = null);

(statearr_33586_35652[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (10))){
var inst_33387 = (state_33448[(14)]);
var inst_33389 = (state_33448[(16)]);
var inst_33386 = (state_33448[(13)]);
var inst_33388 = (state_33448[(15)]);
var inst_33394 = cljs.core._nth(inst_33387,inst_33389);
var inst_33395 = cljs.core.async.muxch_STAR_(inst_33394);
var inst_33396 = cljs.core.async.close_BANG_(inst_33395);
var inst_33397 = (inst_33389 + (1));
var tmp33578 = inst_33386;
var tmp33579 = inst_33387;
var tmp33580 = inst_33388;
var inst_33386__$1 = tmp33578;
var inst_33387__$1 = tmp33579;
var inst_33388__$1 = tmp33580;
var inst_33389__$1 = inst_33397;
var state_33448__$1 = (function (){var statearr_33590 = state_33448;
(statearr_33590[(17)] = inst_33396);

(statearr_33590[(13)] = inst_33386__$1);

(statearr_33590[(14)] = inst_33387__$1);

(statearr_33590[(15)] = inst_33388__$1);

(statearr_33590[(16)] = inst_33389__$1);

return statearr_33590;
})();
var statearr_33592_35666 = state_33448__$1;
(statearr_33592_35666[(2)] = null);

(statearr_33592_35666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (18))){
var inst_33415 = (state_33448[(2)]);
var state_33448__$1 = state_33448;
var statearr_33594_35667 = state_33448__$1;
(statearr_33594_35667[(2)] = inst_33415);

(statearr_33594_35667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33449 === (8))){
var inst_33389 = (state_33448[(16)]);
var inst_33388 = (state_33448[(15)]);
var inst_33391 = (inst_33389 < inst_33388);
var inst_33392 = inst_33391;
var state_33448__$1 = state_33448;
if(cljs.core.truth_(inst_33392)){
var statearr_33598_35668 = state_33448__$1;
(statearr_33598_35668[(1)] = (10));

} else {
var statearr_33599_35672 = state_33448__$1;
(statearr_33599_35672[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31278__auto__ = null;
var cljs$core$async$state_machine__31278__auto____0 = (function (){
var statearr_33602 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33602[(0)] = cljs$core$async$state_machine__31278__auto__);

(statearr_33602[(1)] = (1));

return statearr_33602;
});
var cljs$core$async$state_machine__31278__auto____1 = (function (state_33448){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_33448);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e33605){var ex__31281__auto__ = e33605;
var statearr_33606_35691 = state_33448;
(statearr_33606_35691[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_33448[(4)]))){
var statearr_33607_35692 = state_33448;
(statearr_33607_35692[(1)] = cljs.core.first((state_33448[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35694 = state_33448;
state_33448 = G__35694;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$state_machine__31278__auto__ = function(state_33448){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31278__auto____1.call(this,state_33448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31278__auto____0;
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31278__auto____1;
return cljs$core$async$state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_33611 = f__31473__auto__();
(statearr_33611[(6)] = c__31472__auto___35614);

return statearr_33611;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33615 = arguments.length;
switch (G__33615) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33635 = arguments.length;
switch (G__33635) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33639 = arguments.length;
switch (G__33639) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__31472__auto___35723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_33712){
var state_val_33713 = (state_33712[(1)]);
if((state_val_33713 === (7))){
var state_33712__$1 = state_33712;
var statearr_33729_35730 = state_33712__$1;
(statearr_33729_35730[(2)] = null);

(statearr_33729_35730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (1))){
var state_33712__$1 = state_33712;
var statearr_33733_35731 = state_33712__$1;
(statearr_33733_35731[(2)] = null);

(statearr_33733_35731[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (4))){
var inst_33659 = (state_33712[(7)]);
var inst_33658 = (state_33712[(8)]);
var inst_33662 = (inst_33659 < inst_33658);
var state_33712__$1 = state_33712;
if(cljs.core.truth_(inst_33662)){
var statearr_33741_35748 = state_33712__$1;
(statearr_33741_35748[(1)] = (6));

} else {
var statearr_33743_35756 = state_33712__$1;
(statearr_33743_35756[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (15))){
var inst_33693 = (state_33712[(9)]);
var inst_33701 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_33693);
var state_33712__$1 = state_33712;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33712__$1,(17),out,inst_33701);
} else {
if((state_val_33713 === (13))){
var inst_33693 = (state_33712[(9)]);
var inst_33693__$1 = (state_33712[(2)]);
var inst_33694 = cljs.core.some(cljs.core.nil_QMARK_,inst_33693__$1);
var state_33712__$1 = (function (){var statearr_33745 = state_33712;
(statearr_33745[(9)] = inst_33693__$1);

return statearr_33745;
})();
if(cljs.core.truth_(inst_33694)){
var statearr_33748_35778 = state_33712__$1;
(statearr_33748_35778[(1)] = (14));

} else {
var statearr_33750_35779 = state_33712__$1;
(statearr_33750_35779[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (6))){
var state_33712__$1 = state_33712;
var statearr_33751_35780 = state_33712__$1;
(statearr_33751_35780[(2)] = null);

(statearr_33751_35780[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (17))){
var inst_33703 = (state_33712[(2)]);
var state_33712__$1 = (function (){var statearr_33760 = state_33712;
(statearr_33760[(10)] = inst_33703);

return statearr_33760;
})();
var statearr_33762_35787 = state_33712__$1;
(statearr_33762_35787[(2)] = null);

(statearr_33762_35787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (3))){
var inst_33708 = (state_33712[(2)]);
var state_33712__$1 = state_33712;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33712__$1,inst_33708);
} else {
if((state_val_33713 === (12))){
var _ = (function (){var statearr_33765 = state_33712;
(statearr_33765[(4)] = cljs.core.rest((state_33712[(4)])));

return statearr_33765;
})();
var state_33712__$1 = state_33712;
var ex33758 = (state_33712__$1[(2)]);
var statearr_33767_35809 = state_33712__$1;
(statearr_33767_35809[(5)] = ex33758);


if((ex33758 instanceof Object)){
var statearr_33771_35812 = state_33712__$1;
(statearr_33771_35812[(1)] = (11));

(statearr_33771_35812[(5)] = null);

} else {
throw ex33758;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (2))){
var inst_33655 = cljs.core.reset_BANG_(dctr,cnt);
var inst_33658 = cnt;
var inst_33659 = (0);
var state_33712__$1 = (function (){var statearr_33777 = state_33712;
(statearr_33777[(11)] = inst_33655);

(statearr_33777[(8)] = inst_33658);

(statearr_33777[(7)] = inst_33659);

return statearr_33777;
})();
var statearr_33779_35814 = state_33712__$1;
(statearr_33779_35814[(2)] = null);

(statearr_33779_35814[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (11))){
var inst_33668 = (state_33712[(2)]);
var inst_33669 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_33712__$1 = (function (){var statearr_33783 = state_33712;
(statearr_33783[(12)] = inst_33668);

return statearr_33783;
})();
var statearr_33784_35815 = state_33712__$1;
(statearr_33784_35815[(2)] = inst_33669);

(statearr_33784_35815[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (9))){
var inst_33659 = (state_33712[(7)]);
var _ = (function (){var statearr_33786 = state_33712;
(statearr_33786[(4)] = cljs.core.cons((12),(state_33712[(4)])));

return statearr_33786;
})();
var inst_33675 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_33659) : chs__$1.call(null,inst_33659));
var inst_33676 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_33659) : done.call(null,inst_33659));
var inst_33677 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_33675,inst_33676);
var ___$1 = (function (){var statearr_33789 = state_33712;
(statearr_33789[(4)] = cljs.core.rest((state_33712[(4)])));

return statearr_33789;
})();
var state_33712__$1 = state_33712;
var statearr_33790_35823 = state_33712__$1;
(statearr_33790_35823[(2)] = inst_33677);

(statearr_33790_35823[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (5))){
var inst_33691 = (state_33712[(2)]);
var state_33712__$1 = (function (){var statearr_33792 = state_33712;
(statearr_33792[(13)] = inst_33691);

return statearr_33792;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33712__$1,(13),dchan);
} else {
if((state_val_33713 === (14))){
var inst_33699 = cljs.core.async.close_BANG_(out);
var state_33712__$1 = state_33712;
var statearr_33797_35827 = state_33712__$1;
(statearr_33797_35827[(2)] = inst_33699);

(statearr_33797_35827[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (16))){
var inst_33706 = (state_33712[(2)]);
var state_33712__$1 = state_33712;
var statearr_33801_35828 = state_33712__$1;
(statearr_33801_35828[(2)] = inst_33706);

(statearr_33801_35828[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (10))){
var inst_33659 = (state_33712[(7)]);
var inst_33680 = (state_33712[(2)]);
var inst_33685 = (inst_33659 + (1));
var inst_33659__$1 = inst_33685;
var state_33712__$1 = (function (){var statearr_33802 = state_33712;
(statearr_33802[(14)] = inst_33680);

(statearr_33802[(7)] = inst_33659__$1);

return statearr_33802;
})();
var statearr_33807_35829 = state_33712__$1;
(statearr_33807_35829[(2)] = null);

(statearr_33807_35829[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33713 === (8))){
var inst_33689 = (state_33712[(2)]);
var state_33712__$1 = state_33712;
var statearr_33808_35830 = state_33712__$1;
(statearr_33808_35830[(2)] = inst_33689);

(statearr_33808_35830[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31278__auto__ = null;
var cljs$core$async$state_machine__31278__auto____0 = (function (){
var statearr_33813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33813[(0)] = cljs$core$async$state_machine__31278__auto__);

(statearr_33813[(1)] = (1));

return statearr_33813;
});
var cljs$core$async$state_machine__31278__auto____1 = (function (state_33712){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_33712);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e33815){var ex__31281__auto__ = e33815;
var statearr_33817_35831 = state_33712;
(statearr_33817_35831[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_33712[(4)]))){
var statearr_33819_35832 = state_33712;
(statearr_33819_35832[(1)] = cljs.core.first((state_33712[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35833 = state_33712;
state_33712 = G__35833;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$state_machine__31278__auto__ = function(state_33712){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31278__auto____1.call(this,state_33712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31278__auto____0;
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31278__auto____1;
return cljs$core$async$state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_33821 = f__31473__auto__();
(statearr_33821[(6)] = c__31472__auto___35723);

return statearr_33821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33824 = arguments.length;
switch (G__33824) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31472__auto___35835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_33887){
var state_val_33891 = (state_33887[(1)]);
if((state_val_33891 === (7))){
var inst_33862 = (state_33887[(7)]);
var inst_33864 = (state_33887[(8)]);
var inst_33862__$1 = (state_33887[(2)]);
var inst_33864__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33862__$1,(0),null);
var inst_33865 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33862__$1,(1),null);
var inst_33869 = (inst_33864__$1 == null);
var state_33887__$1 = (function (){var statearr_33898 = state_33887;
(statearr_33898[(7)] = inst_33862__$1);

(statearr_33898[(8)] = inst_33864__$1);

(statearr_33898[(9)] = inst_33865);

return statearr_33898;
})();
if(cljs.core.truth_(inst_33869)){
var statearr_33900_35837 = state_33887__$1;
(statearr_33900_35837[(1)] = (8));

} else {
var statearr_33901_35838 = state_33887__$1;
(statearr_33901_35838[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (1))){
var inst_33849 = cljs.core.vec(chs);
var inst_33850 = inst_33849;
var state_33887__$1 = (function (){var statearr_33902 = state_33887;
(statearr_33902[(10)] = inst_33850);

return statearr_33902;
})();
var statearr_33903_35839 = state_33887__$1;
(statearr_33903_35839[(2)] = null);

(statearr_33903_35839[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (4))){
var inst_33850 = (state_33887[(10)]);
var state_33887__$1 = state_33887;
return cljs.core.async.ioc_alts_BANG_(state_33887__$1,(7),inst_33850);
} else {
if((state_val_33891 === (6))){
var inst_33883 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
var statearr_33904_35843 = state_33887__$1;
(statearr_33904_35843[(2)] = inst_33883);

(statearr_33904_35843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (3))){
var inst_33885 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33887__$1,inst_33885);
} else {
if((state_val_33891 === (2))){
var inst_33850 = (state_33887[(10)]);
var inst_33855 = cljs.core.count(inst_33850);
var inst_33856 = (inst_33855 > (0));
var state_33887__$1 = state_33887;
if(cljs.core.truth_(inst_33856)){
var statearr_33909_35844 = state_33887__$1;
(statearr_33909_35844[(1)] = (4));

} else {
var statearr_33911_35845 = state_33887__$1;
(statearr_33911_35845[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (11))){
var inst_33850 = (state_33887[(10)]);
var inst_33876 = (state_33887[(2)]);
var tmp33905 = inst_33850;
var inst_33850__$1 = tmp33905;
var state_33887__$1 = (function (){var statearr_33912 = state_33887;
(statearr_33912[(11)] = inst_33876);

(statearr_33912[(10)] = inst_33850__$1);

return statearr_33912;
})();
var statearr_33913_35847 = state_33887__$1;
(statearr_33913_35847[(2)] = null);

(statearr_33913_35847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (9))){
var inst_33864 = (state_33887[(8)]);
var state_33887__$1 = state_33887;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33887__$1,(11),out,inst_33864);
} else {
if((state_val_33891 === (5))){
var inst_33881 = cljs.core.async.close_BANG_(out);
var state_33887__$1 = state_33887;
var statearr_33916_35851 = state_33887__$1;
(statearr_33916_35851[(2)] = inst_33881);

(statearr_33916_35851[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (10))){
var inst_33879 = (state_33887[(2)]);
var state_33887__$1 = state_33887;
var statearr_33920_35852 = state_33887__$1;
(statearr_33920_35852[(2)] = inst_33879);

(statearr_33920_35852[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (8))){
var inst_33850 = (state_33887[(10)]);
var inst_33862 = (state_33887[(7)]);
var inst_33864 = (state_33887[(8)]);
var inst_33865 = (state_33887[(9)]);
var inst_33871 = (function (){var cs = inst_33850;
var vec__33858 = inst_33862;
var v = inst_33864;
var c = inst_33865;
return (function (p1__33822_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__33822_SHARP_);
});
})();
var inst_33872 = cljs.core.filterv(inst_33871,inst_33850);
var inst_33850__$1 = inst_33872;
var state_33887__$1 = (function (){var statearr_33923 = state_33887;
(statearr_33923[(10)] = inst_33850__$1);

return statearr_33923;
})();
var statearr_33943_35857 = state_33887__$1;
(statearr_33943_35857[(2)] = null);

(statearr_33943_35857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31278__auto__ = null;
var cljs$core$async$state_machine__31278__auto____0 = (function (){
var statearr_33958 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33958[(0)] = cljs$core$async$state_machine__31278__auto__);

(statearr_33958[(1)] = (1));

return statearr_33958;
});
var cljs$core$async$state_machine__31278__auto____1 = (function (state_33887){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_33887);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e33966){var ex__31281__auto__ = e33966;
var statearr_33968_35858 = state_33887;
(statearr_33968_35858[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_33887[(4)]))){
var statearr_33969_35859 = state_33887;
(statearr_33969_35859[(1)] = cljs.core.first((state_33887[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35864 = state_33887;
state_33887 = G__35864;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$state_machine__31278__auto__ = function(state_33887){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31278__auto____1.call(this,state_33887);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31278__auto____0;
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31278__auto____1;
return cljs$core$async$state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_33974 = f__31473__auto__();
(statearr_33974[(6)] = c__31472__auto___35835);

return statearr_33974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33978 = arguments.length;
switch (G__33978) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31472__auto___35876 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_34017){
var state_val_34018 = (state_34017[(1)]);
if((state_val_34018 === (7))){
var inst_33995 = (state_34017[(7)]);
var inst_33995__$1 = (state_34017[(2)]);
var inst_33996 = (inst_33995__$1 == null);
var inst_33997 = cljs.core.not(inst_33996);
var state_34017__$1 = (function (){var statearr_34019 = state_34017;
(statearr_34019[(7)] = inst_33995__$1);

return statearr_34019;
})();
if(inst_33997){
var statearr_34021_35877 = state_34017__$1;
(statearr_34021_35877[(1)] = (8));

} else {
var statearr_34022_35878 = state_34017__$1;
(statearr_34022_35878[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (1))){
var inst_33990 = (0);
var state_34017__$1 = (function (){var statearr_34023 = state_34017;
(statearr_34023[(8)] = inst_33990);

return statearr_34023;
})();
var statearr_34030_35879 = state_34017__$1;
(statearr_34030_35879[(2)] = null);

(statearr_34030_35879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (4))){
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34017__$1,(7),ch);
} else {
if((state_val_34018 === (6))){
var inst_34012 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
var statearr_34036_35880 = state_34017__$1;
(statearr_34036_35880[(2)] = inst_34012);

(statearr_34036_35880[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (3))){
var inst_34014 = (state_34017[(2)]);
var inst_34015 = cljs.core.async.close_BANG_(out);
var state_34017__$1 = (function (){var statearr_34041 = state_34017;
(statearr_34041[(9)] = inst_34014);

return statearr_34041;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34017__$1,inst_34015);
} else {
if((state_val_34018 === (2))){
var inst_33990 = (state_34017[(8)]);
var inst_33992 = (inst_33990 < n);
var state_34017__$1 = state_34017;
if(cljs.core.truth_(inst_33992)){
var statearr_34048_35881 = state_34017__$1;
(statearr_34048_35881[(1)] = (4));

} else {
var statearr_34049_35882 = state_34017__$1;
(statearr_34049_35882[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (11))){
var inst_33990 = (state_34017[(8)]);
var inst_34002 = (state_34017[(2)]);
var inst_34003 = (inst_33990 + (1));
var inst_33990__$1 = inst_34003;
var state_34017__$1 = (function (){var statearr_34050 = state_34017;
(statearr_34050[(10)] = inst_34002);

(statearr_34050[(8)] = inst_33990__$1);

return statearr_34050;
})();
var statearr_34051_35884 = state_34017__$1;
(statearr_34051_35884[(2)] = null);

(statearr_34051_35884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (9))){
var state_34017__$1 = state_34017;
var statearr_34052_35885 = state_34017__$1;
(statearr_34052_35885[(2)] = null);

(statearr_34052_35885[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (5))){
var state_34017__$1 = state_34017;
var statearr_34055_35887 = state_34017__$1;
(statearr_34055_35887[(2)] = null);

(statearr_34055_35887[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (10))){
var inst_34009 = (state_34017[(2)]);
var state_34017__$1 = state_34017;
var statearr_34057_35889 = state_34017__$1;
(statearr_34057_35889[(2)] = inst_34009);

(statearr_34057_35889[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34018 === (8))){
var inst_33995 = (state_34017[(7)]);
var state_34017__$1 = state_34017;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34017__$1,(11),out,inst_33995);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31278__auto__ = null;
var cljs$core$async$state_machine__31278__auto____0 = (function (){
var statearr_34059 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34059[(0)] = cljs$core$async$state_machine__31278__auto__);

(statearr_34059[(1)] = (1));

return statearr_34059;
});
var cljs$core$async$state_machine__31278__auto____1 = (function (state_34017){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_34017);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e34060){var ex__31281__auto__ = e34060;
var statearr_34061_35890 = state_34017;
(statearr_34061_35890[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_34017[(4)]))){
var statearr_34062_35891 = state_34017;
(statearr_34062_35891[(1)] = cljs.core.first((state_34017[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35892 = state_34017;
state_34017 = G__35892;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$state_machine__31278__auto__ = function(state_34017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31278__auto____1.call(this,state_34017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31278__auto____0;
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31278__auto____1;
return cljs$core$async$state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_34066 = f__31473__auto__();
(statearr_34066[(6)] = c__31472__auto___35876);

return statearr_34066;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34087 = (function (f,ch,meta34080,_,fn1,meta34088){
this.f = f;
this.ch = ch;
this.meta34080 = meta34080;
this._ = _;
this.fn1 = fn1;
this.meta34088 = meta34088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34089,meta34088__$1){
var self__ = this;
var _34089__$1 = this;
return (new cljs.core.async.t_cljs$core$async34087(self__.f,self__.ch,self__.meta34080,self__._,self__.fn1,meta34088__$1));
}));

(cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34089){
var self__ = this;
var _34089__$1 = this;
return self__.meta34088;
}));

(cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34087.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34074_SHARP_){
var G__34119 = (((p1__34074_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34074_SHARP_) : self__.f.call(null,p1__34074_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34119) : f1.call(null,G__34119));
});
}));

(cljs.core.async.t_cljs$core$async34087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34080","meta34080",-1935156622,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34079","cljs.core.async/t_cljs$core$async34079",946292598,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34088","meta34088",2092573136,null)], null);
}));

(cljs.core.async.t_cljs$core$async34087.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34087");

(cljs.core.async.t_cljs$core$async34087.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34087");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34087.
 */
cljs.core.async.__GT_t_cljs$core$async34087 = (function cljs$core$async$__GT_t_cljs$core$async34087(f,ch,meta34080,_,fn1,meta34088){
return (new cljs.core.async.t_cljs$core$async34087(f,ch,meta34080,_,fn1,meta34088));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34079 = (function (f,ch,meta34080){
this.f = f;
this.ch = ch;
this.meta34080 = meta34080;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34079.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34081,meta34080__$1){
var self__ = this;
var _34081__$1 = this;
return (new cljs.core.async.t_cljs$core$async34079(self__.f,self__.ch,meta34080__$1));
}));

(cljs.core.async.t_cljs$core$async34079.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34081){
var self__ = this;
var _34081__$1 = this;
return self__.meta34080;
}));

(cljs.core.async.t_cljs$core$async34079.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34079.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34079.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34079.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34079.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async34087(self__.f,self__.ch,self__.meta34080,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5023__auto__ = ret;
if(cljs.core.truth_(and__5023__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5023__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34120 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34120) : self__.f.call(null,G__34120));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34079.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34079.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34079.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34080","meta34080",-1935156622,null)], null);
}));

(cljs.core.async.t_cljs$core$async34079.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34079.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34079");

(cljs.core.async.t_cljs$core$async34079.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34079");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34079.
 */
cljs.core.async.__GT_t_cljs$core$async34079 = (function cljs$core$async$__GT_t_cljs$core$async34079(f,ch,meta34080){
return (new cljs.core.async.t_cljs$core$async34079(f,ch,meta34080));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34079(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34121 = (function (f,ch,meta34122){
this.f = f;
this.ch = ch;
this.meta34122 = meta34122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34123,meta34122__$1){
var self__ = this;
var _34123__$1 = this;
return (new cljs.core.async.t_cljs$core$async34121(self__.f,self__.ch,meta34122__$1));
}));

(cljs.core.async.t_cljs$core$async34121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34123){
var self__ = this;
var _34123__$1 = this;
return self__.meta34122;
}));

(cljs.core.async.t_cljs$core$async34121.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34121.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34121.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34121.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34121.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34121.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34121.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34122","meta34122",-1376692862,null)], null);
}));

(cljs.core.async.t_cljs$core$async34121.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34121.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34121");

(cljs.core.async.t_cljs$core$async34121.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34121");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34121.
 */
cljs.core.async.__GT_t_cljs$core$async34121 = (function cljs$core$async$__GT_t_cljs$core$async34121(f,ch,meta34122){
return (new cljs.core.async.t_cljs$core$async34121(f,ch,meta34122));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async34121(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34128 = (function (p,ch,meta34129){
this.p = p;
this.ch = ch;
this.meta34129 = meta34129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34130,meta34129__$1){
var self__ = this;
var _34130__$1 = this;
return (new cljs.core.async.t_cljs$core$async34128(self__.p,self__.ch,meta34129__$1));
}));

(cljs.core.async.t_cljs$core$async34128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34130){
var self__ = this;
var _34130__$1 = this;
return self__.meta34129;
}));

(cljs.core.async.t_cljs$core$async34128.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34128.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34128.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34128.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34129","meta34129",1389194566,null)], null);
}));

(cljs.core.async.t_cljs$core$async34128.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34128");

(cljs.core.async.t_cljs$core$async34128.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"cljs.core.async/t_cljs$core$async34128");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34128.
 */
cljs.core.async.__GT_t_cljs$core$async34128 = (function cljs$core$async$__GT_t_cljs$core$async34128(p,ch,meta34129){
return (new cljs.core.async.t_cljs$core$async34128(p,ch,meta34129));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async34128(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34136 = arguments.length;
switch (G__34136) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31472__auto___35917 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_34167){
var state_val_34168 = (state_34167[(1)]);
if((state_val_34168 === (7))){
var inst_34160 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34171_35921 = state_34167__$1;
(statearr_34171_35921[(2)] = inst_34160);

(statearr_34171_35921[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (1))){
var state_34167__$1 = state_34167;
var statearr_34172_35922 = state_34167__$1;
(statearr_34172_35922[(2)] = null);

(statearr_34172_35922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (4))){
var inst_34140 = (state_34167[(7)]);
var inst_34140__$1 = (state_34167[(2)]);
var inst_34142 = (inst_34140__$1 == null);
var state_34167__$1 = (function (){var statearr_34173 = state_34167;
(statearr_34173[(7)] = inst_34140__$1);

return statearr_34173;
})();
if(cljs.core.truth_(inst_34142)){
var statearr_34174_35923 = state_34167__$1;
(statearr_34174_35923[(1)] = (5));

} else {
var statearr_34180_35925 = state_34167__$1;
(statearr_34180_35925[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (6))){
var inst_34140 = (state_34167[(7)]);
var inst_34146 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34140) : p.call(null,inst_34140));
var state_34167__$1 = state_34167;
if(cljs.core.truth_(inst_34146)){
var statearr_34183_35927 = state_34167__$1;
(statearr_34183_35927[(1)] = (8));

} else {
var statearr_34185_35928 = state_34167__$1;
(statearr_34185_35928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (3))){
var inst_34165 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34167__$1,inst_34165);
} else {
if((state_val_34168 === (2))){
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34167__$1,(4),ch);
} else {
if((state_val_34168 === (11))){
var inst_34149 = (state_34167[(2)]);
var state_34167__$1 = state_34167;
var statearr_34193_35933 = state_34167__$1;
(statearr_34193_35933[(2)] = inst_34149);

(statearr_34193_35933[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (9))){
var state_34167__$1 = state_34167;
var statearr_34194_35934 = state_34167__$1;
(statearr_34194_35934[(2)] = null);

(statearr_34194_35934[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (5))){
var inst_34144 = cljs.core.async.close_BANG_(out);
var state_34167__$1 = state_34167;
var statearr_34195_35935 = state_34167__$1;
(statearr_34195_35935[(2)] = inst_34144);

(statearr_34195_35935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (10))){
var inst_34152 = (state_34167[(2)]);
var state_34167__$1 = (function (){var statearr_34196 = state_34167;
(statearr_34196[(8)] = inst_34152);

return statearr_34196;
})();
var statearr_34197_35936 = state_34167__$1;
(statearr_34197_35936[(2)] = null);

(statearr_34197_35936[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34168 === (8))){
var inst_34140 = (state_34167[(7)]);
var state_34167__$1 = state_34167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34167__$1,(11),out,inst_34140);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31278__auto__ = null;
var cljs$core$async$state_machine__31278__auto____0 = (function (){
var statearr_34211 = [null,null,null,null,null,null,null,null,null];
(statearr_34211[(0)] = cljs$core$async$state_machine__31278__auto__);

(statearr_34211[(1)] = (1));

return statearr_34211;
});
var cljs$core$async$state_machine__31278__auto____1 = (function (state_34167){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_34167);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e34212){var ex__31281__auto__ = e34212;
var statearr_34213_35949 = state_34167;
(statearr_34213_35949[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_34167[(4)]))){
var statearr_34220_35950 = state_34167;
(statearr_34220_35950[(1)] = cljs.core.first((state_34167[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35951 = state_34167;
state_34167 = G__35951;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$state_machine__31278__auto__ = function(state_34167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31278__auto____1.call(this,state_34167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31278__auto____0;
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31278__auto____1;
return cljs$core$async$state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_34221 = f__31473__auto__();
(statearr_34221[(6)] = c__31472__auto___35917);

return statearr_34221;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34233 = arguments.length;
switch (G__34233) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__31472__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_34304){
var state_val_34305 = (state_34304[(1)]);
if((state_val_34305 === (7))){
var inst_34299 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34310_35955 = state_34304__$1;
(statearr_34310_35955[(2)] = inst_34299);

(statearr_34310_35955[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (20))){
var inst_34268 = (state_34304[(7)]);
var inst_34279 = (state_34304[(2)]);
var inst_34281 = cljs.core.next(inst_34268);
var inst_34254 = inst_34281;
var inst_34255 = null;
var inst_34256 = (0);
var inst_34257 = (0);
var state_34304__$1 = (function (){var statearr_34311 = state_34304;
(statearr_34311[(8)] = inst_34279);

(statearr_34311[(9)] = inst_34254);

(statearr_34311[(10)] = inst_34255);

(statearr_34311[(11)] = inst_34256);

(statearr_34311[(12)] = inst_34257);

return statearr_34311;
})();
var statearr_34312_35956 = state_34304__$1;
(statearr_34312_35956[(2)] = null);

(statearr_34312_35956[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (1))){
var state_34304__$1 = state_34304;
var statearr_34313_35957 = state_34304__$1;
(statearr_34313_35957[(2)] = null);

(statearr_34313_35957[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (4))){
var inst_34243 = (state_34304[(13)]);
var inst_34243__$1 = (state_34304[(2)]);
var inst_34244 = (inst_34243__$1 == null);
var state_34304__$1 = (function (){var statearr_34314 = state_34304;
(statearr_34314[(13)] = inst_34243__$1);

return statearr_34314;
})();
if(cljs.core.truth_(inst_34244)){
var statearr_34315_35958 = state_34304__$1;
(statearr_34315_35958[(1)] = (5));

} else {
var statearr_34316_35959 = state_34304__$1;
(statearr_34316_35959[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (15))){
var state_34304__$1 = state_34304;
var statearr_34320_35960 = state_34304__$1;
(statearr_34320_35960[(2)] = null);

(statearr_34320_35960[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (21))){
var state_34304__$1 = state_34304;
var statearr_34323_35961 = state_34304__$1;
(statearr_34323_35961[(2)] = null);

(statearr_34323_35961[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (13))){
var inst_34257 = (state_34304[(12)]);
var inst_34254 = (state_34304[(9)]);
var inst_34255 = (state_34304[(10)]);
var inst_34256 = (state_34304[(11)]);
var inst_34264 = (state_34304[(2)]);
var inst_34265 = (inst_34257 + (1));
var tmp34317 = inst_34254;
var tmp34318 = inst_34256;
var tmp34319 = inst_34255;
var inst_34254__$1 = tmp34317;
var inst_34255__$1 = tmp34319;
var inst_34256__$1 = tmp34318;
var inst_34257__$1 = inst_34265;
var state_34304__$1 = (function (){var statearr_34327 = state_34304;
(statearr_34327[(14)] = inst_34264);

(statearr_34327[(9)] = inst_34254__$1);

(statearr_34327[(10)] = inst_34255__$1);

(statearr_34327[(11)] = inst_34256__$1);

(statearr_34327[(12)] = inst_34257__$1);

return statearr_34327;
})();
var statearr_34329_35966 = state_34304__$1;
(statearr_34329_35966[(2)] = null);

(statearr_34329_35966[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (22))){
var state_34304__$1 = state_34304;
var statearr_34334_35967 = state_34304__$1;
(statearr_34334_35967[(2)] = null);

(statearr_34334_35967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (6))){
var inst_34243 = (state_34304[(13)]);
var inst_34252 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34243) : f.call(null,inst_34243));
var inst_34253 = cljs.core.seq(inst_34252);
var inst_34254 = inst_34253;
var inst_34255 = null;
var inst_34256 = (0);
var inst_34257 = (0);
var state_34304__$1 = (function (){var statearr_34335 = state_34304;
(statearr_34335[(9)] = inst_34254);

(statearr_34335[(10)] = inst_34255);

(statearr_34335[(11)] = inst_34256);

(statearr_34335[(12)] = inst_34257);

return statearr_34335;
})();
var statearr_34337_35973 = state_34304__$1;
(statearr_34337_35973[(2)] = null);

(statearr_34337_35973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (17))){
var inst_34268 = (state_34304[(7)]);
var inst_34272 = cljs.core.chunk_first(inst_34268);
var inst_34273 = cljs.core.chunk_rest(inst_34268);
var inst_34274 = cljs.core.count(inst_34272);
var inst_34254 = inst_34273;
var inst_34255 = inst_34272;
var inst_34256 = inst_34274;
var inst_34257 = (0);
var state_34304__$1 = (function (){var statearr_34338 = state_34304;
(statearr_34338[(9)] = inst_34254);

(statearr_34338[(10)] = inst_34255);

(statearr_34338[(11)] = inst_34256);

(statearr_34338[(12)] = inst_34257);

return statearr_34338;
})();
var statearr_34339_35974 = state_34304__$1;
(statearr_34339_35974[(2)] = null);

(statearr_34339_35974[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (3))){
var inst_34301 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34304__$1,inst_34301);
} else {
if((state_val_34305 === (12))){
var inst_34289 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34341_35975 = state_34304__$1;
(statearr_34341_35975[(2)] = inst_34289);

(statearr_34341_35975[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (2))){
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34304__$1,(4),in$);
} else {
if((state_val_34305 === (23))){
var inst_34297 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34342_35977 = state_34304__$1;
(statearr_34342_35977[(2)] = inst_34297);

(statearr_34342_35977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (19))){
var inst_34284 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34347_35978 = state_34304__$1;
(statearr_34347_35978[(2)] = inst_34284);

(statearr_34347_35978[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (11))){
var inst_34254 = (state_34304[(9)]);
var inst_34268 = (state_34304[(7)]);
var inst_34268__$1 = cljs.core.seq(inst_34254);
var state_34304__$1 = (function (){var statearr_34348 = state_34304;
(statearr_34348[(7)] = inst_34268__$1);

return statearr_34348;
})();
if(inst_34268__$1){
var statearr_34349_35979 = state_34304__$1;
(statearr_34349_35979[(1)] = (14));

} else {
var statearr_34350_35980 = state_34304__$1;
(statearr_34350_35980[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (9))){
var inst_34291 = (state_34304[(2)]);
var inst_34292 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34304__$1 = (function (){var statearr_34352 = state_34304;
(statearr_34352[(15)] = inst_34291);

return statearr_34352;
})();
if(cljs.core.truth_(inst_34292)){
var statearr_34354_35981 = state_34304__$1;
(statearr_34354_35981[(1)] = (21));

} else {
var statearr_34355_35982 = state_34304__$1;
(statearr_34355_35982[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (5))){
var inst_34246 = cljs.core.async.close_BANG_(out);
var state_34304__$1 = state_34304;
var statearr_34356_35983 = state_34304__$1;
(statearr_34356_35983[(2)] = inst_34246);

(statearr_34356_35983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (14))){
var inst_34268 = (state_34304[(7)]);
var inst_34270 = cljs.core.chunked_seq_QMARK_(inst_34268);
var state_34304__$1 = state_34304;
if(inst_34270){
var statearr_34357_35984 = state_34304__$1;
(statearr_34357_35984[(1)] = (17));

} else {
var statearr_34358_35985 = state_34304__$1;
(statearr_34358_35985[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (16))){
var inst_34287 = (state_34304[(2)]);
var state_34304__$1 = state_34304;
var statearr_34359_35986 = state_34304__$1;
(statearr_34359_35986[(2)] = inst_34287);

(statearr_34359_35986[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34305 === (10))){
var inst_34255 = (state_34304[(10)]);
var inst_34257 = (state_34304[(12)]);
var inst_34262 = cljs.core._nth(inst_34255,inst_34257);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34304__$1,(13),out,inst_34262);
} else {
if((state_val_34305 === (18))){
var inst_34268 = (state_34304[(7)]);
var inst_34277 = cljs.core.first(inst_34268);
var state_34304__$1 = state_34304;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34304__$1,(20),out,inst_34277);
} else {
if((state_val_34305 === (8))){
var inst_34257 = (state_34304[(12)]);
var inst_34256 = (state_34304[(11)]);
var inst_34259 = (inst_34257 < inst_34256);
var inst_34260 = inst_34259;
var state_34304__$1 = state_34304;
if(cljs.core.truth_(inst_34260)){
var statearr_34360_35990 = state_34304__$1;
(statearr_34360_35990[(1)] = (10));

} else {
var statearr_34368_35991 = state_34304__$1;
(statearr_34368_35991[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__31278__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__31278__auto____0 = (function (){
var statearr_34379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34379[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__31278__auto__);

(statearr_34379[(1)] = (1));

return statearr_34379;
});
var cljs$core$async$mapcat_STAR__$_state_machine__31278__auto____1 = (function (state_34304){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_34304);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e34385){var ex__31281__auto__ = e34385;
var statearr_34386_35992 = state_34304;
(statearr_34386_35992[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_34304[(4)]))){
var statearr_34390_35997 = state_34304;
(statearr_34390_35997[(1)] = cljs.core.first((state_34304[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35998 = state_34304;
state_34304 = G__35998;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__31278__auto__ = function(state_34304){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__31278__auto____1.call(this,state_34304);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__31278__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__31278__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_34394 = f__31473__auto__();
(statearr_34394[(6)] = c__31472__auto__);

return statearr_34394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));

return c__31472__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34405 = arguments.length;
switch (G__34405) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34417 = arguments.length;
switch (G__34417) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34448 = arguments.length;
switch (G__34448) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31472__auto___36004 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_34477){
var state_val_34478 = (state_34477[(1)]);
if((state_val_34478 === (7))){
var inst_34472 = (state_34477[(2)]);
var state_34477__$1 = state_34477;
var statearr_34479_36007 = state_34477__$1;
(statearr_34479_36007[(2)] = inst_34472);

(statearr_34479_36007[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (1))){
var inst_34449 = null;
var state_34477__$1 = (function (){var statearr_34480 = state_34477;
(statearr_34480[(7)] = inst_34449);

return statearr_34480;
})();
var statearr_34481_36008 = state_34477__$1;
(statearr_34481_36008[(2)] = null);

(statearr_34481_36008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (4))){
var inst_34453 = (state_34477[(8)]);
var inst_34453__$1 = (state_34477[(2)]);
var inst_34457 = (inst_34453__$1 == null);
var inst_34458 = cljs.core.not(inst_34457);
var state_34477__$1 = (function (){var statearr_34482 = state_34477;
(statearr_34482[(8)] = inst_34453__$1);

return statearr_34482;
})();
if(inst_34458){
var statearr_34483_36009 = state_34477__$1;
(statearr_34483_36009[(1)] = (5));

} else {
var statearr_34484_36010 = state_34477__$1;
(statearr_34484_36010[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (6))){
var state_34477__$1 = state_34477;
var statearr_34485_36011 = state_34477__$1;
(statearr_34485_36011[(2)] = null);

(statearr_34485_36011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (3))){
var inst_34474 = (state_34477[(2)]);
var inst_34475 = cljs.core.async.close_BANG_(out);
var state_34477__$1 = (function (){var statearr_34487 = state_34477;
(statearr_34487[(9)] = inst_34474);

return statearr_34487;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34477__$1,inst_34475);
} else {
if((state_val_34478 === (2))){
var state_34477__$1 = state_34477;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34477__$1,(4),ch);
} else {
if((state_val_34478 === (11))){
var inst_34453 = (state_34477[(8)]);
var inst_34466 = (state_34477[(2)]);
var inst_34449 = inst_34453;
var state_34477__$1 = (function (){var statearr_34491 = state_34477;
(statearr_34491[(10)] = inst_34466);

(statearr_34491[(7)] = inst_34449);

return statearr_34491;
})();
var statearr_34492_36016 = state_34477__$1;
(statearr_34492_36016[(2)] = null);

(statearr_34492_36016[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (9))){
var inst_34453 = (state_34477[(8)]);
var state_34477__$1 = state_34477;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34477__$1,(11),out,inst_34453);
} else {
if((state_val_34478 === (5))){
var inst_34453 = (state_34477[(8)]);
var inst_34449 = (state_34477[(7)]);
var inst_34460 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34453,inst_34449);
var state_34477__$1 = state_34477;
if(inst_34460){
var statearr_34494_36017 = state_34477__$1;
(statearr_34494_36017[(1)] = (8));

} else {
var statearr_34496_36018 = state_34477__$1;
(statearr_34496_36018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (10))){
var inst_34469 = (state_34477[(2)]);
var state_34477__$1 = state_34477;
var statearr_34500_36021 = state_34477__$1;
(statearr_34500_36021[(2)] = inst_34469);

(statearr_34500_36021[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34478 === (8))){
var inst_34449 = (state_34477[(7)]);
var tmp34493 = inst_34449;
var inst_34449__$1 = tmp34493;
var state_34477__$1 = (function (){var statearr_34501 = state_34477;
(statearr_34501[(7)] = inst_34449__$1);

return statearr_34501;
})();
var statearr_34502_36026 = state_34477__$1;
(statearr_34502_36026[(2)] = null);

(statearr_34502_36026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31278__auto__ = null;
var cljs$core$async$state_machine__31278__auto____0 = (function (){
var statearr_34503 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34503[(0)] = cljs$core$async$state_machine__31278__auto__);

(statearr_34503[(1)] = (1));

return statearr_34503;
});
var cljs$core$async$state_machine__31278__auto____1 = (function (state_34477){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_34477);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e34504){var ex__31281__auto__ = e34504;
var statearr_34505_36034 = state_34477;
(statearr_34505_36034[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_34477[(4)]))){
var statearr_34506_36035 = state_34477;
(statearr_34506_36035[(1)] = cljs.core.first((state_34477[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36036 = state_34477;
state_34477 = G__36036;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$state_machine__31278__auto__ = function(state_34477){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31278__auto____1.call(this,state_34477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31278__auto____0;
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31278__auto____1;
return cljs$core$async$state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_34510 = f__31473__auto__();
(statearr_34510[(6)] = c__31472__auto___36004);

return statearr_34510;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34525 = arguments.length;
switch (G__34525) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31472__auto___36046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_34567){
var state_val_34568 = (state_34567[(1)]);
if((state_val_34568 === (7))){
var inst_34563 = (state_34567[(2)]);
var state_34567__$1 = state_34567;
var statearr_34570_36050 = state_34567__$1;
(statearr_34570_36050[(2)] = inst_34563);

(statearr_34570_36050[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (1))){
var inst_34527 = (new Array(n));
var inst_34528 = inst_34527;
var inst_34529 = (0);
var state_34567__$1 = (function (){var statearr_34571 = state_34567;
(statearr_34571[(7)] = inst_34528);

(statearr_34571[(8)] = inst_34529);

return statearr_34571;
})();
var statearr_34572_36055 = state_34567__$1;
(statearr_34572_36055[(2)] = null);

(statearr_34572_36055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (4))){
var inst_34532 = (state_34567[(9)]);
var inst_34532__$1 = (state_34567[(2)]);
var inst_34533 = (inst_34532__$1 == null);
var inst_34534 = cljs.core.not(inst_34533);
var state_34567__$1 = (function (){var statearr_34573 = state_34567;
(statearr_34573[(9)] = inst_34532__$1);

return statearr_34573;
})();
if(inst_34534){
var statearr_34574_36056 = state_34567__$1;
(statearr_34574_36056[(1)] = (5));

} else {
var statearr_34575_36057 = state_34567__$1;
(statearr_34575_36057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (15))){
var inst_34557 = (state_34567[(2)]);
var state_34567__$1 = state_34567;
var statearr_34576_36061 = state_34567__$1;
(statearr_34576_36061[(2)] = inst_34557);

(statearr_34576_36061[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (13))){
var state_34567__$1 = state_34567;
var statearr_34577_36067 = state_34567__$1;
(statearr_34577_36067[(2)] = null);

(statearr_34577_36067[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (6))){
var inst_34529 = (state_34567[(8)]);
var inst_34553 = (inst_34529 > (0));
var state_34567__$1 = state_34567;
if(cljs.core.truth_(inst_34553)){
var statearr_34578_36080 = state_34567__$1;
(statearr_34578_36080[(1)] = (12));

} else {
var statearr_34579_36081 = state_34567__$1;
(statearr_34579_36081[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (3))){
var inst_34565 = (state_34567[(2)]);
var state_34567__$1 = state_34567;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34567__$1,inst_34565);
} else {
if((state_val_34568 === (12))){
var inst_34528 = (state_34567[(7)]);
var inst_34555 = cljs.core.vec(inst_34528);
var state_34567__$1 = state_34567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34567__$1,(15),out,inst_34555);
} else {
if((state_val_34568 === (2))){
var state_34567__$1 = state_34567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34567__$1,(4),ch);
} else {
if((state_val_34568 === (11))){
var inst_34547 = (state_34567[(2)]);
var inst_34548 = (new Array(n));
var inst_34528 = inst_34548;
var inst_34529 = (0);
var state_34567__$1 = (function (){var statearr_34584 = state_34567;
(statearr_34584[(10)] = inst_34547);

(statearr_34584[(7)] = inst_34528);

(statearr_34584[(8)] = inst_34529);

return statearr_34584;
})();
var statearr_34586_36094 = state_34567__$1;
(statearr_34586_36094[(2)] = null);

(statearr_34586_36094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (9))){
var inst_34528 = (state_34567[(7)]);
var inst_34545 = cljs.core.vec(inst_34528);
var state_34567__$1 = state_34567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34567__$1,(11),out,inst_34545);
} else {
if((state_val_34568 === (5))){
var inst_34528 = (state_34567[(7)]);
var inst_34529 = (state_34567[(8)]);
var inst_34532 = (state_34567[(9)]);
var inst_34540 = (state_34567[(11)]);
var inst_34536 = (inst_34528[inst_34529] = inst_34532);
var inst_34540__$1 = (inst_34529 + (1));
var inst_34541 = (inst_34540__$1 < n);
var state_34567__$1 = (function (){var statearr_34587 = state_34567;
(statearr_34587[(12)] = inst_34536);

(statearr_34587[(11)] = inst_34540__$1);

return statearr_34587;
})();
if(cljs.core.truth_(inst_34541)){
var statearr_34588_36128 = state_34567__$1;
(statearr_34588_36128[(1)] = (8));

} else {
var statearr_34589_36130 = state_34567__$1;
(statearr_34589_36130[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (14))){
var inst_34560 = (state_34567[(2)]);
var inst_34561 = cljs.core.async.close_BANG_(out);
var state_34567__$1 = (function (){var statearr_34593 = state_34567;
(statearr_34593[(13)] = inst_34560);

return statearr_34593;
})();
var statearr_34596_36138 = state_34567__$1;
(statearr_34596_36138[(2)] = inst_34561);

(statearr_34596_36138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (10))){
var inst_34551 = (state_34567[(2)]);
var state_34567__$1 = state_34567;
var statearr_34597_36139 = state_34567__$1;
(statearr_34597_36139[(2)] = inst_34551);

(statearr_34597_36139[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34568 === (8))){
var inst_34528 = (state_34567[(7)]);
var inst_34540 = (state_34567[(11)]);
var tmp34590 = inst_34528;
var inst_34528__$1 = tmp34590;
var inst_34529 = inst_34540;
var state_34567__$1 = (function (){var statearr_34598 = state_34567;
(statearr_34598[(7)] = inst_34528__$1);

(statearr_34598[(8)] = inst_34529);

return statearr_34598;
})();
var statearr_34599_36141 = state_34567__$1;
(statearr_34599_36141[(2)] = null);

(statearr_34599_36141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31278__auto__ = null;
var cljs$core$async$state_machine__31278__auto____0 = (function (){
var statearr_34603 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34603[(0)] = cljs$core$async$state_machine__31278__auto__);

(statearr_34603[(1)] = (1));

return statearr_34603;
});
var cljs$core$async$state_machine__31278__auto____1 = (function (state_34567){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_34567);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e34604){var ex__31281__auto__ = e34604;
var statearr_34605_36144 = state_34567;
(statearr_34605_36144[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_34567[(4)]))){
var statearr_34606_36145 = state_34567;
(statearr_34606_36145[(1)] = cljs.core.first((state_34567[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36146 = state_34567;
state_34567 = G__36146;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$state_machine__31278__auto__ = function(state_34567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31278__auto____1.call(this,state_34567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31278__auto____0;
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31278__auto____1;
return cljs$core$async$state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_34610 = f__31473__auto__();
(statearr_34610[(6)] = c__31472__auto___36046);

return statearr_34610;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34612 = arguments.length;
switch (G__34612) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__31472__auto___36287 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__31473__auto__ = (function (){var switch__31277__auto__ = (function (state_34673){
var state_val_34674 = (state_34673[(1)]);
if((state_val_34674 === (7))){
var inst_34666 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34677_36299 = state_34673__$1;
(statearr_34677_36299[(2)] = inst_34666);

(statearr_34677_36299[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (1))){
var inst_34622 = [];
var inst_34623 = inst_34622;
var inst_34624 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34673__$1 = (function (){var statearr_34678 = state_34673;
(statearr_34678[(7)] = inst_34623);

(statearr_34678[(8)] = inst_34624);

return statearr_34678;
})();
var statearr_34679_36347 = state_34673__$1;
(statearr_34679_36347[(2)] = null);

(statearr_34679_36347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (4))){
var inst_34628 = (state_34673[(9)]);
var inst_34628__$1 = (state_34673[(2)]);
var inst_34630 = (inst_34628__$1 == null);
var inst_34631 = cljs.core.not(inst_34630);
var state_34673__$1 = (function (){var statearr_34683 = state_34673;
(statearr_34683[(9)] = inst_34628__$1);

return statearr_34683;
})();
if(inst_34631){
var statearr_34686_36351 = state_34673__$1;
(statearr_34686_36351[(1)] = (5));

} else {
var statearr_34687_36353 = state_34673__$1;
(statearr_34687_36353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (15))){
var inst_34623 = (state_34673[(7)]);
var inst_34658 = cljs.core.vec(inst_34623);
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34673__$1,(18),out,inst_34658);
} else {
if((state_val_34674 === (13))){
var inst_34651 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34693_36354 = state_34673__$1;
(statearr_34693_36354[(2)] = inst_34651);

(statearr_34693_36354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (6))){
var inst_34623 = (state_34673[(7)]);
var inst_34654 = inst_34623.length;
var inst_34655 = (inst_34654 > (0));
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34655)){
var statearr_34694_36363 = state_34673__$1;
(statearr_34694_36363[(1)] = (15));

} else {
var statearr_34695_36373 = state_34673__$1;
(statearr_34695_36373[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (17))){
var inst_34663 = (state_34673[(2)]);
var inst_34664 = cljs.core.async.close_BANG_(out);
var state_34673__$1 = (function (){var statearr_34696 = state_34673;
(statearr_34696[(10)] = inst_34663);

return statearr_34696;
})();
var statearr_34697_36374 = state_34673__$1;
(statearr_34697_36374[(2)] = inst_34664);

(statearr_34697_36374[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (3))){
var inst_34668 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34673__$1,inst_34668);
} else {
if((state_val_34674 === (12))){
var inst_34623 = (state_34673[(7)]);
var inst_34644 = cljs.core.vec(inst_34623);
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34673__$1,(14),out,inst_34644);
} else {
if((state_val_34674 === (2))){
var state_34673__$1 = state_34673;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34673__$1,(4),ch);
} else {
if((state_val_34674 === (11))){
var inst_34623 = (state_34673[(7)]);
var inst_34628 = (state_34673[(9)]);
var inst_34633 = (state_34673[(11)]);
var inst_34641 = inst_34623.push(inst_34628);
var tmp34699 = inst_34623;
var inst_34623__$1 = tmp34699;
var inst_34624 = inst_34633;
var state_34673__$1 = (function (){var statearr_34702 = state_34673;
(statearr_34702[(12)] = inst_34641);

(statearr_34702[(7)] = inst_34623__$1);

(statearr_34702[(8)] = inst_34624);

return statearr_34702;
})();
var statearr_34703_36384 = state_34673__$1;
(statearr_34703_36384[(2)] = null);

(statearr_34703_36384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (9))){
var inst_34624 = (state_34673[(8)]);
var inst_34637 = cljs.core.keyword_identical_QMARK_(inst_34624,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_34673__$1 = state_34673;
var statearr_34704_36385 = state_34673__$1;
(statearr_34704_36385[(2)] = inst_34637);

(statearr_34704_36385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (5))){
var inst_34628 = (state_34673[(9)]);
var inst_34633 = (state_34673[(11)]);
var inst_34624 = (state_34673[(8)]);
var inst_34634 = (state_34673[(13)]);
var inst_34633__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34628) : f.call(null,inst_34628));
var inst_34634__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34633__$1,inst_34624);
var state_34673__$1 = (function (){var statearr_34705 = state_34673;
(statearr_34705[(11)] = inst_34633__$1);

(statearr_34705[(13)] = inst_34634__$1);

return statearr_34705;
})();
if(inst_34634__$1){
var statearr_34707_36392 = state_34673__$1;
(statearr_34707_36392[(1)] = (8));

} else {
var statearr_34708_36394 = state_34673__$1;
(statearr_34708_36394[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (14))){
var inst_34628 = (state_34673[(9)]);
var inst_34633 = (state_34673[(11)]);
var inst_34646 = (state_34673[(2)]);
var inst_34647 = [];
var inst_34648 = inst_34647.push(inst_34628);
var inst_34623 = inst_34647;
var inst_34624 = inst_34633;
var state_34673__$1 = (function (){var statearr_34713 = state_34673;
(statearr_34713[(14)] = inst_34646);

(statearr_34713[(15)] = inst_34648);

(statearr_34713[(7)] = inst_34623);

(statearr_34713[(8)] = inst_34624);

return statearr_34713;
})();
var statearr_34714_36402 = state_34673__$1;
(statearr_34714_36402[(2)] = null);

(statearr_34714_36402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (16))){
var state_34673__$1 = state_34673;
var statearr_34715_36403 = state_34673__$1;
(statearr_34715_36403[(2)] = null);

(statearr_34715_36403[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (10))){
var inst_34639 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
if(cljs.core.truth_(inst_34639)){
var statearr_34716_36413 = state_34673__$1;
(statearr_34716_36413[(1)] = (11));

} else {
var statearr_34717_36415 = state_34673__$1;
(statearr_34717_36415[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (18))){
var inst_34660 = (state_34673[(2)]);
var state_34673__$1 = state_34673;
var statearr_34720_36421 = state_34673__$1;
(statearr_34720_36421[(2)] = inst_34660);

(statearr_34720_36421[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34674 === (8))){
var inst_34634 = (state_34673[(13)]);
var state_34673__$1 = state_34673;
var statearr_34721_36431 = state_34673__$1;
(statearr_34721_36431[(2)] = inst_34634);

(statearr_34721_36431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__31278__auto__ = null;
var cljs$core$async$state_machine__31278__auto____0 = (function (){
var statearr_34723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34723[(0)] = cljs$core$async$state_machine__31278__auto__);

(statearr_34723[(1)] = (1));

return statearr_34723;
});
var cljs$core$async$state_machine__31278__auto____1 = (function (state_34673){
while(true){
var ret_value__31279__auto__ = (function (){try{while(true){
var result__31280__auto__ = switch__31277__auto__(state_34673);
if(cljs.core.keyword_identical_QMARK_(result__31280__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__31280__auto__;
}
break;
}
}catch (e34724){var ex__31281__auto__ = e34724;
var statearr_34725_36432 = state_34673;
(statearr_34725_36432[(2)] = ex__31281__auto__);


if(cljs.core.seq((state_34673[(4)]))){
var statearr_34726_36437 = state_34673;
(statearr_34726_36437[(1)] = cljs.core.first((state_34673[(4)])));

} else {
throw ex__31281__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__31279__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36441 = state_34673;
state_34673 = G__36441;
continue;
} else {
return ret_value__31279__auto__;
}
break;
}
});
cljs$core$async$state_machine__31278__auto__ = function(state_34673){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__31278__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__31278__auto____1.call(this,state_34673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__31278__auto____0;
cljs$core$async$state_machine__31278__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__31278__auto____1;
return cljs$core$async$state_machine__31278__auto__;
})()
})();
var state__31474__auto__ = (function (){var statearr_34732 = f__31473__auto__();
(statearr_34732[(6)] = c__31472__auto___36287);

return statearr_34732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__31474__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
