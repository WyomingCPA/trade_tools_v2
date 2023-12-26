import{s as O,j as V,l as R,r as D,o as M,c as $,d as A,h as B,g as E,u as T,F as U,e as Z,f as G,v as W}from"./index.c2d02297.js";function F(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),o.push.apply(o,n)}return o}function w(e){for(var t=1;t<arguments.length;t++){var o=arguments[t]!=null?arguments[t]:{};t%2?F(Object(o),!0).forEach(function(n){q(e,n,o[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):F(Object(o)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))})}return e}function S(e){return(S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function Y(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function q(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function K(e){return function(t){if(Array.isArray(t))return I(t)}(e)||function(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}(e)||function(t,o){if(!!t){if(typeof t=="string")return I(t,o);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return I(t,o)}}(e)||function(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function I(e,t){(t==null||t>e.length)&&(t=e.length);for(var o=0,n=new Array(t);o<t;o++)n[o]=e[o];return n}function N(e,t){var o=t.options,n=t.callbacks,r=t.map,a=t.useObjectManager,u=t.objectManagerClusterize,p=t.useHtmlInLayout?`
    <div v-html="properties.balloonContentHeader"></div>
    <div v-html="properties.balloonContentBody"></div>
    <div v-html="properties.balloonContentFooter"></div>
  `:`
    <div>{{ properties.balloonContentHeader }}</div>
    <div>{{ properties.balloonContentBody }}</div>
    <div>{{ properties.balloonContentFooter }}</div>
  `,c={},l=[];if(e.forEach(function(s){s.clusterName?c[s.clusterName]=c[s.clusterName]?[].concat(K(c[s.clusterName]),[s]):[s]:l.push(s)}),Object.keys(c).forEach(function(s){var i=o[s]||{},d=n[s]||{},f=i.layout||p;i.clusterBalloonItemContentLayout=ymaps.templateLayoutFactory.createClass(f);var v=i.clusterBalloonLayout||i.clusterLayout;delete i.clusterBalloonLayout;var j=v?ymaps.templateLayoutFactory.createClass(v):i.clusterBalloonContentLayout||"cluster#balloonTwoColumns";i.clusterBalloonContentLayout=j;var k=i.clusterIconContentLayout;if(i.clusterIconContentLayout=k&&ymaps.templateLayoutFactory.createClass(k),a){var h=new ymaps.ObjectManager(Object.assign({clusterize:u},i));Object.keys(d).forEach(function(y){h.clusters.events.add(y,d[y])}),h.add(c[s]),r.geoObjects.add(h)}else{var C=new ymaps.Clusterer(i);Object.keys(d).forEach(function(y){C.events.add(y,d[y])}),i.createCluster&&(C.createCluster=i.createCluster),C.add(c[s]),r.geoObjects.add(C)}}),l.length){var m=a?new ymaps.ObjectManager({clusterize:!1}):new ymaps.GeoObjectCollection;l.forEach(function(s){return m.add(s)}),r.geoObjects.add(m)}}function _(e){return e.charAt(0).toUpperCase()+e.slice(1)}function J(e){return(e.icon.color||"blue")+(e.icon.glyph?_(e.icon.glyph):e.icon.content?"Stretchy":"")}function x(e){return e.map(function(t){return Array.isArray(t)?x(t):+t})}function Q(e,t){var o=[];return function n(r,a){if(r===a)return!0;if(r instanceof Date&&a instanceof Date)return+r==+a;if(S(r)!=="object"||S(a)!=="object")return!1;if(function(c,l){for(var m=o.length;m--;)if(!(o[m][0]!==c&&o[m][0]!==l||o[m][1]!==l&&o[m][1]!==c))return!0;return!1}(r,a))return!0;o.push([r,a]);var u=Object.keys(r),p=u.length;if(Object.keys(a).length!==p)return!1;for(;p--;)if(!n(r[u[p]],a[u[p]]))return!1;return!0}(e,t)}var b=new(function(){function e(){(function(n,r){if(!(n instanceof r))throw new TypeError("Cannot call a class as a function")})(this,e),this.events={},this.ymapReady=!1,this.scriptIsNotAttached=!0}var t,o;return t=e,(o=[{key:"$on",value:function(n,r){var a=this;return this.events[n]||(this.events[n]=[]),this.events[n].push(r),function(){a.events[n]=a.events[n].filter(function(u){return r!==u})}}},{key:"$emit",value:function(n,r){var a=this.events[n];a&&a.forEach(function(u){return u(r)})}}])&&Y(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}()),X=["fullscreenControl","geolocationControl","routeEditor","rulerControl","searchControl","trafficControl","typeSelector","zoomControl","routeButtonControl","routePanelControl"];function P(e){return e.filter(function(t){return![].concat(X,["default"]).includes(t)}).length===0}function tt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return new Promise(function(t,o){if(window.ymaps)return t();if(document.getElementById("vue-yandex-maps"))b.$on("scriptIsLoaded",t);else{var n=document.createElement("SCRIPT"),r=e.apiKey,a=r===void 0?"":r,u=e.lang,p=u===void 0?"ru_RU":u,c=e.version,l=c===void 0?"2.1":c,m=e.coordorder,s=m===void 0?"latlong":m,i=e.debug,d=i!==void 0&&i,f=e.enterprise,v=f!==void 0&&f,j=d?"debug":"release",k="lang=".concat(p).concat(a&&"&apikey=".concat(a),"&mode=").concat(j,"&coordorder=").concat(s),h="https://".concat(v?"enterprise.":"","api-maps.yandex.ru/").concat(l,"/?").concat(k);n.setAttribute("src",h),n.setAttribute("async",""),n.setAttribute("defer",""),n.setAttribute("id","vue-yandex-maps"),document.head.appendChild(n),b.scriptIsNotAttached=!1,n.onload=function(){ymaps.ready(function(){b.ymapReady=!0,b.$emit("scriptIsLoaded"),t()})},n.onerror=o}})}var et,z=1,L=b,nt=["actionend","balloonclose","balloonopen","click","contextmenu","dblclick","destroy","hintclose","hintopen","optionschange","sizechange","typechange"],g={pluginOptions:{},provide:function(){var e,t,o,n,r,a,u=this,p=[],c=[];return this.balloonComponent!=null&&(n=this.balloonComponent,r=null,a="vue-balloon-".concat(z),z+=1,o=function(l,m){var s=ymaps.templateLayoutFactory.createClass('<div id="'.concat(a,'"><div>'),{build:function(){s.superclass.build.call(this),(r=new et({parent:l.$root,data:function(){return{props:l.$props,listeners:l.$listeners}},propsData:{marker:m,component:n}})).$mount("#".concat(a))},clear:function(){r.$destroy(),r=null,s.superclass.clear.call(this)}});return s}),{useObjectManager:this.useObjectManager,addMarker:this.addMarker,deleteMarker:function(l){u.myMap.geoObjects&&(p.push(l),e&&clearTimeout(e),e=setTimeout(function(){u.deleteMarkers(p),p=[]},0))},compareValues:function(l){var m=l.newVal,s=l.oldVal,i=l.marker;Q(m,s)||(c.push(i),t&&clearTimeout(t),t=setTimeout(function(){u.setMarkers(c),c=[]},0))},makeComponentBalloonTemplate:o}},data:function(){return{ymapId:"yandexMap".concat(Math.round(1e5*Math.random())),style:this.ymapClass?"":"width: 100%; height: 100%;",isReady:!1,debounce:null}},props:{coords:{type:Array,required:!0},zoom:{validator:function(e){return!Number.isNaN(e)},default:18},bounds:Array,clusterOptions:{type:Object,default:function(){return{}}},clusterCallbacks:{type:Object,default:function(){return{}}},behaviors:{type:Array,default:function(){return["default"]}},controls:{type:Array,default:function(){return["default"]},validator:function(e){return P(e)}},detailedControls:{type:Object,validator:function(e){return P(Object.keys(e))}},scrollZoom:{type:Boolean,default:!0},mapType:{type:String,default:"map",validator:function(e){return["map","satellite","hybrid"].includes(e)}},placemarks:{type:Array,default:function(){return[]}},useObjectManager:{type:Boolean,default:!1},objectManagerClusterize:{type:Boolean,default:!0},ymapClass:String,initWithoutMarkers:{type:Boolean,default:!0},debug:{type:Boolean,default:!1},settings:{type:Object,default:function(){return{}}},options:{type:Object,default:function(){return{}}},mapEvents:{type:Array,default:function(){return[]}},showAllMarkers:Boolean,disablePan:Boolean,balloonComponent:{type:[Object,Function],default:function(){return null}},useHtmlInLayout:Boolean},computed:{coordinates:function(){return this.coords.map(function(e){return+e})}},methods:{init:function(){var e=this;this.myMap={},this.markers=[],window.ymaps&&ymaps.GeoObjectCollection&&(this.initWithoutMarkers||this.$slots.default()||this.placemarks.length)&&(this.$emit("map-initialization-started"),this.myMap=new ymaps.Map(this.ymapId,{center:this.coordinates,zoom:+this.zoom,bounds:this.bounds,behaviors:this.behaviors,controls:this.controls,type:"yandex#".concat(this.mapType)},this.options),(this.mapEvents.length?this.mapEvents:nt).forEach(function(t){return e.myMap.events.add(t,function(o){return e.$emit(t,o)})}),this.myMap.events.add("boundschange",function(t){var o=t.originalEvent,n=o.newZoom,r=o.newCenter,a=o.newBounds;e.$emit("boundschange",t),e.$emit("update:zoom",n),e.$emit("update:coords",r),e.$emit("update:bounds",a)}),this.detailedControls&&Object.keys(this.detailedControls).forEach(function(t){e.myMap.controls.remove(t),e.myMap.controls.add(t,e.detailedControls[t])}),this.scrollZoom===!1&&this.myMap.behaviors.disable("scrollZoom"),this.isReady=!0,this.$emit("map-was-initialized",this.myMap))},addMarker:function(e){var t=this;this.markers.push(e),this.debounce&&clearTimeout(this.debounce),this.debounce=setTimeout(function(){t.setMarkers(t.markers)},0)},setMarkers:function(e){var t=this,o={options:this.clusterOptions,callbacks:this.clusterCallbacks,map:this.myMap,useObjectManager:this.useObjectManager,objectManagerClusterize:this.objectManagerClusterize,useHtmlInLayout:this.useHtmlInLayout};if(this.markers!==e){var n=e.map(function(r){return t.useObjectManager?r.id:r.properties.get("markerId")});this.deleteMarkers(n),N(e,o),this.$emit("markers-was-change",n)}else N(e,o);this.markers=[],this.showAllMarkers&&this.myMap.setBounds(this.myMap.geoObjects.getBounds())},deleteMarkers:function(e){var t=this,o=[];this.myMap.geoObjects.each(function(n){return o.push(n)}),o.forEach(function(n){var r=[];if(t.useObjectManager)n.remove(e);else{var a,u=function(c){var l=c.properties.get("markerId");e.includes(l)&&r.push(c)};if(n.each)n.each(u),a=n.getLength();else if(n.getGeoObjects){var p=n.getGeoObjects();p.forEach(u),a=p.length}a===0||a===r.length?t.myMap.geoObjects.remove(n):r.length&&r.forEach(function(c){return n.remove(c)})}}),this.$emit("markers-was-delete",e)}},watch:{coordinates:function(e){this.myMap&&(this.disablePan?this.myMap.setCenter&&this.myMap.setCenter(e):this.myMap.panTo&&this.myMap.getZoom()&&this.myMap.panTo(e,{checkZoomRange:!0}))},zoom:function(){this.myMap.setZoom(this.zoom)},bounds:function(e){this.myMap.setBounds&&this.myMap.setBounds(e)}},render:function(){return O("section",{class:"ymap-container",ref:"mapContainer"},[O("div",{id:this.ymapId,class:this.ymapClass,style:this.style}),this.isReady&&O("div",[this.$slots.default()])])},mounted:function(){var e=this;if(this.$attrs["map-link"]||this.$attrs.mapLink)throw new Error("Vue-yandex-maps: Attribute mapLink is not supported. Use settings.");if(this.placemarks&&this.placemarks.length)throw new Error("Vue-yandex-maps: Attribute placemarks is not supported. Use marker component.");this.mapObserver=new MutationObserver(function(){e.myMap.container&&e.myMap.container.fitToViewport()});var t=this.$refs.mapContainer;if(this.mapObserver.observe(t,{attributes:!0,childList:!0,characterData:!0,subtree:!1}),L.scriptIsNotAttached){var o=this.debug;tt(w(w(w({},this.$options.pluginOptions),this.settings),{},{debug:o}))}L.ymapReady?ymaps.ready(this.init):L.$on("scriptIsLoaded",this.init)},beforeUnmount:function(){this.myMap.geoObjects&&this.myMap.geoObjects.removeAll()}},ot=["placemark","polyline","rectangle","polygon","circle"],rt=["balloonclose","balloonopen","click","contextmenu","dblclick","drag","dragend","dragstart","hintclose","hintopen","mouseenter","mouseleave"],H={inject:["useObjectManager","addMarker","deleteMarker","compareValues","makeComponentBalloonTemplate"],props:{coords:Array,hintContent:String,icon:Object,balloon:Object,markerType:{type:String,validator:function(e){return ot.includes(e.toLowerCase())},default:"placemark"},markerFill:Object,markerStroke:Object,clusterName:[String,Number],circleRadius:{validator:function(e){return!Number.isNaN(e)},default:1e3},balloonTemplate:String,markerId:{type:[String,Number],required:!0},properties:Object,options:Object,balloonComponentProps:{type:Object,default:function(){return{}}},markerEvents:{type:Array,default:function(){return[]}}},data:function(){return{unwatchArr:[]}},render:function(){return this.$slots.balloon&&O("div",{style:"display: none;"},[this.$slots.balloon()])},mounted:function(){var e=this;Object.keys(this.$props).forEach(function(t){t!=="balloonComponentProps"&&e.unwatchArr.push(e.$watch(t,function(o,n){return e.compareValues({newVal:o,oldVal:n,marker:e.defineMarker()})}))}),this.addMarker(this.defineMarker())},methods:{defineMarker:function(){var e=this,t={markerId:this.markerId,markerType:this.markerType||"placemark",coords:x(this.coords),hintContent:this.hintContent,markerFill:this.markerFill,circleRadius:+this.circleRadius,clusterName:this.clusterName,markerStroke:this.markerStroke,balloon:this.balloon,properties:this.properties,options:this.options,balloonOptions:{}},o=null;this.balloonTemplate&&(o=ymaps.templateLayoutFactory.createClass(this.balloonTemplate)),this.$slots.balloon&&(o=ymaps.templateLayoutFactory.createClass(this.$slots.balloon()[0].elm.outerHTML)),this.makeComponentBalloonTemplate&&(o=this.makeComponentBalloonTemplate(this,t)),o!=null&&(t.balloonOptions.balloonContentLayout=o),this.icon&&["default#image","default#imageWithContent"].includes(this.icon.layout)?(t.iconContent=this.icon.content,t.iconLayout=this.icon.layout,t.iconImageHref=this.icon.imageHref,t.iconImageSize=this.icon.imageSize,t.iconImageOffset=this.icon.imageOffset,t.iconContentOffset=this.icon.contentOffset,this.icon.contentLayout&&typeof this.icon.contentLayout=="string"&&(t.iconContentLayout=ymaps.templateLayoutFactory.createClass(this.icon.contentLayout))):t.icon=this.icon;var n=function(i,d){var f=_(i);if(!d)return f;switch(f){case"Placemark":return"Point";case"Polyline":return"LineString";default:return f}}(t.markerType,this.useObjectManager),r={hintContent:t.hintContent,iconContent:t.icon?t.icon.content:t.iconContent,markerId:t.markerId},a=t.balloon?{balloonContentHeader:t.balloon.header,balloonContentBody:t.balloon.body,balloonContentFooter:t.balloon.footer}:{},u=Object.assign(r,a,t.properties),p=t.iconLayout?{iconLayout:t.iconLayout,iconImageHref:t.iconImageHref,iconImageSize:t.iconImageSize,iconImageOffset:t.iconImageOffset,iconContentOffset:t.iconContentOffset,iconContentLayout:t.iconContentLayout}:{preset:t.icon&&"islands#".concat(J(t),"Icon")},c=t.markerStroke?{strokeColor:t.markerStroke.color||"0066ffff",strokeOpacity:parseFloat(t.markerStroke.opacity)>=0?parseFloat(t.markerStroke.opacity):1,strokeStyle:t.markerStroke.style,strokeWidth:parseFloat(t.markerStroke.width)>=0?parseFloat(t.markerStroke.width):1}:{},l=t.markerFill?{fill:t.markerFill.enabled||!0,fillColor:t.markerFill.color||"0066ff99",fillOpacity:parseFloat(t.markerFill.opacity)>=0?parseFloat(t.markerFill.opacity):1,fillImageHref:t.markerFill.imageHref||""}:{},m=Object.assign(p,c,l,t.balloonOptions,t.options);n==="Circle"&&(t.coords=[t.coords,t.circleRadius]);var s=function(i,d){var f=d?{type:"Feature",id:i.properties.markerId,geometry:{type:i.markerType,coordinates:i.coords},properties:i.properties,options:i.options}:new ymaps[i.markerType](i.coords,i.properties,i.options);return f.clusterName=i.clusterName,f}({properties:u,options:m,markerType:n,coords:t.coords,clusterName:t.clusterName},this.useObjectManager,this.$emit);return this.useObjectManager||(this.markerEvents.length?this.markerEvents:rt).forEach(function(i){return s.events.add(i,function(d){return e.$emit(i,d)})}),s}},beforeUnmount:function(){this.unwatchArr.forEach(function(e){return e()}),this.deleteMarker(this.markerId)}};g.install=function e(t){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};e.installed||(e.installed=!0,g.pluginOptions=o,t.component("yandex-map",g),t.component("ymap-marker",H))},typeof window!="undefined"&&window.Vue&&window.Vue.use(g);var at=g,it=H;const st={class:"yandex-maps-page"},ct={class:"row"},lt={class:"flex md12 xs12"},pt=V({__name:"YandexMapsPage",setup(e){const t=R([{"marker-id":0,coords:[54.8,38.9],clusterName:"1",balloonTemplate:'<div>"Your custom template"</div>'}]);return(o,n)=>{const r=D("va-card");return M(),$("div",st,[A("div",ct,[A("div",lt,[B(r,{class:"yandex-maps-page__widget",title:"Yandex Maps"},{default:E(()=>[B(T(at),{"map-type":"hybrid",coords:[55.2,38.8],zoom:8,controls:["trafficControl","zoomControl","geolocationControl","fullscreenControl","searchControl"],style:{width:"100%",height:"65vh"}},{default:E(()=>[(M(!0),$(U,null,Z(t.value,a=>(M(),G(T(it),W({key:a["marker-id"]},a),null,16))),128))]),_:1},8,["coords"])]),_:1})])])])}}});export{pt as default};
