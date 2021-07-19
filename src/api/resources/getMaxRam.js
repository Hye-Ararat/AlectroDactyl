import axios from 'axios'
import Cookies from 'js-cookie'
async function getMaxRam(callback){
    var max_ram_data = await axios.get(`https://clientbackend.enzonet.nl/max_ram?token=${Cookies.get('token')}`)
    callback(max_ram_data.data)
}
export default getMaxRam