import{_}from"./nuxt-link.ad77f421.js";import{k as d,l as m,o as a,c as n,a as e,t as c,F as u,m as h,b as g,w as k}from"./entry.d4e64f46.js";const b={clas:"container"},f={style:{"margin-left":"10px"}},p={class:"featured-projects"},v=["src","alt"],D={__name:"FeaturedProjects",props:{blok:Object},setup(s){return(x,w)=>{const i=_,r=d("editable");return m((a(),n("div",b,[e("h1",f,c(s.blok.title),1),e("div",p,[(a(!0),n(u,null,h(s.blok.project,t=>(a(),n("div",{class:"project",key:t._uid},[g(i,{to:{name:"projects-slug",params:{slug:t.slug}}},{default:k(()=>{var o,l;return[e("img",{src:(o=t.content.image)==null?void 0:o.filename,alt:(l=t.content.image)==null?void 0:l.alt,style:{width:"100%"}},null,8,v),e("h3",null,c(t.content.name),1)]}),_:2},1032,["to"])]))),128))])])),[[r,s.blok]])}}};export{D as default};
