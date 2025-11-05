"use client"

import type React from "react"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
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
    setFormData({ firstName: "", lastName: "", email: "", phone: "", subject: "", message: "" })
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a2e1a] to-[#1a5a33] py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-5xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-[#c4ff00] text-xl">
            Get in touch with our team and let us help you achieve your financial goals
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-bold text-[#0a2e1a] mb-8">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#c4ff00] focus:ring-2 focus:ring-[#c4ff00] focus:ring-opacity-20"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#c4ff00] focus:ring-2 focus:ring-[#c4ff00] focus:ring-opacity-20"
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#c4ff00] focus:ring-2 focus:ring-[#c4ff00] focus:ring-opacity-20"
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#c4ff00] focus:ring-2 focus:ring-[#c4ff00] focus:ring-opacity-20"
                />
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#c4ff00] focus:ring-2 focus:ring-[#c4ff00] focus:ring-opacity-20"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-[#c4ff00] focus:ring-2 focus:ring-[#c4ff00] focus:ring-opacity-20"
                />
                <button
                  type="submit"
                  className="w-full bg-[#0a2e1a] text-[#c4ff00] py-4 font-bold hover:bg-[#1a5a33] transition rounded"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-[#0a2e1a] mb-8">Contact Information</h2>
              <div className="space-y-8">
                <div className="pb-6 border-b border-gray-200">
                  <p className="font-bold text-[#c4ff00] mb-2 text-lg">Phone</p>
                  <p className="text-gray-700">+234 700 000 0000</p>
                  <p className="text-gray-600 text-sm">Available 9:00 AM - 5:00 PM</p>
                </div>
                <div className="pb-6 border-b border-gray-200">
                  <p className="font-bold text-[#c4ff00] mb-2 text-lg">WhatsApp</p>
                  <p className="text-gray-700">+234 700 000 0000</p>
                  <p className="text-gray-600 text-sm">Quick responses available</p>
                </div>
                <div className="pb-6 border-b border-gray-200">
                  <p className="font-bold text-[#c4ff00] mb-2 text-lg">Email</p>
                  <p className="text-gray-700">info@zamanicapital.com</p>
                  <p className="text-gray-600 text-sm">Response within 24 hours</p>
                </div>
                <div>
                  <p className="font-bold text-[#c4ff00] mb-2 text-lg">Address</p>
                  <p className="text-gray-700">Lagos, Nigeria</p>
                  <p className="text-gray-600 text-sm">Visit our office for more information</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#0a2e1a] mb-8">Find Us on the Map</h2>
            <div className="w-full h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
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
      </section>

      <Footer />
    </main>
  )
}
