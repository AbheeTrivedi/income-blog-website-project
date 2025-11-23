import React from "react"
import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer =()=> {

  return(
    
        <motion.footer
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1f1f1f] text-white px-6 py-10 mt-10"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Left - Branding */}
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold">PassionProject</h2>
              <p className="text-sm text-gray-400">Follow your heart. Create with purpose.</p>
            </div>
    
            {/* Center - Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#" className="hover:text-orange-400 transition-colors">Home</a>
              <a href="#" className="hover:text-orange-400 transition-colors">About</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Projects</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Contact</a>
            </div>
    
            {/* Right - Socials */}
            <div className="flex space-x-4 text-xl">
              <motion.a whileHover={{ scale: 1.2 }} href="#"><FaInstagram /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#"><FaTwitter /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#"><FaLinkedin /></motion.a>
              <motion.a whileHover={{ scale: 1.2 }} href="#"><FaGithub /></motion.a>
            </div>
          </div>
    
          <p className="text-center text-xs text-gray-500 mt-6">
            © {new Date().getFullYear()} PassionProject. All rights reserved.
          </p>
        </motion.footer>
      );
    }
    
     
  

 

export default Footer