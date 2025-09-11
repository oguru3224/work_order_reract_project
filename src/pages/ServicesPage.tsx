import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  BookOpen, 
  GraduationCap, 
  Award,
  Calculator,
  Microscope,
  BarChart,
  Globe,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      title: "Essay Writing",
      description: "Custom essays written by academic experts with original research and perfect formatting.",
      icon: <FileText className="w-12 h-12" />,
      price: "From $11.30/page",
      features: ["Any topic", "All academic levels", "MLA, APA, Chicago styles", "Free revisions"],
      popular: true
    },
    {
      title: "Research Papers",
      description: "In-depth research papers with comprehensive analysis and scholarly references.",
      icon: <BookOpen className="w-12 h-12" />,
      price: "From $13.40/page",
      features: ["Original research", "Peer-reviewed sources", "Proper citations", "Plagiarism-free"]
    },
    {
      title: "Dissertations",
      description: "Complete dissertation support from proposal to final defense preparation.",
      icon: <GraduationCap className="w-12 h-12" />,
      price: "From $15.99/page",
      features: ["PhD writers", "Chapter-by-chapter delivery", "Statistical analysis", "Defense preparation"]
    },
    {
      title: "Thesis Writing",
      description: "Professional thesis writing with methodical approach and expert guidance.",
      icon: <Award className="w-12 h-12" />,
      price: "From $14.50/page",
      features: ["Master's level", "Literature review", "Methodology", "Data analysis"]
    },
    {
      title: "Case Studies",
      description: "Detailed case study analysis with practical solutions and recommendations.",
      icon: <BarChart className="w-12 h-12" />,
      price: "From $12.80/page",
      features: ["Business cases", "Medical cases", "Legal cases", "SWOT analysis"]
    },
    {
      title: "Lab Reports",
      description: "Scientific lab reports with proper methodology and data interpretation.",
      icon: <Microscope className="w-12 h-12" />,
      price: "From $11.90/page",
      features: ["Scientific format", "Data analysis", "Charts & graphs", "Conclusion"]
    },
    {
      title: "Math Problems",
      description: "Step-by-step solutions to complex mathematical problems and assignments.",
      icon: <Calculator className="w-12 h-12" />,
      price: "From $9.99/problem",
      features: ["All math levels", "Step-by-step solutions", "Graphs & diagrams", "Explanations"]
    },
    {
      title: "Online Classes",
      description: "Complete online class assistance including assignments, quizzes, and exams.",
      icon: <Globe className="w-12 h-12" />,
      price: "Custom pricing",
      features: ["Full course support", "Assignment help", "Quiz assistance", "Exam preparation"]
    }
  ];

  const academicLevels = [
    { level: "High School", description: "Grades 9-12", discount: "15% OFF" },
    { level: "Undergraduate", description: "Bachelor's degree", discount: "10% OFF" },
    { level: "Graduate", description: "Master's degree", discount: "5% OFF" },
    { level: "PhD", description: "Doctoral level", discount: "Premium" }
  ];

  return (
    <>
      <title>Professional Essay Writing Service | Expert Writers | Cognita</title>
      <meta name="description" content="Struggling with your essay? Our expert writers provide 100% original papers in any subject. Get help with English, History, Business, Nursing, & Law essays. Order now!" />
      <meta name="keywords" content="essay writing service, custom essay, write my essay, English essay help, history essay writer, business essay writing, nursing essay help, law essay service, psychology paper, economics assignment, urgent essay help, professional writers, plagiarism-free" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6">Academic Writing Services</h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
                Comprehensive writing assistance across all academic levels and disciplines. 
                Our expert writers deliver high-quality, original content tailored to your needs.
              </p>
              <Link 
                to="/order" 
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
              >
                Order Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Writing Services</h2>
              <p className="text-xl text-gray-600">Choose from our comprehensive range of academic writing services</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2 ${service.popular ? 'ring-2 ring-orange-500' : ''}`}>
                  {service.popular && (
                    <div className="bg-orange-500 text-white text-center py-2 rounded-t-xl">
                      <span className="text-sm font-semibold">Most Popular</span>
                    </div>
                  )}
                  
                  <div className="p-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{service.title}</h3>
                    <p className="text-gray-600 mb-4 text-center text-sm leading-relaxed">{service.description}</p>
                    
                    <div className="text-center mb-4">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to="/order" 
                      className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-center block font-semibold"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Academic Levels */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Academic Levels We Cover</h2>
              <p className="text-xl text-gray-600">From high school to PhD level - we've got you covered</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {academicLevels.map((level, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:bg-blue-50 transition-colors">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.level}</h3>
                  <p className="text-gray-600 mb-4">{level.description}</p>
                  <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {level.discount}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Services?</h2>
              <p className="text-xl text-gray-600">We deliver excellence in every aspect of academic writing</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Writers",
                  description: "PhD and Master's degree holders from top universities",
                  icon: <GraduationCap className="w-8 h-8 text-blue-600" />
                },
                {
                  title: "Original Content",
                  description: "100% plagiarism-free papers with proper citations",
                  icon: <CheckCircle className="w-8 h-8 text-green-600" />
                },
                {
                  title: "On-Time Delivery",
                  description: "Never miss a deadline with our reliable service",
                  icon: <Award className="w-8 h-8 text-purple-600" />
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock customer support for your convenience",
                  icon: <Globe className="w-8 h-8 text-orange-600" />
                },
                {
                  title: "Free Revisions",
                  description: "Unlimited revisions until you're completely satisfied",
                  icon: <FileText className="w-8 h-8 text-red-600" />
                },
                {
                  title: "Confidential",
                  description: "Your privacy and personal information are protected",
                  icon: <BookOpen className="w-8 h-8 text-indigo-600" />
                }
              ].map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
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
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Place your order now and get expert academic writing assistance
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/order" 
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
              >
                Place Order Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                to="/pricing" 
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ServicesPage;