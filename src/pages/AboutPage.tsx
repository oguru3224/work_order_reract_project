import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Award, 
  Clock, 
  Shield,
  BookOpen,
  GraduationCap,
  Target,
  Globe,
  CheckCircle,
  Star,
  TrendingUp,
  Heart
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: "20+", label: "Years of Experience", icon: <Clock className="w-8 h-8 text-blue-500" /> },
    { number: "500+", label: "Expert Writers", icon: <Users className="w-8 h-8 text-green-500" /> },
    { number: "50,000+", label: "Papers Delivered", icon: <BookOpen className="w-8 h-8 text-purple-500" /> },
    { number: "98%", label: "Customer Satisfaction", icon: <Star className="w-8 h-8 text-yellow-500" /> }
  ];

  const values = [
    {
      title: "Quality Excellence",
      description: "We maintain the highest standards of academic writing with rigorous quality control processes.",
      icon: <Award className="w-8 h-8 text-blue-600" />
    },
    {
      title: "Academic Integrity",
      description: "We uphold academic integrity with original, plagiarism-free content and proper citations.",
      icon: <Shield className="w-8 h-8 text-green-600" />
    },
    {
      title: "Customer Focus",
      description: "Your success is our priority. We provide personalized service and support throughout your journey.",
      icon: <Heart className="w-8 h-8 text-red-600" />
    },
    {
      title: "Innovation",
      description: "We continuously improve our services and embrace new technologies to serve you better.",
      icon: <TrendingUp className="w-8 h-8 text-purple-600" />
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Chief Academic Officer",
      education: "PhD in English Literature, Harvard University",
      experience: "15+ years in academic writing and research",
      specialties: ["Literature", "Creative Writing", "Academic Research"]
    },
    {
      name: "Prof. Michael Chen",
      role: "Head of Quality Assurance",
      education: "PhD in Economics, Stanford University",
      experience: "12+ years in academic publishing",
      specialties: ["Economics", "Business", "Statistics"]
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Senior Writing Consultant",
      education: "PhD in Psychology, Yale University",
      experience: "10+ years in academic counseling",
      specialties: ["Psychology", "Social Sciences", "Research Methods"]
    }
  ];

  const milestones = [
    { year: "2009", event: "Cognitawriting.com founded with a mission to help students succeed" },
    { year: "2008", event: "Reached 1,000 satisfied customers and expanded our writer network" },
    { year: "2012", event: "Launched 24/7 customer support and quality assurance program" },
    { year: "2016", event: "Introduced advanced plagiarism detection and quality control systems" },
    { year: "2020", event: "Adapted to remote learning needs during global pandemic" },
    { year: "2024", event: "Celebrating 15+ years of academic excellence with 50,000+ papers delivered" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About Cognita Writing</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              For over 20 years, we've been helping students achieve academic success through 
              Experience the difference that 15+ years of academic writing expertise can make
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009, Cognitawriting.com began with a simple yet powerful mission: 
                  to help students achieve their academic goals through professional writing assistance 
                  and expert guidance.
                </p>
                <p>
                  What started as a small team of dedicated academic writers has grown into a 
                  comprehensive academic support platform serving thousands of students worldwide. 
                  Our commitment to quality, integrity, and student success has remained unchanged 
                  throughout our journey.
                </p>
                <p>
                  Today, we're proud to be a trusted partner for students at all academic levels, 
                  from high school to PhD programs. Our team of expert writers, editors, and 
                  support staff work tirelessly to ensure every student receives the personalized 
                  attention and high-quality assistance they deserve.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-100 p-6 rounded-xl">
                <Globe className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600">Serving students worldwide with 24/7 support</p>
              </div>
              <div className="bg-green-100 p-6 rounded-xl">
                <GraduationCap className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">PhD and Master's qualified writers</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-xl">
                <Target className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Focus</h3>
                <p className="text-gray-600">Rigorous quality assurance processes</p>
              </div>
              <div className="bg-orange-100 p-6 rounded-xl">
                <CheckCircle className="w-12 h-12 text-orange-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">98% customer satisfaction rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">Experienced professionals dedicated to your success</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <img 
                  src={`https://images.pexels.com/photos/${index === 0 ? '415829' : index === 1 ? '2182970' : '3777943'}/pexels-photo-${index === 0 ? '415829' : index === 1 ? '2182970' : '3777943'}.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop`}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                <div className="text-left space-y-3 text-sm text-gray-600">
                  <div>
                    <strong>Education:</strong> {member.education}
                  </div>
                  <div>
                    <strong>Experience:</strong> {member.experience}
                  </div>
                  <div>
                    <strong>Specialties:</strong> {member.specialties.join(', ')}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in our 15+ year history</p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{milestone.year}</span>
                </div>
                <div className="flex-1 bg-gray-50 p-6 rounded-xl">
                  <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Our Success Story?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the difference that 15+ years of academic writing expertise can make
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/order" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get Started Today
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;