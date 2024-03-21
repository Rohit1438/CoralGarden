import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./styles.css";
import { FaStar } from "react-icons/fa";
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
    breakpoint: { max: 767, min: 150 },
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
  { name: "Pratik Kadam", rating: 5, review: "Coral Garden Resort is situated at 300m from Bharatpur Beach(closer to Jetty). The rooms were clean and pretty good. The staff is cooperative and they arranged a few things(out of their way) for us." },
  {
    name: "Shubham Singhal",
    rating: 5,
    review: "I booked my stay at coral garden resort for 2 days. The rooms were near and clean. But the hospitality of their staff is pathetic. We were out of our rooms at 8:00 am and also have checked out and were sitting on the chairs outside the room but their staff said that you cannot sit here. This was the terrible behaviour. Food was average. Location was good near to the beach and near to Neil island jetty.",
  },
  {
    name: "Imtiyaz A Parvez",
    rating: 4.5,
    review: "We stayed in this resort with family for 1 day on December 28. The resort is very well located with excellent interiors of the rooms. Buffet breakfast and restaurant food was very well prepared. The only issue is check-out time. They assume that every new guest will be checking in before 10 am and push the existing guests to check-out before 8 am. If someone has the ferry at 13:00 or 14:00 hrs it is harsh for them to wait 4-5 hrs sitting in reception or restaurant without AC.",
  },
  {
    name: "Manya Agrawal",
    rating: 5,
    review: "We stayed here for a day but the stay was awesome. It felt like a home away from home. Especially the food, it was just commendable. The staff was cooprrative too. Just the check out time is a little too early but overall it was a good experience.",
  },
  {
    name: "Priyesh Singh",
    rating: 4.5,
    review: "Rooms are good, specious and well maintained.this property is very near to the jetty and within the market area.all the beaches are very close to this resort. the thing which I didn’t like is their strict checkout time of 8am, as 8am is very early.",
  },
  {
    name: "Yamika Mehra",
    rating: 5,
    review:"I wanted to give yoga a shot and a google search suggested that Tapas Yoga is the closest option. I went in to the first class with no expectations but have found so much strength – both physical and mental"
  }
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
        partialVisible={false}
        dotListClass="custom-dot-list-style"
        customTransition="transform 1500ms ease-in-out"
    
      
        customTransitionEnd={({ currentSlide }) => {
          console.log("Current Slide:", currentSlide);
        }}
      >
        {cardReviews.map((review, index) => {
          // Calculate the index of the previous and next reviews
          const prevIndex = (index - 1 + totalReviews) % totalReviews;
          const nextIndex = (index + 1) % totalReviews;

          return (
            <div className="slider flex items-center flex-col p-1  " key={index}>
          {/* <div className="p-6 bg-[#4E1D6D]  blur rounded-lg h-[200px] text-white text-xl font-bold">
                <h3 className="txt-center">{cardReviews[prevIndex].name}</h3>
                <div className="rating txt-center">
                  Rating: {cardReviews[prevIndex].rating} 
                </div>
                <p className="txt-center">{cardReviews[prevIndex].review}</p>
              </div> */}
<div className="p-2 bg-[#cf5757] rounded-lg text-white  shadow-lg text-xl  h-[300px] w-[200px] md:w-[350px] font-bold" style={{overflowX: "auto"}}>
<div className="w-[90%] m-auto flex justify-center flex-col  ">
<h3 className="text-center text-yellow-200 text-xl font-semibold ">{review.name}</h3>
<div className="flex items-center m-auto justify-center text-center" >
<p className="text-center mt-2 text-sm text-gray-700  font-bold text-xl text-white  ">{review.rating} </p>

<FaStar color="#FFBA00" />
</div>
  
  <p className="text-center mt-2 text-sm text-gray-700 text-left text-white font-semibold ">{review.review}</p>
 
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

