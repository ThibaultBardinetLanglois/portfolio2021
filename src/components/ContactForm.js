import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
emailjs.init("user_GsgGPgJ1chMQQ9tzSMDNj")

const ContactForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const isEmailCorrect = () => {
        
        let mailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (email.match(mailRegex)) {
            return true;
        } else {
            return false;
        }
    };

    useEffect(() => {
        let nameBlock = document.querySelector(".name-block");
        let emailBlock = document.querySelector(".email-block");
        let messageBlock = document.querySelector(".message-block");
        let isMail = document.querySelector(".not-valid-email");

        if(name) {
            nameBlock.classList.add("filled");
            nameBlock.classList.remove("error");
        } else {
            nameBlock.classList.remove("filled");
        }

        if(email && isEmailCorrect()) {
            emailBlock.classList.add("filled");
            emailBlock.classList.remove("error");
            isMail.style.display = "none";
        } else {
            emailBlock.classList.remove("filled");
        }

        if(message) {
            messageBlock.classList.add("filled");
            messageBlock.classList.remove("error");

        } else {
            messageBlock.classList.remove("filled");
        }
        
    }, [name, email, message]);

    const handleSubmit = (e) => {
        e.preventDefault();

        let nameBlock = document.querySelector(".name-block");
        let emailBlock = document.querySelector(".email-block");
        let isMail = document.querySelector(".not-valid-email");
        let messageBlock = document.querySelector(".message-block");
        let formMessageInfo = document.querySelector("#info-message");

        if(!isEmailCorrect()) {
            isMail.style.display = "block";
            isMail.style.animation = "dongle 1s";
            setTimeout(() => {
                isMail.style.animation = "none";
            }, 1000);
        }

        if(name && isEmailCorrect() && message) {
            console.log(isEmailCorrect);
            nameBlock.classList.remove("error");
            emailBlock.classList.remove("error");
            messageBlock.classList.remove("error");
            isMail.style.display = "none";

            formMessageInfo.innerHTML = "Message being sent...";
            formMessageInfo.style.background = "#5CC1A5";
            formMessageInfo.style.opacity = "1";

            /*emailJs code here*/
            emailjs
                .send(
                    "service_yefcw6t",
                    "template_z82sz69",
                    {
                        name,
                        email,
                        message,
                      },
                    // your user ID (protected by .env)
                    process.env.REACT_APP_EMAILJS_KEY
                )
                .then(
                    () => {
                        formMessageInfo.style.animation = "none";
                        formMessageInfo.style.animation = "hithere 0.8s ease";
                        formMessageInfo.innerHTML = "Message send!\n I'll contact you soon!";

                        nameBlock.classList.remove("error");
                        emailBlock.classList.remove("error");
                        messageBlock.classList.remove("error");
                        setName("");
                        setEmail("");
                        setMessage("");

                        setTimeout(() => {
                            formMessageInfo.style.opacity = "0";
                        }, 5000);
                    },
                    (err) => {
                        console.log(err);
                        formMessageInfo.style.background = "#EF4852";
                        formMessageInfo.innerHTML = "An error occured, please restart";
                    }
                )

        } else {
            formMessageInfo.innerHTML = "Thanks to fill the fields correctly";
            formMessageInfo.style.opacity = "1";
            formMessageInfo.style.animation = "none";
            formMessageInfo.style.animation = "shake 0.8s ease";
            formMessageInfo.style.background = "#EF4852";
            formMessageInfo.style.color = "white";
            setTimeout(() => {
                formMessageInfo.style.animation = "none";
                formMessageInfo.style.opacity = 0;
            }, 3000);
        }

        if(!name) {
            nameBlock.classList.add("error");
        } 
        if(!email) {
            emailBlock.classList.add("error");
        }
        if (!message) {
            messageBlock.classList.add("error");
        }
    }

    return (
        <div className="form-block">
            <form className="contact-form">
                <div className="name-block">
                    <input 
                        className="input"
                        type="text" 
                        id="name" 
                        name="name" 
                        required
                        onChange={(e) => setName(e.target.value)}
                        placeholder="name"
                        value={name}
                    />
                </div>
                <div className="email-block">
                    <label className="not-valid-email">Invalid Email</label>
                    <input
                        className="input"
                        type="text"
                        id="email"
                        name="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email"
                        value={email}
                    />
                </div>
                <div className="message-block">
                    <textarea
                        id="message"
                        name="message"
                        required
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="message"
                        value={message}
                    />
                </div>
                <input
                    className="form-button"
                    type="submit"
                    value="Send"
                    onClick={(e) => handleSubmit(e)}
                />
                <div id="info-message"></div>
            </form>
        </div>
    )
}

export default ContactForm;