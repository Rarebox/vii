import{W as t,j as e,a as o}from"./app-B5DZan8_.js";import{p as d}from"./profile-Dcl-SGZY.js";import{c as i}from"./calendarIcon-B8kX6hle.js";import{r as m}from"./rightArrowIcon-BVueKKEt.js";import{N as j}from"./index-pMu-FI_Y.js";import"./Dropdown-DTFbzGxC.js";import"./transition-BeSOYjsw.js";const p="_container_j9cgz_1",g="_title_j9cgz_15",h="_visitContainer_j9cgz_33",x="_row_j9cgz_51",u="_profilePhoto_j9cgz_65",N="_doctorInfo_j9cgz_81",_="_info_j9cgz_89",f="_doctorName_j9cgz_101",v="_profession_j9cgz_115",C="_groupContainer_j9cgz_133",z="_group_j9cgz_133",w="_groupTitle_j9cgz_153",b="_groupDesc_j9cgz_167",D="_iconContainer_j9cgz_185",k="_link_j9cgz_203",y="_linkIcon_j9cgz_225",I="_btnGroup_j9cgz_237",T="_btn_j9cgz_237",s={container:p,title:g,visitContainer:h,row:x,profilePhoto:u,doctorInfo:N,info:_,doctorName:f,profession:v,groupContainer:C,group:z,groupTitle:w,groupDesc:b,iconContainer:D,link:k,linkIcon:y,btnGroup:I,btn:T},K=({auth:r,reservation:n})=>{const{data:S,setData:G,post:a,processing:P,errors:E,reset:F}=t({key:n.key}),l=c=>{a(route("reservation.cancel"))};return e.jsxs(e.Fragment,{children:[e.jsx(j,{user:r.user}),e.jsx("div",{className:"min-h-screen bg-gray-100",children:e.jsxs("div",{className:s.container,children:[e.jsx("h4",{className:s.title,children:"Termindetails"}),e.jsxs("div",{className:s.visitContainer,children:[e.jsx("div",{className:s.row,children:e.jsxs("div",{className:s.doctorInfo,children:[e.jsx("img",{src:n.employee.profile_image?"/images/"+n.employee.profile_image:d,alt:"",className:s.profilePhoto}),e.jsxs("div",{className:s.info,children:[e.jsxs("h5",{className:s.doctorName,children:["Spezialist,",n.employee.name]}),e.jsx("h6",{className:s.profession,children:"Krankenpfleger"})]})]})}),e.jsx("div",{className:s.row,children:e.jsxs("div",{className:s.groupContainer,children:[e.jsx("div",{className:s.iconContainer,children:e.jsx("img",{src:i,alt:""})}),e.jsx("div",{className:s.group,children:e.jsxs("h5",{className:s.groupTitle,children:[new Date(n.date).toLocaleDateString("de-DE",{month:"long",day:"2-digit"}),"-",new Date(n.date).getFullYear()," ",n.hour,", ",new Date(n.date).toLocaleDateString("de-DE",{weekday:"long"})]})})]})}),e.jsx("div",{className:s.row,children:e.jsxs("div",{className:s.groupContainer,children:[e.jsx("div",{className:s.iconContainer,children:e.jsx("img",{src:i,alt:""})}),e.jsxs("div",{className:s.group,children:[e.jsx("h5",{className:s.groupTitle,children:"Videosprechstunde Termin"}),e.jsx("p",{className:s.groupDesc,children:"60 min"})]})]})}),e.jsx("div",{className:s.row,children:e.jsxs("div",{className:s.groupContainer,children:[e.jsx("div",{className:s.iconContainer,children:e.jsx("img",{src:i,alt:""})}),e.jsxs("div",{className:s.group,children:[e.jsx("h5",{className:s.groupTitle,children:"Behandelte Gruppe"}),e.jsx("p",{className:s.groupDesc,children:"NEIN"})]})]})}),e.jsx("div",{className:s.row,children:e.jsxs("div",{className:s.groupContainer,children:[e.jsx("div",{className:s.iconContainer,children:e.jsx("img",{src:i,alt:""})}),e.jsx("div",{className:s.group,children:e.jsx("h5",{className:s.groupTitle,children:"Wie bereitet man sich auf ein Online-Interview vor?"})}),e.jsx(o,{className:s.link,children:e.jsx("img",{src:m,className:s.linkIcon,alt:""})})]})}),n.status==="accepted"&&n.call?e.jsxs("div",{className:s.row,children:[e.jsxs("div",{className:s.groupContainer,children:[e.jsx("div",{className:s.iconContainer,children:e.jsx("img",{src:i,alt:""})}),e.jsx("div",{className:s.group,children:e.jsx("h5",{className:s.groupTitle,children:"Starten Sie die Videosprechstunde"})})]}),e.jsx("div",{className:s.btnGroup,children:e.jsx(o,{href:route("call",n.call.key),className:s.btn,children:"Starten"})})]}):e.jsx(e.Fragment,{}),e.jsx("div",{className:s.row,children:e.jsxs("div",{className:s.groupContainer,children:[e.jsx("div",{className:s.iconContainer,children:e.jsx("img",{src:i,alt:""})}),e.jsx("div",{className:s.group,children:e.jsx("h5",{className:s.groupTitle,children:"Do you need to cancel the Appointment?"})}),e.jsx("form",{className:`${s.btnGroup} flex items-center justify-between gap-6`,onSubmit:c=>{c.preventDefault(),l(n.key)},children:e.jsx("button",{className:s.btn,children:"Stornieren"})})]})})]})]})})]})};export{K as default};
