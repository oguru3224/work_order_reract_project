import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <Brain className="w-10 h-10 text-blue-400" />
              <div>
                <span className="text-2xl font-bold">Cognita Writing</span>
                <div className="text-sm text-gray-400">Since 2009</div>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional academic writing services trusted by students worldwide. 
              We deliver high-quality, original content tailored to your specific requirements.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div>
            <h3 className="text-lg font-bold mb-6">We Accept</h3>
            <div className="grid grid-cols-4 gap-3">
              <div className="bg-white p-2 rounded-lg flex items-center justify-center h-10">
                <svg className="h-4 w-auto" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white"/>
                  <text x="20" y="16" textAnchor="middle" className="text-xs font-bold" fill="#1A1F71">VISA</text>
                </svg>
              </div>
              <div className="bg-white p-2 rounded-lg flex items-center justify-center h-10">
                <svg className="h-4 w-auto" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white"/>
                  <circle cx="15" cy="12" r="7" fill="#EB001B"/>
                  <circle cx="25" cy="12" r="7" fill="#F79E1B"/>
                  <path d="M20 6C21.8 7.5 23 9.6 23 12C23 14.4 21.8 16.5 20 18C18.2 16.5 17 14.4 17 12C17 9.6 18.2 7.5 20 6Z" fill="#FF5F00"/>
                </svg>
              </div>
              <div className="bg-white p-2 rounded-lg flex items-center justify-center h-10">
                <svg className="h-4 w-auto" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white"/>
                  <path d="M8 10h6v1h-6v-1zm0 2h6v1h-6v-1zm0 2h4v1h-4v-1z" fill="#000"/>
                  <path d="M26 8h6v8h-6V8z" fill="#000" rx="2"/>
                  <text x="20" y="16" textAnchor="middle" className="text-xs font-semibold" fill="#000">Pay</text>
                </svg>
              </div>
              <div className="bg-white p-2 rounded-lg flex items-center justify-center h-10">
                <svg className="h-4 w-auto" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white"/>
                  <circle cx="12" cy="12" r="3" fill="#4285F4"/>
                  <circle cx="20" cy="12" r="3" fill="#34A853"/>
                  <circle cx="28" cy="12" r="3" fill="#FBBC04"/>
                  <circle cx="16" cy="8" r="2" fill="#EA4335"/>
                  <text x="20" y="18" textAnchor="middle" className="text-xs font-medium" fill="#5F6368">Pay</text>
                </svg>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-2">
              <div className="bg-white p-2 rounded-lg flex items-center justify-center h-10">
                <svg className="h-4 w-auto" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white"/>
                  <rect x="8" y="10" width="24" height="4" fill="#006FCF" rx="2"/>
                  <text x="20" y="16" textAnchor="middle" className="text-xs font-bold" fill="#006FCF">AMEX</text>
                </svg>
              </div>
              <div className="bg-white p-2 rounded-lg flex items-center justify-center h-10">
                <svg className="h-4 w-auto" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white"/>
                  <circle cx="15" cy="12" r="4" fill="#00C851"/>
                  <circle cx="25" cy="12" r="4" fill="#00C851"/>
                  <text x="20" y="16" textAnchor="middle" className="text-xs font-bold" fill="#00C851">IntaSend</text>
                </svg>
              </div>
              <div className="bg-white p-2 rounded-lg flex items-center justify-center h-10">
                <svg className="h-4 w-auto" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white"/>
                  <path d="M8 12L12 8L16 12L20 8L24 12L28 8L32 12" stroke="#9FE870" strokeWidth="2" fill="none"/>
                  <text x="20" y="18" textAnchor="middle" className="text-xs font-bold" fill="#9FE870">Wise</text>
                </svg>
              </div>
              <div className="bg-white p-2 rounded-lg flex items-center justify-center h-10">
                <svg className="h-4 w-auto" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white"/>
                  <ellipse cx="15" cy="12" rx="6" ry="3" fill="#003087"/>
                  <ellipse cx="25" cy="12" rx="6" ry="3" fill="#009CDE"/>
                  <text x="20" y="18" textAnchor="middle" className="text-xs font-bold" fill="#003087">PayPal</text>
                </svg>
              </div>
            </div>
            <p className="text-gray-400 text-xs mt-4 text-center">
              Secure payments protected by SSL encryption
            </p>
          </div>
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><Link to="/order" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Essay Writing</Link></li>
              <li><Link to="/order" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Research Papers</Link></li>
              <li><Link to="/order" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Dissertations</Link></li>
              <li><Link to="/order" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Thesis Writing</Link></li>
              <li><Link to="/order" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link to="/order" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Book Reviews</Link></li>
              <li><Link to="/order" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Lab Reports</Link></li>
            </ul>
          </div>

          {/* How It Works */}
          <div>
            <h3 className="text-lg font-bold mb-6">How It Works</h3>
            <ul className="space-y-3">
              <li><Link to="/how-it-works" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Place Your Order</Link></li>
              <li><Link to="/how-it-works" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Make Payment</Link></li>
              <li><Link to="/how-it-works" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Writer Assignment</Link></li>
              <li><Link to="/how-it-works" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Get Your Paper</Link></li>
              <li><Link to="/guarantees" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Our Guarantees</Link></li>
            </ul>
          </div>

          {/* Terms of Use */}
          <div>
            <h3 className="text-lg font-bold mb-6">Terms of Use</h3>
            <ul className="space-y-3">
              <li><Link to="/terms-conditions" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link></li>
              <li><Link to="/social-responsibility" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Social Responsibility</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/samples" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Free Samples</Link></li>
              <li><Link to="/pricing" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/discount" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Discount</Link></li>
              <li><Link to="/writers" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Our Writers</Link></li>
              <li><Link to="/reviews" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Reviews</Link></li>
              <li><Link to="/blog" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-medium">+1 (251) 265-5102</p>
                  <p className="text-gray-400 text-sm">24/7 Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-medium">support@cognitawriting.com</p>
                  <p className="text-gray-400 text-sm">Email Support</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-400 mt-1" />
                <div>
                  <p className="text-white font-medium">New York, NY</p>
                  <p className="text-gray-400 text-sm">United States</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <Link
                to="/contact" 
                onClick={() => window.scrollTo(0, 0)}
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* Disclaimer */}
      <div className="border-t border-gray-800 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h3 className="text-lg font-bold text-white mb-4">Disclaimer</h3>
            <div className="text-sm text-gray-300 leading-relaxed max-w-4xl mx-auto">
              <p>
                The papers provided by Cognita Writing Services are intended for research and reference purposes only. 
                These materials should be used as a guide to help you write your own original work and should not be 
                submitted as your final assignment. We encourage academic integrity and responsible use of our services. 
                By using our services, you acknowledge that it is your responsibility to ensure compliance with your 
                institution's academic policies.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Cognita Writing. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/privacy-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-conditions" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookie-policy" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
              <Link to="/guarantees" onClick={() => window.scrollTo(0, 0)} className="text-gray-400 hover:text-white transition-colors">Refund Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;