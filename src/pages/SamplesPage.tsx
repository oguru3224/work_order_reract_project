import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  FileText, 
  Download, 
  Eye,
  Star,
  Calendar,
  User,
  BookOpen,
  Filter,
  Search
} from 'lucide-react';

const SamplesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  const samples = [
    {
      id: 1,
      title: "The Impact of Social Media on Modern Communication",
      category: "Essay",
      level: "Undergraduate",
      pages: 5,
      rating: 4.9,
      date: "2025-01-15",
      writer: "Dr. Sarah Johnson",
      subject: "Communication Studies",
      preview: "Social media platforms have revolutionized human communication, creating new forms of interaction while challenging traditional communication models. An in-depth analysis of digital transformation...",
      downloadUrl: "#"
    },
    {
      id: 2,
      title: "Climate Change and Its Economic Implications",
      category: "Research Paper",
      level: "Graduate",
      pages: 12,
      rating: 5.0,
      date: "2025-01-10",
      writer: "Prof. Michael Chen",
      subject: "Environmental Economics",
      preview: "Economic implications of climate change extend far beyond environmental concerns, affecting global markets, policy decisions, and sustainable development initiatives...",
      downloadUrl: "#"
    },
    {
      id: 3,
      title: "Machine Learning Applications in Healthcare",
      category: "Thesis",
      level: "PhD",
      pages: 45,
      rating: 4.8,
      date: "2025-01-05",
      writer: "Dr. Emily Rodriguez",
      subject: "Computer Science",
      preview: "Machine learning algorithms are transforming healthcare delivery through predictive analytics, diagnostic assistance, and personalized treatment protocols. Comprehensive analysis of implementation challenges...",
      downloadUrl: "#"
    },
    {
      id: 4,
      title: "Marketing Strategy Analysis: Apple Inc.",
      category: "Case Study",
      level: "Graduate",
      pages: 8,
      rating: 4.7,
      date: "2025-01-03",
      writer: "Dr. James Wilson",
      subject: "Business Administration",
      preview: "Apple's marketing genius lies in creating emotional connections with consumers while maintaining premium brand positioning. Strategic analysis reveals key success factors...",
      downloadUrl: "#"
    },
    {
      id: 5,
      title: "The Role of Renewable Energy in Sustainable Development",
      category: "Essay",
      level: "Undergraduate",
      pages: 6,
      rating: 4.9,
      date: "2025-01-01",
      writer: "Dr. Lisa Anderson",
      subject: "Environmental Science",
      preview: "Renewable energy technologies represent humanity's best hope for achieving carbon neutrality while maintaining economic growth and social equity...",
      downloadUrl: "#"
    },
    {
      id: 6,
      title: "Psychological Effects of Remote Work",
      category: "Research Paper",
      level: "Graduate",
      pages: 15,
      rating: 4.8,
      date: "2024-12-28",
      writer: "Dr. Robert Taylor",
      subject: "Psychology",
      preview: "Remote work has fundamentally altered workplace dynamics, creating new psychological challenges while offering unprecedented flexibility for modern professionals...",
      downloadUrl: "#"
    },
    {
      id: 7,
      title: "Evidence-Based Practice in Nursing: Implementation Strategies",
      category: "Research Paper",
      level: "Graduate",
      pages: 10,
      rating: 4.9,
      date: "2024-12-25",
      writer: "Dr. Maria Santos",
      subject: "Nursing",
      preview: "Evidence-based practice transforms patient outcomes by bridging the gap between research findings and clinical application in real-world healthcare environments...",
      downloadUrl: "#"
    },
    {
      id: 8,
      title: "DNP Project: Reducing Hospital Readmissions Through Patient Education",
      category: "DNP Project",
      level: "PhD",
      pages: 35,
      rating: 5.0,
      date: "2024-12-20",
      writer: "Dr. Jennifer Brown",
      subject: "Nursing",
      preview: "Hospital readmissions cost the healthcare system billions annually while causing patient distress. Innovative patient education programs show promising results in breaking the cycle...",
      downloadUrl: "#"
    },
    {
      id: 9,
      title: "Aboriginal Rights and Land Claims in Contemporary Australia",
      category: "Essay",
      level: "Undergraduate",
      pages: 8,
      rating: 4.8,
      date: "2024-12-18",
      writer: "Dr. David Thompson",
      subject: "Australian Studies",
      preview: "Aboriginal land rights remain one of Australia's most complex legal and social issues, with historical injustices continuing to shape contemporary policy debates...",
      downloadUrl: "#"
    },
    {
      id: 10,
      title: "Historical and Conceptual Development of Intelligence Testing in Psychology",
      category: "Research Paper",
      level: "Graduate",
      pages: 18,
      rating: 4.9,
      date: "2024-12-15",
      writer: "Dr. Amanda Clark",
      subject: "Psychology",
      preview: "Intelligence testing has evolved dramatically since Binet's early work, yet fundamental questions about cognitive measurement and cultural bias persist in modern assessments...",
      downloadUrl: "#"
    },
    {
      id: 11,
      title: "Tailoring EMS Instruction to Diverse Learning Styles",
      category: "Case Study",
      level: "Graduate",
      pages: 12,
      rating: 4.7,
      date: "2024-12-12",
      writer: "Dr. Kevin Martinez",
      subject: "Emergency Medical Services",
      preview: "EMS education faces unique challenges in preparing students for high-stakes emergency situations while accommodating diverse learning preferences and backgrounds...",
      downloadUrl: "#"
    },
    {
      id: 12,
      title: "Cyberbullying and PTSD: Evaluating DSM-V Diagnostic Criteria and Psychological Impact",
      category: "Research Paper",
      level: "Graduate",
      pages: 20,
      rating: 5.0,
      date: "2024-12-10",
      writer: "Dr. Rachel Green",
      subject: "Psychology",
      preview: "Cyberbullying victims often experience trauma symptoms that mirror traditional PTSD presentations, challenging current diagnostic frameworks and treatment approaches...",
      downloadUrl: "#"
    },
    {
      id: 13,
      title: "Cryptographic Data Objects and Authentication Protocols in Modern Security Systems",
      category: "Research Paper",
      level: "Graduate",
      pages: 22,
      rating: 4.9,
      date: "2024-12-08",
      writer: "Dr. Alex Thompson",
      subject: "Computer Science - Cryptography",
      preview: "Modern cybersecurity relies heavily on sophisticated cryptographic data objects and multi-factor authentication protocols to protect sensitive information from increasingly sophisticated threats...",
      downloadUrl: "#"
    },
    {
      id: 14,
      title: "Core Concepts of Cloud Computing Paradigm: Architecture, Services, and Security",
      category: "Research Paper",
      level: "Graduate",
      pages: 18,
      rating: 4.8,
      date: "2024-12-05",
      writer: "Prof. Michael Chen",
      subject: "Computer Science - Cloud Computing",
      preview: "Cloud computing has revolutionized enterprise IT infrastructure through scalable service models, flexible deployment options, and robust security frameworks that enable digital transformation...",
      downloadUrl: "#"
    },
    {
      id: 15,
      title: "MP4705 Engineering Management Systems: Optimization and Implementation Strategies",
      category: "Case Study",
      level: "Graduate",
      pages: 15,
      rating: 5.0,
      date: "2024-12-03",
      writer: "Dr. Rebecca Martinez",
      subject: "Engineering Management",
      preview: "MP4705 engineering management systems optimize manufacturing processes through integrated workflow management, resource allocation, and performance monitoring capabilities...",
      downloadUrl: "#"
    },
    {
      id: 16,
      title: "Evidence-Based Practice Implementation in Critical Care Nursing",
      category: "Research Paper",
      level: "Graduate",
      pages: 14,
      rating: 4.9,
      date: "2024-12-01",
      writer: "Dr. Patricia Williams",
      subject: "Nursing",
      preview: "Critical care nurses face unique challenges when implementing evidence-based practices due to high-stress environments, time constraints, and complex patient conditions...",
      downloadUrl: "#"
    },
    {
      id: 17,
      title: "Patient Safety and Quality Improvement in Acute Care Settings",
      category: "Case Study",
      level: "Graduate",
      pages: 12,
      rating: 4.8,
      date: "2024-11-28",
      writer: "Dr. Jennifer Brown",
      subject: "Nursing",
      preview: "Patient safety in acute care requires systematic quality improvement approaches that balance efficiency with comprehensive safety protocols and measurable outcomes...",
      downloadUrl: "#"
    },
    {
      id: 18,
      title: "Constitutional Law and Civil Rights: Landmark Supreme Court Cases Analysis",
      category: "Research Paper",
      level: "Graduate",
      pages: 20,
      rating: 5.0,
      date: "2024-11-25",
      writer: "Dr. Thomas White",
      subject: "Law",
      preview: "Landmark Supreme Court decisions have fundamentally shaped American constitutional law, establishing precedents that continue to influence civil rights jurisprudence today...",
      downloadUrl: "#"
    },
    {
      id: 19,
      title: "Corporate Law and Business Ethics: Fiduciary Duties and Stakeholder Theory",
      category: "Essay",
      level: "Graduate",
      pages: 10,
      rating: 4.7,
      date: "2024-11-22",
      writer: "Dr. James Wilson",
      subject: "Business Law",
      preview: "Corporate governance requires balancing fiduciary duties to shareholders with broader stakeholder interests, creating complex ethical and legal challenges for modern businesses...",
      downloadUrl: "#"
    },
    {
      id: 20,
      title: "Blockchain Technology and Smart Contracts: Legal Implications and Regulatory Framework",
      category: "Research Paper",
      level: "PhD",
      pages: 25,
      rating: 4.9,
      date: "2024-11-20",
      writer: "Dr. Alex Thompson",
      subject: "Technology Law",
      preview: "Blockchain technology and smart contracts challenge traditional legal frameworks, requiring new regulatory approaches to address decentralized systems and automated agreements...",
      downloadUrl: "#"
    },
    {
      id: 21,
      title: "Nursing Leadership and Healthcare Team Dynamics in Emergency Departments",
      category: "Case Study",
      level: "Graduate",
      pages: 16,
      rating: 4.8,
      date: "2024-11-18",
      writer: "Dr. Maria Santos",
      subject: "Nursing Leadership",
      preview: "Emergency departments demand exceptional nursing leadership skills to coordinate multidisciplinary teams while maintaining patient safety under extreme time pressures...",
      downloadUrl: "#"
    },
    {
      id: 22,
      title: "Advanced Encryption Standards and Key Management in Distributed Systems",
      category: "Thesis",
      level: "PhD",
      pages: 40,
      rating: 5.0,
      date: "2024-11-15",
      writer: "Dr. Alex Thompson",
      subject: "Cybersecurity",
      preview: "Advanced encryption standards face new challenges in distributed computing environments where traditional key management protocols must adapt to decentralized architectures...",
      downloadUrl: "#"
    },
    {
      id: 23,
      title: "Cloud Service Models: IaaS, PaaS, and SaaS Implementation Strategies",
      category: "Research Paper",
      level: "Graduate",
      pages: 14,
      rating: 4.7,
      date: "2024-11-12",
      writer: "Prof. Michael Chen",
      subject: "Information Technology",
      preview: "Enterprise cloud adoption requires careful consideration of IaaS, PaaS, and SaaS models, each offering distinct advantages for different organizational needs and technical requirements...",
      downloadUrl: "#"
    },
    {
      id: 24,
      title: "Engineering Project Management: Risk Assessment and Mitigation Strategies",
      category: "Case Study",
      level: "Graduate",
      pages: 18,
      rating: 4.9,
      date: "2024-11-10",
      writer: "Dr. Rebecca Martinez",
      subject: "Engineering Management",
      preview: "Large-scale engineering projects face complex risks that require sophisticated assessment methodologies and proactive mitigation strategies to ensure successful completion...",
      downloadUrl: "#"
    },
    {
      id: 25,
      title: "Criminal Law and Procedure: Fourth Amendment Rights and Digital Privacy",
      category: "Research Paper",
      level: "Graduate",
      pages: 16,
      rating: 4.8,
      date: "2024-11-08",
      writer: "Dr. Thomas White",
      subject: "Criminal Law",
      preview: "Digital privacy rights under the Fourth Amendment face unprecedented challenges as law enforcement agencies seek to balance public safety with constitutional protections...",
      downloadUrl: "#"
    }
  ];

  const categories = ['all', 'Essay', 'Research Paper', 'Thesis', 'Case Study', 'Dissertation'];
  const levels = ['all', 'High School', 'Undergraduate', 'Graduate', 'PhD'];

  const filteredSamples = samples.filter(sample => {
    const categoryMatch = selectedCategory === 'all' || sample.category === selectedCategory;
    const levelMatch = selectedLevel === 'all' || sample.level === selectedLevel;
    return categoryMatch && levelMatch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Free Writing Samples</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Explore our collection of high-quality academic writing samples. 
              See the level of expertise and quality you can expect from our writers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/order" 
                className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Order Custom Paper
              </Link>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
                Browse All Samples
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-600" />
              <span className="font-semibold text-gray-700">Filter by:</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              <div className="flex-1">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="flex-1">
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {levels.map(level => (
                    <option key={level} value={level}>
                      {level === 'all' ? 'All Levels' : level}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <div className="relative">
              <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search samples..."
                className="pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Samples Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSamples.map((sample) => (
              <div key={sample.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-6 h-6 text-blue-600" />
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                        {sample.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-700">{sample.rating}</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {sample.title}
                  </h3>

                  {/* Meta Info */}
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />
                      <span>{sample.subject}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      <span>{sample.writer}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{new Date(sample.date).toLocaleDateString()}</span>
                      </div>
                      <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs">
                        {sample.pages} pages
                      </span>
                    </div>
                  </div>

                  {/* Preview */}
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3">
                    {sample.preview}
                  </p>

                  {/* Level Badge */}
                  <div className="mb-6">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {sample.level}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </button>
                    <button 
                      onClick={() => window.location.href = 'https://cognitawriting.com/order'} 
                      className="flex-1 border-2 border-blue-600 text-blue-600 py-2 px-4 rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center">
                      <Download className="w-4 h-4 mr-2" />
                      Order Similar
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gray-200 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors">
              Load More Samples
            </button>
          </div>
        </div>
      </section>

      {/* Why Use Our Samples */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Use Our Samples?</h2>
            <p className="text-xl text-gray-600">See the quality and expertise you can expect</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Assurance",
                description: "All samples are written by our expert writers and reviewed for quality",
                icon: <Star className="w-8 h-8 text-yellow-500" />
              },
              {
                title: "Academic Standards",
                description: "Proper formatting, citations, and adherence to academic guidelines",
                icon: <BookOpen className="w-8 h-8 text-blue-500" />
              },
              {
                title: "Inspiration & Reference",
                description: "Use samples as inspiration and reference for your own academic work",
                icon: <FileText className="w-8 h-8 text-green-500" />
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-8 bg-gray-50 rounded-xl">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Need a Custom Paper?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get a custom-written paper tailored to your specific requirements
          </p>
          <Link 
            to="/order" 
            className="bg-orange-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Order Custom Paper
          </Link>
        </div>
      </section>
    </div>
  );
};

export default SamplesPage;