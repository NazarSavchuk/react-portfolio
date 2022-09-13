import React, { useState, useRef } from "react";
import "./Contacts.scss";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FaCheckCircle } from "react-icons/fa";
import emailjs from "emailjs-com";

function Contacts() {
  const [sendMessage, setSendMessage] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1kqpr3l",
        "template_29htart",
        form.current,
        "o9zQCawrx1kPPLev0"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setSendMessage(true);
    setTimeout(() => {
      setSendMessage(false);
    }, 10000);
  };
  return (
    <section id="contacts">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <a
            className="contact__option"
            href="mailto:nazarsavcuk3@gmail.com"
            target="_blank"
            rel="noreferrer">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>E-mail</h4>
            <h5>nazarsavcuk3@gmail.com</h5>
          </a>
          <a
            className="contact__option"
            href="https://m.me/nazar.savchuk.liED"
            target="_blank"
            rel="noreferrer">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Nazar Savchuk</h5>
          </a>
          <a
            className="contact__option"
            href="https://api.whatsapp.com/send?phone=+380688217395"
            target="_blank"
            rel="noreferrer">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+48 *** *** 247</h5>
          </a>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your message"
            required></textarea>
          <div className="submit__block">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {sendMessage ? (
              <div className="send__message">
                <FaCheckCircle /> Message just sent
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
