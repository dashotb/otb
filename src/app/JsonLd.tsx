import { Organization, WithContext } from 'schema-dts';

export default function JsonLd() {
  const organizationData: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'On The Board',
    url: 'https://ontheboard.tech',
    logo: 'https://ontheboard.tech/logo.png',
    description: 'Agence digitale spécialisée dans la création de sites web, le développement d\'applications web & mobile, et l\'intégration d\'IA.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'FR',
      addressLocality: 'Toulouse',
      addressRegion: 'Occitanie'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+33-7-60-78-66-36',
      contactType: 'customer service',
      areaServed: 'FR',
      availableLanguage: ['French', 'English']
    },
    sameAs: [
      'https://www.linkedin.com/company/on-the-board-tech',
      'https://www.instagram.com/ontheboard_'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
    />
  );
}