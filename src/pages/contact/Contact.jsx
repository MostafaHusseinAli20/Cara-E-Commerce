import "./contact.css";
import contactBg from "./imgbg/contact.png";
// Icon 
import { RiBuilding4Line } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
// import emailjs
import emailjs from 'emailjs-com'
function Contact() {
  // Send Email
  const sendEmail = (e)=> {
    e.preventDefault();
    emailjs.sendForm("service_c0gjjw5" , "template_ctguijg" , 
    e.target, "Bd0yQKJqMP7mdHX0g")
    .then(() => {})
    .catch(err => console.error(err.text))
  }
  // show alert
  const alertDiv = () => {
    let divAlert = document.querySelector(".divAlert")
    let alearting =  document.querySelector(".alearting")
    alearting.className = `alert alert-success w-25 mx-auto my-4 text-center`
    alearting.textContent = `Email sent successfully!`
    divAlert.appendChild(alearting)
    setTimeout(() => {
      divAlert.remove();
    }, 3000)
  }
  // Clear Inputs
  const clearInputs = () => {
    document.querySelector("#Name").value = ("")
    document.querySelector("#email").value = ("")
    document.querySelector("#subject").value = ("")
    document.querySelector("#message").value = ("")
  }
  return (
    <>
      <section className="contact">
        <div className="mainTextContact text-light text-center container">
          <h1 className="fw-bold">#let's_talk</h1>
          <p>Leave a message, We love to hear from you!</p>
        </div>
        <div className="imgBg">
          <img src={contactBg} alt="" />
        </div>
        <div className="divAlert">
          <div className=" alearting">

          </div>
        </div>
        {/* Form Section */}
        <div className="form_section my-5 py-4 container">
          <div className="row ">
            <div className="col-lg-6 col-sm-12">
              <form onSubmit={sendEmail}>
                {/* Your Name */}
                <h1 className="mb-4 text-light">Leave a message</h1>
                <div className="mb-3">
                  <label htmlFor="Name" className="form-label text-light">
                    Your Name
                  </label>
                  <input 
                  name="user_name" type="text" className="form-control" id="Name" />
                </div>
                {/* E-mail */}
                <div className="mb-3 mt-4">
                  <label htmlFor="email" className="form-label text-light">
                    E-mail
                  </label>
                  <input 
                  name="user_email" type="email" className="form-control" id="email" />
                </div>
                {/* Subject */}
                <div className="mb-3 mt-4">
                  <label htmlFor="subject" className="form-label text-light">
                    Subject
                  </label>
                  <input 
                  name="message" type="text" className="form-control" id="subject" />
                </div>
                {/* Message */}
                <div className="mb-3 mt-4">
                  <label htmlFor="message" className="form-label text-light">
                    Your message
                  </label>
                  <textarea 
                  name="message" type="text" className="form-control p-4" id="message" >
                  </textarea>
                </div>
               {/* Send Button */}
               <button onClick={alertDiv} type="submit" className="btn btn mt-2">
                Send Message
               </button>
               <button onClick={clearInputs} type="button" className="btn btn mt-2 mx-3">
                Clear Inputs
               </button>
              </form>
            </div>
            <div className="col-lg-6 col-sm-12 getInTouch">
                <h1 className="text-light">Get in touch</h1>
                <div className="d-flex">
                <RiBuilding4Line className="mt-2 fs-5 text-light"/> <p className="mt-2 ms-3"> 562 Wellingtion Road, Street 32. San Fransisco </p>
                </div>
                <div className="d-flex">
                <BiMessageSquareDetail className="mt-2 fs-5 text-light"/> <p className="mt-1 ms-3"> contact@example.com </p>
                </div>
                <div className="d-flex">
                <MdOutlinePhoneInTalk className="mt-2 fs-5 text-light"/> <p className="mt-1 ms-3"> +0123456789 (+91) </p>
                </div>
                <div className="d-flex">
                <CiClock2  className="mt-2 fs-5 text-light"/> <p className="mt-1 ms-3"> Monday to Saturday: 8:00am to 6:00pm </p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
