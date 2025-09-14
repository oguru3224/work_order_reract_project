import React, { useState, useEffect } from 'react';
import { Calculator, FileText, Clock, Shield, CheckCircle, AlertCircle, Upload, X, User, Phone, CreditCard, Lock } from 'lucide-react';
import { orderApi, ApiResponse, configApi, ServiceType, AcademicLevelType } from '../services/api';

interface OrderData {
  academicLevel: number;
  paperTypeId: number;
  topcatId: number;
  toptitle: string;
  pagesreq: number;
  slidesreq: number;
  tariffId: number;
  spacing: string;
  sources: number;
  style: string;
  paperDetails: string;
  discountCode: string;
  chartsreq: number;
}

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

interface PaymentData {
  paymentMethod: string;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  cardholderName: string;
}

const OrderPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Order Essay Writing Service | Easy Steps, 24/7 Support | Cognita';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Ready to get expert help? Place your order in 3 simple steps. Get a free quote, choose your writer, and receive a 100% original paper on time. Complete confidentiality guaranteed.');
    }
    
    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', 'order essay, place order, buy essay online, get started, secure payment, confidential service, hire a writer, get a quote, 24/7 support');
    }

    // Scroll to top
    window.scrollTo(0, 0);

    // Fetch service types from backend
    const fetchServiceTypes = async () => {
      try {
        setIsLoadingServiceTypes(true);
        const response: any = await configApi.getConfig();
        if (response) {
          if (response.configsForAcademicWriting) {
            if (response.configsForAcademicWriting.paperTypes) {
              setServiceTypes(response.configsForAcademicWriting.paperTypes || []);
            }
          }
        }
      } catch (error) {
        console.error('Error fetching service types:', error);
      } finally {
        setIsLoadingServiceTypes(false);
      }
    };

      const fetchAcademicLevels = async () => {
        try {
          const response: any = await configApi.getConfig();
          if (response) {
            if (response.configsForAcademicWriting) {
              if (response.configsForAcademicWriting.academicLevels) {
                setAcademicLevels(response.configsForAcademicWriting.academicLevels || []);
              }
            }
          }
        } catch (error) {
          console.error('Error fetching academic levels:', error);
        }
      };

      const fetchDisciplineGroups = async () => {
        try {
          const response: any = await configApi.getConfig();
          if (response) {
            if (response.groupsOfDisciplinesById) {
              setDisciplineGroups(response.groupsOfDisciplinesById || []);
            }
          }
        } catch (error) {
          console.error('Error fetching discipline groups:', error);
        }
      };

      const fetchTraffics = async () => {
        const response: any = await configApi.getConfig();
        if (response) {
          if (response.configsForAcademicWriting) {
            if (response.configsForAcademicWriting.tariffs) {
              setTariffs(response.configsForAcademicWriting.tariffs || []);
            }
          }
        }
      }

      fetchServiceTypes();
      fetchAcademicLevels();
      fetchDisciplineGroups();
      fetchTraffics();
  }, []);

  const [currentStep, setCurrentStep] = useState(1);
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  
  const [orderData, setOrderData] = useState<OrderData>({
    academicLevel: 0,
    paperTypeId: 0,
    topcatId: 0,
    toptitle: '',
    pagesreq: 1,
    slidesreq: 0,
    tariffId: 0,
    spacing: 'double',
    sources: 0,
    style: 'APA',
    paperDetails: '',
    discountCode: '',
    chartsreq: 1
  });

  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const [paymentData, setPaymentData] = useState<PaymentData>({
    paymentMethod: 'credit-card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });

  const [discountApplied, setDiscountApplied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [serviceTypes, setServiceTypes] = useState<ServiceType[]>([]);
  const [isLoadingServiceTypes, setIsLoadingServiceTypes] = useState(true);
  const [academicLevels, setAcademicLevels] = useState<AcademicLevelType[]>([]);
  const [disciplineGroups, setDisciplineGroups] = useState<any[]>([]);
  const [tariffs, setTariffs] = useState<any[]>([]);

  const tariffs_filter = tariffs.filter(tariff => tariff.academicLevel === orderData.academicLevel);
  

  // Reset tariff selection when academic level changes
  useEffect(() => {
    if (orderData.academicLevel === 0) {
      setOrderData(prev => ({ ...prev, tariffId: 0 }));
    }
  }, [orderData.academicLevel]);

  const handleInputChange = (field: keyof OrderData, value: string | number) => {
    setOrderData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleRegistrationChange = (field: keyof RegistrationData, value: string) => {
    setRegistrationData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleOrderSubmit = async () => {
    if (currentStep !== 3) return;
    
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      // Prepare order data for PHP backend
      const orderPayload = {
        paperTypeId: orderData.paperTypeId,
        academiclevel: orderData.academicLevel,
        tariffId: orderData.tariffId,
        pagesreq: orderData.pagesreq,
        topcatId: orderData.topcatId,
        toptitle: orderData.toptitle,
        paperDetails: orderData.paperDetails,
        customer_name: `${registrationData.firstName} ${registrationData.lastName}`,
        customer_email: registrationData.email,
        customer_phone: registrationData.phone,
        chartsreq: orderData.chartsreq,
        slidesreq: orderData.slidesreq,
        spacing: orderData.spacing
      };
      
      const response: ApiResponse<{ newOrderId: number }> = await orderApi.create(orderPayload);
      
      if (response && response.success) {
        setSubmitMessage({
          type: 'success',
          text: `Order submitted successfully! Your order ID is: ${response.newOrderId}`
        });
        // Reset form or redirect to order confirmation
        window.location.href = `/order/${response.newOrderId}`;
        setCurrentStep(4);
      } else {
        setSubmitMessage({
          type: 'error',
          text: response.message || 'Failed to submit order. Please try again.'
        });
      }
    } catch (error: any) {
      console.error('Order submission error:', error);
      setSubmitMessage({
        type: 'error',
        text: error.response?.data?.message || 'An error occurred while submitting your order. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePaymentChange = (field: keyof PaymentData, value: string) => {
    setPaymentData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setUploadedFiles(prev => [...prev, ...files]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const applyDiscount = () => {
    if (orderData.discountCode.trim()) {
      setDiscountApplied(true);
    }
  };

  const calculatePrice = () => {

    let pagePrice = 0;
    const selectedTariff = tariffs_filter.find(tariff => tariff.id === orderData.tariffId);
    pagePrice = selectedTariff ? selectedTariff.pricePerPage : 0;
    
    // Apply spacing multiplier only to pages
    if (orderData.spacing === 'single') {
      pagePrice *= 2;
    }
    
    const slidePrice = pagePrice * 0.75; // Slides are 75% of page price
    
    const pagesTotal = orderData.pagesreq * pagePrice;
    const slidesTotal = orderData.slidesreq * slidePrice;
    const subtotal = pagesTotal + slidesTotal;
    
    const discount = discountApplied ? subtotal * 0.1 : 0;
    const total = subtotal - discount;

    return {
      pagePrice: pagePrice.toFixed(2),
      slidePrice: slidePrice.toFixed(2),
      pagesTotal: pagesTotal.toFixed(2),
      slidesTotal: slidesTotal.toFixed(2),
      subtotal: subtotal.toFixed(2),
      discount: discount.toFixed(2),
      total: total.toFixed(2)
    };
  };

  const pricing = calculatePrice();

  const isStep1Valid = () => {
    return (
      orderData.toptitle.trim() !== '' &&
      orderData.topcatId > 0 &&
      orderData.paperTypeId > 0 &&
      orderData.academicLevel > 0 &&
      (orderData.pagesreq > 0 || orderData.slidesreq > 0) &&
      orderData.paperDetails.trim() !== ''
    );
  };

  const isStep2Valid = () => {
    return (
      registrationData.firstName.trim() !== '' &&
      registrationData.lastName.trim() !== '' &&
      registrationData.email.trim() !== '' &&
      registrationData.phone.trim() !== '' &&
      registrationData.password.length >= 6 &&
      registrationData.password === registrationData.confirmPassword
    );
  };

  const isStep3Valid = () => {
    if (paymentData.paymentMethod === 'credit-card') {
      return (
        paymentData.cardNumber.length >= 16 &&
        paymentData.expiryDate.trim() !== '' &&
        paymentData.cvv.length >= 3 &&
        paymentData.cardholderName.trim() !== ''
      );
    }
    return true; // For other payment methods
  };

  const getStep1ValidationMessage = () => {
    const missing = [];
    if (!orderData.toptitle.trim()) missing.push('toptitle');
    if (orderData.topcatId == 0) missing.push('Subject');
    if (orderData.paperTypeId == 0) missing.push('Type of Work');
    if (orderData.academicLevel == 0) missing.push('Academic Level');
    if (orderData.pagesreq === 0 && orderData.slidesreq === 0) missing.push('at least 1 page or slide');
    if (!orderData.paperDetails.trim()) missing.push('Paper Instructions');
    
    if (missing.length > 0) {
      return `Please fill in: ${missing.join(', ')}`;
    }
    return '';
  };

  const handleNextStep = () => {
    if (currentStep === 1 && isStep1Valid()) {
      setCurrentStep(2);
    } else if (currentStep === 2 && isStep2Valid()) {
      setCurrentStep(3);
    }
  };

  const handlePreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  // const handleSubmitOrder = () => {
  //   if (isStep3Valid()) {
  //     // Handle order submission
  //     alert('Order submitted successfully!');
  //   }
  // };

  const steps = [
    { number: 1, title: "Order Details", description: "Provide your paper requirements" },
    { number: 2, title: "Registration", description: "Create your account" },
    { number: 3, title: "Payment", description: "Complete secure payment" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Place Your Order</h1>
          <p className="text-xl text-gray-600">Get expert academic help in 3 simple steps</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  currentStep >= step.number 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.number ? (
                    <CheckCircle className="w-6 h-6" />
                  ) : (
                    <span className="font-bold">{step.number}</span>
                  )}
                </div>
                <div className="ml-4 hidden sm:block">
                  <div className={`font-medium ${currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'}`}>
                    {step.title}
                  </div>
                  <div className="text-sm text-gray-500">{step.description}</div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden lg:block w-24 h-0.5 ml-8 ${
                    currentStep > step.number ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-6">
              {/* Step 1: Order Details */}
              {currentStep === 1 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <FileText className="w-6 h-6 text-indigo-600" />
                    Order Details
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Academic Level */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Academic Level *
                      </label>
                      <select
                        value={orderData.academicLevel}
                        onChange={(e) => handleInputChange('academicLevel', parseInt(e.target.value) || 0)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value={0}>Select a academic level</option>
                        {
                          academicLevels &&
                          academicLevels.map((level) => (
                            <option key={level.id} value={level.id}>
                              {level.title}
                            </option>
                          ))
                        }
                      </select>
                    </div>

                    {/* Type of Work */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Type of Work *
                      </label>
                      <select
                        value={orderData.paperTypeId}
                        onChange={(e) => handleInputChange('paperTypeId', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        disabled={isLoadingServiceTypes}
                      >
                        {isLoadingServiceTypes ? (
                          <option value="">Loading service types...</option>
                        ) : (
                          <>
                            <option value="">Select a service type</option>
                            {serviceTypes.length > 0 ? (
                              serviceTypes.map((serviceType) => (
                                <option key={serviceType.id} value={serviceType.id}>
                                  {serviceType.title}
                                </option>
                              ))
                            ) : (
                              <option value="" disabled>No service types available</option>
                            )}
                          </>
                        )}
                      </select>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        value={orderData.topcatId}
                        onChange={(e) => handleInputChange('topcatId', parseInt(e.target.value) || 0)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value={0}>Select a subject</option>
                        {disciplineGroups.map((group) => (
                          <optgroup key={group.id} label={group.name}>
                            {group.disciplines && group.disciplines.map((discipline: any) => (
                              <option key={discipline.id} value={discipline.id}>
                                {discipline.name}
                              </option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                    </div>

                    {/* Topic */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Topic *
                      </label>
                      <input
                        type="text"
                        value={orderData.toptitle}
                        onChange={(e) => handleInputChange('toptitle', e.target.value)}
                        placeholder="Enter your paper topic"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    {/* Number of Pages */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Pages *
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={orderData.pagesreq}
                        onChange={(e) => handleInputChange('pagesreq', parseInt(e.target.value) || 0)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    {/* Number of Slides */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Number of Slides
                      </label>
                      <input
                        type="number"
                        min="0"
                        value={orderData.slidesreq}
                        onChange={(e) => handleInputChange('slidesreq', parseInt(e.target.value) || 0)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    {/* Deadline */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Deadline *
                      </label>
                        <select
                          value={orderData.tariffId}
                          onChange={(e) => handleInputChange('tariffId', parseInt(e.target.value) || 0)}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          disabled={orderData.academicLevel === 0}
                        >
                          <option value={0}>Select deadline</option>
                          {tariffs_filter.map((tariff) => (
                            <option key={tariff.id} value={tariff.id}>
                              {tariff.name}
                            </option>
                          ))}
                        </select>
                    </div>

                    {/* Spacing */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Spacing *
                      </label>
                      <select
                        value={orderData.spacing}
                        onChange={(e) => handleInputChange('spacing', e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      >
                        <option value="double">Double Spacing</option>
                        <option value="single">Single Spacing (2x price for pages)</option>
                      </select>
                    </div>
                  </div>

                  {/* Paper Instructions */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Paper Instructions *
                    </label>
                    <textarea
                      value={orderData.paperDetails}
                      onChange={(e) => handleInputChange('paperDetails', e.target.value)}
                      placeholder="Provide detailed instructions for your paper..."
                      rows={6}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                  </div>

                  {/* File Upload */}
                  <div className="mt-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Additional Files (Optional)
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-indigo-400 transition-colors">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-4">
                        Upload reference materials, assignment guidelines, or any other relevant files
                      </p>
                      <input
                        type="file"
                        multiple
                        onChange={handleFileUpload}
                        className="hidden"
                        id="file-upload"
                        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
                      />
                      <label
                        htmlFor="file-upload"
                        className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer inline-block"
                      >
                        Choose Files
                      </label>
                      <p className="text-xs text-gray-500 mt-2">
                        Supported formats: PDF, DOC, DOCX, TXT, JPG, PNG (Max 10MB each)
                      </p>
                    </div>

                    {/* Uploaded Files */}
                    {uploadedFiles.length > 0 && (
                      <div className="mt-4 space-y-2">
                        <h4 className="font-medium text-gray-700">Uploaded Files:</h4>
                        {uploadedFiles.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                            <div className="flex items-center">
                              <FileText className="w-5 h-5 text-gray-500 mr-2" />
                              <span className="text-sm text-gray-700">{file.name}</span>
                              <span className="text-xs text-gray-500 ml-2">
                                ({(file.size / 1024 / 1024).toFixed(2)} MB)
                              </span>
                            </div>
                            <button
                              onClick={() => removeFile(index)}
                              className="text-red-500 hover:text-red-700 transition-colors"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Validation Message */}
                  {!isStep1Valid() && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 text-red-600">
                        <AlertCircle className="w-5 h-5" />
                        <span className="font-medium">Required fields missing</span>
                      </div>
                      <p className="text-red-600 text-sm mt-1">{getStep1ValidationMessage()}</p>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={handleNextStep}
                      disabled={!isStep1Valid()}
                      className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isStep1Valid()
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Continue to Registration
                    </button>
                  </div>
                </>
              )}

              {/* Step 2: Registration */}
              {currentStep === 2 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <User className="w-6 h-6 text-indigo-600" />
                    Account Registration
                  </h2>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        value={registrationData.firstName}
                        onChange={(e) => handleRegistrationChange('firstName', e.target.value)}
                        placeholder="Enter your first name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    {/* Last Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        value={registrationData.lastName}
                        onChange={(e) => handleRegistrationChange('lastName', e.target.value)}
                        placeholder="Enter your last name"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={registrationData.email}
                        onChange={(e) => handleRegistrationChange('email', e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        value={registrationData.phone}
                        onChange={(e) => handleRegistrationChange('phone', e.target.value)}
                        placeholder="Enter your phone number"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    {/* Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Password *
                      </label>
                      <input
                        type="password"
                        value={registrationData.password}
                        onChange={(e) => handleRegistrationChange('password', e.target.value)}
                        placeholder="Create a password (min 6 characters)"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>

                    {/* Confirm Password */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Confirm Password *
                      </label>
                      <input
                        type="password"
                        value={registrationData.confirmPassword}
                        onChange={(e) => handleRegistrationChange('confirmPassword', e.target.value)}
                        placeholder="Confirm your password"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Password Validation */}
                  {registrationData.password && registrationData.confirmPassword && registrationData.password !== registrationData.confirmPassword && (
                    <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                      <div className="flex items-center gap-2 text-red-600">
                        <AlertCircle className="w-5 h-5" />
                        <span className="font-medium">Passwords do not match</span>
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={handlePreviousStep}
                      className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back to Order Details
                    </button>
                    <button
                      onClick={handleNextStep}
                      disabled={!isStep2Valid()}
                      className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isStep2Valid()
                          ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-md hover:shadow-lg'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      Continue to Payment
                    </button>
                  </div>
                </>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-indigo-600" />
                    Payment Information
                  </h2>

                  {/* Payment Method Selection */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Payment Method *
                    </label>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { value: 'credit-card', label: 'Credit Card', icon: <CreditCard className="w-5 h-5" /> },
                        { value: 'paypal', label: 'PayPal', icon: <Shield className="w-5 h-5" /> },
                        { value: 'apple-pay', label: 'Apple Pay', icon: <Phone className="w-5 h-5" /> }
                      ].map((method) => (
                        <button
                          key={method.value}
                          onClick={() => handlePaymentChange('paymentMethod', method.value)}
                          className={`p-4 border-2 rounded-lg transition-all flex items-center justify-center space-x-2 ${
                            paymentData.paymentMethod === method.value
                              ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                              : 'border-gray-200 hover:border-indigo-300'
                          }`}
                        >
                          {method.icon}
                          <span className="font-medium">{method.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Credit Card Details */}
                  {paymentData.paymentMethod === 'credit-card' && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          value={paymentData.cardholderName}
                          onChange={(e) => handlePaymentChange('cardholderName', e.target.value)}
                          placeholder="Name on card"
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Card Number *
                        </label>
                        <input
                          type="text"
                          value={paymentData.cardNumber}
                          onChange={(e) => handlePaymentChange('cardNumber', e.target.value.replace(/\s/g, ''))}
                          placeholder="1234 5678 9012 3456"
                          maxLength={16}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Expiry Date *
                          </label>
                          <input
                            type="text"
                            value={paymentData.expiryDate}
                            onChange={(e) => handlePaymentChange('expiryDate', e.target.value)}
                            placeholder="MM/YY"
                            maxLength={5}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV *
                          </label>
                          <input
                            type="text"
                            value={paymentData.cvv}
                            onChange={(e) => handlePaymentChange('cvv', e.target.value)}
                            placeholder="123"
                            maxLength={4}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Security Notice */}
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 text-green-600">
                      <Lock className="w-5 h-5" />
                      <span className="font-medium">Secure Payment</span>
                    </div>
                    <p className="text-green-700 text-sm mt-1">
                      Your payment information is encrypted and secure. We never store your credit card details.
                    </p>
                  </div>

                  {/* Navigation */}
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={handlePreviousStep}
                      className="px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Back to Registration
                    </button>
                    <button
                      onClick={handleOrderSubmit}
                      disabled={!isStep3Valid() || isSubmitting}
                      className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                        isStep3Valid() && !isSubmitting
                          ? 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg'
                          : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Complete Order'}
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
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Price Calculator Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-indigo-600" />
                Price Calculator
              </h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Academic Level:</span>
                  <span className="font-medium">
                    {academicLevels.find(level => level.id === orderData.academicLevel)?.title || 'Not selected'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Deadline:</span>
                  <span className="font-medium">
                    {tariffs_filter.find(t => t.id === orderData.tariffId)?.name || 'Not selected'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Pages:</span>
                  <span className="font-medium">{orderData.pagesreq}</span>
                </div>
                {orderData.slidesreq > 0 && (
                  <div className="flex justify-between">
                    <span>Slides:</span>
                    <span className="font-medium">{orderData.slidesreq}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Spacing:</span>
                  <span className="font-medium">{orderData.spacing}</span>
                </div>
              </div>

              <hr className="my-4" />

              <div className="space-y-2 text-sm">
                {orderData.pagesreq > 0 && (
                  <div className="flex justify-between">
                    <span>Pages ({orderData.pagesreq} × ${pricing.pagePrice}):</span>
                    <span>${pricing.pagesTotal}</span>
                  </div>
                )}
                {orderData.slidesreq > 0 && (
                  <div className="flex justify-between">
                    <span>Slides ({orderData.slidesreq} × ${pricing.slidePrice}):</span>
                    <span>${pricing.slidesTotal}</span>
                  </div>
                )}
                <div className="flex justify-between font-medium">
                  <span>Subtotal:</span>
                  <span>${pricing.subtotal}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%):</span>
                    <span>-${pricing.discount}</span>
                  </div>
                )}
              </div>

              <hr className="my-4" />

              <div className="flex justify-between text-lg font-bold text-indigo-600">
                <span>Total:</span>
                <span>${pricing.total}</span>
              </div>

              {/* Discount Code */}
              {currentStep === 1 && (
                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Discount Code
                  </label>
                  <div className="flex gap-2 w-full max-w-full">
                    <input
                      type="text"
                      value={orderData.discountCode}
                      onChange={(e) => handleInputChange('discountCode', e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 min-w-0 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-sm"
                    />
                    <button
                      onClick={applyDiscount}
                      className="px-3 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors flex-shrink-0 text-sm whitespace-nowrap"
                    >
                      Apply
                    </button>
                  </div>
                </div>
              )}

              {/* What's Included */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">What's Included:</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    100% Original Content
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Free Unlimited Revisions
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Plagiarism Report
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    24/7 Customer Support
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    On-Time Delivery
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Shield className="w-12 h-12 text-green-500 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">100% Secure</h3>
            <p className="text-gray-600">Your personal information is protected with bank-level security</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Clock className="w-12 h-12 text-blue-500 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">On-Time Delivery</h3>
            <p className="text-gray-600">We guarantee your paper will be delivered before the deadline</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <CheckCircle className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
            <h3 className="font-bold text-gray-900 mb-2">Quality Guaranteed</h3>
            <p className="text-gray-600">Free revisions until you're completely satisfied</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;