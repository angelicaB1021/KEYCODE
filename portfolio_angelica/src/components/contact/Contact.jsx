import React from "react";

export default function Contact() {
  return (
    <section id="Contact" data-aos="fade-up" data-aos-delay="400">
      <div className="max-w-screen-md py-8 mx-auto lg:py-16">
        <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-white">
          Contáctame
        </h2>
        <form action="#" className="space-y-8">
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-xl font-medium text-white"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="angelicabelmar730@gmail.com"
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              for="message"
              className="block mb-2 text-xl font-medium text-white"
            >
              Mensaje
            </label>
            <textarea
              rows="6"
              id="message"
              className="shadow-sm bg-gray-300 font-bold border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
              placeholder="Leave a comment ..."
              required
            />
          </div>
          <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-sky-600 hover:shadow-[0_0_40px_rgb(128,0,128,0.7)] rounded-full text-lg">
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
