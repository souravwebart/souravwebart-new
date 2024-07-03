const fs = require('fs');
const path = require('path');

// Define the base URL of your site
const baseUrl = 'https://www.souravwebart.in/';

// Function to generate sitemap XML
function generateSitemap() {
    // Define all the static pages
    const staticPages = [
        '/',
        '/about',
        '/experience',
        '/project',
        '/project',
        '/contact',
    ];

    // Read the dynamic pages from the file system or API
    const dynamicPages = getDynamicPages(); // You'll define this function based on your source of dynamic pages

    // Combine all pages
    const allPages = [...staticPages, ...dynamicPages];

    // Generate XML for each page
    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
            .map(
                (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
  </url>`
            )
            .join('')}
</urlset>`;

    // Write the sitemap to the public directory
    fs.writeFileSync(path.resolve(__dirname, 'public', 'sitemap.xml'), xml);

    console.log('Sitemap generated!');
}

// Call the function to generate the sitemap
generateSitemap();

// Dummy function to fetch dynamic pages
// Replace this with your actual logic to fetch dynamic pages
function getDynamicPages() {
    return ['/posts/1', '/posts/2', '/posts/3']; // Replace with your dynamic routes
}
