import axios from 'axios'
import Cookies from 'js-cookie'
async function getMaxCpu(callback){
    var max_cpu_data = await axios.get(`https://clientbackend.enzonet.nl/max_cpu?token=${Cookies.get('token')}`)
    callback(max_cpu_data.data)
}
export default getMaxCpu