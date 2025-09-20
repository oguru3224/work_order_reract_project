import React, { useState, useEffect } from 'react'; // React is used for JSX
import { Link } from 'react-router-dom';
import { 
  CheckCircle, 
  Calculator,
  ArrowRight,
} from 'lucide-react';
import { configApi, AcademicLevelType } from '../services/api';

const PricingPage = () => {
  const [academicLevel, setAcademicLevel] = useState(1);
  const [deadline, setDeadline] = useState(0);
  const [pages, setPages] = useState(1);
  const [academicLevels, setAcademicLevels] = useState<AcademicLevelType[]>([]);
  const [tariffs, setTariffs] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch academic levels and tariffs from backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response: any = await configApi.getConfig();
        if (response) {
          if (response.configsForAcademicWriting) {
            if (response.configsForAcademicWriting.academicLevels) {
              setAcademicLevels(response.configsForAcademicWriting.academicLevels || []);
            }
            if (response.configsForAcademicWriting.tariffs) {
              setTariffs(response.configsForAcademicWriting.tariffs || []);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching pricing data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Reset deadline when academic level changes
  useEffect(() => {
    setDeadline(0);
  }, [academicLevel]);

  // Filter tariffs based on selected academic level
  const filteredTariffs = tariffs.filter(tariff => tariff.academicLevel === academicLevel);

  const getCurrentPrice = () => {
    if (academicLevel === 0 || deadline === 0) return 0;
    const selectedTariff = filteredTariffs.find(tariff => tariff.id === deadline);
    return selectedTariff ? selectedTariff.pricePerPage : 0;
  };

  const getTotalPrice = () => {
    return (getCurrentPrice() * pages).toFixed(2);
  };

  const features = [
    "100% Original Content",
    "Free Unlimited Revisions",
    "24/7 Customer Support",
    "On-Time Delivery Guarantee",
    "Money Back Guarantee",
    "Free Bibliography & Title Page",
    "Direct Communication with Writer",
    "Plagiarism Report Included"
  ];

  const discounts = [
    { pages: "5-9 pages", discount: "5%" },
    { pages: "10-19 pages", discount: "10%" },
    { pages: "20-49 pages", discount: "15%" },
    { pages: "50+ pages", discount: "20%" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Transparent Pricing</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              No hidden fees, no surprises. Calculate your price instantly and get the best value for academic writing services.
            </p>
          </div>
        </div>
      </section>

      {/* Price Calculator */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Calculator */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="flex items-center mb-8">
                <Calculator className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Price Calculator</h2>
              </div>

              <div className="space-y-6">
                {/* Academic Level */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Academic Level</label>
                  {isLoading ? (
                    <div className="text-center py-4 text-gray-500">Loading academic levels...</div>
                  ) : (
                    <div className="grid grid-cols-2 gap-3">
                      {academicLevels.map((level) => (
                        <button
                          key={level.id}
                          onClick={() => setAcademicLevel(level.id)}
                          className={`p-3 rounded-lg border-2 transition-all ${
                            academicLevel === level.id
                              ? 'border-blue-600 bg-blue-50 text-blue-600'
                              : 'border-gray-200 hover:border-blue-300'
                          }`}
                        >
                          {level.title}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Deadline */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">Deadline</label>
                  {isLoading ? (
                    <div className="text-center py-4 text-gray-500">Loading deadlines...</div>
                  ) : (
                    <select
                      value={deadline}
                      onChange={(e) => setDeadline(parseInt(e.target.value) || 0)}
                      className="w-full p-3 border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none"
                      disabled={academicLevel === 0}
                    >
                      <option value={0}>Select deadline</option>
                      {filteredTariffs.map((tariff) => (
                        <option key={tariff.id} value={tariff.id}>
                          {tariff.name}
                        </option>
                      ))}
                    </select>
                  )}
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
                      className="flex-1 p-3 border-2 border-gray-200 rounded-lg text-center focus:border-blue-600 focus:outline-none"
                      min="1"
                    />
                    <button
                      onClick={() => setPages(pages + 1)}
                      className="w-10 h-10 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">1 page = 275 words</p>
                </div>

                {/* Price Display */}
                <div className="bg-blue-50 p-6 rounded-xl">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-lg font-semibold text-gray-700">Price per page:</span>
                    <span className="text-2xl font-bold text-blue-600">${getCurrentPrice()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-semibold text-gray-900">Total Price:</span>
                    <span className="text-3xl font-bold text-green-600">${getTotalPrice()}</span>
                  </div>
                </div>

                <button
                  onClick={() => window.location.href = `https://cognitawriting.com/order?academicLevel=${academicLevel}&deadline=${deadline}&pages=${pages}`}
                  className="w-full bg-orange-500 text-white py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors flex items-center justify-center"
                >
                  Order Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">What's Included</h3>
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Discounts */}
              <div className="bg-green-50 p-6 rounded-xl">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Volume Discounts</h4>
                <div className="space-y-3">
                  {discounts.map((discount, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-gray-700">{discount.pages}</span>
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {discount.discount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Detailed Pricing Table</h2>
            <p className="text-xl text-gray-600">Choose the academic level and deadline that fits your needs</p>
          </div>

          {isLoading ? (
            <div className="text-center py-12">
              <div className="text-gray-500">Loading pricing data...</div>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Academic Level</th>
                    {academicLevels.length > 0 && tariffs.filter(t => t.academicLevel === academicLevels[0].id).map((tariff) => (
                      <th key={tariff.id} className="px-6 py-4 text-center">{tariff.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {academicLevels.map((level, index) => {
                    const levelTariffs = tariffs.filter(t => t.academicLevel === level.id);
                    return (
                      <tr key={level.id} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold text-gray-900">{level.title}</td>
                        {levelTariffs.map((tariff) => (
                          <td key={tariff.id} className="px-6 py-4 text-center">${tariff.pricePerPage}</td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pricing FAQ</h2>
            <p className="text-xl text-gray-600">Common questions about our pricing</p>
          </div>

          <div className="space-y-8">
            {[
              {
                question: "Are there any hidden fees?",
                answer: "No, our pricing is completely transparent. The price you see is the price you pay. No hidden fees or surprise charges."
              },
              {
                question: "Do you offer discounts for bulk orders?",
                answer: "Yes, we offer volume discounts starting from 5 pages. The more pages you order, the bigger the discount you receive."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, PayPal, and other secure payment methods. All transactions are encrypted and secure."
              },
              {
                question: "Can I get a refund if I'm not satisfied?",
                answer: "Yes, we offer a money-back guarantee. If you're not satisfied with the quality of work, you can request a full refund."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Place Your Order?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started now and receive your high-quality academic paper on time
          </p>
          <Link 
            to={`/order?academicLevel=${academicLevel}&deadline=${deadline}&pages=${pages}`}
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors inline-flex items-center"
          >
            Place Order Now
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default PricingPage;