<template>
    <div class="d-flex justify-content-center mb-4">
        <ul class="pagination p-2 px-3" role="navegation" aria-label="pagination">
            <li 
                v-if="page != 1"
                v-on:click="changePage(page - 1)"
                class="list-unstyled">
            <a class="pagination-previous">&lt;</a></li>
            <li 
                v-if="page != 1"
                v-on:click="changePage(1)"
                class="list-unstyled">
            <a>1</a></li>
            <li 
                class="list-unstyled">
            <a class="active is-current">{{ page }}</a></li>
            <li 
                v-if="page + 1 < pages"
                v-on:click="changePage(page + 1)"
                class="list-unstyled">
            <a>{{ page + 1}}</a></li>
            <li 
                v-if="page + 2 < pages"
                v-on:click="changePage(page + 2)"
                class="list-unstyled">
            <a>{{ page + 2}}</a></li>
            <li 
                v-on:click="changePage(pages)"
                v-if="page != pages"
                class="list-unstyled">
            <a>{{ pages }}</a></li>
            <li 
                v-if="page != pages"
                v-on:click="changePage(page + 1)"
                class="list-unstyled">
            <a class="pagination-next">&gt;</a></li>
        </ul>
    </div>
</template>

<script src="./pagination.js"></script>