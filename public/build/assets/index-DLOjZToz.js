import{r,b as l,j as e,a as j}from"./app-BIEula0p.js";const u=()=>{const[n,a]=r.useState([]),[h,d]=r.useState(!0);r.useEffect(()=>{l.get("/api/forms").then(s=>{a(s.data),d(!1)}).catch(s=>{console.error("Error fetching forms:",s),d(!1)})},[]);const x=(s,c)=>{l.post(`/api/forms/${s}/update-status`,{status:c}).then(i=>{a(n.map(t=>t.id===s?{...t,status:c}:t))}).catch(i=>{console.error("Error updating form status:",i)})};return e.jsxs("div",{children:[e.jsx("h1",{children:"Forms"}),e.jsx(j,{href:"/admin/forms/create",className:"btn btn-primary",children:"Create New Form"}),h?e.jsx("p",{children:"Loading..."}):e.jsxs("table",{className:"table",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{children:"ID"}),e.jsx("th",{children:"First Name"}),e.jsx("th",{children:"Last Name"}),e.jsx("th",{children:"Email"}),e.jsx("th",{children:"Date"}),e.jsx("th",{children:"Time"}),e.jsx("th",{children:"Insurance Type"}),e.jsx("th",{children:"Insurance Policy Number"}),e.jsx("th",{children:"Status"}),e.jsx("th",{children:"Actions"})]})}),e.jsx("tbody",{children:n.map(s=>e.jsxs("tr",{children:[e.jsx("td",{children:s.id}),e.jsx("td",{children:s.firstName}),e.jsx("td",{children:s.lastName}),e.jsx("td",{children:s.email}),e.jsx("td",{children:s.date}),e.jsx("td",{children:s.time}),e.jsx("td",{children:s.insuranceType}),e.jsx("td",{children:s.insurancePolicyNumber}),e.jsx("td",{children:s.status}),e.jsx("td",{children:e.jsx("button",{className:"btn btn-success",onClick:()=>x(s.id,"closed"),children:"Close"})})]},s.id))})]})]})};export{u as default};