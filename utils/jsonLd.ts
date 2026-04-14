import { Dentist, WithContext } from "schema-dts";

// if this were a real app, we would have filled proper data in here
const jsonLd: WithContext<Dentist> = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Confident Dental Care Clinic",
  // url: "https://example.com",
  // image: "https://example.com/logo.svg",
  telephone: "+12344567890",
  // "address": {
  //   "@type": "PostalAddress",
  //   "streetAddress": "St. Sanguin Number 40",
  //   "addressLocality": "Placeholder",
  //   "addressRegion": "Placeholder",
  //   "postalCode": "12345",
  //   "addressCountry": "Placeholder"
  // },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  // "sameAs": [
  //   "https://www.facebook.com/placeholder",
  //   "https://www.instagram.com/placeholder",
  //   "https://www.linkedin.com/company/placeholder",
  //   "https://twitter.com/placeholder"
  // ],
  // geo: {
  //   "@type": "GeoCoordinates",
  //   latitude: 0,
  //   longitude: 0,
  // },
};

export default jsonLd;
