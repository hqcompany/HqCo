import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header className="header-section">
                <div className="container">
                    <div className="inner-header">
                        <div className="row">
                            <div className="col-lg-2 col-md-2">
                                <div className="logo">
                                    <a href="./index.html">
                                        <img src={this.props.logo} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7">
                                <img src={this.props.name} alt="" />
                            </div>
                            <div className="col-lg-3 text-right col-md-3">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="nav-item">
                    <div className="container">


                        {/* <div className="nav-depart ">
                            <div className="depart-btn">
                                <i className="ti-menu" />
                                <span>Dịch Vụ</span>
                                <ul className="depart-hover">
                                    <li className="active"><a href="#">{this.props.dv1}</a></li>
                                    <li><a href="#">{this.props.dv2}</a></li>
                                    <li><a href="#">{this.props.dv3}</a></li>
                                </ul>
                            </div>
                        </div> */}

                        <nav className="nav-menu mobile-menu">
                            <ul>
                                <li className={this.props.linkhome}><a href="">Trang Chủ</a></li>
                                <li>

                                    <a href="#">
                                        <span>Dịch Vụ</span>
                                    </a>
                                    <ul className="dropdown">
                                        <li><a href="#">{this.props.dv1}</a></li>
                                        <li><a href="#">{this.props.dv2}</a></li>
                                        <li><a href="#">{this.props.dv3}</a></li>
                                    </ul>
                                </li>
                                <li><a href={this.props.shop}>Cửa Hàng</a></li>
                                <li><a href="#">Sản Phẩm</a>
                                    <ul className="dropdown">
                                        <li><a href="#">KB Vision</a></li>
                                        <li><a href="#">Hik Vision</a></li>
                                        <li><a href="#">Ip</a></li>
                                    </ul>
                                </li>
                                <li><a href={this.props.linkblogs}>Blog</a></li>
                                <li><a href={this.props.linkcontact}>Liên Hệ</a></li>
                                <li><a href={this.props.linkab}>Về Chúng Tôi</a></li>
                            </ul>
                        </nav>

                        <div id="mobile-menu-wrap" />
                    </div>
                </div>
            </header>

        );
    }
}

export default Header;