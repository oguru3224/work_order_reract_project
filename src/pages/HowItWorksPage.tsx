import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  CreditCard, 
  Users, 
  Download,
  CheckCircle,
  Clock,
  MessageCircle,
  Shield,
  Star,
  ArrowRight
} from 'lucide-react';

const HowItWorksPage = () => {
  const steps = [
    {
      number: "01",
      title: "Place Your Order",
      description: "Fill out our simple order form with your paper requirements, deadline, and academic level.",
      icon: <FileText className="w-12 h-12 text-blue-600" />,
      details: [
        "Choose paper type and academic level",
        "Set your deadline and page count",
        "Provide detailed instructions",
        "Upload any reference materials"
      ]
    },
    {
      number: "02",
      title: "Make Secure Payment",
      description: "Complete your payment using our secure payment system with multiple payment options.",
      icon: <CreditCard className="w-12 h-12 text-green-600" />,
      details: [
        "Multiple payment methods accepted",
        "SSL encrypted transactions",
        "No hidden fees or charges",
        "Instant payment confirmation"
      ]
    },
    {
      number: "03",
      title: "Writer Assignment",
      description: "We assign the most qualified writer who specializes in your subject area.",
      icon: <Users className="w-12 h-12 text-purple-600" />,
      details: [
        "PhD and Master's qualified writers",
        "Subject matter experts",
        "Direct communication available",
        "Progress tracking and updates"
      ]
    },
    {
      number: "04",
      title: "Receive Your Paper",
      description: "Download your completed paper on time, review it, and request revisions if needed.",
      icon: <Download className="w-12 h-12 text-orange-600" />,
      details: [
        "On-time delivery guaranteed",
        "Plagiarism report included",
        "Free unlimited revisions",
        "24/7 customer support"
      ]
    }
  ];

  const features = [
    {
      title: "Quality Assurance",
      description: "Every paper goes through multiple quality checks",
      icon: <CheckCircle className="w-8 h-8 text-green-600" />
    },
    {
      title: "On-Time Delivery",
      description: "99.5% of orders delivered on or before deadline",
      icon: <Clock className="w-8 h-8 text-blue-600" />
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock customer support available",
      icon: <MessageCircle className="w-8 h-8 text-purple-600" />
    },
    {
      title: "Secure & Confidential",
      description: "Your privacy and data security are guaranteed",
      icon: <Shield className="w-8 h-8 text-red-600" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">How It Works</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Getting your custom academic paper is simple and straightforward. 
              Follow these 4 easy steps to receive high-quality writing assistance.
            </p>
            <Link 
              to="/order" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
            >
              Start Your Order
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple 4-Step Process</h2>
            <p className="text-xl text-gray-600">From order to delivery in just a few clicks</p>
          </div>

          <div className="space-y-16">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className="lg:w-1/2">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-6">
                        {step.icon}
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-600 mb-2">{step.number}</div>
                        <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">{step.description}</p>
                    <ul className="space-y-3">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-200 rounded-xl shadow-lg flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        {step.icon}
                      </div>
                      <div className="text-2xl font-bold text-blue-600">{step.number}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Process?</h2>
            <p className="text-xl text-gray-600">We've perfected our system to ensure the best experience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl hover:shadow-lg transition-all">
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

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Typical Order Timeline</h2>
            <p className="text-xl text-gray-600">What to expect after placing your order</p>
          </div>

          <div className="space-y-8">
            {[
              { time: "0-30 minutes", event: "Order confirmation and payment processing" },
              { time: "30 minutes - 2 hours", event: "Writer assignment and project briefing" },
              { time: "Throughout process", event: "Regular progress updates and communication" },
              { time: "Before deadline", event: "Quality check and plagiarism scan" },
              { time: "On deadline", event: "Paper delivery with plagiarism report" },
              { time: "After delivery", event: "Free revisions available for 14 days" }
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0 w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm text-center">{item.time}</span>
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-lg">
                  <p className="text-gray-700 leading-relaxed">{item.event}</p>
                </div>
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
            Join thousands of satisfied students who have experienced our seamless ordering process
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/order" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
            >
              Place Your Order Now
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
  );
};

export default HowItWorksPage;