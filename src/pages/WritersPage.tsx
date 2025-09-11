import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Award, 
  BookOpen, 
  GraduationCap,
  MessageCircle,
  Eye,
  Filter,
  Search,
  CheckCircle,
  Users,
  Globe,
  Clock
} from 'lucide-react';

const WritersPage = () => {
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const writers = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.9,
      reviews: 1247,
      specialties: ["English Literature", "Creative Writing", "Academic Research"],
      degree: "PhD in English Literature",
      university: "Harvard University",
      experience: "15+ years",
      completedOrders: 2340,
      successRate: 98,
      languages: ["English", "Spanish"],
      about: "Experienced academic writer specializing in literature analysis and creative writing. Published author with extensive research background.",
      price: "$15.99/page",
      available: true
    },
    {
      id: 2,
      name: "Prof. Michael Chen",
      avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 5.0,
      reviews: 892,
      specialties: ["Economics", "Business", "Statistics"],
      degree: "PhD in Economics",
      university: "Stanford University",
      experience: "12+ years",
      completedOrders: 1876,
      successRate: 99,
      languages: ["English", "Mandarin"],
      about: "Economics professor with expertise in business analysis and statistical modeling. Former consultant for Fortune 500 companies.",
      price: "$17.50/page",
      available: true
    },
    {
      id: 3,
      name: "Dr. Emily Rodriguez",
      avatar: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.8,
      reviews: 1156,
      specialties: ["Psychology", "Social Sciences", "Research Methods"],
      degree: "PhD in Psychology",
      university: "Yale University",
      experience: "10+ years",
      completedOrders: 1923,
      successRate: 97,
      languages: ["English", "Spanish", "Portuguese"],
      about: "Clinical psychologist with extensive research experience in behavioral sciences and social psychology.",
      price: "$16.99/page",
      available: false
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.9,
      reviews: 1034,
      specialties: ["Business Administration", "Marketing", "Management"],
      degree: "PhD in Business Administration",
      university: "Wharton School",
      experience: "14+ years",
      completedOrders: 2156,
      successRate: 98,
      languages: ["English"],
      about: "Business strategy expert with MBA and PhD. Former executive at multinational corporations.",
      price: "$17.99/page",
      available: true
    },
    {
      id: 5,
      name: "Dr. Lisa Anderson",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.7,
      reviews: 967,
      specialties: ["Environmental Science", "Biology", "Chemistry"],
      degree: "PhD in Environmental Science",
      university: "MIT",
      experience: "11+ years",
      completedOrders: 1654,
      successRate: 96,
      languages: ["English", "German"],
      about: "Environmental scientist with focus on climate change research and sustainable development.",
      price: "$14.50/page",
      available: true
    },
    {
      id: 6,
      name: "Dr. Robert Taylor",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.8,
      reviews: 1289,
      specialties: ["Computer Science", "Engineering", "Mathematics"],
      degree: "PhD in Computer Science",
      university: "Carnegie Mellon",
      experience: "13+ years",
      completedOrders: 1987,
      successRate: 97,
      languages: ["English", "French"],
      about: "Software engineer turned academic with expertise in AI, machine learning, and data science.",
      price: "$18.00/page",
      available: true
    },
    {
      id: 7,
      name: "Dr. Maria Garcia",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.9,
      reviews: 1543,
      specialties: ["Spanish Literature", "Linguistics", "Translation Studies"],
      degree: "PhD in Spanish Literature",
      university: "University of Barcelona",
      experience: "16+ years",
      completedOrders: 2789,
      successRate: 98,
      languages: ["English", "Spanish", "Catalan"],
      about: "Renowned Spanish literature expert with extensive experience in comparative literature and translation studies.",
      price: "$16.25/page",
      available: true
    },
    {
      id: 8,
      name: "Prof. David Kim",
      avatar: "https://images.pexels.com/photos/2182973/pexels-photo-2182973.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 5.0,
      reviews: 876,
      specialties: ["Physics", "Astronomy", "Applied Mathematics"],
      degree: "PhD in Theoretical Physics",
      university: "Caltech",
      experience: "18+ years",
      completedOrders: 1456,
      successRate: 99,
      languages: ["English", "Korean"],
      about: "Theoretical physicist with groundbreaking research in quantum mechanics and astrophysics.",
      price: "$17.75/page",
      available: true
    },
    {
      id: 9,
      name: "Dr. Jennifer Brown",
      avatar: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.8,
      reviews: 1234,
      specialties: ["Nursing", "Healthcare Management", "Medical Research"],
      degree: "PhD in Nursing Science",
      university: "Johns Hopkins",
      experience: "14+ years",
      completedOrders: 2345,
      successRate: 97,
      languages: ["English"],
      about: "Healthcare professional with extensive clinical and research experience in nursing science and healthcare management.",
      price: "$15.50/page",
      available: false
    },
    {
      id: 10,
      name: "Dr. Ahmed Hassan",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.9,
      reviews: 1098,
      specialties: ["History", "Middle Eastern Studies", "Political Science"],
      degree: "PhD in History",
      university: "Oxford University",
      experience: "17+ years",
      completedOrders: 1876,
      successRate: 98,
      languages: ["English", "Arabic", "French"],
      about: "Historian specializing in Middle Eastern studies with extensive research in political and social history.",
      price: "$14.99/page",
      available: true
    },
    {
      id: 11,
      name: "Dr. Sophie Martin",
      avatar: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.7,
      reviews: 1456,
      specialties: ["Philosophy", "Ethics", "Critical Thinking"],
      degree: "PhD in Philosophy",
      university: "Sorbonne",
      experience: "12+ years",
      completedOrders: 1654,
      successRate: 96,
      languages: ["English", "French", "German"],
      about: "Philosophy professor with expertise in ethics, metaphysics, and critical thinking methodologies.",
      price: "$13.50/page",
      available: true
    },
    {
      id: 12,
      name: "Dr. Thomas White",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 5.0,
      reviews: 987,
      specialties: ["Law", "Criminal Justice", "Legal Research"],
      degree: "JD, PhD in Law",
      university: "Harvard Law School",
      experience: "20+ years",
      completedOrders: 1234,
      successRate: 99,
      languages: ["English"],
      about: "Legal expert with dual JD and PhD degrees, specializing in criminal justice and constitutional law.",
      price: "$12.99/page",
      available: true
    },
    {
      id: 13,
      name: "Dr. Alex Thompson",
      avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.9,
      reviews: 1345,
      specialties: ["Computer Programming", "Software Engineering", "Data Structures"],
      degree: "PhD in Computer Science",
      university: "MIT",
      experience: "14+ years",
      completedOrders: 2156,
      successRate: 98,
      languages: ["English", "Python", "Java"],
      about: "Software engineer and computer science professor with expertise in programming languages, algorithms, and software development methodologies.",
      price: "$17.25/page",
      available: true
    },
    {
      id: 14,
      name: "Dr. Rebecca Martinez",
      avatar: "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 4.8,
      reviews: 1567,
      specialties: ["Mechanical Engineering", "Civil Engineering", "Project Management"],
      degree: "PhD in Mechanical Engineering",
      university: "Stanford University",
      experience: "16+ years",
      completedOrders: 1987,
      successRate: 97,
      languages: ["English", "Spanish"],
      about: "Professional engineer with extensive experience in mechanical and civil engineering projects, specializing in design optimization and project management.",
      price: "$16.75/page",
      available: true
    },
    {
      id: 15,
      name: "Dr. Patricia Williams",
      avatar: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      rating: 5.0,
      reviews: 1234,
      specialties: ["Nursing Research", "Healthcare Administration", "Statistics", "Mathematics"],
      degree: "PhD in Nursing Science, MS in Statistics",
      university: "University of Pennsylvania",
      experience: "18+ years",
      completedOrders: 2345,
      successRate: 99,
      languages: ["English"],
      about: "Healthcare researcher and statistician with dual expertise in nursing science and mathematical analysis. Specializes in evidence-based practice and healthcare data analysis.",
      price: "$15.25/page",
      available: true
    }
  ];

  const subjects = ['all', 'English Literature', 'Economics', 'Psychology', 'Business', 'Science', 'Computer Science'];
  const ratings = ['all', '4.5+', '4.7+', '4.9+'];

  const filteredWriters = writers.filter(writer => {
    const subjectMatch = selectedSubject === 'all' || writer.specialties.some(specialty => 
      specialty.toLowerCase().includes(selectedSubject.toLowerCase())
    );
    const ratingMatch = selectedRating === 'all' || writer.rating >= parseFloat(selectedRating);
    const searchMatch = writer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       writer.specialties.some(specialty => 
                         specialty.toLowerCase().includes(searchTerm.toLowerCase())
                       );
    return subjectMatch && ratingMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Expert Writers</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Meet our team of 500+ professional essay writers covering 80+ disciplines. 
              All writers are degree-holding experts ready to help you succeed.
            </p>
            <div className="flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center">
                <Users className="w-5 h-5 mr-2" />
                <span>500+ Writers</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 mr-2" />
                <span>80+ Disciplines</span>
              </div>
              <div className="flex items-center">
                <Award className="w-5 h-5 mr-2" />
                <span>PhD Qualified</span>
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
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Professional Writers</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Orders Completed</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Available Support</div>
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
                <span className="font-semibold text-gray-700">Filter Writers:</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 flex-1">
                <div className="flex-1">
                  <select
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    {subjects.map(subject => (
                      <option key={subject} value={subject}>
                        {subject === 'all' ? 'All Subjects' : subject}
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
                  placeholder="Search writers..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Writers Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWriters.map((writer) => (
              <div key={writer.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <img 
                        src={writer.avatar} 
                        alt={writer.name}
                        className="w-16 h-16 rounded-full object-cover shadow-lg"
                      />
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{writer.name}</h3>
                        <div className="flex items-center space-x-1 mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < Math.floor(writer.rating) 
                                  ? 'text-yellow-500 fill-current' 
                                  : 'text-gray-300'
                              }`} 
                            />
                          ))}
                          <span className="text-sm font-semibold text-gray-700 ml-1">
                            {writer.rating} ({writer.reviews})
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                      writer.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {writer.available ? 'Available' : 'Busy'}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="mb-4">
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      <span>{writer.degree}</span>
                    </div>
                    <div className="text-sm text-gray-500 ml-6">{writer.university}</div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {writer.specialties.map((specialty, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                    <div>
                      <div className="text-gray-500">Experience</div>
                      <div className="font-semibold">{writer.experience}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Orders</div>
                      <div className="font-semibold">{writer.completedOrders.toLocaleString()}</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Success Rate</div>
                      <div className="font-semibold text-green-600">{writer.successRate}%</div>
                    </div>
                    <div>
                      <div className="text-gray-500">Price</div>
                      <div className="font-semibold text-blue-600">{writer.price}</div>
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-4">
                    <div className="text-sm text-gray-500 mb-1">Languages:</div>
                    <div className="flex space-x-2">
                      {writer.languages.map((language, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* About */}
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">{writer.about}</p>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Link
                      to="/order"
                      className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                        writer.available
                          ? 'bg-blue-600 text-white hover:bg-blue-700'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      } text-center block`}
                    >
                      Hire This Writer
                    </Link>
                    <button className="flex items-center justify-center w-12 h-10 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="flex items-center justify-center w-12 h-10 border-2 border-green-600 text-green-600 rounded-lg hover:bg-green-50 transition-colors">
                      <MessageCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              Load More Writers
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Our Writers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Writers?</h2>
            <p className="text-xl text-gray-600">Quality, expertise, and reliability you can trust</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Rigorous Selection",
                description: "Only 3% of applicants pass our strict qualification process",
                icon: <Award className="w-8 h-8 text-blue-600" />
              },
              {
                title: "Advanced Degrees",
                description: "All writers hold Master's or PhD degrees from top universities",
                icon: <GraduationCap className="w-8 h-8 text-green-600" />
              },
              {
                title: "Proven Track Record",
                description: "Average writer has completed 1,500+ orders with 98% success rate",
                icon: <CheckCircle className="w-8 h-8 text-purple-600" />
              },
              {
                title: "Subject Expertise",
                description: "Writers specialize in specific fields for deep knowledge",
                icon: <BookOpen className="w-8 h-8 text-orange-600" />
              },
              {
                title: "Native English",
                description: "All writers are native English speakers with excellent communication",
                icon: <Globe className="w-8 h-8 text-red-600" />
              },
              {
                title: "24/7 Availability",
                description: "Writers work around the clock to meet your deadlines",
                icon: <Clock className="w-8 h-8 text-indigo-600" />
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Work with Our Experts?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Choose from our pool of qualified writers and get started on your academic success
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

export default WritersPage;