
import { useEffect, useState } from "react";
import { projectsData } from "../../data/projectsData";
import Slider from "../slider/Slider";
import { Link } from "react-router-dom";

const ProjectDetails = (props) => {
    const id = props.id - 1;
    const [project, setProject] = useState(null);
    
    useEffect(() => {
        setProject(document.querySelector(".project-details"));
    }, [])
    return (
        <div className="project-details">
            <Slider id={id} setDescription={props.setDescription} />
            <h3>The {projectsData[id].title} project</h3>
            <p>Date : {projectsData[id].date}</p>
            <p>Languages : {projectsData[id].languages}</p>
            {projectsData[id].frameworks && 
                <p>Framework and librairies : {projectsData[id].frameworks}</p>
            }

            <div className="projects-details-link-wrapper">
                {projectsData[id].link &&
                    <Link to={{ pathname: projectsData[id].link}} target="_blank">Link</Link>
                }
                <Link to={{ pathname: projectsData[id].code}} target="_blank">Code</Link>
            </div>
            
            
            
            <i className="fas fa-times" onClick={() => {
                project.style.animation = "shrink 0.6s ease-out 0s";
                    setTimeout(() => {
                        props.setProjectId(null);
                    }, 1000) }
                }
            ></i>
        </div>
    )
}

export default ProjectDetails;