(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4be7dbc4"],{"67e3":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const l={class:"table mt-4 container"},d=Object(c["h"])("thead",null,[Object(c["h"])("tr",null,[Object(c["h"])("th",null,"購買時間"),Object(c["h"])("th",null,"Email"),Object(c["h"])("th",null,"購買款項"),Object(c["h"])("th",null,"應付金額"),Object(c["h"])("th",null,"是否付款"),Object(c["h"])("th",null,"編輯")])],-1),s=["textContent"],n={class:"list-unstyled"},r={class:"text-right"},b={class:"form-check form-switch"},i=["id","onUpdate:modelValue","onChange"],O=["for"],o={key:0},h={key:1},j={class:"btn-group"},u=["onClick"],p=["onClick"];function g(e,t,a,g,m,y){const k=Object(c["I"])("Loading"),f=Object(c["I"])("OrderModal"),L=Object(c["I"])("DelModal"),v=Object(c["I"])("Pagination");return Object(c["z"])(),Object(c["g"])(c["a"],null,[Object(c["k"])(k,{active:m.isLoading},null,8,["active"]),Object(c["h"])("table",l,[d,Object(c["h"])("tbody",null,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(m.orders,(t,a)=>(Object(c["z"])(),Object(c["g"])(c["a"],{key:a},[m.orders.length?(Object(c["z"])(),Object(c["g"])("tr",{key:0,class:Object(c["s"])({"text-secondary":!t.is_paid})},[Object(c["h"])("td",null,Object(c["L"])(e.$filters.date(t.create_at)),1),Object(c["h"])("td",null,[t.user?(Object(c["z"])(),Object(c["g"])("span",{key:0,textContent:Object(c["L"])(t.user.email)},null,8,s)):Object(c["f"])("",!0)]),Object(c["h"])("td",null,[Object(c["h"])("ul",n,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(t.products,(e,t)=>(Object(c["z"])(),Object(c["g"])("li",{key:t},Object(c["L"])(e.product.title)+" 數量："+Object(c["L"])(e.qty)+" "+Object(c["L"])(e.product.unit),1))),128))])]),Object(c["h"])("td",r,Object(c["L"])(t.total),1),Object(c["h"])("td",null,[Object(c["h"])("div",b,[Object(c["V"])(Object(c["h"])("input",{class:"form-check-input",type:"checkbox",id:"paidSwitch"+t.id,"onUpdate:modelValue":e=>t.is_paid=e,onChange:e=>y.updatePaid(t)},null,40,i),[[c["O"],t.is_paid]]),Object(c["h"])("label",{class:"form-check-label",for:"paidSwitch"+t.id},[t.is_paid?(Object(c["z"])(),Object(c["g"])("span",o,"已付款")):(Object(c["z"])(),Object(c["g"])("span",h,"未付款"))],8,O)])]),Object(c["h"])("td",null,[Object(c["h"])("div",j,[Object(c["h"])("button",{class:"btn btn-outline-primary btn-sm",onClick:e=>y.openModal(!1,t)},"檢視",8,u),Object(c["h"])("button",{class:"btn btn-outline-danger btn-sm",onClick:e=>y.openDelOrderModal(t)},"刪除",8,p)])])],2)):Object(c["f"])("",!0)],64))),128))])]),Object(c["k"])(f,{order:m.tempOrder,ref:"orderModal",onUpdatePaid:y.updatePaid},null,8,["order","onUpdatePaid"]),Object(c["k"])(L,{item:m.tempOrder,ref:"delModal",onDelItem:y.delOrder},null,8,["item","onDelItem"]),Object(c["k"])(v,{pages:m.pagination,onEmitPages:y.getOrders},null,8,["pages","onEmitPages"])],64)}var m=a("ba4b");const y={class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},k={class:"modal-dialog modal-xl",role:"document"},f={class:"modal-content border-0"},L=Object(c["h"])("div",{class:"modal-header bg-dark text-white"},[Object(c["h"])("h5",{class:"modal-title",id:"exampleModalLabel"},[Object(c["h"])("span",null,"訂單細節")]),Object(c["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),v={class:"modal-body"},x={class:"row"},P={class:"col-md-4"},M=Object(c["h"])("h3",null,"用戶資料",-1),z={class:"table"},_={key:0},w=Object(c["h"])("th",{style:{width:"100px"}},"姓名",-1),C=Object(c["h"])("th",null,"Email",-1),$=Object(c["h"])("th",null,"電話",-1),D=Object(c["h"])("th",null,"地址",-1),I=Object(c["h"])("th",null,"留言",-1),E={class:"col-md-8"},G=Object(c["h"])("h3",null,"訂單細節",-1),U={class:"table"},N=Object(c["h"])("th",{style:{width:"100px"}},"訂單編號",-1),S=Object(c["h"])("th",null,"下單時間",-1),V=Object(c["h"])("th",null,"付款時間",-1),W={key:0},q={key:1},J=Object(c["h"])("th",null,"付款狀態",-1),A={key:0,class:"text-success"},B={key:1,class:"text-muted"},F=Object(c["h"])("th",null,"總金額",-1),H=Object(c["h"])("h3",null,"選購商品",-1),K={class:"table"},Q=Object(c["h"])("thead",null,[Object(c["h"])("tr")],-1),R={class:"text-end"},T={class:"modal-footer"},X=Object(c["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function Y(e,t,a,l,d,s){return Object(c["z"])(),Object(c["g"])("div",y,[Object(c["h"])("div",k,[Object(c["h"])("div",f,[L,Object(c["h"])("div",v,[Object(c["h"])("div",x,[Object(c["h"])("div",P,[M,Object(c["h"])("table",z,[d.tempOrder.user?(Object(c["z"])(),Object(c["g"])("tbody",_,[Object(c["h"])("tr",null,[w,Object(c["h"])("td",null,Object(c["L"])(d.tempOrder.user.name),1)]),Object(c["h"])("tr",null,[C,Object(c["h"])("td",null,Object(c["L"])(d.tempOrder.user.email),1)]),Object(c["h"])("tr",null,[$,Object(c["h"])("td",null,Object(c["L"])(d.tempOrder.user.tel),1)]),Object(c["h"])("tr",null,[D,Object(c["h"])("td",null,Object(c["L"])(d.tempOrder.user.address),1)]),Object(c["h"])("tr",null,[I,Object(c["h"])("td",null,Object(c["L"])(d.tempOrder.message),1)])])):Object(c["f"])("",!0)])]),Object(c["h"])("div",E,[G,Object(c["h"])("table",U,[Object(c["h"])("tbody",null,[Object(c["h"])("tr",null,[N,Object(c["h"])("td",null,Object(c["L"])(d.tempOrder.id),1)]),Object(c["h"])("tr",null,[S,Object(c["h"])("td",null,Object(c["L"])(e.$filters.date(d.tempOrder.create_at)),1)]),Object(c["h"])("tr",null,[V,Object(c["h"])("td",null,[d.tempOrder.paid_date?(Object(c["z"])(),Object(c["g"])("span",W,Object(c["L"])(e.$filters.date(d.tempOrder.paid_date)),1)):(Object(c["z"])(),Object(c["g"])("span",q,"時間不正確"))])]),Object(c["h"])("tr",null,[J,Object(c["h"])("td",null,[d.tempOrder.is_paid?(Object(c["z"])(),Object(c["g"])("strong",A,"已付款")):(Object(c["z"])(),Object(c["g"])("span",B,"尚未付款"))])]),Object(c["h"])("tr",null,[F,Object(c["h"])("td",null,Object(c["L"])(e.$filters.currency(d.tempOrder.total)),1)])])]),H,Object(c["h"])("table",K,[Q,Object(c["h"])("tbody",null,[(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(d.tempOrder.products,t=>(Object(c["z"])(),Object(c["g"])("tr",{key:t.id},[Object(c["h"])("th",null,Object(c["L"])(t.product.title),1),Object(c["h"])("td",null,Object(c["L"])(t.qty)+" / "+Object(c["L"])(t.product.unit),1),Object(c["h"])("td",R,Object(c["L"])(e.$filters.currency(t.final_total)),1)]))),128))])])])])]),Object(c["h"])("div",T,[X,Object(c["h"])("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=t=>e.$emit("update-order",d.tempOrder))},"確認")])])])],512)}var Z=a("e0ae"),ee={name:"orderModal",props:{order:{type:Object,default(){return{}}}},data(){return{status:{},modal:"",tempOrder:{},isPaid:!1}},emits:["update-product"],mixins:[Z["a"]],inject:["emitter"],watch:{order(){this.tempOrder=this.order,this.isPaid=this.tempOrder.is_paid}}},te=a("6b0d"),ae=a.n(te);const ce=ae()(ee,[["render",Y]]);var le=ce,de=a("8343"),se={data(){return{orders:{},isNew:!1,pagination:{},isLoading:!1,tempOrder:{},currentPage:1}},components:{Pagination:de["a"],DelModal:m["a"],OrderModal:le},methods:{getOrders(e=1){this.currentPage=e;const t="https://vue3-course-api.hexschool.io/api/dongyang-api/admin/orders?page="+e;this.isLoading=!0,this.$http.get(t,this.tempProduct).then(e=>{this.orders=e.data.orders,this.pagination=e.data.pagination,this.isLoading=!1})},openModal(e,t){this.tempOrder={...t},this.isNew=!1;const a=this.$refs.orderModal;a.showModal()},openDelOrderModal(e){this.tempOrder={...e};const t=this.$refs.delModal;t.showModal()},updatePaid(e){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/dongyang-api/admin/order/"+e.id,a={is_paid:e.is_paid};this.$http.put(t,{data:a}).then(e=>{this.isLoading=!1,this.getOrders(this.currentPage),this.$httpMessageState(e,"更新付款狀態")})},delOrder(){const e="https://vue3-course-api.hexschool.io/api/dongyang-api/admin/order/"+this.tempOrder.id;this.isLoading=!0,this.$http.delete(e).then(e=>{const t=this.$refs.delModal;t.hideModal(),this.getOrders(this.currentPage)})}},created(){this.getOrders()}};const ne=ae()(se,[["render",g]]);t["default"]=ne},8343:function(e,t,a){"use strict";var c=a("7a23");const l={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},s={class:"page-item"},n=Object(c["h"])("span",{"aria-hidden":"true"},"«",-1),r=[n],b=["onClick"],i={class:"page-item"},O=Object(c["h"])("span",{"aria-hidden":"true"},"»",-1),o=[O];function h(e,t,a,n,O,h){return Object(c["z"])(),Object(c["g"])("nav",l,[Object(c["h"])("ul",d,[Object(c["h"])("li",s,[Object(c["h"])("a",{class:Object(c["s"])(["page-link",{disabled:!a.pages.has_pre}]),href:"#","aria-label":"Previous",onClick:t[0]||(t[0]=Object(c["W"])(e=>h.updatePage(a.pages.current_page-1),["prevent"]))},r,2)]),(Object(c["z"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(a.pages.total_pages,e=>(Object(c["z"])(),Object(c["g"])("li",{class:"page-item",key:e},[Object(c["h"])("a",{class:Object(c["s"])(["page-link",{disabled:e===a.pages.current_page}]),href:"#",onClick:Object(c["W"])(t=>h.updatePage(e),["prevent"])},Object(c["L"])(e),11,b)]))),128)),Object(c["h"])("li",i,[Object(c["h"])("a",{class:Object(c["s"])(["page-link",{disabled:!a.pages.has_next}]),href:"#","aria-label":"Next",onClick:t[1]||(t[1]=Object(c["W"])(e=>h.updatePage(a.pages.current_page+1),["prevent"]))},o,2)])])])}var j={props:["pages"],methods:{updatePage(e){this.$emit("emit-pages",e)}}},u=a("6b0d"),p=a.n(u);const g=p()(j,[["render",h]]);t["a"]=g}}]);
//# sourceMappingURL=chunk-4be7dbc4.05a23ac8.js.map