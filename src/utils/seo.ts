// SEO utilities for dynamic sitemap generation and search engine pings

export interface SitemapEntry {
  url: string;
  lastmod: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
}

export class SEOManager {
  private baseUrl: string;
  private sitemapEntries: SitemapEntry[] = [];

  constructor(baseUrl: string = 'https://cognitawriting.com') {
    this.baseUrl = baseUrl;
    this.initializeDefaultEntries();
  }

  private initializeDefaultEntries() {
    const defaultPages = [
      { path: '/', priority: 1.0, changefreq: 'daily' as const },
      { path: '/services', priority: 0.9, changefreq: 'weekly' as const },
      { path: '/pricing', priority: 0.8, changefreq: 'weekly' as const },
      { path: '/samples', priority: 0.7, changefreq: 'weekly' as const },
      { path: '/writers', priority: 0.8, changefreq: 'weekly' as const },
      { path: '/about', priority: 0.6, changefreq: 'monthly' as const },
      { path: '/contact', priority: 0.5, changefreq: 'monthly' as const },
      { path: '/order', priority: 0.9, changefreq: 'daily' as const },
      { path: '/blog', priority: 0.8, changefreq: 'daily' as const },
    ];

    this.sitemapEntries = defaultPages.map(page => ({
      url: `${this.baseUrl}${page.path}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: page.changefreq,
      priority: page.priority
    }));
  }

  addBlogPost(id: string, title: string, publishDate: Date = new Date()) {
    const entry: SitemapEntry = {
      url: `${this.baseUrl}/blog/${id}`,
      lastmod: publishDate.toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: 0.7
    };
    
    this.sitemapEntries.push(entry);
    this.pingSearchEngines();
  }

  updatePage(path: string) {
    const entryIndex = this.sitemapEntries.findIndex(entry => 
      entry.url === `${this.baseUrl}${path}`
    );
    
    if (entryIndex !== -1) {
      this.sitemapEntries[entryIndex].lastmod = new Date().toISOString().split('T')[0];
      this.pingSearchEngines();
    }
  }

  generateSitemap(): string {
    const xmlHeader = '<?xml version="1.0" encoding="UTF-8"?>\n';
    const urlsetOpen = '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    const urlsetClose = '</urlset>';

    const urls = this.sitemapEntries.map(entry => `
  <url>
    <loc>${entry.url}</loc>
    <lastmod>${entry.lastmod}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`).join('\n');

    return xmlHeader + urlsetOpen + urls + '\n' + urlsetClose;
  }

  async pingSearchEngines() {
    const sitemapUrl = `${this.baseUrl}/sitemap.xml`;
    const pingUrls = [
      `https://www.google.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
      `https://www.bing.com/ping?sitemap=${encodeURIComponent(sitemapUrl)}`,
    ];

    try {
      const pingPromises = pingUrls.map(url => 
        fetch(url, { method: 'GET', mode: 'no-cors' })
          .catch(error => console.warn(`Failed to ping ${url}:`, error))
      );
      
      await Promise.allSettled(pingPromises);
      console.log('Search engines pinged successfully');
    } catch (error) {
      console.error('Error pinging search engines:', error);
    }
  }

  // Generate robots.txt content
  generateRobotsTxt(): string {
    return `User-agent: *
Allow: /

# Sitemap
Sitemap: ${this.baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin areas
Disallow: /admin/
Disallow: /api/
Disallow: /private/

# Allow important pages
Allow: /
Allow: /services
Allow: /pricing
Allow: /samples
Allow: /writers
Allow: /about
Allow: /contact
Allow: /order
Allow: /blog`;
  }

  // Generate structured data for organization
  generateOrganizationSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Cognita Writing Services",
      "url": this.baseUrl,
      "logo": `${this.baseUrl}/logo.png`,
      "description": "Professional academic writing services providing essays, research papers, and dissertation help by degree-holding writers.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-877-398-5184",
        "contactType": "customer service",
        "availableLanguage": ["English"],
        "areaServed": "US"
      },
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "addressCountry": "US"
      },
      "sameAs": [
        "https://facebook.com/cognitawriting",
        "https://twitter.com/cognitawriting",
        "https://linkedin.com/company/cognitawriting"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "10000",
        "bestRating": "5",
        "worstRating": "1"
      },
      "offers": {
        "@type": "Offer",
        "description": "Professional academic writing services",
        "priceRange": "$11.30 - $51.99"
      }
    };
  }

  // Generate service-specific structured data
  generateServiceSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Academic Writing Services",
      "description": "Professional essay writing, research papers, dissertations, and academic help",
      "provider": {
        "@type": "Organization",
        "name": "Cognita Writing Services"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Academic Writing Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Essay Writing"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Research Papers"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Dissertations"
            }
          }
        ]
      }
    };
  }
}

// Initialize SEO manager
export const seoManager = new SEOManager();

// Auto-generate sitemap on app load
if (typeof window !== 'undefined') {
  // Add blog posts to sitemap
  const blogPosts = [
    { id: '1', title: 'How to Write a Perfect Essay: A Step-by-Step Guide' },
    { id: '2', title: 'What Makes a Research Paper Stand Out?' },
    { id: '3', title: 'How Much Does Academic Writing Help Cost?' }
  ];

  blogPosts.forEach(post => {
    seoManager.addBlogPost(post.id, post.title);
  });
}