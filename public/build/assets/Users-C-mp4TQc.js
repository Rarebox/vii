import{W as x,j as e,Y as c,a}from"./app-B5DZan8_.js";import{A as m}from"./AdminLayout-BHM-UQcf.js";import"./Dropdown-DTFbzGxC.js";import"./transition-BeSOYjsw.js";function y({auth:r,users:t}){const{data:o,setData:l,post:d,processing:n,errors:h,reset:p}=x({uid:""}),i=s=>()=>{l("uid",s),d(route("admin.user.delete"))};return e.jsxs(m,{user:r.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Users"}),children:[e.jsx(c,{title:"Users"}),e.jsx("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:e.jsx(a,{href:route("admin.employee.create"),className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3",children:"Create Employee"})}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:"Users"})}),e.jsx("div",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2",children:"Name"}),e.jsx("th",{className:"px-4 py-2",children:"Email"}),e.jsx("th",{className:"px-4 py-2",children:"UserType"}),e.jsx("th",{className:"px-4 py-2",children:"Actions"})]})}),e.jsx("tbody",{children:t.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"border px-4 py-2",children:s.name}),e.jsx("td",{className:"border px-4 py-2",children:s.email}),e.jsx("td",{className:"border px-4 py-2",children:s.user_type}),e.jsxs("td",{className:"border px-4 py-2",children:[e.jsx(a,{href:route("admin.user.show",s.uid),className:"text-blue-500 hover:text-blue-800",children:"Show"}),e.jsx("button",{onClick:i(s.uid),className:"text-red-500 hover:text-red-800",children:"Delete"})]})]},s.uid))})]})})]})})]})}export{y as default};
