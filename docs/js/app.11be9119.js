(function(o){function t(t){for(var n,s,r=t[0],c=t[1],m=t[2],d=0,u=[];d<r.length;d++)s=r[d],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(o[n]=c[n]);l&&l(t);while(u.length)u.shift()();return a.push.apply(a,m||[]),e()}function e(){for(var o,t=0;t<a.length;t++){for(var e=a[t],n=!0,r=1;r<e.length;r++){var c=e[r];0!==i[c]&&(n=!1)}n&&(a.splice(t--,1),o=s(s.s=e[0]))}return o}var n={},i={app:0},a=[];function s(t){if(n[t])return n[t].exports;var e=n[t]={i:t,l:!1,exports:{}};return o[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=o,s.c=n,s.d=function(o,t,e){s.o(o,t)||Object.defineProperty(o,t,{enumerable:!0,get:e})},s.r=function(o){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},s.t=function(o,t){if(1&t&&(o=s(o)),8&t)return o;if(4&t&&"object"===typeof o&&o&&o.__esModule)return o;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:o}),2&t&&"string"!=typeof o)for(var n in o)s.d(e,n,function(t){return o[t]}.bind(null,n));return e},s.n=function(o){var t=o&&o.__esModule?function(){return o["default"]}:function(){return o};return s.d(t,"a",t),t},s.o=function(o,t){return Object.prototype.hasOwnProperty.call(o,t)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var m=0;m<r.length;m++)t(r[m]);var l=c;a.push([0,"chunk-vendors"]),e()})({0:function(o,t,e){o.exports=e("56d7")},"097b":function(o,t,e){},"0ae0":function(o,t,e){"use strict";var n=e("c0ad"),i=e.n(n);i.a},"55d8":function(o,t,e){"use strict";var n=e("097b"),i=e.n(n);i.a},"56d7":function(o,t,e){"use strict";e.r(t);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),i=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{attrs:{id:"app"}},[e("Navbar"),e("HomeList",{attrs:{homes:this.homes}})],1)},a=[],s=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("div",{staticClass:"list-container"},o._l(o.homes,(function(o){return e("HomeItemList",{key:o._id,attrs:{home:o}})})),1)},r=[],c=function(){var o=this,t=o.$createElement,n=o._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"home-image"},[o.home.imageUrl?n("img",{attrs:{src:o.home.imageUrl,alt:"Home image"},on:{error:o.onImageError}}):n("img",{attrs:{src:e("5b4d"),alt:"Home image"}})]),n("h2",{staticClass:"title"},[o._v(o._s(o.home.name))]),n("div",{staticClass:"description"},[n("p",[o._v(o._s(o.home.description))])]),n("div",{staticClass:"action-buttons"},[n("button",{directives:[{name:"ripple",rawName:"v-ripple",value:"green",expression:"'green'"}],staticClass:"edit-button",on:{click:o.clickEdit}},[o._v(" Edit ")]),n("button",{directives:[{name:"ripple",rawName:"v-ripple",value:"red",expression:"'red'"}],staticClass:"remove-button",on:{click:o.clickRemove}},[o._v(" Remove ")])])])},m=[],l={name:"HomeItemList",props:{home:{_id:String,name:String,imageUrl:String,description:String}},methods:{clickEdit:function(){console.log("Edit clicked")},clickRemove:function(){console.log("Remove clicked")},onImageError:function(){this.home.imageUrl=void 0}}},d=l,u=(e("0ae0"),e("2877")),h=Object(u["a"])(d,c,m,!1,null,"e68f79f4",null),p=h.exports,f={components:{HomeItemList:p},props:{homes:{required:!0}}},g=f,b=(e("55d8"),Object(u["a"])(g,s,r,!1,null,"cb631dc2",null)),w=b.exports,v=function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("nav",{staticClass:"navbar"},[e("span",{staticClass:"navbar-toggle",attrs:{id:"js-navbar-toggle"},on:{click:o.toggle}},[e("font-awesome-icon",{attrs:{icon:"bars"}})],1),e("a",{staticClass:"logo",attrs:{href:"#"}},[e("font-awesome-icon",{attrs:{icon:["fab","vuejs"]}})],1),e("ul",{staticClass:"main-nav",class:{active:o.isOpen}},o._l(o.routes,(function(t){return e("li",{directives:[{name:"ripple",rawName:"v-ripple",value:"#2196f3",expression:"'#2196f3'"}],key:t.text},[e("a",{staticClass:"nav-links",attrs:{href:"route.link"}},[o._v(o._s(t.text))])])})),0)])},y=[],_={data:function(){return{isOpen:!1,routes:[{text:"Home",link:"#"},{text:"Owners",link:"#"},{text:"Sign up",link:"#"},{text:"Sign in",link:"#"},{text:"Contact",link:"#"}]}},methods:{toggle:function(){this.isOpen=!this.isOpen}}},x=_,T=(e("d00d"),Object(u["a"])(x,v,y,!1,null,"92bd3524",null)),K=T.exports,O={name:"App",components:{HomeList:w,Navbar:K},data:function(){return{homes:[{_id:"1",name:"Home 1",imageUrl:"https://r-cf.bstatic.com/images/hotel/max1024x768/235/235711271.jpg",description:"This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool"},{_id:"2",name:"Home 2",imageUrl:"No image",description:"This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool"},{_id:"3",name:"Home 3",imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMj4JEpbztcLXDzthPc6JQeO-tId8u-iaLtaubOlKJdTdw6tt6&s",description:"This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool"},{_id:"4",name:"Home 4",imageUrl:"https://mattamyhomes.com/~/media/images/mattamywebsite/corp/home/heroslideshow/usa/orlando/orl_geohero_02_1600x800.jpg",description:"This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool"},{_id:"5",name:"Home 5",imageUrl:"https://r-cf.bstatic.com/images/hotel/max1024x768/235/235711271.jpg",description:"This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool. This house count with two bedrooms, four bathrooms and garden. Kids can play in the swimming pool"}]}}},k=O,j=(e("cf25"),Object(u["a"])(k,i,a,!1,null,null,null)),C=j.exports,H=e("ecee"),E=e("c074"),S=e("f2d1"),U=e("ad3d"),P=e("e009");n["a"].directive("ripple",P["a"]),H["c"].add(E["a"],S["a"]),n["a"].component("font-awesome-icon",U["a"]),n["a"].config.productionTip=!1,new n["a"]({render:function(o){return o(C)}}).$mount("#app")},"5b4d":function(o,t,e){o.exports=e.p+"img/placeholder.1956ea46.png"},6181:function(o,t,e){},c0ad:function(o,t,e){},cf25:function(o,t,e){"use strict";var n=e("fea6"),i=e.n(n);i.a},d00d:function(o,t,e){"use strict";var n=e("6181"),i=e.n(n);i.a},fea6:function(o,t,e){}});
//# sourceMappingURL=app.11be9119.js.map