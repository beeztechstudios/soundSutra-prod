// Sanity Client Configuration
// This script will be loaded in the HTML files to interact with Sanity

const SANITY_PROJECT_ID = '3kms8usm'; // Replace with your Sanity Project ID
const SANITY_DATASET = 'production';
const SANITY_API_VERSION = '2023-05-03';

// Simple Sanity Client helper
const sanityClient = {
  fetch: async (query) => {
    const encodedQuery = encodeURIComponent(query);
    const url = `https://${SANITY_PROJECT_ID}.api.sanity.io/v${SANITY_API_VERSION}/data/query/${SANITY_DATASET}?query=${encodedQuery}`;
    
    try {
      const response = await fetch(url);
      const result = await response.json();
      return result.result;
    } catch (error) {
      console.error('Sanity Fetch Error:', error);
      return null;
    }
  },
  
  // Helper to build image URLs
  imageUrl: (source) => {
    if (!source || !source.asset || !source.asset._ref) return '';
    const ref = source.asset._ref;
    const [_file, id, dimensions, extension] = ref.split('-');
    return `https://cdn.sanity.io/images/${SANITY_PROJECT_ID}/${SANITY_DATASET}/${id}-${dimensions}.${extension}`;
  }
};

window.sanityClient = sanityClient;
