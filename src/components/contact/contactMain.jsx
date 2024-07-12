import { useEffect } from "react";
import ContactImage from "../../assets/img/about/02.jpg";
import ContactForm from "./contactForm";
import InfoCard from "./infoCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactMain = () => {
  useEffect(() => {
    AOS.init({
      duration: 500, // Adjust the animation duration (ms)
      once: true, // Only animate once
    });
  }, []);
  return (
    <main>
      <section className="pt-4 pt-md-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <ContactForm />
            </div>

            <div className="col-lg-6 pt-5 col-xl-5 text-center text-lg-end position-relative ms-auto">
              <figure className="position-absolute start-0 top-0 d-none d-md-block mt-n5 ms-n3">
                <svg
                  height="400"
                  className="fill-primary opacity-2"
                  viewBox="0 0 340 340"
                >
                  <circle cx="194.2" cy="2.2" r="2.2"></circle>
                  <circle cx="2.2" cy="2.2" r="2.2"></circle>
                  <circle cx="218.2" cy="2.2" r="2.2"></circle>
                  <circle cx="26.2" cy="2.2" r="2.2"></circle>
                  <circle cx="242.2" cy="2.2" r="2.2"></circle>
                  <circle cx="50.2" cy="2.2" r="2.2"></circle>
                  <circle cx="266.2" cy="2.2" r="2.2"></circle>
                  <circle cx="74.2" cy="2.2" r="2.2"></circle>
                  <circle cx="290.2" cy="2.2" r="2.2"></circle>
                  <circle cx="98.2" cy="2.2" r="2.2"></circle>
                  <circle cx="314.2" cy="2.2" r="2.2"></circle>
                  <circle cx="122.2" cy="2.2" r="2.2"></circle>
                  <circle cx="338.2" cy="2.2" r="2.2"></circle>
                  <circle cx="146.2" cy="2.2" r="2.2"></circle>
                  <circle cx="170.2" cy="2.2" r="2.2"></circle>
                  <circle cx="194.2" cy="26.2" r="2.2"></circle>
                  <circle cx="2.2" cy="26.2" r="2.2"></circle>
                  <circle cx="218.2" cy="26.2" r="2.2"></circle>
                  <circle cx="26.2" cy="26.2" r="2.2"></circle>
                  <circle cx="242.2" cy="26.2" r="2.2"></circle>
                  <circle cx="50.2" cy="26.2" r="2.2"></circle>
                  <circle cx="266.2" cy="26.2" r="2.2"></circle>
                  <circle cx="74.2" cy="26.2" r="2.2"></circle>
                  <circle cx="290.2" cy="26.2" r="2.2"></circle>
                  <circle cx="98.2" cy="26.2" r="2.2"></circle>
                  <circle cx="314.2" cy="26.2" r="2.2"></circle>
                  <circle cx="122.2" cy="26.2" r="2.2"></circle>
                  <circle cx="338.2" cy="26.2" r="2.2"></circle>
                  <circle cx="146.2" cy="26.2" r="2.2"></circle>
                  <circle cx="170.2" cy="26.2" r="2.2"></circle>
                  <circle cx="194.2" cy="50.2" r="2.2"></circle>
                  <circle cx="2.2" cy="50.2" r="2.2"></circle>
                  <circle cx="218.2" cy="50.2" r="2.2"></circle>
                  <circle cx="26.2" cy="50.2" r="2.2"></circle>
                  <circle cx="242.2" cy="50.2" r="2.2"></circle>
                  <circle cx="50.2" cy="50.2" r="2.2"></circle>
                  <circle cx="266.2" cy="50.2" r="2.2"></circle>
                  <circle cx="74.2" cy="50.2" r="2.2"></circle>
                  <circle cx="290.2" cy="50.2" r="2.2"></circle>
                  <circle cx="98.2" cy="50.2" r="2.2"></circle>
                  <circle cx="314.2" cy="50.2" r="2.2"></circle>
                  <circle cx="122.2" cy="50.2" r="2.2"></circle>
                  <circle cx="338.2" cy="50.2" r="2.2"></circle>
                  <circle cx="146.2" cy="50.2" r="2.2"></circle>
                  <circle cx="170.2" cy="50.2" r="2.2"></circle>
                  <circle cx="194.2" cy="74.2" r="2.2"></circle>
                  <circle cx="2.2" cy="74.2" r="2.2"></circle>
                  <circle cx="218.2" cy="74.2" r="2.2"></circle>
                  <circle cx="26.2" cy="74.2" r="2.2"></circle>
                  <circle cx="242.2" cy="74.2" r="2.2"></circle>
                  <circle cx="50.2" cy="74.2" r="2.2"></circle>
                  <circle cx="266.2" cy="74.2" r="2.2"></circle>
                  <circle cx="74.2" cy="74.2" r="2.2"></circle>
                  <circle cx="290.2" cy="74.2" r="2.2"></circle>
                  <circle cx="98.2" cy="74.2" r="2.2"></circle>
                  <circle cx="314.2" cy="74.2" r="2.2"></circle>
                  <circle cx="122.2" cy="74.2" r="2.2"></circle>
                  <circle cx="338.2" cy="74.2" r="2.2"></circle>
                  <circle cx="146.2" cy="74.2" r="2.2"></circle>
                  <circle cx="170.2" cy="74.2" r="2.2"></circle>
                  <circle cx="194.2" cy="98.2" r="2.2"></circle>
                  <circle cx="2.2" cy="98.2" r="2.2"></circle>
                  <circle cx="218.2" cy="98.2" r="2.2"></circle>
                  <circle cx="26.2" cy="98.2" r="2.2"></circle>
                  <circle cx="242.2" cy="98.2" r="2.2"></circle>
                  <circle cx="50.2" cy="98.2" r="2.2"></circle>
                  <circle cx="266.2" cy="98.2" r="2.2"></circle>
                  <circle cx="74.2" cy="98.2" r="2.2"></circle>
                  <circle cx="290.2" cy="98.2" r="2.2"></circle>
                  <circle cx="98.2" cy="98.2" r="2.2"></circle>
                  <circle cx="314.2" cy="98.2" r="2.2"></circle>
                  <circle cx="122.2" cy="98.2" r="2.2"></circle>
                  <circle cx="338.2" cy="98.2" r="2.2"></circle>
                  <circle cx="146.2" cy="98.2" r="2.2"></circle>
                  <circle cx="170.2" cy="98.2" r="2.2"></circle>
                  <circle cx="194.2" cy="122.2" r="2.2"></circle>
                  <circle cx="2.2" cy="122.2" r="2.2"></circle>
                  <circle cx="218.2" cy="122.2" r="2.2"></circle>
                  <circle cx="26.2" cy="122.2" r="2.2"></circle>
                  <circle cx="242.2" cy="122.2" r="2.2"></circle>
                  <circle cx="50.2" cy="122.2" r="2.2"></circle>
                  <circle cx="266.2" cy="122.2" r="2.2"></circle>
                  <circle cx="74.2" cy="122.2" r="2.2"></circle>
                  <circle cx="290.2" cy="122.2" r="2.2"></circle>
                  <circle cx="98.2" cy="122.2" r="2.2"></circle>
                  <circle cx="314.2" cy="122.2" r="2.2"></circle>
                  <circle cx="122.2" cy="122.2" r="2.2"></circle>
                  <circle cx="338.2" cy="122.2" r="2.2"></circle>
                  <circle cx="146.2" cy="122.2" r="2.2"></circle>
                  <circle cx="170.2" cy="122.2" r="2.2"></circle>
                  <circle cx="194.2" cy="146.2" r="2.2"></circle>
                  <circle cx="2.2" cy="146.2" r="2.2"></circle>
                  <circle cx="218.2" cy="146.2" r="2.2"></circle>
                  <circle cx="26.2" cy="146.2" r="2.2"></circle>
                  <circle cx="242.2" cy="146.2" r="2.2"></circle>
                  <circle cx="50.2" cy="146.2" r="2.2"></circle>
                  <circle cx="266.2" cy="146.2" r="2.2"></circle>
                  <circle cx="74.2" cy="146.2" r="2.2"></circle>
                  <circle cx="290.2" cy="146.2" r="2.2"></circle>
                  <circle cx="98.2" cy="146.2" r="2.2"></circle>
                  <circle cx="314.2" cy="146.2" r="2.2"></circle>
                  <circle cx="122.2" cy="146.2" r="2.2"></circle>
                  <circle cx="338.2" cy="146.2" r="2.2"></circle>
                  <circle cx="146.2" cy="146.2" r="2.2"></circle>
                  <circle cx="170.2" cy="146.2" r="2.2"></circle>
                  <circle cx="194.2" cy="170.2" r="2.2"></circle>
                  <circle cx="2.2" cy="170.2" r="2.2"></circle>
                  <circle cx="218.2" cy="170.2" r="2.2"></circle>
                  <circle cx="26.2" cy="170.2" r="2.2"></circle>
                  <circle cx="242.2" cy="170.2" r="2.2"></circle>
                  <circle cx="50.2" cy="170.2" r="2.2"></circle>
                  <circle cx="266.2" cy="170.2" r="2.2"></circle>
                  <circle cx="74.2" cy="170.2" r="2.2"></circle>
                  <circle cx="290.2" cy="170.2" r="2.2"></circle>
                  <circle cx="98.2" cy="170.2" r="2.2"></circle>
                  <circle cx="314.2" cy="170.2" r="2.2"></circle>
                  <circle cx="122.2" cy="170.2" r="2.2"></circle>
                  <circle cx="338.2" cy="170.2" r="2.2"></circle>
                  <circle cx="146.2" cy="170.2" r="2.2"></circle>
                  <circle cx="170.2" cy="170.2" r="2.2"></circle>
                  <circle cx="194.2" cy="194.2" r="2.2"></circle>
                  <circle cx="2.2" cy="194.2" r="2.2"></circle>
                  <circle cx="218.2" cy="194.2" r="2.2"></circle>
                  <circle cx="26.2" cy="194.2" r="2.2"></circle>
                  <circle cx="242.2" cy="194.2" r="2.2"></circle>
                  <circle cx="50.2" cy="194.2" r="2.2"></circle>
                  <circle cx="266.2" cy="194.2" r="2.2"></circle>
                  <circle cx="74.2" cy="194.2" r="2.2"></circle>
                  <circle cx="290.2" cy="194.2" r="2.2"></circle>
                  <circle cx="98.2" cy="194.2" r="2.2"></circle>
                  <circle cx="314.2" cy="194.2" r="2.2"></circle>
                  <circle cx="122.2" cy="194.2" r="2.2"></circle>
                  <circle cx="338.2" cy="194.2" r="2.2"></circle>
                  <circle cx="146.2" cy="194.2" r="2.2"></circle>
                  <circle cx="170.2" cy="194.2" r="2.2"></circle>
                  <circle cx="194.2" cy="218.2" r="2.2"></circle>
                  <circle cx="2.2" cy="218.2" r="2.2"></circle>
                  <circle cx="218.2" cy="218.2" r="2.2"></circle>
                  <circle cx="26.2" cy="218.2" r="2.2"></circle>
                  <circle cx="242.2" cy="218.2" r="2.2"></circle>
                  <circle cx="50.2" cy="218.2" r="2.2"></circle>
                  <circle cx="266.2" cy="218.2" r="2.2"></circle>
                  <circle cx="74.2" cy="218.2" r="2.2"></circle>
                  <circle cx="290.2" cy="218.2" r="2.2"></circle>
                  <circle cx="98.2" cy="218.2" r="2.2"></circle>
                  <circle cx="314.2" cy="218.2" r="2.2"></circle>
                  <circle cx="122.2" cy="218.2" r="2.2"></circle>
                  <circle cx="338.2" cy="218.2" r="2.2"></circle>
                  <circle cx="146.2" cy="218.2" r="2.2"></circle>
                  <circle cx="170.2" cy="218.2" r="2.2"></circle>
                  <circle cx="194.2" cy="242.2" r="2.2"></circle>
                  <circle cx="2.2" cy="242.2" r="2.2"></circle>
                  <circle cx="218.2" cy="242.2" r="2.2"></circle>
                  <circle cx="26.2" cy="242.2" r="2.2"></circle>
                  <circle cx="242.2" cy="242.2" r="2.2"></circle>
                  <circle cx="50.2" cy="242.2" r="2.2"></circle>
                  <circle cx="266.2" cy="242.2" r="2.2"></circle>
                  <circle cx="74.2" cy="242.2" r="2.2"></circle>
                  <circle cx="290.2" cy="242.2" r="2.2"></circle>
                  <circle cx="98.2" cy="242.2" r="2.2"></circle>
                  <circle cx="314.2" cy="242.2" r="2.2"></circle>
                  <circle cx="122.2" cy="242.2" r="2.2"></circle>
                  <circle cx="338.2" cy="242.2" r="2.2"></circle>
                  <circle cx="146.2" cy="242.2" r="2.2"></circle>
                  <circle cx="170.2" cy="242.2" r="2.2"></circle>
                  <circle cx="194.2" cy="266.2" r="2.2"></circle>
                  <circle cx="2.2" cy="266.2" r="2.2"></circle>
                  <circle cx="218.2" cy="266.2" r="2.2"></circle>
                  <circle cx="26.2" cy="266.2" r="2.2"></circle>
                  <circle cx="242.2" cy="266.2" r="2.2"></circle>
                  <circle cx="50.2" cy="266.2" r="2.2"></circle>
                  <circle cx="266.2" cy="266.2" r="2.2"></circle>
                  <circle cx="74.2" cy="266.2" r="2.2"></circle>
                  <circle cx="290.2" cy="266.2" r="2.2"></circle>
                  <circle cx="98.2" cy="266.2" r="2.2"></circle>
                  <circle cx="314.2" cy="266.2" r="2.2"></circle>
                  <circle cx="122.2" cy="266.2" r="2.2"></circle>
                  <circle cx="338.2" cy="266.2" r="2.2"></circle>
                  <circle cx="146.2" cy="266.2" r="2.2"></circle>
                  <circle cx="170.2" cy="266.2" r="2.2"></circle>
                  <circle cx="194.2" cy="290.2" r="2.2"></circle>
                  <circle cx="2.2" cy="290.2" r="2.2"></circle>
                  <circle cx="218.2" cy="290.2" r="2.2"></circle>
                  <circle cx="26.2" cy="290.2" r="2.2"></circle>
                  <circle cx="242.2" cy="290.2" r="2.2"></circle>
                  <circle cx="50.2" cy="290.2" r="2.2"></circle>
                  <circle cx="266.2" cy="290.2" r="2.2"></circle>
                  <circle cx="74.2" cy="290.2" r="2.2"></circle>
                  <circle cx="290.2" cy="290.2" r="2.2"></circle>
                  <circle cx="98.2" cy="290.2" r="2.2"></circle>
                  <circle cx="314.2" cy="290.2" r="2.2"></circle>
                  <circle cx="122.2" cy="290.2" r="2.2"></circle>
                  <circle cx="338.2" cy="290.2" r="2.2"></circle>
                  <circle cx="146.2" cy="290.2" r="2.2"></circle>
                  <circle cx="170.2" cy="290.2" r="2.2"></circle>
                  <circle cx="194.2" cy="314.2" r="2.2"></circle>
                  <circle cx="2.2" cy="314.2" r="2.2"></circle>
                  <circle cx="218.2" cy="314.2" r="2.2"></circle>
                  <circle cx="26.2" cy="314.2" r="2.2"></circle>
                  <circle cx="242.2" cy="314.2" r="2.2"></circle>
                  <circle cx="50.2" cy="314.2" r="2.2"></circle>
                  <circle cx="266.2" cy="314.2" r="2.2"></circle>
                  <circle cx="74.2" cy="314.2" r="2.2"></circle>
                  <circle cx="290.2" cy="314.2" r="2.2"></circle>
                  <circle cx="98.2" cy="314.2" r="2.2"></circle>
                  <circle cx="314.2" cy="314.2" r="2.2"></circle>
                  <circle cx="122.2" cy="314.2" r="2.2"></circle>
                  <circle cx="338.2" cy="314.2" r="2.2"></circle>
                  <circle cx="146.2" cy="314.2" r="2.2"></circle>
                  <circle cx="170.2" cy="314.2" r="2.2"></circle>
                  <circle cx="194.2" cy="338.2" r="2.2"></circle>
                  <circle cx="2.2" cy="338.2" r="2.2"></circle>
                  <circle cx="218.2" cy="338.2" r="2.2"></circle>
                  <circle cx="26.2" cy="338.2" r="2.2"></circle>
                  <circle cx="242.2" cy="338.2" r="2.2"></circle>
                  <circle cx="50.2" cy="338.2" r="2.2"></circle>
                  <circle cx="266.2" cy="338.2" r="2.2"></circle>
                  <circle cx="74.2" cy="338.2" r="2.2"></circle>
                  <circle cx="290.2" cy="338.2" r="2.2"></circle>
                  <circle cx="98.2" cy="338.2" r="2.2"></circle>
                  <circle cx="314.2" cy="338.2" r="2.2"></circle>
                  <circle cx="122.2" cy="338.2" r="2.2"></circle>
                  <circle cx="338.2" cy="338.2" r="2.2"></circle>
                  <circle cx="146.2" cy="338.2" r="2.2"></circle>
                  <circle cx="170.2" cy="338.2" r="2.2"></circle>
                </svg>
              </figure>

              <img
                src={ContactImage}
                className="rounded-3 position-relative"
                data-aos="fade-up-left"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-0 py-lg-5">
        <div className="container pb-lg-5">
          <div className="row g-4">
            <InfoCard
              title="Address"
              bgColor="bg-primary"
              address="#685, 3rd main, 6th cross, OMBR layout, Banasawadi Bangalore- 560043"
            />
            <InfoCard
              title="Reach Us"
              bgColor="bg-success"
              phoneNumbers={["+91 9972519906", "+91 9686018281"]}
              email="info@fugit.in"
              supportTime="Monday to Saturday, 9:00 am to 5:30 pm"
            />
            {/* Add more InfoCard components here if needed */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactMain;
