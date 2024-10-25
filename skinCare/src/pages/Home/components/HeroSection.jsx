// Import Swiper React components
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function HeroSection() {
    const [products, setProducts] = useState([]);
    const getSwiperSlides = () => {
        axios.get("http://localhost:1337/api/slider-ones", {
            params: {
                populate: "*",
            }
        }).then((res) => {
            setProducts(res.data.data);
            // console.log(res.data.data);
        })
    }
    useEffect(() => {
        getSwiperSlides();
    }, [])
    return (
        <div className="col-12" id="HeroSection">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={100}
                breakpoints={{
                    // when window width is >= 320px
                    100: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    767: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    992: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    // // when window width is >= 480px
                    // 480: {
                    //     slidesPerView: 1,
                    //     spaceBetween: 30
                    // },
                    // // when window width is >= 640px
                    // 640: {
                    //     slidesPerView: 1,
                    //     spaceBetween: 40
                    // }
                }}
                navigation
                // autoplay={{ delay: 1000 }}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                // onSlideChange={() => alert('Slide Changed')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    products.map((el, index) => {
                        return (
                            <SwiperSlide key={el.documentId}>
                                <div className='d-flex flex-wrap' style={{ height: "100vh", backgroundColor: "white", color: "white" }}>
                                    <h1 className='col-12'>{el.slide_name}</h1>
                                    <img className='col-12' style={{height:"90vh" ,objectFit:"contain"}} src={`http://localhost:1337${el.slide_img.url}`}/>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div>
    )
}
