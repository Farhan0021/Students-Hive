import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <>
          <div className="site-mobile-menu site-navbar-target">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close">
          <span className="icofont-close js-menu-toggle"></span>
        </div>
      </div>
      <div className="site-mobile-menu-body"></div>
    </div>

    <nav className="site-nav">
      <div className="container">
        <div className="menu-bg-wrap">
          <div className="site-navigation">
            <a href="index.html" className="logo m-0 float-start">Property</a>

            <ul
              className="js-clone-nav d-none d-lg-inline-block text-start site-menu float-end"
            >
              <li className="active"><a href="index.html">Home</a></li>
<li className="has-children">
                <a href="properties.html">Properties Seeker</a>
                <ul className="dropdown">
                  <li><NavLink to="/seeker/login">Login</NavLink></li>
                  <li><NavLink to="/seeker/signup">SignUp</NavLink></li>
                  {/* <li className="has-children">
                    <a href="#">Dropdown</a>
                    <ul className="dropdown">
                      <li><a href="#">Sub Menu One</a></li>
                      <li><a href="#">Sub Menu Two</a></li>
                      <li><a href="#">Sub Menu Three</a></li>
                    </ul>
                  </li> */}




                </ul>
              </li>

              <li className="has-children">
                <a href="properties.html">Property Owner</a>
                <ul className="dropdown">
                  <li><NavLink to="/owner/login">Login</NavLink></li>
                  <li><NavLink to="/owner/signup">SignUp</NavLink></li>
                  




                </ul>
              </li>

              <li><a href="services.html">Services</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="contact.html">Contact Us</a></li>
            </ul>
            <a
              href="#"
              className="burger light me-auto float-end mt-1 site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
              data-toggle="collapse"
              data-target="#main-navbar"
            >
              <span></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
        </>
    )
}
export default Header 