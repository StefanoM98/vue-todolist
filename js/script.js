const {createApp} = Vue;

createApp ({
    data() {
        return {
            listToDo: [
                {
                    text: "Compra il latte",
                    done: false
                },
                {
                    text: "Pela le patate",
                    done: true
                },
                {
                    text: "Lava la macchina",
                    done: true
                },
            ],
            newTodo: []
        }
    },
    methods: {
        aggiungiToDo (){
            if (this.newTodo.length > 0) {
                this.listToDo.unshift(...this.newTodo)
                this.newTodo= []
            }
        }
    }
}).mount("#app")