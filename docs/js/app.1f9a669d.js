(function(t){function e(e){for(var a,r,i=e[0],s=e[1],u=e[2],l=0,b=[];l<i.length;l++)r=i[l],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(b.length)b.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var s=n[i];0!==c[s]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},c={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var d=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0f1c":function(t,e,n){},"2a47":function(t,e,n){},"36b0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("7a23"),c={class:"app"};function o(t,e,n,o,r,i){var s=Object(a["i"])("AppNav"),u=Object(a["i"])("AppMain");return Object(a["e"])(),Object(a["b"])("div",c,[Object(a["c"])(s),Object(a["c"])(u)])}var r=n("b489"),i=n.n(r),s=Object(a["n"])("data-v-6799c455");Object(a["g"])("data-v-6799c455");var u={class:"header"},d=Object(a["c"])("div",{class:"headerLeft"},[Object(a["c"])("img",{alt:"Paypal Logo",src:i.a}),Object(a["c"])("h1",null,"Paypal Calculator Feeds")],-1),l={class:"btnNav"};Object(a["f"])();var b=s((function(t,e,n,c,o,r){return Object(a["e"])(),Object(a["b"])("header",u,[d,Object(a["c"])("div",l,[Object(a["c"])("button",{disabled:o.standard,onClick:e[1]||(e[1]=function(){return r.changeStandard&&r.changeStandard.apply(r,arguments)}),class:[{active:o.standard},"btnLeft"]}," Standard",10,["disabled"]),Object(a["c"])("button",{disabled:!o.standard,onClick:e[2]||(e[2]=function(){return r.changeStandard&&r.changeStandard.apply(r,arguments)}),class:[{active:!o.standard},"btnRigth"]},"Reverse",10,["disabled"])])])})),m={name:"AppNav",data:function(){return{standard:this.$store.getters.standard}},methods:{changeStandard:function(){this.standard=!this.standard,this.$store.dispatch("changeStandardAction",this.standard)}}};n("9083");m.render=b,m.__scopeId="data-v-6799c455";var p=m,f=Object(a["n"])("data-v-755ebcec");Object(a["g"])("data-v-755ebcec");var h={class:"main"};Object(a["f"])();var j=f((function(t,e,n,c,o,r){var i=Object(a["i"])("AppForm");return Object(a["e"])(),Object(a["b"])("div",h,[Object(a["c"])(i,{info:r.getStandard?o.infoStandard:o.infoReverse},null,8,["info"])])})),O=(n("a4d3"),n("e01a"),n("b680"),Object(a["n"])("data-v-61e5b246"));Object(a["g"])("data-v-61e5b246");var v={class:"appForm"},g={class:"inputForm"},y={for:"amount"},S={class:"feeds"},F=Object(a["c"])("label",{for:"rate"},"Rate:",-1),w=Object(a["c"])("label",{for:"commission"},"Commission:",-1),A={class:"buttonWrapper"},x={class:"infoFeed"},C=Object(a["c"])("h2",null,"Amount Feeds",-1),R={class:"inputForm"},N={for:"infoamount"},_={class:"inputForm"},P=Object(a["c"])("label",{for:"fees"},"Paypal fees will be:",-1);Object(a["f"])();var k=O((function(t,e,n,c,o,r){return Object(a["e"])(),Object(a["b"])("div",v,[Object(a["c"])("h2",null,"Calculator "+Object(a["j"])(n.info.title),1),Object(a["c"])("p",null,Object(a["j"])(n.info.description),1),Object(a["c"])("div",g,[Object(a["c"])("label",y,Object(a["j"])(n.info.amountText)+":",1),Object(a["m"])(Object(a["c"])("input",{type:"number",id:"amount","onUpdate:modelValue":e[1]||(e[1]=function(t){return o.amount=t})},null,512),[[a["k"],o.amount]])]),Object(a["c"])("div",S,[Object(a["c"])("div",null,[F,Object(a["m"])(Object(a["c"])("input",{type:"number",id:"rate","onUpdate:modelValue":e[2]||(e[2]=function(t){return o.rate=t}),blur:r.changeRate},null,8,["blur"]),[[a["k"],o.rate]])]),Object(a["c"])("div",null,[w,Object(a["m"])(Object(a["c"])("input",{type:"number",id:"commission","onUpdate:modelValue":e[3]||(e[3]=function(t){return o.commission=t}),blur:r.changeCommission},null,8,["blur"]),[[a["k"],o.commission]])])]),Object(a["c"])("div",A,[Object(a["c"])("button",{onClick:e[4]||(e[4]=function(){return r.calculateFeeds&&r.calculateFeeds.apply(r,arguments)})},"Calcular Paypal Fees")]),Object(a["c"])("div",x,[C,Object(a["c"])("div",R,[Object(a["c"])("label",N,Object(a["j"])(n.info.amountGetText)+":",1),Object(a["c"])("input",{disabled:"",type:"number",id:"infoamount",value:o.amountFeed},null,8,["value"])]),Object(a["c"])("div",_,[P,Object(a["c"])("input",{disabled:"",type:"number",id:"fees",value:o.fees.toFixed(2)},null,8,["value"])])])])})),T=(n("a9e3"),{name:"AppForm",props:{info:{type:Object}},data:function(){return{amount:0,rate:this.$store.getters.rate,commission:this.$store.getters.commission,fees:0,amountFeed:0}},methods:{changeRate:function(){this.$store.dispatch("changeRateAction",this.rate)},changeCommission:function(){this.$store.dispatch("changeCommissionAction",this.commission)},calculateFeeds:function(){var t=this.standard?Number(this.rate)/100:Number(this.rate)/100+.03;this.fees=Number(this.amount)*t+Number(this.commission),this.amountFeed=this.standard?Number(this.amount)-Number(this.fees):Number(this.amount)+Number(this.fees)}},computed:{getStandard:function(){return this.$store.getters.standard}},watch:{getStandard:function(){this.amount=0,this.fees=0,this.amountFeed=0}}});n("91b6");T.render=k,T.__scopeId="data-v-61e5b246";var $=T,M={name:"AppMain",components:{AppForm:$},data:function(){return{infoStandard:{title:"Standard",description:"From this option you can see what amount you will get when you send a certain amount.",amountText:"If you are sent",amountGetText:"You will receive"},infoReverse:{title:"Reverse",description:"From this option you can see what amount you need to receive the amount entered.",amountText:"To Receive",amountGetText:"You need to be sent"}}},computed:{getStandard:function(){return this.$store.getters.standard}}};n("7eec");M.render=j,M.__scopeId="data-v-755ebcec";var I=M,G={name:"App",components:{AppNav:p,AppMain:I}};n("9d81");G.render=o;var L=G,U=n("5502"),V=Object(U["a"])({state:{standard:!0,rate:5.4,commission:.3},mutations:{changeStandard:function(t,e){t.standard=e},changeRate:function(t,e){t.rate=e},changeCommission:function(t,e){t.commission=e}},actions:{changeStandardAction:function(t,e){t.commit("changeStandard",e)},changeRateAction:function(t,e){t.commit("changeRate",e)},changeCommissionAction:function(t,e){t.commit("changeCommission",e)}},modules:{},getters:{standard:function(t){return t.standard},rate:function(t){return t.rate},commission:function(t){return t.commission}}});Object(a["a"])(L).use(V).mount("#app")},"7eec":function(t,e,n){"use strict";n("2a47")},9083:function(t,e,n){"use strict";n("f586")},"91b6":function(t,e,n){"use strict";n("36b0")},"9d81":function(t,e,n){"use strict";n("0f1c")},b489:function(t,e,n){t.exports=n.p+"img/paypal-logo.5e9d6deb.png"},f586:function(t,e,n){}});
//# sourceMappingURL=app.1f9a669d.js.map