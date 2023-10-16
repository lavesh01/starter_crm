import axios from "axios";
import React, { useState } from "react";

import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Must be 2 or more characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  phone: z.string(),
  message: z.string(),
});

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    try {
      const validatedData = contactFormSchema.parse(formData);
      console.log("Form Data:", validatedData);
      axios.post('/api/emails', validatedData)
        .then(res => console.log(res.data))
        .catch(error => console.error(error))

    } catch (error) {
      console.error("Form validation error:", error.errors);
    }
  };
  
  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
      <div className="col-12">
        <div className="form-input">
          <input 
            type="text" 
            id="name"
            onChange={handleChange}
            value={formData.name} 
            required 
          />
          <label htmlFor="name" className="lh-1 text-16 text-light-1">
            Full Name
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input 
            type="email" 
            id="email"
            onChange={handleChange}
            value={formData.email} 
            required 
          />
          <label htmlFor="email" className="lh-1 text-16 text-light-1">
            Email
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <input 
            type="tel" 
            id="phone"
            onChange={handleChange}
            value={formData.phone} 
            required 
          />
          <label htmlFor="phone" className="lh-1 text-16 text-light-1">
            Phone
          </label>
        </div>
      </div>
      <div className="col-12">
        <div className="form-input">
          <textarea 
            id="message" 
            required rows="4"    
            onChange={handleChange}
            value={formData.message}>
            </textarea>
          <label htmlFor="message" className="lh-1 text-16 text-light-1">
            Your Message
          </label>
        </div>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="button px-24 h-50 -dark-1 bg-blue-1 text-white"
        >
          Send Message <div className="icon-arrow-top-right ml-15"></div>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
