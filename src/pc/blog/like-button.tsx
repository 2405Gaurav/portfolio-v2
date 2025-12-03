'use client'

import NumberFlow from '@number-flow/react'
import { motion } from 'motion/react'
import { useRef, useState } from 'react'
import { toast } from 'sonner'
import { Separator } from '@/pc/components/separator'

const LikeButton = ({ }: { slug: string }) => {
  // Local like count (mock value)
  const [likes, setLikes] = useState(0)

  // Local user-like limit
  const [userLikes, setUserLikes] = useState(0)

  const buttonRef = useRef<HTMLButtonElement>(null)

  const showConfettiAnimation = async () => {
    const { clientWidth, clientHeight } = document.documentElement
    const boundingBox = buttonRef.current?.getBoundingClientRect()

    const targetY = boundingBox?.y ?? 0
    const targetX = boundingBox?.x ?? 0
    const targetWidth = boundingBox?.width ?? 0

    const targetCenterX = targetX + targetWidth / 2
    const { default: confetti } = await import('canvas-confetti')

    await confetti({
      zIndex: 999,
      particleCount: 80,
      spread: 100,
      origin: {
        y: targetY / clientHeight,
        x: targetCenterX / clientWidth
      },
      shapes: [confetti.shapeFromText({ text: '❤️', scalar: 2 })]
    })
  }

  const handleLike = () => {
    if (userLikes >= 3) {
      toast.error('You reached the like limit (3 per user)')
      return
    }

    const newUserLikes = userLikes + 1
    const newLikes = likes + 1

    setUserLikes(newUserLikes)
    setLikes(newLikes)

    if (newUserLikes === 3) {
      void showConfettiAnimation()
    }
  }

  return (
    <div className="mt-12 mb-4 flex justify-center">
      <motion.button
        ref={buttonRef}
        className="flex items-center gap-3 rounded-xl bg-zinc-900 px-4 py-2 text-lg text-white"
        whileTap={{ scale: 0.96 }}
        onClick={handleLike}
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="#ef4444"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="relative overflow-hidden"
        >
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>

        Like

        <Separator orientation="vertical" className="mx-2" />

        <NumberFlow value={likes} />
      </motion.button>
    </div>
  )
}

export default LikeButton
