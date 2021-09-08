<template lang="html">
    <div class="d-flex justify-content-center">
        <div class="d-flex p-2 player mb-5 justify-content-center">
            <div class=" box p-2 row row-cols-1 justify-content-center">
                <div class="card-img p-2 col">
                    <img :src="'https://' + player.avatar" class="mx-auto d-block" alt="...">
                </div>
                <div class="card-body col">
                    <h5 class="card-title text-dark">Id: {{ player.id }}</h5>
                    <h5 class="card-title text-dark">User: {{ player.nickname }}</h5>
                    <h5 class="card-text text-dark">Status: {{ player.status }}</h5>
                    <h5 class="card-title text-dark">Balance: ${{ player.balance }}</h5>
                </div>
            </div>
        </div> 
    </div>
</template>
<script src="./playerCard.js"></script>