"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { User, Gift, MessageSquare, TrendingUp, Calendar, Target, Award, Plus, Download, BarChart3 } from "lucide-react"
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import Image from "next/image"
import ScratchCard from "./ScratchCard"
import SpinWheel from "./SpinWheel"

const pieData = [
  { name: "Shopping", value: 20, color: "#006FCF" },
  { name: "Flights", value: 40, color: "#0077BE" },
  { name: "Shopping Malls", value: 10, color: "#6366F1" },
  { name: "Restaurants", value: 15, color: "#8B5CF6" },
  { name: "Trip Plans", value: 15, color: "#A855F7" },
]

const barData = [
  { month: "Jan", offers: 12 },
  { month: "Feb", offers: 19 },
  { month: "Mar", offers: 15 },
  { month: "Apr", offers: 25 },
  { month: "May", offers: 22 },
  { month: "Jun", offers: 30 },
]

const ganttData = [
  { quarter: "Q1", shopping: 15000, dining: 8000, travel: 12000, others: 5000 },
  { quarter: "Q2", shopping: 18000, dining: 10000, travel: 15000, others: 7000 },
  { quarter: "Q3", shopping: 22000, dining: 12000, travel: 18000, others: 8000 },
  { quarter: "Q4", shopping: 25000, dining: 15000, travel: 20000, others: 10000 },
]

const goalCompletionData = [
  { name: "Completed", value: 43, color: "#10B981" },
  { name: "Remaining", value: 57, color: "#E5E7EB" },
]

const offers = [
  {
    id: 1,
    brand: "Swiggy",
    discount: "25% off",
    logo: "🍔",
    activated: false,
    description: "Get 25% off on your next food order",
    color: "from-orange-400 to-red-500",
  },
  {
    id: 2,
    brand: "Big Basket",
    discount: "15% off",
    logo: "🛒",
    activated: false,
    description: "Save on groceries and daily essentials",
    color: "from-green-400 to-blue-500",
  },
  {
    id: 3,
    brand: "Myntra",
    discount: "30% off",
    logo: "👕",
    activated: true,
    description: "Fashion deals you can't resist",
    color: "from-pink-400 to-purple-500",
  },
  {
    id: 4,
    brand: "Cleartrip",
    discount: "₹2000 off",
    logo: "✈️",
    activated: false,
    description: "Book your dream vacation",
    color: "from-blue-400 to-indigo-500",
  },
  {
    id: 5,
    brand: "Uber",
    discount: "20% off",
    logo: "🚗",
    activated: false,
    description: "Ride in comfort, save money",
    color: "from-gray-400 to-gray-600",
  },
  {
    id: 6,
    brand: "Zomato",
    discount: "40% off",
    logo: "🍕",
    activated: false,
    description: "Delicious meals at great prices",
    color: "from-red-400 to-pink-500",
  },
]

const goals = [
  { id: 1, title: "Spend ₹50,000 this month", completed: true },
  { id: 2, title: "Use 5 different offers", completed: true },
  { id: 3, title: "Refer 3 friends", completed: false },
  { id: 4, title: "Complete profile setup", completed: true },
  { id: 5, title: "Link bank account", completed: false },
  { id: 6, title: "Activate premium features", completed: false },
]

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState(0)
  const [showCard, setShowCard] = useState(false)
  const [userName, setUserName] = useState("John Doe")
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [newGoal, setNewGoal] = useState("")

  useEffect(() => {
    const storedName = localStorage.getItem("userName")
    if (storedName) {
      setUserName(storedName)
    }
  }, [])

  const tabs = ["Dashboard", "Offers", "Feedback"]

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe && activeTab < tabs.length - 1) {
      setActiveTab(activeTab + 1)
    }
    if (isRightSwipe && activeTab > 0) {
      setActiveTab(activeTab - 1)
    }
  }

  const downloadReport = () => {
    // In a real app, this would generate and download a PDF
    alert("PDF Report downloaded successfully!")
  }

  const addNewGoal = () => {
    if (newGoal.trim()) {
      // In a real app, this would add to the goals list
      alert(`New goal added: ${newGoal}`)
      setNewGoal("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 font-inter">
      {/* Enhanced Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 w-full z-50 glass-morphism shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <Image src="/images/adapt-logo.png" alt="Adapt Logo" width={32} height={32} />
              <div className="text-3xl font-bold font-playfair bg-gradient-to-r from-amex-blue to-amex-purple bg-clip-text text-transparent">
                Adapt
              </div>
            </div>
            <div className="flex items-center space-x-8">
              {tabs.map((tab, index) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(index)}
                  className={`px-6 py-3 rounded-2xl font-semibold text-lg transition-all transform hover:scale-105 ${
                    activeTab === index
                      ? "bg-gradient-to-r from-amex-blue to-amex-purple text-white shadow-2xl"
                      : "text-gray-700 hover:text-amex-blue hover:bg-white/20"
                  }`}
                >
                  {tab}
                </button>
              ))}
              <button
                onClick={() => setShowCard(!showCard)}
                className="p-3 rounded-2xl bg-gradient-to-r from-amex-blue to-amex-purple text-white hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <User className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 w-full z-50 glass-morphism border-t shadow-2xl">
        <div className="flex justify-around py-4">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              onClick={() => setActiveTab(index)}
              className={`flex flex-col items-center py-2 px-6 rounded-2xl transition-all transform hover:scale-105 ${
                activeTab === index ? "text-amex-blue bg-blue-50" : "text-gray-600"
              }`}
            >
              {index === 0 && <TrendingUp className="w-6 h-6 mb-1" />}
              {index === 1 && <Gift className="w-6 h-6 mb-1" />}
              {index === 2 && <MessageSquare className="w-6 h-6 mb-1" />}
              <span className="text-sm font-semibold">{tab}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div
        className="pt-24 pb-24 md:pb-8 px-4 sm:px-6 lg:px-8"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="max-w-7xl mx-auto">
          {/* Dashboard Tab */}
          {activeTab === 0 && (
            <div className="space-y-8 fade-in-up">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 font-playfair mb-2">Welcome back, {userName}! 👋</h1>
                  <p className="text-xl text-gray-600 font-poppins">Here's your financial overview</p>
                </div>
                <div className="flex space-x-4">
                  <button
                    onClick={downloadReport}
                    className="flex items-center space-x-2 bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-2xl transition-all transform hover:scale-105"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Report</span>
                  </button>
                  <button
                    onClick={() => setShowCard(!showCard)}
                    className="md:hidden p-3 rounded-2xl bg-gradient-to-r from-amex-blue to-amex-purple text-white"
                  >
                    <User className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Enhanced Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Total Cashback", value: "₹12,450", icon: Award, color: "from-yellow-400 to-orange-500" },
                  { title: "Offers Used", value: "23", icon: Gift, color: "from-purple-400 to-pink-500" },
                  { title: "Redemptions", value: "8", icon: Target, color: "from-green-400 to-teal-500" },
                  { title: "Conversion Rate", value: "85%", icon: TrendingUp, color: "from-blue-400 to-indigo-500" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="glass-morphism rounded-2xl p-6 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-600 text-sm font-semibold mb-1">{stat.title}</p>
                        <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-2xl bg-gradient-to-r ${stat.color}`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Charts */}
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="glass-morphism rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 font-poppins flex items-center">
                    <BarChart3 className="w-6 h-6 mr-3 text-amex-blue" />
                    Spending Categories
                  </h3>
                  <ResponsiveContainer width="100%" height={350}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        dataKey="value"
                        label={({ name, value }) => `${name}: ${value}%`}
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="glass-morphism rounded-2xl p-8 shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 font-poppins">Monthly Offer Usage</h3>
                  <ResponsiveContainer width="100%" height={350}>
                    <BarChart data={barData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="offers" fill="#006FCF" radius={[8, 8, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Gantt Chart for Quarterly Spending */}
              <div className="glass-morphism rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 font-poppins">Quarterly Spending Analysis</h3>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={ganttData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="quarter" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="shopping" stackId="a" fill="#006FCF" name="Shopping" />
                    <Bar dataKey="dining" stackId="a" fill="#0077BE" name="Dining" />
                    <Bar dataKey="travel" stackId="a" fill="#6366F1" name="Travel" />
                    <Bar dataKey="others" stackId="a" fill="#8B5CF6" name="Others" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Enhanced Goals with Paper Background */}
              <div className="paper-bg rounded-2xl p-8 shadow-2xl relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <h3 className="text-2xl font-bold font-poppins flex items-center text-gray-800">
                      <Calendar className="w-6 h-6 mr-3" />
                      Monthly Goals
                    </h3>
                    <div className="flex items-center space-x-4">
                      <div className="w-24 h-24">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={goalCompletionData}
                              cx="50%"
                              cy="50%"
                              innerRadius={25}
                              outerRadius={40}
                              dataKey="value"
                            >
                              {goalCompletionData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-600">43%</div>
                        <div className="text-sm text-gray-600">Complete</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex mb-6">
                    <input
                      type="text"
                      placeholder="Add a new goal..."
                      value={newGoal}
                      onChange={(e) => setNewGoal(e.target.value)}
                      className="flex-1 px-4 py-3 rounded-l-2xl border-2 border-gray-300 focus:outline-none focus:border-amex-blue bg-white/80"
                    />
                    <button
                      onClick={addNewGoal}
                      className="px-6 py-3 bg-gradient-to-r from-amex-blue to-amex-purple text-white rounded-r-2xl hover:shadow-lg transition-all"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="space-y-4">
                    {goals.map((goal) => (
                      <div
                        key={goal.id}
                        className="flex items-center space-x-4 p-4 bg-white/60 rounded-2xl backdrop-blur-sm"
                      >
                        <div
                          className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                            goal.completed ? "bg-green-500 border-green-500" : "border-gray-400 hover:border-amex-blue"
                          }`}
                        >
                          {goal.completed && <span className="text-white text-xs">✓</span>}
                        </div>
                        <span className={`text-lg ${goal.completed ? "line-through text-gray-500" : "text-gray-800"}`}>
                          {goal.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Offers Tab */}
          {activeTab === 1 && (
            <div className="space-y-8 fade-in-up">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 font-playfair mb-4">Exclusive Offers</h1>
                <p className="text-xl text-gray-600 font-poppins">Discover amazing deals tailored just for you</p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {offers.map((offer) => (
                  <div
                    key={offer.id}
                    className="glass-morphism rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105"
                  >
                    <div
                      className={`w-full h-32 bg-gradient-to-r ${offer.color} rounded-2xl flex items-center justify-center mb-6`}
                    >
                      <div className="text-5xl">{offer.logo}</div>
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold mb-2 font-poppins">{offer.brand}</h3>
                      <p className="text-3xl font-bold text-amex-blue mb-3">{offer.discount}</p>
                      <p className="text-gray-600 mb-6">{offer.description}</p>
                      <button
                        className={`w-full py-4 rounded-2xl font-bold text-lg transition-all transform hover:scale-105 ${
                          offer.activated
                            ? "bg-green-500 text-white"
                            : "bg-gradient-to-r from-amex-blue to-amex-purple text-white hover:shadow-2xl"
                        }`}
                        disabled={offer.activated}
                      >
                        {offer.activated ? "✓ Activated" : "Activate Now"}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Enhanced Scratch Card */}
              <div className="glass-morphism rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center font-poppins">Daily Scratch Card</h3>
                <div className="flex justify-center">
                  <ScratchCard />
                </div>
              </div>

              {/* Enhanced Spin Wheel */}
              <div className="glass-morphism rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-center font-poppins">Spin & Win</h3>
                <div className="flex justify-center">
                  <SpinWheel />
                </div>
              </div>
            </div>
          )}

          {/* Enhanced Feedback Tab */}
          {activeTab === 2 && (
            <div className="space-y-8 fade-in-up">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 font-playfair mb-4">Feedback & Loyalty</h1>
                <p className="text-xl text-gray-600 font-poppins">Help us serve you better</p>
              </div>

              <div className="glass-morphism rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 font-poppins">Rate Your Experience</h3>
                <div className="space-y-6">
                  <div className="flex justify-center space-x-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        className="text-4xl text-yellow-400 hover:text-yellow-500 transition-colors transform hover:scale-110"
                      >
                        ⭐
                      </button>
                    ))}
                  </div>
                  <textarea
                    placeholder="Tell us about your experience..."
                    className="w-full p-6 border-2 border-gray-300 rounded-2xl focus:outline-none focus:border-amex-blue text-lg"
                    rows={6}
                  />
                  <button className="bg-gradient-to-r from-amex-blue to-amex-purple text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105">
                    Submit Feedback
                  </button>
                </div>
              </div>

              <div className="glass-morphism rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 font-poppins">Your Adapt Card</h3>
                <div className="flex justify-center">
                  <div className="card-3d w-full max-w-md h-56 bg-gradient-to-r from-amex-blue via-amex-purple to-pink-500 rounded-3xl p-8 text-white shadow-2xl">
                    <div className="flex justify-between items-start mb-12">
                      <div className="flex items-center space-x-2">
                        <Image
                          src="/images/adapt-logo.png"
                          alt="Adapt Logo"
                          width={24}
                          height={24}
                          className="invert"
                        />
                        <div className="text-2xl font-bold font-playfair">Adapt</div>
                      </div>
                      <div className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Premium</div>
                    </div>
                    <div className="space-y-3">
                      <div className="text-xl font-mono tracking-wider">**** **** **** 3456</div>
                      <div className="flex justify-between items-end">
                        <div>
                          <div className="text-xs opacity-75 font-semibold">VALID THRU</div>
                          <div className="text-sm font-bold">12/28</div>
                        </div>
                        <div>
                          <div className="text-xs opacity-75 font-semibold">CVV</div>
                          <div className="text-sm font-bold">***</div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-bold">{userName}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-6">
                  <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
                    Upgrade Card
                  </button>
                  <button className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-6 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
                    Refer Friends
                  </button>
                  <button className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
                    Share Card
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced 3D Card Modal */}
      {showCard && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="glass-morphism rounded-3xl p-10 max-w-lg w-full">
            <div className="card-3d w-full h-56 bg-gradient-to-r from-amex-blue via-amex-purple to-pink-500 rounded-3xl p-8 text-white shadow-2xl mb-8">
              <div className="flex justify-between items-start mb-12">
                <div className="flex items-center space-x-2">
                  <Image src="/images/adapt-logo.png" alt="Adapt Logo" width={24} height={24} className="invert" />
                  <div className="text-2xl font-bold font-playfair">Adapt</div>
                </div>
                <div className="text-sm font-semibold bg-white/20 px-3 py-1 rounded-full">Premium</div>
              </div>
              <div className="space-y-3">
                <div className="text-xl font-mono tracking-wider">4532 1234 5678 3456</div>
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs opacity-75 font-semibold">VALID THRU</div>
                    <div className="text-sm font-bold">12/28</div>
                  </div>
                  <div>
                    <div className="text-xs opacity-75 font-semibold">CVV</div>
                    <div className="text-sm font-bold">123</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-bold">{userName}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-lg">
              <div className="flex justify-between p-4 bg-white/20 rounded-2xl">
                <span className="text-gray-700 font-semibold">Last Outstanding Bill:</span>
                <span className="font-bold text-red-600">₹8,450</span>
              </div>
              <div className="flex justify-between p-4 bg-white/20 rounded-2xl">
                <span className="text-gray-700 font-semibold">Next Due Date:</span>
                <span className="font-bold text-orange-600">Jan 15, 2024</span>
              </div>
              <div className="flex justify-between p-4 bg-white/20 rounded-2xl">
                <span className="text-gray-700 font-semibold">Available Credit:</span>
                <span className="font-bold text-green-600">₹91,550</span>
              </div>
            </div>

            <button
              onClick={() => setShowCard(false)}
              className="w-full mt-8 bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all transform hover:scale-105"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
