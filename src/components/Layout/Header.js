import React, {Component} from 'react';

class Header extends Component {
    render() {
        return (
            <header idName="tg-header" className="tg-header tg-haslayout">
                <div className="tg-topbar">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <div className="dropdown tg-themedropdown tg-userdropdown">
                                    <a href="javascript:void(0);" idName="tg-adminnav" className="tg-btndropdown" data-toggle="dropdown">
                                        <span className="tg-userdp"><img src="images/author/img-01.jpeg" alt="image description"/></span>
                                        <span className="tg-name">Hi! Angelena</span>
                                        <span className="tg-role">Administrator</span>
                                    </a>
                                    <ul className="dropdown-menu tg-themedropdownmenu" aria-labelledby="tg-adminnav">
                                        <li>
                                            <a href="dashboard.html">
                                                <i className="icon-chart-bars"></i>
                                                <span>Insights</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dashboard-profile-setting.html">
                                                <i className="icon-cog"></i>
                                                <span>Profile Settings</span>
                                            </a>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="javascript:void(0);">
                                                <i className="icon-layers"></i>
                                                <span>My Ads</span>
                                            </a>
                                            <ul>
                                                <li><a href="dashboard-myads.html">All Ads</a></li>
                                                <li><a href="dashboard-myads.html">Featured Ads</a></li>
                                                <li><a href="dashboard-myads.html">Active Ads</a></li>
                                                <li><a href="dashboard-myads.html">Inactive Ads</a></li>
                                                <li><a href="dashboard-myads.html">Sold Ads</a></li>
                                                <li><a href="dashboard-myads.html">Expired Ads</a></li>
                                                <li><a href="dashboard-myads.html">Deleted Ads</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="dashboard-postanad.html">
                                                <i className="icon-layers"></i>
                                                <span>Dashboard Post Ad</span>
                                            </a>
                                        </li>
                                        <li className="menu-item-has-children">
                                            <a href="javascript:void(0);">
                                                <i className="icon-envelope"></i>
                                                <span>Offers/Messages</span>
                                            </a>
                                            <ul>
                                                <li><a href="dashboard-offermessages.html">Offer Received</a></li>
                                                <li><a href="dashboard-offermessages.html">Offer Sent</a></li>
                                                <li><a href="dashboard-offermessages.html">Trash</a></li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="dashboard-payments.html">
                                                <i className="icon-cart"></i>
                                                <span>Payments</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dashboard-myfavourites.html">
                                                <i className="icon-heart"></i>
                                                <span>My Favourite</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="dashboard-privacy-setting.html">
                                                <i className="icon-star"></i>
                                                <span>Privacy Settings</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="javascript:void(0);">
                                                <i className="icon-exit"></i>
                                                <span>Logout</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tg-navigationarea">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <strong className="tg-logo"><a href="index.html"><img src="images/logo.png" alt="company logo here"/></a></strong>
                                <a className="tg-btn" href="dashboard-postanad.html">
                                    <span>Anunciar Adoção</span>
                                </a>
                                <nav idName="tg-nav" className="tg-nav">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#tg-navigation" aria-expanded="false">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                            <span className="icon-bar"></span>
                                        </button>
                                    </div>
                                    <div idName="tg-navigation" className="collapse navbar-collapse tg-navigation">
                                        <ul>
                                            <li>
                                                <a href="">Home</a>
                                            </li>
                                            <li>
                                                <a href="">Como Funciona</a>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <div idName="tg-homebanner" className="tg-homebanner tg-haslayout">
                <figure className="item" data-vide-bg="poster: images/slider/img-02.jpg" data-vide-options="{{position: 50% 50%}}">
                    <figcaption>
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                    <div className="tg-bannercontent" style={{marginTop: '60px'}}>
                                        <h2>Buscar por um Pet</h2>
                                        <form className="tg-formtheme tg-formbannersearch">
                                            <fieldset>
                                                <div className="form-group tg-inputwithicon">
                                                    <i className="fa fa-paw"></i>
                                                    <input type="text" name="customword" className="form-control" placeholder="Buscar por amiguinho pet" />
                                                </div>
                                                <div class="form-group tg-inputwithicon">
                                                    <i class="icon-location"></i>
                                                    <a class="tg-btnsharelocation fa fa-crosshairs" href="javascript:void(0);"></a>
                                                    <input type="text" name="yourlocation" class="form-control" placeholder="Buscar por local" />
                                                </div>
                                                <button className="tg-btn" type="button">Buscar</button>
                                            </fieldset>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </figcaption>
                </figure>
            </div>
        )
    }

}

export default Header;