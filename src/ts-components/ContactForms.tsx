// import { useState } from 'react';
// import { supabase } from './lib/supabaseClient';

// export default function ContactForm() {
//   const [form, setForm] = useState({ name: '', email: '', message: '' });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     const { error } = await supabase
//       .from('contacts')
//       .insert({ name: form.name, email: form.email, message: form.message });
//     if (error) {
//       console.error('Save error:', error.message);
//       alert('Submission failed. Please try again.');
//     } else {
//       alert('Thanks for reaching out!');
//       setForm({ name: '', email: '', message: '' });
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required />
//       <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="Email" required />
//       <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" required />
//       <button type="submit">Send</button>
//     </form>
//   );
// }
