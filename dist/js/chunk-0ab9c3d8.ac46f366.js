(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ab9c3d8"],{"4c4b":function(t,e,c){},"75e1":function(t,e,c){"use strict";c("4c4b")},"8a00":function(t,e,c){"use strict";c.r(e);var r=c("7a23");const s={class:"Index"};function i(t,e,c,i,o,n){const a=Object(r["I"])("Navbar"),b=Object(r["I"])("Banner"),l=Object(r["I"])("Inrto"),d=Object(r["I"])("Footer");return Object(r["z"])(),Object(r["g"])("div",s,[Object(r["k"])(a),Object(r["k"])(b),Object(r["k"])(l),Object(r["k"])(d)])}var o=c("852e");const n=t=>(Object(r["C"])("data-v-5dc82522"),t=t(),Object(r["A"])(),t),a={class:"intro-main"},b=n(()=>Object(r["h"])("div",{class:"intro-title"},[Object(r["h"])("p",null,"香氛蠟燭的優點")],-1)),l={class:"container"},d={class:"col-md-6"},f=["src"],h={class:"col-md-6"},j={class:"card-title"},O={class:"card-text"};function u(t,e,c,s,i,o){return Object(r["z"])(),Object(r["g"])("div",a,[b,Object(r["h"])("div",l,[(Object(r["z"])(!0),Object(r["g"])(r["a"],null,Object(r["G"])(i.cardArray,(t,e)=>(Object(r["z"])(),Object(r["g"])("div",{class:"card mb-5",key:t.title},[Object(r["h"])("div",{class:Object(r["s"])(["row",[t.isReverse?i.reverse:"",["introShow"+(e+1)]]])},[Object(r["h"])("div",d,[Object(r["h"])("img",{src:t.img,class:"img-fluid rounded",alt:"香氛蠟燭優點圖片"},null,8,f)]),Object(r["h"])("div",h,[Object(r["h"])("div",{class:Object(r["s"])(["card-body",{"show-animate":t.isShow}]),ref_for:!0,ref:"intro"+t.id},[Object(r["h"])("div",null,[Object(r["h"])("h5",j,Object(r["L"])(t.title),1),Object(r["h"])("p",O,Object(r["L"])(t.text),1)])],2)])],2)]))),128))])])}var w={data(){return{currentScroll:"",cardArray:[{id:1,title:"清除空間異味",text:"你有使用空氣清新劑的習慣嗎？如果含有有害的化學添加成分，吸入到人體實在不妥，選擇點上香氛蠟燭，讓香氣飄散浴室、廁間，就可以有效清除異味，跟尷尬味道說掰掰！",img:"https://images.unsplash.com/photo-1602607203475-c5e99918dfc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",isReverse:!1,isShow:!1},{id:2,title:"添加空間香氣",text:"對氣味敏感的人真心推！天然蠟燭的精油透過燃燒會揮發至空氣中，讓整個空間氛圍洋溢著淡淡香氣，不刺鼻不致暈，而且柔和持久，經常使用更會讓家具、身體都沾染迷人好聞的香味。",img:"https://images.unsplash.com/photo-1608085021802-e886468f5fc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",isReverse:!0,isShow:!1},{id:3,title:"緩解壓力、放鬆心情",text:"除了美食、美景還有什麼比香氣能更讓人放鬆呢？點上一盞搖曳的燭光，在餐桌上、沐浴時、睡覺前，幫助緩解緊繃的神經、好好享受香氣舒緩身心的每一刻吧！",img:"https://images.unsplash.com/photo-1608181831843-e7e72430f993?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",isReverse:!1,isShow:!1},{id:4,title:"改善睡眠品質",text:"早起起不來、晚睡睡不著？想到隔天上班就壓力破表？如果你還有睡前滑手機、追劇的習慣，會讓大腦更活躍、更難入眠！這時點上香氛蠟燭，幫助安定心緒、舒緩身心，能更快進入睡眠狀態，睡得更深沉，為你送上一個香甜的美夢。",img:"https://images.unsplash.com/photo-1607646004320-94923315e7b6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",isReverse:!0,isShow:!1}],reverse:"d-flex flex-row-reverse"}},mounted(){window.addEventListener("scroll",this.handleScroll),window.scrollTo(0,0)},methods:{handleScroll(){this.currentScroll=window.scrollY,this.currentScroll>=this.$refs.intro1[0].offsetParent.offsetTop-700&&(this.cardArray[0].isShow=!0),this.currentScroll>=this.$refs.intro2[0].offsetParent.offsetTop-700&&(this.cardArray[1].isShow=!0),this.currentScroll>=this.$refs.intro3[0].offsetParent.offsetTop-700&&(this.cardArray[2].isShow=!0),this.currentScroll>=this.$refs.intro4[0].offsetParent.offsetTop-900&&(this.cardArray[3].isShow=!0)}},beforeUnmount(){window.removeEventListener("scroll",this.handleScroll)}},p=(c("9dd8"),c("6b0d")),v=c.n(p);const x=v()(w,[["render",u],["__scopeId","data-v-5dc82522"]]);var m=x;const S=t=>(Object(r["C"])("data-v-2b5d2ff1"),t=t(),Object(r["A"])(),t),g={class:"banner"},k={class:"banner-content"},y=S(()=>Object(r["h"])("p",{class:"banner-content-pc"},[Object(r["h"])("span",{class:"imp-text"},"居家空間"),Object(r["h"])("br"),Object(r["j"])(" 也能擁有草木花香 ")],-1)),A=S(()=>Object(r["h"])("p",{class:"banner-content-mobile"},[Object(r["h"])("span",{class:"imp-text"},"居家空間"),Object(r["h"])("br"),Object(r["j"])(" 也能擁有"),Object(r["h"])("br"),Object(r["j"])(" 草木花香 ")],-1)),H={class:"banner-link"},M=S(()=>Object(r["h"])("i",{class:"bi bi-chevron-right arrow-move"},null,-1));function B(t,e){const c=Object(r["I"])("router-link");return Object(r["z"])(),Object(r["g"])("div",g,[Object(r["h"])("div",k,[y,A,Object(r["h"])("div",H,[Object(r["k"])(c,{class:"banner-link",to:"/home/productslist/lists"},{default:Object(r["U"])(()=>[Object(r["j"])(" 前往購買"),M]),_:1})])])])}c("75e1");const I={},G=v()(I,[["render",B],["__scopeId","data-v-2b5d2ff1"]]);var D=G,_=c("7f21"),z={components:{Banner:D,Inrto:m,Footer:_["a"],Navbar:o["a"]}};const R=v()(z,[["render",i]]);e["default"]=R},"9dd8":function(t,e,c){"use strict";c("c75b")},c75b:function(t,e,c){}}]);
//# sourceMappingURL=chunk-0ab9c3d8.ac46f366.js.map