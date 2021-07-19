import axios from 'axios'
import Cookies from 'js-cookie'
async function getCurrentCpu(callback){
    var current_cpu_data = await axios.get(`https://clientbackend.enzonet.nl/current_cpu?token=${Cookies.get('token')}`)
    callback(current_cpu_data.data)
}
export default getCurrentCpu