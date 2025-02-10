"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input, Textarea } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name can't exceed 50 characters"),
  email: z.string().email("Invalid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message can't exceed 500 characters"),
});

type FormInput = z.infer<typeof contactSchema>;

export default function ContactForm() {
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormInput>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(formData: FormInput) {
    setError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("We got your lead. We will get back to you soon!");
        reset();
      } else {
        setError("Failed to submit form. Try again!");
        console.error("Failed to submit form");
      }
    } catch (error: any) {
      setError("Error submitting the form. Try again!");
      console.error("Error submitting the form:", error);
    }
  }

  return (
    <div className="w-full mx-auto rounded-xl p-5 md:p-8 shadow-input bg-neutral-800 text-foreground">
      <form className="my-2 space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <LabelInputContainer>
          <Label htmlFor="name">Your Name</Label>
          <Input
            {...register("name")}
            id="name"
            placeholder="Tyler Durden"
            type="text"
          />
          {errors.name && (
            <p className="text-sm text-red-600">{errors.name.message}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            {...register("email")}
            id="email"
            placeholder="projectmayhem@fc.com"
            type="email"
          />
          {errors.email && (
            <p className="text-sm text-red-600">{errors.email.message}</p>
          )}
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <Textarea
            {...register("message")}
            id="message"
            placeholder="Hi... Want to meet"
          />
          {errors.message && (
            <p className="text-sm text-red-600">{errors.message.message}</p>
          )}
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-bgSecondary border border-borderColor border-opacity-50 hover:border-none w-44 sm:w-56 text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "CONNECT"}
          <BottomGradient />
        </button>
      </form>
      <p className="text-sm font-medium text-left text-red-600 h-4 my-0">
        {error && error}
      </p>
      <p className="text-sm font-medium text-left text-green-600 h-4 my-0">
        {successMessage && successMessage}
      </p>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-[3px] w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-primary to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-[3px] w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col w-full space-y-3", className)}>
      {children}
    </div>
  );
};
