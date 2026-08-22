import PageHeader from '../components/PageHeader.jsx'
import { experience } from '../data/experience.js'
import { skillGroups } from '../data/skills.js'

function Home() {
  return (
    <>
      <PageHeader
        eyebrow="Computer Science · University of Manitoba, Winnipeg"
        title="Karan Anand"
        tagline="I use excellent solutions to solve problems in record time, without sacrificing quality."
      >
        <img
          src={`${import.meta.env.BASE_URL}photo.jpg`}
          alt="Photo of Karan Anand"
          className="profile-photo"
        />
      </PageHeader>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Karan Anand, a passionate web developer and gamer.
            I love exploring my creative thoughts through
            solving problems in code.
          </p>
        </section>
        <section id="experience">
          <h2>Experience</h2>
          <div className="experience-list">
            {experience.map((item) => (
              <div className="experience-item" key={item.id}>
                <div className="experience-item__header">
                  <h3>{item.title}</h3>
                  <p className="experience-item__meta">
                    {item.type} · {item.period}
                  </p>
                </div>
                <p>{item.description}</p>
                <div className="project-card__tags">
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          {skillGroups.map((group) => (
            <div className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <div className="project-card__tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </section>
        <section id="contact">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:karan.a4248@gmail.com">karan.a4248@gmail.com</a></p>
          <p>
            <a href="https://github.com/Karan4248">GitHub</a> |{' '}
            <a href="https://www.linkedin.com/in/karan-anand-19bbb81b3/">LinkedIn</a>
          </p>
        </section>
      </main>
    </>
  )
}

export default Home
