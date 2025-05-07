import React from "react";
import FaqItem from "./FaqItem";

export default function Faqs() {
  return (
    <main className="w-full px-12">
      <div className="flex flex-row justify-center w-full">
        <section className="flex flex-col w-1/3 gap-10">
          <div className="text-6xl font-medium">FAQ</div>
          <div className="max-w-sm w-full">Can't find the answer you're looking for? Ask your questions and get an answer within 24 hours</div>
          <Link to="/contact" className="px-6 py-2 bg-black text-white rounded-full text-center max-w-[16rem] font-medium">
            Ask a question
          </Link>
        </section>
        <section className="flex flex-col gap-6 w-2/3">
          <FaqItem
            question="Do you work with small businesses?"
            answer="Absolutely! We love working with small businesses and startups. We understand the unique challenges you face tighter budgets, fast timelines, and the need for flexible solutions. Our team focuses on delivering personalized service, clear communication, and scalable results without the complexity or high costs often associated with bigger agencies. Whether you're just starting out or growing your brand, we're excited to support your success. "
          />
          <FaqItem
            question="Do you work with small businesses?"
            answer="Absolutely! We love working with small businesses and startups. We understand the unique challenges you face tighter budgets, fast timelines, and the need for flexible solutions. Our team focuses on delivering personalized service, clear communication, and scalable results without the complexity or high costs often associated with bigger agencies. Whether you're just starting out or growing your brand, we're excited to support your success. "
          />
          <FaqItem
            question="Do you work with small businesses?"
            answer="Absolutely! We love working with small businesses and startups. We understand the unique challenges you face tighter budgets, fast timelines, and the need for flexible solutions. Our team focuses on delivering personalized service, clear communication, and scalable results without the complexity or high costs often associated with bigger agencies. Whether you're just starting out or growing your brand, we're excited to support your success. "
          />
          <FaqItem
            question="Do you work with small businesses?"
            answer="Absolutely! We love working with small businesses and startups. We understand the unique challenges you face tighter budgets, fast timelines, and the need for flexible solutions. Our team focuses on delivering personalized service, clear communication, and scalable results without the complexity or high costs often associated with bigger agencies. Whether you're just starting out or growing your brand, we're excited to support your success. "
          />
        </section>
      </div>
    </main>
  );
}
