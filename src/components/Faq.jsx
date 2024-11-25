import FaqItem from "./Faqitem";

const Faq = () => {
  return (
    <div className="h-[661.25px] lg:mx-auto mx-4 flex flex-col lg:flex-row w-auto max-w-5xl gap-12 ">
      <div className=" ">
        <div className=" mt-[200px]">
          <p className=" text-tt-primary font-[700] text-[22px]">FAQ</p>
          <p className="font-[700] text-[40px] text-tt-black leading-[60px] mt-[30px]">
            Here are Some Answer For Frequntly asked Questions
          </p>
          <p className=" font-semibold text-[22px] text-tt-grey mt-[30px]">
            We got alot of Message With the same Questions so here are some fast
            answer for populare Question
          </p>
        </div>
      </div>
      <div className=" text-tt-primary lg:mt-36 mt-4">
        <div>
          <FaqItem
            question=" Do You offer Software Development"
            answer=" yes,we do"
          />
        </div>
        <FaqItem
          question=" Do you offer Social Media Marketing"
          answer="Yes,we do offer Social Media marketing , we offer fb ads instgram ads ,google campagine , tiktok promotion ,and other social media plateforme  "
        />
        <FaqItem
          question=" Do you Offer pack Services"
          answer=" No, we do not offer psck services"
        />
        <FaqItem
          question=" How long it take to realise a projrct"
          answer=" 500 years "
        />
      </div>
    </div>
  );
};

export default Faq;
