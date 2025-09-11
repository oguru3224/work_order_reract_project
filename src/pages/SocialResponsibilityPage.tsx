import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Users, BookOpen, Globe, Leaf, Award } from 'lucide-react';

const SocialResponsibilityPage = () => {
  const initiatives = [
    {
      title: "Educational Access",
      description: "Supporting students from underserved communities with scholarships and free writing resources.",
      icon: <BookOpen className="w-12 h-12 text-blue-600" />,
      stats: "500+ students helped annually"
    },
    {
      title: "Environmental Responsibility",
      description: "Committed to carbon-neutral operations and supporting environmental conservation projects.",
      icon: <Leaf className="w-12 h-12 text-green-600" />,
      stats: "100% renewable energy usage"
    },
    {
      title: "Community Outreach",
      description: "Partnering with local schools and libraries to provide writing workshops and literacy programs.",
      icon: <Users className="w-12 h-12 text-purple-600" />,
      stats: "50+ workshops conducted"
    },
    {
      title: "Global Impact",
      description: "Supporting international education initiatives and cross-cultural academic exchange programs.",
      icon: <Globe className="w-12 h-12 text-orange-600" />,
      stats: "25 countries reached"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Social Responsibility</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              At Cognita Writing Services, we believe in giving back to the community and making a positive impact on education and society.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <Heart className="w-12 h-12 text-red-500 mr-4" />
            <h2 className="text-4xl font-bold text-gray-900">Our Commitment</h2>
          </div>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            We recognize that education is a fundamental right and a powerful tool for social change. 
            Our social responsibility initiatives focus on making quality education accessible to all, 
            supporting environmental sustainability, and contributing to the communities we serve.
          </p>
          <div className="bg-blue-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <p className="text-gray-700 leading-relaxed">
              We pledge to dedicate 5% of our annual profits to social responsibility initiatives, 
              ensuring that our success contributes to the betterment of society and the advancement of education worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Initiatives</h2>
            <p className="text-xl text-gray-600">Making a difference through targeted programs and partnerships</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {initiative.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{initiative.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{initiative.description}</p>
                <div className="text-center">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
                    {initiative.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnerships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Partners</h2>
            <p className="text-xl text-gray-600">Working together with organizations that share our values</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Educational Foundations</h3>
              <p className="text-gray-600">Partnering with foundations focused on educational equity and access.</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <Leaf className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Environmental Groups</h3>
              <p className="text-gray-600">Supporting organizations working on climate change and conservation.</p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-xl">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Community Centers</h3>
              <p className="text-gray-600">Collaborating with local centers to provide educational resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <p className="text-xl text-gray-600">Measuring our contribution to society</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">$250K+</div>
              <div className="text-gray-600">Donated to Education</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">1,000+</div>
              <div className="text-gray-600">Students Supported</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">75+</div>
              <div className="text-gray-600">Community Programs</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">15+</div>
              <div className="text-gray-600">Partner Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Looking Forward</h2>
            <p className="text-xl text-gray-600">Our goals for the next five years</p>
          </div>

          <div className="space-y-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2025-2030 Goals</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <div>
                    <strong>Expand Scholarship Program:</strong> Provide full scholarships to 100 students annually from underserved communities.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <div>
                    <strong>Carbon Neutral Operations:</strong> Achieve complete carbon neutrality across all operations and offset historical emissions.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <div>
                    <strong>Global Literacy Initiative:</strong> Launch programs in 10 developing countries to improve literacy rates.
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 bg-orange-600 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <div>
                    <strong>Technology Access:</strong> Provide digital learning tools and internet access to 500 rural schools.
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Get Involved</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in making a difference. Together, we can create positive change in education and society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Partner With Us
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SocialResponsibilityPage;