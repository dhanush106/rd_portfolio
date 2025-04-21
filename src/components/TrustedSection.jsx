import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import logo1 from '../assets/logo1.svg'
import logo2 from '../assets/logo2.svg'
import logo3 from '../assets/logo3.svg'
import logo4 from '../assets/logo4.svg'

const testimonials = [
  {
    quote: "Our leads tripled within the first 30 days!",
    name: "– Jane Doe, CEO of SparkDigital",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    quote: "Finally found an agency that understands local targeting and ROI.",
    name: "– John Smith, Founder of LocalReach",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 4,
  },
  {
    quote: "They helped us scale to new markets in under 3 months.",
    name: "– Lisa Ray, VP at MarketBoost",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
  },
  {
    quote: "ROI has never looked better. Truly transformative service.",
    name: "– Carlos Vega, Director at AdEdge",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    rating: 4,
  },
  {
    quote: "We doubled our conversion rate after working with them!",
    name: "– Sarah Khan, Head of Growth at ClickSphere",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    rating: 5,
  },
  {
    quote: "I was surprised by how quickly we started seeing results. The team handled our Facebook and Instagram ads perfectly, and our engagement went up dramatically.",
    name: "— Priya Sharma, Fashion Brand Owner",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    rating: 5,
  },
  {
    quote: "Amazing experience! They managed everything from ad creatives to targeting. I received 30+ solid leads in just a few weeks.",
    name: "— John M., Real Estate Agent",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
    rating: 5,
  },
  {
    quote: "Their approach to local ad targeting was spot on. My small bakery got more walk-ins than ever before. Loved the communication and weekly updates.",
    name: "— Sneha K., Small Business Owner",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
  },
  {
    quote: "Google Ads were always a mystery to me, but these guys made it work like magic. Highly recommend for service-based businesses.",
    name: "— Ali Rehman, Home Cleaning Services",
    image: "https://randomuser.me/api/portraits/men/70.jpg",
    rating: 5,
  },
  {
    quote: "I tried other agencies before but didn’t get value for money. This one not only promised leads but actually delivered them. Worth every dollar.",
    name: "— Rachel T., Online Coaching Business",
    image: "https://randomuser.me/api/portraits/women/42.jpg",
    rating: 5,
  },
];
const logos = [
  logo1,
  logo2,
  logo3,
  logo4
];

const StarRating = ({ count }) => (
  <div className="flex justify-center mb-2">
    {Array.from({ length: count }).map((_, i) => (
      <span key={i} className="text-yellow-400">★</span>
    ))}
  </div>
);

const TrustedSection = () => {
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 py-16 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12 animate-fade-in-up">
        Trusted By Businesses Like Yours
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl rounded-xl p-6 max-w-sm mx-auto mb-10"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover border-2 border-indigo-500"
              />
              <StarRating count={item.rating} />
              <p className="text-gray-700 italic mb-4">“{item.quote}”</p>
              <p className="font-semibold text-gray-900">{item.name}</p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center mt-12">
        {logos.map((logo, idx) => (
          <motion.img
            key={idx}
            src={logo}
            alt={`Logo ${idx}`}
            className="h-12 grayscale hover:grayscale-0 transition-all duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.2, duration: 0.4 }}
            viewport={{ once: true }}
          />
        ))}
      </div>
    </div>
  );
};

export default TrustedSection;