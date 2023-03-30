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
            newTask:
                {
                    text:"",
                    done: false
                }
        }
    },
    methods: {
        newToDo (){
            this.listToDo.push({...this.newTask})
            this.newTask.text = ""
        }
    }
}).mount("#app")