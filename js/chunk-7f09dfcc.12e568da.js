(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7f09dfcc"],{"0288":function(t,e,o){"use strict";o.r(e);var a=o("7a23");const s=t=>(Object(a["C"])("data-v-4e4407ac"),t=t(),Object(a["A"])(),t),c={class:"checkorder-main container"},l={class:"row gx-5"},r={class:"col-12 top-btns"},n={class:"back-button"},i=s(()=>Object(a["h"])("i",{class:"bi bi-arrow-left"},null,-1)),d={class:"col-12 col-md-12 col-lg-5 mb-4"},u={class:"col-12 col-md-12 col-lg-7"};function b(t,e,o,s,b,h){const p=Object(a["I"])("OrderBanner"),O=Object(a["I"])("HomeLoading"),j=Object(a["I"])("OrderForm"),f=Object(a["I"])("OrderLists");return Object(a["z"])(),Object(a["g"])("div",null,[Object(a["k"])(p,{title:"填寫訂單",imgUrl:"https://images.unsplash.com/photo-1602693875034-52c6b2e79785?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80",fontColor:"#F7F1F0",boderColor:"#F7F1F0"}),Object(a["h"])("div",c,[Object(a["k"])(O,{isLoading:b.isLoading},null,8,["isLoading"]),Object(a["h"])("div",l,[Object(a["h"])("div",r,[Object(a["h"])("div",n,[Object(a["h"])("button",{onClick:e[0]||(e[0]=(...t)=>h.backBtn&&h.backBtn(...t))},[i,Object(a["j"])(" 回購物車 ")])])]),Object(a["h"])("div",d,[Object(a["k"])(j,{onCreateOrderHandler:h.createOrder},null,8,["onCreateOrderHandler"])]),Object(a["h"])("div",u,[Object(a["k"])(f,{cartLists:b.cartLists,total:b.total,finalTotal:b.finalTotal,hasCouponCode:b.hasCouponCode,couponCode:b.couponCode,onSetCouponHandler:h.setCoupon},null,8,["cartLists","total","finalTotal","hasCouponCode","couponCode","onSetCouponHandler"])])])])])}o("14d9");var h=o("e015");const p=t=>(Object(a["C"])("data-v-3197494c"),t=t(),Object(a["A"])(),t),O={class:"order-lists-wrap"},j={class:"order-lists"},f=p(()=>Object(a["h"])("h2",{class:"table-title"},"訂單明細",-1)),m={class:"table"},g=p(()=>Object(a["h"])("thead",{class:"table-thead"},[Object(a["h"])("tr",null,[Object(a["h"])("th",{class:"list-title"},"品名"),Object(a["h"])("th",{class:"list-qty"},"數量"),Object(a["h"])("th",{class:"list-price"},"單價")])],-1)),C={class:"table-tbody"},v={class:"list-title"},y={class:"list-price"},k=p(()=>Object(a["h"])("td",null,null,-1)),L={class:"order-info"},I={class:"info-list"},w=p(()=>Object(a["h"])("div",null,"商品數",-1)),F={class:"info-list"},x=p(()=>Object(a["h"])("div",null,"商品總額",-1)),V={class:"info-list discount-text"},$=p(()=>Object(a["h"])("div",null,"折價",-1)),S={class:"info-list total-price-text"},T=p(()=>Object(a["h"])("div",null,"總計",-1)),H={key:0,class:"info-list coupon-text-wrap"},U=p(()=>Object(a["h"])("div",null,"折扣碼",-1)),_={class:"coupon-wrap"},B=["disabled"],z=["disabled"];function q(t,e,o,s,c,l){return Object(a["z"])(),Object(a["g"])("div",O,[Object(a["h"])("div",j,[f,Object(a["h"])("table",m,[g,Object(a["h"])("tbody",C,[(Object(a["z"])(!0),Object(a["g"])(a["a"],null,Object(a["G"])(o.cartLists,e=>(Object(a["z"])(),Object(a["g"])("tr",{key:e.id},[Object(a["h"])("td",v,Object(a["L"])(e.product.title),1),Object(a["h"])("td",null,Object(a["L"])(e.qty),1),Object(a["h"])("td",y,Object(a["L"])(t.$filters.currency(e.product.price)),1),k]))),128))])]),Object(a["h"])("div",L,[Object(a["h"])("div",I,[w,Object(a["h"])("div",null,Object(a["L"])(o.cartLists.length),1)]),Object(a["h"])("div",F,[x,Object(a["h"])("div",null,Object(a["L"])(t.$filters.currency(o.total)),1)]),Object(a["h"])("div",V,[$,Object(a["h"])("div",null,Object(a["L"])(t.$filters.currency(o.total-o.finalTotal)),1)]),Object(a["h"])("div",S,[T,Object(a["h"])("div",null,Object(a["L"])(t.$filters.currency(o.finalTotal)),1)]),o.hasCouponCode?(Object(a["z"])(),Object(a["g"])("div",H,[U,Object(a["h"])("div",null,Object(a["L"])(o.couponCode),1)])):Object(a["f"])("",!0)]),Object(a["h"])("div",_,[Object(a["V"])(Object(a["h"])("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>c.InputcouponCode=t),placeholder:"請輸入折扣碼",disabled:o.hasCouponCode},null,8,B),[[a["P"],c.InputcouponCode]]),Object(a["h"])("button",{class:"setcoupon-btn",onClick:e[1]||(e[1]=(...t)=>l.setCoupon&&l.setCoupon(...t)),disabled:""===c.InputcouponCode||o.hasCouponCode},"套用",8,z)])])])}var P={props:{cartLists:{type:Array},total:{type:Number},finalTotal:{type:Number},hasCouponCode:{type:Boolean},couponCode:{type:String}},data(){return{InputcouponCode:""}},methods:{setCoupon(){this.$emit("setCouponHandler",this.InputcouponCode)}},created(){this.hasCouponCode&&(this.InputcouponCode=this.couponCode)}},A=(o("8edd"),o("6b0d")),M=o.n(A);const G=M()(P,[["render",q],["__scopeId","data-v-3197494c"]]);var D=G;const E=t=>(Object(a["C"])("data-v-efdf3d26"),t=t(),Object(a["A"])(),t),J={class:"order-form-wrap"},N={class:"order-forms"},W=E(()=>Object(a["h"])("h2",{class:"form-title"},"訂購人資訊",-1)),Y={class:"order-form row justify-content-center"},K={class:"input-wrap form-floating"},Q=E(()=>Object(a["h"])("label",{for:"floatingInputOne"},"姓名",-1)),R={class:"input-wrap form-floating"},X=E(()=>Object(a["h"])("label",{for:"floatingInputTwo"},"信箱",-1)),Z={class:"input-wrap form-floating"},tt=E(()=>Object(a["h"])("label",{for:"floatingInputThree"},"聯絡電話",-1)),et={class:"input-wrap form-floating"},ot=E(()=>Object(a["h"])("label",{for:"floatingInputFour"},"收件地址",-1)),at={class:"input-wrap form-floating"},st=E(()=>Object(a["h"])("label",{for:"form-message"},"商品備註",-1)),ct={class:"buttons-wrap d-grid gap-2"},lt=["disabled"];function rt(t,e,o,s,c,l){const r=Object(a["I"])("VField"),n=Object(a["I"])("ErrorMessage"),i=Object(a["I"])("VForm");return Object(a["z"])(),Object(a["g"])("div",J,[Object(a["h"])("div",N,[W,Object(a["h"])("div",Y,[Object(a["k"])(i,{class:"order-form-main",ref:"orderForm",onSubmit:l.createOrder},{default:Object(a["U"])(({meta:t,errors:o})=>[Object(a["h"])("div",K,[Object(a["k"])(r,{modelValue:c.form.user.name,"onUpdate:modelValue":e[0]||(e[0]=t=>c.form.user.name=t),name:"姓名",type:"text",rules:"required",class:Object(a["s"])(["form-control",{"is-invalid":o["姓名"]}]),placeholder:"姓名",id:"floatingInputOne"},null,8,["modelValue","class"]),Q,Object(a["k"])(n,{class:"invalid-feedback",name:"姓名"})]),Object(a["h"])("div",R,[Object(a["k"])(r,{modelValue:c.form.user.email,"onUpdate:modelValue":e[1]||(e[1]=t=>c.form.user.email=t),name:"email",type:"email",rules:"required|email",class:Object(a["s"])(["form-control",{"is-invalid":o["email"]}]),id:"floatingInputTwo",placeholder:"信箱"},null,8,["modelValue","class"]),X,Object(a["k"])(n,{class:"invalid-feedback",name:"email"})]),Object(a["h"])("div",Z,[Object(a["k"])(r,{modelValue:c.form.user.tel,"onUpdate:modelValue":e[2]||(e[2]=t=>c.form.user.tel=t),name:"phone",type:"text",rules:l.isPhone,class:Object(a["s"])(["form-control",{"is-invalid":o["phone"]}]),id:"floatingInputThree",placeholder:"聯絡電話"},null,8,["modelValue","rules","class"]),tt,Object(a["k"])(n,{class:"invalid-feedback",name:"phone"})]),Object(a["h"])("div",et,[Object(a["k"])(r,{modelValue:c.form.user.address,"onUpdate:modelValue":e[3]||(e[3]=t=>c.form.user.address=t),name:"地址",type:"text",rules:"required",class:Object(a["s"])(["form-control",{"is-invalid":o["地址"]}]),placeholder:"收件地址",id:"floatingInputFour"},null,8,["modelValue","class"]),ot,Object(a["k"])(n,{class:"invalid-feedback",name:"地址"})]),Object(a["h"])("div",at,[Object(a["V"])(Object(a["h"])("textarea",{placeholder:"商品備註","onUpdate:modelValue":e[4]||(e[4]=t=>c.form.message=t),class:"form-control",id:"form-message"},null,512),[[a["P"],c.form.message]]),st]),Object(a["h"])("div",ct,[Object(a["h"])("button",{type:"submit",class:"submit-btn",disabled:!t.valid},"送出訂單",8,lt)])]),_:1},8,["onSubmit"])])])])}var nt={data(){return{form:{user:{name:"",email:"",phone:"",address:""},message:""}}},methods:{resetForm(){this.$refs.orderForm.resetForm(),this.message=""},isPhone(t){const e=/^(09)[0-9]{8}$/;return!!e.test(t)||"需要正確的電話號碼"},createOrder(){this.$emit("createOrderHandler",this.form)}}};o("fd5b");const it=M()(nt,[["render",rt],["__scopeId","data-v-efdf3d26"]]);var dt=it,ut=o("cfb9"),bt={components:{OrderBanner:h["a"],OrderLists:D,OrderForm:dt},data(){return{isLoading:!1,cartLists:[],total:0,finalTotal:0,hasCouponCode:!1,couponCode:""}},methods:{getCart(){const t="https://vue3-course-api.hexschool.io/api/dongyang-api/cart";this.isLoading=!0,this.$http.get(t).then(t=>{this.isLoading=!1,t.data.success&&(this.cartLists=t.data.data.carts,0===this.cartLists.length&&this.$router.replace("/productslist/lists"),this.getPrice()),this.checkCouponCode()})},getPrice(){let t=0,e=0;this.cartLists.forEach(o=>{t+=o.total,e+=o.final_total}),this.total=t,this.finalTotal=e},setCoupon(t){console.log(t);const e="https://vue3-course-api.hexschool.io/api/dongyang-api/coupon",o={data:{code:t}};this.$http.post(e,o).then(t=>{t.data.success?ut["a"].emit("push-message",{style:"success",title:""+t.data.message}):ut["a"].emit("push-message",{style:"danger",title:""+t.data.message}),this.getCart()})},createOrder(t){const e="https://vue3-course-api.hexschool.io/api/dongyang-api/order";this.$http.post(e,{data:t}).then(t=>{if(t.data.success){const e=t.data.orderId;ut["a"].emit("updateCartLength"),this.$router.replace("checkout/"+e)}})},checkCouponCode(){this.hasCouponCode=!!this.cartLists[0].coupon,this.hasCouponCode&&(this.couponCode=this.cartLists[0].coupon.code)},backBtn(){this.$router.push("/shoppingCart")}},created(){this.getCart()}};o("e10c");const ht=M()(bt,[["render",b],["__scopeId","data-v-4e4407ac"]]);e["default"]=ht},"0e29":function(t,e,o){"use strict";o("89be")},"46fa":function(t,e,o){},"62a8":function(t,e,o){},"89be":function(t,e,o){},"8edd":function(t,e,o){"use strict";o("a9a0")},a9a0:function(t,e,o){},e015:function(t,e,o){"use strict";var a=o("7a23");function s(t,e,o,s,c,l){return Object(a["z"])(),Object(a["g"])("div",{class:"cart-banner",style:Object(a["t"])(c.baseStyle)},[Object(a["h"])("h2",{style:Object(a["t"])(c.boderStyle)},Object(a["L"])(o.title),5)],4)}var c={props:{title:{type:String,default:"請輸入title"},imgUrl:{type:String},fontColor:{type:String,default:"#F7F1F0"},boderColor:{type:String,default:"#F7F1F0"}},data(){return{baseStyle:{backgroundImage:`url(${this.imgUrl})`,color:this.fontColor},boderStyle:{borderBottom:"5px double "+this.boderColor}}}},l=(o("0e29"),o("6b0d")),r=o.n(l);const n=r()(c,[["render",s],["__scopeId","data-v-66073782"]]);e["a"]=n},e10c:function(t,e,o){"use strict";o("62a8")},fd5b:function(t,e,o){"use strict";o("46fa")}}]);
//# sourceMappingURL=chunk-7f09dfcc.12e568da.js.map