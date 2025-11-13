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

  // TODO: Add LocalBusiness Schema for Local SEO
  // Critical for "web design near me" and Google Maps visibility
  // When you set up Google Business Profile, update the address details below to match exactly
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.southernsoftwaresolutions.tech/#localbusiness",
    "name": "Southern Software Solutions",
    "image": "https://www.southernsoftwaresolutions.tech/og-image.png",
    "description": "Professional web design and software development services in Taranaki, New Zealand. Custom websites, software applications, and SEO services for local businesses.",
    "url": "https://www.southernsoftwaresolutions.tech",
    "telephone": "+64224993402",
    "email": "contact@southernsoftwaresolutions.tech",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      // TODO: When Google Business Profile is set up, add streetAddress here to match GBP
      // Example: "streetAddress": "123 Devon Street East",
      "addressLocality": "New Plymouth",
      "addressRegion": "Taranaki",
      "postalCode": "4310",
      "addressCountry": "NZ"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-39.0556",
      "longitude": "174.0752"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "New Zealand"
      },
      {
        "@type": "City",
        "name": "New Plymouth"
      },
      {
        "@type": "City",
        "name": "Stratford"
      },
      {
        "@type": "City",
        "name": "Hawera"
      },
      {
        "@type": "State",
        "name": "Taranaki"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Web Design Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Basic Website Design",
            "description": "5-page responsive website with SEO optimization"
          },
          "price": "1499",
          "priceCurrency": "NZD"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Professional Website Design",
            "description": "Unlimited pages with advanced features and integrations"
          },
          "price": "4999",
          "priceCurrency": "NZD"
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
};

export default StructuredData;
