import {defineStore} from 'pinia';
import {ref} from "vue";

export const useCountStore = defineStore('count', () => {
        let sum = ref(6);

        function add(num: number) {
            sum.value += num;
        }

        function minus(num: number) {
            sum.value -= num;
        }


        return {
            sum,
            add,
            minus
        }

}
);