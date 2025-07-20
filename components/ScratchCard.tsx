"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"

export default function ScratchCard() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isScratching, setIsScratching] = useState(false)
  const [isRevealed, setIsRevealed] = useState(false)
  const [prize] = useState("₹40 CASHBACK")

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Draw scratch overlay
    ctx.fillStyle = "#C0C0C0"
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add scratch pattern
    ctx.fillStyle = "#A0A0A0"
    for (let i = 0; i < canvas.width; i += 20) {
      for (let j = 0; j < canvas.height; j += 20) {
        if ((i + j) % 40 === 0) {
          ctx.fillRect(i, j, 10, 10)
        }
      }
    }
  }, [])

  const scratch = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas || isRevealed) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    ctx.globalCompositeOperation = "destination-out"
    ctx.beginPath()
    ctx.arc(x, y, 20, 0, 2 * Math.PI)
    ctx.fill()

    // Check if enough is scratched
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const pixels = imageData.data
    let transparentPixels = 0

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentPixels++
    }

    const scratchedPercentage = (transparentPixels / (canvas.width * canvas.height)) * 100
    if (scratchedPercentage > 30) {
      setIsRevealed(true)
      canvas.style.display = "none"
    }
  }

  return (
    <div className="relative w-64 h-32 mx-auto">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
        <div className="text-center text-white">
          <div className="text-sm font-medium mb-1">YOU WON</div>
          <div className="text-2xl font-bold">{prize}</div>
          <div className="text-xs mt-1">CASHBACK</div>
        </div>
      </div>

      {!isRevealed && (
        <canvas
          ref={canvasRef}
          width={256}
          height={128}
          className="absolute inset-0 cursor-crosshair rounded-lg"
          onMouseDown={() => setIsScratching(true)}
          onMouseUp={() => setIsScratching(false)}
          onMouseMove={isScratching ? scratch : undefined}
          onClick={scratch}
        />
      )}

      {!isRevealed && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="text-gray-600 text-sm font-medium">Scratch to reveal</div>
        </div>
      )}
    </div>
  )
}
