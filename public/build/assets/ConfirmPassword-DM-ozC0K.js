import{W as p,r as d,j as s,Y as l}from"./app-B5DZan8_.js";import{G as c}from"./GuestLayout-D42MN27s.js";import{I as u}from"./InputError-ssaxixHn.js";import{I as f}from"./InputLabel-BGxIMyc6.js";import{P as x}from"./PrimaryButton-DTLATcsL.js";import{T as w}from"./TextInput-cQFAf6Ld.js";import"./index-pMu-FI_Y.js";import"./Dropdown-DTFbzGxC.js";import"./transition-BeSOYjsw.js";function C(){const{data:e,setData:t,post:a,processing:o,errors:m,reset:i}=p({password:""});d.useEffect(()=>()=>{i("password")},[]);const n=r=>{r.preventDefault(),a(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(f,{htmlFor:"password",value:"Password"}),s.jsx(w,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>t("password",r.target.value)}),s.jsx(u,{message:m.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(x,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{C as default};
