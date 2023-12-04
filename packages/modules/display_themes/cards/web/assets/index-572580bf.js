import{o as f,e as k,k as g,x as P,j as T,F as V,H as I,l as u,n as C,p as i,f as $,i as v,s as a,z as E,I as x,R as q,J as N,K as O,L as M,M as F,N as R,O as A,P as z}from"./vendor-caccd77e.js";import{_ as b,I as U,c as j}from"./vendor-inkline-7939cbce.js";import{l as G,f as H,a as J,b as K,c as Z,F as Y}from"./vendor-fortawesome-63041232.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const l of n.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerPolicy&&(n.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?n.credentials="include":r.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(r){if(r.ep)return;r.ep=!0;const n=o(r);fetch(r.href,n)}})();const Q={name:"DateTime",props:{separator:{String,default:"<br />"}},data(){return{dateTimeInterval:"",date:"",time:""}},methods:{update(){const e=new Date,t={weekday:"short",year:"numeric",month:"2-digit",day:"2-digit"},o={hour:"2-digit",minute:"2-digit",second:"2-digit"};this.date=e.toLocaleDateString(void 0,t),this.time=e.toLocaleTimeString(void 0,o)}},mounted(){this.update(),this.dateTimeInterval=setInterval(this.update,1e3)},beforeUnmount(){clearInterval(this.dateTimeInterval)}},X=["innerHTML"];function ee(e,t,o,c,r,n){return f(),k(V,null,[g(P(r.time),1),T("span",{innerHTML:o.separator},null,8,X),g(P(r.date),1)],64)}const te=b(Q,[["render",ee],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/DateTime.vue"]]),B=I("mqtt",{state:()=>({settings:{parentChargePoint1:void 0,parentChargePoint2:void 0},topics:{},chartData:{}}),getters:{getChargePointFilter:e=>{let t=[];return e.settings.parentChargePoint1!==void 0&&t.push(e.settings.parentChargePoint1),e.settings.parentChargePoint2!==void 0&&t.push(e.settings.parentChargePoint2),t},getWildcardIndexList:e=>(t,o=!1)=>{let c=t;o||(c="^"+t.replaceAll("/","\\/").replaceAll("+","[^+/]+").replaceAll("#","[^#/]+")+"$");let r=Object.keys(e.topics).filter(n=>n.match(c));return r.forEach((n,l,d)=>{d[l]=parseInt(n.match(/(?:\/)([0-9]+)(?=\/)*/g)[0].replace(/[^0-9]+/g,""))}),r},getWildcardTopics:e=>(t,o=!1)=>{let c=t;return o||(c="^"+t.replaceAll("/","\\/").replaceAll("+","[^+/]+").replaceAll("#","[^#/]+")+"$"),Object.keys(e.topics).filter(r=>r.match(c)).reduce((r,n)=>({...r,[n]:e.topics[n]}),{})},getObjectIds:e=>t=>{function o(c){let r=[];return c!==void 0&&c.forEach(n=>{n.type==t&&r.push(n.id),r=[...r,...o(n.children)]}),r}return o(e.topics["openWB/counter/get/hierarchy"])},getValueBool:e=>(t,o=!1)=>{let c=e.topics[t];return c!==void 0?c:(console.warn("topic not found! using default",t,o),o)},getValueString:e=>(t,o="W",c="",r=!0,n=!1,l="---",d=void 0)=>{var p=!1,s=e.topics[t];if(s===void 0||d!==void 0&&s[d]===void 0)console.warn("topic not found! using default",t,l),h=l;else{d!==void 0&&(s=s[d]),n&&(s*=-1);for(var h=s.toLocaleString(void 0,{minimumFractionDigits:0,maximumFractionDigits:0});r&&(s>999||s<-999);)switch(s=s/1e3,p=!0,c){case"":c="k";break;case"k":c="M";break;case"M":c="G";break}h=s.toLocaleString(void 0,{minimumFractionDigits:p?2:0,maximumFractionDigits:p?2:0})}return`${h} ${c}${o}`},getChartData:e=>t=>e.chartData[t]===void 0?[]:e.chartData[t],getDisplayStandby:e=>e.topics["openWB/optional/int_display/standby"],getThemeConfiguration:e=>{if("openWB/optional/int_display/theme"in e.topics&&e.topics["openWB/optional/int_display/theme"]!==void 0&&"configuration"in e.topics["openWB/optional/int_display/theme"])return e.topics["openWB/optional/int_display/theme"].configuration},getDashBoardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_view:!0},getChargePointsEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_charge_points_view:!0},getStateEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_status_view:!0},getGridCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_grid:!0},getHomeCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_home_consumption:!0},getBatteryCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_battery_sum:!0},getChargePointsCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_charge_point_sum:!0},getPvCardEnabled(e){return e.getThemeConfiguration?e.getThemeConfiguration.enable_dashboard_card_inverter_sum:!0},getLockChanges(e){return e.getThemeConfiguration?e.getThemeConfiguration.lock_changes:!0},getGridId(e){let t=e.topics["openWB/counter/get/hierarchy"];if(t!==void 0&&Object.keys(t).length>0){let o=Object.keys(e.topics["openWB/counter/get/hierarchy"])[0];if(console.debug("getGridId",o,e.topics["openWB/counter/get/hierarchy"][o]),e.topics["openWB/counter/get/hierarchy"][o].type=="counter")return e.topics["openWB/counter/get/hierarchy"][o].id}},getGridPower(e){let t=e.getGridId;return t===void 0?"---":e.getValueString(`openWB/counter/${t}/get/power`,"W")},getGridPowerChartData(e){let t=e.getGridId;return t===void 0?[]:e.getChartData(`openWB/counter/${t}/get/power`)},getHomePower(e){return e.getValueString("openWB/counter/set/home_consumption","W")},getHomePowerChartData(e){return e.getChartData("openWB/counter/set/home_consumption")},getBatteryConfigured(e){return e.getValueBool("openWB/bat/config/configured")},getBatteryPower(e){return e.getValueString("openWB/bat/get/power","W")},getBatteryPowerChartData(e){return e.getChartData("openWB/bat/get/power")},getBatterySoc(e){return e.getValueString("openWB/bat/get/soc","%","",!1)},getBatterySocChartData(e){return e.getChartData("openWB/bat/get/soc")},getPvConfigured(e){return e.getValueBool("openWB/pv/config/configured")},getPvPower(e){return e.getValueString("openWB/pv/get/power","W","",!0,!0)},getPvPowerChartData(e){return e.getChartData("openWB/pv/get/power").map(t=>t*-1)},getChargePointSumPower(e){return e.getValueString("openWB/chargepoint/get/power","W")},getChargePointSumPowerChartData(e){return e.getChartData("openWB/chargepoint/get/power")},getChargePointIds(e){let t=e.getObjectIds("cp"),o=this.getChargePointFilter;return o.length>0?(console.debug("charge points are filtered!",t,o),t.filter(c=>o.includes(c))):t},getChargePointName(e){return t=>e.topics[`openWB/chargepoint/${t}/config`]!==void 0?e.topics[`openWB/chargepoint/${t}/config`].name:"---"},getChargePointPower(e){return t=>e.getValueString(`openWB/chargepoint/${t}/get/power`,"W")},getChargePointImportedSincePlugged(e){return t=>({energy:e.getValueString(`openWB/chargepoint/${t}/set/log`,"Wh","",!0,!1,"---","imported_since_plugged"),range:e.getValueString(`openWB/chargepoint/${t}/set/log`,"m","k",!1,!1,"---","range_charged")})},getChargePointPowerChartData(e){return t=>e.getChartData(`openWB/chargepoint/${t}/get/power`)},getChargePointSetCurrent(e){return t=>e.getValueString(`openWB/chargepoint/${t}/set/current`,"A")},getChargePointPhasesInUse(e){return t=>{const o=["/","①","②","③"],c=e.topics[`openWB/chargepoint/${t}/get/phases_in_use`];return c!==void 0&&c>=0&&c<o.length?o[e.topics[`openWB/chargepoint/${t}/get/phases_in_use`]]:(console.warn("topic not found!",`openWB/chargepoint/${t}/get/phases_in_use`),"?")}},getChargePointPlugState(e){return t=>e.getValueBool(`openWB/chargepoint/${t}/get/plug_state`)},getChargePointChargeState(e){return t=>e.getValueBool(`openWB/chargepoint/${t}/get/charge_state`)},getChargePointManualLock(e){return t=>e.getValueBool(`openWB/chargepoint/${t}/set/manual_lock`)},getChargePointVehicleChangePermitted(e){return t=>Array.isArray(e.topics[`openWB/chargepoint/${t}/set/change_ev_permitted`])?e.topics[`openWB/chargepoint/${t}/set/change_ev_permitted`][0]:!0},getChargePointConnectedVehicleConfig(e){return t=>e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/config`]},getChargePointConnectedVehicleChargeMode(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.translateChargeMode(e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.selected)}},getChargePointConnectedVehiclePriority(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).prio}},getChargePointConnectedVehicleInfo(e){return t=>e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/info`]},getChargePointConnectedVehicleId(e){return t=>{if(e.getChargePointConnectedVehicleInfo(t))return e.getChargePointConnectedVehicleInfo(t).id}},getChargePointConnectedVehicleChargeTemplateIndex(e){return t=>{if(e.getChargePointConnectedVehicleConfig(t))return e.getChargePointConnectedVehicleConfig(t).charge_template}},getChargePointConnectedVehicleChargeTemplate(e){return t=>{let o=e.getChargePointConnectedVehicleChargeTemplateIndex(t);return e.topics[`openWB/vehicle/template/charge_template/${o}`]}},getChargePointConnectedVehicleEvTemplate(e){return t=>{if(e.getChargePointConnectedVehicleConfig(t))return e.getChargePointConnectedVehicleConfig(t).ev_template}},getChargePointConnectedVehicleName(e){return t=>{if(e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/info`])return e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/info`].name}},getChargePointConnectedVehicleSoc(e){return t=>e.topics[`openWB/chargepoint/${t}/get/connected_vehicle/soc`]},getChargePointConnectedVehicleTimeChargingActive(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).time_charging.active}},getChargePointConnectedVehicleTimeChargingRunning(e){return t=>{let o=e.getChargePointConnectedVehicleConfig(t).time_charging_in_use;return o!==void 0?o:!1}},getChargePointConnectedVehicleInstantChargingCurrent(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.instant_charging.current}},getChargePointConnectedVehicleInstantChargingLimit(e){return t=>e.getChargePointConnectedVehicleChargeTemplate(t)?e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.instant_charging.limit:{selected:void 0}},getChargePointConnectedVehiclePvChargingFeedInLimit(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.feed_in_limit}},getChargePointConnectedVehiclePvChargingMinCurrent(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.min_current}},getChargePointConnectedVehiclePvChargingMinSoc(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.min_soc}},getChargePointConnectedVehiclePvChargingMinSocCurrent(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.min_soc_current}},getChargePointConnectedVehiclePvChargingMaxSoc(e){return t=>{if(e.getChargePointConnectedVehicleChargeTemplate(t))return e.getChargePointConnectedVehicleChargeTemplate(t).chargemode.pv_charging.max_soc}},getChargePointConnectedVehicleScheduledChargingPlans(e){return t=>{let o=e.getChargePointConnectedVehicleChargeTemplateIndex(t);return e.getWildcardTopics(`openWB/vehicle/template/charge_template/${o}/chargemode/scheduled_charging/plans/+`)}},getChargePointConnectedVehicleTimeChargingPlans(e){return t=>{let o=e.getChargePointConnectedVehicleChargeTemplateIndex(t);return e.getWildcardTopics(`openWB/vehicle/template/charge_template/${o}/time_charging/plans/+`)}},getVehicleList(e){return e.getWildcardTopics("openWB/vehicle/+/name")},getVehicleName(e){return t=>e.topics[`openWB/vehicle/${t}/name`]},getVehicleSocConfigured(e){return t=>e.topics[`openWB/vehicle/${t}/soc_module/config`].type!=null},getVehicleSocIsManual(e){return t=>e.topics[`openWB/vehicle/${t}/soc_module/config`].type=="manual"},getVehicleFaultState(e){return t=>e.topics[`openWB/vehicle/${t}/get/fault_state`]?e.topics[`openWB/vehicle/${t}/get/fault_state`]:0},getSystemCurrentCommit(e){if(e.topics["openWB/system/current_commit"])return e.topics["openWB/system/current_commit"]},getSystemIp(e){if(e.topics["openWB/system/ip_address"])return e.topics["openWB/system/ip_address"]},getSystemBranch(e){if(e.topics["openWB/system/current_branch"])return e.topics["openWB/system/current_branch"]},getSystemTime(e){if(e.topics["openWB/system/time"])return new Date(e.topics["openWB/system/time"]*1e3).toLocaleString()},getSystemVersion(e){if(e.topics["openWB/system/version"])return e.topics["openWB/system/version"]}},actions:{updateSetting(e,t){e in this.settings&&(this.settings[e]=t)},initTopic(e,t=void 0){e.includes("#")||e.includes("+")?console.debug("skipping init of wildcard topic:",e):this.addTopic(e,t)},addTopic(e,t){console.debug("addTopic",e,t),this.topics[e]=t},removeTopic(e){e.includes("#")||e.includes("+")?(console.debug("expanding wildcard topic for removal:",e),Object.keys(this.getWildcardTopics(e)).forEach(t=>{console.debug("removing wildcardTopic:",t),delete this.topics[t]})):delete this.topics[e]},updateTopic(e,t,o=void 0){const c=(r,n,l)=>n.split(".").reduce((d,p,s)=>d[p]=n.split(".").length===++s?l:d[p]||{},r);e in this.topics?o!=null?c(this.topics[e],o,t):this.topics[e]=t:console.debug("topic not found: ",e)},updateChartData(){for(const[e,t]of Object.entries(this.topics))(e.endsWith("home_consumption")||e.endsWith("power")||e.endsWith("soc"))&&(this.chartData[e]===void 0&&(this.chartData[e]=[]),t!=null&&(this.chartData[e].push(t),this.chartData[e].slice(-128)))},updateState(e,t,o=void 0){console.debug("updateState:",e,t,o),this.updateTopic(e,t,o)},chargeModeList(){var e=[{id:"instant_charging"},{id:"pv_charging"},{id:"scheduled_charging"},{id:"standby"},{id:"stop"}];return e.forEach(t=>{t.label=this.translateChargeMode(t.id).label,t.class=this.translateChargeMode(t.id).class}),e},translateChargeMode(e){switch(e){case"instant_charging":return{mode:e,label:"Sofort",class:"danger"};case"pv_charging":return{mode:e,label:"PV",class:"success"};case"scheduled_charging":return{mode:e,label:"Zielladen",class:"primary"};case"time_charging":return{mode:e,label:"Zeitladen",class:"warning"};case"standby":return{mode:e,label:"Standby",class:"secondary"};case"stop":return{mode:e,label:"Stop",class:"dark"};default:return console.warn("unknown charge mode:",e),{mode:e,label:e,class:e}}},checkChangesLockCode(e){return!!(this.getThemeConfiguration&&this.getThemeConfiguration.lock_changes_code==e)},formatDate(e,t={year:"numeric",month:"2-digit",day:"2-digit"}){return new Date(e).toLocaleDateString(void 0,t)},formatDateRange(e,t="-"){const o={year:"numeric",month:"2-digit",day:"2-digit"};let c={day:"2-digit"};const r=new Date(e[0]),n=new Date(e[1]);return r.getFullYear()==n.getFullYear()?r.getMonth()!=n.getMonth()&&(c.month=o.month):c=o,`${this.formatDate(e[0],c)}${t}${this.formatDate(e[1],o)}`},formatWeeklyScheduleDays(e){const t=["Mo","Di","Mi","Do","Fr","Sa","So"];let o=[];return e.forEach(function(c,r){c==!0&&o.push(t[r])}),o.join(",")}}});const ne={name:"NavItem",props:{to:{type:Object,required:!0}}};function oe(e,t,o,c,r,n){const l=u("i-nav-item");return f(),C(l,{to:o.to,"active-class":"-active",class:"_border _border-color:primary _text-align:center"},{default:i(()=>[$(e.$slots,"default",{},void 0,!0)]),_:3},8,["to"])}const re=b(ne,[["render",oe],["__scopeId","data-v-079bc5e0"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/NavItem.vue"]]),ie={name:"NavBar",components:{NavItem:re},data(){return{mqttStore:B()}}};function ae(e,t,o,c,r,n){const l=u("nav-item"),d=u("i-nav");return f(),C(d,{vertical:"",class:"_align-items:stretch"},{default:i(()=>[r.mqttStore.getDashBoardEnabled?(f(),C(l,{key:0,to:{name:"dash-board"}},{default:i(()=>[g(" Übersicht ")]),_:1})):v("v-if",!0),r.mqttStore.getChargePointsEnabled&&r.mqttStore.getChargePointIds.length>0?(f(),C(l,{key:1,to:{name:"charge-points"}},{default:i(()=>[g(" Ladepunkte ")]),_:1})):v("v-if",!0),r.mqttStore.getStateEnabled?(f(),C(l,{key:2,to:{name:"status"}},{default:i(()=>[g(" Status ")]),_:1})):v("v-if",!0)]),_:1})}const ce=b(ie,[["render",ae],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/NavBar.vue"]]);G.add(H,J,K,Z);const se={name:"LockNavItem",props:{},data(){return{mqttStore:B(),modalPinEntryVisible:!1,modalPinEntryColor:"warning",code:"",countdown:0,countdownInterval:void 0,events:["mousemove","touchmove","wheel"]}},components:{FontAwesomeIcon:Y},computed:{changesLocked:{get(){return this.mqttStore.settings.changesLocked},set(e){this.mqttStore.settings.changesLocked=e}},timer(){return Math.trunc(this.countdown/60).toString()+":"+(this.countdown%60).toString().padStart(2,"0")}},methods:{toggleChangesLock(){this.changesLocked?this.unlockChanges():this.lockChanges()},unlockChanges(){this.clearCode(),this.modalPinEntryVisible=!0},abortUnlockChanges(){this.modalPinEntryVisible=!1},checkUnlockCode(){this.mqttStore.checkChangesLockCode(this.code)?(this.modalPinEntryColor="success",setTimeout(()=>{this.changesLocked=!1,this.modalPinEntryVisible=!1,this.mqttStore.getDisplayStandby>0&&(this.countdown=this.mqttStore.getDisplayStandby,this.countdownInterval=setInterval(this.updateCountdown,1e3),this.events.forEach(e=>{document.addEventListener(e,this.handleDocumentEvent,{passive:!0})})),this.modalPinEntryColor="warning"},2e3)):(console.warn("check unlock code failed!"),this.modalPinEntryColor="danger",setTimeout(()=>{this.code="",this.modalPinEntryColor="warning"},2e3))},lockChanges(){this.changesLocked=!0,this.events.forEach(e=>{document.removeEventListener(e,this.handleDocumentEvent,{passive:!0})}),this.countdownInterval!==void 0&&(clearInterval(this.countdownInterval),this.countdownInterval=void 0)},addCodeDigit(e){this.code.length<8&&(this.code+=e)},removeCodeDigit(){this.code=this.code.slice(0,-1)},clearCode(){this.code=""},updateCountdown(){this.countdown-=1,this.countdown<1&&this.lockChanges()},handleDocumentEvent(){this.countdown=this.mqttStore.getDisplayStandby}},mounted(){this.changesLocked=!0}},le={key:0,class:"_padding-left:1"};function de(e,t,o,c,r,n){const l=u("FontAwesomeIcon"),d=u("i-button"),p=u("i-input"),s=u("i-column"),h=u("i-row"),_=u("i-container"),w=u("i-modal");return f(),k(V,null,[r.mqttStore.getLockChanges?(f(),C(d,{key:0,onClick:t[0]||(t[0]=m=>n.toggleChangesLock()),class:"_padding-left:0 _padding-right:0 _margin-bottom:1",size:"lg",block:"",color:this.changesLocked?"danger":"success"},{default:i(()=>[a(l,{"fixed-width":"",icon:this.changesLocked?["fas","fa-lock"]:["fas","fa-lock-open"],class:E(this.changesLocked?"_color:danger-80":"_color:success-80")},null,8,["icon","class"]),!n.changesLocked&&r.countdownInterval?(f(),k("span",le,P(n.timer),1)):v("v-if",!0)]),_:1},8,["color"])):v("v-if",!0),v(" modals "),(f(),C(x,{to:"body"},[a(w,{modelValue:r.modalPinEntryVisible,"onUpdate:modelValue":t[12]||(t[12]=m=>r.modalPinEntryVisible=m),color:r.modalPinEntryColor},{header:i(()=>[g(" Bitte den PIN zu Freigabe von Änderungen eingeben. ")]),footer:i(()=>[a(_,null,{default:i(()=>[a(h,null,{default:i(()=>[v(" charge point data on left side "),a(s,null,{default:i(()=>[a(d,{color:"danger",onClick:n.abortUnlockChanges},{default:i(()=>[g(" Zurück ")]),_:1},8,["onClick"])]),_:1}),a(s,{class:"_text-align:right"},{default:i(()=>[a(d,{color:"success",onClick:n.checkUnlockCode},{default:i(()=>[g(" OK ")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),default:i(()=>[a(_,null,{default:i(()=>[a(h,{center:"",class:"_padding-bottom:1"},{default:i(()=>[a(s,null,{default:i(()=>[a(p,{modelValue:r.code,"onUpdate:modelValue":t[1]||(t[1]=m=>r.code=m),placeholder:"****",readonly:"",size:"lg",type:"password",class:"_text-align:center"},null,8,["modelValue"])]),_:1})]),_:1}),a(h,{center:"",class:"_padding-bottom:1"},{default:i(()=>[a(s,{class:"_flex-grow:0"},{default:i(()=>[a(d,{size:"lg",class:"pinButton",onClick:t[2]||(t[2]=m=>n.addCodeDigit("1"))},{default:i(()=>[g("1")]),_:1})]),_:1}),a(s,{class:"_flex-grow:0"},{default:i(()=>[a(d,{size:"lg",class:"pinButton",onClick:t[3]||(t[3]=m=>n.addCodeDigit("2"))},{default:i(()=>[g("2")]),_:1})]),_:1}),a(s,{class:"_flex-grow:0"},{default:i(()=>[a(d,{size:"lg",class:"pinButton",onClick:t[4]||(t[4]=m=>n.addCodeDigit("3"))},{default:i(()=>[g("3")]),_:1})]),_:1})]),_:1}),a(h,{center:"",class:"_padding-bottom:1"},{default:i(()=>[a(s,{class:"_flex-grow:0"},{default:i(()=>[a(d,{size:"lg",class:"pinButton",onClick:t[5]||(t[5]=m=>n.addCodeDigit("4"))},{default:i(()=>[g("4")]),_:1})]),_:1}),a(s,{class:"_flex-grow:0"},{default:i(()=>[a(d,{size:"lg",class:"pinButton",onClick:t[6]||(t[6]=m=>n.addCodeDigit("5"))},{default:i(()=>[g("5")]),_:1})]),_:1}),a(s,{class:"_flex-grow:0"},{default:i(()=>[a(d,{size:"lg",class:"pinButton",onClick:t[7]||(t[7]=m=>n.addCodeDigit("6"))},{default:i(()=>[g("6")]),_:1})]),_:1})]),_:1}),a(h,{center:"",class:"_padding-bottom:1"},{default:i(()=>[a(s,{class:"_flex-grow:0"},{default:i(()=>[a(d,{size:"lg",class:"pinButton",onClick:t[8]||(t[8]=m=>n.addCodeDigit("7"))},{default:i(()=>[g("7")]),_:1})]),_:1}),a(s,{class:"_flex-grow:0"},{default:i(()=>[a(d,{size:"lg",class:"pinButton",onClick:t[9]||(t[9]=m=>n.addCodeDigit("8"))},{default:i(()=>[g("8")]),_:1})]),_:1}),a(s,{class:"_flex-grow:0"},{default:i(()=>[a(d,{size:"lg",class:"pinButton",onClick:t[10]||(t[10]=m=>n.addCodeDigit("9"))},{default:i(()=>[g("9")]),_:1})]),_:1})]),_:1}),a(h,{center:""},{default:i(()=>[a(s,{class:"_flex-grow:0"},{default:i(()=>[a(d,{size:"lg",class:"pinButton",onClick:n.clearCode},{default:i(()=>[a(l,{"fixed-width":"",icon:["fas","fa-eraser"]})]),_:1},8,["onClick"])]),_:1}),a(s,{class:"_flex-grow:0"},{default:i(()=>[a(d,{size:"lg",class:"pinButton",onClick:t[11]||(t[11]=m=>n.addCodeDigit("0"))},{default:i(()=>[g("0")]),_:1})]),_:1}),a(s,{class:"_flex-grow:0"},{default:i(()=>[a(d,{size:"lg",class:"pinButton",onClick:n.removeCodeDigit},{default:i(()=>[a(l,{"fixed-width":"",icon:["fas","fa-delete-left"]})]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue","color"])]))],64)}const ue=b(se,[["render",de],["__scopeId","data-v-24a0d24c"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/components/LockNavItem.vue"]]);const ge={name:"openwbDisplayCardsApp",components:{RouterView:q,DateTime:te,NavBar:ce,LockNavItem:ue},data(){return{client:{connected:!1},connection:{protocol:location.protocol=="https:"?"wss":"ws",host:location.hostname,port:parseInt(location.port)||(location.protocol=="https:"?443:80),endpoint:"/ws",connectTimeout:4e3,reconnectPeriod:4e3},mqttTopicsToSubscribe:["openWB/bat/config/configured","openWB/bat/get/power","openWB/bat/get/soc","openWB/chargepoint/+/config","openWB/chargepoint/+/get/charge_state","openWB/chargepoint/+/get/connected_vehicle/+","openWB/chargepoint/+/get/phases_in_use","openWB/chargepoint/+/get/plug_state","openWB/chargepoint/+/get/power","openWB/chargepoint/+/set/change_ev_permitted","openWB/chargepoint/+/set/current","openWB/chargepoint/+/set/manual_lock","openWB/chargepoint/+/set/log","openWB/chargepoint/get/power","openWB/counter/+/get/power","openWB/counter/get/hierarchy","openWB/counter/set/home_consumption","openWB/optional/int_display/theme","openWB/optional/int_display/standby","openWB/pv/config/configured","openWB/pv/get/power","openWB/system/current_branch","openWB/system/current_commit","openWB/system/ip_address","openWB/system/time","openWB/system/version","openWB/vehicle/+/get/fault_state","openWB/vehicle/+/name","openWB/vehicle/+/soc_module/config","openWB/vehicle/template/charge_template/#"],mqttStore:B(),chartInterval:""}},computed:{changesLocked(){return this.mqttStore.getLockChanges&&this.mqttStore.settings.changesLocked}},methods:{createConnection(){const{protocol:e,host:t,port:o,endpoint:c,...r}=this.connection,n=`${e}://${t}:${o}${c}`;console.debug("connecting to broker:",n);try{this.client=N.connect(n,r)}catch(l){console.error("mqtt.connect error",l)}this.client.on("connect",()=>{console.debug("Connection succeeded! ClientId: ",this.client.options.clientId)}),this.client.on("error",l=>{console.error("Connection failed",l)}),this.client.on("message",(l,d)=>{if(console.debug(`Received message "${d}" from topic "${l}"`),d.toString().length>0){let p;try{p=JSON.parse(d.toString())}catch{console.debug("Json parsing failed, fallback to string: ",l),p=d.toString()}this.mqttStore.addTopic(l,p)}else this.mqttStore.removeTopic(l)})},doSubscribe(e){e.forEach(t=>{this.mqttStore.initTopic(t)}),this.client.subscribe(e,{},t=>{if(t){console.error("Subscribe to topics error",t);return}})},doUnsubscribe(e){e.forEach(t=>{this.mqttStore.removeTopic(t)}),this.client.unsubscribe(e,t=>{t&&console.error("Unsubscribe error",t)})},doPublish(e,t,o=!0,c=2){console.debug("doPublish",e,t);let r={qos:c,retain:o};this.client.publish(e,JSON.stringify(t),r,n=>{n&&console.error("Publish error",n)})},sendTopicToBroker(e,t=void 0){let o=e.replace("openWB/","openWB/set/");t===void 0&&(t=this.mqttStore.topics[e]),this.doPublish(o,t)},sendCommand(e){this.doPublish("openWB/set/command/"+this.client.options.clientId+"/todo",e,!1)},sendSystemCommand(e,t={}){this.sendCommand({command:e,data:t})}},created(){this.createConnection()},mounted(){let e=window.location.search;e!=""&&(console.debug("search",e),new URLSearchParams(e).forEach((o,c)=>{this.mqttStore.updateSetting(c,parseInt(o))})),this.doSubscribe(this.mqttTopicsToSubscribe),this.chartInterval=setInterval(this.mqttStore.updateChartData,5e3)},beforeUnmount(){this.doUnsubscribe(this.mqttTopicsToSubscribe),clearInterval(this.chartInterval)}};function he(e,t,o,c,r,n){const l=u("DateTime"),d=u("i-column"),p=u("i-row"),s=u("i-container"),h=u("LockNavItem"),_=u("NavBar"),w=u("i-layout-aside"),m=u("RouterView"),D=u("i-layout-content"),L=u("i-layout");return f(),C(L,{vertical:""},{default:i(()=>[a(w,{class:"_position:fixed"},{default:i(()=>[a(s,{fluid:"",class:"_margin-bottom:1"},{default:i(()=>[a(p,{center:""},{default:i(()=>[a(d,null,{default:i(()=>[a(l)]),_:1})]),_:1})]),_:1}),a(h),a(_,{changesLocked:n.changesLocked},null,8,["changesLocked"])]),_:1}),a(D,null,{default:i(()=>[a(m,{changesLocked:n.changesLocked},null,8,["changesLocked"])]),_:1})]),_:1})}const pe=b(ge,[["render",he],["__scopeId","data-v-7a7a37b1"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/App.vue"]]),me="modulepreload",fe=function(e){return"/openWB/web/display/themes/cards/"+e},S={},W=function(t,o,c){if(!o||o.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(o.map(n=>{if(n=fe(n),n in S)return;S[n]=!0;const l=n.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(!!c)for(let h=r.length-1;h>=0;h--){const _=r[h];if(_.href===n&&(!l||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${n}"]${d}`))return;const s=document.createElement("link");if(s.rel=l?"stylesheet":me,l||(s.as="script",s.crossOrigin=""),s.href=n,document.head.appendChild(s),l)return new Promise((h,_)=>{s.addEventListener("load",h),s.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${n}`)))})})).then(()=>t())},_e="/openWB/web/display/themes/cards/openWB_logo_dark.png";const Ce={name:"WelcomeView",data(){return{mqttStore:B()}},computed:{firstView(){if(this.mqttStore.getThemeConfiguration){if(this.mqttStore.getThemeConfiguration.enable_dashboard_view)return"dash-board";if(this.mqttStore.getThemeConfiguration.enable_charge_points_view)return"charge-points";if(this.mqttStore.getThemeConfiguration.enable_status_view)return"status"}}},methods:{selectFirstRoute(){this.firstView?this.$router.push({name:this.firstView}):console.warn("no router view enabled, check your configuration!")}},mounted(){setTimeout(this.selectFirstRoute,3e3)}},ve=e=>(O("data-v-0939a750"),e=e(),M(),e),be=ve(()=>T("img",{class:"logo",src:_e},null,-1));function Be(e,t,o,c,r,n){const l=u("i-card"),d=u("i-column"),p=u("i-row"),s=u("i-container");return f(),C(s,null,{default:i(()=>[a(p,{center:"",middle:""},{default:i(()=>[a(d,null,{default:i(()=>[a(l,{color:"primary"},{header:i(()=>[g(" Cards Theme ")]),default:i(()=>[be]),_:1})]),_:1})]),_:1})]),_:1})}const ye=b(Ce,[["render",Be],["__scopeId","data-v-0939a750"],["__file","/var/www/html/openWB/packages/modules/display_themes/cards/source/src/views/WelcomeView.vue"]]),we=F({history:R("/openWB/web/display/themes/cards/"),routes:[{path:"/",name:"welcome",component:ye},{path:"/DashBoard",name:"dash-board",component:()=>W(()=>import("./DashBoardView-c8ce996d.js"),["assets/DashBoardView-c8ce996d.js","assets/DashBoardCard-c40659b7.js","assets/vendor-caccd77e.js","assets/vendor-inkline-7939cbce.js","assets/vendor-inkline-2831be27.css","assets/DashBoardCard-43796bd8.css","assets/ChargePointPlugBadge-033e3571.js","assets/vendor-fortawesome-63041232.js","assets/ChargePointPlugBadge-32e57fc4.css","assets/DashBoardView-a306eb3f.css"])},{path:"/ChargePoints",name:"charge-points",component:()=>W(()=>import("./ChargePointsView-1c732741.js"),["assets/ChargePointsView-1c732741.js","assets/DashBoardCard-c40659b7.js","assets/vendor-caccd77e.js","assets/vendor-inkline-7939cbce.js","assets/vendor-inkline-2831be27.css","assets/DashBoardCard-43796bd8.css","assets/ChargePointPlugBadge-033e3571.js","assets/vendor-fortawesome-63041232.js","assets/ChargePointPlugBadge-32e57fc4.css","assets/ChargePointsView-24c96ec7.css"])},{path:"/Status",name:"status",component:()=>W(()=>import("./StatusView-6e5db1af.js"),["assets/StatusView-6e5db1af.js","assets/vendor-fortawesome-63041232.js","assets/vendor-caccd77e.js","assets/vendor-inkline-7939cbce.js","assets/vendor-inkline-2831be27.css","assets/DashBoardCard-c40659b7.js","assets/DashBoardCard-43796bd8.css"])}]});const y=A(pe);y.use(z());y.use(we);y.use(U,{colorMode:"dark",components:j});y.mount("#app");export{B as u};
