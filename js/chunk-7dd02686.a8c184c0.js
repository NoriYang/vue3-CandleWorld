(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7dd02686"],{1494:function(t,e,i){
/*!
  * Bootstrap backdrop.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i("6a95"),i("aa53"),i("1243"))})(0,(function(t,e,i){"use strict";const s=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},n=s(t),o=s(i),a="backdrop",l="fade",r="show",d="mousedown.bs."+a,c={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},h={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class u extends o.default{constructor(t){super(),this._config=this._getConfig(t),this._isAppended=!1,this._element=null}static get Default(){return c}static get DefaultType(){return h}static get NAME(){return a}show(t){if(!this._config.isVisible)return void e.execute(t);this._append();const i=this._getElement();this._config.isAnimated&&e.reflow(i),i.classList.add(r),this._emulateAnimation(()=>{e.execute(t)})}hide(t){this._config.isVisible?(this._getElement().classList.remove(r),this._emulateAnimation(()=>{this.dispose(),e.execute(t)})):e.execute(t)}dispose(){this._isAppended&&(n.default.off(this._element,d),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const t=document.createElement("div");t.className=this._config.className,this._config.isAnimated&&t.classList.add(l),this._element=t}return this._element}_configAfterMerge(t){return t.rootElement=e.getElement(t.rootElement),t}_append(){if(this._isAppended)return;const t=this._getElement();this._config.rootElement.append(t),n.default.on(t,d,()=>{e.execute(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(t){e.executeAfterTransition(t,this._getElement(),this._config.isAnimated)}}return u}))},5470:function(t,e,i){
/*!
  * Bootstrap focustrap.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i("6a95"),i("848f"),i("1243"))})(0,(function(t,e,i){"use strict";const s=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},n=s(t),o=s(e),a=s(i),l="focustrap",r="bs.focustrap",d="."+r,c="focusin"+d,h="keydown.tab"+d,u="Tab",m="forward",f="backward",_={autofocus:!0,trapElement:null},g={autofocus:"boolean",trapElement:"element"};class p extends a.default{constructor(t){super(),this._config=this._getConfig(t),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return _}static get DefaultType(){return g}static get NAME(){return l}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),n.default.off(document,d),n.default.on(document,c,t=>this._handleFocusin(t)),n.default.on(document,h,t=>this._handleKeydown(t)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,n.default.off(document,d))}_handleFocusin(t){const{trapElement:e}=this._config;if(t.target===document||t.target===e||e.contains(t.target))return;const i=o.default.focusableChildren(e);0===i.length?e.focus():this._lastTabNavDirection===f?i[i.length-1].focus():i[0].focus()}_handleKeydown(t){t.key===u&&(this._lastTabNavDirection=t.shiftKey?f:m)}}return p}))},"667c":function(t,e,i){"use strict";var s=i("7a23");const n={class:"modal fade",id:"delModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},o={class:"modal-dialog modal-dialog-centered",role:"document"},a={class:"modal-content border-0"},l={class:"modal-header bg-danger text-white"},r={class:"modal-title"},d={key:0},c={key:1},h=Object(s["h"])("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),u={class:"modal-footer"},m=Object(s["h"])("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function f(t,e,i,f,_,g){return Object(s["z"])(),Object(s["g"])("div",n,[Object(s["h"])("div",o,[Object(s["h"])("div",a,[Object(s["h"])("div",l,[Object(s["h"])("h5",r,["all"===i.delTitle?(Object(s["z"])(),Object(s["g"])("span",d," 確定要清空關注的商品嗎 ? ")):(Object(s["z"])(),Object(s["g"])("span",c," 確定取消關注 "+Object(s["L"])(i.delTitle)+" ? ",1))]),h]),Object(s["h"])("div",u,[m,"all"===i.delTitle?(Object(s["z"])(),Object(s["g"])("button",{key:0,type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=(...t)=>g.delAll&&g.delAll(...t))},"確認 ")):(Object(s["z"])(),Object(s["g"])("button",{key:1,type:"button",class:"btn btn-danger",onClick:e[1]||(e[1]=(...t)=>g.delFavItem&&g.delFavItem(...t))},"確定"))])])])],512)}var _=i("e0ae"),g={props:{delTitle:{type:String}},data(){return{modal:""}},methods:{delFavItem(){this.$emit("removeFavItemHandler")},delAll(){this.$emit("cleanAllFavItemsHandler")}},mixins:[_["a"]]},p=i("6b0d"),b=i.n(p);const v=b()(g,[["render",f]]);e["a"]=v},"796c":function(t,e,i){"use strict";i("14d9");e["a"]={data(){return{products:[],FavoriteItems:[],favoriteFilter:[],isLoading:!1,delTitle:"all",delProductId:""}},methods:{favoriteInit(){this.getLoaclFavorite(),this.getFavorite()},getLoaclFavorite(){const t=localStorage.getItem("FavoriteArr");this.FavoriteItems=JSON.parse(null!==t?t:"[]")},getFavorite(){const t=this.products.length,e=this.FavoriteItems.length;this.favoriteFilter=[];for(let i=0;i<e;i++)for(let e=0;e<t;e++)this.FavoriteItems[i]===this.products[e].id&&this.favoriteFilter.push(this.products[e])},setFavorite(t){const e=localStorage.getItem("FavoriteArr");let i=JSON.parse(null!==e?e:"[]");i.push(t),i=JSON.stringify(i),localStorage.setItem("FavoriteArr",i),this.favoriteInit()},removeFavorite(t){const e=localStorage.getItem("FavoriteArr");let i=JSON.parse(null!==e?e:"[]");const s=i.findIndex(e=>e===t);i.splice(s,1),i=JSON.stringify(i),localStorage.setItem("FavoriteArr",i),this.favoriteInit()},cleanFavoriteAll(){localStorage.removeItem("FavoriteArr"),this.favoriteInit()}}}},"7c2b":function(t,e,i){
/*!
  * Bootstrap modal.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i("aa53"),i("6a95"),i("848f"),i("ba05"),i("302d"),i("1494"),i("5470"),i("0f28"))})(0,(function(t,e,i,s,n,o,a,l){"use strict";const r=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},d=r(e),c=r(i),h=r(s),u=r(n),m=r(o),f=r(a),_="modal",g="bs.modal",p="."+g,b=".data-api",v="Escape",y="hide"+p,A="hidePrevented"+p,w="hidden"+p,k="show"+p,E="shown"+p,T="resize"+p,F="click.dismiss"+p,O="mousedown.dismiss"+p,x="keydown.dismiss"+p,j=`click${p}${b}`,I="modal-open",S="fade",L="show",D="modal-static",C=".modal.show",N=".modal-dialog",M=".modal-body",P='[data-bs-toggle="modal"]',z={backdrop:!0,focus:!0,keyboard:!0},B={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class V extends u.default{constructor(t,e){super(t,e),this._dialog=c.default.findOne(N,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new h.default,this._addEventListeners()}static get Default(){return z}static get DefaultType(){return B}static get NAME(){return _}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){if(this._isShown||this._isTransitioning)return;const e=d.default.trigger(this._element,k,{relatedTarget:t});e.defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(I),this._adjustDialog(),this._backdrop.show(()=>this._showElement(t)))}hide(){if(!this._isShown||this._isTransitioning)return;const t=d.default.trigger(this._element,y);t.defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(L),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){for(const t of[window,this._dialog])d.default.off(t,p);this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new m.default({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new f.default({trapElement:this._element})}_showElement(e){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const i=c.default.findOne(M,this._dialog);i&&(i.scrollTop=0),t.reflow(this._element),this._element.classList.add(L);const s=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,d.default.trigger(this._element,E,{relatedTarget:e})};this._queueCallback(s,this._dialog,this._isAnimated())}_addEventListeners(){d.default.on(this._element,x,t=>{if(t.key===v)return this._config.keyboard?(t.preventDefault(),void this.hide()):void this._triggerBackdropTransition()}),d.default.on(window,T,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),d.default.on(this._element,O,t=>{d.default.one(this._element,F,e=>{this._element===t.target&&this._element===e.target&&("static"!==this._config.backdrop?this._config.backdrop&&this.hide():this._triggerBackdropTransition())})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(I),this._resetAdjustments(),this._scrollBar.reset(),d.default.trigger(this._element,w)})}_isAnimated(){return this._element.classList.contains(S)}_triggerBackdropTransition(){const t=d.default.trigger(this._element,A);if(t.defaultPrevented)return;const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._element.style.overflowY;"hidden"===i||this._element.classList.contains(D)||(e||(this._element.style.overflowY="hidden"),this._element.classList.add(D),this._queueCallback(()=>{this._element.classList.remove(D),this._queueCallback(()=>{this._element.style.overflowY=i},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,i=this._scrollBar.getWidth(),s=i>0;if(s&&!e){const e=t.isRTL()?"paddingLeft":"paddingRight";this._element.style[e]=i+"px"}if(!s&&e){const e=t.isRTL()?"paddingRight":"paddingLeft";this._element.style[e]=i+"px"}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=V.getOrCreateInstance(this,t);if("string"===typeof t){if("undefined"===typeof i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}return d.default.on(document,j,P,(function(e){const i=t.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),d.default.one(i,k,e=>{e.defaultPrevented||d.default.one(i,w,()=>{t.isVisible(this)&&this.focus()})});const s=c.default.findOne(C);s&&V.getInstance(s).hide();const n=V.getOrCreateInstance(i);n.toggle(this)})),l.enableDismissTrigger(V),t.defineJQueryPlugin(V),V}))},"848f":function(t,e,i){
/*!
  * Bootstrap selector-engine.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i("aa53"))})(0,(function(t){"use strict";const e={find(t,e=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(e,t))},findOne(t,e=document.documentElement){return Element.prototype.querySelector.call(e,t)},children(t,e){return[].concat(...t.children).filter(t=>t.matches(e))},parents(t,e){const i=[];let s=t.parentNode.closest(e);while(s)i.push(s),s=s.parentNode.closest(e);return i},prev(t,e){let i=t.previousElementSibling;while(i){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;while(i){if(i.matches(e))return[i];i=i.nextElementSibling}return[]},focusableChildren(e){const i=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(t=>t+':not([tabindex^="-"])').join(",");return this.find(i,e).filter(e=>!t.isDisabled(e)&&t.isVisible(e))}};return e}))},ba05:function(t,e,i){
/*!
  * Bootstrap scrollbar.js v5.2.3 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function(e,s){t.exports=s(i("848f"),i("109e"),i("aa53"))})(0,(function(t,e,i){"use strict";const s=t=>t&&"object"===typeof t&&"default"in t?t:{default:t},n=s(t),o=s(e),a=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",l=".sticky-top",r="padding-right",d="margin-right";class c{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,r,e=>e+t),this._setElementAttributes(a,r,e=>e+t),this._setElementAttributes(l,d,e=>e-t)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,r),this._resetElementAttributes(a,r),this._resetElementAttributes(l,d)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const s=this.getWidth(),n=t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+s)return;this._saveInitialAttribute(t,e);const n=window.getComputedStyle(t).getPropertyValue(e);t.style.setProperty(e,i(Number.parseFloat(n))+"px")};this._applyManipulationCallback(t,n)}_saveInitialAttribute(t,e){const i=t.style.getPropertyValue(e);i&&o.default.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){const i=t=>{const i=o.default.getDataAttribute(t,e);null!==i?(o.default.removeDataAttribute(t,e),t.style.setProperty(e,i)):t.style.removeProperty(e)};this._applyManipulationCallback(t,i)}_applyManipulationCallback(t,e){if(i.isElement(t))e(t);else for(const i of n.default.find(t,this._element))e(i)}}return c}))},e0ae:function(t,e,i){"use strict";var s=i("7c2b"),n=i.n(s);e["a"]={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}},mounted(){this.modal=new n.a(this.$refs.modal)}}}}]);
//# sourceMappingURL=chunk-7dd02686.a8c184c0.js.map