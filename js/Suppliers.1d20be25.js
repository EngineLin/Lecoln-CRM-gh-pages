(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["Suppliers"],{"0604":function(t,e,n){},"0ba4":function(t,e,n){"use strict";n("16e2")},1672:function(t,e,n){"use strict";n("0604")},"16e2":function(t,e,n){},"5d58":function(t,e,n){"use strict";n.r(e);var c=n("7a23"),r=Object(c["fb"])("data-v-41754844");Object(c["H"])("data-v-41754844");var a={id:"supplier-component"};Object(c["F"])();var i=r((function(t,e,n,i,u,o){var l=Object(c["N"])("SupplierCard"),s=Object(c["N"])("el-col"),p=Object(c["N"])("el-row");return Object(c["E"])(),Object(c["i"])("div",a,[Object(c["n"])(p,{class:"row",gutter:30},{default:r((function(){return[(Object(c["E"])(!0),Object(c["i"])(c["b"],null,Object(c["L"])(t.list,(function(t){return Object(c["E"])(),Object(c["i"])(s,{key:t.id,class:"col",span:8},{default:r((function(){return[Object(c["n"])(l,{data:t},null,8,["data"])]})),_:2},1024)})),128))]})),_:1})])})),u=(n("96cf"),n("1da1")),o=n("5502"),l=(n("b0c0"),Object(c["fb"])("data-v-4454c8ec"));Object(c["H"])("data-v-4454c8ec");var s={class:"content-container"},p={class:"title"},b={class:"subtitle"};Object(c["F"])();var d=l((function(t,e,n,r,a,i){return Object(c["E"])(),Object(c["i"])("div",{id:"supplier-card-component",onClick:e[1]||(e[1]=function(){return t.onCardClick&&t.onCardClick.apply(t,arguments)})},[Object(c["n"])("div",{class:"cover",style:{backgroundImage:"url('".concat(t.formatImageUrl(t.data.logo.file),"')")}},null,4),Object(c["n"])("div",s,[Object(c["n"])("div",p,Object(c["R"])(t.data.name),1),Object(c["n"])("div",b,Object(c["R"])(t.data["trial_type"]),1)])])})),j=n("6c02"),O=n("bf37"),f=Object(c["o"])({name:"SupplierCard",props:{data:{type:Object,default:function(){return{}}}},setup:function(t){var e=Object(c["T"])(t),n=e.data,r=Object(j["d"])(),a=function(){var t=Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,r.push({name:"SupplierDetail",params:{id:n.value.id}});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{onCardClick:a,formatImageUrl:O["a"]}}}),v=f;n("1672");v.render=d,v.__scopeId="data-v-4454c8ec";var m=v,w=n("52b1"),g=Object(c["o"])({name:"Supplier",components:{SupplierCard:m},setup:function(){var t=Object(o["b"])(),e=Object(c["g"])((function(){return t.state.company.list}));return Object(c["B"])(Object(u["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.dispatch(w["f"],{trial_type:"supplier"});case 2:case"end":return e.stop()}}),e)})))),{list:e}}}),k=g;n("0ba4");k.render=i,k.__scopeId="data-v-41754844";e["default"]=k}}]);
//# sourceMappingURL=Suppliers.1d20be25.js.map