import{h as r,_ as R,p as j}from"./hooks.module.a845df0c.js";import{h as S,a as C}from"./http.20668c64.js";import{p as D}from"./page.20ef1caf.js";import{a as M,T}from"./jwt.f0e0aa9c.js";import{o as e}from"./jsxRuntime.module.8b00cb04.js";import"./preact.module.f1575aff.js";function F(i){return new Promise(l=>{const t=new Image;t.onload=()=>{l({width:t.width,height:t.height})},t.onerror=()=>{l({width:0,height:0})},t.src=URL.createObjectURL(i)})}async function $(i){const l=await F(i);return l.width>3e3||l.height>3e3?"Image dimensions are too big. Maximum 3000x3000 pixels.":l.width<100||l.height<100?"Image dimensions are too small. Minimum 100x100 pixels.":i.size>1024*1024?"Image size is too big. Maximum 1MB.":null}function z(i){const{avatarUrl:l}=i,[t,p]=r(null),[h,c]=r(""),[s,u]=r(!1),d=R(null),b=async m=>{c("");const n=m.target.files?.[0];if(!n)return;const o=await $(n);if(o){c(o);return}p(Object.assign(n,{preview:URL.createObjectURL(n)}))},x=async m=>{if(m.preventDefault(),c(""),u(!0),!t)return;const n=new FormData;n.append("name","avatar"),n.append("avatar",t);const o=await fetch("https://api.roadmap.sh/v1-upload-profile-picture",{method:"POST",body:n,credentials:"include"});if(o.ok){window.location.reload();return}const f=await o.json();c(f?.message||"Something went wrong"),u(!1),f.status===401&&(M.remove(T),window.location.reload())};return j(()=>()=>{t&&URL.revokeObjectURL(t.preview)},[t]),e("form",{onSubmit:x,encType:"multipart/form-data",className:"flex flex-col gap-2",children:[e("label",{htmlFor:"avatar",className:"text-sm leading-none text-slate-500",children:"Profile Picture"}),e("div",{className:"mb-2 mt-2 flex items-center gap-2",children:[e("label",{htmlFor:"avatar",title:"Change profile picture",className:"relative cursor-pointer",children:[e("div",{className:"relative block h-24 w-24 items-center overflow-hidden rounded-full",children:e("img",{className:"absolute inset-0 h-full w-full bg-gray-100 object-cover text-sm leading-8 text-red-700",src:t?.preview||l,alt:t?.name??"Error!",loading:"lazy",decoding:"async",onLoad:()=>t&&URL.revokeObjectURL(t.preview)})}),!t&&e("button",{type:"button",className:"absolute bottom-1 right-0 rounded bg-gray-600 px-2 py-1 text-xs leading-none text-gray-50 ring-2 ring-white",onClick:()=>{s||d.current?.click()},children:"Edit"})]}),e("input",{ref:d,id:"avatar",type:"file",name:"avatar",accept:"image/png, image/jpeg, image/jpg, image/pjpeg",className:"hidden",onChange:b}),t&&e("div",{className:"ml-5 flex items-center gap-2",children:[e("button",{type:"button",onClick:()=>{p(null),d.current?.value&&(d.current.value="")},className:"flex h-9 min-w-[96px] items-center justify-center rounded-md border border-red-300 bg-red-100 text-sm font-medium text-red-700 disabled:cursor-not-allowed disabled:opacity-60",disabled:s,children:"Cancel"}),e("button",{type:"submit",className:"flex h-9 min-w-[96px] items-center justify-center rounded-md border border-gray-300 text-sm font-medium text-black disabled:cursor-not-allowed disabled:opacity-60",disabled:s,children:s?"Uploading..":"Upload"})]})]}),h&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:h})]})}function B(){const[i,l]=r(""),[t,p]=r(""),[h,c]=r(""),[s,u]=r(""),[d,b]=r(""),[x,m]=r(""),[n,o]=r(""),[f,g]=r(!1),[k,N]=r(""),[I,L]=r(""),P=async a=>{a.preventDefault(),g(!0),N(""),L("");const{response:w,error:v}=await S("https://api.roadmap.sh/v1-update-profile",{name:i,github:s||void 0,linkedin:x||void 0,twitter:d||void 0,website:n||void 0});if(v||!w){g(!1),N(v?.message||"Something went wrong");return}await U(),L("Profile updated successfully")},U=async()=>{g(!0);const{error:a,response:w}=await C("https://api.roadmap.sh/v1-me");if(a||!w){g(!1),N(a?.message||"Something went wrong");return}const{name:v,email:E,links:y,avatar:O}=w;l(v),c(E),u(y?.github||""),m(y?.linkedin||""),b(y?.twitter||""),o(y?.website||""),p(O||""),g(!1)};return j(()=>{U().finally(()=>{D.set("")})},[]),e("div",{children:[e("div",{className:"mb-8 hidden md:block",children:[e("h2",{className:"text-3xl font-bold sm:text-4xl",children:"Profile"}),e("p",{className:"mt-2 text-gray-400",children:"Update your profile details below."})]}),e(z,{avatarUrl:t?`https://dodrc8eu8m09s.cloudfront.net/avatars/${t}`:"/images/default-avatar.png"}),e("form",{className:"mt-4 space-y-4",onSubmit:P,children:[e("div",{className:"flex w-full flex-col",children:[e("label",{for:"name",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Name"}),e("input",{type:"text",name:"name",id:"name",className:"mt-2 block w-full appearance-none rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,placeholder:"John Doe",value:i,onInput:a=>l(a.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"email",className:'text-sm leading-none text-slate-500 after:text-red-400 after:content-["*"]',children:"Email"}),e("input",{type:"email",name:"email",id:"email",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",required:!0,disabled:!0,placeholder:"john@example.com",value:h})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"github",className:"text-sm leading-none text-slate-500",children:"Github"}),e("input",{type:"text",name:"github",id:"github",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://github.com/username",value:s,onInput:a=>u(a.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"twitter",className:"text-sm leading-none text-slate-500",children:"Twitter"}),e("input",{type:"text",name:"twitter",id:"twitter",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://twitter.com/username",value:d,onInput:a=>b(a.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"linkedin",className:"text-sm leading-none text-slate-500",children:"LinkedIn"}),e("input",{type:"text",name:"linkedin",id:"linkedin",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://www.linkedin.com/in/username/",value:x,onInput:a=>m(a.target.value)})]}),e("div",{className:"flex w-full flex-col",children:[e("label",{for:"website",className:"text-sm leading-none text-slate-500",children:"Website"}),e("input",{type:"text",name:"website",id:"website",className:"mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 shadow-sm outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-black focus:ring-offset-1",placeholder:"https://example.com",value:n,onInput:a=>o(a.target.value)})]}),k&&e("p",{className:"mt-2 rounded-lg bg-red-100 p-2 text-red-700",children:k}),I&&e("p",{className:"mt-2 rounded-lg bg-green-100 p-2 text-green-700",children:I}),e("button",{type:"submit",disabled:f,className:"inline-flex w-full items-center justify-center rounded-lg bg-black p-2 py-3 text-sm font-medium text-white outline-none focus:ring-2 focus:ring-black focus:ring-offset-1 disabled:bg-gray-400",children:f?"Please wait...":"Continue"})]})]})}export{B as UpdateProfileForm};
