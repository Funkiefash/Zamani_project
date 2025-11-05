"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function SigninPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const [error, setError] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!formData.email || !formData.password) {
      setError("Please fill in all fields")
      return
    }

    if (formData.password.length < 8) {
      setError("Password must be at least 8 characters")
      return
    }

    setSubmitted(true)
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-white py-8 md:py-16 px-3 md:px-4">
        <div className="max-w-md mx-auto">
          {!submitted ? (
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 border border-gray-200">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
              <p className="text-gray-500 text-xs md:text-sm mb-6">Sign in to your Zamani Capital account</p>

              {error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded text-red-600 text-xs">{error}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
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
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#c4ff00] border-gray-300 rounded focus:ring-[#c4ff00] cursor-pointer"
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-xs md:text-sm text-gray-700 cursor-pointer">
                    Remember me
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#c4ff00] text-gray-900 font-bold py-2 rounded hover:bg-[#b3ff00] transition text-xs md:text-sm"
                >
                  Sign In
                </button>

                <button
                  type="button"
                  className="w-full border border-gray-300 text-gray-900 font-semibold py-2 rounded hover:bg-gray-50 transition text-xs md:text-sm flex items-center justify-center gap-2"
                >
                  <img src="/google-icon.png" alt="Google" className="w-4 h-4 md:w-5 md:h-5" />
                  Sign in with Google
                </button>

                <div className="text-center text-xs text-gray-600 pt-2">
                  <a href="#" className="text-[#0a2e1a] font-medium hover:underline">
                    Forgot your password?
                  </a>
                </div>

                <p className="text-center text-xs text-gray-500 mt-4">
                  Don't have an account?{" "}
                  <Link href="/signup" className="text-gray-900 font-medium hover:underline">
                    Sign Up
                  </Link>
                </p>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 text-center">
              <div className="mb-4 text-4xl md:text-5xl text-[#c4ff00]">✓</div>
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Sign In Successful</h2>
              <p className="text-gray-500 text-xs md:text-sm mb-8">Welcome back to Zamani Capital!</p>

              <Link
                href="/"
                className="inline-block bg-[#c4ff00] text-gray-900 font-bold px-6 md:px-8 py-2 rounded hover:bg-[#b3ff00] transition text-xs md:text-sm"
              >
                Go to Dashboard
              </Link>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  )
}
