"use strict";(self["webpackChunkpyz_vue3"]=self["webpackChunkpyz_vue3"]||[]).push([[562],{1562:function(e,a,l){l.r(a),l.d(a,{default:function(){return C}});var r=l(3396),t=l(7139),o=l(4870);const n={class:"card-header"},s=["href"],u={class:"card-header"},d=["href"],i=["innerHTML"];var m={__name:"GameList",props:{gameList:Array,isFuture:Boolean},setup(e){const a=e=>e.love&&e.love.flag;return(l,o)=>{const m=(0,r.up)("el-card"),c=(0,r.up)("FullScreen"),g=(0,r.up)("el-icon"),f=(0,r.up)("router-link"),p=(0,r.up)("el-rate");return e.isFuture?((0,r.wg)(!0),(0,r.iD)(r.HY,{key:0},(0,r.Ko)(e.gameList,((e,a)=>((0,r.wg)(),(0,r.j4)(m,{class:"game-card",shadow:"hover",key:a,style:{width:"30%"}},{header:(0,r.w5)((()=>[(0,r._)("div",n,[(0,r._)("h3",null,[(0,r._)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},(0,t.zw)(e.gameName),9,s)])])])),_:2},1024)))),128)):((0,r.wg)(!0),(0,r.iD)(r.HY,{key:1},(0,r.Ko)(e.gameList,((e,l)=>((0,r.wg)(),(0,r.j4)(m,{class:"game-card",shadow:"hover",key:l},{header:(0,r.w5)((()=>[(0,r._)("div",u,[(0,r._)("h3",null,[(0,r._)("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},(0,t.zw)(e.gameName),9,d)]),a(e)?((0,r.wg)(),(0,r.j4)(f,{key:0,class:"game-route",to:"/happy/game/"+e.love.route},{default:(0,r.w5)((()=>[(0,r.Wm)(g,null,{default:(0,r.w5)((()=>[(0,r.Wm)(c)])),_:1})])),_:2},1032,["to"])):(0,r.kq)("",!0)])])),default:(0,r.w5)((()=>[(0,r._)("p",null,"昵称: "+(0,t.zw)(e.userName),1),e.like?((0,r.wg)(),(0,r.j4)(p,{key:0,modelValue:e.like,"onUpdate:modelValue":a=>e.like=a,disabled:"","text-color":"#ff9900","allow-half":""},null,8,["modelValue","onUpdate:modelValue"])):(0,r.kq)("",!0),(0,r._)("p",{innerHTML:e.moreInfo},null,8,i)])),_:2},1024)))),128))}}},c=l(89);const g=(0,c.Z)(m,[["__scopeId","data-v-43dfe952"]]);var f=g,p=l(6623);const _=e=>((0,r.dD)("data-v-b93d7edc"),e=e(),(0,r.Cn)(),e),v={id:"Game"},w={key:0,id:"PlatformContainer"},k=["href"],h={class:"platform-card-pname"},y={class:"platform-card-intro"},L={id:"GameContainer"},b=_((()=>(0,r._)("div",{class:"game-divider"},null,-1))),j=_((()=>(0,r._)("div",{class:"game-divider"},null,-1)));var z={__name:"Game",setup(e){const a=(0,p.oR)(),l=(0,o.qj)({data:[],platforms:[]});(0,r.bv)((()=>{a.state.myAxios.get("Game").then((e=>{l.platforms=e.data.platforms||[],l.data=e.data.games||[],l.future_games=e.data.future_games||[]}))}));const n=(0,r.Fl)((()=>l.data.filter((e=>e.love&&e.love.flag)))),s=(0,r.Fl)((()=>l.data.filter((e=>!e.love||!e.love.flag))));return(e,a)=>{const o=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)("div",v,[((0,r.wg)(),(0,r.iD)("div",w,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l.platforms,((e,a)=>((0,r.wg)(),(0,r.iD)("a",{class:"platform-card",key:a,href:e.link,rel:"noopener noreferrer",target:"_blank",style:(0,t.j5)("background-color:"+e.color)},[(0,r._)("h1",h,(0,t.zw)(e.pName),1),(0,r._)("p",null,(0,t.zw)(e.uName),1),(0,r._)("div",y,[(0,r._)("p",null,(0,t.zw)(e.intro),1)])],12,k)))),128))])),(0,r.Wm)(o,null,{default:(0,r.w5)((({Component:e})=>[((0,r.wg)(),(0,r.j4)(r.Ob,null,[((0,r.wg)(),(0,r.j4)((0,r.LL)(e)))],1024))])),_:1}),(0,r._)("div",L,[(0,r.Wm)(f,{gameList:n.value},null,8,["gameList"]),b,(0,r.Wm)(f,{gameList:s.value},null,8,["gameList"]),j,(0,r.Wm)(f,{gameList:l.future_games,isFuture:!0},null,8,["gameList"])])])}}};const D=(0,c.Z)(z,[["__scopeId","data-v-b93d7edc"]]);var C=D}}]);