"use client";
import * as React from "react";
import Image from "next/image";
import { Rating } from "@mui/material";


function Testimonials() {
  interface RatingItem {
    image: string;
    rating: number;
    name: string;
    feedback: string;
    isgoogle:Boolean;
  }

  const ratings: RatingItem[] = [
    {
      image: "/home.png",
      rating: 4.5,
      name: "John Doe",
      feedback: "Great product, really loved it!",
      isgoogle:true,
    },
    {
      image: "/logo.png",
      rating: 3.8,
      name: "Jane Smith",
      feedback: "Good, but could use some improvements.",
      isgoogle:false,
    },
    {
      image: "/service/service1.png",
      rating: 5.0,
      name: "Alice Brown",
      feedback: "Absolutely fantastic, exceeded my expectations!",
      isgoogle:false,
    },
    {
      image: "/home.png",
      rating: 4.5,
      name: "1",
      feedback: "Great product, really loved it!",
      isgoogle:false,
    },
    {
      image: "/logo.png",
      rating: 3.8,
      name: "22",
      feedback: "Good, but could use some improvements.",
      isgoogle:true,
    },
    {
      image: "/service/service1.png",
      rating: 5.0,
      name: "333",
      feedback: "Absolutely fantastic, exceeded my expectations!",
      isgoogle:true,
    },
  ];

  const [visibleItems, setVisibleItems] = React.useState<RatingItem[]>([]); // Store visible items
  const [currentIndex, setCurrentIndex] = React.useState(0); // Track the index for items to show

  // Function to update visible items every 2 seconds
  React.useEffect(() => {
    const interval = setInterval(() => {
      setVisibleItems(ratings.slice(currentIndex, currentIndex + 3));
      setCurrentIndex((prevIndex) => {
        if (prevIndex + 3 >= ratings.length) {
          return 0;
        }
        return prevIndex + 3;
      });
    }, 2000); 

    return () => clearInterval(interval);  
  }, [currentIndex]);



  return (
    <>
      <div className="col-span-12 font-[Frank] mb-4 text-[32px] text-center text-[#34251F] font-bold leading-8">
        Testimonials: Voice of Trust
      </div>
      {/* Mobile: 1 item, Desktop: 3 items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {visibleItems.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-lg shadow-sm"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="rounded-full h-32 w-32"
              width={128}
              height={128}
            />
            <Rating
              name={`rating-${index}`}
              className="mt-2"
              value={item.rating}
              readOnly
            />
            <p className="capitalize text-lg font-serif text-center">{item.name}</p>
            <p className="text-sm text-center -mt-6">{item.feedback}</p>
           {item.isgoogle && <p className="text-sm text-center -mt-4">[{'google review'}]</p>}
          </div>
        ))}
      </div>
    </>
  );
}

export default Testimonials;
