import{W as j,r as _,j as e,Y as v}from"./app-BadaPud8.js";import"./Dropdown-BawTi_Ww.js";import{N}from"./index-0FJAL4J5.js";import{p as b}from"./profile-Dcl-SGZY.js";import{I as p}from"./InputError-AxFZEc37.js";import{M as o,B as I}from"./bootstrap.min-BluxyFww.js";import"./transition-qS0iyqt7.js";const y="_container_1l4au_1",g="_visitContainer_1l4au_9",C="_profilePhoto_1l4au_18",B="_appointmentInfo_1l4au_22",G="_doctorInfo_1l4au_27",P="_info_1l4au_39",T="_appointmentType_1l4au_45",S="_doctorName_1l4au_57",k="_profession_1l4au_64",w="_dateInfo_1l4au_71",F="_date_1l4au_71",M="_time_1l4au_83",D="_btnGroup_1l4au_90",E="_btn_1l4au_90",H="_formContainer_1l4au_119",q="_cancelBtn_1l4au_124",L="_saveBtn_1l4au_140",O="_titleContainer_1l4au_161",Q="_title_1l4au_161",R="_formTitle_1l4au_191",V="_selectInput_1l4au_236",W="_formGroup_1l4au_248",Y="_label_1l4au_255",$="_input_1l4au_261",n={container:y,visitContainer:g,profilePhoto:C,appointmentInfo:B,doctorInfo:G,info:P,appointmentType:T,doctorName:S,profession:k,dateInfo:w,date:F,time:M,btnGroup:D,btn:E,formContainer:H,cancelBtn:q,saveBtn:L,titleContainer:O,title:Q,formTitle:R,selectInput:V,formGroup:W,label:Y,input:$};function te({auth:m,employee:t}){const{data:z,setData:a,post:d,processing:A,errors:r,reset:J}=j({insurance_type:"legal",insurance_policy_number:"",employee_uid:t.uid}),[i,f]=_.useState(""),[h,c]=_.useState(!1),l=()=>{c(!1),window.location.href="/"},x=s=>{s.preventDefault(),d(route("reservation.quick_store"),{onSuccess:u=>{console.log(u.props.flash.success),f(u.props.flash.success),c(!0)}})};return e.jsxs(e.Fragment,{children:[e.jsx(N,{user:m.user}),e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsx(v,{title:"Dashboard"}),e.jsx("div",{className:n.visitContainer,children:e.jsx("div",{className:n.container,children:e.jsx("div",{className:n.appointmentInfo,children:e.jsxs("div",{className:n.doctorInfo,children:[e.jsx("img",{src:t.profile_image?"/images/"+t.profile_image:b,alt:"",className:n.profilePhoto}),e.jsxs("div",{className:n.info,children:[e.jsx("h5",{className:n.doctorName,children:t.name}),t.profession?e.jsx("h6",{className:n.profession,children:t.profession}):""]})]})})})}),e.jsxs("div",{className:n.container,children:[e.jsxs("div",{className:n.titleContainer,children:[e.jsx("h4",{className:n.title,children:"Versicherungsinformationen"}),e.jsx("p",{className:n.info,children:"Put Insurance Policy Number"})]}),e.jsxs("div",{className:n.formContainer,children:[e.jsxs("form",{children:[e.jsxs("div",{className:n.formGroup,children:[e.jsx("label",{htmlFor:"insurance_type",className:n.label,children:"Insurance Type"}),e.jsxs("select",{name:"insurance_type",id:"insurance_type",onChange:s=>a("insurance_type",s.target.value),className:n.selectInput,children:[e.jsx("option",{value:"legal",children:"Legal Insurance"}),e.jsx("option",{value:"private",children:"Private Insurance"})]}),e.jsx(p,{error:r.insurance_type})]}),e.jsxs("div",{className:n.formGroup,children:[e.jsx("label",{htmlFor:"insurance_policy_number",className:n.label,children:"Insurance Policy Number"}),e.jsx("input",{type:"text",id:"insurance_policy_number",name:"insurance_policy_number",onChange:s=>a("insurance_policy_number",s.target.value),className:n.input})]}),e.jsx(p,{error:r.insurance_policy_number})]}),e.jsx("div",{className:n.btnGroup,children:e.jsx("button",{className:n.saveBtn,onClick:s=>x(s),children:"Speichern"})})]})]})]}),i&&e.jsxs(o,{show:h,onHide:l,children:[e.jsx(o.Header,{closeButton:!0,children:e.jsx(o.Title,{children:"Success"})}),e.jsx(o.Body,{children:i}),e.jsx(o.Footer,{children:e.jsx(I,{variant:"secondary",onClick:l,children:"Ok"})})]})]})}export{te as default};
