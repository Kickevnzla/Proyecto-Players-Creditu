<template lang="html">
    <div class=" p-2 player mb-5">
        <div class="box p-2">
            <div class="card-img p-2">
                <img :src="'https://' + player.avatar" class="mx-auto" alt="...">
            </div>
            <div class="card-body">
                <h5 class="card-title text-white">{{ player.nickname }}</h5>
                <h6 class="card-text text-info">{{ player.status }}</h6>
            </div>
        </div>
    </div> 
</template>
<script src="./playerCard.js"></script>