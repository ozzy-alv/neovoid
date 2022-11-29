export const styles = {
  boxWidth: 'xl:max-w-[1280px] w-full',

  heading1:
    'font-semibold xs:text-[46px] text-[24px] text-black xs:leading-[54px] leading-6 w-full text-left italic',
  heading2:
    'font-semibold xs:text-[46px] text-[24px] text-white xs:leading-[54px] leading-6 w-full text-left',
  paragraph:
    'font-normal text-gray text-[18px] leading-[30.8px] text-justify pb-8',

  flexCenter: 'flex justify-center items-center',
  flexStart: 'flex justify-center items-start',

  paddingX: 'sm:px-16 px-6',
  paddingY: 'sm:py-16 py-10',
  padding: 'sm:px-16 px-6 sm:py-12 py-4',

  marginX: 'sm:mx-16 mx-6',
  marginY: 'sm:my-16 my-6',

  card: 'opacity-100 hover:opacity-80 transition-opacity duration-500 text-black rounded-xl overflow-hidden',
  cardImage: 'w-full xs:h-[14rem] pb-5 rounded-b-full',
  cardBreak: 'w-[75%] p-2 opacity-80',
  cardTitle: 'font-semibold text-[1.4rem] mb-2 pt-4 italic',
  cardDesc: 'font-light text-justify w-full pl-5 pr-5 pb-4 tracking-tight',

  labelFont: 'italic text-lg',
  formInput:
    'block mb-5 w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-cyan-600 focus:outline-none',
};

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;
