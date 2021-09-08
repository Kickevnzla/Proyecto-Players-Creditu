import playerCard from './components/playerCard.vue';
import pagination from './components/pagination.vue';

export default {
    name: 'app',
    components: {
        playerCard,
        pagination
    },
    data() {
        return {
            players: [],
            searchedText: '',
            page: 1,
            pages: 1
        }
    },
    created() {
        this.$root.$refs.app = this;
        this.getPlayers();
    },
    methods: {
        async getPlayers() {
            const params = {
                page: this.page
            };
            let res = await this.axios.get('/players', { params })
            .then(res => {
                this.players = res.data.docs;
                this.pages = res.data.totalPages;
            })
            .catch(err => {
                console.log(err);
            });
        },
        updatePage(newPage) {
            this.page = newPage;
        }
    },
    computed: {
        // filteredPlayers: function() {
        //     return this.players.filter((player) => {
        //         if(player.nickname.toLowerCase().match(this.searchedText.toLowerCase()) ||
        //             player.id == this.searchedText ||
        //             player.status.toLowerCase().match(this.searchedText.toLowerCase())){
        //             return true;
        //         }
        //     });
        // }
    }
}