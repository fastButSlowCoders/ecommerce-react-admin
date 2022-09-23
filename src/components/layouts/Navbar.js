import React from 'react';
function Navbar() {
    return (
        <div>
            <div className="nav-header">
                <a href='#/' className="brand-logo">
                    <svg className="logo-abbr" width="53" height="53" viewBox="0 0 53 53">
                        <path d="M21.6348 8.04782C21.6348 5.1939 23.9566 2.87204 26.8105 2.87204H28.6018L28.0614 1.37003C27.7576 0.525342 26.9616 0 26.1132 0C25.8781 0 25.639 0.0403711 25.4052 0.125461L7.3052 6.7133C6.22916 7.105 5.67535 8.29574 6.06933 9.37096L7.02571 11.9814H21.6348V8.04782Z" fill="#759DD9"/>
                        <path d="M26.8105 5.97754C25.6671 5.97754 24.7402 6.90442 24.7402 8.04786V11.9815H42.8555V8.04786C42.8555 6.90442 41.9286 5.97754 40.7852 5.97754H26.8105Z" fill="#F8A961"/>
                        <path className="svg-logo-primary-path" d="M48.3418 41.8457H41.0957C36.8148 41.8457 33.332 38.3629 33.332 34.082C33.332 29.8011 36.8148 26.3184 41.0957 26.3184H48.3418V19.2275C48.3418 16.9408 46.4879 15.0869 44.2012 15.0869H4.14062C1.85386 15.0869 0 16.9408 0 19.2275V48.8594C0 51.1462 1.85386 53 4.14062 53H44.2012C46.4879 53 48.3418 51.1462 48.3418 48.8594V41.8457Z" fill="#5BCFC5"/>
                        <path className="svg-logo-primary-path" d="M51.4473 29.4238H41.0957C38.5272 29.4238 36.4375 31.5135 36.4375 34.082C36.4375 36.6506 38.5272 38.7402 41.0957 38.7402H51.4473C52.3034 38.7402 53 38.0437 53 37.1875V30.9766C53 30.1204 52.3034 29.4238 51.4473 29.4238ZM41.0957 35.6348C40.2382 35.6348 39.543 34.9396 39.543 34.082C39.543 33.2245 40.2382 32.5293 41.0957 32.5293C41.9532 32.5293 42.6484 33.2245 42.6484 34.082C42.6484 34.9396 41.9532 35.6348 41.0957 35.6348Z" fill="#5BCFC5"/>
                    </svg>
                </a>
                <div className="nav-control">
                    <div className="hamburger">
                        <span className="line"></span><span className="line"></span><span className="line"></span>
                    </div>
                </div>
            </div>
            
            <div className="header">
                <div className="header-content">
                    <nav className="navbar navbar-expand">
                        <div className="collapse navbar-collapse justify-content-between">
                            <div className="header-left">
                                <div className="dashboard_bar">
                                    Navbar
                                </div>
                            </div>
                            <ul className="navbar-nav header-right">
                                <li className="nav-item">
                                    <div className="input-group search-area">
                                        <input type="text" className="form-control" placeholder="Search here..."/>
                                        <span className="input-group-text"><a href='#/'><i className="flaticon-381-search-2"></i></a></span>
                                    </div>
                                </li>
                                <li className="nav-item dropdown notification_dropdown">
                                    <a href='#/' className="nav-link"  data-bs-toggle="dropdown">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M3.88552 6.2921C1.95571 6.54135 0.439911 8.19656 0.439911 10.1896V10.7253C0.439911 12.8874 2.21812 14.6725 4.38019 14.6725H12.7058V24.9768H7.01104C5.77451 24.9768 4.82009 24.0223 4.82009 22.7858V18.4039C4.84523 16.6262 2.16581 16.6262 2.19096 18.4039V22.7858C2.19096 25.4334 4.36345 27.6059 7.01104 27.6059H21.0331C23.6807 27.6059 25.8532 25.4334 25.8532 22.7858V13.9981C26.9064 13.286 27.6042 12.0802 27.6042 10.7253V10.1896C27.6042 8.17115 26.0501 6.50077 24.085 6.28526C24.0053 0.424609 17.6008 -1.28785 13.9827 2.48534C10.3936 -1.60185 3.7545 1.06979 3.88552 6.2921ZM12.7058 5.68103C12.7058 5.86287 12.7033 6.0541 12.7058 6.24246H6.50609C6.55988 2.31413 11.988 1.90765 12.7058 5.68103ZM21.4559 6.24246H15.3383C15.3405 6.05824 15.3538 5.87664 15.3383 5.69473C15.9325 2.04532 21.3535 2.18829 21.4559 6.24246ZM4.38019 8.87502H12.7058V12.0382H4.38019C3.62918 12.0382 3.06562 11.4764 3.06562 10.7253V10.1896C3.06562 9.43859 3.6292 8.87502 4.38019 8.87502ZM15.3383 8.87502H23.6656C24.4166 8.87502 24.9785 9.43859 24.9785 10.1896V10.7253C24.9785 11.4764 24.4167 12.0382 23.6656 12.0382H15.3383V8.87502ZM15.3383 14.6725H23.224V22.7858C23.224 24.0223 22.2696 24.9768 21.0331 24.9768H15.3383V14.6725Z" fill="#4f7086"/>
                                        </svg>
                                        <span className="badge light text-white bg-primary rounded-circle">2</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <div id="dlab_W_TimeLine02" className="widget-timeline dlab-scroll style-1 ps ps--active-y p-3 height370">
                                        <ul className="timeline">
                                            <li>
                                                <div className="timeline-badge primary"></div>
                                                <a href='#/' className="timeline-panel text-muted" >
                                                    <span>10 minutes ago</span>
                                                    <h6 className="mb-0">Youtube, a video-sharing website, goes live <strong className="text-primary">$500</strong>.</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge info">
                                                </div>
                                                <a href='#/' className="timeline-panel text-muted" >
                                                    <span>20 minutes ago</span>
                                                    <h6 className="mb-0">New order placed <strong className="text-info">#XF-2356.</strong></h6>
                                                    <p className="mb-0">Quisque a consequat ante Sit amet magna at volutapt...</p>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge danger">
                                                </div>
                                                <a href='#/' className="timeline-panel text-muted" >
                                                    <span>30 minutes ago</span>
                                                    <h6 className="mb-0">john just buy your product <strong className="text-warning">Sell $250</strong></h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge success">
                                                </div>
                                                <a href='#/' className="timeline-panel text-muted" >
                                                    <span>15 minutes ago</span>
                                                    <h6 className="mb-0">StumbleUpon is acquired by eBay. </h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge warning">
                                                </div>
                                                <a href='#/' className="timeline-panel text-muted" >
                                                    <span>20 minutes ago</span>
                                                    <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                </a>
                                            </li>
                                            <li>
                                                <div className="timeline-badge dark">
                                                </div>
                                                <a href='#/' className="timeline-panel text-muted" >
                                                    <span>20 minutes ago</span>
                                                    <h6 className="mb-0">Mashable, a news website and blog, goes live.</h6>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    </div>
                                </li>
                                <li className="nav-item dropdown notification_dropdown">
                                    <a href='#/' className="nav-link  ai-icon"  role="button" data-bs-toggle="dropdown">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        </svg>
                                        <span className="badge light text-white bg-primary rounded-circle">12</span>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-end">
                                        <div id="dlab_W_Notification1" className="widget-media dlab-scroll p-3">
                                            <ul className="timeline">
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2">
                                                            <img alt="image" width="50" src="images/avatar/1.jpg" />
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2 media-info">
                                                            KG
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Resport created successfully</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2 media-success">
                                                            <i className="fa fa-home"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2">
                                                            <img alt="image" width="50" src="images/avatar/1.jpg"/>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Dr sultads Send you Photo</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2 media-danger">
                                                            KG
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Resport created successfully</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="timeline-panel">
                                                        <div className="media me-2 media-primary">
                                                            <i className="fa fa-home"></i>
                                                        </div>
                                                        <div className="media-body">
                                                            <h6 className="mb-1">Reminder : Treatment Time!</h6>
                                                            <small className="d-block">29 July 2020 - 02:26 PM</small>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <a href='#/' className="all-notification" >See all notifications <i className="ti-arrow-end"></i></a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown notification_dropdown">
                                    <a href='#/' className="nav-link bell bell-link" >
                                        <span className="badge light text-white bg-primary rounded-circle">5</span>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href='#/' className="btn btn-primary d-sm-inline-block d-none">Generate Report<i className="las la-signal ms-3 scale5"></i></a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
  }
  export default Navbar;