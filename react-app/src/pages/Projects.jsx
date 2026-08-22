import { useEffect } from 'react'
import PageHeader from '../components/PageHeader.jsx'
import { projects } from '../data/projects.jsx'

function Projects() {
  useEffect(() => {
    document.title = 'Projects · Karan Anand'
  }, [])

  return (
    <>
      <PageHeader
        className="page-header"
        eyebrow="Selected Work"
        title="Projects"
        tagline="A few things I've built while learning to code."
      />
      <main>
        <section id="projects">
          <div className="projects">
            {projects.map((project) => {
              const Icon = project.icon
              return (
                <div className="project-card" key={project.id}>
                  <div className="project-thumb">
                    <Icon />
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span className="tag" key={tag}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="project-card__links">
                    {project.liveUrl && (
                      <a className="project-card__source" href={project.liveUrl}>
                        Live demo →
                      </a>
                    )}
                    {project.sourceUrl && (
                      <a className="project-card__source" href={project.sourceUrl}>
                        View source →
                      </a>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
    </>
  )
}

export default Projects
