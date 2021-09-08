<template lang="html">
    <div class="d-flex justify-content-center">
        <div class="d-inline-block p-2 player mb-5">
            <div class="d-inline-block box p-2">
                <div class="card-img p-2">
                    <img :src="'https://' + player.avatar" class="mx-auto" alt="...">
                </div>
                <div class="card-body">
                    <h5 class="card-title text-white">Id: {{ player.id }}</h5>
                    <h5 class="card-title text-white">User: {{ player.nickname }}</h5>
                    <h5 class="card-text text-info">Status: {{ player.status }}</h5>
                    <h5 class="card-title text-white">Balance: ${{ player.balance }}</h5>
                </div>
            </div>
        </div> 
    </div>
</template>
<script src="./playerCard.js"></script>