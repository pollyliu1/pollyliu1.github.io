import React, { useState } from 'react'
import "./Carousel.css"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"

export const Carousel = ({ data }) => {
    const [slide, setSlide] = useState(0)

    const nextSlide = () => {
        setSlide(slide === data.length - 1 ? 0 : slide + 1) // If slide is at the end, go back to the beginning
    }
    const prevSlide = () => {
        setSlide(slide === 0 ? data.length - 1 : slide - 1) // If slide is at the beginning, go to the end
    }
    
    return (
        <div className = "carousel">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide} />
            {data.map((item, idx) => {
                return (
                    <img
                        className={slide === idx ? "slide" : "slide slide-hidden"} 
                        src={item.src}
                        alt={item.alt}
                        key={idx}
                    />
                )
            })}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide} />

            <span className="indicators"> {/* Image selector on the bottom */}
                {data.map((_, idx)  => {
                    return (
                        <button
                            className={slide === idx ? "indicator" : "indicator indicator-inactive"}
                            key={idx}
                            onClick ={() => {
                                setSlide(idx);
                            }}
                        />
                    )
                })}
            </span>
        </div>
    )
}
