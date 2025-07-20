"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, ArrowLeft, CreditCard, Lock, User } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LoginForm() {
  const [showPin, setShowPin] = useState(false)
  const [formData, setFormData] = useState({
    cardNumber: "",
    cvv: "",
    pin: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store user name for dashboard
    localStorage.setItem("userName", "John Doe") // This would come from API
    window.location.href = "/dashboard"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 flex items-center justify-center p-4 font-inter">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-lg w-full">
        <div className="glass-morphism rounded-3xl p-10 shadow-2xl">
          <div className="flex items-center mb-8">
            <Link href="/" className="text-white hover:text-gray-200 transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div className="flex items-center space-x-3 ml-4">
              <Image src="/images/adapt-logo.png" alt="Adapt Logo" width={32} height={32} className="invert" />
              <h1 className="text-3xl font-bold text-white font-playfair">Welcome Back</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <label className="block text-white text-lg font-semibold mb-3 font-poppins">Credit Card Number</label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-lg backdrop-blur-sm"
                  value={formData.cardNumber}
                  onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-white text-lg font-semibold mb-3 font-poppins">CVV</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type="text"
                  placeholder="123"
                  maxLength={3}
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-lg backdrop-blur-sm"
                  value={formData.cvv}
                  onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-white text-lg font-semibold mb-3 font-poppins">PIN</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type={showPin ? "text" : "password"}
                  placeholder="Enter your PIN"
                  className="w-full pl-12 pr-12 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-lg backdrop-blur-sm"
                  value={formData.pin}
                  onChange={(e) => setFormData({ ...formData, pin: e.target.value })}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPin(!showPin)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 hover:text-white transition-colors"
                >
                  {showPin ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-white to-gray-100 text-gray-900 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Sign In
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/80 text-lg">
              Don't have an account?{" "}
              <Link href="/signup" className="text-white font-bold hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
