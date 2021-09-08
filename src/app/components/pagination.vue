<template>
    <div class="d-flex justify-content-center mb-4">
        <ul class="pagination p-2 px-3" role="navegation" aria-label="pagination">
            <li 
                v-on:click="changePage(page - 1)"
                class="list-unstyled">
            <a class="pagination-previous">&lt;</a></li>
            <li 
                class="list-unstyled">
            <a>1</a></li>
            <li 
                class="list-unstyled">
            <a class="active is-current">{{ page }}</a></li>
            <li 
                class="list-unstyled">
            <a></a></li>
            <li 
                class="list-unstyled">
            <a></a></li>
            <li 
                class="list-unstyled">
            <a></a></li>
            <li 
                v-on:click="changePage(page + 1)"
                class="list-unstyled">
            <a class="pagination-next">&gt;</a></li>
        </ul>
    </div>
</template>

<script src="./pagination.js"></script>