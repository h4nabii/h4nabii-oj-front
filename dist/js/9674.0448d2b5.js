"use strict";(self["webpackChunkh4nabii_oj_frontend"]=self["webpackChunkh4nabii_oj_frontend"]||[]).push([[9674],{89674:function(e,s,n){n.r(s),n.d(s,{conf:function(){return t},language:function(){return r}});
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.43.0(94c055bcbdd49f04a0fa15515e848542a79fb948)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/
var t={comments:{lineComment:"#"},brackets:[["{","}"],["[","]"],["(",")"]],autoClosingPairs:[{open:"'",close:"'",notIn:["string"]},{open:'"',close:'"',notIn:["string"]},{open:"{",close:"}"},{open:"[",close:"]"},{open:"(",close:")"}]},r={defaultToken:"",tokenPostfix:".rq",brackets:[{token:"delimiter.curly",open:"{",close:"}"},{token:"delimiter.parenthesis",open:"(",close:")"},{token:"delimiter.square",open:"[",close:"]"},{token:"delimiter.angle",open:"<",close:">"}],keywords:["add","as","asc","ask","base","by","clear","construct","copy","create","data","delete","desc","describe","distinct","drop","false","filter","from","graph","group","having","in","insert","limit","load","minus","move","named","not","offset","optional","order","prefix","reduced","select","service","silent","to","true","undef","union","using","values","where","with"],builtinFunctions:["a","abs","avg","bind","bnode","bound","ceil","coalesce","concat","contains","count","datatype","day","encode_for_uri","exists","floor","group_concat","hours","if","iri","isblank","isiri","isliteral","isnumeric","isuri","lang","langmatches","lcase","max","md5","min","minutes","month","now","rand","regex","replace","round","sameterm","sample","seconds","sha1","sha256","sha384","sha512","str","strafter","strbefore","strdt","strends","strlang","strlen","strstarts","struuid","substr","sum","timezone","tz","ucase","uri","uuid","year"],ignoreCase:!0,tokenizer:{root:[[/<[^\s\u00a0>]*>?/,"tag"],{include:"@strings"},[/#.*/,"comment"],[/[{}()\[\]]/,"@brackets"],[/[;,.]/,"delimiter"],[/[_\w\d]+:(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])*/,"tag"],[/:(\.(?=[\w_\-\\%])|[:\w_-]|\\[-\\_~.!$&'()*+,;=/?#@%]|%[a-f\d][a-f\d])+/,"tag"],[/[$?]?[_\w\d]+/,{cases:{"@keywords":{token:"keyword"},"@builtinFunctions":{token:"predefined.sql"},"@default":"identifier"}}],[/\^\^/,"operator.sql"],[/\^[*+\-<>=&|^\/!?]*/,"operator.sql"],[/[*+\-<>=&|\/!?]/,"operator.sql"],[/@[a-z\d\-]*/,"metatag.html"],[/\s+/,"white"]],strings:[[/'([^'\\]|\\.)*$/,"string.invalid"],[/'$/,"string.sql","@pop"],[/'/,"string.sql","@stringBody"],[/"([^"\\]|\\.)*$/,"string.invalid"],[/"$/,"string.sql","@pop"],[/"/,"string.sql","@dblStringBody"]],stringBody:[[/[^\\']+/,"string.sql"],[/\\./,"string.escape"],[/'/,"string.sql","@pop"]],dblStringBody:[[/[^\\"]+/,"string.sql"],[/\\./,"string.escape"],[/"/,"string.sql","@pop"]]}}}}]);
//# sourceMappingURL=9674.0448d2b5.js.map