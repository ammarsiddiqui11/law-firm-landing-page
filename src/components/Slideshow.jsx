import { useCallback, useEffect, useState } from 'react'

/**
 * Auto-advancing image slideshow.
 *
 * Usage:
 *   <Slideshow images={[img1, img2, img3]} className="aspect-[4/3] sm:aspect-[16/11]" />
 *
 * - Advances automatically every `interval` ms.
 * - Pauses autoplay while a pointer is hovering (desktop) so visitors can
 *   read the image they're on; resumes on mouse leave.
 * - Arrows + dot indicators let people navigate manually.
 * - Renders no arrows/dots for a single image.
 */
export default function Slideshow({ images, interval = 4500, className = '' }) {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = images.length

  const goTo = useCallback((i) => {
    setIndex(((i % count) + count) % count)
  }, [count])

  const next = useCallback(() => goTo(index + 1), [goTo, index])
  const prev = useCallback(() => goTo(index - 1), [goTo, index])

  useEffect(() => {
    if (count <= 1 || paused) return
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % count)
    }, interval)
    return () => clearInterval(timer)
  }, [count, interval, paused])

  if (count === 0) return null

  return (
    <div
      className={`relative overflow-hidden shadow-md ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Office photo ${i + 1}`}
            className="w-full h-full object-cover shrink-0"
          />
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 bg-ink/50 hover:bg-ink/75 text-paper w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={next}
            aria-label="Next image"
            className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 bg-ink/50 hover:bg-ink/75 text-paper w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to image ${i + 1}`}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === index ? 'bg-brass' : 'bg-paper/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}