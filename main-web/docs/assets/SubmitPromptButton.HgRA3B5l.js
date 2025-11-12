import{j as o}from"./jsx-runtime.D3GSbgeI.js";import{B as u}from"./button.DLufLqry.js";import{u as p}from"./EngagementMeter.B4KrqRE5.js";import{c as i}from"./createLucideIcon.CJ67VFfW.js";import{E as c}from"./external-link.BigcEWhC.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=i("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);function x({variant:t="default",size:r="default",className:s="",showIcon:a=!0,text:e="Submit Your Prompt"}){const m=p(),n=()=>{m.capture("submit_prompt_clicked",{button_variant:t,button_size:r,button_text:e,source_page:window.location.pathname}),window.open("https://tally.so/r/m6BbEN","_blank","noopener,noreferrer")};return o.jsxs(u,{onClick:n,variant:t,size:r,className:`${t==="default"?"dc-button-primary":""} ${s}`,title:"Submit your prompt via our form",children:[a&&o.jsx(l,{className:"h-4 w-4 mr-2"}),e,o.jsx(c,{className:"h-3 w-3 ml-1.5 opacity-70"})]})}export{x as S};
