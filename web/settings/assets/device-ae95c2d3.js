import{_ as u,p as t,k as l,l as p,A as n,L as c,u as _,q as f,x as m}from"./vendor-59c39d33.js";import"./vendor-sortablejs-1a35b5ad.js";const g={name:"DeviceSolarLog",emits:["update:configuration"],props:{configuration:{type:Object,required:!0},deviceId:{default:void 0}},methods:{updateConfiguration(o,e=void 0){this.$emit("update:configuration",{value:o,object:e})}}},v={class:"device-solar_log"},b={class:"small"};function h(o,e,a,x,w,s){const i=t("openwb-base-heading"),d=t("openwb-base-text-input");return l(),p("div",v,[n(i,null,{default:c(()=>[_(" Einstellungen für Solar-Log "),f("span",b,"(Modul: "+m(o.$options.name)+")",1)]),_:1}),n(d,{title:"IP oder Hostname",subtype:"host",required:"","model-value":a.configuration.ip_address,"onUpdate:modelValue":e[0]||(e[0]=r=>s.updateConfiguration(r,"configuration.ip_address"))},null,8,["model-value"])])}const V=u(g,[["render",h],["__file","/opt/openWB-dev/openwb-ui-settings/src/components/devices/solar_log/device.vue"]]);export{V as default};