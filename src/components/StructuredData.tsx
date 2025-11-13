import React from 'react';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Southern Software Solutions",
    "url": "https://southernsoftwaresolutions.tech",
    "logo": {
      "@type": "ImageObject",
      "url": "https://southernsoftwaresolutions.tech/logo.png",
      "width": "512",
      "height": "512"
    },
    "description": "Professional web design and software development services in Taranaki, New Zealand",
    "founder": {
      "@type": "Person",
      "name": "Hugh Avery"
    },
    "email": "contact@southernsoftwaresolutions.tech",
    "telephone": ["+61430126624", "+64224993402"],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Plymouth",
      "addressRegion": "Taranaki",
      "addressCountry": "NZ"
    },
    "sameAs": [
      "https://southernsoftwaresolutions.tech"
    ]
  };

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://southernsoftwaresolutions.tech",
    "name": "Southern Software Solutions",
    "image": {
      "@type": "ImageObject",
      "url": "https://southernsoftwaresolutions.tech/logo.png",
      "width": "512",
      "height": "512"
    },
    "description": "Professional web design and software development services in Taranaki, New Zealand. Custom websites, software applications, and ongoing maintenance.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "New Plymouth",
      "addressRegion": "Taranaki",
      "addressCountry": "NZ"
    },
    "url": "https://southernsoftwaresolutions.tech",
    "telephone": "+64224993402",
    "email": "contact@southernsoftwaresolutions.tech",
    "priceRange": "$$",
    "areaServed": [
      {
        "@type": "Country",
        "name": "New Zealand"
      }
    ]
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Web Design and Software Development",
    "provider": {
      "@type": "Organization",
      "name": "Southern Software Solutions"
    },
    "areaServed": ["New Zealand"],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Design & Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Software Application Development"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Website Maintenance & Support"
          }
        }
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
};

export default StructuredData;
