import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartDrawer() {
  const { cart, updateQuantity, removeItem, subtotal, totalItems, isCartOpen, setIsCartOpen } = useCart();

  const checkoutViaWhatsApp = () => {
    const phoneNumber = '60143322893';
    const message = `Hi Ananaz! I'd like to order:\n\n${cart.map((item, index) => `${index + 1}. ${item.name} - ${item.quantity}`).join('\n')}\nTotal = RM${subtotal}`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-[100]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-cream z-[101] flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="p-6 border-b border-divider flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag size={20} className="text-gold" />
                <h2 className="font-display text-xl font-semibold text-dark">Your Cart ({totalItems})</h2>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="w-10 h-10 border border-divider flex items-center justify-center hover:border-gold hover:text-gold transition-all"
              >
                <X size={18} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 bg-divider rounded-full flex items-center justify-center">
                    <ShoppingBag size={24} className="text-muted" />
                  </div>
                  <p className="font-body text-sm text-muted">Your cart is empty</p>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="font-body text-xs font-bold uppercase tracking-widest text-gold hover:text-dark transition-colors"
                  >
                    Continue Shopping
                  </button>
                </div>
              ) : (
                cart.map(item => (
                  <div key={item.id} className="flex gap-4 border-b border-divider pb-6">
                    <div className="w-20 h-20 bg-divider rounded flex-shrink-0" />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-body text-sm font-semibold text-dark truncate">{item.name}</h3>
                      <p className="font-display text-base text-gold mt-1">{item.price}</p>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-divider">
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:text-gold transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 text-center font-body text-xs font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:text-gold transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-muted hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-divider bg-off-white">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-body text-sm text-muted uppercase tracking-widest">Subtotal</span>
                  <span className="font-display text-2xl font-semibold text-dark">RM{subtotal}</span>
                </div>
                <button
                  onClick={checkoutViaWhatsApp}
                  className="w-full btn-premium btn-premium-solid py-4 text-xs tracking-widest uppercase font-bold flex items-center justify-center gap-2"
                >
                  Checkout via WhatsApp <ShoppingBag size={14} />
                </button>
                <p className="text-[10px] text-muted text-center mt-4 font-body">
                  Shipping and taxes calculated at checkout.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
