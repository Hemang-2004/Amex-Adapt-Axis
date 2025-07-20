"use client"

import type React from "react"

import { useState } from "react"
import { Eye, EyeOff, ArrowLeft, MapPin, User, Phone, CreditCard, Lock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function SignupForm() {
  const [showPin, setShowPin] = useState(false)
  const [showLocationModal, setShowLocationModal] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    cardNumber: "",
    cvv: "",
    pin: "",
    location: "",
  })

  const handleLocationClick = () => {
    setShowLocationModal(true)
    // Simulate getting user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        // Convert coordinates to location name (in real app, use reverse geocoding)
        setFormData({
          ...formData,
          location: "Bangalore, Karnataka, India",
        })
        setShowLocationModal(false)
      })
    } else {
      setFormData({
        ...formData,
        location: "Bangalore, Karnataka, India",
      })
      setShowLocationModal(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Store user name for dashboard
    localStorage.setItem("userName", formData.name)
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
              <h1 className="text-3xl font-bold text-white font-playfair">Join Adapt</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="block text-white text-lg font-semibold mb-3 font-poppins">Full Name</label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type="text"
                  placeholder="John Doe"
                  autoComplete="name"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-lg backdrop-blur-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-white text-lg font-semibold mb-3 font-poppins">Contact Number</label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type="tel"
                  placeholder="+91 8817972743"
                  autoComplete="tel"
                  className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-lg backdrop-blur-sm"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className="relative">
              <label className="block text-white text-lg font-semibold mb-3 font-poppins">Credit Card Number</label>
              <div className="relative">
                <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  autoComplete="cc-number"
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
                  autoComplete="cc-csc"
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
                <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70 w-5 h-5" />
                <input
                  type={showPin ? "text" : "password"}
                  placeholder="Create a 4-digit PIN"
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

            <div className="relative">
              <label className="block text-white text-lg font-semibold mb-3 font-poppins">Location</label>
              <div className="flex space-x-3">
                <input
                  type="text"
                  placeholder="Your location"
                  autoComplete="address-level2"
                  className="flex-1 px-4 py-4 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-lg backdrop-blur-sm"
                  value={formData.location}
                  readOnly
                />
                <button
                  type="button"
                  onClick={handleLocationClick}
                  className="px-6 py-4 bg-white/10 border border-white/20 rounded-2xl text-white hover:bg-white/20 transition-all transform hover:scale-105"
                >
                  <MapPin className="w-5 h-5" />
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-white to-gray-100 text-gray-900 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Create Account
            </button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-white/80 text-lg">
              Already have an account?{" "}
              <Link href="/login" className="text-white font-bold hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </div>

        {/* Location Modal */}
        {showLocationModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="glass-morphism rounded-2xl p-8 max-w-sm w-full mx-4">
              <h3 className="text-xl font-bold mb-6 text-white text-center font-poppins">Getting your location...</h3>
              <div className="flex justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
