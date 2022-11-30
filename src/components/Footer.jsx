import React from 'react';
import styles from '../style';
import { footerLinks, socialMedia } from '../constants';
import { logo } from '../assets';

const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-1 flex flex-col justify-center mr-10 mt-4">
          <img
            src={logo}
            alt="neovoid"
            className="w-[266px] h-[72px] object-contain pl-[85px]"
          />
          <p
            className={`${styles.paragraph} mt-4 max-w-[310px] italic flex justify-center pl-14`}
          >
            "A new way to market."
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-col justify-between md:mt-0 mt-8">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.id}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className="font-medium text-[22px] leading-[27px] text-black">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, i) => (
                  <a href={`${link.id}`}>
                    <li
                      key={link.name}
                      className={`font-normal italic text-[16px] leading-[24px] text-gray hover:text-secondary cursor-pointer ${
                        i !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                      }`}
                    >
                      {link.name}
                    </li>
                  </a>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-medium text-[18px] leading-[27px] text-black text-center">
          2022 Neo Void Marketing All Rights Resevered.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((social, i) => (
            <a href={social.link} target="_blank">
              <img
                key={social.id}
                src={social.icon}
                alt={social.id}
                className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                  i !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
                }`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
