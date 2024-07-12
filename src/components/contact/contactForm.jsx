const ContactForm = () => {
    return (
      <div className="contact-form">
              <h4 className="opacity-2" data-aos="fade-down">Reach Us</h4>
              <h2 data-aos="fade-down">We&apos;re here to assist you every step.</h2>
              <form className="mt-4" data-aos="fade-up">
                  <div className="mb-4 form-control-bg-light">
                      <label className="form-label">Your name *</label>
                      <input type="text" className="form-control" />
                  </div>
                  <div className="mb-4 form-control-bg-light">
                      <label className="form-label">Email address *</label>
                      <input type="email" className="form-control" />
                  </div>
                  <div className="mb-4 form-control-bg-light">
                      <label className="form-label">Phone number *</label>
                      <input type="text" className="form-control" />
                  </div>
                  <div className="mb-4 form-control-bg-light">
                      <label className="form-label">Message *</label>
                      <textarea className="form-control" rows="4"></textarea>
                  </div>
                  <div>
                      <button className="btn btn-primary mb-0" type="button">Send Message</button>
                  </div>
              </form>
          </div>
    );
  };

  export default ContactForm;