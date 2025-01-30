"use client";

import { useForm } from "react-hook-form";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 py-10 text-white px-6">
      <h1 className="text-4xl md:text-6xl font-bold">Contact Me</h1>
      <p className="text-lg text-gray-300 mt-4 max-w-2xl text-center">
        Feel free to reach out! Fill in the form below, and I'll get back to you as soon as possible.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-8 bg-gray-700 p-6 md:p-8 rounded-lg shadow-md w-full max-w-lg"
      >
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 rounded bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Invalid email format" },
            })}
            className="w-full px-4 py-2 rounded bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className="w-full px-4 py-2 rounded bg-gray-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          />
          {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
