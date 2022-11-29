import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../style';

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log('message sent');
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        },
      );
  };
  return (
    <div id="contact" className="h-full flex flex-col justify-center pt-[80px]">
      <div className="w-full xs:w-3/4 m-auto p-5 shadow-lg bg-gray-100">
        <h1 className="text-3xl font-semibold flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2 h-12 transform rotate-45 xs:h-[58px]"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
          <span>Contact Us</span>
        </h1>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col justify-center items-center gap-[10px] mt-5"
        >
          <label className={styles.labelFont}>Name</label>
          <input
            type="text"
            name="user_name"
            className={styles.formInput}
            required
          />
          <label className={styles.labelFont}>Email</label>
          <input
            type="email"
            name="user__email"
            className={styles.formInput}
            required
          />
          <label className={styles.labelFont}>Message</label>
          <textarea name="message" required className={styles.formInput} />
          <button type="submit" className="mt-8 mb-8">
            <span className="h-12 xs:w-[180px] xs:text-[18px] w-[120px] flex items-center justify-center font-normal px-8 border border-black hover:bg-black hover:text-white transition duration-500 ease-in-out">
              Send
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
