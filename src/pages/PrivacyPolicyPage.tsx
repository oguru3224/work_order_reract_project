import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, Database } from 'lucide-react';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your information.
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
                <Shield className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Privacy Policy</h2>
                  <p className="text-gray-600">Last updated: January 2025</p>
                </div>
              </div>

              <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                <div className="flex items-center">
                  <Lock className="w-6 h-6 text-green-600 mr-3" />
                  <p className="text-green-800 font-medium">
                    We are committed to protecting your privacy and ensuring the security of your personal information.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Information We Collect</h3>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Personal Information:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Academic information (institution, level of study)</li>
                  <li>Order details and communication history</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Technical Information:</h4>
                <ul className="list-disc pl-6 text-gray-700 space-y-1">
                  <li>IP address and browser information</li>
                  <li>Website usage data and analytics</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">How We Use Your Information</h3>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>To provide and deliver our writing services</li>
                <li>To process payments and manage your account</li>
                <li>To communicate with you about your orders</li>
                <li>To improve our services and website functionality</li>
                <li>To comply with legal obligations</li>
                <li>To prevent fraud and ensure security</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Information Sharing</h3>
              <p className="text-gray-700 mb-4">We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>With our writers (only order-related information necessary to complete your work)</li>
                <li>With payment processors for transaction processing</li>
                <li>With service providers who assist in website operations</li>
                <li>When required by law or to protect our legal rights</li>
                <li>In case of business transfer or merger (with prior notice)</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Security</h3>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="flex items-start">
                  <Database className="w-6 h-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-2">Security Measures:</h4>
                    <ul className="list-disc pl-6 text-blue-800 space-y-1">
                      <li>SSL encryption for all data transmission</li>
                      <li>Secure servers with regular security updates</li>
                      <li>Access controls and authentication systems</li>
                      <li>Regular security audits and monitoring</li>
                      <li>Staff training on data protection practices</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Your Rights</h3>
              <p className="text-gray-700 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal requirements)</li>
                <li><strong>Portability:</strong> Request transfer of your data to another service provider</li>
                <li><strong>Objection:</strong> Object to certain types of processing of your information</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Cookies and Tracking</h3>
              <p className="text-gray-700 mb-4">We use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Remember your preferences and settings</li>
                <li>Analyze website traffic and usage patterns</li>
                <li>Provide personalized content and advertisements</li>
                <li>Ensure website security and prevent fraud</li>
              </ul>
              <p className="text-gray-700 mb-6">
                You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Data Retention</h3>
              <p className="text-gray-700 mb-6">
                We retain your personal information only as long as necessary to provide our services and comply with legal obligations. 
                Order information is typically retained for 7 years for accounting and legal purposes.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">International Transfers</h3>
              <p className="text-gray-700 mb-6">
                Your information may be transferred to and processed in countries other than your country of residence. 
                We ensure appropriate safeguards are in place to protect your information during such transfers.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Children's Privacy</h3>
              <p className="text-gray-700 mb-6">
                Our services are not intended for children under 18. We do not knowingly collect personal information 
                from children under 18. If we become aware of such collection, we will delete the information immediately.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Changes to This Policy</h3>
              <p className="text-gray-700 mb-6">
                We may update this privacy policy from time to time. We will notify you of any material changes by 
                posting the new policy on this page and updating the "Last updated" date.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
                <div className="flex items-center">
                  <Eye className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Questions about Privacy?</h4>
                    <p className="text-blue-800">
                      If you have questions about this privacy policy or how we handle your information, please{' '}
                      <Link to="/contact" className="text-blue-600 hover:text-blue-700 underline">
                        contact our privacy team
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

export default PrivacyPolicyPage;