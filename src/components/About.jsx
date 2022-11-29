import React from 'react';
import { origin, reach, opportunity } from '../assets';
import styles from '../style';
import '../styles/About.css';

const About = () => {
  return (
    <div id="about" className="flex flex-col">
      <div className="w-full h-full">
        <div className="flex flex-col justify-start pt-5 pb-8">
          <div className="m-auto pt-8 pb-10">
            <h1 className={styles.heading1}>About Neo Void</h1>
          </div>
          <article className="flex flex-col sm:flex-row xs:pl-[1.2rem] xs:pr-[1.2rem] justify-evenly gap-8 pb-5">
            <div className={`${styles.card} div_shadow`}>
              <h3 className={styles.cardTitle}>Origin</h3>
              <img src={origin} alt="" className={styles.cardImage} />
              <span className={styles.cardDesc}>
                Based in South Jersey, Neo Void Marketing agency started for the
                purpose of helping businesses maximize their reach.
                <hr className={styles.cardBreak} />
                <span className="italic font-extralight">
                  "We do the work, you reap the benefits."
                </span>
              </span>
            </div>
            <div className={`${styles.card} div_shadow`}>
              <h3 className={styles.cardTitle}>Opportunity</h3>
              <img src={opportunity} alt="" className={styles.cardImage} />
              <span className={styles.cardDesc}>
                Our ad sense marketing strategy generates more clicks for your
                business. We bring more traction to your content. That's where
                the value comes from.
                <hr className={styles.cardBreak} />
                <span className="font-extralight italic">
                  "With more people comes more opportunity!"
                </span>
              </span>
            </div>
            <div className={`${styles.card} div_shadow`}>
              <h3 className={styles.cardTitle}>Optimization</h3>
              <img src={reach} alt="" className={styles.cardImage} />
              <span className={styles.cardDesc}>
                Optimization and quality is key, we apply a fierce attention to
                detail on both key elements to convert reach into real
                customers.
                <hr className={styles.cardBreak} />
                <span className="font-extralight italic">
                  "For us, it's about finding the right people."
                </span>
              </span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
