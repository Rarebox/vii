import{W as p,r as d,j as s,Y as l}from"./app-BadaPud8.js";import{G as c}from"./GuestLayout-UBUm0ZvY.js";import{I as u}from"./InputError-AxFZEc37.js";import{I as f}from"./InputLabel-lHyLwlts.js";import{P as x}from"./PrimaryButton-XnNSo4o9.js";import{T as w}from"./TextInput-rRPC6gxH.js";import"./index-0FJAL4J5.js";import"./Dropdown-BawTi_Ww.js";import"./transition-qS0iyqt7.js";function C(){const{data:e,setData:t,post:a,processing:o,errors:m,reset:i}=p({password:""});d.useEffect(()=>()=>{i("password")},[]);const n=r=>{r.preventDefault(),a(route("password.confirm"))};return s.jsxs(c,{children:[s.jsx(l,{title:"Confirm Password"}),s.jsx("div",{className:"mb-4 text-sm text-gray-600",children:"This is a secure area of the application. Please confirm your password before continuing."}),s.jsxs("form",{onSubmit:n,children:[s.jsxs("div",{className:"mt-4",children:[s.jsx(f,{htmlFor:"password",value:"Password"}),s.jsx(w,{id:"password",type:"password",name:"password",value:e.password,className:"mt-1 block w-full",isFocused:!0,onChange:r=>t("password",r.target.value)}),s.jsx(u,{message:m.password,className:"mt-2"})]}),s.jsx("div",{className:"flex items-center justify-end mt-4",children:s.jsx(x,{className:"ms-4",disabled:o,children:"Confirm"})})]})]})}export{C as default};
