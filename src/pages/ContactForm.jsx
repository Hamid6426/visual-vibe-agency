import { useState } from "react";
import { supabase } from "../utils/supabaseClient";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const { error } = await supabase.from("contacts").insert(form);

    if (error) {
      console.error("Save error:", error.message);
      alert("Submission failed. Please try again.");
    } else {
      alert("Thanks for reaching out!");
      setForm({ name: "", email: "", message: "" });
    }
    setSubmitting(false);
  };

  return (
    <main className="bg-white dark:bg-[#141414]">
      <Header />

      <form
        onSubmit={handleSubmit}
        className="max-w-lg my-12 mx-auto border border-gray-300 dark:border-gray-600  p-6 space-y-4 bg-white dark:bg-[#141414] rounded-2xl shadow-lg"
      >
        <h3 className="text-2xl font-semibold text-[#141414] dark:text-[#E1E1E1]">
          Get in Touch
        </h3>

        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block mb-1 text-sm font-medium text-[#141414] dark:text-[#E1E1E1]"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            className="
            w-full px-4 py-2 rounded-lg 
            border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-[#1B1B1B]
            text-[#141414] dark:text-[#E1E1E1]
            focus:outline-none focus:ring-2 focus:ring-tomatoRose-600
            transition
          "
          />
        </div>

        {/* Email */}
        <div>
          <label
            htmlFor="email"
            className="block mb-1 text-sm font-medium text-[#141414] dark:text-[#E1E1E1]"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            className="
            w-full px-4 py-2 rounded-lg 
            border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-[#1B1B1B]
            text-[#141414] dark:text-[#E1E1E1]
            focus:outline-none focus:ring-2 focus:ring-tomatoRose-600
            transition
          "
          />
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block mb-1 text-sm font-medium text-[#141414] dark:text-[#E1E1E1]"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            className="
            w-full px-4 py-2 rounded-lg 
            border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-[#1B1B1B]
            text-[#141414] dark:text-[#E1E1E1]
            focus:outline-none focus:ring-2 focus:ring-tomatoRose-600
            transition
          "
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={submitting}
          className={`
          w-full py-3 rounded-lg cursor-pointer text-black dark:text-white font-semibold border border-gray-300 dark:border-gray-600 
          ${
            submitting
              ? "bg-black cursor-not-allowed"
              : "hover:bg-gray-400/40 dark:hover:bg-black "
          }
          transition
        `}
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </form>

      <Footer />
    </main>
  );
}
