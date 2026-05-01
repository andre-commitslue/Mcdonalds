import { useState } from "react";
import { Search, ShoppingBag, SlidersHorizontal, Star } from "lucide-react";
import { motion } from "motion/react";

const CATEGORIES = ["All", "Burgers", "Chicken", "Sides", "Drinks", "Desserts"];

const MENU_ITEMS = [
  { id: 1, name: "Double Fast Classic", category: "Burgers", desc: "Two beef patties, special sauce, cheese.", price: 195, img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=500&q=80", rating: 4.9, popular: true },
  { id: 2, name: "Spicy Chicken Crunch", category: "Chicken", desc: "Crispy chicken breast, spicy mayo, pickles.", price: 175, img: "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=500&q=80", rating: 4.8, popular: true },
  { id: 3, name: "Loaded Fries", category: "Sides", desc: "Golden fries topped with cheese and bacon.", price: 120, img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=500&q=80", rating: 4.7, popular: true },
  { id: 4, name: "Mega Meal Deal", category: "Burgers", desc: "Classic burger, regular fries, large drink.", price: 250, img: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?auto=format&fit=crop&w=500&q=80", rating: 4.9, popular: true },
  { id: 5, name: "Cheeseburger Deluxe", category: "Burgers", desc: "Single patty, double cheese, fresh veggies.", price: 140, img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=500&q=80", rating: 4.5, popular: false },
  { id: 6, name: "6pc Chicken Nuggets", category: "Chicken", desc: "Golden crispy chicken blocks with dip.", price: 110, img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=500&q=80", rating: 4.6, popular: false },
  { id: 7, name: "Onion Rings", category: "Sides", desc: "Crispy battered onion rings.", price: 85, img: "https://images.unsplash.com/photo-1639024470081-ce0f622416f4?auto=format&fit=crop&w=500&q=80", rating: 4.4, popular: false },
  { id: 8, name: "Vanilla Milkshake", category: "Drinks", desc: "Thick and creamy real dairy shake.", price: 130, img: "https://images.unsplash.com/photo-1572490122747-3968b75c8115?auto=format&fit=crop&w=500&q=80", rating: 4.8, popular: false },
  { id: 9, name: "Classic Cola", category: "Drinks", desc: "Ice cold fountain drink.", price: 55, img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=500&q=80", rating: 4.2, popular: false },
  { id: 10, name: "Chocolate Sundae", category: "Desserts", desc: "Vanilla soft serve with hot fudge.", price: 75, img: "https://images.unsplash.com/photo-1553177595-4de6bb080e5b?auto=format&fit=crop&w=500&q=80", rating: 4.7, popular: true },
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredMenu = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === "All" || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-brand-gray min-h-screen pb-20">
      {/* Menu Header & Search */}
      <div className="bg-white sticky top-[64px] sm:top-[80px] z-30 shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h1 className="font-display font-black text-3xl sm:text-4xl">Our Menu</h1>
            
            <div className="flex gap-2 w-full md:w-auto">
              <div className="relative flex-1 md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2.5 border border-gray-200 bg-gray-50 rounded-lg focus:ring-2 focus:ring-brand-red outline-none text-sm font-medium" 
                  placeholder="Search cravings..." 
                />
              </div>
              <button className="flex items-center justify-center p-2.5 bg-gray-100 hover:bg-gray-200 rounded-lg border border-gray-200 text-brand-black transition-colors md:px-4">
                <SlidersHorizontal size={20} className="md:mr-2" />
                <span className="hidden md:inline font-bold text-sm">Filters</span>
              </button>
            </div>
          </div>

          {/* Categories Tab Bar */}
          <div className="flex overflow-x-auto hide-scrollbar mt-6 border-b text-sm font-bold w-full relative">
            {CATEGORIES.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 sm:px-6 py-3 whitespace-nowrap border-b-2 transition-colors duration-200 ${
                  activeCategory === category 
                    ? "border-brand-red text-brand-red" 
                    : "border-transparent text-gray-500 hover:text-brand-black hover:border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="container mx-auto px-4 pt-8">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="font-display font-bold text-2xl">{activeCategory}</h2>
          <span className="text-gray-500 font-medium text-sm">{filteredMenu.length} results</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredMenu.map((item, index) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group cursor-pointer border border-transparent hover:border-gray-100"
            >
              <div className="h-48 relative overflow-hidden bg-gray-50 flex items-center justify-center p-4">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500" />
                
                {item.popular && (
                  <div className="absolute top-3 left-3 bg-brand-red text-white text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded">
                    Popular
                  </div>
                )}
                
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-bold flex items-center gap-1 shadow-sm">
                  <Star size={12} className="text-brand-yellow fill-brand-yellow" />
                  {item.rating}
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-display font-bold text-lg leading-tight w-3/4">{item.name}</h3>
                  <span className="font-bold text-lg text-brand-red">₱{item.price}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.desc}</p>
                
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <button className="w-full bg-white hover:bg-brand-red text-brand-black hover:text-white border-2 border-brand-red hover:border-transparent font-bold py-2 px-4 rounded-xl flex items-center justify-center gap-2 transition-colors">
                    <ShoppingBag size={18} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredMenu.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">No items found for "{searchQuery}" in {activeCategory}.</p>
            <button 
              onClick={() => {setSearchQuery(""); setActiveCategory("All");}}
              className="text-brand-red font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
