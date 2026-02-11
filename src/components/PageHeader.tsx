type PageHeaderProps = {
  title: string
  subtitle: string
}

function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="container-page pt-12 sm:pt-16">
      <h1 className="section-title">{title}</h1>
      <p className="section-subtitle">{subtitle}</p>
    </section>
  )
}

export default PageHeader
