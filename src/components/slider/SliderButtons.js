
const SliderButtons = (props) => {

    return (
        <button 
        onClick={props.moveSlide}
        className={props.direction === "next" ? "btn-slide next": "btn-slide prev"}>
            <i className={props.direction === "next" ? "fas fa-arrow-right" : "fas fa-arrow-left"} alt="arrow icon" />
        </button>
    )
}

export default SliderButtons;