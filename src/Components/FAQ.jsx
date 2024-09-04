import React, { useState } from 'react';
import AnimatedTitle from './AnimatedTitle';
import './FAQ.css';

const FAQItem = ({ question, answer, id, isOpen, onToggle }) => (
  <div className="faq-item">
    <div className="faq-question" onClick={() => onToggle(id)}>
      <h5>{question}</h5>
      <span className="toggle-icon">{isOpen ? '-' : '+'}</span>
    </div>
    <div className={`faq-answer ${isOpen ? 'open' : ''}`}>
      <p>{answer}</p>
    </div>
  </div>
);

const FAQSection = ({ title, items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-section">
      <h3 className="section-title">{title}</h3>
      {items.map((item, index) => (
        <FAQItem
          key={index}
          question={item.question}
          answer={item.answer}
          id={index}
          isOpen={openIndex === index}
          onToggle={handleToggle}
        />
      ))}
    </div>
  );
};

const FAQ = () => {
  const registrationAndEventDetails = [
    { question: "How can I register?", answer: "You can register through Devfolio by clicking on the button provided above." },
    { question: "Do I need to pay any money to register for the Hackathon?", answer: "No. You do not have to pay anything to anyone to register yourself. It's absolutely FREE" },
    { question: "When will the hackathon take place?", answer: "ENGAGE 2023 will be held on 1st November 2023. So mark your calendars now." },
    { question: "Who can participate in the Hackathon?", answer: "Anyone who wants to develop their skills or gain experience and is passionate can participate in the hackathon." },
  ];

  const participationAndVenue = [
    { question: "What are the rules on the Team Size?", answer: "You can participate as an individual or a team of up to 6 members." },
    { question: "What's in it for participants?", answer: "Goodies & swag, learning new skills, networking, winning cash prizes, community building, teamwork, meeting wonderful people, having fun, and much more!" },
    { question: "What is the venue for the event?", answer: "The offline hackathon will be held at The North Cap University. Further details will be shared with you via email." },
  ];

  return (
    <section className="faq">
      <div className="container">
        <div className="section-title">
          <AnimatedTitle text="FAQ's" />
        </div>
        <div className="faq-content">
          <FAQSection title="Registration & Event Details" items={registrationAndEventDetails} />
          <FAQSection title="Participation & Venue" items={participationAndVenue} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
