import React, { useReducer } from "react";
import Styles from "./Home.module.css";

// Home imports
import Wrapper from "../../components/Wrapper";
import Title from "../../components/Title";
import Banner from "../../assets/img/top_banner.gif";

// Loan imports
import Tap from "../../assets/img/tap.svg";
import Collection from "../../assets/img/collection.svg";
import GetMoney from "../../assets/img/get-money.svg";
import MoneyBack from "../../assets/img/money-back.svg";

// Invitation imports
import Button from "../../components/Button";

// Home section
function Home() {
  return (
    <>
      <div className={Styles.homeMain}>
        <Wrapper>
          <div className={Styles.left}>
            <Title className={Styles.title} big />
            <p className={Styles.desc}>
              New generation of payment applications. Get a loan of up to $100
              from Pay+, get it quickly in your account and buy online.
            </p>
          </div>
          <div className={Styles.right}>
            <img
              className={Styles.banner}
              src={Banner}
              alt="Application banner"
            />
          </div>
        </Wrapper>
        <span className={Styles.scrollDown}></span>
      </div>
      <Loan />
      <Invitation />
      <Faqs />
    </>
  );
}
// End Home section

// Loan section
function Loan() {
  const features = [
    {
      title: "Online request",
      desc: "All registration steps, including authentication and verification of bank records, will be in absentia.",
      icon: Tap,
    },
    {
      title: "Choose the best loan",
      desc: "There are different types of loans available depending on your needs. Which loan you can get will depend on your financial situation…",
      icon: Collection,
    },
    {
      title: "Get credit quickly",
      desc: "There are different types of loans available depending on your needs. Which loan you can get will depend on your financial situation…",
      icon: GetMoney,
    },
    {
      title: "Easy refund",
      desc: "There are different types of loans available depending on your needs. Which loan you can get will depend on your financial situation…",
      icon: MoneyBack,
    },
  ];

  const steps = [
    {
      title: "Register",
      desc: 'Enter the Pay+ application and in the "Installment Purchase" section, after selecting the loan, fill in the information about the name, surname and national code.',
    },
    {
      title: "Validation",
      desc: "In this step, complete the personal information and contact information license, and complete the authentication steps.",
    },
    {
      title: "Upload documents",
      desc: "Upload the image of the requested documents.",
    },
    {
      title: "Providing collateral",
      desc: "Upon initial confirmation of the documents, our partners will contact you via SMS and phone call to receive the collateral.",
    },
    {
      title: "Receiving Credit",
      desc: "after receiving the collateral, you will be provided with the use of Pay+ credit in the shortest possible time.",
    },
  ];

  return (
    <div className={Styles.loanMain}>
      <div className={Styles.features}>
        <h1 className={Styles.sectionHeading}>Credit features</h1>
        <div className={Styles.featuresContainer}>
          {features.map((feature) => (
            <Feature
              title={feature.title}
              icon={feature.icon}
              desc={feature.desc}
              key={feature.title}
            />
          ))}
        </div>
      </div>
      <br />
      <div className={Styles.steps}>
        <h1 className={Styles.sectionHeading}>Steps to get credit</h1>
        <div className={Styles.timeline}>
          {steps.map((step) => {
            return (
              <Step
                number={steps.indexOf(step) + 1}
                title={step.title}
                desc={step.desc}
                key={step.title}
              />
            );
          })}
        </div>
      </div>
    </div>
  );

  function Feature({ icon, title, desc }) {
    return (
      <div className={Styles.feature}>
        <img src={icon} alt="Feature" className={Styles.featureIcon} />
        <h1 className={Styles.itemHeading}>{title}</h1>
        <p className={Styles.itemSubheading}>{desc}</p>
      </div>
    );
  }

  function Step({ number, title, desc }) {
    return (
      <div className={Styles.step}>
        <div className={Styles.stepNumber}>{number}</div>
        <h1 className={Styles.itemHeading}>{title}</h1>
        <p className={Styles.itemSubheading}>{desc}</p>
      </div>
    );
  }
}
// End Loan section

// Invitation section
function Invitation() {
  return (
    <div className={Styles.invitationMain}>
      <div className={Styles.box}>
        <h1 className={Styles.heading}>Register now</h1>
        <p className={Styles.subheading}>and get your credit quickly</p>
        <br />
        <Button path="/download">Download App</Button>
      </div>
    </div>
  );
}
// End Invitation section

// Faqs section
function Faqs() {
  const faqs = [
    {
      question: "Do I need to visit Pay+ in person to get credit?",
      answer:
        "No, all the steps of receiving credit are done in absentia through the Pay+ application.",
    },
    {
      question: "What will be the start time of repayment of installments?",
      answer:
        "One month after the contract is finalized, it will be time to start paying.",
    },
    {
      question:
        "After reviewing the documents, how will Pay+ notify me of the confirmation of the documents?",
      answer:
        "After reviewing the documents and confirming or not confirming the documents by Pay + experts, the continuation of the steps will be sent to you via SMS.",
    },
    {
      question: "Do I have to pay a down payment to use the loan?",
      answer:
        "You will only pay a percentage of each transaction (depending on the loan amount and repayment period) for the down payment.",
    },
    {
      question: "What documents do I have to submit to Pay+?",
      answer:
        "National card image (provided online) and collateral (provided physically after verification of documents)",
    },
    {
      question: "Is there an age limit for receiving Pay+ credit?",
      answer: "Yes, people over the age of 18 can use Pay+ credit.",
    },
  ];

  return (
    <div className={Styles.faqsMain}>
      <h1 className={Styles.sectionHeading}>Faqs:</h1>
      <ul className={Styles.faqsList}>
        {faqs.map((faq) => (
          <Faq question={faq.question} answer={faq.answer} key={faq.question} />
        ))}
      </ul>
    </div>
  );

  function Faq({ question, answer }) {
    const reducer = (state, action) => {
      return state.className === ""
        ? { className: Styles.opened, buttonText: "-" }
        : { className: "", buttonText: "+" };
    };

    const [data, dispatch] = useReducer(reducer, {
      className: "",
      buttonText: "+",
    });

    return (
      <li
        className={`${Styles.faq} ${data.className}`}
        onClick={() => dispatch()}
      >
        <h1 className={Styles.faqQuestion}>
          {question}
          <button>{data.buttonText}</button>
        </h1>
        <p className={Styles.faqAnswer}>{answer}</p>
      </li>
    );
  }
}
// End Faqs section

export default Home;
