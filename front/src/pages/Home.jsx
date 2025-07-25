import React, { useEffect} from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import Slider from '../components/Slider'
import { useState } from 'react'

const Home = () => {

  let [allProp, setAllProp] = useState([])
  useEffect(()=>{
    axios.get(`${import.meta.env.VITE_API_URL}/property`)
    .then(response=>{
      setAllProp(response.data);
    })
  },[])

    return ( 
      <>
      <Slider />
        <div className="section">
        <div className="container">
          <div className="row mb-5 align-items-center">
            <div className="col-lg-6">
              <h2 className="font-weight-bold text-primary heading">
                Popular Properties
              </h2>
            </div>
            <div className="col-lg-6 text-lg-end">
              <p>
                <a
                  href="#"
                  target="_blank"
                  className="btn btn-primary text-white py-3 px-4"
                  >View all properties</a
                >
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="property-slider-wrap">
                <div className="property-slider row ">

                  {
                    allProp.map((item, index)=>{
                      return(
                         <div className="property-item col-md-4">
                    <a href="property-single.html" className="img">
                      <img src={`http://localhost:3000/upload_images/${item.image}`} alt="Image" className="img-fluid" />
                    </a>
  
                    <div className="property-content">
                      <div className="price mb-2"><span>&#8377; {item.rent.toFixed(2)}</span></div>
                      <div>
                        <span className="d-block mb-2 text-black-50"
                          >{item.address}</span
                        >
                        <span className="city d-block mb-3">{item.tittle}</span>
  
                        <div className="specs d-flex mb-4">
                          <div className="row">
                            <div className="col-md-12">
                          {
                            item.amenity.map(item2=>{
                              return(
                               <span className="amenity-text me-3">
                                 {
                                      item2 == "Parking" ? <i class="fa fa-car" aria-hidden="true"></i> : ''
                                     }
                                     {
                                      item2 == "WiFi" ? <i class="fa fa-wifi" aria-hidden="true"></i> : ''
                                     }
                                     {
                                      item2=="Electricity" ? <i class="fa fa-bolt" aria-hidden="true"></i>: ''
                                     }
                                     {
                                      item2=="Full Furnished" ? <i class="fa fa-bed" aria-hidden="true"></i> : ''
                                     }
                                     {
                                      item2=="Water" ? <i class="fa fa-tint" aria-hidden="true"></i> : ''
                                     }
                            &nbsp;<span className="">{item2}</span>
                          </span>
                              )
                            })
                          }
                         
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2"></span>
                            <span className="caption"></span>
                          </span>
                        </div>
  
                        <NavLink
                          to={"/details/"+item._id}                      className="btn btn-primary py-2 px-3"
                          >See details</NavLink>
                      </div>
                      </div>
                      </div>
                    </div>
                  </div>
                      )
                    })
                  }

                 
                
  
                  {/* <div className="property-item col-md-4">
                    <a href="property-single.html" className="img">
                      <img src="/Assets/images/img_2.jpg" alt="Image" className="img-fluid" />
                    </a>
  
                    <div className="property-content">
                      <div className="price mb-2"><span>$1,291,000</span></div>
                      <div>
                        <span className="d-block mb-2 text-black-50"
                          >5232 California Fake, Ave. 21BC</span
                        >
                        <span className="city d-block mb-3">California, USA</span>
  
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2"></span>
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2"></span>
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
  
                        <a
                          href="property-single.html"
                          className="btn btn-primary py-2 px-3"
                          >See details</a
                        >
                      </div>
                    </div>
                  </div>
               
  
                  <div className="property-item col-md-4">
                    <a href="property-single.html" className="img">
                      <img src="/Assets/images/img_3.jpg" alt="Image" className="img-fluid" />
                    </a>
  
                    <div className="property-content">
                      <div className="price mb-2"><span>$1,291,000</span></div>
                      <div>
                        <span className="d-block mb-2 text-black-50"
                          >5232 California Fake, Ave. 21BC</span
                        >
                        <span className="city d-block mb-3">California, USA</span>
  
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2"></span>
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2"></span>
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
  
                        <a
                          href="property-single.html"
                          className="btn btn-primary py-2 px-3"
                          >See details</a
                        >
                      </div>
                    </div>
                  </div>
             
  
                  <div className="property-item col-md-4">
                    <a href="property-single.html" className="img">
                      <img src="/Assets/images/img_4.jpg" alt="Image" className="img-fluid" />
                    </a>
  
                    <div className="property-content">
                      <div className="price mb-2"><span>$1,291,000</span></div>
                      <div>
                        <span className="d-block mb-2 text-black-50"
                          >5232 California Fake, Ave. 21BC</span
                        >
                        <span className="city d-block mb-3">California, USA</span>
  
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2"></span>
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2"></span>
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
  
                        <a
                          href="property-single.html"
                          className="btn btn-primary py-2 px-3"
                          >See details</a
                        >
                      </div>
                    </div>
                  </div>
        
  
                  <div className="property-item col-md-4">
                    <a href="property-single.html" className="img">
                      <img src="/Assets/images/img_5.jpg" alt="Image" className="img-fluid" />
                    </a>
  
                    <div className="property-content">
                      <div className="price mb-2"><span>$1,291,000</span></div>
                      <div>
                        <span className="d-block mb-2 text-black-50"
                          >5232 California Fake, Ave. 21BC</span
                        >
                        <span className="city d-block mb-3">California, USA</span>
  
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2"></span>
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2"></span>
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
  
                        <a
                          href="property-single.html"
                          className="btn btn-primary py-2 px-3"
                          >See details</a
                        >
                      </div>
                    </div>
                  </div>
               
  
                  <div className="property-item col-md-4">
                    <a href="property-single.html" className="img">
                      <img src="/Assets/images/img_6.jpg" alt="Image" className="img-fluid" />
                    </a>
  
                    <div className="property-content">
                      <div className="price mb-2"><span>$1,291,000</span></div>
                      <div>
                        <span className="d-block mb-2 text-black-50"
                          >5232 California Fake, Ave. 21BC</span
                        >
                        <span className="city d-block mb-3">California, USA</span>
  
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2"></span>
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2"></span>
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
  
                        <a
                          href="property-single.html"
                          className="btn btn-primary py-2 px-3"
                          >See details</a
                        >
                      </div>
                    </div>
                  </div>
                
  
                  <div className="property-item col-md-4">
                    <a href="property-single.html" className="img">
                      <img src="/Assets/images/img_7.jpg" alt="Image" className="img-fluid" />
                    </a>
  
                    <div className="property-content">
                      <div className="price mb-2"><span>$1,291,000</span></div>
                      <div>
                        <span className="d-block mb-2 text-black-50"
                          >5232 California Fake, Ave. 21BC</span
                        >
                        <span className="city d-block mb-3">California, USA</span>
  
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2"></span>
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2"></span>
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
  
                        <a
                          href="property-single.html"
                          className="btn btn-primary py-2 px-3"
                          >See details</a
                        >
                      </div>
                    </div>
                  </div>
                
  
                  <div className="property-item col-md-4">
                    <a href="property-single.html" className="img">
                      <img src="/Assets/images/img_8.jpg" alt="Image" className="img-fluid" />
                    </a>
  
                    <div className="property-content">
                      <div className="price mb-2"><span>$1,291,000</span></div>
                      <div>
                        <span className="d-block mb-2 text-black-50"
                          >5232 California Fake, Ave. 21BC</span
                        >
                        <span className="city d-block mb-3">California, USA</span>
  
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2"></span>
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2"></span>
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
  
                        <a
                          href="property-single.html"
                          className="btn btn-primary py-2 px-3"
                          >See details</a
                        >
                      </div>
                    </div>
                  </div>
               
  
                  <div className="property-item col-md-4 ">
                    <a href="property-single.html" className="img">
                      <img src="/Assets/images/img_1.jpg" alt="Image" className="img-fluid" />
                    </a>
  
                    <div className="property-content">
                      <div className="price mb-2"><span>$1,291,000</span></div>
                      <div>
                        <span className="d-block mb-2 text-black-50"
                          >5232 California Fake, Ave. 21BC</span
                        >
                        <span className="city d-block mb-3">California, USA</span>
  
                        <div className="specs d-flex mb-4">
                          <span className="d-block d-flex align-items-center me-3">
                            <span className="icon-bed me-2"></span>
                            <span className="caption">2 beds</span>
                          </span>
                          <span className="d-block d-flex align-items-center">
                            <span className="icon-bath me-2"></span>
                            <span className="caption">2 baths</span>
                          </span>
                        </div>
  
                        <a
                          href="property-single.html"
                          className="btn btn-primary py-2 px-3"
                          >See details</a
                        >
                      </div>
                    </div>
                  </div> */}
            
                </div>
  
                <div
                  id="property-nav"
                  className="controls"
                  tabindex="0"
                  aria-label="Carousel Navigation"
                >
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>

    )
}
export default Home 