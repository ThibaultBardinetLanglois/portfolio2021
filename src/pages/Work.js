import { useEffect, useState } from "react";
import useReactSimpleMatchMedia from 'react-simple-matchmedia';

import ScrollPage from "../components/ScrollPage";
import Navigation  from "../components/Navigation";
import Shapes from "../components/shapes/Shapes";
import ScrollArrow from '../components/ScrollArrow';
import SocialNetworks from "../components/SocialNetworks";

import { projectsData } from "../data/projectsData";
import Project from "../components/project/Project";
import MobileProject from "../components/project/MobileProject";
import ProjectDetails from "../components/project/ProjectDetails";

import { animOthersTitle, animBottomArrow, animTopArrow, animBurgerMenu, rotateProjectGallery, projectsListAppear, projectDetailsBackground } from '../utilities/animations';

const Work = () => {
    const matchedMobile = useReactSimpleMatchMedia('(max-width: 600px)');
    const matched = useReactSimpleMatchMedia('(min-width: 601px)');
    const [projectId, setProjectId] = useState(null);

    useEffect(() => {
        animOthersTitle();
        animBottomArrow();
        animTopArrow();
        animBurgerMenu();
        rotateProjectGallery();

        if(matchedMobile) {
            projectsListAppear();
        }

        if(projectId) {
            projectDetailsBackground();
        }
        
        
    }, [matched, matchedMobile, projectId])


    return(
        <div className="work-page page-content">
            <ScrollPage />
            <Shapes />
            <Navigation />
            <div className="work-page-block">
                
                <h2 className="colored-title">
                    <span className="colored-letter letter-red">H</span>
                    <span>e</span>
                    <span>r</span>
                    <span>e</span>
                    <span className="colored-letter letter-yellow">i</span>
                    <span>s</span>
                    <span className="colored-letter letter-green">m</span>
                    <span>y</span>
                    <span className="colored-letter letter-blue">w</span>
                    <span>o</span>
                    <span>r</span>
                    <span>k</span>
                </h2>
                {matchedMobile && 
                    <div className="mobile-projects-container">
                        {projectsData && projectsData.map((project, index) => {
                            return <MobileProject key={index} project={project} setProjectId={setProjectId}/> 
                        })}
                    </div>
                }
                {matched && 
                    <div className="scale-gallery-container">
                        <div className="projects-container">
                            {projectsData && projectsData.map((project, index) => {
                                return <Project key={index} project={project} setProjectId={setProjectId} /> 
                            })}
                        </div>
                    </div>
                }  
            </div>
            {projectId &&
                <ProjectDetails id={projectId} setProjectId={setProjectId} />
            }
            
            <ScrollArrow top={"/about"} bottom={"/contact"} />
            <SocialNetworks />
        </div>
    )
}

export default Work;