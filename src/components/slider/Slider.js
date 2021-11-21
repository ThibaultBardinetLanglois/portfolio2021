import React, { useState } from 'react';
import { projectsData } from '../../data/projectsData';
import SliderButtons from "./SliderButtons";


const Slider = (props) => {
    const id = props.id;
    const [slideAnim, setSlideAnim] = useState({
        index: 1,
        inProgress: false
    })


    const nextSlide = () => {
        if(slideAnim.index !== projectsData[id].imagesGallery.length && !slideAnim.inProgress) {
            setSlideAnim({index: slideAnim.index + 1, inProgress: true});

            setTimeout(() => {
                setSlideAnim({index: slideAnim.index + 1, inProgress: false})
            }, 400);
        } else if(slideAnim.index === projectsData[id].imagesGallery.length && !slideAnim.inProgress) {
            setSlideAnim({index: 1, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: 1, inProgress: false})
            }, 400);
        }
        
    }

    const prevSlide = () => {
        if(slideAnim.index !== 1 && !slideAnim.inProgress) {
            setSlideAnim({index: slideAnim.index - 1, inProgress: true});

            setTimeout(() => {
                setSlideAnim({index: slideAnim.index - 1, inProgress: false})
            }, 400);
        } else if(slideAnim.index === 1 && !slideAnim.inProgress) {
            setSlideAnim({index: projectsData[id].imagesGallery.length, inProgress: true})

            setTimeout(() => {
                setSlideAnim({index: projectsData[id].imagesGallery.length, inProgress: false})
            }, 400);
        }
        
    }
    
    return (
        <div className="slider-and-description-wrapper">
            <div className="container-slider">
                {projectsData[id].imagesGallery.map((image, index) => {
                    return (
                        <div
                        key={index}
                        className={slideAnim.index === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <img src={process.env.PUBLIC_URL + image} alt="" />
                        </div>
                    )
                })}
                <SliderButtons moveSlide={nextSlide} direction={"next"}/>
                <SliderButtons moveSlide={prevSlide} direction={"prev"}/>
            </div>
            <p className="pages-count">{slideAnim.index} / {projectsData[id].imagesGallery.length}</p>
            <div className="project-description-div">
                <p className="project-description">{projectsData[id].infos.length > 1 ? projectsData[id].infos[slideAnim.index - 1] : projectsData[id].infos[0]}</p>
            </div>
            
        </div>
    )
}

export default Slider;