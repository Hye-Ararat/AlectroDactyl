import axios from 'axios'
import Cookies from 'js-cookie'
async function getCurrentRam(callback){
    var current_ram_data = await axios.get(`https://clientbackend.enzonet.nl/current_ram?token=${Cookies.get('token')}`)
    callback(current_ram_data.data)
}
export default getCurrentRam