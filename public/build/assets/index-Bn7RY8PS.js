import{j as s,a as c}from"./app-BadaPud8.js";import{p as r}from"./profile-Dcl-SGZY.js";import{c as n,r as l}from"./rightArrowIcon-C81Ux1V2.js";import{N as o,f as t}from"./index-0FJAL4J5.js";import"./Dropdown-BawTi_Ww.js";import"./transition-qS0iyqt7.js";const d="_container_1s92x_1",m="_title_1s92x_8",x="_visitContainer_1s92x_16",h="_row_1s92x_25",p="_profilePhoto_1s92x_32",j="_doctorInfo_1s92x_40",u="_info_1s92x_44",N="_doctorName_1s92x_50",g="_profession_1s92x_57",_="_groupContainer_1s92x_66",v="_group_1s92x_66",f="_groupTitle_1s92x_76",C="_groupDesc_1s92x_83",b="_iconContainer_1s92x_92",w="_link_1s92x_101",D="_linkIcon_1s92x_112",T="_btn_1s92x_117",k="_btnGroup_1s92x_130",e={container:d,title:m,visitContainer:x,row:h,profilePhoto:p,doctorInfo:j,info:u,doctorName:N,profession:g,groupContainer:_,group:v,groupTitle:f,groupDesc:C,iconContainer:b,link:w,linkIcon:D,btn:T,btnGroup:k},z=({auth:a,reservation:i,success:I})=>(console.log(i),s.jsxs(s.Fragment,{children:[s.jsx(o,{user:a.user}),s.jsx("div",{className:"min-h-screen bg-gray-100",children:s.jsxs("div",{className:e.container,children:[s.jsx("h4",{className:e.title,children:"Termindetails"}),s.jsxs("div",{className:e.visitContainer,children:[s.jsx("div",{className:e.row,children:s.jsxs("div",{className:e.doctorInfo,children:[s.jsx("img",{src:i.patient.profile_image?"/images/"+i.patient.profile_image:r,alt:"",className:e.profilePhoto}),s.jsx("div",{className:e.info,children:s.jsxs("h5",{className:e.doctorName,children:["Patient,",i.patient.name,i.patient.username]})})]})}),s.jsx("div",{className:e.row,children:s.jsxs("div",{className:e.groupContainer,children:[s.jsx("div",{className:e.iconContainer,children:s.jsx("img",{src:n,alt:""})}),s.jsx("div",{className:e.group,children:s.jsxs("h5",{className:e.groupTitle,children:[t(new Date(i.date))," ",i.hour,", ",new Date(i.date).toLocaleDateString("de-DE",{weekday:"long"})]})})]})}),s.jsx("div",{className:e.row,children:s.jsxs("div",{className:e.groupContainer,children:[s.jsx("div",{className:e.iconContainer,children:s.jsx("img",{src:n,alt:""})}),i.is_online&&s.jsxs("div",{className:e.group,children:[s.jsx("h5",{className:e.groupTitle,children:"Videosprechstunde Termin"}),s.jsx("p",{className:e.groupDesc,children:"15 min"})]}),!i.is_online&&s.jsxs("div",{className:e.group,children:[s.jsx("h5",{className:e.groupTitle,children:"Präsenztermin"}),s.jsx("p",{className:e.groupDesc,children:"60 min"})]})]})}),s.jsx("div",{className:e.row,children:s.jsxs("div",{className:e.groupContainer,children:[s.jsx("div",{className:e.iconContainer,children:s.jsx("img",{src:n,alt:""})}),s.jsxs("div",{className:e.group,children:[s.jsx("h5",{className:e.groupTitle,children:"Insurance Type"}),s.jsx("p",{className:e.groupDesc,children:i.insurance_type})]})]})}),s.jsx("div",{className:e.row,children:s.jsxs("div",{className:e.groupContainer,children:[s.jsx("div",{className:e.iconContainer,children:s.jsx("img",{src:n,alt:""})}),s.jsxs("div",{className:e.group,children:[s.jsx("h5",{className:e.groupTitle,children:"Insurance Policy Number"}),s.jsx("p",{className:e.groupDesc,children:i.insurance_policy_number})]})]})}),s.jsx("div",{className:e.row,children:s.jsxs("div",{className:e.groupContainer,children:[s.jsx("div",{className:e.iconContainer,children:s.jsx("img",{src:n,alt:""})}),s.jsxs("div",{className:e.group,children:[s.jsx("h5",{className:e.groupTitle,children:"Patientendaten"}),s.jsxs("p",{className:e.groupDesc,children:[i.patient.username," ",i.patient.name]}),s.jsx("p",{className:e.groupDesc,children:i.patient.email})]})]})}),s.jsx("div",{className:e.row,children:s.jsxs("div",{className:e.groupContainer,children:[s.jsx("div",{className:e.iconContainer,children:s.jsx("img",{src:n,alt:""})}),s.jsx("div",{className:e.group,children:s.jsx("h5",{className:e.groupTitle,children:"Wie bereitet man sich auf ein Online-Interview vor?"})}),s.jsx(c,{className:e.link,children:s.jsx("img",{src:l,className:e.linkIcon,alt:""})})]})}),i.status==="accepted"&&i.call?s.jsx("div",{className:e.row,children:s.jsxs("div",{className:e.groupContainer,children:[s.jsx("div",{className:e.iconContainer,children:s.jsx("img",{src:n,alt:""})}),s.jsx("div",{className:e.group,children:s.jsx("h5",{className:e.groupTitle,children:"Starten Sie die Videosprechstunde"})}),s.jsx("div",{className:e.btnGroup,children:s.jsx(c,{href:route("call",i.call.key),className:e.btn,children:"Starten"})})]})}):s.jsxs("div",{className:e.row,children:[s.jsxs("div",{className:e.groupContainer,children:[s.jsx("div",{className:e.iconContainer,children:s.jsx("img",{src:n,alt:""})}),s.jsx("div",{className:e.group,children:s.jsx("h5",{className:e.groupTitle,children:"Aktionen"})})]}),s.jsxs("div",{className:e.btnGroup,children:[s.jsx(c,{href:route("reservation.accept",i.key),className:e.btn,children:"Akzeptieren"}),s.jsx(c,{href:route("reservation.decline",i.key),className:e.btn,children:"Ablehnen"})]})]})]})]})})]}));export{z as default};
