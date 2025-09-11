import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, Settings, Info, Shield } from 'lucide-react';

const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Cookie Policy</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Learn about how we use cookies and similar technologies on our website
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
                <Cookie className="w-8 h-8 text-blue-600 mr-3" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Cookie Policy</h2>
                  <p className="text-gray-600">Last updated: January 2025</p>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <div className="flex items-center">
                  <Info className="w-6 h-6 text-blue-600 mr-3" />
                  <p className="text-blue-800 font-medium">
                    This policy explains how Cognita Writing Services uses cookies and similar technologies.
                  </p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">What Are Cookies?</h3>
              <p className="text-gray-700 mb-6">
                Cookies are small text files that are stored on your device when you visit our website. They help us 
                provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Types of Cookies We Use</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Essential Cookies</h4>
                  <p className="text-gray-700 mb-3">
                    These cookies are necessary for the website to function properly. They enable basic functions like 
                    page navigation, access to secure areas, and form submissions.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Session management cookies</li>
                    <li>Security cookies</li>
                    <li>Load balancing cookies</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Performance Cookies</h4>
                  <p className="text-gray-700 mb-3">
                    These cookies collect information about how visitors use our website, such as which pages are 
                    visited most often and if users get error messages.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Google Analytics cookies</li>
                    <li>Page load time tracking</li>
                    <li>Error reporting cookies</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Functionality Cookies</h4>
                  <p className="text-gray-700 mb-3">
                    These cookies allow the website to remember choices you make and provide enhanced, more personal features.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Language preference cookies</li>
                    <li>User interface customization</li>
                    <li>Form auto-fill cookies</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Marketing Cookies</h4>
                  <p className="text-gray-700 mb-3">
                    These cookies are used to deliver advertisements more relevant to you and your interests.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-1">
                    <li>Advertising network cookies</li>
                    <li>Social media integration cookies</li>
                    <li>Remarketing cookies</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Third-Party Cookies</h3>
              <p className="text-gray-700 mb-4">We may also use third-party services that set cookies on our website:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Google Analytics:</strong> For website traffic analysis and user behavior tracking</li>
                <li><strong>Payment Processors:</strong> For secure payment processing and fraud prevention</li>
                <li><strong>Live Chat Services:</strong> For customer support functionality</li>
                <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Managing Your Cookie Preferences</h3>
              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <div className="flex items-start">
                  <Settings className="w-6 h-6 text-green-600 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-green-900 mb-2">You have control over cookies:</h4>
                    <ul className="list-disc pl-6 text-green-800 space-y-1">
                      <li>Use our cookie consent banner to manage preferences</li>
                      <li>Adjust browser settings to block or delete cookies</li>
                      <li>Use browser privacy/incognito mode</li>
                      <li>Install browser extensions that block tracking</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Browser-Specific Instructions</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Google Chrome:</h4>
                  <p className="text-gray-700">Settings → Privacy and Security → Cookies and other site data</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Mozilla Firefox:</h4>
                  <p className="text-gray-700">Options → Privacy & Security → Cookies and Site Data</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Safari:</h4>
                  <p className="text-gray-700">Preferences → Privacy → Manage Website Data</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Microsoft Edge:</h4>
                  <p className="text-gray-700">Settings → Cookies and site permissions → Cookies and site data</p>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Impact of Disabling Cookies</h3>
              <p className="text-gray-700 mb-4">
                While you can disable cookies, please note that doing so may affect your experience on our website:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Some features may not work properly</li>
                <li>You may need to re-enter information repeatedly</li>
                <li>Personalized content may not be available</li>
                <li>Website performance may be reduced</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Retention</h3>
              <p className="text-gray-700 mb-6">
                Different cookies have different lifespans:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Session cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent cookies:</strong> Remain until they expire or you delete them</li>
                <li><strong>Third-party cookies:</strong> Managed by external services with their own retention policies</li>
              </ul>

              <h3 className="text-xl font-bold text-gray-900 mb-4">Updates to This Policy</h3>
              <p className="text-gray-700 mb-6">
                We may update this cookie policy from time to time to reflect changes in our practices or for other 
                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the 
                updated policy on this page.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mt-8">
                <div className="flex items-center">
                  <Shield className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <h4 className="font-bold text-blue-900 mb-2">Questions about Cookies?</h4>
                    <p className="text-blue-800">
                      If you have questions about our use of cookies, please{' '}
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

export default CookiePolicyPage;