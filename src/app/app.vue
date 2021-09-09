<template>
    <div>
        <nav class="upBar shadow pt-3 pb-3 sticky-top">
            <div class="container">
                <div class="row justify-content-start">
                    <div class="d-flex col-4 col-lg-4 col-md-2 align-items-center">
                        <a class="brand h4">PLAYERS</a>
                    </div>
                    <div class="col-8 col-lg-4 col-md-8">
                        <input v-model="searchedText" class="form-control me-2" type="text" name="searchBar" id="searchBar" placeholder="Search..." aria-label="Search" v-on:keydown.enter.prevent="filterPlayers" v-on:input="filterPlayers"/>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Player cards -->
        <div class="container mt-5">
            <div class="playersList row row-cols-1 row-cols-sm-2 row-cols-lg-4 justify-content-center">
                <!-- Player -->
                <player-card class="p-1 text-dark" 
                v-for="player in players" 
                v-bind:player="player"
                :key="player.id"></player-card>
            </div>
        </div>
        <div class="" v-if="players <= 0">
            <h4 class="text-center"> No hay coincidencias</h4>
        </div>

        <!-- Pagination -->
        <pagination :page="page" :pages="pages" @pageChanged="updatePage">
        </pagination>
    </div>
</template>

<script src="./app.js"></script>