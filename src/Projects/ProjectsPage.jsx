import { projects } from './Projects.jsx'
import selfPortrait from '../images/AI-Self-Portrait.png'


export default function ProjectsPage() {
  const projectCards = projects.map((project, index) => (
    <div key={index} className="project-card">
      <img src={project.image} alt={project.title} />
      <h1 className='card-title'>{project.title}</h1>
      <p className='card-desc'>{project.description}</p>
      <div className="tags">
        {project.tags.map((tag, i) => (
          <span key={i} className="tag">{tag}</span>
        ))}
      </div>
      <div className="project-links">
        {project.demo && project.demo !== '#' && (
          <a href={project.demo} target="_blank" rel="noreferrer" className="project-btn primary">
            <i className="fa-solid fa-arrow-up-right-from-square"></i> Live Demo
          </a>
        )}
        <a href={project.github} target="_blank" rel="noreferrer" className="project-btn">
          <i className="fa-brands fa-github"></i> GitHub
        </a>
      </div>


    </div>
  ));

  return (
    <div className='projects-page'>
      <h1>PROJECTS</h1>
      <div className='projects'>
        {projectCards}
      </div>
    </div>
  )
}