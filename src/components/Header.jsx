import React from 'react'

class Header extends React.Component {
    render(){
        return(
            <>
                       <div className="nk-header nk-header-fixed is-light">
                <div className="container-fluid">
                  <div className="nk-header-wrap">
                    <div className="nk-menu-trigger d-xl-none ml-n1">
                      <a href="#" className="nk-nav-toggle nk-quick-nav-icon" data-target="sidebarMenu"><em className="icon ni ni-menu" /></a>
                    </div>
                    <div className="nk-header-brand d-xl-none">
                      <a href="html/index.html" className="logo-link">
                        <img className="logo-light logo-img" src="./images/logo.png" srcSet="./images/logo-square.png 2x" alt="logo" />
                        <img className="logo-dark logo-img" src="./images/logo.png" srcSet="./images/logo-square.png 2x" alt="logo-dark" />
                      </a>
                    </div>{/* .nk-header-brand */}
                    <div className="nk-header-tools">
                      <ul className="nk-quick-nav">
                        <li className="dropdown user-dropdown">
                          <a href="#" className="dropdown-toggle mr-n1" data-toggle="dropdown">
                            <div className="user-toggle">
                              <div className="user-avatar sm">
                                {/* <em className="icon ni ni-user-alt" /> */}
                                <img src={`https://cdn.discordapp.com/avatars/${this.props.user_id}/${this.props.avatar}`} />
                              </div>
                              <div className="user-info d-none d-xl-block">
                                <div className="user-name dropdown-indicator">{this.props.first_name}</div>
                              </div>
                            </div>
                          </a>
                          <div className="dropdown-menu dropdown-menu-md dropdown-menu-right">
                            <div className="dropdown-inner user-card-wrap bg-lighter d-none d-md-block">
                              <div className="user-card">
                                <div className="user-avatar">
                                  {/*<span>AB</span>*/}
                                  <img src={`https://cdn.discordapp.com/avatars/${this.props.user_id}/${this.props.avatar}`} />
                                </div>
                                <div className="user-info">
                                  <span className="lead-text">{this.props.first_name} #{this.props.last_name}</span>
                                  <span className="sub-text">javmaldjian@gmail.com</span>
                                </div>
                              </div>
                            </div>
                            <div className="dropdown-inner">
                              <ul className="link-list">
                                <li><a href="html/user-profile-setting.html"><em className="icon ni ni-setting-alt" /><span>Account Settings</span></a></li>
                                <li><a className="dark-switch" href="#"><em className="icon ni ni-moon" /><span>Dark Mode</span></a></li>
                              </ul>
                            </div>
                            <div className="dropdown-inner">
                              <ul className="link-list">
                                <li><a href="#"><em className="icon ni ni-signout" /><span>Sign out</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>{/* .nk-header-wrap */}
                </div>{/* .container-fliud */}
              </div>
            </>
        )
    }
}
export default Header