import React, { useState, useEffect } from "react"
import firstImage from "../images/img1.png"
import secondImage from "../images/img2.png"
import thirdImage from "../images/img3.png"
import carouselStyles from "../styles/carousel.module.css"

function CarouselImage(props) {
  let index = props.slideIndex
  if (index === 1) {
    return (
      <img
        className={carouselStyles.carouselImage}
        src={firstImage}
        style={{ width: "100%" }}
        alt="Slides"
      />
    )
  } else if (index === 2) {
    return (
      <img
        className={carouselStyles.carouselImage}
        src={secondImage}
        style={{ width: "100%" }}
        alt="Slides"
      />
    )
  } else {
    return (
      <img
        className={carouselStyles.carouselImage}
        src={thirdImage}
        style={{ width: "100%" }}
        alt="Slides"
      />
    )
  }
}

function Carousel() {
  let [slideIndex, setSlideIndex] = useState(1)

  useEffect(() => {
    let id = setInterval(() => {
      if (slideIndex === 3) {
        setSlideIndex(1)
      } else {
        let newValue = slideIndex + 1
        setSlideIndex(newValue)
      }
    }, 4000)
    return () => clearInterval(id)
  })

  return (
    <React.Fragment>
      <section className={carouselStyles.slideshowContainer}>
        <section className="">
          <CarouselImage slideIndex={slideIndex} />
        </section>
        <button
          className={carouselStyles.prev}
          onClick={() => {
            if (slideIndex === 1) {
              setSlideIndex(3)
            } else {
              let newSlideIndex = slideIndex - 1
              setSlideIndex(newSlideIndex)
            }
          }}
        >
          &#10094;
        </button>
        <button
          className={carouselStyles.next}
          onClick={() => {
            if (slideIndex === 3) {
              setSlideIndex(1)
            } else {
              let newSlideIndex = slideIndex + 1
              setSlideIndex(newSlideIndex)
            }
          }}
        >
          &#10095;
        </button>
      </section>
    </React.Fragment>
  )
}

export default Carousel
