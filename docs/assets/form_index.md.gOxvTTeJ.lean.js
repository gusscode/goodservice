import{g as a,G as p}from"./chunks/GToggleDarkMode.RU7G7yM6.js";import{d as e,o as l,c as h,j as r,I as n,l as i,a as o,a2 as E}from"./chunks/framework.BSWk7bsz.js";const d=e({__name:"GoodDialogForm",setup(k){async function t(){const s=await a.form("Send your data",[{name:"name",label:"Name",type:"text"},{name:"lastName",label:"Last Name",type:"text"}],{messageMaxWidth:"200px",messageAlign:"center"});if(!s)return a.cancelled();a.success(JSON.stringify(s).toString())}return(s,m)=>(l(),h("button",{class:"gd-v-button",onClick:t},"Launch dialog Form"))}}),g=i("h1",{id:"form",tabindex:"-1"},[o("Form "),i("a",{class:"header-anchor",href:"#form","aria-label":'Permalink to "Form"'},"​")],-1),c=i("hr",null,null,-1),y=i("br",null,null,-1),u=E(`<div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">form</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Send your data&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    { name: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;lastName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, label: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Last Name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, type: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;text&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]);</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">result) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">cancelled</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">goodDialogs.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">success</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">JSON</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">stringify</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(result).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">toString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span></code></pre></div>`,1),C=JSON.parse('{"title":"Form","description":"","frontmatter":{},"headers":[],"relativePath":"form/index.md","filePath":"form/index.md"}'),F={name:"form/index.md"},B=e({...F,setup(k){return r(!1),(t,s)=>(l(),h("div",null,[g,c,n(p),y,n(d),u]))}});export{C as __pageData,B as default};
