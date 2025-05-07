import React from "react";

export default function About() {
  return (
    <main className="w-full px-12 flex justify-center pt-16 h-screen">
      <div className="flex flex-row justify-center gap-12">
        <section className="flex flex-col w-1/3 gap-10">
          <div className="text-6xl font-medium">About Us</div>
          <div className="max-w-sm w-full">Can't find the answer you're looking for? Ask your questions and get an answer within 24 hours</div>
          <Link to="/contact" className="px-6 py-2 bg-black text-white rounded-full text-center max-w-[16rem] font-medium">
            Ask a question
          </Link>
        </section>
        <section className="flex w-2/3 gap-6">
        </section>
      </div>
    </main>
  );
}
