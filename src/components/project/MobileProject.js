
const MobileProject = (props) => {
    return(
        <figure className="mobile-project-container">
            <div className="image-container">
                <img src={props.project.img} alt={props.project.title}/>
            </div>
            <figcaption>{props.project.title}</figcaption>
            <p onClick={() => props.setProjectId(props.project.id)} className="mobile-project-url-link">Details</p>
        </figure>
    )
}

export default MobileProject;