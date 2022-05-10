import{a as _}from"./index.becf6c0c.js";import{_ as d,o as i,c as l,a as t,t as s,f as p,r as m,e as h,h as g}from"./index.5bbd9b21.js";const P={name:"ProductPage",props:{product:Object},methods:{clickPlaceholder(){window.alert("This part of app has to be implemented before deployment.")}}},y={class:"product"},f=["src","alt"],v={class:"product__text"},b={class:"product__name"},k={class:"product__add-to-cart"},x={class:"product__price"},w=p(" Buy \xA0 "),T=t("span",{class:"material-symbols-outlined"}," shopping_bag ",-1),V=[w,T],B=["innerHTML"];function q(n,r,e,u,c,o){return i(),l("div",y,[t("img",{src:e.product.thumbnail.url,alt:e.product.name,class:"product__image"},null,8,f),t("div",v,[t("h1",b,s(e.product.name),1),t("p",k,[t("span",x,s(e.product.price_range.minimum_price.regular_price.value)+" "+s(e.product.price_range.minimum_price.regular_price.currency),1),t("button",{onClick:r[0]||(r[0]=(...a)=>o.clickPlaceholder&&o.clickPlaceholder(...a)),class:"product__cart-button"},V)]),t("div",{innerHTML:e.product.description.html,class:"product__description"},null,8,B)])])}var C=d(P,[["render",q]]);const D={name:"HomeView",components:{ProductPage:C},data(){return{product:null}},methods:{async fetchData(){const e=await _({url:"/graphql",method:"POST",headers:{"Content-Type":"application/json"},data:{query:`query ($product: String) {
            products (
              filter: {url_key: {eq: $product}}
            ) {
              items {
                uid
                name
                description {
                  html
                }
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
          }`,variables:{product:this.$route.params.slug}}});this.product=e.data.data.products.items[0]}},created(){this.fetchData()}};function H(n,r,e,u,c,o){const a=m("ProductPage");return c.product?(i(),h(a,{key:0,product:c.product},null,8,["product"])):g("",!0)}var $=d(D,[["render",H]]);export{$ as default};
