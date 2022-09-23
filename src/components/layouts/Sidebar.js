import React from 'react';
function Sidebar() {
    return (
        /* Sidebar start */
        <div className="dlabnav">
            <div className="dlabnav-scroll">
                <ul className="metismenu" id="menu">
                    <li className="dropdown header-profile">
                        <a href="#/" className="nav-link"  role="button" data-bs-toggle="dropdown">
                            <img src="images/profile/pic1.jpg" width="20" alt=""/>
                            <div className="header-info ms-3">
                                <span className="font-w600 ">Hi,<b>William</b></span>
                                <small className="text-end font-w400">william@gmail.com</small>
                            </div>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a href="#/" className="dropdown-item ai-icon">
                                <span className="ms-2">Profile </span>
                            </a>
                            <a href="#/" className="dropdown-item ai-icon">
                                <span className="ms-2">Inbox </span>
                            </a>
                            <a href="#/" className="dropdown-item ai-icon">
                                <span className="ms-2">Logout </span>
                            </a>
                        </div>
                    </li>
                    <li><a href="#/" className="has-arrow ai-icon"  >
                            <i className="flaticon-025-dashboard"></i>
                            <span className="nav-text">Dashboard</span>
                        </a>
                        <ul >
                            <li><a href="#/">Dashboard Light</a></li>
                            <li><a href="#/">Dashboard Dark</a></li>
                            <li><a href="#/">My Wallet</a></li>
                            <li><a href="#/">Invoices</a></li>
                            <li><a href="#/">Cards Center</a></li>
                            <li><a href="#/">Transaction</a></li>
                            <li><a href="#/">Transaction Details</a></li>
                        </ul>

                    </li>
                    <li><a href="#/" className="has-arrow ai-icon"  >
                        <i className="flaticon-050-info"></i>
                            <span className="nav-text">Apps</span>
                        </a>
                        <ul >
                            <li><a href="#/">Profile</a></li>
                            <li><a href="#/">Post Details</a></li>
                            <li><a href="#/" className="has-arrow"  >Email</a>
                                <ul >
                                    <li><a href="#/">Compose</a></li>
                                    <li><a href="#/">Inbox</a></li>
                                    <li><a href="#/">Read</a></li>
                                </ul>
                            </li>
                            <li><a href="#/">Calendar</a></li>
                            <li><a href="#/" className="has-arrow"  >Shop</a>
                                <ul >
                                    <li><a href="#/">Product Grid</a></li>
                                    <li><a href="#/">Product List</a></li>
                                    <li><a href="#/">Product Details</a></li>
                                    <li><a href="#/">Order</a></li>
                                    <li><a href="#/">Checkout</a></li>
                                    <li><a href="#/">Invoice</a></li>
                                    <li><a href="#/">Customers</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li><a href="#/" className="has-arrow ai-icon"  >
                            <i className="flaticon-041-graph"></i>
                            <span className="nav-text">Charts</span>
                        </a>
                        <ul >
                            <li><a href="#/">Flot</a></li>
                            <li><a href="#/">Morris</a></li>
                            <li><a href="#/">Chartjs</a></li>
                            <li><a href="#/">Chartist</a></li>
                            <li><a href="#/">Sparkline</a></li>
                            <li><a href="#/">Peity</a></li>
                        </ul>
                    </li>
                </ul>
                <div className="copyright">
                    <p><strong>Dompet Payment Admin Dashboard</strong> © 2021 All Rights Reserved</p>
                    <p className="fs-12">Made with <span className="heart"></span> by DexignLab</p>
                </div>
            </div>
        </div>
        /*  Sidebar end */
    );
  }
  export default Sidebar;