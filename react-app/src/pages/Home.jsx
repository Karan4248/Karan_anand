function Home() {
  return (
    <>
      <header>
        <div className="header-text">
          <p className="eyebrow">Computer Science &middot; University of Manitoba, Winnipeg</p>
          <h1>Karan Anand</h1>
          <p className="tagline">
            I use excellent solutions to solve problems in record time, without sacrificing quality.
          </p>
        </div>
        <img
          src={`${import.meta.env.BASE_URL}photo.jpg`}
          alt="Photo of Karan Anand"
          className="profile-photo"
        />
      </header>
      <main>
        <section id="about">
          <h2>About Me</h2>
          <p>
            Hello! I'm Karan Anand, a passionate web developer and gamer.
            I love exploring my creative thoughts through
            solving problems in code.
          </p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <div className="project-card__tags">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">Java</span>
            <span className="tag">JavaScript</span>
            <span className="tag">FastAPI</span>
            <span className="tag">Supabase</span>
            <span className="tag">Stripe Integration</span>
            <span className="tag">API Integration</span>
          </div>
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
