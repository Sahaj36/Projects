import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

import "./style.css";

// // import images
// import img6 from "./images/img6.jpg";
// import img7 from "./images/img7.jpg";
// import img8 from "./images/img8.jpg";
// import img9 from "./images/img9.jpg";
// import img10 from "./images/img10.jpg";

function HomePage() {
  return (
    <>
      <Swiper
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        {/* <SwiperSlide>
          <img src={img6} alt="" />
        </SwiperSlide> */}
        <SwiperSlide>
          <img
            src="https://www.thenovl.com/wp-content/uploads/2020/12/HBGSites_NOVL_20201207_DarkAcademiaAesthetic.jpg?fit=1920%2C1080"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/free-photo/top-view-books-with-flowers-arrangement_23-2149871464.jpg?w=2000"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/9969154/pexels-photo-9969154.jpeg?cs=srgb&dl=pexels-vlada-karpovich-9969154.jpg&fm=jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1595123550441-d377e017de6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2xkJTIwYm9va3N8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default HomePage;
