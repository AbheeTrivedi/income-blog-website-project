import React from "react"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const cards = [
  {
    id: 1,
    title: "Coding",
    text: "With the hyper-convenience of modern life, many of us can only operate a microwave. Enjoying a home-cooked meal is now a luxury.",
    image: "https://images.unsplash.com/photo-1585076641399-5c06d1b3365f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWVsYW5jaW5nfGVufDB8fDB8fHww",
  }, 
  {
    id: 2,
    title: "Video Editing",
    text: "Rediscover the joy of cooking with our easy, flavorful recipes that make every bite a memory.",
    image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZnJlZWxhbmNpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    title: "Affilate Marketing",
    text: "Cooking is not just about feeding the body, but also nurturing the soul.",
    image: "https://media.istockphoto.com/id/503592634/photo/affiliate-marketing.webp?a=1&b=1&s=612x612&w=0&k=20&c=uK-r_5aQpXiCZJWHmKNbFES_A9OJh5eUvqwS9xtqJy4=",
  },
  {
    id: 4,
    title: "Content Creation",
    text: "Fresh ingredients, simple techniques, and lots of love — that’s the Stanton way.",
    image: "https://plus.unsplash.com/premium_photo-1677396466885-5f97c45ac1e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: 5,
    title: "Online Tutor",
    text: "Join our community of food lovers and bring the warmth of the kitchen back home.",
    image: "https://media.istockphoto.com/id/1306425133/photo/female-math-teacher-teach-online.jpg?s=1024x1024&w=is&k=20&c=V4WYyFU6Ge088m03P042VSWX6uaa6487L6qzEShuAwQ=",
  },
];


const Card=()=>{
    
return(
    <div className=" px-4 py-8 ">
      <div>
        <h1 className="text-5xl font-bold mb-10 ">Way to earn money online</h1>
      </div>
    <div className="flex gap-6 overflow-x-auto whitespace-nowrap">
      {cards.map((card) => (
        <motion.div
          key={card.id}
          whileHover={{ scale: 1.05 }}
          className="w-80 shrink-0 rounded-2xl shadow-lg bg-[#fdeee7] overflow-hidden"
        >
          <Link to={`/blog/${card.title.toLowerCase().replace(/\s/g, '-')}`}>
          <img
            src={card.image}
            alt="Dish"
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
            <p className="text-sm text-gray-700">{card.text}</p>
          </div>
          </Link>
        </motion.div>
      ))}
    </div>
  </div>




  
  )
}
 

export default Card 
