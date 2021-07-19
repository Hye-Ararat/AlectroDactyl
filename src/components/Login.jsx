import Cookies from 'js-cookie'
import {useLocation, Redirect} from 'react-router-dom'
function Login(){
    
    Cookies.set('token', new URLSearchParams(useLocation().search).get('token'))        
    return(
        <Redirect to="/" />
        )
}
export default Login