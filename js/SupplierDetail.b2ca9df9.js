(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["SupplierDetail"],{"5fdc":function(t,e,n){},"9a6d":function(t,e,n){"use strict";n("5fdc")},a15b:function(t,e,n){"use strict";var c=n("23e7"),a=n("44ad"),i=n("fc6a"),r=n("a640"),o=[].join,s=a!=Object,l=r("join",",");c({target:"Array",proto:!0,forced:s||!l},{join:function(t){return o.call(i(this),void 0===t?",":t)}})},a34b:function(t,e,n){"use strict";n("a15b"),n("b0c0");var c=n("7a23"),a=Object(c["fb"])("data-v-648dff68");Object(c["H"])("data-v-648dff68");var i={id:"fabric-card-component"},r={key:0,class:"collection-tag"},o=Object(c["n"])("div",{class:"cover-status"},[Object(c["n"])("div",{class:"status-tag"}," Developing ")],-1),s={class:"content-container"},l={class:"title"},u={class:"description"},b={key:0,class:"buttons-group"},d=Object(c["n"])("p",{class:"icon-name"},"Favorite",-1),j=Object(c["n"])("p",{class:"icon-name"},"Add",-1);Object(c["F"])();var f=a((function(t,e,n,a,f,p){var O=Object(c["N"])("font-awesome-icon");return Object(c["E"])(),Object(c["i"])("div",i,[Object(c["n"])("div",{class:"cover-image",style:{backgroundImage:"url('".concat(t.formatImageUrl(t.data.image_url+"@250-250"),"')")},onClick:e[1]||(e[1]=function(){return t.onImageClick&&t.onImageClick.apply(t,arguments)})},[t.hasStatus?(Object(c["E"])(),Object(c["i"])(c["b"],{key:0},[t.data.spec_label.length?(Object(c["E"])(),Object(c["i"])("div",r,Object(c["R"])(t.data.spec_label.join(", ")),1)):Object(c["j"])("",!0),o],64)):Object(c["j"])("",!0)],4),Object(c["n"])("div",s,[Object(c["n"])("div",{class:"content-wrapper",style:{width:t.hasButtons?"70%":"auto"}},[Object(c["n"])("h3",l,Object(c["R"])(t.data.name),1),Object(c["n"])("p",u,Object(c["R"])(t.data.real_composition),1)],4),t.hasButtons?(Object(c["E"])(),Object(c["i"])("div",b,[Object(c["n"])("div",{class:"button-wrapper",onClick:e[2]||(e[2]=function(){return t.onFavoriteClick&&t.onFavoriteClick.apply(t,arguments)})},[Object(c["n"])(O,{class:"icon heart",icon:["".concat(t.data.favorite?"fas":"far"),"heart"]},null,8,["icon"]),d]),Object(c["n"])("div",{class:"button-wrapper",onClick:e[3]||(e[3]=function(){return t.onAddClick&&t.onAddClick.apply(t,arguments)})},[Object(c["n"])(O,{class:"icon plus",icon:["fas","plus-circle"]}),j])])):Object(c["j"])("",!0)])])})),p=(n("96cf"),n("1da1")),O=n("6c02"),v=n("3fd4"),m=n("bf37"),g=Object(c["o"])({name:"FabricCard",props:{data:{type:Object,default:function(){return{}}},hasStatus:{type:Boolean,default:!1},hasButtons:{type:Boolean,default:!1}},setup:function(t,e){var n=e.emit,a=Object(O["d"])(),i=Object(c["T"])(t),r=i.data,o=i.hasButtons,s=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,a.push({name:"FabricDetail",params:{id:r.value.id}});case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),l=function(){var t=Object(p["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(o){t.next=2;break}return t.abrupt("return");case 2:n("add-to-favorite",r.value.id);case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),u=function(){o&&Object(v["b"])({title:"Success",type:"success",message:"Add"})};return{onImageClick:s,onFavoriteClick:l,onAddClick:u,formatImageUrl:m["a"]}}}),k=g;n("9a6d");k.render=f,k.__scopeId="data-v-648dff68";e["a"]=k},abb6:function(t,e,n){},faa6:function(t,e,n){"use strict";n("abb6")},fd0f:function(t,e,n){"use strict";n.r(e);n("b0c0");var c=n("7a23"),a=Object(c["fb"])("data-v-970b4372");Object(c["H"])("data-v-970b4372");var i={key:0,id:"supplier-detail-component"},r={class:"top-container"},o={class:"content-container"},s={class:"title"},l={class:"description"},u={key:0,class:"video-container"},b={class:"fabrics-container"},d=Object(c["n"])("h3",{class:"title"},"LittleKing",-1),j={class:"button-container"},f=Object(c["m"])(" Contact us ");Object(c["F"])();var p=a((function(t,e,n,p,O,v){var m=Object(c["N"])("FabricCard"),g=Object(c["N"])("el-col"),k=Object(c["N"])("el-row"),h=Object(c["N"])("el-button");return t.detail?(Object(c["E"])(),Object(c["i"])("div",i,[Object(c["n"])("div",r,[Object(c["n"])("img",{class:"brand-image",src:t.formatImageUrl(t.detail.logo.file),alt:"",onClick:e[1]||(e[1]=function(){return t.onBrandClick&&t.onBrandClick.apply(t,arguments)})},null,8,["src"]),Object(c["n"])("div",o,[Object(c["n"])("h1",s,Object(c["R"])(t.detail.name),1),Object(c["n"])("p",l,Object(c["R"])(t.detail.company_home_page.about_us),1)])]),t.detail.intro_video?(Object(c["E"])(),Object(c["i"])("div",u,[Object(c["n"])("video",{src:t.detail.intro_video.file,height:"500",controls:""},null,8,["src"])])):Object(c["j"])("",!0),Object(c["n"])("div",b,[d,Object(c["n"])(k,{gutter:40},{default:a((function(){return[(Object(c["E"])(),Object(c["i"])(c["b"],null,Object(c["L"])(6,(function(t){return Object(c["n"])(g,{key:t,span:8},{default:a((function(){return[Object(c["n"])(m)]})),_:2},1024)})),64))]})),_:1})]),Object(c["n"])("div",j,[Object(c["n"])(h,{type:"success",onClick:e[2]||(e[2]=function(e){return t.onContactUsClick()})},{default:a((function(){return[f]})),_:1})])])):Object(c["j"])("",!0)})),O=(n("96cf"),n("1da1")),v=n("5502"),m=n("a34b"),g=n("52b1"),k=n("bf37"),h=Object(c["o"])({name:"SupplierDetail",components:{FabricCard:m["a"]},props:{id:{type:String,default:""}},setup:function(t){var e=Object(v["b"])(),n=Object(c["T"])(t),a=n.id,i=Object(c["g"])((function(){return e.state.company.detail}));Object(c["B"])(Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.dispatch(g["e"],a.value);case 2:case"end":return t.stop()}}),t)}))));var r=function(){window.open(i.value.company_home_page.official_website,"blank")},o=function(){console.log("contact us clicked")};return{detail:i,onContactUsClick:o,onBrandClick:r,formatImageUrl:k["a"]}}}),C=h;n("faa6");C.render=p,C.__scopeId="data-v-970b4372";e["default"]=C}}]);
//# sourceMappingURL=SupplierDetail.b2ca9df9.js.map