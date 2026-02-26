'use client'

import { useEffect, useRef, ReactNode } from 'react'

type SRAnimation = 'up' | 'left' | 'right' | 'fade' | 'scale'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: SRAnimation
  delay?: number
  threshold?: number
}

export default function ScrollReveal({
  children,
  className = '',
  animation = 'up',
  delay = 0,
  threshold = 0.08,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (delay > 0) {
      el.style.transitionDelay = `${delay}ms`
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('sr-visible')
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, threshold])

  return (
    <div ref={ref} className={`sr-base sr-${animation} ${className}`}>
      {children}
    </div>
  )
}
