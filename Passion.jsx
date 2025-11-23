import React from "react"
import { motion } from "framer-motion";

const Passion =()=> {

  return(
   
        <div className="min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 py-16 gap-10">
          
          {/* Left Side Image */}
          <motion.img
            src="https://images.unsplash.com/photo-1620112626650-c1d724c1ed97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGFzc2lvbnxlbnwwfHwwfHx8MA%3D%3D" // Replace with your image path
            alt="Passion"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 rounded-2xl shadow-xl object-cover"
          />
    
          {/* Right Side Text */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center md:text-left"
          >
            <h1 className="text-4xl font-bold mb-4 text-white">Apne Passion Ko Paichano</h1>
            <p className="text-lg text-gray-1000 mb-4">
              Har kisi ke andar koi na koi talent hota hai. Apne andar jhaanko, dekho
              kis cheez mein dil se interest aata hai. Yahi tumhara passion hai.
            </p>
            <p className="text-lg text-gray-1000 mb-6">
              Jab tum apne passion ko follow karte ho, toh kaam bhi maza ban jaata hai.
              Challenges asaan lagte hain, aur safalta milti hai. Apne passion ke saath
              jeena hi asli zindagi hai.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-[#ff835c] text-white rounded-xl shadow-md"
            >
              Follow Your Passion
            </motion.button>
          </motion.div>
        </div>
      );
    }
    
     
  

 

export default Passion