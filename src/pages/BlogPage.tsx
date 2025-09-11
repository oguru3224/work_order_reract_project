import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';

const BlogPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Academic Writing Tips & Essay Help Guide | The Cognita Blog';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Struggling with essays & research papers? The Cognita Blog is your free resource for academic success. Find expert writing tips, step-by-step guides, and subject-specific advice for English, History, Business, and STEM.');
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'academic writing tips, essay writing guide, how to write an essay, research paper help, thesis statement, free essay examples, writing a history paper, business essay, nursing essay help, student blog');
    }
  }, []);

  const blogPosts = [
    {
      id: 1,
      title: "How to Write a Perfect Essay: A Step-by-Step Guide",
      excerpt: "Master the art of essay writing with our comprehensive guide. Learn how to structure your arguments, conduct research, and polish your writing to perfection.",
      author: "Dr. Sarah Johnson",
      date: "January 15, 2025",
      readTime: "8 min read",
      category: "Writing Tips",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg"
    },
    {
      id: 2,
      title: "What Makes a Research Paper Stand Out?",
      excerpt: "Discover the key elements that distinguish exceptional research papers from average ones. From methodology to citations, we cover it all.",
      author: "Prof. Michael Chen",
      date: "January 12, 2025",
      readTime: "6 min read",
      category: "Research",
      image: "https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg"
    },
    {
      id: 3,
      title: "How Much Does Academic Writing Help Cost?",
      excerpt: "Understanding the factors that influence academic writing service pricing. Get insights into what you're paying for and how to get the best value.",
      author: "Emma Rodriguez",
      date: "January 10, 2025",
      readTime: "5 min read",
      category: "Pricing",
      image: "https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg"
    },
    {
      id: 4,
      title: "APA vs MLA vs Chicago: Choosing the Right Citation Style",
      excerpt: "Navigate the world of academic citations with confidence. Learn when and how to use different citation styles for maximum academic impact.",
      author: "Dr. James Wilson",
      date: "January 8, 2025",
      readTime: "7 min read",
      category: "Citations",
      image: "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg"
    },
    {
      id: 5,
      title: "Time Management Tips for Student Writers",
      excerpt: "Struggling with deadlines? Learn proven strategies to manage your writing projects effectively and reduce academic stress.",
      author: "Lisa Thompson",
      date: "January 5, 2025",
      readTime: "6 min read",
      category: "Productivity",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg"
    },
    {
      id: 6,
      title: "Common Grammar Mistakes to Avoid in Academic Writing",
      excerpt: "Polish your academic writing by avoiding these frequent grammar pitfalls. Improve your grades with better language mechanics.",
      author: "Dr. Rachel Green",
      date: "January 3, 2025",
      readTime: "9 min read",
      category: "Grammar",
      image: "https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg"
    }
  ];

  const categories = ["All", "Writing Tips", "Research", "Citations", "Grammar", "Productivity"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              The Cognita Blog
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-indigo-100">
              Your Free Resource for Academic Writing Success
            </p>
            <p className="text-lg text-indigo-200 max-w-3xl mx-auto">
              Expert tips, step-by-step guides, and subject-specific advice to help you excel in your academic writing journey
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className="px-6 py-2 rounded-full border border-indigo-200 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-colors duration-200"
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded text-xs font-medium">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <User className="w-4 h-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-flex items-center gap-2 mt-4 text-indigo-600 hover:text-indigo-700 font-medium"
                >
                  Read More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-indigo-600 rounded-lg p-8 mt-16 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Writing Tips</h3>
          <p className="text-indigo-100 mb-6">
            Get the latest academic writing tips and guides delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-900"
            />
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;