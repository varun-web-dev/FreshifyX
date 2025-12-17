import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper/modules';

import Heading from '../Heading/Heading.jsx'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import Customer1 from '../../assets/customer1.jpg'
import Customer2 from '../../assets/customer2.jpg'
import Customer3 from '../../assets/customer3.jpg'
import Customer4 from '../../assets/customer4.jpg'
import Customer5 from '../../assets/customer5.jpg'
import { IoTimeSharp } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {

  return (
    <section>
      <div className='max-w-[1300px] mx-auto px-10 py-10'>
        <Heading highlight="Customers" heading="Saying" />

        <div className='flex justify-end py-5 gap-x-2'>
          <button className='custom-prev text-2xl rounded-lg bg-zinc-100 text-zinc-800 hover:bg-linear-to-b hover:from-green-400 hover:to-green-500 hover:text-white cursor-pointer w-10 h-10 flex items-center justify-center'>
            <IoIosArrowBack />
          </button>

          <button className='custom-next text-2xl rounded-lg bg-zinc-100 text-zinc-800 hover:bg-linear-to-b hover:from-green-400 hover:to-green-500 hover:text-white cursor-pointer w-10 h-10 flex items-center justify-center'>
            <IoIosArrowForward />
          </button>
        </div>

        <Swiper navigation={{
          nextEl: '.custom-next',
          prevEl: '.custom-prev',
        }}

          loop={true}
          breakpoints={{
              640: {slidesPerView:1, spaceBetween:20},
              768: {slidesPerView:2, spaceBetween:20},
              1024: {slidesPerView:3, spaceBetween:20}
          }}
          modules={[Navigation]} className="">
          {
            review.map((item) => {
              return (
                <SwiperSlide key={item.id} className='bg-zinc-200 rounded-xl p-8'>
                  <div className='flex gap-5 items-center'>

                    <img src={item.image} alt="" className='w-15 h-15 rounded-full bg-red-300 outline-green-500 outline-3 outline-offset-4'/>
                    <div>
                      <h5 className='text-xl font-bold'>{item.name}</h5>
                      <p className='text-zinc-600'>{item.profession}</p>
                      <span className='flex text-yellow-400 mt-2 text-xl gap-1'>
                        {Array.from({length: item.rating}, (_, index)=>(
                        <FaStar /> 
                      ))}
                      </span>
                    </div>

                  </div>

                  <div className='mt-10 min-h-[15vh]'>
                    <p className='text-zinc-600'>{item.paragraph}</p>
                  </div>
                </SwiperSlide>

              )
            })

          }

        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials

const review = [
  {
    id: 1,
    name: "Emily Davis",
    profession: "Food Blogger",
    rating: 5,
    paragraph: "FreshifyX has transformed the way I shop for groceries. Their fresh produce and quick delivery make my life so much easier!",
    image: Customer1,
  },
  {
    id: 2,
    name: "Jane Smith",
    profession: "Chef",
    rating: 4,
    paragraph: "As a professional chef, I rely on FreshifyX for high-quality ingredients. Their selection is top-notch, and the service is impeccable.",
    image: Customer2,
  },
  {
    id: 3,
    name: "Izabel Conklin",
    profession: "Health Enthusiast",
    rating: 5,
    paragraph: "I love how FreshifyX focuses on fresh and healthy products. It's my go-to for nutritious groceries that support my lifestyle.",
    image: Customer3,
  },
  {
    id: 4,
    name: "Emily Davis",
    profession: "Busy Mom",
    rating: 4,
    paragraph: "FreshifyX has been a lifesaver for my family. The convenience of having fresh groceries delivered to my door saves me so much time.",
    image: Customer5,
  },
  {
    id: 5,
    name: "David Wilson",
    profession: "Fitness Trainer",
    rating: 5,
    paragraph: "FreshifyX provides the perfect ingredients for my meal prep. Their fresh produce and healthy options help me stay on track with my fitness goals.",
    image: Customer4,
  }

]