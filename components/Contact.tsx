import { motion, AnimatePresence } from 'framer-motion';
import { usePopup } from '../context/PopUpContext';

export default function GlobalPopup() {
  const { isOpen, closePopup } = usePopup();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-4">Featured Property</h2>
            <p className="mb-4">
              Discover our exclusive listings in premium locations. Contact us for more details and schedule a viewing!
            </p>
            <div className="flex justify-end">
              <button
                onClick={closePopup}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
