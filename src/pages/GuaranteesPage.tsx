import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  CheckCircle, 
  Clock, 
  RefreshCw,
  DollarSign,
  Lock,
  Award,
  Users,
  FileText,
  Star
} from 'lucide-react';

const GuaranteesPage = () => {
  const guarantees = [
    {
      title: "Money Back Guarantee",
      description: "If you're not satisfied with your paper, we'll refund your money. No questions asked.",
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      details: [
        "Full refund if paper doesn't meet requirements",
        "Partial refund for late delivery",
        "Quick processing within 7 business days",
        "No hidden fees or deductions"
      ]
    },
    {
      title: "On-Time Delivery",
      description: "We guarantee your paper will be delivered by the deadline you specify.",
      icon: <Clock className="w-12 h-12 text-blue-600" />,
      details: [
        "99.5% on-time delivery rate",
        "Early delivery available",
        "Real-time progress tracking",
        "Automatic notifications"
      ]
    },
    {
      title: "Free Unlimited Revisions",
      description: "We'll revise your paper until you're completely satisfied with the result.",
      icon: <RefreshCw className="w-12 h-12 text-purple-600" />,
      details: [
        "Unlimited revisions within 14 days",
        "No additional charges",
        "Same writer handles revisions",
        "Quick turnaround time"
      ]
    },
    {
      title: "100% Original Content",
      description: "Every paper is written from scratch and checked for plagiarism.",
      icon: <FileText className="w-12 h-12 text-orange-600" />,
      details: [
        "Written from scratch for each order",
        "Advanced plagiarism detection",
        "Free plagiarism report included",
        "Proper citations and references"
      ]
    },
    {
      title: "Complete Confidentiality",
      description: "Your personal information and order details are kept strictly confidential.",
      icon: <Lock className="w-12 h-12 text-red-600" />,
      details: [
        "SSL encryption for all data",
        "No information shared with third parties",
        "Anonymous communication options",
        "Secure payment processing"
      ]
    },
    {
      title: "Quality Assurance",
      description: "Every paper goes through multiple quality checks before delivery.",
      icon: <Award className="w-12 h-12 text-indigo-600" />,
      details: [
        "Multi-level quality control",
        "Expert editors review all papers",
        "Grammar and style checking",
        "Format verification"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Our Guarantees</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              We stand behind our work with comprehensive guarantees that protect your investment 
              and ensure your complete satisfaction with our academic writing services.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantees Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {guarantee.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">{guarantee.title}</h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed">{guarantee.description}</p>
                <ul className="space-y-3">
                  {guarantee.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Our Guarantees Work */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How Our Guarantees Work</h2>
            <p className="text-xl text-gray-600">Simple steps to claim your guarantee</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Support</h3>
              <p className="text-gray-600">Reach out to our 24/7 customer support team via live chat, email, or phone to discuss your concern.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Review Process</h3>
              <p className="text-gray-600">Our quality assurance team will review your case and determine the best solution based on our guarantee policies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Resolution</h3>
              <p className="text-gray-600">We'll provide a revision, refund, or other appropriate solution within 24-48 hours of your request.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Students Trust Us</h2>
            <p className="text-xl text-gray-600">Our track record speaks for itself</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-green-600 mb-2">99.5%</div>
              <div className="text-gray-600">On-Time Delivery</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-purple-600 mb-2">50K+</div>
              <div className="text-gray-600">Papers Delivered</div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience Our Guarantees?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Place your order with confidence knowing that our comprehensive guarantees protect your investment
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/order" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Place Order Now
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GuaranteesPage;