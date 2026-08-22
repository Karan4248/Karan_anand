import { useEffect } from 'react'

function ExerciseTrackerIcon() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="4,36 18,36 24,20 32,48 40,28 46,36 60,36" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  )
}

function ResumeBuilderIcon() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="14" y="8" width="36" height="48" rx="2" />
      <line x1="21" y1="20" x2="43" y2="20" strokeLinecap="round" />
      <line x1="21" y1="28" x2="43" y2="28" strokeLinecap="round" />
      <line x1="21" y1="36" x2="35" y2="36" strokeLinecap="round" />
      <line x1="21" y1="44" x2="39" y2="44" strokeLinecap="round" />
    </svg>
  )
}

function FoodOrderingIcon() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10 14h6l4 30a4 4 0 0 0 4 3h20a4 4 0 0 0 4-3l4-20H20" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="26" cy="54" r="3" />
      <circle cx="42" cy="54" r="3" />
    </svg>
  )
}

function PortfolioIcon() {
  return (
    <svg viewBox="0 0 64 64" width="56" height="56" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22,20 8,32 22,44" strokeLinecap="round" strokeLinejoin="round" />
      <polyline points="42,20 56,32 42,44" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="36" y1="14" x2="28" y2="50" strokeLinecap="round" />
    </svg>
  )
}

const projects = [
  {
    id: 'exercise-tracker',
    icon: ExerciseTrackerIcon,
    title: 'Exercise Tracker',
    description: 'A fitness tracking app with user profiles, an activity feed, and route logging, persisted to JSON.',
    tags: ['Java', 'Maven', 'JUnit', 'JSON'],
    sourceUrl: 'https://github.com/Karan4248/Exercise-Tracker',
  },
  {
    id: 'ai-resume-builder',
    icon: ResumeBuilderIcon,
    title: 'AI Resume Builder',
    description: 'A resume editor with live preview and PDF export, plus Claude-powered bullet polish, summary generation, and job-description optimization.',
    tags: ['TypeScript', 'Supabase', 'Stripe', 'Claude API'],
    sourceUrl: 'https://github.com/Karan4248/resume-builder',
    liveUrl: 'https://resume-builder-drab-sigma.vercel.app',
  },
  {
    id: 'food-ordering',
    icon: FoodOrderingIcon,
    title: 'Food Ordering System',
    description: 'A group project food ordering app built with Spring Boot — contributed the domain model and cart.',
    tags: ['Java', 'Spring Boot', 'JavaScript'],
    sourceUrl: 'https://github.com/minhkhoily29/Food-Ordering-System',
  },
  {
    id: 'personal-portfolio',
    icon: PortfolioIcon,
    title: 'Personal Portfolio',
    description: 'This site, built from scratch with React.',
    tags: ['React', 'JavaScript', 'CSS'],
    sourceUrl: 'https://github.com/Karan4248/Karan_anand',
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
