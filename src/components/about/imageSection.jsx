import React from 'react'
import abtimg1 from "../../assets/img/about/02.jpg"
import abtimg2 from "../../assets/img/about/03.jpg"
import abtimg3 from "../../assets/img/about/04.jpg"


const ImageSection = () => {
  return (
    <div>
         <div className="row g-4 align-items-center">
          {/* Image */}
          <div className="col-md-6" data-aos="fade-up-right">
            <img src={abtimg1} className="rounded-3" alt="" />
          </div>

          <div className="col-md-6">
            <div className="row g-4">
              {/* Image */}
              <div className="col-md-8" data-aos="fade-down-left">
                <img src={abtimg2} className="rounded-3" alt="" />
              </div>

              {/* Image */}
              <div className="col-12" data-aos="fade-up-left">
                <img src={abtimg3} className="rounded-3" alt="" />
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ImageSection