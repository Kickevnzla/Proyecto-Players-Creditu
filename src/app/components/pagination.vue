<template>
    <!-- <div v-if="totalPages() > 0" class="pagination-wrapper container row justify-content-center">
        <button v-if="showPreviousLink()" class="enable-button-pointers" v-on:click="updatePage(currentPage - 1)"> < </button>
        {{ currentPage + 1 }} of {{ totalPages() }}
        <button v-if="showNextLink()" class="enable-button-pointers" v-on:click="updatePage(currentPage + 1)"> > </button>
    </div> -->
    <div class="d-flex justify-content-center mb-4">
        <ul class="pagination p-2 px-4">
            <li class="list-unstyled"><a href="#0">&lt;</a></li>
            <li class="list-unstyled"><a class="active" href="#0">1</a></li>
            <li class="list-unstyled"><a href="#0">2</a></li>
            <li class="list-unstyled"><a href="#0">3</a></li>
            <li class="list-unstyled"><a href="#0">4</a></li>
            <li class="list-unstyled"><a href="#0">&gt;</a></li>
        </ul>
    </div>
</template>

<script src="./pagination.js"></script>