import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords }) => {
  const siteName = "Femicro-PA";
  const baseUrl = "https://femicropa.com.br";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const defaultDescription = description || "Federação das Associações de Micro e Pequenas Empresas do Pará - Fortalecendo o empreendedorismo regional.";
  const shareImage = `${baseUrl}/Logos-FEMICROs.avif`;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Femicro-PA",
    "alternateName": "Federação das Associações de Micro e Pequenas Empresas do Pará",
    "url": baseUrl,
    "logo": shareImage,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-91-98111-4200",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Governador José Malcher, 168",
      "addressLocality": "Belém",
      "addressRegion": "PA",
      "postalCode": "66035-065",
      "addressCountry": "BR"
    },
    "sameAs": [
      "https://www.instagram.com/femicropa"
    ]
  };

  return (
    <Helmet>
      {/* Basic Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={defaultDescription} />
      <meta name="keywords" content={keywords || "empreendedorismo, pará, micro empresa, pequena empresa, femicro, associativismo"} />
      <link rel="canonical" href={baseUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={baseUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={defaultDescription} />
      <meta property="og:image" content={shareImage} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={baseUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={defaultDescription} />
      <meta name="twitter:image" content={shareImage} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
};

export default SEO;
