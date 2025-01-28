import ContactForm from "@/components/ContactForm";
import React from "react";

export default function page() {
  return (
    <section
      id="services"
      className="w-full space-y-5 py-16 px-5 md:px-16 bg-bgSecondary mt-14"
    >
      {/* Large Header */}
      <div className="text-center mx-auto text-foreground">
        <h2 className="text-4xl font-extrabold">Contect Us</h2>
      </div>

      <div className="w-11/12 h-full relative m-auto">
        <div className="sm:p-10 md:p-16  sm:bg-bgPrimary text-white md:text-white flex max-lg:flex-col justify-center items-start gap-10 rounded-lg">
          <div className="lg:w-10/12 space-y-5 text-center lg:text-left">
            <h3 className="text-3xl md:text-4xl font-bold">
              Let's discuss your project
            </h3>
            <p className="text-lg">
              We are here to help and answer any question you might have. We
              look forward to hearing from you :)
            </p>
            <p className="font-semibold text-xl max-lg:hidden">
              Connect with us :)
            </p>
          </div>
          <div className="w-full">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
