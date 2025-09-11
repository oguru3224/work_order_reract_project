import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag,
  ArrowLeft,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
  Calculator,
  CheckCircle,
  Award,
  BookOpen,
  MessageCircle,
  TrendingUp
} from 'lucide-react';

const SingleBlogPost = () => {
  const { id } = useParams();
  const [academicLevel, setAcademicLevel] = useState('undergraduate');
  const [deadline, setDeadline] = useState('14');
  const [pages, setPages] = useState(1);

  const pricingData = {
    'high-school': {
      '14': 11.30, '7': 12.99, '3': 16.99, '24': 23.99, '12': 29.99, '6': 34.99
    },
    'undergraduate': {
      '14': 13.99, '7': 15.99, '3': 19.99, '24': 26.99, '12': 32.99, '6': 38.99
    },
    'masters': {
      '14': 22.99, '7': 24.99, '3': 28.99, '24': 35.99, '12': 41.99, '6': 47.99
    },
    'phd': {
      '14': 26.99, '7': 28.99, '3': 32.99, '24': 39.99, '12': 45.99, '6': 51.99
    }
  };

  const getCurrentPrice = () => {
    return pricingData[academicLevel as keyof typeof pricingData][deadline as keyof typeof pricingData['high-school']] || 0;
  };

  const getTotalPrice = () => {
    return (getCurrentPrice() * pages).toFixed(2);
  };

  const inclusions = [
    "100% Original Content",
    "Free Unlimited Revisions",
    "Plagiarism Report",
    "24/7 Customer Support",
    "On-Time Delivery Guarantee",
    "Money Back Guarantee",
    "Free Bibliography & Title Page",
    "Direct Communication with Writer",
    "Quality Assurance Check",
    "Free Formatting (APA, MLA, Chicago)"
  ];

  // Sample blog posts data (in real app, this would come from API/database)
  const blogPosts = {
    1: {
      title: "How to Write a Perfect Essay: A Step-by-Step Guide",
      content: `
        <p>Writing a perfect essay requires careful planning, research, and execution. Whether you're a high school student or pursuing advanced degrees, mastering the art of essay writing is crucial for academic success.</p>
        
        <h2>Understanding the Essay Structure</h2>
        <p>Every great essay follows a clear structure that guides readers through your argument. The traditional five-paragraph essay includes an introduction, three body paragraphs, and a conclusion, but longer essays may require more complex structures.</p>
        
        <h3>1. Crafting a Compelling Introduction</h3>
        <p>Your introduction should grab the reader's attention and clearly state your thesis. Start with a hook - this could be a surprising statistic, a thought-provoking question, or a relevant anecdote. Follow this with background information that provides context for your argument.</p>
        
        <h3>2. Developing Strong Body Paragraphs</h3>
        <p>Each body paragraph should focus on a single main idea that supports your thesis. Start with a clear topic sentence, provide evidence to support your point, and explain how this evidence relates to your overall argument.</p>
        
        <h3>3. Writing a Memorable Conclusion</h3>
        <p>Your conclusion should do more than simply restate your thesis. Synthesize your main points and explain why your argument matters. Consider the broader implications of your topic and leave readers with something to think about.</p>
        
        <h2>Research and Evidence</h2>
        <p>Strong essays are built on solid research. Use credible sources and integrate them smoothly into your writing. Remember to cite all sources properly according to your required citation style (APA, MLA, Chicago, etc.).</p>
        
        <h2>The Writing Process</h2>
        <p>Don't try to write a perfect essay in one sitting. Break the process into manageable steps:</p>
        <ul>
          <li>Brainstorm and outline your ideas</li>
          <li>Write a rough draft</li>
          <li>Revise for content and organization</li>
          <li>Edit for grammar and style</li>
          <li>Proofread for final errors</li>
        </ul>
        
        <h2>Common Mistakes to Avoid</h2>
        <p>Many students make similar mistakes that can weaken their essays. Avoid these common pitfalls:</p>
        <ul>
          <li>Weak or unclear thesis statements</li>
          <li>Insufficient evidence to support claims</li>
          <li>Poor transitions between paragraphs</li>
          <li>Plagiarism or improper citations</li>
          <li>Rushing the revision process</li>
        </ul>
        
        <h2>Getting Professional Help</h2>
        <p>If you're struggling with essay writing, don't hesitate to seek help. Professional writing services can provide guidance, examples, and even custom-written essays to help you understand proper structure and style.</p>
        
        <p>Remember, becoming a skilled essay writer takes practice. Don't be discouraged if your first attempts aren't perfect. With time and effort, you'll develop the skills needed to write compelling, well-structured essays that impress your professors and earn top grades.</p>
      `,
      category: "Writing Tips",
      author: "Dr. Sarah Johnson",
      date: "2024-01-15",
      readTime: "8 min read",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Essay Writing", "Academic Tips", "Study Guide"]
    },
    2: {
      title: "What Makes a Research Paper Stand Out?",
      content: `
        <p>Outstanding research papers combine original insights with rigorous methodology and clear presentation. Understanding what distinguishes exceptional research from average work can help you elevate your academic writing to the next level.</p>
        
        <h2>Original Research Questions</h2>
        <p>The foundation of any great research paper is a compelling research question. Your question should be specific enough to be manageable but broad enough to be significant. It should address a gap in existing knowledge or offer a new perspective on an established topic.</p>
        
        <h3>Characteristics of Strong Research Questions:</h3>
        <ul>
          <li>Clear and focused</li>
          <li>Researchable with available resources</li>
          <li>Significant to your field of study</li>
          <li>Original or offering new insights</li>
        </ul>
        
        <h2>Comprehensive Literature Review</h2>
        <p>A thorough literature review demonstrates your understanding of existing research and positions your work within the broader academic conversation. Don't just summarize sources - analyze them critically and identify patterns, gaps, and contradictions.</p>
        
        <h2>Rigorous Methodology</h2>
        <p>Your methodology section should be detailed enough that another researcher could replicate your study. Explain your research design, data collection methods, and analytical approaches. Address potential limitations and explain how you've minimized bias.</p>
        
        <h2>Clear Data Presentation</h2>
        <p>Present your findings clearly and objectively. Use tables, graphs, and charts when appropriate, but ensure they enhance rather than complicate your narrative. Let the data speak for itself while providing necessary context and interpretation.</p>
        
        <h2>Thoughtful Analysis and Discussion</h2>
        <p>This is where your research paper truly shines. Don't just report what you found - explain what it means. Connect your findings to existing literature, discuss implications, and acknowledge limitations. Consider alternative explanations for your results.</p>
        
        <h2>Professional Presentation</h2>
        <p>Attention to detail in formatting, citations, and writing quality can make the difference between a good paper and a great one. Follow your discipline's style guide meticulously and proofread carefully.</p>
        
        <h2>Getting Expert Assistance</h2>
        <p>If you're struggling with any aspect of research paper writing, professional academic writing services can provide valuable support. From help with research design to final editing, expert assistance can help ensure your paper meets the highest academic standards.</p>
      `,
      category: "Research",
      author: "Prof. Michael Chen",
      date: "2024-01-12",
      readTime: "12 min read",
      image: "https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Research Papers", "Academic Writing", "Methodology"]
    },
    3: {
      title: "How Much Does Academic Writing Help Cost?",
      content: `
        <p>Understanding the factors that influence academic writing service pricing can help you make informed decisions and get the best value for your investment in academic success.</p>
        
        <h2>Factors That Affect Pricing</h2>
        <p>Several key factors determine the cost of academic writing services:</p>
        
        <h3>Academic Level</h3>
        <p>Higher academic levels require more specialized knowledge and expertise, which is reflected in pricing:</p>
        <ul>
          <li><strong>High School:</strong> Starting from $11.30/page</li>
          <li><strong>Undergraduate:</strong> Starting from $13.99/page</li>
          <li><strong>Master's:</strong> Starting from $22.99/page</li>
          <li><strong>PhD:</strong> Starting from $26.99/page</li>
        </ul>
        
        <h3>Deadline Requirements</h3>
        <p>Urgent deadlines require writers to prioritize your work, which affects pricing:</p>
        <ul>
          <li>14 days: Standard pricing</li>
          <li>7 days: 20% increase</li>
          <li>3 days: 50% increase</li>
          <li>24 hours: 100% increase</li>
          <li>12 hours: 150% increase</li>
          <li>6 hours: 200% increase</li>
        </ul>
        
        <h3>Type of Assignment</h3>
        <p>Different types of academic work require varying levels of expertise and time investment:</p>
        <ul>
          <li>Essays: Most affordable option</li>
          <li>Research papers: Moderate pricing</li>
          <li>Case studies: Specialized pricing</li>
          <li>Dissertations: Premium pricing due to complexity</li>
        </ul>
        
        <h2>What's Included in the Price</h2>
        <p>Reputable academic writing services include numerous value-added services at no extra cost:</p>
        <ul>
          <li>Unlimited free revisions</li>
          <li>Plagiarism report</li>
          <li>24/7 customer support</li>
          <li>Direct communication with writer</li>
          <li>Free bibliography and title page</li>
          <li>Quality assurance checks</li>
        </ul>
        
        <h2>Volume Discounts</h2>
        <p>Many services offer discounts for larger orders:</p>
        <ul>
          <li>5-9 pages: 5% discount</li>
          <li>10-19 pages: 10% discount</li>
          <li>20-49 pages: 15% discount</li>
          <li>50+ pages: 20% discount</li>
        </ul>
        
        <h2>Getting the Best Value</h2>
        <p>To maximize value from academic writing services:</p>
        <ul>
          <li>Plan ahead to avoid rush charges</li>
          <li>Provide clear, detailed instructions</li>
          <li>Take advantage of volume discounts</li>
          <li>Choose services with comprehensive guarantees</li>
          <li>Look for services that include free revisions</li>
        </ul>
        
        <h2>Investment in Your Future</h2>
        <p>While academic writing help represents a financial investment, it's important to consider the long-term benefits: improved grades, better understanding of academic writing, reduced stress, and more time for other important activities.</p>
      `,
      category: "Pricing",
      author: "Emily Rodriguez",
      date: "2024-01-10",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/164686/pexels-photo-164686.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Pricing", "Academic Services", "Student Budget"]
    }
  };

  const currentPost = blogPosts[parseInt(id || '1') as keyof typeof blogPosts] || blogPosts[1];

  const relatedPosts = Object.entries(blogPosts)
    .filter(([postId]) => postId !== id)
    .slice(0, 3)
    .map(([postId, post]) => ({ id: postId, ...post }));

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-blue-600">Blog</Link>
            <span>/</span>
            <span className="text-gray-900">{currentPost.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Back Button */}
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {/* Article Header */}
            <article className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img 
                src={currentPost.image} 
                alt={currentPost.title}
                className="w-full h-64 object-cover"
              />
              
              <div className="p-8">
                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-600">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
                    {currentPost.category}
                  </span>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(currentPost.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <User className="w-4 h-4 mr-1" />
                    <span>{currentPost.author}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{currentPost.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  {currentPost.title}
                </h1>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentPost.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Content */}
                <div 
                  className="prose prose-lg max-w-none mb-8"
                  dangerouslySetInnerHTML={{ __html: currentPost.content }}
                />

                {/* Share Buttons */}
                <div className="border-t pt-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Share2 className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-600 font-medium">Share this article:</span>
                    </div>
                    <div className="flex space-x-3">
                      <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                        <Facebook className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                        <Twitter className="w-5 h-5" />
                      </button>
                      <button className="w-10 h-10 bg-blue-700 text-white rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors">
                        <Linkedin className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>

            {/* Related Posts */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((post) => (
                  <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-32 object-cover"
                    />
                    <div className="p-4">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                        {post.category}
                      </span>
                      <h3 className="font-bold text-gray-900 mt-2 mb-2 line-clamp-2 text-sm">
                        {post.title}
                      </h3>
                      <div className="flex items-center text-xs text-gray-500 mb-3">
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                      <Link 
                        to={`/blog/${post.id}`}
                        className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                      >
                        Read More →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Price Calculator */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <div className="flex items-center mb-6">
                <Calculator className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Price Calculator</h3>
              </div>

              <div className="space-y-4">
                {/* Academic Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Academic Level</label>
                  <select
                    value={academicLevel}
                    onChange={(e) => setAcademicLevel(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="high-school">High School</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="masters">Master's</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>

                {/* Deadline */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Deadline</label>
                  <select
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="14">14 days</option>
                    <option value="7">7 days</option>
                    <option value="3">3 days</option>
                    <option value="24">24 hours</option>
                    <option value="12">12 hours</option>
                    <option value="6">6 hours</option>
                  </select>
                </div>

                {/* Pages */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Pages</label>
                  <div className="flex items-center space-x-3">
                    <button
                      onClick={() => setPages(Math.max(1, pages - 1))}
                      className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={pages}
                      onChange={(e) => setPages(Math.max(1, parseInt(e.target.value) || 1))}
                      className="flex-1 p-3 border border-gray-300 rounded-lg text-center focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      min="1"
                    />
                    <button
                      onClick={() => setPages(pages + 1)}
                      className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Price Display */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Price per page:</span>
                    <span className="font-bold text-blue-600">${getCurrentPrice()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-900">Total Price:</span>
                    <span className="text-xl font-bold text-green-600">${getTotalPrice()}</span>
                  </div>
                </div>

                <Link
                  to="/order"
                  className="w-full bg-orange-500 text-white py-3 rounded-lg text-center font-semibold hover:bg-orange-600 transition-colors block"
                >
                  Order Now
                </Link>
              </div>

              {/* What's Included */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 text-green-500 mr-2" />
                  What's Included:
                </h4>
                <div className="space-y-2">
                  {inclusions.map((inclusion, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{inclusion}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
              <p className="text-blue-100 mb-4 text-sm">
                Get the latest writing tips and academic insights delivered to your inbox.
              </p>
              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Contact CTA */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Need Help?</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Our expert writers are ready to help you with any academic writing challenge.
              </p>
              <div className="space-y-3">
                <Link 
                  to="/contact"
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors text-center block"
                >
                  Contact Support
                </Link>
                <button className="w-full border-2 border-blue-600 text-blue-600 py-2 rounded-lg hover:bg-blue-50 transition-colors">
                  Live Chat
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogPost;