import Cookies from 'js-cookie'
import jwt from 'jsonwebtoken'
import getCoins from '../../api/coins/getCoins'
import getMaxRam from '../../api/resources/getMaxRam'
import getCurrentRam from '../../api/resources/getCurrentRam'
import getCurrentCpu from '../../api/resources/getCurrentCpu'
import getMaxCpu from '../../api/resources/getMaxCpu'
import getCurrentDisk from '../../api/resources/getCurrentDisk'
import getMaxDisk from '../../api/resources/getMaxDisk'
import Fade from '../Fade'
import prettyBytes from 'pretty-bytes'
import Navigation from '../Navigation'
import Header from '../Header'
import {
    useEffect,
    useState
} from 'react'
function DashboardContainer() {
    document.title = 'Servers | Enzonet'
    var user_info = jwt.decode(Cookies.get('token'))
    console.log(user_info)
    var [coins, setCoins] = useState(() => {
        return (null)
    })
    var [max_ram, setMaxRam] = useState(() => {
        return (null)
    })
    var [current_ram, setCurrentRam] = useState(() => {
        return (null)
    })
    var [current_cpu, setCurrentCpu] = useState(() => {
        return (null)
    })
    var [max_cpu, setMaxCpu] = useState(() => {
        return (null)
    })
    var [current_disk, setCurrentDisk] = useState(() => {
        return (null)
    })
    var [max_disk, setMaxDisk] = useState(() => {
        return (null)
    })
    useEffect(() => {
        getCoins(function (response) {
            setCoins(response)
        })
    }, [])
    useEffect(() => {
        getCurrentRam(function (response) {
            setCurrentRam(response)
        })
    }, [])
    useEffect(() => {
        getMaxRam(function (response) {
            setMaxRam(response)
        })
    }, [])
    useEffect(() => {
        getCurrentCpu(function (response) {
            setCurrentCpu(response)
        })
    }, [])
    useEffect(() => {
        getMaxCpu(function (response) {
            setMaxCpu(response)
        })
    }, [])
    useEffect(() => {
        getCurrentDisk(function (response) {
            setCurrentDisk(response)
        })
    }, [])
    useEffect(() => {
        getMaxDisk(function (response) {
            setMaxDisk(response)
        })
    }, [])
    /*     return(
            <>
            <h1>Welcome {user_info.username}</h1>
            {current_ram ? <Fade><p>{prettyBytes(current_ram * 1048576, {binary: 'true'})} {max_ram ? "/ " + prettyBytes(max_ram * 1048576, {binary: "true"}) : ""}</p></Fade> : ""}
            {current_cpu ? <Fade><p>{current_cpu}%{max_cpu ? " / " + max_cpu + "%" : ""}</p></Fade> : ""}
            {current_disk ? <Fade><p>{prettyBytes(current_disk * 1048576, {binary: 'true'})} {max_disk ? "/ " + prettyBytes(max_disk * 1048576, {binary: "true"}) : ""}</p></Fade> : ""}
            {coins ? <Fade><p>{coins} Coins</p></Fade> : ""}
            <h1>Login Info:</h1>
            <h3>Username</h3>
            <p>{user_info.id}</p>
            <h3>Email</h3>
            <p>{user_info.email}</p>
            <img src={`https://cdn.discordapp.com/avatars/${user_info.id}/${user_info.avatar}`} />
            </>
        ) */
    return (
        <>
            <div>
                <base href="../../../" />
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta name="description" content="The Best Server Control Panel In The Industry" />
                {/* Fav Icon  */}
                <link rel="shortcut icon" href="./images/favicon.png" />
                {/* Page Title  */}
                <title>Ararat | Dashboard</title>
                {/* StyleSheets  */}
                <link rel="stylesheet" href="./assets/css/dashlite.css?ver=2.6.0" />
                <link id="skin-default" rel="stylesheet" href="./assets/css/theme.css?ver=2.6.0" />
                <div className="nk-app-root">
                    {/* main @s */}
                    <div className="nk-main ">
                        {/* sidebar @s */}
                        <Navigation page="servers" />
                        {/* sidebar @e */}
                        {/* wrap @s */}
                        <div className="nk-wrap ">
                            {/* main header @s */}
                            <Header first_name={user_info.username} avatar={user_info.avatar} user_id={user_info.id} last_name={user_info.discriminator} />
                            {/* main header @e */}
                            {/* content @s */}
                            <div className="nk-content ">
                                <div className="container-fluid">
                                    <div className="nk-content-inner">
                                        <div className="nk-content-body">
                                            <div className="components-preview wide-md mx-auto">
                                                <div className="nk-block-head nk-block-head-lg wide-sm">
                                                    <div className="nk-block-head-content">
                                                        <h2 className="nk-block-title fw-normal">Your Servers</h2>
                                                    </div>

                                                </div>{/* nk-block-head */}
                                                <div className="row mb-3">
                                                    <div className="col-sm-3 col-md-3 mx-auto">
                                                    <div class="card bg-success">
                                                        <div class="card-inner">
                                                            <h5 class="card-title">        {current_ram ? <Fade><>{prettyBytes(current_ram * 1048576, { binary: 'true' })} {max_ram ? "/ " + prettyBytes(max_ram * 1048576, { binary: "true" }) : ""}</></Fade> : ""}
                                                            </h5>        <h6 class="card-subtitle mb-2">Memory</h6> </div></div>
                                                </div>    
                                                <div className="col-sm-3 col-md-3 mx-auto">
                                                    <div class="card bg-info">
                                                        <div class="card-inner">
                                                            <h5 class="card-title">                    {current_cpu ? <Fade>{current_cpu}%{max_cpu ? " / " + max_cpu + "%" : ""}</Fade> : ""}
                                                            </h5>        <h6 class="card-subtitle mb-2">CPU</h6> </div></div>
                                                </div>   
                                                <div className="col-sm-3 col-md-3 mx-auto">
                                                    <div class="card bg-warning">
                                                        <div class="card-inner">
                                                            <h5 class="card-title">                    {current_disk ? <Fade>{prettyBytes(current_disk * 1048576, {binary: 'true'})} {max_disk ? "/ " + prettyBytes(max_disk * 1048576, {binary: "true"}) : ""}</Fade> : ""}

                                                            </h5>        <h6 class="card-subtitle mb-2">Storage</h6> </div></div>
                                                </div> 
                                                <div className="col-sm-3 col-md-3 mx-auto">
                                                    <div class="card bg-primary">
                                                        <div class="card-inner">
                                                            <h5 class="card-title">        {current_ram ? <Fade><>{prettyBytes(current_ram * 1048576, { binary: 'true' })} {max_ram ? "/ " + prettyBytes(max_ram * 1048576, { binary: "true" }) : ""}</></Fade> : ""}
                                                            </h5>        <h6 class="card-subtitle mb-2">Servers</h6> </div></div>
                                                </div>      
                                                </div>

                                                <div className="nk-block nk-block-lg">

                                                    <div className="card card-preview">
                                                        <table className="table table-orders">
                                                            <thead className="tb-odr-head">
                                                                <tr className="tb-odr-item">
                                                                    <th>
                                                                        <span>Name</span>
                                                                    </th>
                                                                    <th>
                                                                        <span>IP</span>
                                                                    </th>
                                                                    <th>
                                                                        <span>Memory</span>
                                                                    </th>
                                                                    <th>
                                                                        <span>CPU</span>
                                                                    </th>
                                                                    <th>
                                                                        <span>Storage</span>
                                                                    </th>
                                                                    <th>
                                                                        <span>Status</span>
                                                                    </th>
                                                                    <th>
                                                                        <span>Action</span>
                                                                    </th>

                                                                </tr>
                                                            </thead>
                                                            <tbody className="tb-odr-body">
                                                                {/*                                                                 {servers == null ? <p /> :
                                                                <>
                                                                {servers.map(server => (
                                                                    <ServerRow
                                                                     name='t'
                                                                     identifier='t'
                                                                     max_memory='t'
                                                                     max_disk='t'
                                                                     suspended='t'
                                                                     allocation='t'
                                                                     status='t'
                                                                    //  status={server.resources.attributes.current_state}
                                                                    />
                                                                ))}   
                                                                </>                 
                                                                } */}


                                                            </tbody>
                                                        </table>
                                                    </div>{/* .card */}
                                                </div>{/* nk-block */}

                                            </div>{/* .components-preview */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* content @e */}
                            {/* footer @s */}
                            <div className="nk-footer">
                                <div className="container-fluid">
                                    <div className="nk-footer-wrap">
                                        <div className="nk-footer-copyright"> ©2021 Hye Hosting LLC. All Rights Reserved.
                                        </div>
                                        <div className="nk-footer-links">
                                            <ul className="nav nav-sm">
                                                <li className="nav-item"><a className="nav-link" href="https://hyehosting.com/tos">Terms of Service</a></li>
                                                <li className="nav-item"><a className="nav-link" href="https://hyehosting.com/privacy">Privacy Policy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* footer @e */}
                        </div>
                        {/* wrap @e */}
                    </div>
                    {/* main @e */}
                </div>
                {/* app-root @e */}
                {/* JavaScript */}
            </div>
        </>
    )
}
export default DashboardContainer