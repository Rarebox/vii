import{j as e,W as f,r as g,Y as h,a as j}from"./app-B5DZan8_.js";import{G as w}from"./GuestLayout-D42MN27s.js";import{I as n}from"./InputError-ssaxixHn.js";import{I as l}from"./InputLabel-BGxIMyc6.js";import{P as b}from"./PrimaryButton-DTLATcsL.js";import{T as c}from"./TextInput-cQFAf6Ld.js";import"./index-pMu-FI_Y.js";import"./Dropdown-DTFbzGxC.js";import"./transition-BeSOYjsw.js";function v({className:r="",...a}){return e.jsx("input",{...a,type:"checkbox",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 "+r})}function D({status:r,canResetPassword:a}){const m=new URLSearchParams(window.location.search).get("ref"),{data:t,setData:o,post:d,processing:u,errors:i,reset:p}=f({email:"",password:"",remember:!1,ref:m||""});g.useEffect(()=>()=>{p("password")},[]);const x=s=>{s.preventDefault(),d(route("login"))};return e.jsxs(w,{children:[e.jsx(h,{title:"Log in"}),r&&e.jsx("div",{className:"mb-4 font-medium text-sm text-green-600",children:r}),e.jsxs("form",{onSubmit:x,children:[e.jsxs("div",{children:[e.jsx(l,{htmlFor:"email",value:"Email"}),e.jsx(c,{id:"email",type:"email",name:"email",value:t.email,className:"mt-1 block w-full",autoComplete:"username",isFocused:!0,onChange:s=>o("email",s.target.value)}),e.jsx(n,{message:i.email,className:"mt-2"})]}),e.jsxs("div",{className:"mt-4",children:[e.jsx(l,{htmlFor:"password",value:"Password"}),e.jsx(c,{id:"password",type:"password",name:"password",value:t.password,className:"mt-1 block w-full",autoComplete:"current-password",onChange:s=>o("password",s.target.value)}),e.jsx(n,{message:i.password,className:"mt-2"})]}),e.jsx("div",{className:"block mt-4",children:e.jsxs("label",{className:"flex items-center",children:[e.jsx(v,{name:"remember",checked:t.remember,onChange:s=>o("remember",s.target.checked)}),e.jsx("span",{className:"ms-2 text-sm text-gray-600",children:"Remember me"})]})}),e.jsxs("div",{className:"flex items-center justify-end mt-4",children:[a&&e.jsx(j,{href:route("password.request"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Forgot your password?"}),e.jsx(b,{className:"ms-4",disabled:u,children:"Log in"})]})]})]})}export{D as default};
