import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Users, 
  Shield, 
  Clock, 
  Star, 
  CheckCircle, 
  Award,
  Target,
  Zap,
  Globe,
  ArrowRight,
  Play,
  TrendingUp,
  FileText,
  GraduationCap,
  Calculator
} from 'lucide-react';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "Essay Writing",
      description: "Custom essays written by academic experts with original research and perfect formatting.",
      icon: <FileText className="w-8 h-8" />,
      price: "From $11.30/page"
    },
    {
      title: "Research Papers",
      description: "In-depth research papers with comprehensive analysis and scholarly references.",
      icon: <BookOpen className="w-8 h-8" />,
      price: "From $13.40/page"
    },
    {
      title: "Dissertations",
      description: "Complete dissertation support from proposal to final defense preparation.",
      icon: <GraduationCap className="w-8 h-8" />,
      price: "From $15.99/page"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      degree: "PhD Student",
      text: "Outstanding quality and professional service. My dissertation was completed ahead of schedule with excellent research quality.",
      rating: 5,
      verified: true
    },
    {
      name: "Michael C.",
      degree: "MBA Student",
      text: "The team helped me achieve my academic goals with their expert writing and research skills. Highly recommended!",
      rating: 5,
      verified: true
    },
    {
      name: "Emily R.",
      degree: "Undergraduate",
      text: "Professional, reliable, and delivered exactly what I needed. The quality exceeded my expectations.",
      rating: 5,
      verified: true
    }
  ];

  const stats = [
    { number: "98%", label: "Customer Satisfaction", icon: <Star className="w-8 h-8 text-yellow-500" /> },
    { number: "500+", label: "Expert Writers", icon: <Users className="w-8 h-8 text-blue-500" /> },
    { number: "50K+", label: "Orders Completed", icon: <CheckCircle className="w-8 h-8 text-green-500" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-8 h-8 text-purple-500" /> }
  ];

  const guarantees = [
    { icon: <Shield className="w-6 h-6" />, title: "100% Original", description: "Plagiarism-free content guaranteed" },
    { icon: <Clock className="w-6 h-6" />, title: "On-Time Delivery", description: "Never miss a deadline" },
    { icon: <Target className="w-6 h-6" />, title: "Quality Assurance", description: "Multiple quality checks" },
    { icon: <Globe className="w-6 h-6" />, title: "24/7 Support", description: "Round-the-clock assistance" }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-800 bg-opacity-50 rounded-full px-4 py-2 mb-6">
                <Award className="w-5 h-5 mr-2" />
                <span className="text-sm font-medium">Trusted Since 2009</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Professional <span className="text-blue-300">Academic Writing</span> Services
              </h1>
              
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Get expert help with essays, research papers, dissertations, and more. 
                Our team of qualified writers delivers original, high-quality academic content 
                tailored to your specific requirements.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link 
                  to="/order" 
                  className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-all transform hover:scale-105 flex items-center justify-center"
                >
                  Order Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/pricing" 
                  className="border-2 border-blue-300 text-blue-100 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-800 transition-colors flex items-center justify-center"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Calculate Price
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-blue-200">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>Free Revisions</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>Money Back Guarantee</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl hover:bg-opacity-20 transition-all">
                  <div className="flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-center mb-2">{stat.number}</h3>
                  <p className="text-blue-200 text-center text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Human-Written Banner */}
      <section className="py-4 bg-green-50 border-y border-green-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              <span className="text-lg font-bold">100% Human-Written</span>
              <div className="w-3 h-3 bg-green-500 rounded-full ml-3 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Academic Writing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive writing assistance across all academic levels and disciplines
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{service.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{service.description}</p>
                <div className="text-center mb-6">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">PhD qualified writers</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Original research</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Free revisions</span>
                  </div>
                </div>
                <Link 
                  to="/order" 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center block font-semibold"
                >
                  Order Now
                </Link>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/services" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              View All Services
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Simple steps to get your academic paper done</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Place Order", description: "Fill out the order form with your requirements", icon: <FileText className="w-8 h-8" /> },
              { step: "02", title: "Make Payment", description: "Secure payment processing with multiple options", icon: <Shield className="w-8 h-8" /> },
              { step: "03", title: "Writer Assigned", description: "Expert writer matched to your subject area", icon: <Users className="w-8 h-8" /> },
              { step: "04", title: "Get Your Paper", description: "Download your completed paper on time", icon: <CheckCircle className="w-8 h-8" /> }
            ].map((item, index) => (
              <div key={index} className="text-center relative">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {item.icon}
                </div>
                <div className="absolute top-8 left-20 w-full h-0.5 bg-blue-200 hidden md:block" style={{ display: index === 3 ? 'none' : 'block' }}></div>
                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Writers Slider Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">500+ Professional Essay Writers Are Ready to Help</h2>
            <p className="text-xl text-gray-600">The experts at our essay writing website cover 80+ disciplines</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Dr. Sarah Johnson",
                avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
                rating: 4.9,
                reviews: 1247,
                specialty: "English Literature",
                degree: "PhD in English Literature",
                university: "Harvard University",
                price: "$15.99/page",
                available: true
              },
              {
                name: "Prof. Michael Chen",
                avatar: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
                rating: 5.0,
                reviews: 892,
                specialty: "Economics & Business",
                degree: "PhD in Economics",
                university: "Stanford University",
                price: "$18.99/page",
                available: true
              },
              {
                name: "Dr. Emily Rodriguez",
                avatar: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
                rating: 4.8,
                reviews: 1156,
                specialty: "Psychology",
                degree: "PhD in Psychology",
                university: "Yale University",
                price: "$16.99/page",
                available: false
              }
            ].map((writer, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={writer.avatar} 
                    alt={writer.name}
                    className="w-16 h-16 rounded-full object-cover shadow-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{writer.name}</h3>
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
                  <div className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    writer.available 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {writer.available ? 'Available' : 'Busy'}
                  </div>
                </div>
                
                <div className="space-y-2 mb-4 text-sm">
                  <div className="flex items-center">
                    <GraduationCap className="w-4 h-4 mr-2 text-blue-600" />
                    <span className="text-gray-700">{writer.degree}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2 text-green-600" />
                    <span className="text-gray-700">{writer.specialty}</span>
                  </div>
                  <div className="text-gray-500 ml-6">{writer.university}</div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                </div>
                
                <div className="flex space-x-2">
                  <button 
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                      writer.available
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!writer.available}
                  >
                    Hire This Writer
                  </button>
                  <Link 
                    to="/writers"
                    className="px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-sm"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/writers" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold text-lg"
            >
              View All Writers
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Guarantees</h2>
            <p className="text-xl text-gray-600">Your success is our commitment</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { icon: <Shield className="w-6 h-6" />, title: "100% Original", description: "Plagiarism-free content guaranteed" },
              { icon: <Clock className="w-6 h-6" />, title: "On-Time Delivery", description: "Never miss a deadline" },
              { icon: <Target className="w-6 h-6" />, title: "Quality Assurance", description: "Multiple quality checks" },
              { icon: <Globe className="w-6 h-6" />, title: "24/7 Support", description: "Round-the-clock assistance" },
              { icon: <CheckCircle className="w-6 h-6" />, title: "No AI & Plagiarism", description: "100% human-written content" }
            ].map((guarantee, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {guarantee.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{guarantee.title}</h3>
                <p className="text-gray-600">{guarantee.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600">Success stories from satisfied students</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                  ))}
                  {testimonial.verified && (
                    <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Verified</span>
                  )}
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-gray-600 text-sm">{testimonial.degree}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Get answers to common questions about our services</p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How does your essay writing service work?",
                answer: "Simply place an order by filling out our order form with your requirements. We'll assign a qualified writer who specializes in your subject area. You can communicate directly with your writer throughout the process and receive your completed paper by the deadline."
              },
              {
                question: "Are your writers qualified?",
                answer: "Yes, all our writers hold advanced degrees (Master's or PhD) from reputable universities. They undergo a rigorous selection process and are experts in their respective fields with years of academic writing experience."
              },
              {
                question: "Is your service confidential?",
                answer: "Absolutely. We guarantee complete confidentiality. Your personal information and order details are never shared with third parties. We use secure encryption to protect all data and communications."
              },
              {
                question: "Do you provide plagiarism-free papers?",
                answer: "Yes, we guarantee 100% original content. Every paper is written from scratch according to your specific requirements. We also provide a free plagiarism report with every order to ensure originality."
              },
              {
                question: "What if I'm not satisfied with my paper?",
                answer: "We offer unlimited free revisions within 14 days of delivery. If you're still not satisfied, we provide a money-back guarantee. Your satisfaction is our top priority."
              },
              {
                question: "How much does it cost?",
                answer: "Our prices start from $11.30 per page for high school level with a 14-day deadline. The final price depends on academic level, deadline, and paper complexity. Use our price calculator for an instant quote."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Excel in Your Studies?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of successful students who trust us with their academic writing needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/order" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
            >
              Place Your Order
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/samples" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              View Free Samples
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;