import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Globe,
  Headphones
} from 'lucide-react';
import { contactApi, ApiResponse } from '../services/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    urgency: 'normal'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      const response: ApiResponse = await contactApi.submit({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      });
      
      if (response.success) {
        setSubmitMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent successfully. We\'ll get back to you soon.'
        });
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          urgency: 'normal'
        });
      } else {
        setSubmitMessage({
          type: 'error',
          text: response.message || 'Failed to send message. Please try again.'
        });
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      setSubmitMessage({
        type: 'error',
        text: error.response?.data?.message || 'An error occurred while sending your message. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      title: "Phone Support",
      description: "Speak directly with our support team",
      contact: "+1 (877) 398-5184",
      availability: "24/7 Available",
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      action: "Call Now"
    },
    {
      title: "Live Chat",
      description: "Get instant help from our chat agents",
      contact: "Start Chat",
      availability: "24/7 Available",
      icon: <MessageCircle className="w-8 h-8 text-green-600" />,
      action: "Chat Now"
    },
    {
      title: "Email Support",
      description: "Send us your questions and concerns",
      contact: "support@customwritings.com",
      availability: "Response within 1 hour",
      icon: <Mail className="w-8 h-8 text-purple-600" />,
      action: "Send Email"
    }
  ];

  const officeLocations = [
    {
      city: "New York",
      address: "123 Academic Ave, Suite 456",
      zipCode: "New York, NY 10001",
      phone: "+1 (877) 398-5184"
    },
    {
      city: "Los Angeles",
      address: "789 Writing Blvd, Floor 12",
      zipCode: "Los Angeles, CA 90210",
      phone: "+1 (877) 398-5185"
    },
    {
      city: "Chicago",
      address: "456 Research St, Office 789",
      zipCode: "Chicago, IL 60601",
      phone: "+1 (877) 398-5186"
    }
  ];

  const faqs = [
    {
      question: "How quickly can you complete my order?",
      answer: "We offer deadlines from 6 hours to 14 days, depending on the complexity and length of your assignment."
    },
    {
      question: "Do you provide free revisions?",
      answer: "Yes, we offer unlimited free revisions within 14 days of delivery to ensure your complete satisfaction."
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We use advanced encryption and never share your personal information with third parties."
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "We offer a money-back guarantee. If you're not satisfied, we'll work to make it right or provide a refund."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              We're here to help you succeed. Get in touch with our support team 24/7 
              for any questions about our services, your order, or academic assistance.
            </p>
            <div className="flex items-center justify-center space-x-8 text-blue-100">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 mr-2" />
                <span>Global Service</span>
              </div>
              <div className="flex items-center">
                <Headphones className="w-5 h-5 mr-2" />
                <span>Expert Help</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Choose your preferred way to contact us</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl text-center hover:shadow-lg transition-all transform hover:-translate-y-2">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{method.title}</h3>
                <p className="text-gray-600 mb-4">{method.description}</p>
                <div className="mb-4">
                  <p className="text-lg font-semibold text-gray-900">{method.contact}</p>
                  <p className="text-sm text-green-600">{method.availability}</p>
                </div>
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Subject *</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Urgency Level</label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="low">Low - General inquiry</option>
                    <option value="normal">Normal - Standard support</option>
                    <option value="high">High - Urgent assistance needed</option>
                    <option value="critical">Critical - Emergency support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Please provide details about your inquiry..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-lg transition-colors flex items-center justify-center text-lg font-semibold ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  <Send className="w-5 h-5 mr-2" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {/* Submit Message */}
                {submitMessage && (
                  <div className={`mt-4 p-4 rounded-lg ${
                    submitMessage.type === 'success' 
                      ? 'bg-green-100 text-green-800 border border-green-200' 
                      : 'bg-red-100 text-red-800 border border-red-200'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Phone Support</h4>
                      <p className="text-gray-600">+1 (877) 398-5184</p>
                      <p className="text-sm text-green-600">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Email Support</h4>
                      <p className="text-gray-600">support@customwritings.com</p>
                      <p className="text-sm text-green-600">Response within 1 hour</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">Live Chat</h4>
                      <p className="text-gray-600">Instant messaging support</p>
                      <p className="text-sm text-green-600">Available 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Locations */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Locations</h3>
                <div className="space-y-4">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{office.city}</h4>
                          <p className="text-gray-600 text-sm">{office.address}</p>
                          <p className="text-gray-600 text-sm">{office.zipCode}</p>
                          <p className="text-blue-600 text-sm font-medium">{office.phone}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed ml-9">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Still Have Questions?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Our support team is standing by to help you with any questions or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors">
              Start Live Chat
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              Call Now: (877) 398-5184
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;