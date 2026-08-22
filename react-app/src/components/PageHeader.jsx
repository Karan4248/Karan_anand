function PageHeader({ className, eyebrow, title, tagline, children }) {
  return (
    <header className={className}>
      <div className="header-text">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="tagline">{tagline}</p>
      </div>
      {children}
    </header>
  )
}

export default PageHeader
