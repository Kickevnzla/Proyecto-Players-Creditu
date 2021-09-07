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
                <div class="col p-1 text-dark" v-for="player in players" :key="player.id">
                    <div class=" p-2 player mb-5">
                        <div class="box p-2">
                            <div class="card-img p-2">
                                <img src="https://lh3.googleusercontent.com/d/17fBzEwLjVC4wbHBi1O64PA-D-i8G_Z4b=s220?authuser=0" class="mx-auto" alt="...">
                            </div>
                            <div class="card-body">
                                <h5 class="card-title text-white">{{ player.nickname }}</h5>
                                <h6 class="card-text text-info">{{ player.status }}</h6>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                players: [],
                searchedText: ''
            }
        },
        created() {
            this.getPlayers();
            console.log(this.players);
            // this.players = fetch('/players').then(res => res.json());
            // console.log(this.players);
        },
        methods: {
            getPlayers() {
                fetch('/players').then(res => res.json()).then(data => (this.players = data));
            }
        }
    }
</script>
