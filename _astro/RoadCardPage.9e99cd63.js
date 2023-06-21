import{h as g,p as b}from"./hooks.module.a845df0c.js";import{a as v,T as N,d as k}from"./jwt.f0e0aa9c.js";import{a as C}from"./http.20668c64.js";import{p as S}from"./page.20ef1caf.js";import{o as e}from"./jsxRuntime.module.8b00cb04.js";import{k as T}from"./preact.module.f1575aff.js";function y(){const[r,t]=g(!1),l=s=>{navigator.clipboard.writeText(s).then(),t(!0)};return b(()=>{let s;return r&&(s=setTimeout(()=>{t(!1)},2e3)),()=>clearTimeout(s)},[r]),{isCopied:r,copyText:l}}function R(){const r=v.get(N);return r?k(r):null}const w="/_astro/copy.bb4dc091.svg";function p(r){const{text:t,isDisabled:l,isSelected:s,onClick:n}=r;return e("button",{className:`rounded-md border p-1 px-2 text-sm ${s?" border-gray-500 bg-gray-300 ":""} ${l?" cursor-not-allowed opacity-40 ":" cursor-pointer "}`,onClick:n,children:t})}function $(r){const{selectedRoadmaps:t,setSelectedRoadmaps:l}=r,[s,n]=g(),c=async()=>{const{response:a,error:o}=await C("https://api.roadmap.sh/v1-get-user-all-progress");o||!a||n(a)};b(()=>{c().finally(()=>{S.set("")})},[]);const d=t.length<4,i=s?.filter(a=>a.resourceType==="roadmap")||[];return e("div",{className:"flex flex-wrap gap-1",children:[i?.length===0&&e("p",{className:"text-sm text-gray-400 italic",children:"No progress tracked so far."}),i?.map(a=>{const o=t.includes(a.resourceId),h=o||d;return e(p,{text:a.resourceTitle,isDisabled:!h,isSelected:o,onClick:()=>{o?l(t.filter(m=>m!==a.resourceId)):t.length<4&&l([...t,a.resourceId])}})})]})}function D(){return e("p",{className:"mt-3 rounded-md border p-2 text-sm w-full bg-yellow-100 border-yellow-400 text-yellow-900",children:["Add this badge to your"," ",e("a",{href:"https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme",target:"_blank",rel:"noopener noreferrer",className:"text-blue-600 underline hover:text-blue-800",children:"GitHub profile readme."})]})}async function I({url:r,name:t,extension:l="png",scale:s=1}){try{const c=await(await fetch(r)).text(),d=`data:image/svg+xml;base64,${window.btoa(c)}`,i=new Image;i.src=d,i.onload=()=>{const a=document.createElement("canvas");a.width=i.width*s,a.height=i.height*s,a.getContext("2d")?.drawImage(i,0,0,a.width,a.height);const h=a.toDataURL("image/png",1),m=document.createElement("a");m.href=h,m.download=`${t}.${l}`,m.click()}}catch{alert("Error downloading image")}}function u(r){const{step:t}=r;return e("span",{className:"flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gray-300 text-white",children:t})}function f(r){const{text:t,title:l}=r,{isCopied:s,copyText:n}=y();return e("div",{className:"flex w-full flex-grow flex-col overflow-hidden rounded border border-gray-300 bg-gray-50",children:[e("div",{className:"flex items-center justify-between gap-2 border-b border-gray-300 px-3 py-2",children:[e("span",{className:"text-xs uppercase leading-none text-gray-400",children:l}),e("button",{className:"flex items-center",onClick:()=>n(t),children:[s&&e("span",{className:"mr-1 text-xs leading-none text-gray-700",children:"Copied!"}),e("img",{src:w,alt:"Copy",className:"inline-block h-4 w-4"})]})]}),e("textarea",{className:"no-scrollbar block h-12 w-full overflow-x-auto whitespace-nowrap bg-gray-200/70 p-3 text-sm text-gray-900 focus:bg-gray-50 focus:outline-0",readOnly:!0,onClick:c=>{c.target.select(),n(c.target.value)},children:t})]})}function x(r){const{label:t}=r;return e("span",{className:"mb-3 flex items-center gap-2 text-sm leading-none text-gray-400",children:t})}function O(){const{isCopied:r,copyText:t}=y(),[l,s]=g([]),[n,c]=g("tall"),[d,i]=g("dark"),a=R();if(!a)return null;const o=new URL(`https://api.roadmap.sh/v1-badge/${n}/${a?.id}`);return o.searchParams.set("variant",d),l.length>0&&o.searchParams.set("roadmaps",l.join(",")),e(T,{children:[e("div",{className:"flex items-start gap-4 mx-0 sm:-mx-10 px-0 sm:px-10 border-b pt-2 pb-4",children:[e(u,{step:1}),e("div",{children:[e(x,{label:"Pick progress to show (Max. 4)"}),e("div",{className:"flex flex-wrap",children:e($,{selectedRoadmaps:l,setSelectedRoadmaps:s})})]})]}),e("div",{className:"flex items-start gap-4 mx-0 sm:-mx-10 px-0 sm:px-10 border-b py-4",children:[e(u,{step:2}),e("div",{children:[e(x,{label:"Select Mode (Dark vs Light)"}),e("div",{className:"flex gap-2",children:[e(p,{text:"Dark",isDisabled:!1,isSelected:d==="dark",onClick:()=>{i("dark")}}),e(p,{text:"Light",isDisabled:!1,isSelected:d==="light",onClick:()=>{i("light")}})]})]})]}),e("div",{className:"flex items-start gap-4 mx-0 sm:-mx-10 px-0 sm:px-10 border-b py-4",children:[e(u,{step:3}),e("div",{children:[e(x,{label:"Select Version"}),e("div",{className:"flex gap-2",children:[e(p,{text:"Tall",isDisabled:!1,isSelected:n==="tall",onClick:()=>{c("tall")}}),e(p,{text:"Wide",isDisabled:!1,isSelected:n==="wide",onClick:()=>{c("wide")}})]})]})]}),e("div",{className:"flex items-start gap-4 mx-0 sm:-mx-10 px-0 sm:px-10 border-b py-4",children:[e(u,{step:4}),e("div",{class:"flex-grow",children:[e(x,{label:"Share your #RoadCard with others"}),e("div",{className:"rounded-md border bg-gray-50 p-2 text-center",children:e("a",{href:o.toString(),target:"_blank",rel:"noopener noreferrer",className:`relative block hover:cursor-pointer ${n==="tall"?" max-w-[270px] ":" w-full "}`,children:e("img",{src:o.toString(),alt:"RoadCard"})})}),e("div",{className:"mt-3 grid grid-cols-2 gap-2",children:[e("button",{className:"flex items-center justify-center rounded border border-gray-300 p-1.5 px-2 text-sm font-medium",onClick:()=>I({url:o.toString(),name:"road-card",scale:4}),children:"Download"}),e("button",{disabled:r,className:"flex cursor-pointer items-center justify-center rounded border border-gray-300 p-1.5 px-2 text-sm font-medium disabled:bg-blue-50",onClick:()=>t(o.toString()),children:[e("img",{alt:"Copy",src:w,className:"mr-1"}),r?"Copied!":"Copy Link"]})]}),e("div",{className:"mt-3 flex flex-col gap-3",children:[e(f,{title:"HTML",text:`<a href="https://roadmap.sh"><img src="${o}" alt="roadmap.sh"/></a>`.trim()}),e(f,{title:"Markdown",text:`[![roadmap.sh](${o})](https://roadmap.sh)`.trim()})]}),e(D,{})]})]})]})}export{O as RoadCardPage};
