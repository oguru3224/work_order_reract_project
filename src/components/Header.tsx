import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Brain, 
  Menu, 
  X, 
  Phone, 
  MessageCircle,
  ChevronDown,
  LogIn,
  User,
  LogOut
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const auth = useAuth(); // Call useAuth once and store the result

  // Custom logout handler that redirects to landing page
  const handleLogout = () => {
    auth.logout();
    navigate('/', { replace: true });
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-900 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+1 (251) 265-5102</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-4 h-4" />
                <span>Live Chat 24/7</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <span>Free Inquiry</span>
              <span>•</span>
              <span>Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-3" onClick={() => window.scrollTo(0, 0)}>
              <Brain className="w-10 h-10 text-blue-600" />
              <div>
                <span className="text-2xl font-bold text-gray-900">Cognita Writing</span>
                <div className="text-xs text-gray-500">Professional Academic Writing</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <div className="relative group">
                <button 
                  className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <span>Services</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                
                {isServicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      All Services
                    </Link>
                    <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Essay Writing
                    </Link>
                    <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Research Papers
                    </Link>
                    <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Dissertations
                    </Link>
                    <Link to="/services" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                      Thesis Writing
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/pricing" 
                className={`font-medium transition-colors ${
                  isActive('/pricing') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Pricing
              </Link>
              
              <Link 
                to="/samples" 
                className={`font-medium transition-colors ${
                  isActive('/samples') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Samples
              </Link>
              
              <Link 
                to="/writers" 
                className={`font-medium transition-colors ${
                  isActive('/writers') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Our Writers
              </Link>
              
              <Link 
                to="/about" 
                className={`font-medium transition-colors ${
                  isActive('/about') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About
              </Link>
              
              <Link 
                to="/blog" 
                className={`font-medium transition-colors ${
                  isActive('/blog') ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Blog
              </Link>
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => window.location.href = 'https://cognitawriting.com/order'} 
                className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Order Now
              </button>
              <button
                onClick={() => window.location.href = 'https://cognitawriting.com/dashboard/inquiry'} 
                className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Get Quote
              </button>
              
              {/* Authentication Buttons */}
              {auth.isAuthenticated ? (
                <div className="flex items-center space-x-4">
                  <Link
                    to="/dashboard"
                    className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    <User className="w-5 h-5" />
                    <span>{auth.user?.name}</span>
                  </Link>
                  <button 
                    onClick={handleLogout}
                    className="flex items-center space-x-2 text-gray-700 hover:text-red-600 transition-colors"
                  >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                  </button>
                </div>
              ) : (
                <button 
                  onClick={() => window.location.href = 'https://cognitawriting.com/dashboard/authorization'}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors"
                >
                  <LogIn className="w-5 h-5" />
                  <span>Sign In</span>
                </button>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t border-gray-200 py-4">
              <div className="space-y-4">
                <Link to="/services" className="block text-gray-700 hover:text-blue-600">Services</Link>
                <Link to="/pricing" className="block text-gray-700 hover:text-blue-600">Pricing</Link>
                <Link to="/samples" className="block text-gray-700 hover:text-blue-600">Samples</Link>
                <Link to="/writers" className="block text-gray-700 hover:text-blue-600">Our Writers</Link>
                <Link to="/about" className="block text-gray-700 hover:text-blue-600">About</Link>
                <Link to="/blog" className="block text-gray-700 hover:text-blue-600">Blog</Link>
                <div className="pt-4 space-y-2">
                  <Link to="/order" className="block bg-orange-500 text-white px-4 py-2 rounded text-center">
                    Order Now
                  </Link>
                  <button className="block w-full border-2 border-blue-600 text-blue-600 px-4 py-2 rounded">
                    Get Quote
                  </button>
                  
                  {/* Mobile Authentication Buttons */}
                  {auth.isAuthenticated ? (
                    <>
                      <div className="block w-full text-gray-700 px-4 py-2 border border-gray-300 rounded text-center">
                        Welcome, {auth.user?.name}
                      </div>
                      <button 
                        onClick={handleLogout}
                        className="block w-full text-red-600 px-4 py-2 border border-red-300 rounded hover:bg-red-50"
                      >
                        Logout
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={() => window.location.href = 'https://cognitawriting.com/dashboard/authorization'}
                      className="block w-full text-gray-700 px-4 py-2 border border-gray-300 rounded text-center hover:bg-gray-50"
                    >
                      Sign In
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;