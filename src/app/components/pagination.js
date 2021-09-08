export default {
    name: 'pagination',
    props: ['players', 'page', 'pages'],
    methods: {
        changePage(newPage) {
            let answer;

            if (newPage <= 0 || newPage > this.pages) {
                answer = this.page;
            } else {
                answer = newPage;
            }

            this.updatePage(answer);
        },
        updatePage(answer) {
            
            this.$emit('pageChanged', answer);

            this.$root.$refs.app.getPlayers();
        } 
    }
}