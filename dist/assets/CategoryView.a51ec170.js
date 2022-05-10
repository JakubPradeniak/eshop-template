import{a as m}from"./index.becf6c0c.js";import{P}from"./ProductThumb.ad486018.js";import{_ as v,r as p,o as i,c as n,a as u,g as d,F as _,d as h,b as y,w as k,h as S,f as C,t as f,e as b}from"./index.5bbd9b21.js";const $={name:"CategoriesSidebar",props:{categories:Array,selected:Object},data(){return{mobileCategoriesOpened:!1}},methods:{toggleMobileCategories(){this.mobileCategoriesOpened=!this.mobileCategoriesOpened}}},w={class:"categories-list"},x={key:0,class:"categories-list categories-list--sub"};function q(s,e,a,l,r,o){const g=p("RouterLink");return i(),n(_,null,[u("div",{onClick:e[0]||(e[0]=(...t)=>o.toggleMobileCategories&&o.toggleMobileCategories(...t)),class:"categories-sidebar-toggle"}," Show categories "),u("div",{onClick:e[1]||(e[1]=(...t)=>o.toggleMobileCategories&&o.toggleMobileCategories(...t)),class:d([{"categories-sidebar-overlay--active":r.mobileCategoriesOpened},"categories-sidebar-overlay"])},null,2),u("aside",{class:d([{"categories-sidebar--active":r.mobileCategoriesOpened},"categories-sidebar"])},[u("ul",w,[(i(!0),n(_,null,h(a.categories,t=>(i(),n("li",{key:t.uid},[y(g,{to:{name:"category",params:{slug:t.url_key}},class:d([{"categories-list__link--active":a.selected&&t.url_key===a.selected.url_key},"categories-list__link"])},{default:k(()=>[C(f(t.name),1)]),_:2},1032,["to","class"]),t.children_count!=="0"?(i(),n("ul",x,[(i(!0),n(_,null,h(t.children,c=>(i(),n("li",{key:c.uid},[y(g,{to:{name:"category",params:{slug:c.url_key}},class:d([{"categories-list__link--active":a.selected&&c.url_key===a.selected.url_key},"categories-list__link"])},{default:k(()=>[C(f(c.name),1)]),_:2},1032,["to","class"])]))),128))])):S("",!0)]))),128))])],2)],64)}var O=v($,[["render",q]]);const T={name:"PaginationWidget",props:{pagination:Object,pageRange:Number},data(){return{pagesArray:null}},methods:{randId(){return(Math.random()+1).toString(36).substring(7)}},mounted(){let s=[];const{current_page:e,total_pages:a}=this.pagination;e-this.pageRange>1&&s.push({id:this.randId(),page:1}),e>this.pageRange+2&&s.push({id:this.randId(),page:0});let l=e-this.pageRange<1?1:e-this.pageRange,r=e+this.pageRange>a?a:e+this.pageRange;for(;l<=r;)s.push({id:this.randId(),page:l}),l++;e<a-this.pageRange-1&&s.push({id:this.randId(),page:0}),e+this.pageRange<a&&s.push({id:this.randId(),page:a}),this.pagesArray=s}},I={class:"pagination"},V={key:0,class:"pagination__spacer"};function M(s,e,a,l,r,o){const g=p("RouterLink");return i(),n("ul",I,[(i(!0),n(_,null,h(r.pagesArray,t=>(i(),n("li",{key:t.id},[t.page===0?(i(),n("span",V,"...")):(i(),b(g,{key:1,to:{name:"category",params:{page:t.page}},class:d([{"pagination__link--active":t.page===a.pagination.current_page},"pagination__link"])},{default:k(()=>[C(f(t.page),1)]),_:2},1032,["to","class"]))]))),128))])}var L=v(T,[["render",M]]);const N={name:"HomeView",components:{ProductThumb:P,CategoriesSidebar:O,PaginationWidget:L},data(){return{currentCategorySlug:null,currentCategory:null,categories:null,products:null,pagination:null}},methods:{async fetchData(){this.currentCategorySlug=this.$route.params.slug;const s="/graphql",e={"Content-Type":"application/json"},a=await m({url:s,method:"POST",headers:e,data:{query:`query {
            categories {
              items {
                children {
                  uid
                  name
                  url_key
                  children_count
                  children {
                    uid
                    name
                    url_key
                  }
                }
              }
            }
          }
          `}});this.categories=a.data.data.categories.items[0].children;const l=await m({url:s,method:"POST",headers:e,data:{query:`query ($key: String) {
            categories (
              filters: {url_key: {eq: $key}}
            )
            {
              items {
                uid
                name
                url_key
              }
            }
          }`,variables:{key:this.currentCategorySlug}}});this.currentCategory=l.data.data.categories.items[0];const r=this.$route.params.page?this.$route.params.page:1,o=await m({url:s,method:"POST",headers:e,data:{query:`query ($category: String, $page: Int) {
            products (
              filter: {category_uid: {eq: $category}},
              pageSize: 12,
              currentPage: $page
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
              page_info {
                current_page
                total_pages
              }
            }
          }`,variables:{category:this.currentCategory.uid,page:r}}});this.products=o.data.data.products.items,this.pagination=o.data.data.products.page_info}},created(){this.fetchData(),this.$watch(()=>this.$route.params,()=>{this.fetchData()})}},W={class:"category-listing"},A={class:"product-grid"};function B(s,e,a,l,r,o){const g=p("CategoriesSidebar"),t=p("ProductThumb"),c=p("PaginationWidget");return i(),n("div",W,[y(g,{categories:r.categories,selected:r.currentCategory},null,8,["categories","selected"]),u("div",A,[(i(!0),n(_,null,h(r.products,R=>(i(),b(t,{key:R.uid,product:R},null,8,["product"]))),128)),r.pagination?(i(),b(c,{key:0,pagination:r.pagination,pageRange:"3"},null,8,["pagination"])):S("",!0)])])}var F=v(N,[["render",B]]);export{F as default};
