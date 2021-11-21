
const Project = (props) => {
    return(
        <figure className={"figure-" + props.project.id}>
            <img src={process.env.PUBLIC_URL + props.project.img} alt={props.project.title}/>
            <figcaption>{props.project.title}</figcaption>
            <p onClick={() => props.setProjectId(props.project.id)} className="project-url-link">Details</p>
        </figure>      
    )
}

export default Project;