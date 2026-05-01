import { Tag, Clock, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const DEALS = [
  { id: 1, title: "Family Feast Bundle", desc: "4 Classic Burgers, 2 Large Fries, 4 Regular Drinks points.", price: "₱599", oldPrice: "₱850", type: "bundle", expires: "Ends in 2 days" },
  { id: 2, title: "App Exclusive: Free Fries!", desc: "Get a free medium fries with any burger purchase. App only.", type: "app", expires: "Every Friday" },
  { id: 3, title: "Midnight Snack Pack", desc: "2 Cheeseburgers, 1 Large Fries. Valid 10PM - 4AM.", price: "₱199", oldPrice: "₱300", type: "time", expires: "Ongoing" },
  { id: 4, title: "Student Discount", desc: "Show valid ID in-store to get 15% off your entire meal.", type: "store", expires: "Ongoing" },
];

export default function Deals() {
  return (
    <div className="bg-brand-gray min-h-screen pb-20">
      <div className="bg-brand-red text-white py-12 px-4 shadow-inner relative overflow-hidden">
        <div className="absolute right-0 top-0 opacity-10">
          <Tag size={300} className="-rotate-12 translate-x-1/4 -translate-y-1/4" />
        </div>
        <div className="container mx-auto relative z-10">
          <h1 className="font-display font-black text-5xl md:text-6xl mb-4 tracking-tighter">Offers & Deals</h1>
          <p className="text-xl max-w-lg opacity-90 font-medium">More food. Less money. What's not to love? Check out our latest promotions below.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 pt-12">
        <div className="grid md:grid-cols-2 gap-8">
          {DEALS.map((deal, i) => (
             <motion.div 
               key={deal.id}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: i * 0.1 }}
               className="bg-white rounded-3xl p-6 md:p-8 flex flex-col shadow-sm border-2 border-transparent hover:border-brand-yellow transition-colors relative overflow-hidden group cursor-pointer"
             >
               {deal.type === "app" && (
                 <div className="absolute top-0 right-0 bg-brand-black text-brand-yellow font-bold text-xs uppercase px-4 py-1.5 rounded-bl-xl tracking-wider">
                   App Only
                 </div>
               )}
               {deal.type === "bundle" && (
                 <div className="absolute top-0 right-0 bg-brand-red text-white font-bold text-xs uppercase px-4 py-1.5 rounded-bl-xl tracking-wider">
                   Limited Time
                 </div>
               )}

               <div className="flex items-start justify-between mb-4">
                 <div className="bg-orange-100 p-3 rounded-full text-brand-red mb-2">
                   <Tag size={28} />
                 </div>
               </div>
               
               <h3 className="font-display font-black text-3xl mb-2 group-hover:text-brand-red transition-colors">{deal.title}</h3>
               <p className="text-gray-600 font-medium mb-6 text-lg">{deal.desc}</p>
               
               <div className="mt-auto pt-4 flex items-end justify-between">
                 <div>
                   {deal.price ? (
                     <div className="flex items-end gap-3">
                       <span className="font-display font-black text-4xl text-brand-black leading-none">{deal.price}</span>
                       {deal.oldPrice && <span className="text-xl text-gray-400 line-through font-bold mb-1">{deal.oldPrice}</span>}
                     </div>
                   ) : (
                     <div className="font-display font-black text-2xl text-brand-black leading-none">View Details</div>
                   )}
                   <div className="flex items-center gap-1.5 text-xs font-bold text-gray-500 uppercase mt-2 bg-gray-100 px-2 py-1 rounded inline-flex">
                     <Clock size={12} /> {deal.expires}
                   </div>
                 </div>
                 
                 <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-brand-yellow transition-colors">
                   <ChevronRight size={24} className="text-brand-black" />
                 </div>
               </div>
             </motion.div>
          ))}
        </div>

        <div className="mt-16 bg-brand-black text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
           <div className="relative z-10 max-w-2xl mx-auto">
             <h2 className="font-display font-black text-4xl mb-4 text-brand-yellow">Never Miss a Deal</h2>
             <p className="text-lg md:text-xl font-medium opacity-90 mb-8">Download the FastBite app and get exclusive access to secret menu items and daily drops.</p>
             <Link to="/app" className="bg-white text-brand-black font-bold text-lg py-4 px-10 rounded-full hover:bg-brand-red hover:text-white transition-colors inline-block shadow-lg">
               Get the App
             </Link>
           </div>
           <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 to-transparent opacity-50"></div>
        </div>
      </div>
    </div>
  );
}
