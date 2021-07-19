import axios from 'axios'
import Cookies from 'js-cookie'
async function getCurrentDisk(callback){
    var current_disk_data = await axios.get(`https://clientbackend.enzonet.nl/current_disk?token=${Cookies.get('token')}`)
    callback(current_disk_data.data)
}
export default getCurrentDisk