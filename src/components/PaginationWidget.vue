<script>
export default {
    name: "PaginationWidget",
    props: {
        pagination: Object,
        pageRange: Number,
    },
    data() {
        return {
            pagesArray: null
        }
    },
    methods: {
        randId() {
            return (Math.random() + 1).toString(36).substring(7)
        }
    },
    mounted() {
        // Calculate pagination
        let pages = []
        const {current_page, total_pages} = this.pagination
        // insert first page if necessary
        if(current_page - this.pageRange > 1) pages.push({id: this.randId(), page: 1})
        // insert spacer if necessary
        if(current_page > this.pageRange + 2) pages.push({id: this.randId(), page: 0})
        // Vars for loop
        let start = current_page - this.pageRange < 1 ? 1 : current_page - this.pageRange
        let end = current_page + this.pageRange > total_pages ? total_pages : current_page + this.pageRange;
        while(start <= end) {
            pages.push({id: this.randId(), page: start})
            start++
        }
        // insert spacer if necessary
        if(current_page < total_pages - this.pageRange - 1) pages.push({id: this.randId(), page: 0})
        // insert last page if necessary
        if(current_page + this.pageRange < total_pages) pages.push({id: this.randId(), page: total_pages})

        // Store calculated data
        this.pagesArray = pages
    },
}
</script>

<template>
    <ul class="pagination">
        <li v-for="page in pagesArray" :key="page.id">
            <span v-if="page.page === 0" class="pagination__spacer">...</span>
            <RouterLink
                v-else
                :to="{name: 'category', params: {page: page.page}}"
                :class="{'pagination__link--active': page.page === pagination.current_page}"
                class="pagination__link"
            >
                {{ page.page }}
            </RouterLink>
        </li>
    </ul>
</template>

<style>
.pagination {
    grid-column: -1/1;
    list-style-type: none;
    display: flex;
    justify-content: center;
}

.pagination__spacer {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2rem;
    height: 2rem;
}

.pagination__link {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 2rem;
    height: 2rem;
    margin: .25rem;
    padding: .25rem;
    text-decoration: none;
    color: var(--color-light);
    background: var(--theme-secondary);
    transition: all .25s ease-in-out;
}
.pagination__link:hover, .pagination__link--active {
    background: var(--theme-primary);
}
</style>
