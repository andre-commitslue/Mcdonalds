import { Link } from "react-router-dom";
import { ArrowRight, Star, Clock, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center overflow-hidden bg-white">
        {/* Background Image/Pattern */}
        <div className="absolute inset-0 z-0 bg-brand-yellow/10">
          <img 
            src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Delicious Burger" 
            className="w-full h-full object-cover opacity-10 mix-blend-multiply grayscale"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 grid md:grid-cols-2 gap-8 items-center pt-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-black max-w-xl"
          >
            <span className="inline-block px-4 py-1.5 bg-yellow-100 text-[#8B6E00] font-bold text-xs tracking-widest uppercase rounded-full mb-4">
              🔥 100% Flame-grilled
            </span>
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-display font-black leading-[0.9] mb-6 tracking-tighter">
              CRAVINGS? <br/>
              <span className="text-brand-red">SOLVED.</span><br/>INSTANTLY.
            </h1>
            <p className="text-xl font-medium mb-10 text-slate-500 max-w-md">
              Hot, fresh, and ready when you are. Order now for pickup or delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/checkout" 
                className="bg-brand-red hover:bg-brand-red-dark text-white text-xl font-black py-5 px-10 rounded-2xl flex items-center justify-center gap-3 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-red-200"
              >
                ORDER NOW <ArrowRight size={20} />
              </Link>
              <Link 
                to="/menu" 
                className="bg-white hover:bg-slate-50 border-2 border-slate-200 text-slate-800 text-xl font-black py-5 px-10 rounded-2xl flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95"
              >
                VIEW MENU
              </Link>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="hidden md:block relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Signature Burger" 
              className="w-full max-w-lg mx-auto drop-shadow-2xl rounded-full border-[16px] border-white object-cover aspect-square"
            />
            {/* Floating badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 -rotate-6"
            >
              <div className="bg-brand-yellow p-2 rounded-xl text-black">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold uppercase">Average Time</p>
                <p className="text-xl font-black font-display text-black">15 Mins</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 2. Quick Order Bar */}
      <section className="bg-white/90 backdrop-blur-md relative z-20 py-4 h-auto md:h-20 -mt-6 mx-4 md:mx-auto md:w-[90%] max-w-5xl rounded-3xl shadow-2xl border border-white/50 px-8 flex items-center justify-between">
        <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-between">
          <div className="flex flex-col items-start w-full md:w-auto">
            <span className="text-[10px] font-bold text-slate-400 uppercase hidden md:block">Method</span>
            <div className="flex bg-slate-100 rounded-lg p-1 mt-1 w-full md:w-auto">
              <button className="flex-1 px-4 py-1 bg-white rounded-md shadow-sm text-xs font-bold text-slate-900">Delivery</button>
              <button className="flex-1 px-4 py-1 text-xs font-bold text-slate-500">Pickup</button>
            </div>
          </div>
          <div className="hidden md:block h-10 w-[1px] bg-slate-200"></div>
          <div className="w-full md:w-auto flex-1 max-w-md flex flex-col items-start">
            <span className="text-[10px] font-bold text-slate-400 uppercase hidden md:block">Fast Find</span>
            <div className="relative w-full mt-1">
              <input 
                type="text" 
                className="w-full py-1.5 bg-transparent font-bold text-sm outline-none" 
                placeholder="Search for burgers, chicken..." 
              />
            </div>
          </div>
          <div className="flex items-center gap-4 mt-2 md:mt-0 w-full md:w-auto justify-end">
            <div className="text-right hidden sm:block">
              <div className="text-[10px] font-bold text-slate-400 uppercase">ETA</div>
              <div className="font-black text-brand-red tracking-tight">18-24 MINS</div>
            </div>
            <Link to="/menu" className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center text-white text-xl hover:bg-brand-red-dark transition-colors shrink-0">
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Best Sellers */}
      <section className="py-20 bg-brand-black">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-black tracking-tight mb-2 text-white italic">FAN FAVORITES</h2>
              <div className="w-16 h-1 lg:h-2 bg-brand-yellow mt-2"></div>
            </div>
            <Link to="/menu" className="hidden md:flex items-center gap-2 font-bold text-brand-yellow hover:underline text-sm tracking-widest uppercase">
              See full menu <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Double Fast Classic", desc: "Two beef patties, special sauce, cheese.", price: "₱195", img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80" },
              { name: "Spicy Chicken Crunch", desc: "Crispy chicken breast, spicy mayo, pickles.", price: "₱175", img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=500&q=80" },
              { name: "Loaded Fries", desc: "Golden fries topped with cheese and bacon.", price: "₱120", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80" },
              { name: "Mega Meal Deal", desc: "Classic burger, regular fries, large drink.", price: "₱250", img: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=500&q=80" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 flex flex-col group cursor-pointer"
              >
                <div className="h-48 relative overflow-hidden bg-black/20 flex items-center justify-center p-4">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 opacity-90" />
                  <div className="absolute top-4 right-4 bg-brand-black/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 border border-white/10 text-white">
                    <Star size={12} className="text-brand-yellow fill-brand-yellow" />
                    4.9
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="font-display font-bold text-lg mb-1 text-white">{item.name}</h3>
                  <p className="text-slate-400 text-xs mb-4 line-clamp-2">{item.desc}</p>
                  <div className="mt-auto flex justify-between items-center">
                    <span className="font-black text-xl text-brand-yellow">{item.price}</span>
                    <button className="bg-brand-red text-white text-[10px] font-bold px-3 py-1.5 rounded uppercase tracking-wider hover:bg-brand-red-dark transition-colors">
                      + Add
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-8 text-center md:hidden">
            <Link to="/menu" className="inline-flex items-center gap-2 font-bold text-brand-black bg-brand-yellow px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow uppercase text-sm tracking-widest">
              See full menu <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Value / Limited Time Deals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-tr from-brand-red-dark to-brand-red text-white rounded-3xl overflow-hidden relative flex flex-col justify-center p-8 lg:p-12 min-h-[350px] shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
              <div className="relative z-10 w-full md:w-2/3">
                <span className="bg-brand-yellow text-brand-black font-black uppercase tracking-widest text-xs px-3 py-1 rounded-md mb-4 inline-block">Limited Time</span>
                <h3 className="font-display font-black text-4xl lg:text-5xl mb-4 leading-[0.9] tracking-tighter">Family Bundle Box</h3>
                <p className="text-white/80 font-medium mb-6 text-lg">4 Burgers, 2 Large Fries, 4 Drinks. The perfect feast.</p>
                <div className="flex items-center gap-4 mb-6 relative z-20">
                  <span className="text-4xl font-black text-brand-yellow">₱599</span>
                  <span className="text-lg line-through text-white/50 font-bold">₱850</span>
                </div>
                <Link to="/deals" className="inline-block bg-brand-yellow text-black font-black py-4 px-8 rounded-2xl hover:scale-105 transition-transform text-center shadow-lg relative z-20">
                  Grab the Deal
                </Link>
              </div>
            </div>

            <div className="bg-brand-yellow rounded-3xl overflow-hidden relative flex flex-col justify-center p-8 lg:p-12 min-h-[350px] shadow-2xl">
              <div className="relative z-10 w-full md:w-2/3">
                <span className="bg-brand-black text-white font-black uppercase tracking-widest text-xs px-3 py-1 rounded-md mb-4 inline-block">App Exclusive</span>
                <h3 className="font-display font-black text-4xl lg:text-5xl mb-4 leading-[0.9] tracking-tighter text-black">Free Fries Friday</h3>
                <p className="text-black/70 font-medium mb-6 text-lg">Get a free medium fries with any burger purchase on Fridays.</p>
                <Link to="/app" className="inline-block bg-black text-white font-black py-4 px-8 rounded-2xl hover:scale-105 transition-transform text-center mt-auto shadow-xl">
                  Download App
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA App Download */}
      <section className="bg-brand-black text-white py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <h2 className="font-display font-black text-5xl lg:text-7xl mb-6 leading-[0.9] tracking-tighter">ORDER FASTER. <br/><span className="text-brand-yellow">EARN REWARDS.</span></h2>
            <ul className="space-y-4 mb-8 text-lg font-bold text-slate-300">
              <li className="flex items-center gap-3">
                <div className="bg-brand-red p-1 rounded-md"><Star size={16} className="text-white" /></div>
                Earn points on every order
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-brand-red p-1 rounded-md"><Star size={16} className="text-white" /></div>
                Exclusive app-only deals
              </li>
              <li className="flex items-center gap-3">
                <div className="bg-brand-red p-1 rounded-md"><Star size={16} className="text-white" /></div>
                Skip the line & pick up at the counter
              </li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#" className="bg-white text-black pl-4 pr-6 py-3 rounded-2xl flex items-center gap-3 hover:bg-slate-100 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg" alt="App Store" className="w-8 h-8" />
                <div className="flex flex-col items-start leading-tight">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Download on the</span>
                  <span className="text-lg font-black">App Store</span>
                </div>
              </a>
              <a href="#" className="bg-white text-black pl-4 pr-6 py-3 rounded-2xl flex items-center gap-3 hover:bg-slate-100 transition-colors">
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-8" />
              </a>
            </div>
          </div>
          <div className="flex justify-center md:justify-end relative">
            <div className="w-64 h-[500px] border-[12px] border-slate-800 rounded-[3rem] bg-white overflow-hidden shadow-2xl relative shadow-red-500/20 rotate-12 transform-gpu">
                {/* Mockup screen */}
                <div className="w-full h-full bg-brand-gray relative flex flex-col">
                  <div className="bg-brand-red p-4 pb-6 rounded-b-[2rem] text-white">
                    <p className="font-black text-2xl font-display tracking-tighter">FastBite</p>
                    <p className="opacity-80 text-sm font-bold">Welcome back, John!</p>
                  </div>
                  <div className="flex-1 p-4">
                    <div className="w-full bg-white h-24 rounded-2xl shadow-sm mb-4 border border-slate-100"></div>
                    <div className="w-full bg-white h-24 rounded-2xl shadow-sm mb-4 border border-slate-100"></div>
                    <div className="w-full bg-white h-24 rounded-2xl shadow-sm mb-4 border border-slate-100"></div>
                  </div>
                </div>
            </div>
            <div className="absolute inset-0 bg-brand-red/20 blur-[100px] -z-10 rounded-full"></div>
          </div>
        </div>
        {/* Trust Bar */}
        <div className="absolute bottom-0 left-0 right-0 h-10 bg-brand-red text-white flex items-center justify-center gap-4 sm:gap-12 text-[10px] font-black tracking-widest overflow-hidden whitespace-nowrap">
          <span>⭐ 4.9/5 USER RATING</span>
          <span className="hidden sm:inline">⚡ LIGHTNING FAST DELIVERY</span>
          <span className="hidden md:inline">🛡️ CONTACTLESS PICKUP</span>
          <span className="hidden lg:inline">💎 EXCLUSIVE APP REWARDS</span>
        </div>
      </section>
    </div>
  );
}
