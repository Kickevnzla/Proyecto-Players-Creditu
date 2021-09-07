export default {
    name: 'pagination',
    props: ['players', 'currentPage', 'perPage'],
    methods: {
        updatePage(pageNumber) {
            this.$emit('page:update', pageNumber);
        },
        totalPages() {
            return Math.ceil(this.players.length / this.perPage);
        }
    }
}