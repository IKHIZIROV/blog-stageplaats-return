type PageHeaderProps = {
  title: string
  subtitle: string
  centered?: boolean
}

function PageHeader({ title, subtitle, centered = false }: PageHeaderProps) {
  return (
    <section className={`container-page pt-12 sm:pt-16 ${centered ? 'text-center' : ''}`}>
      <h1 className="section-title">{title}</h1>
      <p className={`section-subtitle ${centered ? 'mx-auto' : ''}`}>{subtitle}</p>
    </section>
  )
}

export default PageHeader
