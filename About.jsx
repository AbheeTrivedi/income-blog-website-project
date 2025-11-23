import React from "react"
import { motion } from "framer-motion";

const About =()=> {
  

  return(
    
    
    
        <div className="min-h-screen bg-[#fff9f5] text-gray-800 px-6 py-16 flex flex-col items-center">
          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-4 text-center"
          >
            About Us
          </motion.h1>
    
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-center max-w-2xl text-gray-600 mb-10"
          >
            We are passionate creators, helping people discover and follow their passions — whether it's freelancing, content creation, or teaching online. Our mission is to empower everyone to build a life they love.
          </motion.p>
    
          {/* Image + Text Section */}
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl">
            {/* Image */}
            <motion.img
              src="/images/team.jpg" // replace with your image
              alt="Our Team"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2 rounded-xl shadow-lg"
            />
    
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left max-w-xl space-y-4"
            >
              <h2 className="text-2xl font-semibold">Who We Are</h2>
              <p>
                We're a group of creators, marketers, and educators who believe in the power of passion.
                We help people unlock their potential through learning, content, and community support.
              </p>
              <p>
                Our platform offers valuable insights, tutorials, and opportunities to grow and monetize your skills.
                Whether you're starting out or scaling up, we're here to support your journey.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 px-6 py-2 bg-orange-500 text-white rounded-md shadow hover:bg-orange-600 transition"
              >
                Join Our Mission
              </motion.button>
            </motion.div>
          </div>
        </div>
      );
    }
    
     

   
     
  

 

export default About