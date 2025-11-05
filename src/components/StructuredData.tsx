export default function StructuredData() {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'John Xanthopoulos',
    alternateName: 'John X',
    url: 'https://www.synepho.com',
    image: 'https://www.synepho.com/social-image.png',
    sameAs: [
      'https://www.linkedin.com/in/johnx/',
      'https://github.com/jxman',
    ],
    jobTitle: 'IT Executive',
    description:
      'IT Executive by day, developer on weekends. Expertise in cloud architecture, software development, and technology leadership.',
    knowsAbout: [
      'AWS',
      'React',
      'Terraform',
      'Cloud Architecture',
      'Technology Leadership',
      'Software Development',
      'Next.js',
      'TypeScript',
      'DevOps',
    ],
  }

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'John Xanthopoulos Portfolio',
    url: 'https://www.synepho.com',
    description:
      'IT Executive by day, developer on weekends. Sharing insights on software development, cloud architecture, and technology leadership.',
    author: {
      '@type': 'Person',
      name: 'John Xanthopoulos',
    },
    inLanguage: 'en-US',
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Synepho',
    url: 'https://www.synepho.com',
    logo: 'https://www.synepho.com/social-image.png',
    description:
      'Technology consulting and software development services specializing in AWS cloud architecture and modern web development.',
    founder: {
      '@type': 'Person',
      name: 'John Xanthopoulos',
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  )
}
