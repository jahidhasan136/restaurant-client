import { useEffect, useState } from "react";
import SectionTitle from "../../components/sectionTitle";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

// react icons
import { FaQuoteLeft } from "react-icons/fa";

// react ratings
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonials = () => {
  const [review, setReview] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReview(data);
      });
  }, []);
  return (
    <div className="container mt-[130px]">
      <SectionTitle
        subHeader={"What Our Clients Say"}
        header={"Testimonials"}
      />
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          {review.map((item) => (
            <SwiperSlide key={item?._id}>
              <div className="text-center px-[68px]">
                <Rating
                  className="mx-auto mb-12"
                  style={{ maxWidth: 180 }}
                  value={item?.rating}
                  readOnly
                />
                <FaQuoteLeft className="flex justify-center mx-auto w-[100px] h-[100px] mb-10" />
                <p className="mb-2 text-xl leading-[35px]">{item?.details}</p>
                <h4 className="text-[#CD9003] text-[32px]">{item?.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
