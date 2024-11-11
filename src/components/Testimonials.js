import React from 'react';
import Slider from 'react-slick';
import './Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'أحمد علي',
    position: 'مدير الإنتاج',
    company: 'مصنع النسيج الحديث',
    feedback: 'خدمة ممتازة وسريعة. أنصح الجميع بتجربتها.',
    photo: '/images/ahmed_ali.jpg',
    logo: '/images/modern_textile_factory_logo.png',
  },
  {
    id: 2,
    name: 'سارة محمد',
    position: 'مديرة الجودة',
    company: 'شركة الملابس الفاخرة',
    feedback: 'جودة العمل رائعة والتعامل احترافي.',
    photo: '/images/sara_mohamed.jpg',
    logo: '/images/luxury_clothing_company_logo.png',
  },
  // Add more testimonials as needed
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true, // Enable right-to-left sliding
  };

  return (
    <section className="testimonials">
      <h2>آراء العملاء</h2>
      <Slider {...settings}>
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="client-info">
              <img
                src={testimonial.photo}
                alt={`صورة ${testimonial.name}`}
                className="client-photo"
              />
              <div className="client-details">
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
                <p>{testimonial.company}</p>
              </div>
              <img
                src={testimonial.logo}
                alt={`شعار ${testimonial.company}`}
                className="company-logo"
              />
            </div>
            <p className="feedback">"{testimonial.feedback}"</p>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Testimonials;
