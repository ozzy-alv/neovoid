import React from 'react';
import { features } from '../constants';
import { styles, layout } from '../style';
import { work } from '../assets';
import '../styles/Service.css';

const Service = () => {
  return (
    <section id="service" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading1}>
          You keep doing business, <br className="sm:block hidden" /> while we
          handle the traction!
        </h2>
        <hr className={styles.cardBreak} />
        <p className={`${styles.paragraph} max-w-[470px] mt-5 mb-5`}>
          Our service starts from the moment we contact you. First we schedule a
          small meeting to go make sure you are comfortable with us. We ask a
          few questions about your business to find out what may be preventing
          growth. Then, the best part the follow up. We delegate a solution by
          discussing package deals our work flow looks like the following...
        </p>
        <div className="pl-[50px] xs:pl-[210px] xl:pl-0 mb-[80px] ">
          <img
            src={work}
            alt=""
            className="w-[200px] h-[200px] xs:h-[420px] xs:w-[420px]"
          />
        </div>
      </div>

      <div className={`${layout.sectionImg} pl-8 pr-5 flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};
const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-4 rounded-[20px] ${
      index !== features.length - 1 ? 'mb-6' : 'mb-0'
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-semibold text-black text-[18px] leading-[23px] mb-1">
        {title}
      </h4>
      <p className="font-normal text-gray text-[16px] text-right leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

export default Service;
