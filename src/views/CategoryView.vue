<script>
import axios from "axios"

import ProductThumb from "../components/ProductThumb.vue"
import CategoriesSidebar from "../components/CategoriesSidebar.vue"
import PaginationWidget from "../components/PaginationWidget.vue"

export default {
	name: "HomeView",
	components: {
		ProductThumb,
		CategoriesSidebar,
		PaginationWidget,
	},
	data() {
		return {
			currentCategorySlug: null,
			currentCategory: null,
			categories: null,
			products: null,
			pagination: null,
		}
	},
	methods: {
		async fetchData() {
			// Save current slug
			this.currentCategorySlug = this.$route.params.slug

			/**
			 * Call API to fetch categories data
			 *
			 * This is where the real fun starts - I had some problems with fetching data properly
			 * The code itself is untidy, but I'm not sure how to do it better - first time with vue and graphql :)
			 */
			const endPoint = "/graphql"

			const headers = {
				"Content-Type": "application/json",
			}

			// Categories
			const categoriesResponse = await axios({
				url: endPoint,
				method: "POST",
				headers: headers,
				data: {
					query: `query {
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
          `,
				},
			})

			this.categories =
				categoriesResponse.data.data.categories.items[0].children

			// Get current category
			const currentCategoryResponse = await axios({
				url: endPoint,
				method: "POST",
				headers: headers,
				data: {
					query: `query ($key: String) {
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
          }`,
					variables: {
						key: this.currentCategorySlug,
					},
				},
			})

			this.currentCategory =
				currentCategoryResponse.data.data.categories.items[0]

			const queryPage = this.$route.params.page
				? this.$route.params.page
				: 1

			const productsResponse = await axios({
				url: endPoint,
				method: "POST",
				headers: headers,
				data: {
					query: `query ($category: String, $page: Int) {
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
          }`,
					variables: {
						category: this.currentCategory.uid,
						page: queryPage,
					},
				},
			})

			// Store products data
			this.products = productsResponse.data.data.products.items
			// Store pagination info
			this.pagination = productsResponse.data.data.products.page_info
		},
	},
	created() {
		this.fetchData()

		this.$watch(
			() => this.$route.params,
			() => {
				this.fetchData()
			}
		)
	},
}
</script>

<template>
	<div class="category-listing">
		<CategoriesSidebar
			:categories="categories"
			:selected="currentCategory"
		/>
		<div class="product-grid">
			<ProductThumb
				v-for="product in products"
				:key="product.uid"
				:product="product"
			/>
			<PaginationWidget
				v-if="pagination"
				:pagination="pagination"
				pageRange="3"
			/>
		</div>
	</div>
</template>

<style>
.category-listing {
	display: flex;
	flex-direction: row;
	gap: 1rem;
}

.product-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-auto-rows: minmax(min-content, max-content);
	gap: 1.5rem;
}

/* @media to secure responsiveness */

/* Smaller screens */
@media screen and (max-width: 1585px) {
	.product-grid {
		grid-template-columns: repeat(2, 1fr);
	}
}

@media screen and (max-width: 968px) {
	.product-grid {
		grid-template-columns: 1fr;
	}
}

/* Phones */
@media screen and (max-width: 635px) {
	.category-panel {
		margin-bottom: 0.5rem;
	}

	.category-listing {
		display: block;
	}
}
</style>
