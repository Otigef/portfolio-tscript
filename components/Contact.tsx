import React, { useState } from 'react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would handle form submission here (e.g., API call).
    console.log('Form submitted:', formData);
    setStatus('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-teal-600 dark:text-teal-400">Get In Touch</h2>
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Form */}
          <div className="lg:w-2/3 bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded py-2 px-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                ></textarea>
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-6 rounded-md focus:outline-none focus:shadow-outline transition-colors duration-300"
                >
                  Send Message
                </button>
                {status && <p className="text-green-500 dark:text-green-400">{status}</p>}
              </div>
            </form>
          </div>
          {/* Contact Details */}
          <div className="lg:w-1/3">
             <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg h-full">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">Feel free to reach out via email, phone, or connect with me on social media.</p>
                <ul className="space-y-4">
                    <li><a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-teal-500 dark:hover:text-teal-400 transition-colors"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 dark:text-teal-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>{PERSONAL_INFO.email}</a></li>
                    <li><span className="flex items-center gap-3 text-gray-700 dark:text-gray-300"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-teal-500 dark:text-teal-400" viewBox="0 0 20 20" fill="currentColor"><path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" /></svg>{PERSONAL_INFO.phone}</span></li>
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;