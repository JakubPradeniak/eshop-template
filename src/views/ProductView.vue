<script>
import axios from "axios"

import ProductPage from "../components/ProductPage.vue"

export default {
  name: "HomeView",
  components: {
    ProductPage,
  },
  data() {
    return {
      product: null,
    }
  },
  methods: {
    async fetchData() {
      const endPoint = "/graphql"

			const headers = {
				"Content-Type": "application/json",
			}

      const productResponse = await axios({
				url: endPoint,
				method: "POST",
				headers: headers,
				data: {
					query: `query ($product: String) {
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
          }`,
					variables: {
						product: this.$route.params.slug,
					},
				},
			})
      this.product = productResponse.data.data.products.items[0]
    }
  },
  created() {
    this.fetchData()
  }
}
</script>

<template>
  <ProductPage v-if="product" :product="product" />
</template>

<style>
.home-products-heading {
  text-align: center;
  font-size: 2.75rem;
  margin-top: 2.5rem;
}
</style>
