import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "react-feather"

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
}) => {
  const [current, setCurrent] = useState(0)

  const prev = () =>
  setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1))
  const next = () =>
  setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1))

  useEffect(() => {
    if (!autoSlide) return
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
  }, [])
  return (
    <div className="overflow-hidden relative p-[2rem] ">
      <div
        className=" flex transition-transform ease-out duration-500"
        style={{ transform: ` translateX(-${current * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/20 text-gray-800 hover:bg-white/40"
        >
          <ChevronLeft size={30} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/20 text-gray-800 hover:bg-white/40"
          // className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
        <ChevronRight size={30} />
        </button>
      </div>

      <div className="absolute bottom-0 right-0 left-0 h-[2vh] ">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i, j) => (
            <div
            key={j}
            onClick={next}
              className={`
              transition-all w-3 h-3 bg-white rounded-full 
              ${current === i ? "p-2 w-12 h-2 !rounded-[0px] !bg-rust" : "bg-white"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Carousel;