var entityExtraction,express,formatData,formatText,hpKey,router;entityExtraction=void 0,express=void 0,formatData=void 0,formatText=void 0,hpKey=void 0,router=void 0,express=require("express"),router=express.Router(),entityExtraction=require("haven-entity-extraction"),hpKey=require("../keys").hp,formatText=function(t){return t=t.replace(/(?:https?|ftp):\/\/[\n\S]+/g,""),t=t.replace(/[^A-Za-z0-9 ]/g,""),t=t.substring(0,5e3)},formatData=function(t){var e,r,o,i,n,a;for(i=void 0,n=void 0,a=void 0,e=void 0,r=void 0,o=void 0,a=[],o=Object.keys(t),e=0,r=o.length;r>e;)n=o[e],i=n.charAt(0).toUpperCase()+n.split("_")[0].slice(1),a.push({name:i,items:t[n]}),e++;return a=a.sort(function(t,e){return e.items.length-t.items.length})},router.post("/",function(t,e){return entityExtraction(formatText(t.body.text),hpKey,function(t){return e.json(formatData(t))})}),module.exports=router;
/* (C) Alicia Sykes <aliciasykes.com> MIT License. */