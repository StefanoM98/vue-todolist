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
                },
            error: false
        }
    },
    methods: {
        newToDo (){
            if (this.newTask.text.length > 0) {
                this.listToDo.push({...this.newTask})
                this.newTask.text = ""
            }else {
                this.error = true
                setTimeout(() => {
                    this.error = false;
                }, 3000)
            }
        }
    }
}).mount("#app")