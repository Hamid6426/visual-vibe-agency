import React from "react";

export default function Services() {
  return (
    <main className="w-full px-12 flex justify-center pt-16 h-screen">
      <div className="flex flex-row justify-center gap-12">
        <section className="flex flex-col w-1/3 gap-10">
          <div className="text-6xl font-medium">Services</div>
          <div className="max-w-sm w-full">Can't find the answer you're looking for? Ask your questions and get an answer within 24 hours</div>
          <a href="/contact" className="px-6 py-2 bg-black text-white rounded-full text-center max-w-[16rem] font-medium">
            Ask a question
          </a>
        </section>
        <section className="flex w-2/3 gap-6">
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl w-80 h-40 flex flex-col justify-end  border gap-4 p-4">
              <h2 className="text-4xl font-semibold">Social Ads</h2>
              <p className="">We create authentic content that delivers true value to your audience.</p>
            </div>
            <div className="rounded-2xl w-80 h-[20rem] flex flex-col justify-end  border gap-4 p-4">
              <h2 className="text-4xl font-semibold">Social Ads</h2>
              <p className="">We create authentic content that delivers true value to your audience.</p>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl w-80 h-40 flex flex-col justify-end  border gap-4 p-4">
              <h2 className="text-4xl font-semibold">SaaS Marketing</h2>
              <p className="">We create authentic content that delivers true value to your audience.</p>
            </div>
            <div className="rounded-2xl w-80 h-40 flex flex-col justify-end border gap-4 p-4">
              <h2 className="text-4xl font-semibold">SEO</h2>
              <p className="">We create authentic content that delivers true value to your audience.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
