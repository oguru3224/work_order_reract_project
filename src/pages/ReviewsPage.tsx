import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  User, 
  Calendar, 
  CheckCircle,
  Filter,
  Search,
  Award,
  TrendingUp,
  Users,
  ThumbsUp
} from 'lucide-react';

const ReviewsPage = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [selectedService, setSelectedService] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const reviews = [
    {
      id: 1,
      name: "Sarah M.",
      degree: "PhD Student",
      service: "Dissertation",
      rating: 5,
      date: "2024-12-15",
      title: "Outstanding dissertation help!",
      review: "The quality of work exceeded my expectations. My writer was knowledgeable, professional, and delivered exactly what I needed. The research was thorough and the writing was exceptional. I couldn't be happier with the results!",
      verified: true,
      helpful: 45
    },
    {
      id: 2,
      name: "Michael C.",
      degree: "MBA Student",
      service: "Case Study",
      rating: 5,
      date: "2024-12-10",
      title: "Perfect case study analysis",
      review: "Received a comprehensive case study that was well-researched and professionally written. The analysis was spot-on and helped me understand complex business concepts. Highly recommend this service!",
      verified: true,
      helpful: 38
    },
    {
      id: 3,
      name: "Emily R.",
      degree: "Undergraduate",
      service: "Essay",
      rating: 5,
      date: "2024-12-08",
      title: "Amazing essay writing service",
      review: "I was struggling with my literature essay and this service saved me. The writer understood the requirements perfectly and delivered a well-structured, insightful essay. Great communication throughout the process.",
      verified: true,
      helpful: 52
    },
    {
      id: 4,
      name: "David L.",
      degree: "Master's Student",
      service: "Research Paper",
      rating: 4,
      date: "2024-12-05",
      title: "High-quality research paper",
      review: "Excellent research paper with proper citations and methodology. The writer was responsive to feedback and made revisions promptly. Very satisfied with the final result.",
      verified: true,
      helpful: 29
    },
    {
      id: 5,
      name: "Jennifer K.",
      degree: "PhD Student",
      service: "Thesis",
      rating: 5,
      date: "2024-12-02",
      title: "Exceptional thesis writing",
      review: "Working on my thesis was overwhelming until I found this service. The writer assigned to me was an expert in my field and provided invaluable guidance. The final thesis was outstanding!",
      verified: true,
      helpful: 67
    },
    {
      id: 6,
      name: "Robert T.",
      degree: "Undergraduate",
      service: "Lab Report",
      rating: 4,
      date: "2024-11-28",
      title: "Professional lab report",
      review: "Needed help with a complex chemistry lab report. The writer understood the scientific methodology and presented the data clearly. Good attention to detail and formatting.",
      verified: true,
      helpful: 23
    },
    {
      id: 7,
      name: "Lisa A.",
      degree: "Master's Student",
      service: "Essay",
      rating: 5,
      date: "2024-11-25",
      title: "Excellent psychology essay",
      review: "The psychology essay I received was well-researched and demonstrated deep understanding of the topic. The writer incorporated recent studies and presented arguments clearly.",
      verified: true,
      helpful: 41
    },
    {
      id: 8,
      name: "James W.",
      degree: "PhD Student",
      service: "Research Paper",
      rating: 5,
      date: "2024-11-20",
      title: "Outstanding research quality",
      review: "The research paper was of exceptional quality with comprehensive literature review and solid methodology. The writer was professional and delivered on time.",
      verified: true,
      helpful: 35
    },
    {
      id: 9,
      name: "Maria G.",
      degree: "Undergraduate",
      service: "Case Study",
      rating: 4,
      date: "2024-11-18",
      title: "Good business case analysis",
      review: "Received a well-structured business case study with thorough analysis. The recommendations were practical and well-supported. Minor revisions were handled quickly.",
      verified: true,
      helpful: 28
    },
    {
      id: 10,
      name: "Thomas H.",
      degree: "Master's Student",
      service: "Dissertation",
      rating: 5,
      date: "2024-11-15",
      title: "Fantastic dissertation support",
      review: "The dissertation writing service was exceptional. My writer was knowledgeable in my field and provided excellent guidance throughout the process. Highly recommended!",
      verified: true,
      helpful: 59
    }
  ];

  const services = ['all', 'Essay', 'Research Paper', 'Dissertation', 'Thesis', 'Case Study', 'Lab Report'];
  const ratings = ['all', '5', '4', '3', '2', '1'];

  const filteredReviews = reviews.filter(review => {
    const ratingMatch = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const serviceMatch = selectedService === 'all' || review.service === selectedService;
    const searchMatch = review.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       review.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       review.review.toLowerCase().includes(searchTerm.toLowerCase());
    return ratingMatch && serviceMatch && searchMatch;
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Customer Reviews</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Read what our satisfied customers say about our academic writing services
            </p>
            <div className="flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center">
                <Star className="w-5 h-5 mr-2 text-yellow-400 fill-current" />
                <span>{averageRating.toFixed(1)} Average Rating</span>
              </div>
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>{totalReviews}+ Reviews</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 mr-2" />
                <span>100% Verified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">4.9</div>
              <div className="text-gray-600">Average Rating</div>
              <div className="flex justify-center mt-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
                ))}
              </div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Satisfaction Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">10K+</div>
              <div className="text-gray-600">Happy Customers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <span className="font-semibold text-gray-700">Filter Reviews:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="flex-1">
                  <select
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {services.map(service => (
                      <option key={service} value={service}>
                        {service === 'all' ? 'All Services' : service}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="flex-1">
                  <select
                    value={selectedRating}
                    onChange={(e) => setSelectedRating(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {ratings.map(rating => (
                      <option key={rating} value={rating}>
                        {rating === 'all' ? 'All Ratings' : `${rating} Stars`}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {filteredReviews.map((review) => (
              <div key={review.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.degree}</p>
                    </div>
                  </div>
                  {review.verified && (
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                      Verified
                    </span>
                  )}
                </div>

                {/* Rating and Service */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${
                          i < review.rating 
                            ? 'text-yellow-500 fill-current' 
                            : 'text-gray-300'
                        }`} 
                      />
                    ))}
                    <span className="ml-2 text-sm font-semibold text-gray-700">
                      {review.rating}/5
                    </span>
                  </div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold">
                    {review.service}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg font-bold text-gray-900 mb-3">{review.title}</h4>

                {/* Review Text */}
                <p className="text-gray-600 mb-4 leading-relaxed">{review.review}</p>

                {/* Footer */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{new Date(review.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <ThumbsUp className="w-4 h-4 mr-1" />
                    <span>{review.helpful} found helpful</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Load More Reviews
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Satisfied Customers</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the quality and service that thousands of students trust
          </p>
          <Link 
            to="/order" 
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Place Your Order Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;