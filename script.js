const vm = Vue.createApp({
    data(){
        return {
            todos: [
                'Sauver le monde',
                'Apprendre VueJS',
                'Faire à manger à Lou'
            ]
        }
    },
    methods: {
        invert(){
            this.todos.reverse();
        },
        addNote(message){
            this.todos.push(message);
        }
    }
})

vm.component('note', {
    props: ['content'],
    template: `<p> {{ content }} </p>`
});

vm.component('add', {
    props: [],
    emits: ['newNote'],
    data(){
        return{
            intern: 'Nouveau Message'
        }
    },
    methods:{
        saveNote(){
            this.$emit('newnote', this.intern)
            this.intern = '';
        }
    },
    template: `
        <input type="text" v-model="intern"/>
        <a href="#" @click="saveNote" v-if="intern != '' ">Ajouter</a>
        {{ intern }}
    `
});

vm.mount('#app');