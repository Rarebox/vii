import{r,j as g}from"./app-BIEula0p.js";function N({start_time:i,end_time:t,participant:e,otherPacticipant:s,topic:d,callKey:o}){console.log(i,t,e,s,d,o);const u="patientus-video",f={topic:d,startDateTime:i,endDateTime:t,participant:{id:e.uid,firstName:e.username,email:e.email,imageUrl:e.profile_image?"/images/"+e.profile_image:"/images/default.jpg"},otherParticipants:[{id:s.uid,firstName:s.username,email:s.email,imageUrl:s.profile_image?"/images/"+s.profile_image:"/images/default.jpg",inviteUrl:"/call/"+o}]},c={assetsPath:"/assets",sessionApiEndpoint:"/api/call/"+o,appointment:f,logoUrl:"/build/assets/Logo-CMgHb9Ha.png"},E=JSON.stringify(c),[l,v]=r.useState(null);r.useEffect(()=>(setTimeout(async()=>{const n=document.querySelector(u);console.log(n),n&&(v(n),n.addEventListener("disconnected",a),n.addEventListener("canceled",m))},0),()=>{l&&(l.removeEventListener("disconnected",a),l.removeEventListener("canceled",m))}),[]);const a=()=>{console.log("user ended the call, do something")},m=()=>{console.log("user exits, do something")};return g.jsx("div",{children:g.jsx("patientus-video",{config:E})})}export{N as default};
