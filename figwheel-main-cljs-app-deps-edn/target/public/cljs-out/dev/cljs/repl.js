// Compiled by ClojureScript 1.10.773 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__24427){
var map__24428 = p__24427;
var map__24428__$1 = (((((!((map__24428 == null))))?(((((map__24428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24428):map__24428);
var m = map__24428__$1;
var n = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__24428__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24430_24462 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24431_24463 = null;
var count__24432_24464 = (0);
var i__24433_24465 = (0);
while(true){
if((i__24433_24465 < count__24432_24464)){
var f_24466 = cljs.core._nth.call(null,chunk__24431_24463,i__24433_24465);
cljs.core.println.call(null,"  ",f_24466);


var G__24467 = seq__24430_24462;
var G__24468 = chunk__24431_24463;
var G__24469 = count__24432_24464;
var G__24470 = (i__24433_24465 + (1));
seq__24430_24462 = G__24467;
chunk__24431_24463 = G__24468;
count__24432_24464 = G__24469;
i__24433_24465 = G__24470;
continue;
} else {
var temp__5457__auto___24471 = cljs.core.seq.call(null,seq__24430_24462);
if(temp__5457__auto___24471){
var seq__24430_24472__$1 = temp__5457__auto___24471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24430_24472__$1)){
var c__4556__auto___24473 = cljs.core.chunk_first.call(null,seq__24430_24472__$1);
var G__24474 = cljs.core.chunk_rest.call(null,seq__24430_24472__$1);
var G__24475 = c__4556__auto___24473;
var G__24476 = cljs.core.count.call(null,c__4556__auto___24473);
var G__24477 = (0);
seq__24430_24462 = G__24474;
chunk__24431_24463 = G__24475;
count__24432_24464 = G__24476;
i__24433_24465 = G__24477;
continue;
} else {
var f_24478 = cljs.core.first.call(null,seq__24430_24472__$1);
cljs.core.println.call(null,"  ",f_24478);


var G__24479 = cljs.core.next.call(null,seq__24430_24472__$1);
var G__24480 = null;
var G__24481 = (0);
var G__24482 = (0);
seq__24430_24462 = G__24479;
chunk__24431_24463 = G__24480;
count__24432_24464 = G__24481;
i__24433_24465 = G__24482;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_24483 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_24483);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_24483)))?cljs.core.second.call(null,arglists_24483):arglists_24483));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__24434_24484 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__24435_24485 = null;
var count__24436_24486 = (0);
var i__24437_24487 = (0);
while(true){
if((i__24437_24487 < count__24436_24486)){
var vec__24448_24488 = cljs.core._nth.call(null,chunk__24435_24485,i__24437_24487);
var name_24489 = cljs.core.nth.call(null,vec__24448_24488,(0),null);
var map__24451_24490 = cljs.core.nth.call(null,vec__24448_24488,(1),null);
var map__24451_24491__$1 = (((((!((map__24451_24490 == null))))?(((((map__24451_24490.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24451_24490.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24451_24490):map__24451_24490);
var doc_24492 = cljs.core.get.call(null,map__24451_24491__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24493 = cljs.core.get.call(null,map__24451_24491__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24489);

cljs.core.println.call(null," ",arglists_24493);

if(cljs.core.truth_(doc_24492)){
cljs.core.println.call(null," ",doc_24492);
} else {
}


var G__24494 = seq__24434_24484;
var G__24495 = chunk__24435_24485;
var G__24496 = count__24436_24486;
var G__24497 = (i__24437_24487 + (1));
seq__24434_24484 = G__24494;
chunk__24435_24485 = G__24495;
count__24436_24486 = G__24496;
i__24437_24487 = G__24497;
continue;
} else {
var temp__5457__auto___24498 = cljs.core.seq.call(null,seq__24434_24484);
if(temp__5457__auto___24498){
var seq__24434_24499__$1 = temp__5457__auto___24498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24434_24499__$1)){
var c__4556__auto___24500 = cljs.core.chunk_first.call(null,seq__24434_24499__$1);
var G__24501 = cljs.core.chunk_rest.call(null,seq__24434_24499__$1);
var G__24502 = c__4556__auto___24500;
var G__24503 = cljs.core.count.call(null,c__4556__auto___24500);
var G__24504 = (0);
seq__24434_24484 = G__24501;
chunk__24435_24485 = G__24502;
count__24436_24486 = G__24503;
i__24437_24487 = G__24504;
continue;
} else {
var vec__24453_24505 = cljs.core.first.call(null,seq__24434_24499__$1);
var name_24506 = cljs.core.nth.call(null,vec__24453_24505,(0),null);
var map__24456_24507 = cljs.core.nth.call(null,vec__24453_24505,(1),null);
var map__24456_24508__$1 = (((((!((map__24456_24507 == null))))?(((((map__24456_24507.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24456_24507.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24456_24507):map__24456_24507);
var doc_24509 = cljs.core.get.call(null,map__24456_24508__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_24510 = cljs.core.get.call(null,map__24456_24508__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_24506);

cljs.core.println.call(null," ",arglists_24510);

if(cljs.core.truth_(doc_24509)){
cljs.core.println.call(null," ",doc_24509);
} else {
}


var G__24511 = cljs.core.next.call(null,seq__24434_24499__$1);
var G__24512 = null;
var G__24513 = (0);
var G__24514 = (0);
seq__24434_24484 = G__24511;
chunk__24435_24485 = G__24512;
count__24436_24486 = G__24513;
i__24437_24487 = G__24514;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__24458 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__24459 = null;
var count__24460 = (0);
var i__24461 = (0);
while(true){
if((i__24461 < count__24460)){
var role = cljs.core._nth.call(null,chunk__24459,i__24461);
var temp__5457__auto___24515__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___24515__$1)){
var spec_24516 = temp__5457__auto___24515__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24516));
} else {
}


var G__24517 = seq__24458;
var G__24518 = chunk__24459;
var G__24519 = count__24460;
var G__24520 = (i__24461 + (1));
seq__24458 = G__24517;
chunk__24459 = G__24518;
count__24460 = G__24519;
i__24461 = G__24520;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__24458);
if(temp__5457__auto____$1){
var seq__24458__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24458__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__24458__$1);
var G__24521 = cljs.core.chunk_rest.call(null,seq__24458__$1);
var G__24522 = c__4556__auto__;
var G__24523 = cljs.core.count.call(null,c__4556__auto__);
var G__24524 = (0);
seq__24458 = G__24521;
chunk__24459 = G__24522;
count__24460 = G__24523;
i__24461 = G__24524;
continue;
} else {
var role = cljs.core.first.call(null,seq__24458__$1);
var temp__5457__auto___24525__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___24525__$2)){
var spec_24526 = temp__5457__auto___24525__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_24526));
} else {
}


var G__24527 = cljs.core.next.call(null,seq__24458__$1);
var G__24528 = null;
var G__24529 = (0);
var G__24530 = (0);
seq__24458 = G__24527;
chunk__24459 = G__24528;
count__24460 = G__24529;
i__24461 = G__24530;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__24531 = cljs.core.conj.call(null,via,t);
var G__24532 = cljs.core.ex_cause.call(null,t);
via = G__24531;
t = G__24532;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__24535 = datafied_throwable;
var map__24535__$1 = (((((!((map__24535 == null))))?(((((map__24535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24535):map__24535);
var via = cljs.core.get.call(null,map__24535__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__24535__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__24535__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__24536 = cljs.core.last.call(null,via);
var map__24536__$1 = (((((!((map__24536 == null))))?(((((map__24536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24536):map__24536);
var type = cljs.core.get.call(null,map__24536__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__24536__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__24536__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__24537 = data;
var map__24537__$1 = (((((!((map__24537 == null))))?(((((map__24537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24537):map__24537);
var problems = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__24537__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__24538 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__24538__$1 = (((((!((map__24538 == null))))?(((((map__24538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24538):map__24538);
var top_data = map__24538__$1;
var source = cljs.core.get.call(null,map__24538__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__24543 = phase;
var G__24543__$1 = (((G__24543 instanceof cljs.core.Keyword))?G__24543.fqn:null);
switch (G__24543__$1) {
case "read-source":
var map__24544 = data;
var map__24544__$1 = (((((!((map__24544 == null))))?(((((map__24544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24544):map__24544);
var line = cljs.core.get.call(null,map__24544__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__24544__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__24546 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__24546__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__24546,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24546);
var G__24546__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__24546__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24546__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__24546__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24546__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__24547 = top_data;
var G__24547__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__24547,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__24547);
var G__24547__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__24547__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__24547__$1);
var G__24547__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__24547__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24547__$2);
var G__24547__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__24547__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24547__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__24547__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24547__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__24548 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__24548,(0),null);
var method = cljs.core.nth.call(null,vec__24548,(1),null);
var file = cljs.core.nth.call(null,vec__24548,(2),null);
var line = cljs.core.nth.call(null,vec__24548,(3),null);
var G__24551 = top_data;
var G__24551__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__24551,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__24551);
var G__24551__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__24551__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__24551__$1);
var G__24551__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__24551__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__24551__$2);
var G__24551__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__24551__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__24551__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__24551__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__24551__$4;
}

break;
case "execution":
var vec__24552 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__24552,(0),null);
var method = cljs.core.nth.call(null,vec__24552,(1),null);
var file = cljs.core.nth.call(null,vec__24552,(2),null);
var line = cljs.core.nth.call(null,vec__24552,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__24534_SHARP_){
var or__4126__auto__ = (p1__24534_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__24534_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__24555 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__24555__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__24555,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__24555);
var G__24555__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__24555__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__24555__$1);
var G__24555__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__24555__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__24555__$2);
var G__24555__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__24555__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__24555__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__24555__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__24555__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24543__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__24559){
var map__24560 = p__24559;
var map__24560__$1 = (((((!((map__24560 == null))))?(((((map__24560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24560):map__24560);
var triage_data = map__24560__$1;
var phase = cljs.core.get.call(null,map__24560__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__24560__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__24560__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__24560__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__24560__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__24560__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__24560__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__24560__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__24562 = phase;
var G__24562__$1 = (((G__24562 instanceof cljs.core.Keyword))?G__24562.fqn:null);
switch (G__24562__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24563_24572 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24564_24573 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24565_24574 = true;
var _STAR_print_fn_STAR__temp_val__24566_24575 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24565_24574);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24566_24575);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__24557_SHARP_){
return cljs.core.dissoc.call(null,p1__24557_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24564_24573);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24563_24572);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__24567_24576 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__24568_24577 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__24569_24578 = true;
var _STAR_print_fn_STAR__temp_val__24570_24579 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__24569_24578);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__24570_24579);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__24558_SHARP_){
return cljs.core.dissoc.call(null,p1__24558_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__24568_24577);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__24567_24576);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__24562__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
