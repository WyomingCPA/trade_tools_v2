import{A as ke,g as De,n as x,e as W,s as J,f as b,h as k,r as C,i as Me,j as N,k as xe,l as le,_ as de,G as E,o as q,q as oe,t as je,T as pe,R as Oe,a as Te,M as Ve,Z as Be,b as Ne,m as ze,c as w,d as Re,B as Ae,p as z,C as Ge,L as re,u as Ee,v as Ue}from"./Animated.75a1928d.js";import{D as Fe,x as ge,_ as Ze,j as fe,l as R,y as _,z as se,E as Ye,q as $e,A as qe,B as He,C as Ke,o as ve,c as he,r as We,d as ue,h as ce,g as Je}from"./index.40ff95d5.js";var Q,X,A,G,j={sphere:x,point:x,lineStart:Qe,lineEnd:x,polygonStart:x,polygonEnd:x};function Qe(){j.point=Ie,j.lineEnd=Xe}function Xe(){j.point=j.lineEnd=x}function Ie(a,t){a*=C,t*=C,X=a,A=b(t),G=k(t),j.point=et}function et(a,t){a*=C,t*=C;var e=b(t),i=k(t),o=Me(a-X),n=k(o),s=b(o),r=i*s,u=G*e-A*i*n,d=A*e+G*i*n;Q.add(W(J(r*r+u*u),d)),X=a,A=e,G=i}function me(a){return Q=new ke,De(a,j),+Q}var I=[null,null],tt={type:"LineString",coordinates:I};function at(a,t){return I[0]=a,I[1]=t,me(tt)}function it(a,t){var e=a[0]*C,i=a[1]*C,o=t[0]*C,n=t[1]*C,s=k(i),r=b(i),u=k(n),d=b(n),f=s*k(e),v=s*b(e),P=u*k(o),h=u*b(o),p=2*xe(J(le(n-i)+s*u*le(o-e))),m=b(p),y=p?function(L){var D=b(L*=p)/m,S=b(p-L)/m,M=S*f+D*P,O=S*v+D*h,T=S*r+D*d;return[W(O,M)*N,W(T,J(M*M+O*O))*N]}:function(){return[e*N,i*N]};return y.distance=p,y}var nt=function(a){de(t,a);function t(){var e=a!==null&&a.apply(this,arguments)||this;return Object.defineProperty(e,"_projectionDirty",{enumerable:!0,configurable:!0,writable:!0,value:!1}),e}return Object.defineProperty(t.prototype,"_beforeChanged",{enumerable:!1,configurable:!0,writable:!0,value:function(){var e=this;if(a.prototype._beforeChanged.call(this),this._projectionDirty||this.isDirty("geometry")||this.isDirty("precision")){var i=this.get("geometry");if(i){var o=this.getPrivate("series");if(o){var n=o.chart;if(n){var s=n.get("projection"),r=null;s&&(r=s.clipAngle(),s.precision(this.get("precision",.5)));var u=n.getPrivate("geoPath");u&&(this._clear=!0,this.set("draw",function(d){s&&o.get("clipBack")===!1&&s.clipAngle(180),u.context(e._display),u(i),u.context(null),s&&s.clipAngle(r)}))}}}}}}),Object.defineProperty(t.prototype,"markDirtyProjection",{enumerable:!1,configurable:!0,writable:!0,value:function(){this.markDirty(),this._projectionDirty=!0}}),Object.defineProperty(t.prototype,"_clearDirty",{enumerable:!1,configurable:!0,writable:!0,value:function(){a.prototype._clearDirty.call(this),this._projectionDirty=!1}}),Object.defineProperty(t.prototype,"positionToGeoPoint",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var i=this.get("geometry");if(i){var o=me(i),n=0,s=void 0,r=0,u=0,d=void 0,f=void 0,v=i.coordinates;if(v){var P=void 0;i.type=="LineString"?P=[v]:i.type=="MultiLineString"&&(P=v);for(var h=0;h<P.length;h++){var p=P[h];if(p.length>1){for(var m=1;m<p.length;m++)if(d=p[m-1],f=p[m],r=n/o,s=at(d,f),n+=s,u=n/o,r<=e&&u>e){h=P.length;break}}else p.length==1&&(d=p[0],f=p[0],r=0,u=1)}if(d&&f){var y=(e-r)/(u-r),L=it(d,f)(y);return{longitude:L[0],latitude:L[1]}}}}return{longitude:0,latitude:0}}}),Object.defineProperty(t,"className",{enumerable:!0,configurable:!0,writable:!0,value:"MapLine"}),Object.defineProperty(t,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:E.classNames.concat([t.className])}),t}(E),lt=function(a){de(t,a);function t(){var e=a!==null&&a.apply(this,arguments)||this;return Object.defineProperty(e,"mapLines",{enumerable:!0,configurable:!0,writable:!0,value:new je(pe.new({}),function(){return nt._new(e._root,{},[e.mapLines.template])})}),Object.defineProperty(e,"_types",{enumerable:!0,configurable:!0,writable:!0,value:["LineString","MultiLineString"]}),e}return Object.defineProperty(t.prototype,"makeMapLine",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var i=this.children.push(this.mapLines.make());return i._setDataItem(e),this.mapLines.push(i),i}}),Object.defineProperty(t.prototype,"markDirtyProjection",{enumerable:!1,configurable:!0,writable:!0,value:function(){q(this.dataItems,function(e){var i=e.get("mapLine");i&&i.markDirtyProjection()})}}),Object.defineProperty(t.prototype,"_prepareChildren",{enumerable:!1,configurable:!0,writable:!0,value:function(){a.prototype._prepareChildren.call(this),this.isDirty("stroke")&&this.mapLines.template.set("stroke",this.get("stroke"))}}),Object.defineProperty(t.prototype,"processDataItem",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var i=this;a.prototype.processDataItem.call(this,e);var o=e.get("mapLine");o||(o=this.makeMapLine(e)),this._handlePointsToConnect(e),e.on("pointsToConnect",function(){i._handlePointsToConnect(e)}),e.set("mapLine",o),o.setPrivate("series",this)}}),Object.defineProperty(t.prototype,"_handlePointsToConnect",{enumerable:!1,configurable:!0,writable:!0,value:function(e){var i=this,o=e.get("pointsToConnect");o&&(q(o,function(n){n.on("geometry",function(){i.markDirtyValues(e)}),n.on("longitude",function(){i.markDirtyValues(e)}),n.on("latitude",function(){i.markDirtyValues(e)})}),this.markDirtyValues(e))}}),Object.defineProperty(t.prototype,"markDirtyValues",{enumerable:!1,configurable:!0,writable:!0,value:function(e){if(a.prototype.markDirtyValues.call(this),e){var i=e.get("mapLine");if(i){var o=e.get("pointsToConnect");if(o){var n=[];q(o,function(r){var u=r.get("longitude"),d=r.get("latitude");if(u!=null&&d!=null)n.push([u,d]);else{var f=r.get("geometry");if(f){var v=f.coordinates;v&&n.push([v[0],v[1]])}}});var s={type:"LineString",coordinates:n};e.setRaw("geometry",s),i.set("geometry",s)}else i.set("geometry",e.get("geometry"))}}}}),Object.defineProperty(t.prototype,"disposeDataItem",{enumerable:!1,configurable:!0,writable:!0,value:function(e){a.prototype.disposeDataItem.call(this,e);var i=e.get("mapLine");i&&(this.mapLines.removeValue(i),i.dispose())}}),Object.defineProperty(t,"className",{enumerable:!0,configurable:!0,writable:!0,value:"MapLineSeries"}),Object.defineProperty(t,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:oe.classNames.concat([t.className])}),t}(oe);const c="M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z",ot="M19.671,8.11l-2.777,2.777l-3.837-0.861c0.362-0.505,0.916-1.683,0.464-2.135c-0.518-0.517-1.979,0.278-2.305,0.604l-0.913,0.913L7.614,8.804l-2.021,2.021l2.232,1.061l-0.082,0.082l1.701,1.701l0.688-0.687l3.164,1.504L9.571,18.21H6.413l-1.137,1.138l3.6,0.948l1.83,1.83l0.947,3.598l1.137-1.137V21.43l3.725-3.725l1.504,3.164l-0.687,0.687l1.702,1.701l0.081-0.081l1.062,2.231l2.02-2.02l-0.604-2.689l0.912-0.912c0.326-0.326,1.121-1.789,0.604-2.306c-0.452-0.452-1.63,0.101-2.135,0.464l-0.861-3.838l2.777-2.777c0.947-0.947,3.599-4.862,2.62-5.839C24.533,4.512,20.618,7.163,19.671,8.11z",ee={id:"london",color:"info",svgPath:c,title:"London",country:"United Kingdom",latitude:51.5002,longitude:-.1262,flights:[{latitude:50.4422,longitude:30.5367},{latitude:46.948,longitude:7.4481},{latitude:59.3328,longitude:18.0645},{latitude:40.4167,longitude:-3.7033},{latitude:46.0514,longitude:14.506},{latitude:48.2116,longitude:17.1547},{latitude:44.8048,longitude:20.4781},{latitude:55.7558,longitude:37.6176},{latitude:38.7072,longitude:-9.1355},{latitude:54.6896,longitude:25.2799},{latitude:64.1353,longitude:-21.8952},{latitude:40.43,longitude:-74}]},rt={id:"vilnius",color:"info",svgPath:c,title:"Vilnius",country:"Lithuania",latitude:54.6896,longitude:25.2799,flights:[{latitude:50.8371,longitude:4.3676},{latitude:59.9138,longitude:10.7387},{latitude:40.4167,longitude:-3.7033},{latitude:50.0878,longitude:14.4205},{latitude:48.2116,longitude:17.1547},{latitude:44.8048,longitude:20.4781},{latitude:55.7558,longitude:37.6176},{latitude:37.9792,longitude:23.7166},{latitude:51.5002,longitude:-.1262},{latitude:53.3441,longitude:-6.2675}]},st=[ee,rt,{svgPath:c,color:"info",title:"Brussels",country:"Belgium",latitude:50.8371,longitude:4.3676},{svgPath:c,color:"info",title:"Prague",country:"Czech Republic",latitude:50.0878,longitude:14.4205},{svgPath:c,color:"info",title:"Athens",country:"Greece",latitude:37.9792,longitude:23.7166},{svgPath:c,color:"info",title:"Reykjavik",country:"Iceland",latitude:64.1353,longitude:-21.8952},{svgPath:c,color:"info",title:"Dublin",country:"Ireland",latitude:53.3441,longitude:-6.2675},{svgPath:c,color:"info",title:"Oslo",country:"Norway",latitude:59.9138,longitude:10.7387},{svgPath:c,color:"info",title:"Lisbon",country:"Portugal",latitude:38.7072,longitude:-9.1355},{svgPath:c,color:"info",title:"Moscow",country:"Russia",latitude:55.7558,longitude:37.6176},{svgPath:c,color:"info",title:"Belgrade",country:"Serbia",latitude:44.8048,longitude:20.4781},{svgPath:c,color:"info",title:"Bratislava",country:"Slovakia",latitude:48.2116,longitude:17.1547},{svgPath:c,color:"info",title:"Ljubljana",country:"Slovenia",latitude:46.0514,longitude:14.506},{svgPath:c,color:"info",title:"Madrid",country:"Spain",latitude:40.4167,longitude:-3.7033},{svgPath:c,color:"info",title:"Stockholm",country:"Sweden",latitude:59.3328,longitude:18.0645},{svgPath:c,color:"info",title:"Bern",country:"Switzerland",latitude:46.948,longitude:7.4481},{svgPath:c,color:"info",title:"Kiev",country:"Ukraine",latitude:50.4422,longitude:30.5367},{svgPath:c,color:"info",title:"Paris",country:"France",latitude:48.8567,longitude:2.351},{svgPath:c,color:"info",title:"New York",country:"United States of America",latitude:40.43,longitude:-74}],H={cities:st,mainCity:ee.title,homeCity:ee.title},ut=a=>{const{getColor:t}=ge();return Fe(()=>a.value.map(e=>({...e,color:t(e.color)})))},ct=a=>{if(!a||!a.flights||!a.flights.length)return;const t=[...a.flights.map(({latitude:i})=>i),a.latitude],e=[...a.flights.map(({longitude:i})=>i),a.longitude];return{bottom:Math.min(...t),left:Math.min(...e),right:Math.max(...e),top:Math.max(...t)}},dt=a=>{if(!(!a||!a.flights||!a.flights.length))return a.flights.map(t=>({geometry:{type:"LineString",coordinates:[[a.longitude,a.latitude],[t.longitude,t.latitude]]}}))},K=(a,t)=>a.toLowerCase()===t.toLowerCase();const pt=fe({__name:"LineMap",props:{mapData:null,homeCity:{default:"New York"},modelValue:{default:"New York"}},emits:["update:modelValue"],setup(a,{emit:t}){const e=a,i=l=>l?`Flights from ${l}`:"",o=l=>`Show flights from ${l}`,{colors:n}=ge(),s=R(),r=_(),u=_(),d=_(),f=_(),v=_(),P=_(),h=_(),p=_(),m=_(),y=se({get(){return e.modelValue},set(l){t("update:modelValue",l)}}),L=ut(Ye(e,"mapData")),D=se(()=>{const l=S();return dt(l)}),S=()=>L.value.find(({title:l})=>K(l,y.value)),M=()=>{const l=S(),g=ct(l);g&&u.value.zoomToGeoBounds(g)},O=()=>{var ie;const l=Oe.new(s.value);l.setThemes([Te.new(l)]);const g=l.container.children.push(Ve.new(l,{minZoomLevel:1,maxZoomLevel:10})),V=g.set("zoomControl",Be.new(l,{})),U=g.series.push(Ne.new(l,{geoJSON:ze,exclude:["AQ"]}));U.mapPolygons.template.setAll({fill:w(n.secondary),fillOpacity:.4,strokeWidth:.5}),U.events.on("datavalidated",M);const F=g.series.push(Re.new(l,{latitudeField:"latitude",longitudeField:"longitude"})),te=pe.new({});te.events.on("click",B=>{y.value=B.target._dataItem.dataContext.title}),F.bullets.push((B,mt,Ce)=>{const $=Ce.dataContext,ne=K($.title,y.value);return Ae.new(B,{sprite:E.new(B,{svgPath:$.svgPath,x:z(50),y:z(50),centerX:z(50),centerY:z(50),fill:w(ne?n.primary:$.color),scale:ne?1.5:1,tooltipText:"{title}"},te)})});const Z=g.series.push(lt.new(l,{}));Z.mapLines.template.setAll({stroke:w(n.primary),strokeWidth:2,strokeOpacity:.5}),F.data.setAll(L.value),Z.data.setAll(D.value);const ae=g.children.push(Ge.new(l,{x:15,y:15,layout:l.horizontalLayout})),_e=ae.children.push(E.new(l,{svgPath:ot,fill:w(n.info)})),Se=ae.children.push(re.new(l,{text:i((ie=S())==null?void 0:ie.title),fill:w(n.info),fontSize:22,lineHeight:Ee})),Y=g.children.push(Ue.new(l,{x:15,y:45,label:re.new(l,{text:o(e.homeCity),paddingTop:0,marginRight:0,paddingBottom:0,marginLeft:0}),visible:!1}));Y.events.on("click",()=>{y.value=e.homeCity,Y.hide()}),r.value=l,u.value=g,P.value=V,f.value=F,v.value=Z,d.value=U,p.value=_e,h.value=Se,m.value=Y},T=()=>{f.value.data.setAll(L.value)},ye=()=>{var l;v.value.data.setAll((l=D.value)!=null?l:[])},be=()=>{var l,g,V;h.value.set("text",i((l=S())==null?void 0:l.title)),(V=(g=m.value)[K(e.homeCity,y.value)?"hide":"show"])==null||V.call(g)},Pe=()=>{r.value&&(d.value.mapPolygons.template.setAll({fill:w(n.secondary)}),v.value.mapLines.template.setAll({stroke:w(n.primary)}),h.value.set("fill",w(n.info)),p.value.set("fill",w(n.info)),T())},Le=()=>{r.value&&(T(),ye(),be(),M())},we=()=>{r.value&&r.value.dispose()};return $e(O),qe(Le),He(n,Pe),Ke(we),(l,g)=>(ve(),he("div",{ref_key:"mapRef",ref:s,class:"line-map"},null,512))}});var gt=Ze(pt,[["__scopeId","data-v-d3324288"]]);const ft={class:"line-maps-page"},vt={class:"row"},ht={class:"flex md12 xs12"},Pt=fe({__name:"LineMapsPage",setup(a){const t=R(H.mainCity),e=R(H.homeCity),i=R(H.cities);return(o,n)=>{const s=We("va-card");return ve(),he("div",ft,[ue("div",vt,[ue("div",ht,[ce(s,{class:"line-maps-page__widget",title:"Line Maps"},{default:Je(()=>[ce(gt,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=r=>t.value=r),"map-data":i.value,"home-city":e.value,style:{height:"75vh"}},null,8,["modelValue","map-data","home-city"])]),_:1})])])])}}});export{Pt as default};