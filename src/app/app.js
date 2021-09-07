import playerCard from './components/playerCard.vue';

export default {
    name: 'app',
    components: {
        playerCard
    },
    data() {
        return {
            players: [],
            searchedText: '',
            currentPage: 0,
            pageSize: 16,
            visiblePlayers: []
        }
    },
    created() {
        this.getPlayers();
        console.log(this.players);
    },
    beforeMount: function() {
        this.updateVisiblePlayers();
    },
    methods: {
        getPlayers() {
            fetch('/players').then(res => res.json()).then(data => (this.players = data));
            this.updateVisiblePlayers();
        },
        updateVisiblePlayers() {
            this.visiblePlayers = this.players.slice(this.currentPage * this.pageSize, (this.currentPage * this.pageSize) + this.pageSize);

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