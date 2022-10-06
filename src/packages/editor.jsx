import { defineComponent } from "vue";



export default defineComponent({
    props: {
        data: {type:Object}
    },
    setup() { 
        console.log(data);
        
    }
})