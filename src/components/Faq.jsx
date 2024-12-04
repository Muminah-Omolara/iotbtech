import FaqItem from "./FaqItem";
import faqList from "../data/faqList";
const Faq = () => {
  return (
    <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto gap-10 px-4 sm:px-6 lg:px-5 py-10 ">
        <div className="flex-1 mt-[200px]">
          <p className=" text-tt-primary font-bold text-xl">FAQ</p>
          <p className="font-bold text-4xl text-tt-black leading-2 mt-[30px]">
            Here are Some Answer For Frequntly asked Questions
          </p>
          <p className="font-semibold text-xl text-tt-grey mt-[30px]">
            We got alot of Message With the same Questions so here are some fast
            answer for populare Question
          </p>
        </div>
      <div className="text-tt-primary lg:mt-36 mt-4 flex-1">
        {faqList.map((list) => (
          <FaqItem key={list.answer}
            question={list.question}
            answer={list.answer} 
          />
        ))}
      </div>
    </div>
  );
};

export default Faq;
