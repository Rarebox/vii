import{r as t,W as x,j as s}from"./app-BIEula0p.js";import{I as n}from"./InputError-CIiaKQUz.js";import{I as i}from"./InputLabel-CNtEixf2.js";import{P as f}from"./PrimaryButton-CvhpiGD6.js";import{T as d}from"./TextInput-C-Wtrkxo.js";import{q as j}from"./transition-BLMPNg7n.js";function I({className:m=""}){const p=t.useRef();t.useRef();const{data:a,setData:r,errors:o,post:l,reset:h,processing:c,recentlySuccessful:u}=x({current_password:"",password:"",password_confirmation:""}),w=e=>{e.preventDefault(),l(route("password.update"))};return s.jsxs("section",{className:m,children:[s.jsxs("header",{children:[s.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Update Password"}),s.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Ensure your account is using a long, random password to stay secure."})]}),s.jsxs("form",{onSubmit:w,className:"mt-6 space-y-6",children:[s.jsxs("div",{children:[s.jsx(i,{htmlFor:"password",value:"New Password"}),s.jsx(d,{id:"password",ref:p,value:a.password,onChange:e=>r("password",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:o.password,className:"mt-2"})]}),s.jsxs("div",{children:[s.jsx(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),s.jsx(d,{id:"password_confirmation",value:a.password_confirmation,onChange:e=>r("password_confirmation",e.target.value),type:"password",className:"mt-1 block w-full",autoComplete:"new-password"}),s.jsx(n,{message:o.password_confirmation,className:"mt-2"})]}),s.jsxs("div",{className:"flex items-center gap-4",children:[s.jsx(f,{disabled:c,children:"Save"}),s.jsx(j,{show:u,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:s.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{I as default};
