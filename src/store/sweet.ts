import {defineStore} from 'pinia';
import axios from "axios";
import {reactive} from "vue";

export const useSweetStore = defineStore('sweet', () => {

        let sweetTalk = reactive<string[]>([]);


        async function getSweetTalkFromApi() {
            try {
                // 使用fetch API发送GET请求
                const {data} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json');

                // 确保返回的数据格式正确
                if (data.code === 1 && typeof data.content === 'string') {
                    // 添加到sweetTalk数组中
                    sweetTalk.push(data.content);
                } else {
                    console.error('数据格式错误:', data);
                }
            } catch (error) {
                console.error('请求过程中出错:', error);
            }
        }

        function clearSweetTalk() {
            sweetTalk.length = 0;
        }


        function getSweetTalkLength(): number {
            return sweetTalk.length * 10;
        }

        return {
            sweetTalk,
            getSweetTalkFromApi,
            clearSweetTalk,
            getSweetTalkLength
        };
    }
);