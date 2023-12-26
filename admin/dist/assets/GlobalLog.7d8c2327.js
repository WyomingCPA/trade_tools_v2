import{_ as C,a as u,r as l,o as m,f,g as a,h as i,d as r,c as x,e as R,k as h,t as p,F as I}from"./index.c2d02297.js";import{d as N}from"./debounce.e8d92a1a.js";import{l as V}from"./index.9bc537e3.js";const U={name:"GlobalLog",components:{},data(){const e=[],t="";return{count:{type:Number},loading:!1,items:e,columns:[{key:"type",sortable:!0},{key:"message",sortable:!0},{key:"created_at",sortable:!0},{key:"actions",width:80}],input:t,filter:t,isDebounceInput:!1,isCustomFilteringFn:!1,filteredCount:e.length,filtered:e,selectedItemsEmitted:[],listPrice:Array,currentPage:1,serverParams:{name:""},options:[],value:["all"]}},methods:{addNewOption(e){const t={id:String(this.options.length),text:e,value:e};this.options=[...this.options,t]},deleteChip(e){this.value=this.value.filter(t=>t!==e)},filterExact(e){var t;return this.filter===""?!0:((t=e==null?void 0:e.toString)==null?void 0:t.call(e))===this.filter},updateParams(e){this.serverParams=Object.assign({},this.serverParams,e)},onPageChange(e){console.log(this.currentPage),this.updateParams({page:this.currentPage}),this.fetchRows()},onPerPageChange(e){this.updateParams({perPage:e.currentPerPage}),this.fetchRows()},onSearch(e){this.updateParams({name:e}),this.fetchRows()},updateFilter(e){this.filter=e},debouncedUpdateFilter:N(function(e){this.updateFilter(e)},600),filterPrice:function(e){this.filter=e,this.input=e},fetchRows(){let e=this;this.loading=!0,u.request({method:"post",url:"/api/log/global-log",params:this.serverParams,paramsSerializer:t=>V.stringify(t)}).then(t=>{e.items=t.data.logs,e.count=t.data.count,e.options=t.data.type,e.loading=!1,console.log(this.pages)}).catch(t=>{console.log(t),e.loading=!1})},resetInfoModal(){this.infoModal.title="",this.infoModal.content=""},publish:function(e,t){let n=this;this.loading=!0,console.log(n.selectedItemsEmitted),u.get("/sanctum/csrf-cookie").then(_=>{u.post("/api/post/rss-habr-publish",{selRows:n.selectedItemsEmitted}).then(s=>{s.status?(console.log("\u0412\u044B\u0437\u0432\u0430\u043B\u0438 \u0430\u043B\u0435\u0440\u0442"),this.$vaToast.init({message:"\u0417\u0430\u043F\u0438\u0441\u044C \u0434\u043E\u0431\u0430\u0432\u043B\u0435\u043D\u0430 \u0432 \u0442\u0435\u043B\u0435\u0433\u0440\u0430\u043C\u043C",color:"success"}),this.fetchRows(),n.loading=!1):(console.log("\u041D\u0435 \u0440\u0430\u0431\u043E\u0442\u0430\u0435\u0442"),console.log(s.status),n.loading=!1)})})}},computed:{customFilteringFn(){return this.isCustomFilteringFn?this.filterExact:void 0},pages(){return this.perPage&&this.perPage!==0?Math.ceil(this.count/this.perPage):this.count}},watch:{input(e){this.isDebounceInput?this.debouncedUpdateFilter(e):(console.log(e),this.updateParams({name:e}),this.fetchRows(),this.updateFilter(e))},value(e){this.isDebounceInput?this.debouncedUpdateFilter(e):(console.log(e),this.updateParams({category_value:e}),this.fetchRows())},currentPage:function(e){this.updateParams({page:e}),this.fetchRows()}},created(){this.fetchRows()}},E={class:"grid md:grid-cols-2 gap-6 mb-6"},S={class:"grid md:grid-cols-2 gap-6 mb-6"},B=["href"],L={colspan:"6"},M={class:"flex justify-center mt-4"},D=h(" Number of filtered items: ");function G(e,t,n,_,s,c){const b=l("va-input"),g=l("va-chip"),v=l("va-select"),P=l("va-pagination"),y=l("va-data-table"),k=l("va-alert"),F=l("va-card-content"),w=l("va-card");return m(),f(w,null,{default:a(()=>[i(F,null,{default:a(()=>[r("div",E,[i(b,{modelValue:s.input,"onUpdate:modelValue":t[0]||(t[0]=o=>s.input=o),placeholder:"Filter...",class:"w-full"},null,8,["modelValue"])]),r("div",S,[i(v,{modelValue:s.value,"onUpdate:modelValue":t[1]||(t[1]=o=>s.value=o),label:"Removable chips",options:s.options,onCreateNew:c.addNewOption,"track-by":o=>o,"allow-create":"unique",multiple:""},{content:a(({value:o})=>[(m(!0),x(I,null,R(o,d=>(m(),f(g,{key:d,size:"small",class:"mr-1 my-1",closeable:"","onUpdate:modelValue":j=>c.deleteChip(d)},{default:a(()=>[h(p(d),1)]),_:2},1032,["onUpdate:modelValue"]))),128))]),_:1},8,["modelValue","options","onCreateNew","track-by"])]),i(y,{items:s.items,columns:s.columns,filter:s.filter,"filter-method":c.customFilteringFn,onFiltered:t[3]||(t[3]=o=>s.filteredCount=o.items.length),loading:s.loading,selectable:"","selected-color":"warning",onSelectionChange:t[4]||(t[4]=o=>s.selectedItemsEmitted=o.currentSelectedItems)},{"cell(title)":a(({rowData:o})=>[r("a",{class:"link",target:"_blank",href:o.link},p(o.title),9,B)]),bodyAppend:a(()=>[r("tr",null,[r("td",L,[r("div",M,[i(P,{modelValue:s.currentPage,"onUpdate:modelValue":t[2]||(t[2]=o=>s.currentPage=o),pages:c.pages},null,8,["modelValue","pages"])])])])]),_:1},8,["items","columns","filter","filter-method","loading"]),i(k,{class:"!mt-6",color:"info",outline:""},{default:a(()=>[D,i(g,null,{default:a(()=>[h(p(s.count),1)]),_:1})]),_:1})]),_:1})]),_:1})}var O=C(U,[["render",G],["__scopeId","data-v-646b65cb"]]);export{O as default};
