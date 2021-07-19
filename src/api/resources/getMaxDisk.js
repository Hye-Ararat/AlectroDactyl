import axios from 'axios'
import Cookies from 'js-cookie'
async function getMaxDisk(callback){
    var max_disk_data = await axios.get(`https://clientbackend.enzonet.nl/max_disk?token=${Cookies.get('token')}`)
    callback(max_disk_data.data)
}
export default getMaxDisk