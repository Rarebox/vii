import{r as a,j as i}from"./app-B5DZan8_.js";function g({start_time:s,end_time:r}){const d="patientus-video",l=JSON.stringify({assetsPath:"/assets",sessionApiEndpoint:"/video1_api",appointment:{topic:"appointment-topic",startDateTime:s,endDateTime:r,participant:{id:"patient-id",firstName:"Jane",lastName:"Doe",gender:"f",email:"jane.doe@dummy.de",type:"patient",imageUrl:"path-to/patient-avatar-image-url.jpg"},otherParticipants:[{id:"doctor-id",title:"Dr.",firstName:"Max",lastName:"Mustermann",gender:"m",email:"max.mustermann@dummy.de",type:"doctor",imageUrl:"path-to/doctor-avatar-image-url.jpg",inviteUrl:"path-to/invite-url"}]},logoUrl:"/build/assets/Logo-CMgHb9Ha.png"}),[t,c]=a.useState(null);a.useEffect(()=>(setTimeout(async()=>{const e=document.querySelector(d);console.log(e),e&&(c(e),e.addEventListener("disconnected",n),e.addEventListener("canceled",o))},0),()=>{t&&(t.removeEventListener("disconnected",n),t.removeEventListener("canceled",o))}),[]);const n=()=>{console.log("user ended the call, do something")},o=()=>{console.log("user exits, do something")};return i.jsx("div",{children:i.jsx("patientus-video",{config:l})})}export{g as default};
