import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';
import Banner from '../components/Banner';
import InfoItem from '../components/InfoItem';
import CallSvg from '../svg/call.svg';
import LocationSvg from '../svg/location.svg';
import Banner1 from '../img/banner1.png';
import Banner2 from '../img/banner2.png';
import Banner3 from '../img/banner3.png';
import Banner4 from '../img/banner4.png';
import Banner5 from '../img/banner5.png';

function Home() {
  useEffect(() => {
    document.title = 'MCHA Express Delivery Services';
  });

  const titles = [
    "Fast, Reliable <span class='top-highlight'>Courier</span> Solution.",
    "On-Time <span class='top-highlight'>Deliveries</span>, Every Time.",
    "Efficient and <span class='top-highlight'>Secure Shipping</span> Services.",
    "Your Trusted Partner in <span class='top-highlight'>Courier</span> Services.",
  ];

  const images = [Banner1, Banner2, Banner3, Banner4, Banner5];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    const titleInterval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 5000);

    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(titleInterval);
      clearInterval(imageInterval);
    };
  }, [titles.length, images.length])

  const handlePrevClick = () => {
    const newSlide = Math.max(currentSlide - 1, 0);
    setCurrentSlide(newSlide);
    setLoadingPercentage((newSlide / 8) * 100);
  };

  const handleNextClick = () => {
    const totalSlides = Math.ceil(9 / 1); // 1 item per slide
    const newSlide = Math.min(currentSlide + 1, totalSlides - 1);
    setCurrentSlide(newSlide);
    setLoadingPercentage((newSlide / 8) * 100);
  };

  return (
    <>
      <Navbar />
      {/* Home Section Start */}
      <section className="home">
        <div className="headers container">
          <span className='top-head'>PROVIDE BEST DELIVERY SERVICE</span>
          <h1 key={currentTitleIndex} className="fade-in" dangerouslySetInnerHTML={{ __html: titles[currentTitleIndex] }} />
          <p>
            Your rapid, dependable courier service. We deliver with speed and reliability,
            ensuring your packages reach their destination effortlessly.
          </p>
          <Link to=''>
            Sign up now
          </Link>
          <div className='grid-info'>
            <InfoItem
              iconSrc={CallSvg}
              text="Call for inquiry"
              strongText="+639-270-907-280"
            />
            <InfoItem
              iconSrc={LocationSvg}
              text="Our office address"
              strongText="350 J.P. Rizal, Mandaluyong, 1550 Metro Manila, Philippines"
            />
          </div>
        </div>
        <div className="absolute-image">
          <div className='small-img'>
            <Banner src={images[currentImageIndex]} alt="small-image" />
          </div>
          <div className='large-img'>
            <Banner src={images[(currentImageIndex + 1) % images.length]} alt="large-image" />
          </div>
        </div>
      </section>
      {/* Home Section End */}

      {/* Numbered Data Section Start */}
      <section className='numbered-data container'>
        <div className='item' data-aos='zoom-in-up' data-aos-duration='500'>
          <div className='icon-dialog'>
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <g clip-path="url(#clip0_79_95)">
              <path d="M6.875 9.53979L20.4773 2.73865L15 0L1.39771 6.80115L6.875 9.53979Z" fill="black"/>
              <path d="M23.2727 4.13623L9.67041 10.9374L15 13.6022L28.6023 6.80103L23.2727 4.13623Z" fill="black"/>
              <path d="M13.75 15.7727L0 8.89771V23.125L13.75 30V15.7727Z" fill="black"/>
              <path d="M16.25 15.7727V30L30 23.125V8.89771L16.25 15.7727Z" fill="black"/>
            </g>
            <defs>
              <clipPath id="clip0_79_95">
                <rect width="30" height="30" fill="white"/>
              </clipPath>
            </defs>
          </svg>
          </div>
          <div className='icon-title'>
            <h1 data-aos='fade-left' data-aos-duration='500'>325</h1>
            <p data-aos='fade-left' data-aos-duration='1000'>Parcel Delivered</p>
          </div>
        </div>
        <div className='item' data-aos='zoom-in-up' data-aos-duration='1000'>
          <div className='icon-dialog'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path opacity="0.91" d="M18.8535 8.58203C17.7011 8.58373 16.6226 9.14997 15.9668 10.0977C16.2126 10.7194 16.3535 11.3916 16.3535 12.0957C16.3535 12.7894 16.1784 13.4273 15.916 14.0254C16.565 15.0162 17.6691 15.6138 18.8535 15.6152C20.7964 15.6157 22.3715 14.0405 22.3711 12.0977C22.3705 10.1555 20.7956 8.58158 18.8535 8.58203ZM22 16.3457L19.9121 19.6113C20.4408 20.7651 20.7507 22.0281 20.7871 23.3496L20.8086 24.1328L20.293 24.7207C19.5484 25.5713 18.6791 26.3087 17.7285 26.9336C18.1147 26.9768 18.5064 27 18.9043 27C22.059 27 24.8815 25.6056 26.8066 23.4062C26.7216 20.3157 24.844 17.5583 22 16.3457Z" fill="black"/>
              <path opacity="0.91" d="M10.8359 8.57959C10.3741 8.57959 9.91681 8.67056 9.49013 8.84729C9.06346 9.02402 8.67577 9.28309 8.34921 9.60965C8.02265 9.93621 7.76361 10.3239 7.58687 10.7505C7.41014 11.1772 7.31918 11.6345 7.31918 12.0963C7.31918 12.5582 7.41014 13.0155 7.58687 13.4422C7.76361 13.8688 8.02265 14.2565 8.34921 14.5831C8.67577 14.9096 9.06346 15.1687 9.49013 15.3454C9.91681 15.5222 10.3741 15.6131 10.8359 15.6131C11.2978 15.6131 11.7551 15.5222 12.1817 15.3454C12.6084 15.1687 12.9961 14.9096 13.3227 14.5831C13.6492 14.2565 13.9083 13.8688 14.085 13.4422C14.2617 13.0155 14.3527 12.5582 14.3527 12.0963C14.3527 11.6345 14.2617 11.1772 14.085 10.7505C13.9083 10.3239 13.6492 9.93618 13.3227 9.60962C12.9961 9.28306 12.6084 9.02402 12.1817 8.84729C11.7551 8.67056 11.2978 8.57959 10.8359 8.57959ZM13.9818 16.3429L10.9115 21.1458L7.79998 16.3463C4.9535 17.5543 3.07144 20.3096 2.98161 23.4005C4.90684 25.6014 7.72966 26.9979 10.8857 26.9979C14.0405 26.9979 16.863 25.6032 18.7882 23.4039C18.7031 20.3134 16.8258 17.5555 13.9818 16.3429Z" fill="black" stroke="#FF0000" stroke-width="0.004"/>
            </svg>
          </div>
          <div className='icon-title'>
            <h1 data-aos='fade-left' data-aos-duration='1500'>1,000</h1>
            <p data-aos='fade-left' data-aos-duration='2000'>Happy Clients</p>
          </div>
        </div>
        <div className='item' data-aos='zoom-in-up' data-aos-duration='1500'>
          <div className='icon-dialog'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
              <path d="M21.0149 7.7569C22.2962 7.7569 23.3349 6.71821 23.3349 5.43692C23.3349 4.15563 22.2962 3.11694 21.0149 3.11694C19.7336 3.11694 18.6949 4.15563 18.6949 5.43692C18.6949 6.71821 19.7336 7.7569 21.0149 7.7569Z" fill="black"/>
              <path d="M5.88224 16.7507C3.08421 16.7507 0.81604 19.0189 0.81604 21.8169C0.81604 24.6149 3.08421 26.883 5.88224 26.883C8.68021 26.883 10.9484 24.6149 10.9484 21.8169C10.9484 19.019 8.68021 16.7507 5.88224 16.7507ZM5.88224 24.5475C4.37653 24.5475 3.1516 23.3226 3.1516 21.8169C3.1516 20.3112 4.37653 19.0862 5.88224 19.0862C7.38789 19.0862 8.61282 20.3112 8.61282 21.8169C8.61282 23.3226 7.38789 24.5475 5.88224 24.5475Z" fill="black"/>
              <path d="M0.777868 18.6685C1.02779 18.6685 1.27313 18.5486 1.42354 18.3257C2.42645 16.8412 4.09326 15.9549 5.88199 15.9549C7.66993 15.9549 9.33632 16.8404 10.3392 18.3238C10.5801 18.6801 11.0642 18.7736 11.4203 18.5327C11.7765 18.2917 11.8699 17.8078 11.6291 17.4516C10.3362 15.5396 8.18784 14.3977 5.88217 14.3977C3.57535 14.3977 1.42638 15.54 0.13352 17.4539C-0.107167 17.8103 -0.0134522 18.2941 0.342747 18.5347C0.476436 18.6252 0.627937 18.6685 0.777868 18.6685Z" fill="black"/>
              <path d="M24.1193 16.7507C21.3212 16.7507 19.0532 19.0189 19.0532 21.8169C19.0532 24.6149 21.3213 26.883 24.1192 26.883C26.9174 26.883 29.1854 24.6149 29.1854 21.8169C29.1854 19.019 26.9174 16.7507 24.1193 16.7507ZM24.1193 24.5475C22.6135 24.5475 21.3887 23.3226 21.3887 21.8169C21.3887 20.3112 22.6135 19.0862 24.1193 19.0862C25.625 19.0862 26.8499 20.3112 26.8499 21.8169C26.8499 23.3226 25.625 24.5475 24.1193 24.5475Z" fill="black"/>
              <path d="M24.1193 14.3979C21.8126 14.3979 19.6635 15.5403 18.3707 17.4542C18.13 17.8106 18.2237 18.2944 18.58 18.535C18.7136 18.6253 18.8653 18.6684 19.0152 18.6684C19.2651 18.6684 19.5105 18.5484 19.6608 18.3257C20.6637 16.841 22.3306 15.9549 24.1193 15.9549C25.9072 15.9549 27.5734 16.8403 28.5764 18.3238C28.8173 18.68 29.3016 18.7734 29.6575 18.5325C30.0137 18.2917 30.1071 17.8078 29.8663 17.4515C28.5735 15.5397 26.425 14.3979 24.1193 14.3979Z" fill="black"/>
              <path d="M21.0845 13.335C21.2131 13.4746 21.4578 13.5243 21.6307 13.4457L26.162 11.464C26.7171 11.1991 26.9521 10.5343 26.6872 9.9793C26.4226 9.42408 25.757 9.18864 25.2025 9.45409L22.2512 10.9196C22.081 11.004 21.8373 10.9606 21.7069 10.8226L16.7362 5.90205C16.6057 5.7639 16.3887 5.75834 16.2512 5.88955L9.34986 12.8318C9.21255 12.9631 9.21768 13.1699 9.36169 13.2938C10.2363 14.0471 13.0669 16.4868 14.0442 17.3477C14.1868 17.4731 14.2378 17.7167 14.1595 17.8897L11.7935 23.1167C11.7152 23.2897 11.7424 23.5545 11.8542 23.708L13.4299 25.8698C13.6998 26.2402 14.109 26.4488 14.5328 26.4767C14.8678 26.4988 15.2121 26.4078 15.5048 26.1949C16.1673 25.7118 16.3129 24.7829 15.8297 24.1204L15.2728 23.3566C15.1608 23.203 15.1303 22.9368 15.2045 22.762L17.5911 17.1396C17.6653 16.9648 17.6147 16.7159 17.4778 16.5841C16.9127 16.0387 15.5236 14.701 14.8484 14.0721C14.7093 13.9425 14.7056 13.7322 14.842 13.5999L17.8453 10.6842C17.9815 10.5518 18.1963 10.5578 18.325 10.6976L21.0845 13.335Z" fill="black"/>
            </svg>
          </div>
          <div className='icon-title'>
            <h1 data-aos='fade-left' data-aos-duration='2500'>800</h1>
            <p data-aos='fade-left' data-aos-duration='3000'>Riders</p>
          </div>
        </div>
      </section>
      {/* Numbered Data Section End */}

      {/* Benefits Section Start */}
      <section className='benefits'>
        <div className='container'>
          <div className='benefits-flex'>
            <h1>What are the Benefits We offer to you</h1>
            <Link to="">
              View All 
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                <path d="M8.75 21.25L21.25 8.75M21.25 8.75H10M21.25 8.75V20" stroke="black" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </Link>
          </div>
          <div className='benefits-grid'>
            <div className='item' data-aos='fade-up' data-aos-duration='500'>
              <svg data-aos='fade-right' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 70 70" fill="none">
                <path d="M22.6042 7.29175C22.6042 6.08364 21.6248 5.10425 20.4167 5.10425C19.2086 5.10425 18.2292 6.08364 18.2292 7.29175V11.8979C14.0311 12.2341 11.2752 13.0591 9.25042 15.0838C7.22567 17.1086 6.40066 19.8645 6.06451 24.0626H63.9354C63.5994 19.8645 62.7743 17.1086 60.7495 15.0838C58.7248 13.0591 55.9688 12.2341 51.7708 11.8979V7.29175C51.7708 6.08364 50.7914 5.10425 49.5833 5.10425C48.3753 5.10425 47.3958 6.08364 47.3958 7.29175V11.7044C45.4554 11.6667 43.2804 11.6667 40.8333 11.6667H29.1667C26.7195 11.6667 24.5445 11.6667 22.6042 11.7044V7.29175Z" fill="#F5B301"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.83331 35C5.83331 32.5529 5.83331 30.378 5.87094 28.4375H64.129C64.1666 30.378 64.1666 32.5529 64.1666 35V40.8333C64.1666 51.8327 64.1666 57.3326 60.7495 60.7495C57.3326 64.1667 51.8326 64.1667 40.8333 64.1667H29.1666C18.1672 64.1667 12.6675 64.1667 9.25039 60.7495C5.83331 57.3326 5.83331 51.8327 5.83331 40.8333V35ZM49.5833 40.8333C51.1942 40.8333 52.5 39.5275 52.5 37.9167C52.5 36.3058 51.1942 35 49.5833 35C47.9724 35 46.6666 36.3058 46.6666 37.9167C46.6666 39.5275 47.9724 40.8333 49.5833 40.8333ZM49.5833 52.5C51.1942 52.5 52.5 51.1942 52.5 49.5833C52.5 47.9725 51.1942 46.6667 49.5833 46.6667C47.9724 46.6667 46.6666 47.9725 46.6666 49.5833C46.6666 51.1942 47.9724 52.5 49.5833 52.5ZM37.9166 37.9167C37.9166 39.5275 36.6109 40.8333 35 40.8333C33.3891 40.8333 32.0833 39.5275 32.0833 37.9167C32.0833 36.3058 33.3891 35 35 35C36.6109 35 37.9166 36.3058 37.9166 37.9167ZM37.9166 49.5833C37.9166 51.1942 36.6109 52.5 35 52.5C33.3891 52.5 32.0833 51.1942 32.0833 49.5833C32.0833 47.9725 33.3891 46.6667 35 46.6667C36.6109 46.6667 37.9166 47.9725 37.9166 49.5833ZM20.4166 40.8333C22.0275 40.8333 23.3333 39.5275 23.3333 37.9167C23.3333 36.3058 22.0275 35 20.4166 35C18.8058 35 17.5 36.3058 17.5 37.9167C17.5 39.5275 18.8058 40.8333 20.4166 40.8333ZM20.4166 52.5C22.0275 52.5 23.3333 51.1942 23.3333 49.5833C23.3333 47.9725 22.0275 46.6667 20.4166 46.6667C18.8058 46.6667 17.5 47.9725 17.5 49.5833C17.5 51.1942 18.8058 52.5 20.4166 52.5Z" fill="#F5B301"/>
              </svg>
              <h1 data-aos='fade-right'>
                UP TO DATE TRACKING
              </h1>
              <p data-aos='fade-right'>
                Lets you keep track of your parcel with no hassle using the one-click tracker.
              </p>
              <Link to="" data-aos='fade-right'>
                Learn more
              </Link>
            </div>
            <div className='item' data-aos='fade-up' data-aos-duration='1000'>
              <svg data-aos='fade-right' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 70 70" fill="none">
                <path d="M35 33.25C54.332 33.25 70 26.7148 70 18.6621C70 10.6094 54.332 4.07422 35 4.07422C15.668 4.07422 0 10.6094 0 18.6621C0 26.7148 15.668 33.25 35 33.25ZM35 56.5742C21.6426 56.5742 9.83008 53.3613 2.37891 48.3984C0.861328 50.0391 0 51.8027 0 53.6621C0 61.7149 15.668 68.25 35 68.25C54.332 68.25 70 61.7149 70 53.6621C70 51.8027 69.1387 50.0391 67.6211 48.4121C60.1699 53.3613 48.3574 56.5742 35 56.5742ZM35 39.0742C21.6426 39.0742 9.83008 35.8613 2.37891 30.8984C0.861328 32.5391 0 34.3027 0 36.1621C0 44.2148 15.668 50.75 35 50.75C54.332 50.75 70 44.2148 70 36.1621C70 34.3027 69.1387 32.5391 67.6211 30.9121C60.1699 35.8613 48.3574 39.0742 35 39.0742Z" fill="#F5B301"/>
              </svg>
              <h1 data-aos='fade-right'>
                MORE AFFORDABLE RATES
              </h1>
              <p data-aos='fade-right'>
                We offer low-cost shipping rates with convenient modes of payment.
              </p>
              <Link to="" data-aos='fade-right'>
                Learn more
              </Link>
            </div>
            <div className='item' data-aos='fade-up' data-aos-duration='1500'>
              <svg data-aos='fade-right' xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 70 70" fill="none">
                <path d="M42.529 17.8438C42.3973 17.0725 41.729 16.5083 40.946 16.5083H4.84395C3.80352 16.5083 2.96105 17.3517 2.96105 18.3902C2.96105 19.4307 3.80352 20.2731 4.84395 20.2731H13.6299C14.6703 20.2731 15.5128 21.1167 15.5128 22.1562C15.5128 23.1956 14.6703 24.039 13.6299 24.039H1.88289C0.843418 24.039 0 24.8825 0 25.9219C0 26.9614 0.843418 27.8037 1.88289 27.8037H17.8946C18.8133 27.8037 19.5587 28.5502 19.5587 29.469C19.5587 30.3877 18.8133 31.1331 17.8946 31.1331H9.38779C8.34736 31.1331 7.5049 31.9767 7.5049 33.0161C7.5049 34.0555 8.34736 34.899 9.38779 34.899H15.6573C16.5769 34.899 17.3224 35.6444 17.3224 36.5632C17.3224 37.4818 16.5769 38.2273 15.6573 38.2273H7.00205C5.96162 38.2273 5.11916 39.0707 5.11916 40.1102C5.11916 41.1497 5.96162 41.9931 7.00205 41.9931H18.8985L19.6488 46.2371H23.9582C23.7047 46.8529 23.5602 47.5251 23.5602 48.2329C23.5602 51.1375 25.9142 53.4917 28.8189 53.4917C31.7224 53.4917 34.0766 51.1375 34.0766 48.2329C34.0766 47.5251 33.9321 46.8529 33.6786 46.2371H47.356L42.529 17.8438ZM31.0819 48.2328C31.0819 49.4832 30.0692 50.4959 28.8188 50.4959C27.5676 50.4959 26.5547 49.4832 26.5547 48.2328C26.5547 47.3627 27.0506 46.6162 27.7704 46.237H29.8662C30.5859 46.6162 31.0819 47.3626 31.0819 48.2328Z" fill="#F5B301"/>
                <path d="M69.9451 42.9395L67.785 32.2835L59.8979 20.1484H45.5375L49.9855 46.237H55.2382C54.9858 46.8528 54.8412 47.525 54.8412 48.2328C54.8412 51.1374 57.1953 53.4915 60.0988 53.4915C63.0036 53.4915 65.3576 51.1374 65.3576 48.2328C65.3576 47.525 65.2131 46.8528 64.9597 46.237H67.2485C68.0742 46.237 68.8562 45.8667 69.3789 45.2272C69.9006 44.5888 70.1094 43.7483 69.9451 42.9395ZM53.6661 25.0033H57.2637L61.9343 32.1875H54.8916L53.6661 25.0033ZM62.3629 48.2328C62.3629 49.4832 61.3502 50.4959 60.0988 50.4959C58.8495 50.4959 57.8359 49.4832 57.8359 48.2328C57.8359 47.3627 58.3328 46.6162 59.0516 46.237H61.1473C61.867 46.6162 62.3629 47.3626 62.3629 48.2328Z" fill="#F5B301"/>
              </svg>
              <h1 data-aos='fade-right'>
                FAST AND TIMELY DELIVERY
              </h1>
              <p data-aos='fade-right'>
                Equipped with an effective and effecient system that delivers your parcels on time.
              </p>
              <Link to="" data-aos='fade-right'>
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits Section End */}

      {/* Portfolio Section Start */}
      <section className='portfolio container'>
        <div className='title-desc' data-aos='zoom-in-right' data-aos-duration='1000'>
          <h1>The Best Courier Company in the Country</h1>
          <p>
            MCHA Express stands out as the premier courier services platform, offering unparalleled speed, security, and reliability. Experience the benefits of seamless connections, timely deliveries, and unmatched customer satisfaction – making us the top choice for all your shipping needs.
          </p>
        </div>
        <div className='experiences' data-aos='zoom-in-left' data-aos-duration='1000'>
          <div className='img-src-bg'></div>
          <div className='img-src'>
            <img src={Banner2} alt='experience-img'/>
          </div>
          <div className='experience-desc-bg'></div>
          <div className='experience-desc'>
            <h1>10 YEARS EXPERIENCE</h1>
            <p>Swift, secure, and on-time deliveries for a decade. Your reliable choice for businesses and individuals.</p>
          </div>
        </div>
        <div className='portfolio-data' data-aos='zoom-in-right' data-aos-duration='1000'>
          <div className='port'>
            <h1>20+</h1>
            <p>Years of Experience</p>
          </div>
          <div className='port'>
            <h1>160+</h1>
            <p>Clients</p>
          </div>
          <div className='port'>
            <h1>300+</h1>
            <p>Deliveries</p>
          </div>
        </div>
        <div className='about-more' data-aos='zoom-in-right' data-aos-duration='1000'>
          <Link>
            About More
          </Link>
        </div>
      </section>
      {/* Portfolio Section End */}

      {/* News Section Start */}
      <section className='news'>
        <div className='container'>
          <div className='header'>
            <h1>News & Events</h1>
            <p>Your Gateway to Timely Updates and Exciting Events in the World of Couriers!</p>
          </div>
          <div className='news-grid'>
            <Link className='item' data-aos='zoom-in-up' data-aos-duration='1000'>
              <div className='news-img'>
                <img src={Banner1} alt='news-img'/>
              </div>
              <div className='icon-dialog'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" fill="none">
                  <g clip-path="url(#clip0_85_142)">
                    <path d="M43.75 4.1665H6.24999C5.69746 4.1665 5.16755 4.386 4.77685 4.7767C4.38615 5.1674 4.16666 5.6973 4.16666 6.24984V43.7498C4.16666 44.3024 4.38615 44.8323 4.77685 45.223C5.16755 45.6137 5.69746 45.8332 6.24999 45.8332H43.75C44.3025 45.8332 44.8324 45.6137 45.2231 45.223C45.6138 44.8323 45.8333 44.3024 45.8333 43.7498V6.24984C45.8333 5.6973 45.6138 5.1674 45.2231 4.7767C44.8324 4.386 44.3025 4.1665 43.75 4.1665ZM12.5 16.6665C12.5 16.114 12.7195 15.5841 13.1102 15.1934C13.5009 14.8027 14.0308 14.5832 14.5833 14.5832H20.8333C21.3859 14.5832 21.9158 14.8027 22.3065 15.1934C22.6972 15.5841 22.9167 16.114 22.9167 16.6665V24.9998C22.9167 25.5524 22.6972 26.0823 22.3065 26.473C21.9158 26.8637 21.3859 27.0832 20.8333 27.0832H14.5833C14.0308 27.0832 13.5009 26.8637 13.1102 26.473C12.7195 26.0823 12.5 25.5524 12.5 24.9998V16.6665ZM35.4167 35.4165H14.5833C14.0308 35.4165 13.5009 35.197 13.1102 34.8063C12.7195 34.4156 12.5 33.8857 12.5 33.3332C12.5 32.7806 12.7195 32.2507 13.1102 31.86C13.5009 31.4693 14.0308 31.2498 14.5833 31.2498H35.4167C35.9692 31.2498 36.4991 31.4693 36.8898 31.86C37.2805 32.2507 37.5 32.7806 37.5 33.3332C37.5 33.8857 37.2805 34.4156 36.8898 34.8063C36.4991 35.197 35.9692 35.4165 35.4167 35.4165ZM35.4167 27.0832H29.1667C28.6141 27.0832 28.0842 26.8637 27.6935 26.473C27.3028 26.0823 27.0833 25.5524 27.0833 24.9998C27.0833 24.4473 27.3028 23.9174 27.6935 23.5267C28.0842 23.136 28.6141 22.9165 29.1667 22.9165H35.4167C35.9692 22.9165 36.4991 23.136 36.8898 23.5267C37.2805 23.9174 37.5 24.4473 37.5 24.9998C37.5 25.5524 37.2805 26.0823 36.8898 26.473C36.4991 26.8637 35.9692 27.0832 35.4167 27.0832ZM35.4167 18.7498H29.1667C28.6141 18.7498 28.0842 18.5303 27.6935 18.1396C27.3028 17.7489 27.0833 17.219 27.0833 16.6665C27.0833 16.114 27.3028 15.5841 27.6935 15.1934C28.0842 14.8027 28.6141 14.5832 29.1667 14.5832H35.4167C35.9692 14.5832 36.4991 14.8027 36.8898 15.1934C37.2805 15.5841 37.5 16.114 37.5 16.6665C37.5 17.219 37.2805 17.7489 36.8898 18.1396C36.4991 18.5303 35.9692 18.7498 35.4167 18.7498Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_85_142">
                      <rect width="60" height="60" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className='news-details'>
                <h1>News Title</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </Link>
            <Link className='item' data-aos='zoom-in-up' data-aos-duration='1000'>
              <div className='news-img'>
                <img src={Banner2} alt='news-img'/>
              </div>
              <div className='icon-dialog'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" fill="none">
                  <g clip-path="url(#clip0_85_142)">
                    <path d="M43.75 4.1665H6.24999C5.69746 4.1665 5.16755 4.386 4.77685 4.7767C4.38615 5.1674 4.16666 5.6973 4.16666 6.24984V43.7498C4.16666 44.3024 4.38615 44.8323 4.77685 45.223C5.16755 45.6137 5.69746 45.8332 6.24999 45.8332H43.75C44.3025 45.8332 44.8324 45.6137 45.2231 45.223C45.6138 44.8323 45.8333 44.3024 45.8333 43.7498V6.24984C45.8333 5.6973 45.6138 5.1674 45.2231 4.7767C44.8324 4.386 44.3025 4.1665 43.75 4.1665ZM12.5 16.6665C12.5 16.114 12.7195 15.5841 13.1102 15.1934C13.5009 14.8027 14.0308 14.5832 14.5833 14.5832H20.8333C21.3859 14.5832 21.9158 14.8027 22.3065 15.1934C22.6972 15.5841 22.9167 16.114 22.9167 16.6665V24.9998C22.9167 25.5524 22.6972 26.0823 22.3065 26.473C21.9158 26.8637 21.3859 27.0832 20.8333 27.0832H14.5833C14.0308 27.0832 13.5009 26.8637 13.1102 26.473C12.7195 26.0823 12.5 25.5524 12.5 24.9998V16.6665ZM35.4167 35.4165H14.5833C14.0308 35.4165 13.5009 35.197 13.1102 34.8063C12.7195 34.4156 12.5 33.8857 12.5 33.3332C12.5 32.7806 12.7195 32.2507 13.1102 31.86C13.5009 31.4693 14.0308 31.2498 14.5833 31.2498H35.4167C35.9692 31.2498 36.4991 31.4693 36.8898 31.86C37.2805 32.2507 37.5 32.7806 37.5 33.3332C37.5 33.8857 37.2805 34.4156 36.8898 34.8063C36.4991 35.197 35.9692 35.4165 35.4167 35.4165ZM35.4167 27.0832H29.1667C28.6141 27.0832 28.0842 26.8637 27.6935 26.473C27.3028 26.0823 27.0833 25.5524 27.0833 24.9998C27.0833 24.4473 27.3028 23.9174 27.6935 23.5267C28.0842 23.136 28.6141 22.9165 29.1667 22.9165H35.4167C35.9692 22.9165 36.4991 23.136 36.8898 23.5267C37.2805 23.9174 37.5 24.4473 37.5 24.9998C37.5 25.5524 37.2805 26.0823 36.8898 26.473C36.4991 26.8637 35.9692 27.0832 35.4167 27.0832ZM35.4167 18.7498H29.1667C28.6141 18.7498 28.0842 18.5303 27.6935 18.1396C27.3028 17.7489 27.0833 17.219 27.0833 16.6665C27.0833 16.114 27.3028 15.5841 27.6935 15.1934C28.0842 14.8027 28.6141 14.5832 29.1667 14.5832H35.4167C35.9692 14.5832 36.4991 14.8027 36.8898 15.1934C37.2805 15.5841 37.5 16.114 37.5 16.6665C37.5 17.219 37.2805 17.7489 36.8898 18.1396C36.4991 18.5303 35.9692 18.7498 35.4167 18.7498Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_85_142">
                      <rect width="60" height="60" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className='news-details'>
                <h1>News Title</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </Link>
            <Link className='item' data-aos='zoom-in-up' data-aos-duration='1000'>
              <div className='news-img'>
                <img src={Banner3} alt='news-img'/>
              </div>
              <div className='icon-dialog'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 50 50" fill="none">
                  <g clip-path="url(#clip0_85_142)">
                    <path d="M43.75 4.1665H6.24999C5.69746 4.1665 5.16755 4.386 4.77685 4.7767C4.38615 5.1674 4.16666 5.6973 4.16666 6.24984V43.7498C4.16666 44.3024 4.38615 44.8323 4.77685 45.223C5.16755 45.6137 5.69746 45.8332 6.24999 45.8332H43.75C44.3025 45.8332 44.8324 45.6137 45.2231 45.223C45.6138 44.8323 45.8333 44.3024 45.8333 43.7498V6.24984C45.8333 5.6973 45.6138 5.1674 45.2231 4.7767C44.8324 4.386 44.3025 4.1665 43.75 4.1665ZM12.5 16.6665C12.5 16.114 12.7195 15.5841 13.1102 15.1934C13.5009 14.8027 14.0308 14.5832 14.5833 14.5832H20.8333C21.3859 14.5832 21.9158 14.8027 22.3065 15.1934C22.6972 15.5841 22.9167 16.114 22.9167 16.6665V24.9998C22.9167 25.5524 22.6972 26.0823 22.3065 26.473C21.9158 26.8637 21.3859 27.0832 20.8333 27.0832H14.5833C14.0308 27.0832 13.5009 26.8637 13.1102 26.473C12.7195 26.0823 12.5 25.5524 12.5 24.9998V16.6665ZM35.4167 35.4165H14.5833C14.0308 35.4165 13.5009 35.197 13.1102 34.8063C12.7195 34.4156 12.5 33.8857 12.5 33.3332C12.5 32.7806 12.7195 32.2507 13.1102 31.86C13.5009 31.4693 14.0308 31.2498 14.5833 31.2498H35.4167C35.9692 31.2498 36.4991 31.4693 36.8898 31.86C37.2805 32.2507 37.5 32.7806 37.5 33.3332C37.5 33.8857 37.2805 34.4156 36.8898 34.8063C36.4991 35.197 35.9692 35.4165 35.4167 35.4165ZM35.4167 27.0832H29.1667C28.6141 27.0832 28.0842 26.8637 27.6935 26.473C27.3028 26.0823 27.0833 25.5524 27.0833 24.9998C27.0833 24.4473 27.3028 23.9174 27.6935 23.5267C28.0842 23.136 28.6141 22.9165 29.1667 22.9165H35.4167C35.9692 22.9165 36.4991 23.136 36.8898 23.5267C37.2805 23.9174 37.5 24.4473 37.5 24.9998C37.5 25.5524 37.2805 26.0823 36.8898 26.473C36.4991 26.8637 35.9692 27.0832 35.4167 27.0832ZM35.4167 18.7498H29.1667C28.6141 18.7498 28.0842 18.5303 27.6935 18.1396C27.3028 17.7489 27.0833 17.219 27.0833 16.6665C27.0833 16.114 27.3028 15.5841 27.6935 15.1934C28.0842 14.8027 28.6141 14.5832 29.1667 14.5832H35.4167C35.9692 14.5832 36.4991 14.8027 36.8898 15.1934C37.2805 15.5841 37.5 16.114 37.5 16.6665C37.5 17.219 37.2805 17.7489 36.8898 18.1396C36.4991 18.5303 35.9692 18.7498 35.4167 18.7498Z" fill="black"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_85_142">
                      <rect width="60" height="60" fill="white"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div className='news-details'>
                <h1>News Title</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </Link>
          </div>
          <Link 
            to=''
            className='news-view'
          >
            View More
          </Link>
        </div>
      </section>
      {/* News Section End */}

      {/* Rates Section Start */}
      <section className='rates container'>
        <div className='rates-grid'>
          <div className='item'>
            <h1>Discover Our Competitive Shipping Rates Now!</h1>
            <div className='loadbar'>
              <div className='loaded' style={{ width: `${loadingPercentage}%` }}></div>
            </div>
          </div>
          <div className='item'>
            <p>Unlock unbeatable deals on swift and reliable shipping solutions tailored to your needs.</p>
            <div className='lr-btn'>
              <button onClick={handlePrevClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 26" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.975 1.0748C15.3196 1.43295 15.5079 1.91324 15.4985 2.41015C15.4891 2.90705 15.2828 3.37991 14.925 3.7248L5.08 12.9998L14.925 22.2748C15.1109 22.4434 15.261 22.6476 15.3665 22.8753C15.472 23.1029 15.5307 23.3495 15.5392 23.6003C15.5477 23.851 15.5057 24.101 15.4158 24.3353C15.3259 24.5695 15.1899 24.7834 15.0159 24.9642C14.8418 25.1449 14.6332 25.2889 14.4025 25.3875C14.1718 25.4862 13.9236 25.5376 13.6727 25.5386C13.4218 25.5396 13.1732 25.4902 12.9417 25.3933C12.7102 25.2965 12.5005 25.1542 12.325 24.9748L1.075 14.3498C0.893537 14.1749 0.749196 13.9652 0.650607 13.7332C0.552018 13.5013 0.501205 13.2518 0.501205 12.9998C0.501205 12.7478 0.552018 12.4983 0.650607 12.2664C0.749196 12.0344 0.893537 11.8247 1.075 11.6498L12.325 1.0248C12.6831 0.680224 13.1634 0.491935 13.6604 0.501311C14.1573 0.510686 14.6301 0.716959 14.975 1.0748Z" fill="#F5B301"/>
                </svg>
              </button>
              <button onClick={handleNextClick}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 26" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.025 24.9252C0.680224 24.5671 0.491935 24.0868 0.501311 23.5898C0.510686 23.0929 0.716959 22.6201 1.0748 22.2752L10.925 13.0002L1.0748 3.7252C0.889122 3.5566 0.739021 3.35239 0.633476 3.12467C0.527932 2.89698 0.469227 2.65035 0.460736 2.3997C0.452245 2.14904 0.494297 1.899 0.584177 1.66472C0.674057 1.43044 0.810073 1.21653 0.984086 1.0358C1.1581 0.855063 1.36677 0.711047 1.59747 0.612448C1.82816 0.513848 2.07636 0.462402 2.32727 0.461385C2.57816 0.460368 2.82676 0.509757 3.0582 0.606677C3.28964 0.703597 3.49934 0.845827 3.6748 1.0252L14.925 11.6502C15.1065 11.8251 15.2508 12.0348 15.3494 12.2668C15.4479 12.4987 15.4987 12.7482 15.4987 13.0002C15.4987 13.2522 15.4479 13.5017 15.3494 13.7336C15.2508 13.9656 15.1065 14.1753 14.925 14.3502L3.675 24.9752C3.31692 25.3198 2.83664 25.5081 2.33973 25.4987C1.84283 25.4893 1.37097 25.283 1.026 24.9252Z" fill="#F5B301"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className='rates-overflow' data-aos='zoom-in-up' data-aos-duration='1000'>
          <div className='rates-grid-main' style={{ transform: `translateX(${-currentSlide * 350}px)` }}>
            <div className='item'>
              <div className='top'>
                <h1>PROVINCIAL RATES</h1>
              </div>
              <div className='middle'>
                <p>
                  
                </p>
              </div>
              <div className='bottom'>
                <p>
                  MEDIUM (9X14) 165 (1KG)<br/>
                  LARGE (12X18) 250(3KG)<br/>
                  OWN PACK (LxWxH) 265(3KG)
                </p>
                <div className='bottom-desc'>
                  *ADD ON 85 PESOS FOR EVERY 1 KILO
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='top'>
                <h1>METRO MANILA</h1>
              </div>
              <div className='middle'>
                <p>
                  
                </p>
              </div>
              <div className='bottom'>
                <p>
                  MEDIUM (9X14) Unliweight - P55<br/>
                  LARGE (12X18) 1kg-3 Kg - P70<br/>
                  OWN PACK (LxWxH) 1st 3kg - P85
                </p>
                <div className='bottom-desc'>
                  *ADD ON 30 PESOS FOR EVERY 1 KILO
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='top'>
                <h1>CAVITE 1</h1>
              </div>
              <div className='middle'>
                <p>
                  (Imus, Trece Martires, Gen Trias, Bacoor, Dasmarinas, Brgy Pangunayan Noveleta, Kawit, Tanza, Rosario, Cavite City)
                </p>
              </div>
              <div className='bottom'>
                <p>
                  MEDIUM (9X14) (1 kilo) - 85<br/>
                  LARGE (12X18) 1kg-3 kg - 95<br/>
                  OWN PACK (LxWxH) 1st 3kg - 130
                </p>
                <div className='bottom-desc'>
                  *ADD ON 40 PESOS FOR EVERY 1 KILO
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='top'>
                <h1>CAVITE 2</h1>
              </div>
              <div className='middle'>
                <p>
                  (CARMONA, SILANG CAVITE (Brgy. Bulihan), G.M.A)
                </p>
              </div>
              <div className='bottom'>
                <p>
                  MEDIUM (9X14) (1 kilo) - 110<br/>
                  LARGE (12X18) 1kg-3 kg - 180<br/>
                  OWN PACK (LxWxH) 1st 3kg - 220
                </p>
                <div className='bottom-desc'>
                  *ADD ON 50 PESOS FOR EVERY 1 KILO
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='top'>
                <h1>LAGUNA</h1>
              </div>
              <div className='middle'>
                <p>
                  (Binan, San Pedro, Sta. Rosa, Cabuyao)
                </p>
              </div>
              <div className='bottom'>
                <p>
                  MEDIUM (9X14) (1 kilo) - 85<br/>
                  LARGE (12X18) 1kg-3 k - 95<br/>
                  OWN PACK (LxWxH) 1st 3kg - 130
                </p>
                <div className='bottom-desc'>
                  *ADD ON 40 PESOS FOR EVERY 1 KILO
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='top'>
                <h1>RIZAL 1</h1>
              </div>
              <div className='middle'>
                <p>
                  (San Mateo, Ampid1-2, Guitnang bayan 1-2, Cainta, Taytay, Angono, Maly, Dulong Bayan 1-2, Sta. Ana, Banaba, ANTIPOLO, Cupang, Mayamot, San Isidro, Dalig, San Roque, Dela Paz, Sta Cruz,  Mambugan)
                </p>
              </div>
              <div className='bottom'>
                <p>
                  MEDIUM (9X14) (1 kilo) - 70<br/>
                  LARGE (12X18) 1kg-3 kg - 85<br/>
                  OWN PACK (LxWxH) 1st 3kg - 95
                </p>
                <div className='bottom-desc'>
                  *ADD ON 40 PESOS FOR EVERY 1 KILO
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='top'>
                <h1>RIZAL 2</h1>
              </div>
              <div className='middle'>
                <p>
                  (Montalban, Rodriguez,Silangan, San mateo, Teresa ,Morong, Baraz Brgy. Evangelista, Brgy. JP Rizal Cardona Brgy. Dalig, Brgy. Calahan, Brgy. San Roque, Brgy. Del Remodio, Pililia Brgy. Bagong Bayan, Hulo, MA Roxas, Tanay Brgy. Katbayani, Kaybuto, Pinagkamaligan, Wawa, Catambay, Binangonan)
                </p>
              </div>
              <div className='bottom'>
                <p>
                  MEDIUM (9X14) (1 kilo) - 105<br/>
                  LARGE (12X18) 1kg-3 kg - 115<br/>
                  OWN PACK (LxWxH) 1st 3kg - 205
                </p>
                <div className='bottom-desc'>
                  *ADD ON 60 PESOS FOR EVERY 1 KILO
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='top'>
                <h1>BULACAN 1</h1>
              </div>
              <div className='middle'>
                <p>
                  (Meycauayan, Marilao, Bocaue, Sta. Maria, San Jose del monte, Guiguinto, Balagtas, Malolos, Plaridel, Bulakan Bulacan, Obando, Muzon)
                </p>
              </div>
              <div className='bottom'>
                <p>
                  MEDIUM (9X14) (1 kilo) - 90<br/>
                  LARGE (12X18) 1kg-3 kg - 100<br/>
                  OWN PACK (LxWxH) 1st 3kg - 125
                </p>
                <div className='bottom-desc'>
                  *ADD ON 45 PESOS FOR EVERY 1 KILO
                </div>
              </div>
            </div>
            <div className='item'>
              <div className='top'>
                <h1>BULACAN 2</h1>
              </div>
              <div className='middle'>
                <p>
                  (Pulilan, Baliwag, Paombong, Hagonoy, Calumpit, Pandi)
                </p>
              </div>
              <div className='bottom'>
                <p>
                  MEDIUM (9X14) (1 kilo) - 110<br/>
                  LARGE (12X18) 1kg-3 kg - 180<br/>
                  OWN PACK (LxWxH) 1st 3kg - 220
                </p>
                <div className='bottom-desc'>
                  *ADD ON 50 PESOS FOR EVERY 1 KILO
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Rates Section End */}

      {/* Footer Section Start */}
      <Footer/>
      {/* Footer Section End */}
      </>
  );
}

export default Home;