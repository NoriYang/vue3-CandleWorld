(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0c0d8e6f"],{"37e4":function(t,e,s){"use strict";s("98a1")},"98a1":function(t,e,s){},b019:function(t,e,s){"use strict";s.r(e);var c=s("7a23");const n=t=>(Object(c["C"])("data-v-741a8a5d"),t=t(),Object(c["A"])(),t),o={class:"login-main container mt-5"},a={class:"back-button"},i=n(()=>Object(c["h"])("i",{class:"bi bi-arrow-left"},null,-1)),r={class:"login-main-wrap"},d=n(()=>Object(c["h"])("h2",null,"後台管理頁面",-1)),u={class:"col-md-12"},l={class:"mb-2"},b=n(()=>Object(c["h"])("label",{for:"inputText",class:"sr-only"},"帳號：",-1)),h={class:"mb-2"},p=n(()=>Object(c["h"])("label",{for:"inputPassword",class:"sr-only"},"密碼：",-1)),j=n(()=>Object(c["h"])("div",{class:"text-end mt-4"},[Object(c["h"])("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"},"登入")],-1));function O(t,e,s,n,O,m){const f=Object(c["I"])("loading"),k=Object(c["I"])("router-link");return Object(c["z"])(),Object(c["g"])("div",null,[Object(c["k"])(f,{active:O.isLoading},null,8,["active"]),Object(c["h"])("div",o,[Object(c["h"])("div",a,[Object(c["k"])(k,{to:"/",class:"btn btn-dark"},{default:Object(c["U"])(()=>[i,Object(c["j"])(" 回首頁 ")]),_:1})]),Object(c["h"])("div",r,[d,Object(c["h"])("form",{class:"login-main-form mt-3 row justify-content-center",onSubmit:e[2]||(e[2]=Object(c["W"])((...t)=>m.signIn&&m.signIn(...t),["prevent"]))},[Object(c["h"])("div",u,[Object(c["h"])("div",l,[b,Object(c["V"])(Object(c["h"])("input",{type:"text",id:"inputText",class:"form-control",placeholder:"請輸入帳號",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=t=>O.user.username=t)},null,512),[[c["P"],O.user.username]])]),Object(c["h"])("div",h,[p,Object(c["V"])(Object(c["h"])("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"請輸入密碼",required:"","onUpdate:modelValue":e[1]||(e[1]=t=>O.user.password=t)},null,512),[[c["P"],O.user.password]])]),j])],32)])])])}s("14d9");var m={data(){return{user:{username:"",password:""},isLoading:!1}},methods:{signIn(){const t="https://vue3-course-api.hexschool.io/admin/signin";this.isLoading=!0,this.$http.post(t,this.user).then(t=>{if(this.isLoading=!1,t.data.success){const{token:e,expired:s}=t.data;document.cookie=`hexToken=${e};expires=${new Date(s)}`,this.$router.push("/dashboard/products")}})},checkLogin(){const t=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=""+t;const e="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(e).then(t=>{t.data.success&&this.$router.replace("/dashboard/products")})}},created(){this.checkLogin()}},f=(s("37e4"),s("6b0d")),k=s.n(f);const v=k()(m,[["render",O],["__scopeId","data-v-741a8a5d"]]);e["default"]=v}}]);
//# sourceMappingURL=chunk-0c0d8e6f.779dcaa4.js.map