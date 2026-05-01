import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronLeft, Plus, Minus, Info } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("medium");

  // In a real app, fetch based on ID.
  const product = {
    id: 1, 
    name: "Double Fast Classic", 
    category: "Burgers", 
    desc: "Two 100% flame-grilled beef patties, special signature sauce, melted cheese, crisp lettuce, and fresh tomatoes on a toasted sesame seed bun.", 
    price: 195, 
    img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=1000&q=80",
    cals: 650,
  };

  return (
    <div className="bg-white min-h-screen pb-32">
      <div className="container mx-auto max-w-6xl">
        <div className="pt-6 px-4 mb-2">
           <Link to="/menu" className="inline-flex items-center text-gray-500 hover:text-brand-red font-bold transition-colors">
            <ChevronLeft size={20} /> Back to Menu
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-start px-4 py-8">
          
          {/* Image */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 aspect-square flex items-center justify-center relative shadow-inner">
             {/* Decorative element */}
             <div className="absolute inset-0 bg-brand-red/5 rounded-3xl"></div>
             <img 
               src={product.img} 
               alt={product.name} 
               className="w-full max-w-md object-contain mix-blend-multiply drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500" 
             />
          </div>

          {/* Details & Customization */}
          <div className="flex flex-col h-full justify-center">
             <div className="flex justify-between items-start mb-2">
                <div>
                   <span className="text-brand-red font-bold uppercase tracking-wider text-sm bg-red-50 px-2 py-1 rounded inline-block mb-3">{product.category}</span>
                   <h1 className="font-display font-black text-4xl lg:text-5xl tracking-tight leading-none mb-4">{product.name}</h1>
                </div>
                <div className="font-display font-black text-3xl lg:text-4xl text-brand-black">₱{product.price}</div>
             </div>
             
             <p className="text-gray-600 text-lg mb-4 leading-relaxed font-medium">
               {product.desc}
             </p>
             
             <div className="flex items-center gap-2 text-sm font-bold text-gray-400 mb-8 border-b border-gray-100 pb-8">
                <Info size={16} /> {product.cals} Calories • Contains Dairy, Gluten
             </div>

             {/* Customization */}
             <div className="space-y-6 mb-8">
               <div>
                  <h3 className="font-display font-bold text-xl mb-3 flex justify-between">Make it a Meal? <span className="text-brand-red text-sm">+₱80</span></h3>
                  <div className="grid grid-cols-2 gap-3">
                     <button className="border-2 border-brand-red bg-red-50 text-brand-red font-bold rounded-xl py-3 px-4 text-center">
                        Yes, add Fries & Drink
                     </button>
                     <button className="border border-gray-200 text-gray-600 font-bold rounded-xl py-3 px-4 text-center hover:bg-gray-50">
                        No, sandwich only
                     </button>
                  </div>
               </div>

               <div>
                  <h3 className="font-display font-bold text-xl mb-3">Size</h3>
                  <div className="grid grid-cols-3 gap-3">
                     <button onClick={() => setSize('small')} className={`border rounded-xl py-2 font-bold transition-all ${size==='small' ? 'border-brand-black bg-brand-black text-white' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>Small</button>
                     <button onClick={() => setSize('medium')} className={`border rounded-xl py-2 font-bold transition-all ${size==='medium' ? 'border-brand-black bg-brand-black text-white' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>Medium</button>
                     <button onClick={() => setSize('large')} className={`border rounded-xl py-2 font-bold transition-all ${size==='large' ? 'border-brand-black bg-brand-black text-white' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}>Large <span className="text-xs opacity-75">+₱20</span></button>
                  </div>
               </div>
             </div>

             {/* Actions */}
             <div className="md:mt-auto pt-6 border-t border-gray-100 flex gap-4 items-center">
                <div className="flex items-center justify-between bg-gray-100 rounded-xl p-1 w-32 border border-gray-200">
                   <button 
                     onClick={() => setQty(Math.max(1, qty - 1))}
                     className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold text-gray-600 hover:text-brand-black"
                   >
                     <Minus size={18} />
                   </button>
                   <span className="font-bold text-lg">{qty}</span>
                   <button 
                     onClick={() => setQty(qty + 1)}
                     className="w-10 h-10 flex items-center justify-center bg-white rounded-lg shadow-sm font-bold text-gray-600 hover:text-brand-black"
                   >
                     <Plus size={18} />
                   </button>
                </div>
                
                <Link to="/checkout" className="flex-1 bg-brand-yellow hover:bg-brand-yellow-dark text-black font-bold text-lg py-4 px-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all flex justify-between items-center px-6">
                   <span>Add to Cart</span>
                   <span>₱{(product.price * qty) + (size === 'large' ? 20 * qty : 0)}</span>
                </Link>
             </div>
          </div>

        </div>
      </div>
      
      {/* Mobile Sticky Add to Cart */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] md:hidden z-50">
         <div className="flex gap-3">
           <Link to="/checkout" className="flex-1 bg-brand-red text-white font-bold text-lg py-3 px-6 rounded-xl text-center shadow-lg hover:bg-brand-red-dark transition-colors flex justify-between items-center">
              <span>Add to Cart</span>
              <span>₱{(product.price * qty) + (size === 'large' ? 20 * qty : 0)}</span>
           </Link>
         </div>
      </div>
    </div>
  );
}
