import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const sliderImageUrl = [
  //First image url
  {
    url: "https://i2.wp.com/www.geeksaresexy.net/wp-content/uploads/2020/04/movie1.jpg?resize=600%2C892&ssl=1",
  },
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-kids-movies-2020-call-of-the-wild-1579042974.jpg?crop=0.9760858955588091xw:1xh;center,top&resize=480:*",
  },
  //Second image url
  {
    url: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/best-movies-for-kids-2020-sonic-the-hedgehog-1571173983.jpg?crop=0.9871668311944719xw:1xh;center,top&resize=480:*",
  },
  //Third image url
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS82ET2bq9oTNwPOL8gqyoLoLfeqJJJWJmKQ&usqp=CAU",
  },

  //Fourth image url

  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTdvuww0JDC7nFRxiFL6yFiAxRJgM-1tvJTxA&usqp=CAU",
  },
];

const cardReviews = [
  { name: "John Doe", rating: 4, review: "Great product, highly recommended!" },
  {
    name: "Jane Smith",
    rating: 5,
    review: "Excellent service, will definitely buy again!",
  },
  {
    name: "Alice Johnson",
    rating: 3,
    review: "Average experience, could be better.",
  },
  {
    name: "Bob Brown",
    rating: 2,
    review: "Disappointing quality, wouldn't recommend.",
  },
  {
    name: "Emily Davis",
    rating: 4.5,
    review: "Almost perfect, just a few minor issues.",
  },
];
const Slider = () => {
  const totalReviews = cardReviews.length;  
  return (
    <div className="parent ">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={true}
        dotListClass="custom-dot-list-style"
        customTransition="transform 500ms ease-in-out"
    
      
        customTransitionEnd={({ currentSlide }) => {
          console.log("Current Slide:", currentSlide);
        }}
      >
        {cardReviews.map((review, index) => {
          // Calculate the index of the previous and next reviews
          const prevIndex = (index - 1 + totalReviews) % totalReviews;
          const nextIndex = (index + 1) % totalReviews;

          return (
            <div className="slider flex items-center flex-col p-8  " key={index}>
          {/* <div className="p-6 bg-[#4E1D6D]  blur rounded-lg h-[200px] text-white text-xl font-bold">
                <h3 className="txt-center">{cardReviews[prevIndex].name}</h3>
                <div className="rating txt-center">
                  Rating: {cardReviews[prevIndex].rating} 
                </div>
                <p className="txt-center">{cardReviews[prevIndex].review}</p>
              </div> */}
<div className="p-6 bg-[#4E1D6D] rounded-lg text-white text-xl h-[200px] w-[200px] font-bold" style={{ maxWidth: "200px" ,overflowX: "auto"}}>
<div className="w-[50%] m-auto flex justify-center flex-col  w-[100px]">

  <p className="text-left mt-2 text-sm ">{review.review}</p>
  <h3 className="text-center text-yellow-300 text-md">{review.name}</h3>
</div>
</div>


              {/* <div className="p-6 bg-[#4E1D6D]  rounded-lg h-[200px] text-white text-xl font-bold">
                <h3 className="txt-center">{cardReviews[nextIndex].name}</h3>
                <div className="rating txt-center">
                  Rating: {cardReviews[nextIndex].rating}
                </div>
                <p className="txt-center">{cardReviews[nextIndex].review}</p>
              </div>       */}
                  </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Slider

