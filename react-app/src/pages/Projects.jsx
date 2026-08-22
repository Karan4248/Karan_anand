import { useEffect } from 'react'

const projects = [
  {
    id: 'ai-resume-builder',
    thumb: 'AR',
    title: 'AI Resume Builder',
    description: 'A web app that generates tailored resumes.',
    tags: ['Python', 'OpenAI API'],
  },
  {
    id: 'personal-portfolio',
    thumb: 'PP',
    title: 'Personal Portfolio',
    description: 'This site, built from scratch with React.',
    tags: ['React', 'JavaScript', 'CSS'],
  },
]

function Projects() {
  useEffect(() => {
    document.title = 'Projects · Karan Anand'
  }, [])

  return (
    <>
      <header className="page-header">
        <div className="header-text">
          <p className="eyebrow">Selected Work</p>
          <h1>Projects</h1>
          <p className="tagline">A few things I've built while learning to code.</p>
        </div>
      </header>
      <main>
        <section id="projects">
          <div className="projects">
            {projects.map((project) => (
              <div className="project-card" key={project.id}>
                <div className="project-thumb">{project.thumb}</div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-card__tags">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export default Projects
