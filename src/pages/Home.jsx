import React, { useEffect, useState } from "react";
import { forest, hero } from "../assets";
import ItemCard from "../components/ItemCard";
import HeroCard from "../components/HeroCard";
import { newProduct, topSellers } from "../store/data";

// carousel imports
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const Home = () => {
  const [count, setCount] = useState([]);

  useEffect(() => {
    fetch('https://pixabay.com/api/?key=31152943-281e68b71e6bc477d117d000e&q=football&image_type=photo')
    .then(res => res.json())
    .then(data => {
      setCount(data.hits)
    })
  },[1])

  console.log(count)

  return (
    <div>
      {/* carousel section */}
      <div className="w-full p-6">
        <Carousel
          showThumbs={false}
          showStatus={false}
          autoPlay={1000}
          infiniteLoop={true}
          showArrows={false}
        >
          <div className="w-[80%] mx-auto h-[550px] relative">
            <div className="absolute w-full h-full flex flex-col items-start justify-center p-10 text-white gap-8 z-10">
              <h1 className="text-2xl md:text-5xl font-bold">
                We have filled up the bargain corner with hundreds of items
                online and in store!
              </h1>
              <p className="text-xl">
                adidas, Bergans, Helly Hansen, Kari Traa, Nike, and MUCH more!
              </p>
              <button className="bg-black p-4 rounded-md hover:bg-green-600">
                Make a bargain
              </button>
            </div>
            <img src={hero} alt="" className="w-full h-full brightness-50" />
          </div>
          <div className="w-[80%] h-[550px] relative mx-auto">
            <div className="absolute w-full z-10 text-white text-center flex flex-col gap-4 my-10 p-6">
              <h1 className="text-2xl md:text-5xl font-bold">
                Large selection at Xtra Xtra Low Prices!
              </h1>
              <p className="text-xl">
                The campaign period applies while stocks last if no other
                information is stated on the product until Sunday 30 October at
                23.59.
              </p>
              <a
                href="#"
                className="text-2xl hover:bg-green-600 w-fit self-center p-2 rounded-lg"
              >
                See Offers here &gt;&gt;
              </a>
            </div>
            <img src={forest} alt="" className="w-full h-full brightness-50" />
          </div>
        </Carousel>
      </div>

      {/* discounted items */}
      <div className="w-full p-4">
        <div className="flex items-center justify-between">
          <h1 className="p-3 text-2xl md:text-5xl font-bold">Top sales right now</h1>
          <p className="font-bold md:text-2xl">see more &gt;&gt;</p>
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={4}
          navigation={true}
          modules={[Navigation]}
        >
          {topSellers.map((item) => (
            <SwiperSlide
              className="p-3 cursor-pointer min-w-[250px]"
              key={item.key}
            >
              <div className="relative w-full ">
                <div className="absolute flex w-full justify-between">
                  <span className="px-2 text-sm bg-orange-400">3 for 2</span>
                  <p className="bg-orange-400 px-2">Offer %</p>
                </div>
                <img src={item.img} className="w-full h-[250px] object-fill" />
              </div>
              <h1 className="font-bold">{item.name}</h1>
              <p className="text-sm">{item.description}</p>
              <div className="my-4 px-2 flex w-full justify-between text-xl font-bold">
                <span className="text-red-600">{item.discounted}</span>
                <span className="line-through">{item.price}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero card */}
      <div className="md:flex">
        <HeroCard
          data={forest}
          des="Silva"
          title="Find the right headlamp for your needs"
        />
        <HeroCard data={hero} des="Craft" title="News from Craft" />
      </div>

      {/* New Items */}
      <div className="w-full p-4">
        <h1 className="p-3 text-5xl font-bold">Latest Coming</h1>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          slidesPerGroup={4}
          navigation={true}
          modules={[Navigation]}
        >
          {newProduct.map((item) => (
            <SwiperSlide
              className="p-3 cursor-pointer min-w-[300px]"
              key={item.key}
            >
              <div className="relative w-full ">
                <div className="absolute w-full">
                  <span className="px-2 text-sm bg-orange-400">Latest</span>
                </div>
                <img src={item.img} className="w-[90%] h-[300px] object-fill" />
              </div>
              <h1 className="font-bold">{item.name}</h1>
              <p className="text-sm">{item.description}</p>
              <div className="my-4 px-2 flex w-full justify-between text-xl font-bold">
                <span className="text-xl">{item.price}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Hero card */}
      <div className="w-[80%] mx-auto">
        <HeroCard
          data="https://images.unsplash.com/photo-1571008887538-b36bb32f4571?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGpvZ2dpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
          des="Adidas"
          title="Awaken your senses on your next run. From asphalt to path and home again"
        />
      </div>

      {/* brand logos */}
      <div className="w-80% mx-auto flex flex-col md:flex-row p-5 items-center justify-center gap-8">
        <div className="w-[12rem] h-[12rem]">
          <img src="../icons/Adidas_Logo.jpg" alt="" 
            className="w-full h-full"/>
        </div>
        <div className="w-[12rem] h-[12rem]">
          <img src="../icons/Nike.jpg" alt="" 
            className="w-full h-full"/>
        </div>
        <div className="w-[12rem] h-[12rem]">
          <img src="../icons/HH.png" alt="" 
            className="w-full h-full"/>
        </div>
        <div className="w-[12rem] h-[12rem]">
          <img src="../icons/under.png" alt="" 
            className="w-full h-full"/>
        </div>
      </div>

    </div>
  );
};

export default Home;
