import React from "react";

export default function Services() {
  return (
    <main className="w-full px-3 lg:px-12 flex justify-center pt-8 sm:pt-16 h-fit lg:h-[120vh] items-center">
      <div className="flex flex-col lg:flex-row justify-center gap-12">
        <section className="flex flex-col sm:w-1/3 gap-6 sm:gap-10 w-full">
          <div className="text-4xl sm:text-6xl font-medium">Services</div>
          <div className="sm:max-w-sm w-full">Can't find the answer you're looking for? Ask your questions and get an answer within 24 hours</div>
          <a href="/contact" className="px-6 py-2 bg-black text-white rounded-full text-center max-w-[16rem] font-medium">
            Ask a question
          </a>
        </section>
        <section className="flex flex-col lg:flex-row lg:w-2/3 gap-6">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl lg:w-80 w-full h-fit lg:h-40 flex flex-col justify-end  border gap-1 lg:gap-4 p-4">
              <h2 className="text-2xl lg:text-4xl font-semibold">Social Ads</h2>
              <p className="">We create authentic content that delivers true value to your audience.</p>
            </div>
            <div className="rounded-2xl lg:w-80 w-full h-fit sm:h-[20rem] flex flex-col justify-end  border gap-1 lg:gap-4 p-4">
              <h2 className="text-2xl lg:text-4xl font-semibold">Content Writing</h2>
              <p className="">We create authentic content that delivers true value to your audience.</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl lg:w-80 w-full h-fit lg:h-40 flex flex-col justify-end  border gap-1 lg:gap-4 p-4">
              <h2 className="text-2xl lg:text-4xl font-semibold">SaaS Marketing</h2>
              <p className="">We create authentic content that delivers true value to your audience.</p>
            </div>
            <div className="rounded-2xl lg:w-80 w-full h-fit lg:h-40 flex flex-col justify-end border gap-1 lg:gap-4 p-4">
              <h2 className="text-2xl lg:text-4xl font-semibold">SEO</h2>
              <p className="">We create authentic content that delivers true value to your audience.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
