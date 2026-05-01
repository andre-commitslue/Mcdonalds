import { Smartphone, Star, Zap, Gift, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

export default function AppPromo() {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-brand-red text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full font-bold uppercase tracking-wider text-sm mb-6 border border-white/30">
              <Star size={16} className="text-brand-yellow fill-brand-yellow" />
              <span>4.9 Stars on App Store</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black leading-none mb-6 tracking-tighter shadow-brand-red-dark drop-shadow-md">
              THE FASTEST <br/>BITE IN <span className="text-brand-yellow">TOWN.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-10 max-w-lg opacity-90">
              Order ahead, skip the line, and earn free food. Life is too short to wait for burgers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="#" className="bg-brand-black text-white px-8 py-4 rounded-full flex justify-center items-center gap-3 hover:scale-105 active:scale-95 transition-transform shadow-xl">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" className="w-8 h-8 filter brightness-0 invert" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] uppercase font-bold tracking-wider">Download on the</span>
                  <span className="text-xl font-bold font-display">App Store</span>
                </div>
              </a>
              <a href="#" className="bg-brand-black text-white px-8 py-4 rounded-full flex justify-center items-center gap-3 hover:scale-105 active:scale-95 transition-transform shadow-xl">
                 <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8 filter brightness-0 invert" />
              </a>
            </div>
            <p className="text-sm font-bold opacity-75">New users get a free burger on their first order!</p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative"
          >
            {/* Phone Mockup Placeholder */}
            <div className="w-[300px] h-[600px] bg-brand-black rounded-[3rem] border-[10px] border-brand-black shadow-2xl relative overflow-hidden">
               <div className="w-full h-full bg-brand-gray relative flex flex-col">
                  <div className="bg-white p-6 pb-8 rounded-b-[2rem] shadow-sm">
                    <p className="font-bold text-2xl font-display text-brand-red tracking-tight">FastBite</p>
                    <p className="text-gray-500 text-sm font-medium mt-1">What are you craving?</p>
                    <div className="w-full bg-gray-100 rounded-lg p-3 mt-4 flex items-center text-gray-400">
                      Search Menu...
                    </div>
                  </div>
                  <div className="flex-1 p-4 overflow-hidden">
                    <div className="flex justify-between items-center mb-4 pt-2">
                       <span className="font-bold font-display text-lg">Top Picks</span>
                       <span className="text-brand-red text-xs font-bold">See All</span>
                    </div>
                    <div className="w-full bg-white h-32 rounded-2xl shadow-sm mb-4 flex p-3 gap-3">
                       <div className="w-24 h-full bg-gray-200 rounded-xl"></div>
                       <div className="flex-1 flex flex-col justify-center">
                          <div className="h-4 w-3/4 bg-gray-200 rounded mb-2"></div>
                          <div className="h-3 w-1/2 bg-gray-100 rounded mb-4"></div>
                          <div className="h-6 w-1/3 bg-brand-yellow rounded"></div>
                       </div>
                    </div>
                    <div className="w-full bg-white h-32 rounded-2xl shadow-sm mb-4 flex p-3 gap-3">
                       <div className="w-24 h-full bg-gray-200 rounded-xl"></div>
                       <div className="flex-1 flex flex-col justify-center">
                          <div className="h-4 w-2/3 bg-gray-200 rounded mb-2"></div>
                          <div className="h-3 w-1/2 bg-gray-100 rounded mb-4"></div>
                          <div className="h-6 w-1/3 bg-brand-red rounded"></div>
                       </div>
                    </div>
                  </div>
                  
                  {/* Mock Bottom Nav */}
                  <div className="h-16 bg-white border-t flex justify-around items-center px-4">
                     <div className="w-8 h-8 rounded-full bg-brand-red/20 border-2 border-brand-red"></div>
                     <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                     <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                     <div className="w-8 h-8 rounded-full bg-gray-200"></div>
                  </div>
                </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-display font-black text-4xl md:text-5xl mb-6">Why Download?</h2>
            <p className="text-xl text-gray-500 font-medium">Because getting your food should be the easiest part of your day.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap size={40} className="text-brand-red" />, title: "Instant Ordering", desc: "Save your favorites and order with literally two taps." },
              { icon: <Gift size={40} className="text-brand-yellow" />, title: "Exclusive Rewards", desc: "Earn points for free food. App users get access to secret drops." },
              { icon: <Smartphone size={40} className="text-blue-500" />, title: "Order Tracking", desc: "Watch your order go from grill to bag to your hands in real-time." },
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-gray-100">
                  {feature.icon}
                </div>
                <h3 className="font-display font-black text-2xl mb-3">{feature.title}</h3>
                <p className="text-gray-600 font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <section className="bg-brand-gray py-20 text-center border-t border-gray-200">
         <div className="container mx-auto px-4 max-w-xl">
             <h2 className="font-display font-black text-4xl mb-6">Still reading? <br/>Just download it.</h2>
             <Link to="/menu" className="font-bold text-brand-red flex items-center justify-center gap-1 hover:underline text-lg">
                Or view menu on web <ChevronRight size={20} />
             </Link>
         </div>
      </section>
    </div>
  );
}
