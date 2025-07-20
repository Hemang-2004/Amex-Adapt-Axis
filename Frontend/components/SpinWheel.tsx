"use client"

import { useState } from "react"

const prizes = [
  { label: "₹10", color: "#FF6B6B" },
  { label: "₹25", color: "#4ECDC4" },
  { label: "₹50", color: "#45B7D1" },
  { label: "₹100", color: "#96CEB4" },
  { label: "Voucher", color: "#FFEAA7" },
  { label: "₹20", color: "#DDA0DD" },
]

export default function SpinWheel() {
  const [isSpinning, setIsSpinning] = useState(false)
  const [rotation, setRotation] = useState(0)
  const [winner, setWinner] = useState<string | null>(null)

  const spin = () => {
    if (isSpinning) return

    setIsSpinning(true)
    setWinner(null)

    const spins = Math.floor(Math.random() * 5) + 5 // 5-10 full rotations
    const finalRotation = Math.floor(Math.random() * 360)
    const totalRotation = spins * 360 + finalRotation

    setRotation((prev) => prev + totalRotation)

    setTimeout(() => {
      const segmentAngle = 360 / prizes.length
      const winnerIndex = Math.floor((360 - (finalRotation % 360)) / segmentAngle) % prizes.length
      setWinner(prizes[winnerIndex].label)
      setIsSpinning(false)
    }, 3000)
  }

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative">
        <div
          className="w-64 h-64 rounded-full border-8 border-gray-300 relative overflow-hidden transition-transform duration-3000 ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {prizes.map((prize, index) => {
            const angle = (360 / prizes.length) * index
            return (
              <div
                key={index}
                className="absolute w-full h-full"
                style={{
                  transform: `rotate(${angle}deg)`,
                  clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos(((360 / prizes.length) * Math.PI) / 180)}% ${50 - 50 * Math.sin(((360 / prizes.length) * Math.PI) / 180)}%)`,
                }}
              >
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ backgroundColor: prize.color }}
                >
                  <span
                    className="text-white font-bold text-sm"
                    style={{ transform: `rotate(${180 / prizes.length}deg)` }}
                  >
                    {prize.label}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Pointer */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
          <div className="w-0 h-0 border-l-4 border-r-4 border-b-8 border-l-transparent border-r-transparent border-b-red-500"></div>
        </div>
      </div>

      <button
        onClick={spin}
        disabled={isSpinning}
        className={`px-8 py-3 rounded-lg font-semibold text-white transition-all ${
          isSpinning ? "bg-gray-400 cursor-not-allowed" : "bg-amex-gradient hover:shadow-lg transform hover:scale-105"
        }`}
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel!"}
      </button>

      {winner && (
        <div className="text-center p-4 bg-green-100 rounded-lg border border-green-300">
          <div className="text-lg font-bold text-green-800">Congratulations!</div>
          <div className="text-green-700">You won: {winner}</div>
        </div>
      )}
    </div>
  )
}
