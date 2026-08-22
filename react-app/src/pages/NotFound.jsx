import { useEffect } from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  useEffect(() => {
    document.title = 'Page Not Found · Karan Anand'
  }, [])

  return (
    <main>
      <section id="not-found">
        <h2>Page not found</h2>
        <p>
          That page doesn't exist. <Link to="/">Go back home</Link>.
        </p>
      </section>
    </main>
  )
}

export default NotFound
