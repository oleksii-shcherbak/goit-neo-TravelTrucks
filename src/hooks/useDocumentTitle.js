import { useEffect } from 'react';

export default function useDocumentTitle(title, description) {
  useEffect(() => {
    // Set page title
    if (title) {
      document.title = title;
    }

    // Set meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (!metaDescription) {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        document.head.appendChild(metaDescription);
      }
      metaDescription.content = description;
    }

    // Cleanup: restore default title when component unmounts
    return () => {
      document.title = 'TravelTrucks';
    };
  }, [title, description]);
}
