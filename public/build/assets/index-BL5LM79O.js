import{W as j,r as o,j as e,Y as v}from"./app-BadaPud8.js";import"./Dropdown-BawTi_Ww.js";import{N as g}from"./index-0FJAL4J5.js";import{p as N}from"./profile-Dcl-SGZY.js";import{v as b}from"./videoIcon-D_xvkSVC.js";import{I as m}from"./InputError-AxFZEc37.js";import{M as t,B as y}from"./bootstrap.min-BluxyFww.js";import{F as I}from"./index-D6mjrUy9.js";import"./transition-qS0iyqt7.js";const C="_container_1cnxa_5",w="_visitContainer_1cnxa_13",B="_profilePhoto_1cnxa_22",G="_appointmentInfo_1cnxa_26",T="_doctorInfo_1cnxa_31",V="_appointmentType_1cnxa_49",k="_doctorName_1cnxa_61",E="_profession_1cnxa_68",F="_dateInfo_1cnxa_75",P="_date_1cnxa_75",S="_time_1cnxa_89",$="_btnGroup_1cnxa_96",M="_btn_1cnxa_96",R="_formContainer_1cnxa_125",D="_cancelBtn_1cnxa_130",H="_saveBtn_1cnxa_146",K="_titleContainer_1cnxa_168",z="_title_1cnxa_168",A="_info_1cnxa_43",O="_formTitle_1cnxa_198",W="_selectInput_1cnxa_243",Y="_formGroup_1cnxa_255",q="_label_1cnxa_262",J="_input_1cnxa_268",n={container:C,visitContainer:w,profilePhoto:B,appointmentInfo:G,doctorInfo:T,appointmentType:V,doctorName:k,profession:E,dateInfo:F,date:P,time:S,btnGroup:$,btn:M,formContainer:R,cancelBtn:D,saveBtn:H,titleContainer:K,title:z,info:A,formTitle:O,selectInput:W,formGroup:Y,label:q,input:J};function ce({success:p}){const{data:L,setData:r,post:x,processing:Q,errors:a,reset:U}=j({insurance_type:"legal",insurance_policy_number:"",employee_uid:"",date:"",hour:"",is_online:""}),[c,_]=o.useState(""),[d,f]=o.useState(""),[u,i]=o.useState(!1),l=()=>{i(!1),window.location.href="/visit/"+d},h=s=>{s.preventDefault(),x(route("reservation.store"))};return o.useEffect(()=>{p&&(_("Reservierung wurde erfolgreich erstellt."),f(reservation_key),i(!0))}),e.jsxs(e.Fragment,{children:[e.jsx(g,{}),e.jsx("div",{className:"bg-gray-100 h-full md:h-screen ",children:e.jsxs("div",{className:" flex md:flex-row flex-col  max-w-[1280px] p-6 mx-auto gap-6",children:[e.jsx(v,{title:"Dashboard"}),e.jsx("div",{className:"bg-[#ffffff] w-full md:w-[600px] h-full md:h-[200px]",children:e.jsxs("div",{className:`${n.appointmentInfo} flex flex-col gap-2 p-3  `,children:[e.jsxs("div",{className:`${n.doctorInfo} flex flex-col md:flex-row items-center gap-3 `,children:[e.jsx("img",{src:N,alt:"",className:n.profilePhoto}),e.jsxs("div",{className:"flex flex-col gap-2 ",children:[e.jsxs("h4",{className:n.appointmentType,children:[e.jsx("img",{src:b,alt:""}),"Videosprechstunde Termin"]}),e.jsx("h5",{className:n.doctorName,children:"İlknur Ertürk"}),e.jsx("h6",{className:n.profession})]})]}),e.jsxs("div",{className:`${n.dateInfo} flex md:flex-row sm:flex-col gap-2 items-center mt-3 justify-center md:justify-start  `,children:[e.jsx(I,{className:"text-[#c7982e] w-5 h-5"}),e.jsx("div",{children:e.jsx("div",{className:"font-medium flex  items-center text-lg",children:"2024-07-09 - 10:05"})})]})]})}),e.jsxs("div",{className:n.container,children:[e.jsxs("div",{className:n.titleContainer,children:[e.jsx("h4",{className:`${n.title} text-base md:text-lg`,children:"Versicherungsinformationen"}),e.jsx("p",{className:n.info,children:"Versicherungsnummer eingeben"})]}),e.jsxs("div",{className:n.formContainer,children:[e.jsxs("form",{children:[e.jsxs("div",{className:n.formGroup,children:[e.jsx("label",{htmlFor:"insurance_type",className:n.label,children:"Versicherungstyp"}),e.jsxs("select",{name:"insurance_type",id:"insurance_type",onChange:s=>r("insurance_type",s.target.value),className:n.selectInput,children:[e.jsx("option",{value:"legal",children:"Gesetzliche Versicherung"}),e.jsx("option",{value:"private",children:"Private Versicherung"})]}),e.jsx(m,{error:a.insurance_type})]}),e.jsxs("div",{className:n.formGroup,children:[e.jsx("label",{htmlFor:"insurance_policy_number",className:n.label,children:"Versicherungspolicenummer"}),e.jsx("input",{type:"text",id:"insurance_policy_number",name:"insurance_policy_number",onChange:s=>r("insurance_policy_number",s.target.value),className:n.input})]}),e.jsx(m,{error:a.insurance_policy_number})]}),e.jsx("div",{className:n.btnGroup,children:e.jsx("button",{className:n.saveBtn,onClick:s=>h(s),children:"Speichern"})})]})]})]})}),c&&e.jsxs(t,{show:u,onHide:l,children:[e.jsx(t.Header,{closeButton:!0,children:e.jsx(t.Title,{children:"Erfolg"})}),e.jsx(t.Body,{children:c}),e.jsx(t.Footer,{children:e.jsx(y,{variant:"secondary",onClick:l,children:"Ok"})})]})]})}export{ce as default};
