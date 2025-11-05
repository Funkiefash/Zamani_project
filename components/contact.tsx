"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will be in touch soon!")
    setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 bg-white border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-[#0a2e1a] text-center">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-1">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#c4ff00]"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#c4ff00]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#c4ff00]"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#c4ff00]"
              />
              <button
                type="submit"
                className="w-full bg-[#0a2e1a] text-[#c4ff00] py-3 font-bold hover:bg-[#1a5a33] transition"
              >
                SUBMIT
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-[#0a2e1a] mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-[#0a2e1a]">Phone</p>
                <p className="text-gray-700">+234 700 000 0000</p>
              </div>
              <div>
                <p className="font-bold text-[#0a2e1a]">WhatsApp</p>
                <p className="text-gray-700">+234 700 000 0000</p>
              </div>
              <div>
                <p className="font-bold text-[#0a2e1a]">Email</p>
                <p className="text-gray-700">info@zamanicapital.com</p>
              </div>
              <div>
                <p className="font-bold text-[#0a2e1a]">Address</p>
                <p className="text-gray-700">Lagos, Nigeria</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-[#0a2e1a] mb-6">Location</h3>
            <div className="w-full h-64 bg-gray-200 rounded overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6649408833946!2d3.3869!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b7dd4444445%3A0x5555555555555555!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
