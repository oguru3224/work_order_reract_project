import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import PricingPage from './pages/PricingPage';
import SamplesPage from './pages/SamplesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import OrderPage from './pages/OrderPage';
import BlogPage from './pages/BlogPage';
import SingleBlogPost from './pages/SingleBlogPost';
import ReviewsPage from './pages/ReviewsPage';
import WritersPage from './pages/WritersPage';
import GuaranteesPage from './pages/GuaranteesPage';
import HowItWorksPage from './pages/HowItWorksPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import SocialResponsibilityPage from './pages/SocialResponsibilityPage';
import DiscountPage from './pages/DiscountPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/samples" element={<SamplesPage />} />
            <Route path="/writers" element={<WritersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<SingleBlogPost />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/guarantees" element={<GuaranteesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/discount" element={<DiscountPage />} />
            <Route path="/terms-conditions" element={<TermsConditionsPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/social-responsibility" element={<SocialResponsibilityPage />} />
            {/* <Route path="/dashboard/authorization" element={<LoginPage/>} */}
            
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;