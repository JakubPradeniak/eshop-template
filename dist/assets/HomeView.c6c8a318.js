import{a as m}from"./index.becf6c0c.js";import{_,r as u,o as t,c as s,a as p,t as v,b as l,n as f,F as g,d as y,e as h}from"./index.5bbd9b21.js";import{P as $}from"./ProductThumb.ad486018.js";const P={name:"CategoryPanel",props:{category:Object}},x=p("div",{class:"category-panel__overlay"},null,-1),C={class:"category-panel__heading"};function F(o,n,e,i,c,d){const r=u("RouterLink");return t(),s("div",{class:"category-panel",style:f({"--url":`url(${e.category.image})`})},[x,p("h3",C,v(e.category.name),1),l(r,{to:{name:"category",params:{slug:e.category.url_path}},class:"category-panel__link"},null,8,["to"])],4)}var k=_(P,[["render",F]]);const b={name:"FeaturedCategories",props:{categories:Array},components:{CategoryPanel:k}},T={class:"category-box"};function S(o,n,e,i,c,d){const r=u("CategoryPanel");return t(),s("div",T,[(t(!0),s(g,null,y(e.categories,a=>(t(),h(r,{key:a.uid,category:a},null,8,["category"]))),128))])}var q=_(b,[["render",S]]);const V={name:"FeaturedProducts",props:{products:Array},components:{ProductThumb:$}},w={class:"product-box"};function B(o,n,e,i,c,d){const r=u("ProductThumb");return t(),s("div",w,[(t(!0),s(g,null,y(e.products,a=>(t(),h(r,{key:a.uid,product:a},null,8,["product"]))),128))])}var M=_(V,[["render",B]]);const j={name:"HomeView",components:{FeaturedCategories:q,FeaturedProducts:M},data(){return{categories:null,products:null}},created(){const o="/graphql",n={"Content-Type":"application/json"};m({url:o,method:"POST",headers:n,data:{query:`query {
          categories(
            filters: {
              category_uid: {in: [
                "MTg=",
                "Mjc=",
                "MzY=",
                "Mw=="
              ]
              }
            }
          ) {
            items {
              uid
              name
              image
              url_path
            }
          }
        }
        `}}).then(e=>{this.categories=e.data.data.categories.items}).catch(e=>console.log(e)),m({url:o,method:"POST",headers:n,data:{query:`query {
          products (
            filter: {price: {to: "50"}},
            pageSize: 6,
            sort: {price: DESC}
          ) {
            items {
              uid
              name
              thumbnail {
                url
              }
              url_key
              price_range {
                minimum_price {
                  regular_price {
                    currency
                    value
                  }
                }
              }
            }
          }
        }
        `}}).then(e=>{this.products=e.data.data.products.items}).catch(e=>console.log(e))}},z=p("h2",{class:"home-products-heading"},"Great finds under $50",-1);function H(o,n,e,i,c,d){const r=u("FeaturedCategories"),a=u("FeaturedProducts");return t(),s("div",null,[l(r,{categories:c.categories},null,8,["categories"]),z,l(a,{products:c.products},null,8,["products"])])}var D=_(j,[["render",H]]);export{D as default};
