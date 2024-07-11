import{j as e,Y as h,a as d,b as n}from"./app-B5DZan8_.js";import{A as m}from"./AdminLayout-BHM-UQcf.js";import"./Dropdown-DTFbzGxC.js";import"./transition-BeSOYjsw.js";function b({auth:l,reservations:t,team:i,employees:r}){const x=s=>{n.post("/admin/reservation/delete",{key:s}).then(a=>{console.log(a.data)})},c=s=>()=>{setData("id",s),post(route("admin.employee.delete"))};return e.jsxs(m,{user:l.user,header:e.jsx("h2",{className:"font-semibold text-xl text-gray-800 leading-tight",children:"Dashboard"}),children:[e.jsx(h,{title:"Dashboard"}),e.jsx("th",{children:i.name}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:"Employees"})}),e.jsx("div",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:e.jsxs("table",{className:"table-auto w-full",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2",children:"Name"}),e.jsx("th",{className:"px-4 py-2",children:"Email"}),e.jsx("th",{className:"px-4 py-2",children:"Actions"})]})}),e.jsx("tbody",{children:r.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"border px-4 py-2",children:s.name}),e.jsx("td",{className:"border px-4 py-2",children:s.email}),e.jsxs("td",{className:"border px-4 py-2",children:[e.jsx(d,{href:route("admin.employee.edit",s.uid),className:"text-blue-500 hover:text-blue-800",children:"Edit"}),e.jsx("button",{onClick:c(s.uid),className:"text-red-500 hover:text-red-800",children:"Delete"})]})]},s.uid))})]})})]})}),e.jsx("div",{className:"py-12",children:e.jsxs("div",{className:"max-w-7xl mx-auto sm:px-6 lg:px-8",children:[e.jsx("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e.jsx("div",{className:"p-6 text-gray-900",children:"Reservations"})}),e.jsxs("div",{className:"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"px-4 py-2",children:"Patient"}),e.jsx("th",{className:"px-4 py-2",children:"Doctor"}),e.jsx("th",{className:"px-4 py-2",children:"Date"}),e.jsx("th",{className:"px-4 py-2",children:"Time"}),e.jsx("th",{className:"px-4 py-2",children:"Actions"})]})}),e.jsx("tbody",{children:t.map(s=>e.jsxs("tr",{children:[e.jsx("td",{className:"border px-4 py-2",children:e.jsx(d,{href:`/admin/user/show/${s.patient.uid}`,children:s.patient.name})}),e.jsx("td",{className:"border px-4 py-2",children:e.jsx(d,{href:`/admin/user/show/${s.employee.uid}`,children:s.employee.name})}),e.jsx("td",{className:"border px-4 py-2",children:s.date}),e.jsx("td",{className:"border px-4 py-2",children:s.time}),e.jsx("td",{className:"border px-4 py-2",children:e.jsx("button",{onClick:a=>{x(s.key)},children:"Delete"})})]},s.key))})]})]})})]})}export{b as default};
