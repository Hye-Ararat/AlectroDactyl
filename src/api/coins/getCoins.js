import axios from 'axios'
import Cookies from 'js-cookie'
async function getCoins(callback){
    var coin_data = await axios.get(`https://clientbackend.enzonet.nl/coins?token=${Cookies.get('token')}`)
    callback(coin_data.data.toString())
}
export default getCoins