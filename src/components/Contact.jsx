import React from 'react';
import Button from './atoms/Button';

const Contact = () => {
  return (
    <section className="bg-gray-100 py-8 px-16">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-md font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-md font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
          <div className="mt-4">
            <label htmlFor="message" className="block text-md font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              className="p-5 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              rows="4"
            ></textarea>
          </div>
          <div className="mt-4">
            <Button text="Send Message"/>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
