import {onMounted, reactive} from "vue";
import axios from "axios";

export default function () {
    let dogList = reactive([
        'https://images.dog.ceo/breeds/cockapoo/Guri8.jpg'
    ])

    async function getDog() {

        try {
            let result = await axios.get('https://dog.ceo/api/breeds/image/random')
            dogList.push(result.data.message)
        } catch (error) {
            alert(error)
        }

    }

    onMounted(
        () => {
            getDog()
        }
    )

    return {dogList, getDog}
}