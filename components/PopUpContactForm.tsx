"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import ContactForm from "./ContactForm";
import { IconX } from "@tabler/icons-react";
import { useGlobalContext } from "@/context/GlobalContext";

const GlobalPopup: React.FC = () => {
  const { isPopUpOpen, closePopup } = useGlobalContext();

  return (
    <AnimatePresence>
      {isPopUpOpen && (
        <motion.section
          className="fixed inset-0 z-30 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={closePopup} // Close popup on background click
        >
          <div
            className="w-10 h-10 absolute right-10 top-10 flex justify-center items-center cursor-pointer"
            onClick={closePopup}
          >
            <IconX className="text-white" size={35} />
          </div>
          <motion.div
            id="services"
            className="z-40 space-y-5 py-10"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={(e) => e.stopPropagation()} // Clicking here does NOT trigger the background's onClick
          >
            <div className="w-11/12  bg-background rounded-xl h-full relative m-auto">
              <div className="sm:p-10 text-foreground flex flex-col justify-center items-start gap-5 rounded-lg">
                <div className="space-y-5 text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-bold">
                    Let's discuss your project
                  </h3>
                  <p className="text-lg">
                    We are here to help and answer any question you might have.
                    We look forward to hearing from you.
                  </p>
                </div>
                <div className="w-full">
                  <ContactForm />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default GlobalPopup;
