import{W as C,r,j as e,Y as k,a as I}from"./app-B5DZan8_.js";import{I as m}from"./InputError-ssaxixHn.js";import{N as y,l as T}from"./index-pMu-FI_Y.js";import{h as P}from"./heroImg-B-C0-dqk.js";import{I as S}from"./index-BMznVNU5.js";import{P as E}from"./PrimaryButton-DTLATcsL.js";import{T as R}from"./TextInput-cQFAf6Ld.js";import"./Dropdown-DTFbzGxC.js";import"./transition-BeSOYjsw.js";const G="_container_mslb6_1",M="_formContainer_mslb6_25",B="_heroImgContainer_mslb6_31",F="_headContainer_mslb6_55",L="_logo_mslb6_69",z="_titleContainer_mslb6_77",A="_title_mslb6_77",D="_subTitle_mslb6_109",K="_form_mslb6_25",Y="_heroImg_mslb6_31",$="_submitBtn_mslb6_141",W="_registerText_mslb6_183",Z="_link_mslb6_199",H="_footerContainer_mslb6_211",U="_footerText_mslb6_219",V="_check_container_mslb6_231",q="_ckeckboxInput_mslb6_241",J="_formGroup_mslb6_277",O="_label_mslb6_291",Q="_input_mslb6_305",X="_info_mslb6_337",ee="_passwordContainer_mslb6_349",se="_passwordToggle_mslb6_361",s={container:G,formContainer:M,heroImgContainer:B,headContainer:F,logo:L,titleContainer:z,title:A,subTitle:D,form:K,heroImg:Y,submitBtn:$,registerText:W,link:Z,footerContainer:H,footerText:U,check_container:V,ckeckboxInput:q,formGroup:J,label:O,input:Q,info:X,passwordContainer:ee,passwordToggle:se};function xe({status:o,canResetPassword:te}){const d=new URLSearchParams(window.location.search).get("ref"),{data:u,setData:a,post:h,processing:f,errors:l,reset:p}=C({email:"",password:"",remember:!1,ref:d||"",checked:!0}),[i,_]=r.useState(!1),[c,x]=r.useState(!1),[b,g]=r.useState(null),n=r.useRef(null);r.useEffect(()=>()=>{p("password")},[]);const j=t=>{t.preventDefault(),h(route("login"),{preserveScroll:!0,onError:v=>{console.log(v)},onSuccess:()=>{console.log("success")}})},w=t=>{t.preventDefault(),h(route("password.email"))};r.useEffect(()=>{c&&n.current?n.current.style.overflowY="auto":n.current&&(n.current.style.overflowY="hidden")},[c,n.current]);const N=()=>{x(!0),g(e.jsxs(e.Fragment,{children:[e.jsx("div",{children:e.jsx(S,{className:"flex float-end cursor-pointer h-6 w-6 text-[#ca9b31] ",onClick:()=>x(!1)})}),e.jsx("div",{className:"flex flex-col justify-center items-center h-full p-8",children:e.jsxs("div",{className:"",children:[e.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"Passwort vergessen? Kein Problem. Geben Sie uns einfach Ihre E-Mail-Adresse an und wir senden Ihnen einen Link zum Zurücksetzen des Passworts, mit dem Sie ein neues auswählen können."}),o&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:o}),e.jsxs("form",{onSubmit:w,children:[e.jsx(R,{id:"email",type:"email",name:"email",value:u.email,className:"mt-1 block w-full",isFocused:!0,onChange:t=>a("email",t.target.value)}),e.jsx(m,{message:l.email,className:"mt-2"}),e.jsx("div",{className:"flex items-center justify-center mt-6 ",children:e.jsx(E,{disabled:f,children:"Link senden"})})]})]})})]}))};return e.jsxs(e.Fragment,{children:[e.jsx(y,{user:!1}),e.jsx(k,{title:"Log in"}),e.jsxs("div",{className:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",children:[o&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:o}),e.jsxs("div",{className:s.container,children:[e.jsxs("div",{children:[e.jsxs("div",{className:s.formContainer,children:[e.jsxs("div",{className:s.headContainer,children:[e.jsx("img",{src:T,alt:"logo",className:s.logo}),e.jsxs("div",{className:s.titleContainer,children:[e.jsx("h3",{className:s.title,children:"Anmelden bei Ihrem Konto"}),e.jsx("p",{className:s.subTitle,children:"Willkommen zurück! Bitte geben Sie Ihre details ein."})]})]}),e.jsxs("form",{className:s.form,onSubmit:j,children:[e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{htmlFor:"email",className:s.label,children:"E-mail*"}),e.jsx("input",{type:"email",name:"email",id:"email",className:s.input,placeholder:"Ihre E-Mail eingeben",onChange:t=>a("email",t.target.value)})]}),e.jsx(m,{message:l.email}),e.jsxs("div",{className:s.formGroup,children:[e.jsx("label",{htmlFor:"password",className:s.label,children:"Passwort*"}),e.jsxs("div",{className:s.passwordContainer,children:[e.jsx("input",{type:i?"text":"password",name:"password",id:"password",className:s.input,placeholder:"••••••••",onChange:t=>a("password",t.target.value)}),e.jsx("span",{className:s.passwordToggle,onClick:()=>_(!i),children:i?"🙈":"👁️"})]}),e.jsx("span",{className:s.info,children:"Muss mindestens 8 Zeichen haben."})]}),e.jsx(m,{message:l.password}),e.jsx("button",{type:"submit",className:s.submitBtn,children:"Anmelden"}),e.jsxs("p",{className:s.registerText,children:["Sie haben noch kein Konto?"," ",e.jsx(I,{href:"/register",className:s.link,children:"Registieren"})]}),e.jsx("p",{style:{color:"rgba(212, 170, 44, 1)"},className:`${s.forgetPasswordText} flex justify-center cursor-pointer text-sm `,onClick:N,children:"Passwort vergessen?"})]})]}),e.jsx("div",{className:s.footerContainer,children:e.jsx("p",{className:s.footerText,children:"© 2016 - 2024 VIP GmbH. All Rights Reserved."})})]}),e.jsx("div",{className:s.heroImgContainer,children:e.jsx("img",{src:P,alt:"",className:s.heroImg})})]}),c&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50",children:e.jsx("div",{ref:n,className:"bg-white rounded-lg shadow-2xl p-8 w-11/12 md:w-4/12 h-[400px] md:h-[300px] max-h-screen overflow-y-auto",children:b})})]})]})}export{xe as default};
