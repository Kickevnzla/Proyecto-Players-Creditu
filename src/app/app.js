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
                page: this.page,
                id: parseInt(this.searchedText, 10) || 0,
                nickname: this.searchedText,
                status: this.searchedText
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
        },
        filterPlayers: function() {
            this.page = 1;
            this.getPlayers();
            console.log(this.searchedText, typeof(this.searchedText));

            return this.players;
        }
    },
}