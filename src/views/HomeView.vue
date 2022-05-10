<script>
import axios from "axios"

import FeaturedCategories from "../components/FeaturedCategories.vue"
import FeaturedProducts from "../components/FeaturedProducts.vue"

export default {
  name: "HomeView",
  components: {
    FeaturedCategories,
    FeaturedProducts
  },
  data() {
    return {
      categories: null,
      products: null,
    }
  },
  created() {
    /**
     * Call API to fetch categories data
     */
    const endPoint = "/graphql"

    const headers = {
      "Content-Type": "application/json",
    }

    // Categories
    axios({
      url: endPoint,
      method: "POST",
      headers: headers,
      data: {
        query: `query {
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
        `
      },
    })
    .then(response => {
      this.categories = response.data.data.categories.items
    })
    .catch(err => console.log(err))

    // Products
    axios({
      url: endPoint,
      method: "POST",
      headers: headers,
      data: {
        query: `query {
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
        `
      },
    })
    .then(response => {
      this.products = response.data.data.products.items
    })
    .catch(err => console.log(err))
  }
}
</script>

<template>
  <div>
    <FeaturedCategories :categories="categories" />
    <h2 class="home-products-heading">Great finds under $50</h2>
    <FeaturedProducts :products="products" />
  </div>
</template>

<style>
.home-products-heading {
  text-align: center;
  font-size: 2.75rem;
  margin-top: 2.5rem;
}
</style>
