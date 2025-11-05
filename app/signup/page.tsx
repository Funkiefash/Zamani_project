"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SignupPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    verificationCode: "",
    password: "",
  })

  const [emailSent, setEmailSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleStepOne = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.fullName && formData.email) {
      setEmailSent(true)
      setStep(2)
    }
  }

  const handleStepTwo = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.verificationCode.length === 6) {
      setStep(3)
    }
  }

  const handleStepThree = (e: React.FormEvent) => {
    e.preventDefault()
    if (formData.password.length >= 8) {
      setStep(4)
    }
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-900 py-8 md:py-16 px-3 md:px-4">
        <div className="max-w-md mx-auto">
          {step === 1 && (
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Welcome to Zamani</h2>
              <p className="text-gray-500 text-xs md:text-sm mb-6">Join millions of investors today</p>

              <form onSubmit={handleStepOne} className="space-y-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#c4ff00] focus:border-transparent outline-none text-xs md:text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#c4ff00] focus:border-transparent outline-none text-xs md:text-sm"
                    placeholder="your@email.com"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c4ff00] text-gray-900 font-bold py-2 rounded hover:bg-[#b3ff00] transition text-xs md:text-sm"
                >
                  Create Account
                </button>

                <button
                  type="button"
                  className="w-full border border-gray-300 text-gray-900 font-semibold py-2 rounded hover:bg-gray-50 transition text-xs md:text-sm flex items-center justify-center gap-2"
                >
                  <img src="/google-icon.png" alt="Google" className="w-4 h-4 md:w-5 md:h-5" />
                  Register with Google
                </button>

                <p className="text-center text-xs text-gray-500 mt-4">
                  Already have an account?{" "}
                  <a href="#" className="text-gray-900 font-medium hover:underline">
                    Sign In
                  </a>
                </p>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Email Verification</h2>
              <p className="text-gray-500 text-xs md:text-sm mb-6">Enter the 6-digit code sent to {formData.email}</p>

              <form onSubmit={handleStepTwo} className="space-y-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Verification Code</label>
                  <div className="flex gap-1 md:gap-2 justify-between">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={formData.verificationCode[index] || ""}
                        onChange={(e) => {
                          const code = formData.verificationCode.split("")
                          code[index] = e.target.value
                          setFormData((prev) => ({
                            ...prev,
                            verificationCode: code.join(""),
                          }))
                          if (e.target.value && index < 5) {
                            const nextInput = document.querySelector(
                              `input[data-index="${index + 1}"]`,
                            ) as HTMLInputElement
                            nextInput?.focus()
                          }
                        }}
                        data-index={index}
                        className="w-8 h-8 md:w-10 md:h-10 border border-gray-300 rounded text-center font-bold text-sm md:text-base focus:ring-2 focus:ring-[#c4ff00] focus:border-transparent outline-none"
                      />
                    ))}
                  </div>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#c4ff00] w-1/3"></div>
                </div>

                <button
                  type="submit"
                  disabled={formData.verificationCode.length !== 6}
                  className="w-full bg-[#c4ff00] text-gray-900 font-bold py-2 rounded hover:bg-[#b3ff00] transition disabled:opacity-50 disabled:cursor-not-allowed text-xs md:text-sm"
                >
                  Verify Email
                </button>

                <p className="text-center text-xs text-gray-500">
                  Didn't receive the code?{" "}
                  <button type="button" className="text-gray-900 font-medium hover:underline">
                    Resend
                  </button>
                </p>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-1">Create Password</h2>
              <p className="text-gray-500 text-xs md:text-sm mb-6">Set a strong password for your account</p>

              <form onSubmit={handleStepThree} className="space-y-4">
                <div>
                  <label className="block text-xs md:text-sm font-medium text-gray-700 mb-2">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full px-3 md:px-4 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-[#c4ff00] focus:border-transparent outline-none text-xs md:text-sm"
                    placeholder="••••••••"
                  />
                  <p className="text-xs text-gray-500 mt-2">Minimum 8 characters required</p>
                </div>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-[#c4ff00] w-2/3"></div>
                </div>

                <button
                  type="submit"
                  disabled={formData.password.length < 8}
                  className="w-full bg-[#c4ff00] text-gray-900 font-bold py-2 rounded hover:bg-[#b3ff00] transition disabled:opacity-50 disabled:cursor-not-allowed text-xs md:text-sm"
                >
                  Continue
                </button>
              </form>
            </div>
          )}

          {step === 4 && (
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
              <div className="text-center">
                <div className="mb-4 text-4xl md:text-5xl">✓</div>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Email Verification Successful</h2>
                <p className="text-gray-500 text-xs md:text-sm mb-8">
                  Your account has been created successfully. Welcome to Zamani Capital!
                </p>

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-8">
                  <div className="h-full bg-[#c4ff00] w-full"></div>
                </div>

                <Link
                  href="/"
                  className="inline-block bg-[#c4ff00] text-gray-900 font-bold px-6 md:px-8 py-2 rounded hover:bg-[#b3ff00] transition text-xs md:text-sm"
                >
                  Go to Dashboard
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
