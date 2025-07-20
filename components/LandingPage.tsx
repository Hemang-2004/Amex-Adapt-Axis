"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Star, MapPin, Phone, Mail, Instagram, MessageCircle, Send, Award, Target } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const partnerLogos = [
  { name: "Hilton Honors", placeholder: true },
  { name: "Marriott Bonvoy", placeholder: true },
  { name: "Airbase", placeholder: true },
  { name: "Bill.com", placeholder: true },
  { name: "Microsoft", placeholder: true },
  { name: "PayPal", placeholder: true },
  { name: "ICICI Bank", placeholder: true },
  { name: "HDFC Bank", placeholder: true },
  { name: "WTU", placeholder: true },
  { name: "Axis Bank", placeholder: true },
  { name: "Singapore Airlines", placeholder: true },
]

const timelineCards = [
  {
    title: "Offer Unlocked",
    description: "New cashback opportunity available for premium dining experiences",
    time: "2 hours ago",
    icon: "🎁",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Voucher Claimed",
    description: "Successfully redeemed Swiggy offer worth ₹500",
    time: "1 day ago",
    icon: "🎫",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Milestone Achieved",
    description: "Reached ₹50,000 spending milestone - Premium tier unlocked!",
    time: "3 days ago",
    icon: "🏆",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Reward Earned",
    description: "Earned 2,500 reward points from travel bookings",
    time: "1 week ago",
    icon: "💎",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Premium Upgrade",
    description: "Welcome to Adapt Premium - Exclusive benefits activated",
    time: "2 weeks ago",
    icon: "⭐",
    color: "from-indigo-500 to-purple-500",
  },
]

const mockupImages = ["/images/dashboard-mockup.png", "/images/horizon-ui.png", "/images/cashback-win.png"]

export default function LandingPage() {
  const [currentMockup, setCurrentMockup] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMockup((prev) => (prev + 1) % mockupImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-inter">
      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-morphism shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Image
                  src="/images/adapt-logo.png"
                  alt="Adapt Logo"
                  width={40}
                  height={40}
                  className="transition-transform group-hover:scale-110"
                />
              </div>
              <div className="text-3xl font-bold font-playfair bg-gradient-to-r from-amex-blue to-amex-purple bg-clip-text text-transparent">
                Adapt
              </div>
            </Link>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-amex-blue px-4 py-2 rounded-xl text-lg font-medium transition-all hover:bg-white/20"
                >
                  Features
                </a>
                <a
                  href="#offers"
                  className="text-gray-700 hover:text-amex-blue px-4 py-2 rounded-xl text-lg font-medium transition-all hover:bg-white/20"
                >
                  Offers
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-amex-blue px-4 py-2 rounded-xl text-lg font-medium transition-all hover:bg-white/20"
                >
                  Contact
                </a>
                <Link
                  href="/login"
                  className="bg-gradient-to-r from-amex-blue to-amex-purple text-white px-8 py-3 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-7xl lg:text-8xl font-bold font-playfair text-gray-900 leading-tight mb-8">
              A card that{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amex-blue via-amex-purple to-pink-500">
                adapts
              </span>
            </h1>
            <div className="space-y-4 mb-12">
              <p className="text-2xl text-gray-700 leading-relaxed font-poppins">to the way you live</p>
              <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto font-inter">
                A personalization engine that knows exactly what drives you—what you love, want, and need.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="glass-morphism rounded-2xl p-6 hover:shadow-2xl transition-all transform hover:scale-105">
                <Star className="w-8 h-8 text-amex-blue mx-auto mb-3" />
                <span className="text-lg font-semibold text-gray-800 font-poppins">
                  Smart rewards. Personal choices.
                </span>
              </div>
              <div className="glass-morphism rounded-2xl p-6 hover:shadow-2xl transition-all transform hover:scale-105">
                <Award className="w-8 h-8 text-amex-purple mx-auto mb-3" />
                <span className="text-lg font-semibold text-gray-800 font-poppins">Tailored just for you.</span>
              </div>
              <div className="glass-morphism rounded-2xl p-6 hover:shadow-2xl transition-all transform hover:scale-105">
                <Target className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                <span className="text-lg font-semibold text-gray-800 font-poppins">Get more from every swipe.</span>
              </div>
            </div>

            <Link
              href="/signup"
              className="inline-flex items-center bg-gradient-to-r from-amex-blue via-amex-purple to-pink-500 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all transform hover:scale-105 float-animation"
            >
              Get Started
              <ChevronRight className="ml-3 w-6 h-6" />
            </Link>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl glass-morphism">
              <Image
                src={mockupImages[currentMockup] || "/placeholder.svg"}
                alt="Dashboard mockup"
                fill
                className="object-cover transition-opacity duration-1000"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-2xl float-animation">
              <span className="text-white font-bold text-lg">NEW</span>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Partner Logos */}
      <section className="py-16 bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-center text-gray-700 mb-12 text-2xl font-semibold font-poppins">
            Trusted by leading brands worldwide
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partnerLogos.map((logo, index) => (
              <div
                key={index}
                className="brand-logo-placeholder rounded-2xl h-24 flex items-center justify-center text-gray-600 font-medium hover:shadow-lg transition-all transform hover:scale-105"
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">🏢</div>
                  <div className="text-sm">{logo.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Vertical Timeline */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white/50 to-blue-50/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-gray-900 mb-16 font-playfair">Your Journey with Adapt</h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full timeline-line rounded-full"></div>

            <div className="space-y-16">
              {timelineCards.map((card, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div
                      className={`glass-morphism rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${card.color} text-white text-2xl mb-4`}
                      >
                        {card.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 font-poppins">{card.title}</h3>
                      <p className="text-gray-600 mb-4 text-lg leading-relaxed">{card.description}</p>
                      <span className="text-sm text-amex-blue font-semibold bg-blue-50 px-3 py-1 rounded-full">
                        {card.time}
                      </span>
                    </div>
                  </div>

                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div
                      className={`w-6 h-6 rounded-full bg-gradient-to-r ${card.color} border-4 border-white shadow-lg`}
                    ></div>
                  </div>

                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer id="contact" className="bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Image src="/images/adapt-logo.png" alt="Adapt Logo" width={32} height={32} className="invert" />
                <div className="text-3xl font-bold font-playfair">Adapt</div>
              </div>
              <p className="text-gray-300 mb-6 text-lg leading-relaxed">A card that adapts to the way you live</p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                  <MessageCircle className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors transform hover:scale-110">
                  <Send className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 font-poppins">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-amex-blue" />
                  <span className="text-gray-300 text-lg">+91 8817972743</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-amex-blue" />
                  <span className="text-gray-300 text-lg">support@adapt.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-amex-blue" />
                  <span className="text-gray-300 text-lg">Bangalore, Karnataka, India</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 font-poppins">Feedback</h3>
              <p className="text-gray-300 mb-6 text-lg">We'd love to hear from you!</p>
              <button className="bg-gradient-to-r from-amex-blue to-amex-purple px-8 py-3 rounded-xl font-semibold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                Send Feedback
              </button>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
            <p className="text-lg">&copy; 2024 Adapt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
