<template>
    <div>
        <nav class="upBar shadow pt-3 pb-3">
            <div class="container">
                <div class="row justify-content-start">
                    <div class="col-4 col-lg-4 col-md-2">
                        <a class="navbar-brand">PLAYERS</a>
                    </div>
                    <div class="col-8 col-lg-4 col-md-8">
                        <!-- <form @submit.prevent="getPlayers">
                            <input class="form-control me-2" type="text" v-model="searchedText" v-on:keyup="getPlayers" name="searchBar" id="searchBar" placeholder="Search..." aria-label="Search">
                        </form> -->
                        <form>
                            <input class="form-control me-2" type="text" name="searchBar" id="searchBar" placeholder="Search..." aria-label="Search">
                        </form>
                    </div>
                </div>
            </div>
        </nav>
        <!-- Player cards -->
        <div class="container mt-5">
            <div class="playersList row row-cols-1 row-cols-sm-2 row-cols-lg-4 justify-content-center">

                <!-- Player -->
                <player-card class="col p-1 text-dark" v-for="player in players" 
                v-bind:player="player"
                v-bind:visiblePlayers="visiblePlayers" 
                v-bind:currentPage="currentPage"
                :key="player.id"></player-card>
            </div>
        </div>
    </div>
</template>

<script src="./app.js"></script>