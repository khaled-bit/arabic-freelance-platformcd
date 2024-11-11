import React, { useState } from 'react';
import './FAQ.css';

const faqs = [
  { id: 1, question: 'ما هي مدة تنفيذ الطلب؟', answer: 'تستغرق عملية التنفيذ من 3 إلى 5 أيام عمل.' },
  { id: 2, question: 'هل تقدمون خدمات التوصيل؟', answer: 'نعم، نقدم خدمات التوصيل لجميع المناطق.' },
  // Add more FAQs as needed
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeIndex, setActiveIndex] = useState(null);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="faq">
      <h2>الأسئلة الشائعة</h2>
      <input
        type="text"
        placeholder="ابحث عن سؤال..."
        value={searchTerm}
        onChange={handleSearch}
        className="faq-search"
      />
      <div className="faq-list">
        {filteredFaqs.map((faq, index) => (
          <div key={faq.id} className="faq-item">
            <button
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? '-' : '+'}
              </span>
            </button>
            <div
              className={`faq-answer ${
                activeIndex === index ? 'active' : ''
              }`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
