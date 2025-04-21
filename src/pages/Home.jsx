import React from 'react'
import { Phone } from "lucide-react"
import { motion } from 'framer-motion'
import HeroBg from "../assets/hero.jpg"
import TrustedSection from '../components/TrustedSection'
import WhatWeDo from '../components/WhatWeDo'
import WhyChooseUs from '../components/WhyChooseUs'

const Home = () => {
  const headingVariants = {
    hidden: { opacity: 0, x: -40 },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const subheadingVariants = {
    hidden: { opacity: 0, y: 20 },
    animate: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.3,
        ease: "easeOut"
      }
    })
  };

  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeInOut" }},
      }}
      initial="hidden"
      animate="animate"
      className=""
    >
      <section className="shadow-2xl flex flex-col align-middle justify-center md:flex-row space-y-7 bg-blue-50 my-5 p-7">
        <div className="">
          <div className="space-y-5">
            <motion.h1
              variants={headingVariants}
              initial="hidden"
              animate="animate"
              className="text-4xl sm:text-5xl font-semibold text-gray-900"
            >
              Smart Ads.
            </motion.h1>

            <motion.h1
              custom={1}
              variants={subheadingVariants}
              initial="hidden"
              animate="animate"
              className="text-4xl sm:text-5xl text-gray-500"
            >
              Real Growth.
            </motion.h1>

            <motion.h1
              custom={2}
              variants={subheadingVariants}
              initial="hidden"
              animate="animate"
              className="text-4xl sm:text-5xl font-semibold"
            >
              Every Click Counts.
            </motion.h1>
          </div>
          <div className="w-fit text-xl sm:text-2xl hover:bg-blue-100 p-3 rounded-md transition duration-300">
            <p>
              We run powerful Facebook, Instagram, and Google <br /> ad campaigns—tailored to your business and targeted <br /> to your ideal customers in the locations that matter.
            </p>
          </div>
          <div className="space-y-4">
            <button className="flex gap-3 px-6 py-3 rounded-md bg-gray-700 text-white hover:bg-blue-500 transition duration-300 cursor-pointer">
              <Phone /> Book a Free Call
            </button>
            <button className="px-6 py-3 cursor-pointer rounded-md font-bold hover:bg-blue-300 hover:font-medium transition duration-300">
              📋 See Services
            </button>
          </div>
        </div>

        <motion.div 
          custom={3}
          variants={headingVariants}
          initial="hidden"
          animate="animate"
          className="hidden md:flex text-balance"
        >
          <img src={HeroBg} alt="hero" width={600} className="object-cover rounded-xl shadow-lg" />
        </motion.div>
      </section>

      <TrustedSection />
      <WhatWeDo />
      <WhyChooseUs />
    </motion.div>
  )
}

export default Home
