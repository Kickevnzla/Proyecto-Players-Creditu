<template>
    <div class="d-flex justify-content-center mb-4">
        <ul class="pagination p-2 px-3">
            <li 
                v-if="currentPage != 0" 
                v-on:click="updatePage(currentPage - 1)" 
                class="list-unstyled">
            <a>&lt;</a></li>
            <li 
                v-if="currentPage != 0"
                v-on:click="updatePage(0)" 
                class="list-unstyled">
            <a>1</a></li>
            <li 
                v-on:click="updatePage(0)" 
                class="list-unstyled">
            <a class="active">{{ currentPage + 1 }}</a></li>
            <li 
                v-if="currentPage + 1 < totalPages()"
                v-on:click="updatePage(currentPage + 1)" 
                class="list-unstyled">
            <a>{{ currentPage + 2 }}</a></li>
            <li 
                v-if="currentPage + 2 < totalPages()"
                v-on:click="updatePage(currentPage + 2)" 
                class="list-unstyled">
            <a>{{ currentPage + 3 }}</a></li>
            <li 
                v-if="currentPage + 3 < totalPages()"
                v-on:click="updatePage(totalPages())" 
                class="list-unstyled">
            <a>{{ totalPages() }}</a></li>
            <li 
                v-if="currentPage != totalPages() - 1" 
                v-on:click="updatePage(currentPage + 1)" 
                class="list-unstyled">
            <a>&gt;</a></li>
        </ul>
    </div>
</template>

<script src="./pagination.js"></script>