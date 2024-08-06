import{q as p,W as g,j as e,a as j}from"./app-BadaPud8.js";import{I as n}from"./InputError-AxFZEc37.js";import{I as m}from"./InputLabel-lHyLwlts.js";import{P as v}from"./PrimaryButton-XnNSo4o9.js";import{T as o}from"./TextInput-rRPC6gxH.js";import{q as _}from"./transition-qS0iyqt7.js";function w({mustVerifyEmail:l,status:d,className:u=""}){const s=p().props.auth.user,{data:t,setData:r,patch:c,errors:i,processing:x,recentlySuccessful:f}=g({name:s.name,middle_name:s.middle_name,surname:s.surname,date_of_birth:s.date_of_birth}),h=a=>{a.preventDefault(),c(route("profile.update"))};return e.jsxs("section",{className:u,children:[e.jsxs("header",{children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Profile Information"}),e.jsx("p",{className:"mt-1 text-sm text-gray-600",children:"Update your account's profile information and email address."})]}),e.jsxs("form",{onSubmit:h,className:"mt-6 space-y-6",children:[e.jsxs("div",{children:[e.jsx(m,{htmlFor:"name",value:"Name"}),e.jsx(o,{id:"name",className:"mt-1 block w-full",value:t.name,onChange:a=>r("name",a.target.value),required:!0,isFocused:!0,autoComplete:"name"}),e.jsx(n,{className:"mt-2",message:i.name})]}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"middle_name",value:"Middle Name"}),e.jsx(o,{id:"middle_name",className:"mt-1 block w-full",value:t.middle_name,onChange:a=>r("middle_name",a.target.value),required:!0,isFocused:!0,autoComplete:"middle_name"}),e.jsx(n,{className:"mt-2",message:i.middle_name})]}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"surname",value:"Surname"}),e.jsx(o,{id:"surname",className:"mt-1 block w-full",value:t.surname,onChange:a=>r("surname",a.target.value),required:!0,isFocused:!0,autoComplete:"surname"}),e.jsx(n,{className:"mt-2",message:i.surname})]}),e.jsxs("div",{children:[e.jsx(m,{htmlFor:"date_of_birth",value:"Training Completion Date"}),e.jsx("input",{id:"date_of_birth",type:"date",className:"mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",value:t.date_of_birth,onChange:a=>r("date_of_birth",a.target.value)}),e.jsx(n,{className:"mt-2",message:i.date_of_birth})]}),l&&s.email_verified_at===null&&e.jsxs("div",{children:[e.jsxs("p",{className:"text-sm mt-2 text-gray-800",children:["Your email address is unverified.",e.jsx(j,{href:route("verification.send"),method:"post",as:"button",className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Click here to re-send the verification email."})]}),d==="verification-link-sent"&&e.jsx("div",{className:"mt-2 font-medium text-sm text-green-600",children:"A new verification link has been sent to your email address."})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(v,{disabled:x,children:"Save"}),e.jsx(_,{show:f,enter:"transition ease-in-out",enterFrom:"opacity-0",leave:"transition ease-in-out",leaveTo:"opacity-0",children:e.jsx("p",{className:"text-sm text-gray-600",children:"Saved."})})]})]})]})}export{w as default};
