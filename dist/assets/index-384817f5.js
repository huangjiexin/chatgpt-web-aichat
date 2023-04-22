var Vt=Object.defineProperty;var At=(t,v,g)=>v in t?Vt(t,v,{enumerable:!0,configurable:!0,writable:!0,value:g}):t[v]=g;var P=(t,v,g)=>(At(t,typeof v!="symbol"?v+"":v,g),g);import{r as k,am as Pt,c as oe,a as y,an as A,ao as R,f as tt,ap as Ut,aq as Dt,d as ee,u as it,g as De,ar as Nt,b as rt,h as V,t as dt,e as ct,as as Ye,at as Et,i as Je,j as Ft,k as qe,l as T,V as Ht,m as Ot,au as jt,o as Kt,T as Lt,av as Pe,aw as Ue,$ as We,z as Ce,ax as st,ay as at,az as Wt,aA as ce,aB as Ge,aC as te,aD as Xe,aE as ue,aF as Gt,aG as Xt,a4 as Yt,A as ut,O as Jt,a3 as ie,B as z,C as U,J as e,Q as c,D as a,U as u,N as M,S as qt,X as w,_ as q,W as E,ah as F,aH as Qt,I as Zt,ag as es,aI as vt,P as se,aJ as ts,a8 as Qe,a1 as Re,F as Q,ai as Te,aK as ss,aL as ht,aM as as,R as N,aN as Ne,aO as ns,w as ls,aP as os,aQ as is,aR as rs,aS as ds,aT as cs,aU as us,aV as vs,aW as ve,ad as hs,aX as fs}from"./index-236601ca.js";function nt(t){return window.TouchEvent&&t instanceof window.TouchEvent}function lt(){const t=k(new Map),v=g=>x=>{t.value.set(g,x)};return Pt(()=>t.value.clear()),[t,v]}const ps=oe([y("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[A("reverse",[y("slider-handles",[y("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),y("slider-dots",[y("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),A("vertical",[y("slider-handles",[y("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),y("slider-marks",[y("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),y("slider-dots",[y("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),A("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[y("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[y("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),y("slider-rail",`
 height: 100%;
 `,[R("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),A("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),y("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[y("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),y("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[y("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),A("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[y("slider-handle",`
 cursor: not-allowed;
 `)]),A("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),oe("&:hover",[y("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[R("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),y("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),A("active",[y("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[R("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),y("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),y("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[y("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),y("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[R("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),y("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[y("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[y("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[oe("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),oe("&:focus",[y("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[oe("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),y("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[A("transition-disabled",[y("slider-dot","transition: none;")]),y("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[A("active","border: var(--n-dot-border-active);")])])]),y("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[tt()]),y("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[A("top",`
 margin-bottom: 12px;
 `),A("right",`
 margin-left: 12px;
 `),A("bottom",`
 margin-top: 12px;
 `),A("left",`
 margin-right: 12px;
 `),tt()]),Ut(y("slider",[y("slider-dot","background-color: var(--n-dot-color-modal);")])),Dt(y("slider",[y("slider-dot","background-color: var(--n-dot-color-popover);")]))]),ms=0,gs=Object.assign(Object.assign({},De.props),{to:qe.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),ot=ee({name:"Slider",props:gs,setup(t){const{mergedClsPrefixRef:v,namespaceRef:g,inlineThemeDisabled:x}=it(t),i=De("Slider","-slider",ps,Nt,t,v),s=k(null),[$,l]=lt(),[m,o]=lt(),r=k(new Set),p=rt(t),{mergedDisabledRef:h}=p,C=V(()=>{const{step:n}=t;if(n<=0||n==="mark")return 0;const d=n.toString();let f=0;return d.includes(".")&&(f=d.length-d.indexOf(".")-1),f}),W=k(t.defaultValue),_e=dt(t,"value"),re=ct(_e,W),H=V(()=>{const{value:n}=re;return(t.range?n:[n]).map(ae)}),he=V(()=>H.value.length>2),we=V(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),fe=V(()=>{const{marks:n}=t;return n?Object.keys(n).map(parseFloat):null}),O=k(-1),de=k(-1),_=k(-1),b=k(!1),I=k(!1),j=V(()=>{const{vertical:n,reverse:d}=t;return n?d?"top":"bottom":d?"right":"left"}),X=V(()=>{if(he.value)return;const n=H.value,d=pe(t.range?Math.min(...n):t.min),f=pe(t.range?Math.max(...n):n[0]),{value:S}=j;return t.vertical?{[S]:`${d}%`,height:`${f-d}%`}:{[S]:`${d}%`,width:`${f-d}%`}}),Y=V(()=>{const n=[],{marks:d}=t;if(d){const f=H.value.slice();f.sort((K,L)=>K-L);const{value:S}=j,{value:B}=he,{range:D}=t,Z=B?()=>!1:K=>D?K>=f[0]&&K<=f[f.length-1]:K<=f[0];for(const K of Object.keys(d)){const L=Number(K);n.push({active:Z(L),label:d[K],style:{[S]:`${pe(L)}%`}})}}return n});function $e(n,d){const f=pe(n),{value:S}=j;return{[S]:`${f}%`,zIndex:d===O.value?1:0}}function ze(n){return t.showTooltip||_.value===n||O.value===n&&b.value}function Ee(n){return b.value?!(O.value===n&&de.value===n):!0}function Fe(n){var d;~n&&(O.value=n,(d=$.value.get(n))===null||d===void 0||d.focus())}function He(){m.value.forEach((n,d)=>{ze(d)&&n.syncPosition()})}function J(n){const{"onUpdate:value":d,onUpdateValue:f}=t,{nTriggerFormInput:S,nTriggerFormChange:B}=p;f&&Ce(f,n),d&&Ce(d,n),W.value=n,S(),B()}function Ie(n){const{range:d}=t;if(d){if(Array.isArray(n)){const{value:f}=H;n.join()!==f.join()&&J(n)}}else Array.isArray(n)||H.value[0]!==n&&J(n)}function ye(n,d){if(t.range){const f=H.value.slice();f.splice(d,1,n),Ie(f)}else Ie(n)}function G(n,d,f){const S=f!==void 0;f||(f=n-d>0?1:-1);const B=fe.value||[],{step:D}=t;if(D==="mark"){const L=ne(n,B.concat(d),S?f:void 0);return L?L.value:d}if(D<=0)return d;const{value:Z}=C;let K;if(S){const L=Number((d/D).toFixed(Z)),le=Math.floor(L),Ke=L>le?le:le-1,Le=L<le?le:le+1;K=ne(d,[Number((Ke*D).toFixed(Z)),Number((Le*D).toFixed(Z)),...B],f)}else{const L=je(n);K=ne(n,[...B,L])}return K?ae(K.value):d}function ae(n){return Math.min(t.max,Math.max(t.min,n))}function pe(n){const{max:d,min:f}=t;return(n-f)/(d-f)*100}function Oe(n){const{max:d,min:f}=t;return f+(d-f)*n}function je(n){const{step:d,min:f}=t;if(d<=0||d==="mark")return n;const S=Math.round((n-f)/d)*d+f;return Number(S.toFixed(C.value))}function ne(n,d=fe.value,f){if(!(d!=null&&d.length))return null;let S=null,B=-1;for(;++B<d.length;){const D=d[B]-n,Z=Math.abs(D);(f===void 0||D*f>0)&&(S===null||Z<S.distance)&&(S={index:B,distance:Z,value:d[B]})}return S}function me(n){const d=s.value;if(!d)return;const f=nt(n)?n.touches[0]:n,S=d.getBoundingClientRect();let B;return t.vertical?B=(S.bottom-f.clientY)/S.height:B=(f.clientX-S.left)/S.width,t.reverse&&(B=1-B),Oe(B)}function ke(n){if(h.value||!t.keyboard)return;const{vertical:d,reverse:f}=t;switch(n.key){case"ArrowUp":n.preventDefault(),Be(d&&f?-1:1);break;case"ArrowRight":n.preventDefault(),Be(!d&&f?-1:1);break;case"ArrowDown":n.preventDefault(),Be(d&&f?1:-1);break;case"ArrowLeft":n.preventDefault(),Be(!d&&f?1:-1);break}}function Be(n){const d=O.value;if(d===-1)return;const{step:f}=t,S=H.value[d],B=f<=0||f==="mark"?S:S+f*n;ye(G(B,S,n>0?1:-1),d)}function ft(n){var d,f;if(h.value||!nt(n)&&n.button!==ms)return;const S=me(n);if(S===void 0)return;const B=H.value.slice(),D=t.range?(f=(d=ne(S,B))===null||d===void 0?void 0:d.index)!==null&&f!==void 0?f:-1:0;D!==-1&&(n.preventDefault(),Fe(D),pt(),ye(G(S,H.value[D]),D))}function pt(){b.value||(b.value=!0,Pe("touchend",document,Ae),Pe("mouseup",document,Ae),Pe("touchmove",document,Ve),Pe("mousemove",document,Ve))}function Me(){b.value&&(b.value=!1,Ue("touchend",document,Ae),Ue("mouseup",document,Ae),Ue("touchmove",document,Ve),Ue("mousemove",document,Ve))}function Ve(n){const{value:d}=O;if(!b.value||d===-1){Me();return}const f=me(n);ye(G(f,H.value[d]),d)}function Ae(){Me()}function mt(n){O.value=n,h.value||(_.value=n)}function gt(n){O.value===n&&(O.value=-1,Me()),_.value===n&&(_.value=-1)}function bt(n){_.value=n}function xt(n){_.value===n&&(_.value=-1)}Ye(O,(n,d)=>void We(()=>de.value=d)),Ye(re,()=>{if(t.marks){if(I.value)return;I.value=!0,We(()=>{I.value=!1})}We(He)}),Et(()=>{Me()});const Ze=V(()=>{const{self:{markFontSize:n,railColor:d,railColorHover:f,fillColor:S,fillColorHover:B,handleColor:D,opacityDisabled:Z,dotColor:K,dotColorModal:L,handleBoxShadow:le,handleBoxShadowHover:Ke,handleBoxShadowActive:Le,handleBoxShadowFocus:_t,dotBorder:wt,dotBoxShadow:$t,railHeight:yt,railWidthVertical:kt,handleSize:St,dotHeight:Ct,dotWidth:Rt,dotBorderRadius:Tt,fontSize:zt,dotBorderActive:It,dotColorPopover:Bt},common:{cubicBezierEaseInOut:Mt}}=i.value;return{"--n-bezier":Mt,"--n-dot-border":wt,"--n-dot-border-active":It,"--n-dot-border-radius":Tt,"--n-dot-box-shadow":$t,"--n-dot-color":K,"--n-dot-color-modal":L,"--n-dot-color-popover":Bt,"--n-dot-height":Ct,"--n-dot-width":Rt,"--n-fill-color":S,"--n-fill-color-hover":B,"--n-font-size":zt,"--n-handle-box-shadow":le,"--n-handle-box-shadow-active":Le,"--n-handle-box-shadow-focus":_t,"--n-handle-box-shadow-hover":Ke,"--n-handle-color":D,"--n-handle-size":St,"--n-opacity-disabled":Z,"--n-rail-color":d,"--n-rail-color-hover":f,"--n-rail-height":yt,"--n-rail-width-vertical":kt,"--n-mark-font-size":n}}),ge=x?Je("slider",void 0,Ze,t):void 0,et=V(()=>{const{self:{fontSize:n,indicatorColor:d,indicatorBoxShadow:f,indicatorTextColor:S,indicatorBorderRadius:B}}=i.value;return{"--n-font-size":n,"--n-indicator-border-radius":B,"--n-indicator-box-shadow":f,"--n-indicator-color":d,"--n-indicator-text-color":S}}),be=x?Je("slider-indicator",void 0,et,t):void 0;return{mergedClsPrefix:v,namespace:g,uncontrolledValue:W,mergedValue:re,mergedDisabled:h,mergedPlacement:we,isMounted:Ft(),adjustedTo:qe(t),dotTransitionDisabled:I,markInfos:Y,isShowTooltip:ze,shouldKeepTooltipTransition:Ee,handleRailRef:s,setHandleRefs:l,setFollowerRefs:o,fillStyle:X,getHandleStyle:$e,activeIndex:O,arrifiedValues:H,followerEnabledIndexSet:r,handleRailMouseDown:ft,handleHandleFocus:mt,handleHandleBlur:gt,handleHandleMouseEnter:bt,handleHandleMouseLeave:xt,handleRailKeyDown:ke,indicatorCssVars:x?void 0:et,indicatorThemeClass:be==null?void 0:be.themeClass,indicatorOnRender:be==null?void 0:be.onRender,cssVars:x?void 0:Ze,themeClass:ge==null?void 0:ge.themeClass,onRender:ge==null?void 0:ge.onRender}},render(){var t;const{mergedClsPrefix:v,themeClass:g,formatTooltip:x}=this;return(t=this.onRender)===null||t===void 0||t.call(this),T("div",{class:[`${v}-slider`,g,{[`${v}-slider--disabled`]:this.mergedDisabled,[`${v}-slider--active`]:this.activeIndex!==-1,[`${v}-slider--with-mark`]:this.marks,[`${v}-slider--vertical`]:this.vertical,[`${v}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},T("div",{class:`${v}-slider-rail`},T("div",{class:`${v}-slider-rail__fill`,style:this.fillStyle}),this.marks?T("div",{class:[`${v}-slider-dots`,this.dotTransitionDisabled&&`${v}-slider-dots--transition-disabled`]},this.markInfos.map(i=>T("div",{key:i.label,class:[`${v}-slider-dot`,{[`${v}-slider-dot--active`]:i.active}],style:i.style}))):null,T("div",{ref:"handleRailRef",class:`${v}-slider-handles`},this.arrifiedValues.map((i,s)=>{const $=this.isShowTooltip(s);return T(Ht,null,{default:()=>[T(Ot,null,{default:()=>T("div",{ref:this.setHandleRefs(s),class:`${v}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(i,s),onFocus:()=>this.handleHandleFocus(s),onBlur:()=>this.handleHandleBlur(s),onMouseenter:()=>this.handleHandleMouseEnter(s),onMouseleave:()=>this.handleHandleMouseLeave(s)},jt(this.$slots.thumb,()=>[T("div",{class:`${v}-slider-handle`})]))}),this.tooltip&&T(Kt,{ref:this.setFollowerRefs(s),show:$,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(s),teleportDisabled:this.adjustedTo===qe.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>T(Lt,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(s),onEnter:()=>{this.followerEnabledIndexSet.add(s)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(s)}},{default:()=>{var l;return $?((l=this.indicatorOnRender)===null||l===void 0||l.call(this),T("div",{class:[`${v}-slider-handle-indicator`,this.indicatorThemeClass,`${v}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof x=="function"?x(i):i)):null}})})]})})),this.marks?T("div",{class:`${v}-slider-marks`},this.markInfos.map(i=>T("div",{key:i.label,class:`${v}-slider-mark`,style:i.style},i.label))):null))}}),bs=y("switch",`
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`,[R("children-placeholder",`
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `),R("rail-placeholder",`
 display: flex;
 flex-wrap: none;
 `),R("button-placeholder",`
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `),y("base-loading",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `,[st({left:"50%",top:"50%",originalTransform:"translateX(-50%) translateY(-50%)"})]),R("checked, unchecked",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `),R("checked",`
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),R("unchecked",`
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `),oe("&:focus",[R("rail",`
 box-shadow: var(--n-box-shadow-focus);
 `)]),A("round",[R("rail","border-radius: calc(var(--n-rail-height) / 2);",[R("button","border-radius: calc(var(--n-button-height) / 2);")])]),at("disabled",[at("icon",[A("rubber-band",[A("pressed",[R("rail",[R("button","max-width: var(--n-button-width-pressed);")])]),R("rail",[oe("&:active",[R("button","max-width: var(--n-button-width-pressed);")])]),A("active",[A("pressed",[R("rail",[R("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]),R("rail",[oe("&:active",[R("button","left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]),A("active",[R("rail",[R("button","left: calc(100% - var(--n-button-width) - var(--n-offset))")])]),R("rail",`
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `,[R("button-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `,[st()]),R("button",`
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]),A("active",[R("rail","background-color: var(--n-rail-color-active);")]),A("loading",[R("rail",`
 cursor: wait;
 `)]),A("disabled",[R("rail",`
 cursor: not-allowed;
 opacity: .5;
 `)])]),xs=Object.assign(Object.assign({},De.props),{size:{type:String,default:"medium"},value:{type:[String,Number,Boolean],default:void 0},loading:Boolean,defaultValue:{type:[String,Number,Boolean],default:!1},disabled:{type:Boolean,default:void 0},round:{type:Boolean,default:!0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},railStyle:Function,rubberBand:{type:Boolean,default:!0},onChange:[Function,Array]});let Se;const xe=ee({name:"Switch",props:xs,setup(t){Se===void 0&&(typeof CSS<"u"?typeof CSS.supports<"u"?Se=CSS.supports("width","max(1px)"):Se=!1:Se=!0);const{mergedClsPrefixRef:v,inlineThemeDisabled:g}=it(t),x=De("Switch","-switch",bs,Wt,t,v),i=rt(t),{mergedSizeRef:s,mergedDisabledRef:$}=i,l=k(t.defaultValue),m=dt(t,"value"),o=ct(m,l),r=V(()=>o.value===t.checkedValue),p=k(!1),h=k(!1),C=V(()=>{const{railStyle:b}=t;if(b)return b({focused:h.value,checked:r.value})});function W(b){const{"onUpdate:value":I,onChange:j,onUpdateValue:X}=t,{nTriggerFormInput:Y,nTriggerFormChange:$e}=i;I&&Ce(I,b),X&&Ce(X,b),j&&Ce(j,b),l.value=b,Y(),$e()}function _e(){const{nTriggerFormFocus:b}=i;b()}function re(){const{nTriggerFormBlur:b}=i;b()}function H(){t.loading||$.value||(o.value!==t.checkedValue?W(t.checkedValue):W(t.uncheckedValue))}function he(){h.value=!0,_e()}function we(){h.value=!1,re(),p.value=!1}function fe(b){t.loading||$.value||b.key===" "&&(o.value!==t.checkedValue?W(t.checkedValue):W(t.uncheckedValue),p.value=!1)}function O(b){t.loading||$.value||b.key===" "&&(b.preventDefault(),p.value=!0)}const de=V(()=>{const{value:b}=s,{self:{opacityDisabled:I,railColor:j,railColorActive:X,buttonBoxShadow:Y,buttonColor:$e,boxShadowFocus:ze,loadingColor:Ee,textColor:Fe,iconColor:He,[ce("buttonHeight",b)]:J,[ce("buttonWidth",b)]:Ie,[ce("buttonWidthPressed",b)]:ye,[ce("railHeight",b)]:G,[ce("railWidth",b)]:ae,[ce("railBorderRadius",b)]:pe,[ce("buttonBorderRadius",b)]:Oe},common:{cubicBezierEaseInOut:je}}=x.value;let ne,me,ke;return Se?(ne=`calc((${G} - ${J}) / 2)`,me=`max(${G}, ${J})`,ke=`max(${ae}, calc(${ae} + ${J} - ${G}))`):(ne=Ge((te(G)-te(J))/2),me=Ge(Math.max(te(G),te(J))),ke=te(G)>te(J)?ae:Ge(te(ae)+te(J)-te(G))),{"--n-bezier":je,"--n-button-border-radius":Oe,"--n-button-box-shadow":Y,"--n-button-color":$e,"--n-button-width":Ie,"--n-button-width-pressed":ye,"--n-button-height":J,"--n-height":me,"--n-offset":ne,"--n-opacity-disabled":I,"--n-rail-border-radius":pe,"--n-rail-color":j,"--n-rail-color-active":X,"--n-rail-height":G,"--n-rail-width":ae,"--n-width":ke,"--n-box-shadow-focus":ze,"--n-loading-color":Ee,"--n-text-color":Fe,"--n-icon-color":He}}),_=g?Je("switch",V(()=>s.value[0]),de,t):void 0;return{handleClick:H,handleBlur:we,handleFocus:he,handleKeyup:fe,handleKeydown:O,mergedRailStyle:C,pressed:p,mergedClsPrefix:v,mergedValue:o,checked:r,mergedDisabled:$,cssVars:g?void 0:de,themeClass:_==null?void 0:_.themeClass,onRender:_==null?void 0:_.onRender}},render(){const{mergedClsPrefix:t,mergedDisabled:v,checked:g,mergedRailStyle:x,onRender:i,$slots:s}=this;i==null||i();const{checked:$,unchecked:l,icon:m,"checked-icon":o,"unchecked-icon":r}=s,p=!(Xe(m)&&Xe(o)&&Xe(r));return T("div",{role:"switch","aria-checked":g,class:[`${t}-switch`,this.themeClass,p&&`${t}-switch--icon`,g&&`${t}-switch--active`,v&&`${t}-switch--disabled`,this.round&&`${t}-switch--round`,this.loading&&`${t}-switch--loading`,this.pressed&&`${t}-switch--pressed`,this.rubberBand&&`${t}-switch--rubber-band`],tabindex:this.mergedDisabled?void 0:0,style:this.cssVars,onClick:this.handleClick,onFocus:this.handleFocus,onBlur:this.handleBlur,onKeyup:this.handleKeyup,onKeydown:this.handleKeydown},T("div",{class:`${t}-switch__rail`,"aria-hidden":"true",style:x},ue($,h=>ue(l,C=>h||C?T("div",{"aria-hidden":!0,class:`${t}-switch__children-placeholder`},T("div",{class:`${t}-switch__rail-placeholder`},T("div",{class:`${t}-switch__button-placeholder`}),h),T("div",{class:`${t}-switch__rail-placeholder`},T("div",{class:`${t}-switch__button-placeholder`}),C)):null)),T("div",{class:`${t}-switch__button`},ue(m,h=>ue(o,C=>ue(r,W=>T(Gt,null,{default:()=>this.loading?T(Xt,{key:"loading",clsPrefix:t,strokeWidth:20}):this.checked&&(C||h)?T("div",{class:`${t}-switch__button-icon`,key:C?"checked-icon":"icon"},C||h):!this.checked&&(W||h)?T("div",{class:`${t}-switch__button-icon`,key:W?"unchecked-icon":"icon"},W||h):null})))),ue($,h=>h&&T("div",{key:"checked",class:`${t}-switch__checked`},h)),ue(l,h=>h&&T("div",{key:"unchecked",class:`${t}-switch__unchecked`},h)))))}});function _s(){const t=new Date,v=t.getDate(),g=t.getMonth()+1;return`${t.getFullYear()}-${g}-${v}`}const ws={class:"p-4 space-y-5 min-h-[200px]"},$s={class:"space-y-6"},ys={class:"flex items-center space-x-4"},ks={class:"flex-shrink-0 w-[100px]"},Ss={class:"w-[200px]"},Cs={key:0,class:"flex items-center space-x-4"},Rs={class:"flex-shrink-0 w-[100px]"},Ts={class:"w-[200px]"},zs={key:1,class:"flex items-center space-x-4"},Is={class:"flex-shrink-0 w-[100px]"},Bs={class:"w-[200px]"},Ms={key:2,class:"flex items-center space-x-4"},Vs={class:"flex-shrink-0 w-[100px]"},As={class:"w-[200px]"},Ps={key:3,class:"flex items-center space-x-4"},Us={class:"flex-shrink-0 w-[100px]"},Ds={class:"w-[200px]"},Ns={class:"flex items-center space-x-4"},Es={class:"flex-shrink-0 w-[100px]"},Fs={class:"w-[200px]"},Hs={class:"flex items-center space-x-4"},Os={class:"flex-shrink-0 w-[100px]"},js={class:"flex-1"},Ks={class:"flex-shrink-0 w-[100px]"},Ls={class:"flex flex-wrap items-center gap-4"},Ws={class:"flex items-center space-x-4"},Gs={class:"flex-shrink-0 w-[100px]"},Xs={class:"flex flex-wrap items-center gap-4"},Ys={class:"flex items-center space-x-4"},Js={class:"flex-shrink-0 w-[100px]"},qs={class:"flex flex-wrap items-center gap-4"},Qs={class:"flex items-center space-x-4"},Zs={class:"flex-shrink-0 w-[100px]"},ea=ee({__name:"General",setup(t){const v=Yt(),g=ut(),{isMobile:x}=Jt(),i=ie(),s=V(()=>v.theme),$=V(()=>g.userInfo),l=k($.value.avatar??""),m=k($.value.name??""),o=$.value.level,r=V(()=>$.value.times.cardTotalTimes),p=V(()=>$.value.times.freeTotalTimes),h=V(()=>$.value.times.cardRemainingTimes),C=V(()=>$.value.times.freeRemainingTimes),W=k($.value.description??""),_e=V({get(){return v.language},set(_){v.setLanguage(_)}}),re=[{label:"Auto",key:"auto",icon:"ri:contrast-line"},{label:"Light",key:"light",icon:"ri:sun-foggy-line"},{label:"Dark",key:"dark",icon:"ri:moon-foggy-line"}],H=[{label:"简体中文",key:"zh-CN",value:"zh-CN"},{label:"繁體中文",key:"zh-TW",value:"zh-TW"},{label:"English",key:"en-US",value:"en-US"},{label:"한국어",key:"ko-KR",value:"ko-KR"}];async function he(_){await g.updateUserInfo(!0,_),i.success(se("common.success"))}function we(){const _=_s(),b=localStorage.getItem("chatStorage")||"{}",I=JSON.stringify(JSON.parse(b),null,2),j=new Blob([I],{type:"application/json"}),X=URL.createObjectURL(j),Y=document.createElement("a");Y.href=X,Y.download=`chat-store_${_}.json`,document.body.appendChild(Y),Y.click(),document.body.removeChild(Y)}function fe(_){const b=_.target;if(!b||!b.files)return;const I=b.files[0];if(!I)return;const j=new FileReader;j.onload=()=>{try{const X=JSON.parse(j.result);localStorage.setItem("chatStorage",JSON.stringify(X)),i.success(se("common.success")),location.reload()}catch{i.error(se("common.invalidFileFormat"))}},j.readAsText(I)}async function O(){await ts(),localStorage.removeItem("chatStorage"),location.reload()}function de(){const _=document.getElementById("fileInput");_&&_.click()}return(_,b)=>(z(),U("div",ws,[e("div",$s,[e("div",ys,[e("span",ks,c(_.$t("setting.level")),1),e("div",Ss,[e("p",null,c(_.$t(`setting.${a(o)}`)),1)])]),a(r)?(z(),U("div",Cs,[e("span",Rs,c(_.$t("setting.cardTotalTimes")),1),e("div",Ts,[e("p",null,c(a(r)),1)])])):(z(),U("div",zs,[e("span",Is,c(_.$t("setting.freeTotalTimes")),1),e("div",Bs,[e("p",null,c(a(p)),1)])])),a(h)?(z(),U("div",Ms,[e("span",Vs,c(_.$t("setting.cardRemainingTimes")),1),e("div",As,[e("p",null,c(a(h)),1)])])):(z(),U("div",Ps,[e("span",Us,c(_.$t("setting.freeRemainingTimes")),1),e("div",Ds,[e("p",null,c(a(C)),1)])])),e("div",Ns,[e("span",Es,c(_.$t("setting.name")),1),e("div",Fs,[u(a(M),{value:m.value,"onUpdate:value":b[0]||(b[0]=I=>m.value=I),placeholder:""},null,8,["value"])])]),e("div",Hs,[e("span",Os,c(_.$t("setting.avatarLink")),1),e("div",js,[u(a(M),{value:l.value,"onUpdate:value":b[1]||(b[1]=I=>l.value=I),placeholder:""},null,8,["value"])])]),e("div",{class:qt(["flex items-center space-x-4",a(x)&&"items-start"])},[e("span",Ks,c(_.$t("setting.chatHistory")),1),e("div",Ls,[u(a(F),{size:"small",onClick:we},{icon:w(()=>[u(a(q),{icon:"ri:download-2-fill"})]),default:w(()=>[E(" "+c(_.$t("common.export")),1)]),_:1}),e("input",{id:"fileInput",type:"file",style:{display:"none"},onChange:fe},null,32),u(a(F),{size:"small",onClick:de},{icon:w(()=>[u(a(q),{icon:"ri:upload-2-fill"})]),default:w(()=>[E(" "+c(_.$t("common.import")),1)]),_:1}),u(a(Qt),{placement:"bottom",onPositiveClick:O},{trigger:w(()=>[u(a(F),{size:"small"},{icon:w(()=>[u(a(q),{icon:"ri:close-circle-line"})]),default:w(()=>[E(" "+c(_.$t("common.clear")),1)]),_:1})]),default:w(()=>[E(" "+c(_.$t("chat.clearHistoryConfirm")),1)]),_:1})])],2),e("div",Ws,[e("span",Gs,c(_.$t("setting.theme")),1),e("div",Xs,[(z(),U(Zt,null,es(re,I=>u(a(F),{key:I.key,size:"small",type:I.key===a(s)?"primary":void 0,onClick:j=>a(v).setTheme(I.key)},{icon:w(()=>[u(a(q),{icon:I.icon},null,8,["icon"])]),_:2},1032,["type","onClick"])),64))])]),e("div",Ys,[e("span",Js,c(_.$t("setting.language")),1),e("div",qs,[u(a(vt),{style:{width:"140px"},value:a(_e),options:H,onUpdateValue:b[2]||(b[2]=I=>a(v).setLanguage(I))},null,8,["value"])])]),e("div",Qs,[e("span",Zs,c(_.$t("setting.saveUserInfo")),1),u(a(F),{type:"primary",onClick:b[3]||(b[3]=I=>he({avatar:l.value,name:m.value,description:W.value}))},{default:w(()=>[E(c(_.$t("common.save")),1)]),_:1})])])]))}}),ta={class:"p-4 space-y-4"},sa={class:"items-center clear"},aa={class:"flex items-center space-x-4"},na={class:"flex-1"},la=ee({__name:"Package",setup(t){const v=ie(),g=k(""),x=Qe(),i=k(!1),s=V(()=>i.value||!g.value||g.value.trim()===""),$=k(null),l=async()=>{var o;try{await ss(g.value).then(r=>{r.status==="Success"&&(v.success(r.message),m())})}catch(r){v.error(r.message),(o=$.value)==null||o.focus()}};async function m(){try{const o=await ht();await x.setTimes(o.data)}catch(o){v.error(o.message??"error")}finally{i.value=!1}}return Re(()=>{}),(o,r)=>(z(),Q(a(Te),{show:i.value},{default:w(()=>[e("div",ta,[e("div",sa,[e("span",null,"✨ "+c(o.$t("setting.contact")),1)]),e("div",aa,[e("div",na,[u(a(M),{ref_key:"cardNoRef",ref:$,value:g.value,"onUpdate:value":r[0]||(r[0]=p=>g.value=p),placeholder:o.$t("setting.code")},null,8,["value","placeholder"])]),u(a(F),{type:"success",disabled:a(s),onClick:l},{default:w(()=>[E(c(o.$t("setting.verify")),1)]),_:1},8,["disabled"])])])]),_:1},8,["show"]))}}),oa={class:"p-4 space-y-5 min-h-[200px]"},ia={class:"space-y-6"},ra={class:"flex items-center space-x-4"},da={class:"flex-shrink-0 w-[120px]"},ca={class:"flex-1"},ua={class:"flex items-center space-x-4"},va={class:"flex-shrink-0 w-[120px]"},ha={class:"flex-1"},fa={class:"flex items-center space-x-4"},pa={class:"flex-shrink-0 w-[120px]"},ma={class:"flex-1"},ga={class:"flex items-center space-x-4"},ba=e("span",{class:"flex-shrink-0 w-[120px]"}," ",-1),xa=ee({__name:"Advanced",setup(t){const v=as(),g=ie(),x=k(v.systemMessage??""),i=k(v.temperature??.5),s=k(v.top_p??1);function $(m){v.updateSetting(m),g.success(se("common.success"))}function l(){v.resetSetting(),g.success(se("common.success")),window.location.reload()}return(m,o)=>(z(),U("div",oa,[e("div",ia,[e("div",ra,[e("span",da,c(m.$t("setting.role")),1),e("div",ca,[u(a(M),{value:x.value,"onUpdate:value":o[0]||(o[0]=r=>x.value=r),type:"textarea",autosize:{minRows:1,maxRows:4}},null,8,["value"])]),u(a(F),{size:"tiny",text:"",type:"primary",onClick:o[1]||(o[1]=r=>$({systemMessage:x.value}))},{default:w(()=>[E(c(m.$t("common.save")),1)]),_:1})]),e("div",ua,[e("span",va,c(m.$t("setting.temperature")),1),e("div",ha,[u(a(ot),{value:i.value,"onUpdate:value":o[2]||(o[2]=r=>i.value=r),max:1,min:0,step:.1},null,8,["value","step"])]),e("span",null,c(i.value),1),u(a(F),{size:"tiny",text:"",type:"primary",onClick:o[3]||(o[3]=r=>$({temperature:i.value}))},{default:w(()=>[E(c(m.$t("common.save")),1)]),_:1})]),e("div",fa,[e("span",pa,c(m.$t("setting.top_p")),1),e("div",ma,[u(a(ot),{value:s.value,"onUpdate:value":o[4]||(o[4]=r=>s.value=r),max:1,min:0,step:.1},null,8,["value","step"])]),e("span",null,c(s.value),1),u(a(F),{size:"tiny",text:"",type:"primary",onClick:o[5]||(o[5]=r=>$({top_p:s.value}))},{default:w(()=>[E(c(m.$t("common.save")),1)]),_:1})]),e("div",ga,[ba,u(a(F),{size:"small",onClick:l},{default:w(()=>[E(c(m.$t("common.reset")),1)]),_:1})])])]))}});class _a{constructor(){P(this,"timeoutMs");P(this,"apiKey");P(this,"accessToken");P(this,"apiBaseUrl");P(this,"apiModel");P(this,"reverseProxy");P(this,"socksProxy");P(this,"socksAuth");P(this,"httpsProxy");P(this,"balance");P(this,"siteConfig");P(this,"mailConfig");P(this,"auditConfig")}}class wa{constructor(){P(this,"siteTitle");P(this,"loginEnabled");P(this,"loginSalt");P(this,"registerEnabled");P(this,"registerReview");P(this,"registerMails");P(this,"siteDomain")}}const $a={class:"p-4 space-y-5 min-h-[200px]"},ya={class:"space-y-6"},ka={class:"flex items-center space-x-4"},Sa={class:"flex-shrink-0 w-[100px]"},Ca={class:"flex-1"},Ra={key:0},Ta={key:0,class:"flex items-center space-x-4"},za={class:"flex-shrink-0 w-[100px]"},Ia={class:"flex-1"},Ba={key:1,class:"flex items-center space-x-4"},Ma={class:"flex-shrink-0 w-[100px]"},Va={class:"flex-1"},Aa={class:"flex items-center space-x-4"},Pa={class:"flex-shrink-0 w-[100px]"},Ua={class:"flex-1"},Da={key:2,class:"flex items-center space-x-4"},Na={class:"flex-shrink-0 w-[100px]"},Ea={class:"flex-1"},Fa={class:"flex items-center space-x-4"},Ha={class:"flex-shrink-0 w-[100px]"},Oa={class:"flex-1"},ja={class:"flex items-center space-x-4"},Ka={class:"flex-shrink-0 w-[100px]"},La={class:"flex-1"},Wa={class:"flex items-center space-x-4"},Ga={class:"flex-shrink-0 w-[100px]"},Xa={class:"flex-1"},Ya={class:"flex items-center space-x-4"},Ja={class:"flex-shrink-0 w-[100px]"},qa={class:"flex-1"},Qa={class:"flex items-center space-x-4"},Za=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),en=ee({__name:"About",setup(t){const v=ie(),g=Qe(),x=k(!1),i=k(!1),s=k();s.value=new _a;const $=V(()=>!!g.isChatGPTAPI);async function l(){try{x.value=!0;const{data:o}=await Ne();s.value=o}finally{x.value=!1}}async function m(o){if(o){i.value=!0;try{const{data:r}=await ns(o);s.value=r,v.success(se("common.success"))}catch(r){v.error(r.message)}i.value=!1}}return Re(()=>{l()}),(o,r)=>(z(),Q(a(Te),{show:x.value},{default:w(()=>{var p;return[e("div",$a,[e("div",ya,[e("div",ka,[e("span",Sa,c(o.$t("setting.api")),1),e("div",Ca,[u(a(M),{value:s.value&&s.value.apiKey,placeholder:"",onInput:r[0]||(r[0]=h=>{s.value&&(s.value.apiKey=h)})},null,8,["value"])]),a($)?(z(),U("p",Ra,c(o.$t("setting.balance"))+"："+c(((p=s.value)==null?void 0:p.balance)??"-"),1)):N("",!0)]),a($)?(z(),U("div",Ta,[e("span",za,c(o.$t("setting.apiBaseUrl")),1),e("div",Ia,[u(a(M),{value:s.value&&s.value.apiBaseUrl,placeholder:"https://api.openai.com",onInput:r[1]||(r[1]=h=>{s.value&&(s.value.apiBaseUrl=h)})},null,8,["value"])])])):N("",!0),a($)?(z(),U("div",Ba,[e("span",Ma,c(o.$t("setting.apiModel")),1),e("div",Va,[u(a(M),{value:s.value&&s.value.apiModel,placeholder:"",onInput:r[2]||(r[2]=h=>{s.value&&(s.value.apiModel=h)})},null,8,["value"])])])):N("",!0),e("div",Aa,[e("span",Pa,c(o.$t("setting.accessToken")),1),e("div",Ua,[u(a(M),{value:s.value&&s.value.accessToken,placeholder:"",onInput:r[3]||(r[3]=h=>{s.value&&(s.value.accessToken=h)})},null,8,["value"])])]),a($)?N("",!0):(z(),U("div",Da,[e("span",Na,c(o.$t("setting.reverseProxy")),1),e("div",Ea,[u(a(M),{value:s.value&&s.value.reverseProxy,placeholder:"",onInput:r[4]||(r[4]=h=>{s.value&&(s.value.reverseProxy=h)})},null,8,["value"])])])),e("div",Fa,[e("span",Ha,c(o.$t("setting.timeout")),1),e("div",Oa,[u(a(M),{value:s.value&&s.value.timeoutMs!==void 0?String(s.value.timeoutMs):void 0,placeholder:"",onInput:r[5]||(r[5]=h=>{s.value&&(s.value.timeoutMs=typeof h=="string"?Number(h):void 0)})},null,8,["value"])])]),e("div",ja,[e("span",Ka,c(o.$t("setting.socks")),1),e("div",La,[u(a(M),{value:s.value&&s.value.socksProxy,placeholder:"",onInput:r[6]||(r[6]=h=>{s.value&&(s.value.socksProxy=h)})},null,8,["value"])])]),e("div",Wa,[e("span",Ga,c(o.$t("setting.socksAuth")),1),e("div",Xa,[u(a(M),{value:s.value&&s.value.socksAuth,placeholder:"name:pasword",onInput:r[7]||(r[7]=h=>{s.value&&(s.value.socksAuth=h)})},null,8,["value"])])]),e("div",Ya,[e("span",Ja,c(o.$t("setting.httpsProxy")),1),e("div",qa,[u(a(M),{value:s.value&&s.value.httpsProxy,placeholder:"",onInput:r[8]||(r[8]=h=>{s.value&&(s.value.httpsProxy=h)})},null,8,["value"])])]),e("div",Qa,[Za,u(a(F),{loading:i.value,type:"primary",onClick:r[9]||(r[9]=h=>m(s.value))},{default:w(()=>[E(c(o.$t("common.save")),1)]),_:1},8,["loading"])])])])]}),_:1},8,["show"]))}}),tn={class:"p-4 space-y-5 min-h-[200px]"},sn={class:"space-y-6"},an={class:"flex items-center space-x-4"},nn={class:"flex-shrink-0 w-[100px]"},ln={class:"flex-1"},on={class:"flex items-center space-x-4"},rn={class:"flex-shrink-0 w-[100px]"},dn={class:"flex-1"},cn={class:"flex items-center space-x-4"},un={class:"flex-shrink-0 w-[100px]"},vn={class:"flex-1"},hn={class:"flex items-center space-x-4"},fn={class:"flex-shrink-0 w-[100px]"},pn={class:"flex-1"},mn={class:"flex items-center space-x-4"},gn={class:"flex-shrink-0 w-[100px]"},bn={class:"flex-1"},xn={class:"flex items-center space-x-4"},_n={class:"flex-shrink-0 w-[100px]"},wn={class:"flex-1"},$n={class:"flex items-center space-x-4"},yn={class:"flex-shrink-0 w-[100px]"},kn={class:"flex-1"},Sn={class:"flex items-center space-x-4"},Cn=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),Rn=ee({__name:"Site",setup(t){const v=ie(),g=k(!1),x=k(!1),i=k();i.value=new wa;async function s(){try{g.value=!0;const{data:l}=await Ne();i.value=l.siteConfig}finally{g.value=!1}}async function $(l){if(l){x.value=!0;try{const{data:m}=await is(l);i.value=m,v.success(se("common.success"))}catch(m){v.error(m.message)}x.value=!1}}return Re(()=>{s()}),(l,m)=>(z(),Q(a(Te),{show:g.value},{default:w(()=>[e("div",tn,[e("div",sn,[e("div",an,[e("span",nn,c(l.$t("setting.siteTitle")),1),e("div",ln,[u(a(M),{value:i.value&&i.value.siteTitle,placeholder:"",onInput:m[0]||(m[0]=o=>{i.value&&(i.value.siteTitle=o)})},null,8,["value"])])]),e("div",on,[e("span",rn,c(l.$t("setting.siteDomain")),1),e("div",dn,[u(a(M),{value:i.value&&i.value.siteDomain,placeholder:"",onInput:m[1]||(m[1]=o=>{i.value&&(i.value.siteDomain=o)})},null,8,["value"])])]),e("div",cn,[e("span",un,c(l.$t("setting.loginEnabled")),1),e("div",vn,[u(a(xe),{round:!1,disabled:i.value&&i.value.loginEnabled,value:i.value&&i.value.loginEnabled,"onUpdate:value":m[2]||(m[2]=o=>{i.value&&(i.value.loginEnabled=o)})},null,8,["disabled","value"])])]),e("div",hn,[e("span",fn,c(l.$t("setting.loginSalt")),1),e("div",pn,[u(a(M),{value:i.value&&i.value.loginSalt,placeholder:l.$t("setting.loginSaltTip"),onInput:m[3]||(m[3]=o=>{i.value&&(i.value.loginSalt=o)})},null,8,["value","placeholder"])])]),e("div",mn,[e("span",gn,c(l.$t("setting.registerEnabled")),1),e("div",bn,[u(a(xe),{round:!1,value:i.value&&i.value.registerEnabled,"onUpdate:value":m[4]||(m[4]=o=>{i.value&&(i.value.registerEnabled=o)})},null,8,["value"])])]),ls(e("div",xn,[e("span",_n,c(l.$t("setting.registerReview")),1),e("div",wn,[u(a(xe),{round:!1,value:i.value&&i.value.registerReview,"onUpdate:value":m[5]||(m[5]=o=>{i.value&&(i.value.registerReview=o)})},null,8,["value"])])],512),[[os,i.value&&i.value.registerEnabled]]),e("div",$n,[e("span",yn,c(l.$t("setting.registerMails")),1),e("div",kn,[u(a(M),{value:i.value&&i.value.registerMails,placeholder:"",onInput:m[6]||(m[6]=o=>{i.value&&(i.value.registerMails=o)})},null,8,["value"])])]),e("div",Sn,[Cn,u(a(F),{loading:x.value,type:"primary",onClick:m[7]||(m[7]=o=>$(i.value))},{default:w(()=>[E(c(l.$t("common.save")),1)]),_:1},8,["loading"])])])])]),_:1},8,["show"]))}}),Tn={class:"p-4 space-y-5 min-h-[200px]"},zn={class:"space-y-6"},In={class:"flex items-center space-x-4"},Bn={class:"flex-shrink-0 w-[100px]"},Mn={class:"flex-1"},Vn={class:"flex items-center space-x-4"},An={class:"flex-shrink-0 w-[100px]"},Pn={class:"flex-1"},Un={class:"flex items-center space-x-4"},Dn={class:"flex-shrink-0 w-[100px]"},Nn={class:"flex-1"},En={class:"flex items-center space-x-4"},Fn={class:"flex-shrink-0 w-[100px]"},Hn={class:"flex-1"},On={class:"flex items-center space-x-4"},jn={class:"flex-shrink-0 w-[100px]"},Kn={class:"flex-1"},Ln={class:"flex items-center space-x-4"},Wn=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),Gn={class:"flex flex-wrap items-center gap-4"},Xn=ee({__name:"Mail",setup(t){const v=ie(),g=k(!1),x=k(!1),i=k(!1),s=k();async function $(){try{g.value=!0;const{data:o}=await Ne();s.value=o.mailConfig}finally{g.value=!1}}async function l(){x.value=!0;try{const{data:o}=await rs(s.value);s.value=o,v.success(se("common.success"))}catch(o){v.error(o.message)}x.value=!1}async function m(){i.value=!0;try{const{message:o}=await ds(s.value);v.success(o)}catch(o){v.error(o.message)}i.value=!1}return Re(()=>{$()}),(o,r)=>(z(),Q(a(Te),{show:g.value},{default:w(()=>[e("div",Tn,[e("div",zn,[e("div",In,[e("span",Bn,c(o.$t("setting.smtpHost")),1),e("div",Mn,[u(a(M),{value:s.value&&s.value.smtpHost,placeholder:"",onInput:r[0]||(r[0]=p=>{s.value&&(s.value.smtpHost=p)})},null,8,["value"])])]),e("div",Vn,[e("span",An,c(o.$t("setting.smtpPort")),1),e("div",Pn,[u(a(M),{value:s.value&&s.value.smtpPort!==void 0?String(s.value.smtpPort):void 0,placeholder:"",onInput:r[1]||(r[1]=p=>{s.value&&(s.value.smtpPort=typeof p=="string"?Number(p):void 0)})},null,8,["value"])])]),e("div",Un,[e("span",Dn,c(o.$t("setting.smtpTsl")),1),e("div",Nn,[u(a(xe),{round:!1,value:s.value&&s.value.smtpTsl,"onUpdate:value":r[2]||(r[2]=p=>{s.value&&(s.value.smtpTsl=p)})},null,8,["value"])])]),e("div",En,[e("span",Fn,c(o.$t("setting.smtpUserName")),1),e("div",Hn,[u(a(M),{value:s.value&&s.value.smtpUserName,placeholder:"",onInput:r[3]||(r[3]=p=>{s.value&&(s.value.smtpUserName=p)})},null,8,["value"])])]),e("div",On,[e("span",jn,c(o.$t("setting.smtpPassword")),1),e("div",Kn,[u(a(M),{value:s.value&&s.value.smtpPassword,placeholder:"",onInput:r[4]||(r[4]=p=>{s.value&&(s.value.smtpPassword=p)})},null,8,["value"])])]),e("div",Ln,[Wn,e("div",Gn,[u(a(F),{loading:x.value,type:"primary",onClick:r[5]||(r[5]=p=>l())},{default:w(()=>[E(c(o.$t("common.save")),1)]),_:1},8,["loading"]),u(a(F),{loading:i.value,type:"info",onClick:r[6]||(r[6]=p=>m())},{default:w(()=>[E(c(o.$t("common.test")),1)]),_:1},8,["loading"])])])])])]),_:1},8,["show"]))}}),Yn={class:"p-4 space-y-5 min-h-[200px]"},Jn={class:"space-y-6"},qn={class:"flex items-center space-x-4"},Qn={class:"flex-shrink-0 w-[100px]"},Zn={class:"flex-1"},el={key:0,class:"flex items-center space-x-4"},tl={class:"flex-shrink-0 w-[100px]"},sl={class:"flex-1"},al={class:"flex items-center space-x-4"},nl={class:"flex-shrink-0 w-[100px]"},ll={class:"flex-1"},ol={key:1,class:"flex items-center space-x-4"},il={class:"flex-shrink-0 w-[100px]"},rl={class:"flex-1"},dl={key:2,class:"flex items-center space-x-4"},cl={class:"flex-shrink-0 w-[100px]"},ul={class:"flex-1"},vl={key:3,class:"flex items-center space-x-4"},hl={class:"flex-shrink-0 w-[100px]"},fl={class:"flex-1"},pl={key:4,class:"flex items-center space-x-4"},ml={class:"flex-shrink-0 w-[100px]"},gl={class:"flex-1"},bl={key:0},xl={target:"_blank",href:"https://ai.baidu.com/ai-doc/ANTIPORN/Nk3h6xbb2#%E7%BB%86%E5%88%86%E6%A0%87%E7%AD%BE%E5%AF%B9%E7%85%A7%E8%A1%A8"},_l={key:5,class:"flex items-center space-x-4"},wl={class:"flex-shrink-0 w-[100px]"},$l={class:"flex-1"},yl={class:"flex items-center space-x-4"},kl=e("span",{class:"flex-shrink-0 w-[100px]"},null,-1),Sl={class:"flex flex-wrap items-center gap-4"},Cl=ee({__name:"Audit",setup(t){const v=ie(),g=k(!1),x=k(!1),i=k(!1),s=k(),$=[{label:"百度云",key:"baidu",value:"baidu"}],l=k();async function m(){try{g.value=!0;const{data:p}=await Ne();l.value=p.auditConfig}finally{g.value=!1}}async function o(){x.value=!0;try{const{data:p}=await cs(l.value);l.value=p,v.success(se("common.success"))}catch(p){v.error(p.message)}x.value=!1}async function r(){i.value=!0;try{const{message:p}=await us(s.value,l.value);v.success(p)}catch(p){v.error(p.message)}i.value=!1}return Re(()=>{m()}),(p,h)=>(z(),Q(a(Te),{show:g.value},{default:w(()=>[e("div",Yn,[e("div",Jn,[e("div",qn,[e("span",Qn,c(p.$t("setting.auditCustomizeEnabled")),1),e("div",Zn,[u(a(xe),{round:!1,value:l.value&&l.value.customizeEnabled,"onUpdate:value":h[0]||(h[0]=C=>{l.value&&(l.value.customizeEnabled=C)})},null,8,["value"])])]),l.value&&l.value.customizeEnabled?(z(),U("div",el,[e("span",tl,c(p.$t("setting.auditCustomizeWords")),1),e("div",sl,[u(a(M),{value:l.value&&l.value.sensitiveWords,placeholder:"One word per line",type:"textarea",autosize:{minRows:1,maxRows:4},onInput:h[1]||(h[1]=C=>{l.value&&(l.value.sensitiveWords=C)})},null,8,["value"])])])):N("",!0),e("div",al,[e("span",nl,c(p.$t("setting.auditEnabled")),1),e("div",ll,[u(a(xe),{round:!1,value:l.value&&l.value.enabled,"onUpdate:value":h[2]||(h[2]=C=>{l.value&&(l.value.enabled=C)})},null,8,["value"])])]),l.value&&l.value.enabled?(z(),U("div",ol,[e("span",il,c(p.$t("setting.auditProvider")),1),e("div",rl,[u(a(vt),{style:{width:"140px"},value:l.value&&l.value.provider,options:$,onUpdateValue:h[3]||(h[3]=C=>{l.value&&(l.value.provider=C)})},null,8,["value"])])])):N("",!0),l.value&&l.value.enabled?(z(),U("div",dl,[e("span",cl,c(p.$t("setting.auditApiKey")),1),e("div",ul,[u(a(M),{value:l.value&&l.value.options&&l.value.options.apiKey,placeholder:"",onInput:h[4]||(h[4]=C=>{l.value&&l.value.options&&(l.value.options.apiKey=C)})},null,8,["value"])])])):N("",!0),l.value&&l.value.enabled?(z(),U("div",vl,[e("span",hl,c(p.$t("setting.auditApiSecret")),1),e("div",fl,[u(a(M),{value:l.value&&l.value.options&&l.value.options.apiSecret,placeholder:"",onInput:h[5]||(h[5]=C=>{l.value&&l.value.options&&(l.value.options.apiSecret=C)})},null,8,["value"])])])):N("",!0),l.value&&l.value.enabled?(z(),U("div",pl,[e("span",ml,c(p.$t("setting.auditBaiduLabel")),1),e("div",gl,[u(a(M),{value:l.value&&l.value.options&&l.value.options.label,placeholder:p.$t("setting.auditBaiduLabelTip"),onInput:h[6]||(h[6]=C=>{l.value&&l.value.options&&(l.value.options.label=C)})},null,8,["value","placeholder"])]),l.value&&l.value.provider==="baidu"?(z(),U("p",bl,[e("a",xl,c(p.$t("setting.auditBaiduLabelLink")),1)])):N("",!0)])):N("",!0),l.value&&(l.value.enabled||l.value.customizeEnabled)?(z(),U("div",_l,[e("span",wl,c(p.$t("setting.auditTest")),1),e("div",$l,[u(a(M),{value:s.value,"onUpdate:value":h[7]||(h[7]=C=>s.value=C),placeholder:""},null,8,["value"])])])):N("",!0),e("div",yl,[kl,e("div",Sl,[u(a(F),{loading:x.value,type:"primary",onClick:h[8]||(h[8]=C=>o())},{default:w(()=>[E(c(p.$t("common.save")),1)]),_:1},8,["loading"]),u(a(F),{loading:i.value,type:"info",onClick:h[9]||(h[9]=C=>r())},{default:w(()=>[E(c(p.$t("common.test")),1)]),_:1},8,["loading"])])])])])]),_:1},8,["show"]))}}),Rl={class:"ml-2"},Tl={class:"min-h-[100px]"},zl={class:"ml-2"},Il={class:"min-h-[100px]"},Bl={class:"ml-2"},Ml={class:"min-h-[100px]"},Vl={class:"ml-2"},Al={class:"ml-2"},Pl={class:"ml-2"},Ul={class:"ml-2"},El=ee({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(t,{emit:v}){const g=t,x=ut(),i=Qe(),s=V(()=>!!i.isChatGPTAPI),$=ie(),l=k("General"),m=V({get(){return g.visible},set(r){v("update:visible",r)}});async function o(){try{const r=await ht();await i.setTimes(r.data)}catch(r){$.error(r.message??"error")}}return Ye(m,r=>{r&&o()},{immediate:!0}),(r,p)=>(z(),Q(a(fs),{show:a(m),"onUpdate:show":p[1]||(p[1]=h=>hs(m)?m.value=h:null),"auto-focus":!1,preset:"card",style:{width:"95%","max-width":"1024px"}},{default:w(()=>[e("div",null,[u(a(vs),{value:l.value,"onUpdate:value":p[0]||(p[0]=h=>l.value=h),type:"line",animated:""},{default:w(()=>[u(a(ve),{name:"General",tab:"General"},{tab:w(()=>[u(a(q),{class:"text-lg",icon:"ri:file-user-line"}),e("span",Rl,c(r.$t("setting.general")),1)]),default:w(()=>[e("div",Tl,[u(ea)])]),_:1}),u(a(ve),{name:"Package",tab:"Package"},{tab:w(()=>[u(a(q),{class:"text-lg",icon:"ri:list-settings-line"}),e("span",zl,c(r.$t("setting.package")),1)]),default:w(()=>[e("div",Il,[u(la)])]),_:1}),a(s)?(z(),Q(a(ve),{key:0,name:"Advanced",tab:"Advanced"},{tab:w(()=>[u(a(q),{class:"text-lg",icon:"ri:equalizer-line"}),e("span",Bl,c(r.$t("setting.advanced")),1)]),default:w(()=>[e("div",Ml,[u(xa)])]),_:1})):N("",!0),a(x).userInfo.root?(z(),Q(a(ve),{key:1,name:"Config",tab:"Config"},{tab:w(()=>[u(a(q),{class:"text-lg",icon:"ri:list-settings-line"}),e("span",Vl,c(r.$t("setting.config")),1)]),default:w(()=>[u(en)]),_:1})):N("",!0),a(x).userInfo.root?(z(),Q(a(ve),{key:2,name:"SiteConfig",tab:"SiteConfig"},{tab:w(()=>[u(a(q),{class:"text-lg",icon:"ri:settings-line"}),e("span",Al,c(r.$t("setting.siteConfig")),1)]),default:w(()=>[u(Rn)]),_:1})):N("",!0),a(x).userInfo.root?(z(),Q(a(ve),{key:3,name:"MailConfig",tab:"MailConfig"},{tab:w(()=>[u(a(q),{class:"text-lg",icon:"ri:mail-line"}),e("span",Pl,c(r.$t("setting.mailConfig")),1)]),default:w(()=>[u(Xn)]),_:1})):N("",!0),a(x).userInfo.root?(z(),Q(a(ve),{key:4,name:"AuditConfig",tab:"AuditConfig"},{tab:w(()=>[u(a(q),{class:"text-lg",icon:"ri:settings-line"}),e("span",Ul,c(r.$t("setting.auditConfig")),1)]),default:w(()=>[u(Cl)]),_:1})):N("",!0)]),_:1},8,["value"])])]),_:1},8,["show"]))}});export{El as default};
