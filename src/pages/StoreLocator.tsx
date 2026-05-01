import { useState } from "react";
import { MapPin, Search, Navigation, Phone, Clock } from "lucide-react";
import { motion } from "motion/react";

const STORES = [
  { id: 1, name: "FastBite Downtown", address: "123 Main St, Metro Center", distance: "0.8 km", status: "Open Now", hours: "24 Hours", type: "Drive-Thru" },
  { id: 2, name: "FastBite Mall Plaza", address: "Lvl 2, Grand Mall, Westside", distance: "2.4 km", status: "Open Now", hours: "10AM - 10PM", type: "Dine-In Only" },
  { id: 3, name: "FastBite Northside", address: "450 North Ave, Suburbia", distance: "5.1 km", status: "Closed", hours: "6AM - 12AM", type: "Drive-Thru" },
];

export default function StoreLocator() {
  const [activeStore, setActiveStore] = useState(STORES[0].id);

  return (
    <div className="bg-brand-gray min-h-[calc(100vh-64px)] flex flex-col md:flex-row">
      {/* Sidebar List */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-white shadow-lg z-10 flex flex-col h-[calc(100vh-64px)] md:h-[calc(100vh-80px)]">
         <div className="p-6 border-b border-gray-100">
           <h1 className="font-display font-black text-3xl mb-4">Find a Store</h1>
           <div className="relative mb-2">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input 
                type="text" 
                 className="block w-full pl-10 pr-3 py-3 border border-gray-200 bg-gray-50 rounded-xl focus:ring-2 focus:ring-brand-red outline-none text-sm font-bold" 
                placeholder="City, zip, or neighborhood" 
              />
            </div>
            <button className="flex items-center gap-2 text-brand-red font-bold text-sm hover:underline">
               <Navigation size={16} /> Use my current location
            </button>
         </div>

         <div className="flex-1 overflow-y-auto w-full">
            {STORES.map((store) => (
               <div 
                  key={store.id} 
                  onClick={() => setActiveStore(store.id)}
                  className={`p-6 border-b border-gray-100 cursor-pointer transition-colors w-full ${activeStore === store.id ? 'bg-red-50 border-l-4 border-l-brand-red' : 'hover:bg-gray-50 border-l-4 border-l-transparent'}`}
               >
                 <div className="flex justify-between items-start mb-2">
                    <h3 className="font-display font-bold text-lg leading-tight">{store.name}</h3>
                    <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">{store.distance}</span>
                 </div>
                 <p className="text-gray-600 text-sm mb-3 font-medium">{store.address}</p>
                 <div className="flex items-center gap-3 text-xs font-bold mb-3">
                    <span className={store.status === "Open Now" ? "text-green-600" : "text-brand-red"}>{store.status}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-600 flex items-center gap-1"><Clock size={12}/> {store.hours}</span>
                 </div>
                 <div className="flex gap-2 mt-4">
                    <button className="flex-1 bg-brand-yellow hover:bg-brand-yellow-dark text-black font-bold py-2 rounded-lg text-sm transition-colors">Order Here</button>
                    <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-brand-black p-2 rounded-lg transition-colors"><Navigation size={18}/></button>
                 </div>
               </div>
            ))}
         </div>
      </div>

      {/* Map Area */}
      <div className="flex-1 bg-gray-200 relative min-h-[400px]">
         {/* Simplified Map Background */}
         <div className="absolute inset-0 bg-[#e5e3df] overflow-hidden">
            {/* Fake map texture/routes */}
            <div className="w-full h-full opacity-30" style={{ backgroundImage: "radial-gradient(#000000 1px, transparent 1px)", backgroundSize: "30px 30px"}}></div>
            
            <div className="absolute inset-0 flex items-center justify-center flex-col">
               <MapPin size={48} className="text-brand-red animate-bounce" />
               <div className="bg-white px-4 py-2 rounded-xl shadow-lg font-bold text-sm mt-2 border-2 border-brand-red">
                 Interactive Map Integration
               </div>
               <p className="text-gray-500 font-medium text-sm mt-4 text-center max-w-xs">In a real app, Google Maps or Mapbox would render here.</p>
            </div>
         </div>

         {/* Mobile View Active Store Overlay */}
         <div className="absolute bottom-0 left-0 right-0 p-4 md:hidden z-20">
            <motion.div 
               initial={{ y: 100, opacity: 0 }}
               animate={{ y: 0, opacity: 1 }}
               className="bg-white rounded-2xl shadow-2xl p-4 border border-gray-100"
            >
               {(() => {
                 const store = STORES.find(s => s.id === activeStore);
                 if(!store) return null;
                 return (
                  <>
                     <div className="flex justify-between items-start mb-2">
                        <h3 className="font-display font-bold text-lg">{store.name}</h3>
                        <span className="text-xs font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded">{store.distance}</span>
                     </div>
                     <p className="text-gray-600 text-sm mb-3 font-medium">{store.address}</p>
                     <div className="flex gap-2">
                        <button className="flex-1 bg-brand-yellow text-black font-bold py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2 shadow-sm">
                           Order Here
                        </button>
                        <button className="w-12 h-12 flex items-center justify-center bg-gray-100 text-brand-black rounded-xl transition-colors shrink-0">
                           <Navigation size={20}/>
                        </button>
                     </div>
                  </>
                 )
               })()}
            </motion.div>
         </div>
      </div>
    </div>
  );
}
