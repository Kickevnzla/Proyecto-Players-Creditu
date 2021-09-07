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
            currentPage: 0,
            perPage: 16,
            visiblePlayers: []
        }
    },
    created() {
        this.getPlayers();
    },
    methods: {
        async getPlayers() {
            //fetch('/players').then(res => res.json()).then(data => (this.players = data));
            const res = await this.axios.get('/players');
            console.log(res);
            this.players = res.data;
            this.updateVisiblePlayers();
        },
        updateVisiblePlayers() {
            this.visiblePlayers = this.players.slice(this.currentPage * this.perPage, (this.currentPage * this.perPage) + this.perPage);

            if (this.visiblePlayers.length == 0 && this.currentPage > 0) {
                this.updatePage(this.currentPage -1);
            }
        },
        updatePage(pageNumber) {
            this.currentPage = pageNumber;
            this.updateVisiblePlayers();
        }
    }
}