import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Shield, AlertCircle } from 'lucide-react';

const TermsConditionsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Terms & Conditions</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <div className="flex items-center mb-8">
                <FileText className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Terms and Conditions of Service</h2>
                  <p className="text-gray-600">Last updated: January 2025</p>
                </div>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
                <div className="flex items-center">
                  <AlertCircle className="w-6 h-6 text-yellow-600 mr-3" />
                  <p className="text-yellow-800 font-medium">
                    By using our services, you agree to be bound by these terms and conditions.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">1. Service Description</h3>
              <p className="text-gray-700 mb-6">
                Cognita Writing Services provides custom academic writing assistance including essays, research papers, 
                dissertations, and other academic materials. Our services are intended for research and reference purposes only.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">2. User Responsibilities</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Provide accurate and complete information when placing orders</li>
                <li>Use our services ethically and in accordance with your institution's policies</li>
                <li>Make payments on time and in full</li>
                <li>Communicate professionally with our staff and writers</li>
                <li>Review delivered work promptly and request revisions within the specified timeframe</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">3. Payment Terms</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Payment is required in full before work begins on your order</li>
                <li>All prices are in USD and include applicable taxes</li>
                <li>We accept major credit cards, PayPal, and other secure payment methods</li>
                <li>Refunds are processed according to our money-back guarantee policy</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">4. Delivery and Revisions</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>We guarantee on-time delivery according to your specified deadline</li>
                <li>Free unlimited revisions are available within 14 days of delivery</li>
                <li>Revision requests must be within the original order requirements</li>
                <li>Major changes to original requirements may incur additional charges</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">5. Intellectual Property</h3>
              <p className="text-gray-700 mb-6">
                Upon full payment, you receive full ownership rights to the completed work. We retain no rights 
                to the content and will not resell or redistribute your paper to other clients.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">6. Confidentiality</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>All personal information and order details are kept strictly confidential</li>
                <li>We never share client information with third parties</li>
                <li>Communication between clients and writers is secure and private</li>
                <li>We use industry-standard encryption to protect your data</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">7. Quality Guarantee</h3>
              <p className="text-gray-700 mb-6">
                We guarantee that all work is original, properly researched, and meets academic standards. 
                Every paper includes a free plagiarism report and undergoes quality assurance checks.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">8. Limitation of Liability</h3>
              <p className="text-gray-700 mb-6">
                Our liability is limited to the amount paid for services. We are not responsible for any 
                indirect, incidental, or consequential damages arising from the use of our services.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">9. Dispute Resolution</h3>
              <p className="text-gray-700 mb-6">
                Any disputes will be resolved through binding arbitration in accordance with the rules of 
                the American Arbitration Association. The arbitration will take place in New York, NY.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">10. Changes to Terms</h3>
              <p className="text-gray-700 mb-6">
                We reserve the right to modify these terms at any time. Changes will be posted on this page 
                and will take effect immediately upon posting. Continued use of our services constitutes 
                acceptance of the modified terms.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Questions about our Terms?</h4>
                    <p className="text-blue-800">
                      If you have any questions about these terms and conditions, please{' '}
                      <Link to="/contact" className="text-blue-600 hover:text-blue-700 underline">
                        contact our support team
                      </Link>
                      .
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditionsPage;