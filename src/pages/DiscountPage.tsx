import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Percent, 
  Gift, 
  Users, 
  Clock,
  Star,
  CheckCircle,
  Calculator,
  ArrowRight,
  Trophy,
  Target,
  Zap,
  Crown,
  Award,
  Calendar,
  DollarSign
} from 'lucide-react';

const DiscountPage = () => {
  const [academicLevel, setAcademicLevel] = useState('undergraduate');
  const [deadline, setDeadline] = useState('14');
  const [pages, setPages] = useState(1);
  const [discountCode, setDiscountCode] = useState('');
  const [appliedDiscount, setAppliedDiscount] = useState(0);

  useEffect(() => {
    document.title = 'Discounts & Special Offers | Save Up to 25% | Cognita Writing';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Save money on your academic papers! Get up to 25% off with our discount codes, loyalty program, and bulk order savings. New customer discounts available. Start saving today!');
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'essay writing discount, academic writing coupon, student discount, bulk order savings, loyalty program, promo code, cheap essay writing, affordable academic help, save money on essays');
    }

    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  const pricingData = {
    'high-school': {
      '14': 11.30, '7': 12.99, '3': 16.99, '24': 23.99, '12': 29.99, '6': 34.99
    },
    'undergraduate': {
      '14': 13.99, '7': 15.99, '3': 19.99, '24': 26.99, '12': 32.99, '6': 38.99
    },
    'masters': {
      '14': 22.99, '7': 24.99, '3': 28.99, '24': 35.99, '12': 41.99, '6': 47.99
    },
    'phd': {
      '14': 26.99, '7': 28.99, '3': 32.99, '24': 39.99, '12': 45.99, '6': 51.99
    }
  };

  const getCurrentPrice = () => {
    return pricingData[academicLevel as keyof typeof pricingData][deadline as keyof typeof pricingData['high-school']] || 0;
  };

  const getVolumeDiscount = () => {
    if (pages >= 50) return 25;
    if (pages >= 20) return 20;
    if (pages >= 10) return 15;
    if (pages >= 5) return 10;
    return 0;
  };

  const getTotalPrice = () => {
    const basePrice = getCurrentPrice() * pages;
    const volumeDiscount = getVolumeDiscount();
    const codeDiscount = appliedDiscount;
    const totalDiscount = Math.max(volumeDiscount, codeDiscount);
    return {
      original: basePrice.toFixed(2),
      discount: totalDiscount,
      savings: (basePrice * totalDiscount / 100).toFixed(2),
      final: (basePrice * (1 - totalDiscount / 100)).toFixed(2)
    };
  };

  const applyDiscountCode = () => {
    const codes = {
      'SAVE15': 15,
      'NEWCLIENT20': 20,
      'STUDENT10': 10,
      'BULK25': 25,
      'WELCOME15': 15
    };
    
    const discount = codes[discountCode.toUpperCase() as keyof typeof codes] || 0;
    setAppliedDiscount(discount);
  };

  const discountOffers = [
    {
      title: "New Customer Discount",
      discount: "20% OFF",
      code: "NEWCLIENT20",
      description: "First-time customers get 20% off their first order",
      icon: <Gift className="w-8 h-8 text-green-600" />,
      color: "bg-green-50 border-green-200"
    },
    {
      title: "Student Discount",
      discount: "15% OFF",
      code: "STUDENT15",
      description: "Valid student ID required for verification",
      icon: <Users className="w-8 h-8 text-blue-600" />,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Bulk Order Savings",
      discount: "Up to 25% OFF",
      code: "BULK25",
      description: "Save more when you order 20+ pages",
      icon: <Trophy className="w-8 h-8 text-purple-600" />,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Loyalty Program",
      discount: "Progressive Savings",
      code: "LOYALTY",
      description: "Earn points with every order for future discounts",
      icon: <Crown className="w-8 h-8 text-orange-600" />,
      color: "bg-orange-50 border-orange-200"
    }
  ];

  const volumeDiscounts = [
    { pages: "5-9 pages", discount: "10%", savings: "Save $15-30" },
    { pages: "10-19 pages", discount: "15%", savings: "Save $35-75" },
    { pages: "20-49 pages", discount: "20%", savings: "Save $80-200" },
    { pages: "50+ pages", discount: "25%", savings: "Save $200+" }
  ];

  const loyaltyTiers = [
    {
      tier: "Bronze",
      orders: "1-5 orders",
      discount: "5%",
      benefits: ["Priority support", "Free revisions"],
      icon: <Award className="w-6 h-6 text-orange-600" />
    },
    {
      tier: "Silver", 
      orders: "6-15 orders",
      discount: "10%",
      benefits: ["Priority support", "Free revisions", "Writer selection"],
      icon: <Award className="w-6 h-6 text-gray-500" />
    },
    {
      tier: "Gold",
      orders: "16-30 orders", 
      discount: "15%",
      benefits: ["Priority support", "Free revisions", "Writer selection", "VIP chat"],
      icon: <Award className="w-6 h-6 text-yellow-500" />
    },
    {
      tier: "Platinum",
      orders: "31+ orders",
      discount: "20%", 
      benefits: ["All Gold benefits", "Personal manager", "Express delivery"],
      icon: <Crown className="w-6 h-6 text-purple-600" />
    }
  ];

  const pricing = getTotalPrice();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-800 bg-opacity-50 rounded-full px-6 py-3 mb-6">
              <Percent className="w-6 h-6 mr-2" />
              <span className="text-lg font-semibold">Limited Time Offers</span>
            </div>
            <h1 className="text-5xl font-bold mb-6">Save Up to 25% on Academic Writing</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              Take advantage of our exclusive discounts, loyalty rewards, and bulk order savings. 
              Quality academic writing at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/order" 
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
              >
                Order Now & Save
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
                View All Offers
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Current Offers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current Discount Offers</h2>
            <p className="text-xl text-gray-600">Choose the discount that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {discountOffers.map((offer, index) => (
              <div key={index} className={`${offer.color} border-2 rounded-xl p-8 text-center hover:shadow-lg transition-all transform hover:-translate-y-2`}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {offer.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                <div className="text-3xl font-bold text-green-600 mb-4">{offer.discount}</div>
                <p className="text-gray-600 mb-6 text-sm leading-relaxed">{offer.description}</p>
                <div className="bg-gray-900 text-white px-4 py-2 rounded-lg font-mono text-sm mb-4">
                  {offer.code}
                </div>
                <Link 
                  to="/order"
                  className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold block"
                >
                  Use This Code
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Calculator with Discounts */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-8">
                <Calculator className="w-8 h-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Discount Calculator</h2>
              </div>

              <div className="space-y-6">
                {/* Academic Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Academic Level</label>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { value: 'high-school', label: 'High School' },
                      { value: 'undergraduate', label: 'Undergraduate' },
                      { value: 'masters', label: "Master's" },
                      { value: 'phd', label: 'PhD' }
                    ].map((level) => (
                      <button
                        key={level.value}
                        onClick={() => setAcademicLevel(level.value)}
                        className={`p-3 rounded-lg border-2 transition-all ${
                          academicLevel === level.value
                            ? 'border-green-600 bg-green-50 text-green-600'
                            : 'border-gray-200 hover:border-green-300'
                        }`}
                      >
                        {level.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Deadline</label>
                  <select
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                  >
                    <option value="14">14 days</option>
                    <option value="7">7 days</option>
                    <option value="3">3 days</option>
                    <option value="24">24 hours</option>
                    <option value="12">12 hours</option>
                    <option value="6">6 hours</option>
                  </select>
                </div>

                {/* Pages */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Number of Pages</label>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setPages(Math.max(1, pages - 1))}
                      className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={pages}
                      onChange={(e) => setPages(Math.max(1, parseInt(e.target.value) || 1))}
                      className="flex-1 p-3 border-2 border-gray-200 rounded-lg text-center focus:border-green-600 focus:outline-none"
                      min="1"
                    />
                    <button
                      onClick={() => setPages(pages + 1)}
                      className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Discount Code */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Discount Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      placeholder="Enter discount code"
                      className="flex-1 p-3 border-2 border-gray-200 rounded-lg focus:border-green-600 focus:outline-none"
                    />
                    <button
                      onClick={applyDiscountCode}
                      className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                {/* Price Display */}
                <div className="bg-green-50 p-6 rounded-xl border-2 border-green-200">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Original Price:</span>
                      <span className="text-lg font-semibold text-gray-900">${pricing.original}</span>
                    </div>
                    {pricing.discount > 0 && (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-green-700">Discount ({pricing.discount}%):</span>
                          <span className="text-green-600 font-semibold">-${pricing.savings}</span>
                        </div>
                        <hr className="border-green-200" />
                      </>
                    )}
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-gray-900">Final Price:</span>
                      <span className="text-2xl font-bold text-green-600">${pricing.final}</span>
                    </div>
                    {pricing.discount > 0 && (
                      <div className="text-center">
                        <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          You Save ${pricing.savings}!
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <Link
                  to="/order"
                  className="w-full bg-orange-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center"
                >
                  Order Now & Save
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>

            {/* Discount Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How to Save Money</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Choose Your Discount</h4>
                      <p className="text-gray-600 text-sm">Select from new customer, student, or bulk order discounts</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Apply Discount Code</h4>
                      <p className="text-gray-600 text-sm">Enter your code during checkout or use our calculator</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-md">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Enjoy Savings</h4>
                      <p className="text-gray-600 text-sm">Get high-quality papers at discounted prices</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Active Codes */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Active Discount Codes</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">SAVE15</span>
                      <span className="text-sm text-gray-600 ml-2">15% off any order</span>
                    </div>
                    <span className="text-green-600 font-semibold">15% OFF</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">NEWCLIENT20</span>
                      <span className="text-sm text-gray-600 ml-2">First order</span>
                    </div>
                    <span className="text-green-600 font-semibold">20% OFF</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-mono text-sm bg-gray-200 px-2 py-1 rounded">STUDENT10</span>
                      <span className="text-sm text-gray-600 ml-2">Student discount</span>
                    </div>
                    <span className="text-green-600 font-semibold">10% OFF</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volume Discounts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Volume Discounts</h2>
            <p className="text-xl text-gray-600">The more you order, the more you save</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {volumeDiscounts.map((discount, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-xl text-center border-2 border-blue-200 hover:shadow-lg transition-all">
                <div className="text-2xl font-bold text-blue-600 mb-2">{discount.discount}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{discount.pages}</h3>
                <p className="text-green-600 font-semibold text-sm">{discount.savings}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-8 max-w-2xl mx-auto">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automatic Volume Discounts</h3>
              <p className="text-gray-600 leading-relaxed">
                Volume discounts are automatically applied at checkout. No codes needed! 
                The discount increases with the number of pages you order.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Loyalty Rewards Program</h2>
            <p className="text-xl text-gray-600">Earn rewards with every order and unlock exclusive benefits</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loyaltyTiers.map((tier, index) => (
              <div key={index} className={`bg-white p-8 rounded-xl shadow-lg text-center border-2 ${
                tier.tier === 'Platinum' ? 'border-purple-300 bg-gradient-to-br from-purple-50 to-indigo-50' :
                tier.tier === 'Gold' ? 'border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50' :
                tier.tier === 'Silver' ? 'border-gray-300 bg-gradient-to-br from-gray-50 to-slate-50' :
                'border-orange-300 bg-gradient-to-br from-orange-50 to-amber-50'
              }`}>
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {tier.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{tier.tier}</h3>
                <p className="text-gray-600 text-sm mb-4">{tier.orders}</p>
                <div className="text-2xl font-bold text-green-600 mb-4">{tier.discount}</div>
                <ul className="space-y-2 text-sm text-gray-600">
                  {tier.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Limited Time Special Offers</h2>
            <p className="text-xl text-gray-600">Don't miss these exclusive deals</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-100 p-8 rounded-xl border-2 border-red-200 text-center">
              <Zap className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Flash Sale</h3>
              <div className="text-3xl font-bold text-red-600 mb-4">25% OFF</div>
              <p className="text-gray-600 mb-4">Valid for the next 48 hours only!</p>
              <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-mono text-sm mb-4">
                FLASH25
              </div>
              <div className="flex items-center justify-center text-sm text-red-600">
                <Clock className="w-4 h-4 mr-1" />
                <span>Expires in 2 days</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-100 p-8 rounded-xl border-2 border-blue-200 text-center">
              <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Weekend Special</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">18% OFF</div>
              <p className="text-gray-600 mb-4">Every weekend, save on all orders</p>
              <div className="bg-blue-600 text-white px-4 py-2 rounded-lg font-mono text-sm mb-4">
                WEEKEND18
              </div>
              <div className="flex items-center justify-center text-sm text-blue-600">
                <Star className="w-4 h-4 mr-1" />
                <span>Recurring offer</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 p-8 rounded-xl border-2 border-purple-200 text-center">
              <DollarSign className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Referral Bonus</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$50 Credit</div>
              <p className="text-gray-600 mb-4">Refer a friend and both get $50 credit</p>
              <div className="bg-purple-600 text-white px-4 py-2 rounded-lg font-mono text-sm mb-4">
                REFER50
              </div>
              <div className="flex items-center justify-center text-sm text-purple-600">
                <Users className="w-4 h-4 mr-1" />
                <span>Both parties benefit</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Discount Terms & Conditions</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">General Terms:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Discounts cannot be combined with other offers unless specified</li>
                  <li>Volume discounts are automatically applied and override discount codes if higher</li>
                  <li>New customer discounts are valid for first-time customers only</li>
                  <li>Student discounts require valid student ID verification</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Loyalty Program:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Points are earned on completed orders only</li>
                  <li>Tier status is reviewed monthly based on order history</li>
                  <li>Benefits are applied automatically to qualifying accounts</li>
                  <li>Loyalty discounts stack with volume discounts</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Code Validity:</h4>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Discount codes are case-insensitive</li>
                  <li>Expired codes will not be accepted</li>
                  <li>Some codes may have minimum order requirements</li>
                  <li>Codes are valid for single use unless specified otherwise</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Save on Your Next Order?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Don't miss out on these amazing discounts. Place your order now and start saving!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/order" 
              className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center justify-center"
            >
              Place Order Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Get Custom Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DiscountPage;