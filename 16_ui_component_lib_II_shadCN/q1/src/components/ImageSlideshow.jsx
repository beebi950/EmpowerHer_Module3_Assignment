import { useState } from "react"

const images = [
  "https://via.placeholder.com/400x200?text=Image+1",
  "https://via.placeholder.com/400x200?text=Image+2",
  "https://via.placeholder.com/400x200?text=Image+3",
]

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0)

  return (
    <div className="card">
      <h2>Image Slideshow</h2>

      <img src={images[index]} width="100%" />

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => setIndex((index - 1 + images.length) % images.length)}>
          Previous
        </button>
        <button onClick={() => setIndex((index + 1) % images.length)}>
          Next
        </button>
      </div>
    </div>
  )
}
