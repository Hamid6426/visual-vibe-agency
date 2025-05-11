import { useState } from "react";
import supabase from "../utils/supabase";

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
      <form
        onSubmit={handleSubmit}
        className="max-w-lg md:my-12 mx-auto sm:border border-gray-300 dark:border-gray-600 p-6 space-y-4 bg-white dark:bg-[#141414] rounded-2xl sm:shadow-lg"
      >
        <h3 className="text-2xl mb-2 text-center font-semibold text-[#141414] dark:text-[#E1E1E1]">
          Get in Touch
        </h3>
        <p className="mb-6 text-center text-[#141414] dark:text-[#E1E1E1]">
        </p>

        {/* Name */}
        <div>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Name"
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
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="Email"
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
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Your Message"
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
              ? "bg-gray-400 cursor-not-allowed"
              : "hover:bg-gray-400/40 dark:hover:bg-black "
          }
          transition
        `}
        >
          {submitting ? "Sending..." : "Send Message"}
        </button>
      </form>

    </main>
  );
}
