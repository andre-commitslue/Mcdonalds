import { useState } from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, MapPin, CreditCard, ShoppingBag, ChevronLeft } from "lucide-react";

export default function Checkout() {
  const [step, setStep] = useState(1);

  // Mock cart
  const cart = [
    { id: 1, name: "Double Fast Classic", qty: 2, price: 195 },
    { id: 3, name: "Loaded Fries", qty: 1, price: 120 },
  ];
  
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const fee = 49;
  const total = subtotal + fee;

  return (
    <div className="bg-brand-gray min-h-screen pb-20 pt-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <Link to="/menu" className="inline-flex items-center text-gray-500 hover:text-brand-black font-medium transition-colors">
            <ChevronLeft size={20} /> Back to Menu
          </Link>
          <h1 className="font-display font-black text-4xl mt-4">Checkout</h1>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Checkout Flow */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Step 1: Order Details */}
            <div className={`bg-white rounded-3xl p-6 md:p-8 shadow-sm border-2 ${step === 1 ? 'border-brand-black' : 'border-transparent'}`}>
              <div className="flex justify-between items-center mb-6">
                 <h2 className="font-display font-black text-2xl flex items-center gap-3 tracking-tighter">
                   <div className="w-8 h-8 rounded-xl bg-brand-red text-white flex items-center justify-center text-sm font-black">1</div>
                   Delivery Details
                 </h2>
                 {step > 1 && (
                   <button onClick={() => setStep(1)} className="text-brand-red font-black text-sm uppercase tracking-widest">Edit</button>
                 )}
              </div>
              
              {step === 1 ? (
                <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="flex bg-gray-100 rounded-xl p-1 mb-6 w-full max-w-sm">
                    <button className="flex-1 py-2 bg-white rounded-lg shadow-sm font-bold border border-gray-200">Delivery</button>
                    <button className="flex-1 py-2 text-gray-500 font-bold hover:text-brand-black">Pickup</button>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="md:col-span-2 relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <MapPin size={20} className="text-gray-400" />
                      </div>
                      <input type="text" placeholder="Delivery Address" className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:bg-white outline-none font-medium" defaultValue="123 Burger St, Food City" />
                    </div>
                    <div>
                      <input type="text" placeholder="First Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:bg-white outline-none font-medium" />
                    </div>
                    <div>
                      <input type="text" placeholder="Last Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:bg-white outline-none font-medium" />
                    </div>
                     <div className="md:col-span-2">
                      <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red focus:bg-white outline-none font-medium" />
                    </div>
                  </div>
                  <button 
                    onClick={() => setStep(2)}
                    className="w-full mt-6 bg-brand-black text-white font-black py-4 rounded-2xl hover:bg-gray-800 transition-colors shadow-lg uppercase tracking-widest text-sm"
                  >
                    Continue to Payment
                  </button>
                </div>
              ) : (
                <div className="text-gray-600 font-medium pb-2">
                   <p className="flex items-center gap-2 mb-1"><MapPin size={16} /> 123 Burger St, Food City</p>
                   <p className="pl-6 text-sm">John Doe • 555-0192</p>
                </div>
              )}
            </div>

            {/* Step 2: Payment */}
             <div className={`bg-white rounded-3xl p-6 md:p-8 shadow-sm border-2 ${step === 2 ? 'border-brand-black' : 'border-transparent'}`}>
              <div className="flex justify-between items-center mb-6">
                 <h2 className="font-display font-black text-2xl flex items-center gap-3 tracking-tighter">
                   <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black ${step === 2 ? 'bg-brand-red text-white' : 'bg-slate-200 text-slate-500'}`}>2</div>
                   Payment
                 </h2>
              </div>
              
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                    <button className="border-2 border-brand-red bg-red-50 text-brand-red font-bold rounded-xl p-4 flex flex-col items-center gap-2">
                      <CreditCard size={24} />
                      Card
                    </button>
                     <button className="border border-gray-200 hover:border-brand-black text-gray-600 font-bold rounded-xl p-4 flex flex-col items-center gap-2 transition-colors">
                      <span className="font-display font-black text-xl italic tracking-tighter">eWallet</span>
                       Gcash / PayMaya
                    </button>
                     <button className="border border-gray-200 hover:border-brand-black text-gray-600 font-bold rounded-xl p-4 flex flex-col items-center gap-2 transition-colors col-span-2 lg:col-span-1">
                       <ShoppingBag size={24} />
                      Cash
                    </button>
                  </div>
                  
                  <div className="space-y-4">
                     <input type="text" placeholder="Card Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red outline-none font-medium" />
                     <div className="grid grid-cols-2 gap-4">
                        <input type="text" placeholder="MM/YY" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red outline-none font-medium" />
                        <input type="text" placeholder="CVV" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-red outline-none font-medium" />
                     </div>
                  </div>

                  <button 
                    onClick={() => setStep(3)}
                    className="w-full mt-8 bg-brand-red hover:bg-brand-red-dark text-white font-black py-5 rounded-2xl transition-colors shadow-xl shadow-red-200 flex items-center justify-center gap-2 text-xl tracking-tighter"
                  >
                    <ShieldCheck size={24} />
                    PLACE ORDER • ₱{total}
                  </button>
                  <p className="text-center text-xs text-gray-400 font-medium">Payments are secure and encrypted.</p>
                </div>
              )}
            </div>

          </div>

          {/* Cart Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm sticky top-28">
              <h2 className="font-display font-bold text-2xl mb-6 border-b border-gray-100 pb-4">Your Order</h2>
              
              <div className="space-y-4 mb-6 max-h-[40vh] overflow-y-auto pr-2">
                {cart.map(item => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex gap-3">
                      <div className="bg-gray-100 w-8 h-8 rounded text-sm font-bold flex items-center justify-center shrink-0">
                        {item.qty}x
                      </div>
                      <div>
                        <p className="font-bold leading-tight">{item.name}</p>
                        <p className="text-sm text-brand-red cursor-pointer font-medium hover:underline mt-1">Edit</p>
                      </div>
                    </div>
                    <span className="font-bold shrink-0">₱{item.price * item.qty}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 pt-6 space-y-3 font-medium text-gray-600">
                 <div className="flex justify-between">
                   <span>Subtotal</span>
                   <span>₱{subtotal}</span>
                 </div>
                 <div className="flex justify-between">
                   <span>Delivery Fee</span>
                   <span>₱{fee}</span>
                 </div>
                 <div className="flex justify-between border-t border-gray-100 pt-4 mt-2 mb-2">
                   <span className="font-display font-black text-2xl text-brand-black">Total</span>
                   <span className="font-display font-black text-2xl text-brand-red">₱{total}</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Success State Overlay (Simplistic) */}
        {step === 3 && (
          <div className="fixed inset-0 bg-brand-red z-50 flex flex-col items-center justify-center text-white px-4">
             <div className="bg-white text-brand-black rounded-full w-24 h-24 flex items-center justify-center mb-8 shrink-0">
               <ShoppingBag size={48} className="text-brand-red" />
             </div>
             <h1 className="font-display font-black text-5xl md:text-6xl mb-4 text-center">ORDER PLACED!</h1>
             <p className="font-display text-2xl mb-8 opacity-90">Order #FB-8924</p>
             <p className="text-xl max-w-md text-center opacity-90 font-medium mb-10">We're getting your food ready. You can track your order in the app or via SMS link.</p>
             <Link to="/" className="bg-brand-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors">
               Back to Home
             </Link>
          </div>
        )}

      </div>
    </div>
  );
}
