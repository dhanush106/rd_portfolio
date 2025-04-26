import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

const ServicesPage = () => {
  const services = [
    {
      id: 'facebook',
      title: 'Facebook Ads Campaigns',
      description:
        'Dominate the feed. Connect with customers. Get conversions. We build high-performance Facebook Ads tailored to your business goals.',
      includes: [
        'Detailed audience targeting by location, interests, and behavior',
        'Custom ad design and copywriting',
        'Pixel setup & conversion tracking',
        'Ongoing optimization & A/B testing',
      ],
      color: 'bg-blue-500',
      icon: faFacebook,
    },
    {
      id: 'instagram',
      title: 'Instagram Ads Campaigns',
      description:
        'Visual storytelling that drives results. We create ad campaigns that stop the scroll, spark interest, and drive action.',
      includes: [
        'Feed, Story, and Reels ad formats',
        'Creative that’s platform-native and eye-catching',
        'Localized targeting to reach the right people',
        'Weekly performance reports & strategy updates',
      ],
      color: 'bg-pink-500',
      icon: faInstagram,
    },
    {
      id: 'google',
      title: 'Google Ads Campaigns',
      description:
        'Capture high-intent traffic with precision. We set up and manage Google Ads across Search, Display, and YouTube.',
      includes: [
        'Keyword research & search intent mapping',
        'Geo-targeted ads based on your desired locations',
        'Ad extensions & copywriting',
        'Regular performance monitoring and budget scaling',
      ],
      color: 'bg-red-500',
      icon: faGoogle,
    },
  ];

  return (
    <motion.div className="min-h-screen bg-gray-50 text-gray-800">
      <div className="container mx-auto px-6 py-16">
        {/* Title */}
        <motion.h2
          className="text-center text-4xl font-semibold text-blue-600 mb-16 transform transition duration-500 ease-in-out"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          Our Services
        </motion.h2>

        {/* Service List */}
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`rounded-lg p-8 ${service.color} text-center text-white hover:shadow-xl transition-all duration-300 ease-in-out`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Service Icon */}
              <div className="text-6xl mb-6">
                <FontAwesomeIcon
                  icon={service.icon}
                  className="mx-auto"
                />
              </div>

              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-base mb-6">{service.description}</p>

              <ul className="space-y-2 text-sm text-left px-6">
                {service.includes.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span className="mr-3 text-white">•</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Add-On Services */}
        
      </div>
    </motion.div>
  );
};

export default ServicesPage;
