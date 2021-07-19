import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch,
    useLocation
} from 'react-router-dom'
import {
    useEffect
} from 'react'
import Cookies from 'js-cookie'
import Login from './components/Login'
import DashboardContainer from './components/Dashboard/DashboardContainer'
function AppRouter(){
    function CheckAuth(){
        var token = Cookies.get('token')
        return token
    }
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    {CheckAuth() ? <DashboardContainer /> : 
                    <>
                    {window.location.href = "https://login.enzonet.nl"}
                    </>}
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
            </Switch>
        </Router>
    )
}
export default AppRouter