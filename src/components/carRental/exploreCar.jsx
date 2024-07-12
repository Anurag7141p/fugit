import React from "react";
import CarCard from "./carCard";
import car1 from '../../assets/img/category/car/5.jpg'
import car2 from '../../assets/img/category/car/2.jpg'
import car3 from '../../assets/img/category/car/7.jpg'
import car4 from '../../assets/img/category/car/4.jpg'
import car5 from '../../assets/img/category/car/1.jpg'
import car6 from '../../assets/img/category/car/3.jpg'
import car7 from '../../assets/img/category/car/8.jpg'

const ExploreCar = () => {
  const cars=[{
    src:car1,
    category:"Economy"
},
{
    src:car2,
    category:" Compact SUV"
},
{
    src:car3,
    category:"Intermediate SUV"
},
{
    src:car4,
     category:"Standard"
},
{
    src:car5,
     category:"Premium"
},
{
    src:car6,
    category:"Luxury"
},
{
    src:car7,
     category:"High Premium"
}

];
  return (
    <section className="mt-5 mb-7">
      <div className="container justify-content-center">
        {/* Title */}
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h3 className="mb-2">Explore Our Range of Cars</h3>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="row g-4 g-md-5 align-items-center justify-content-center">
              {cars.map((item, index) => (
                <CarCard key={index} src={item.src} category={item.category} />
              ))}
            </div>{" "}
            {/* Row END */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreCar;
