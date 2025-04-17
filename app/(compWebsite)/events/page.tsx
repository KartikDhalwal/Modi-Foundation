"use client";

import Image from "next/image";

const Produts : any= [
    // { id: 1, name: "seva", value: "5", photo: "/events/event1.jpeg" },
    // { id: 2, name: "competent", value: "5", photo: "/events/event2.jpeg" },
    // { id: 3, name: "vipul", value: "5", photo: "/events/event3.jpeg" },
    // { id: 4, name: "rana", value: "5", photo: "/events/event4.jpeg" },
    // { id: 5, name: "pegasus", value: "5", photo: "/events/event5.jpeg" },
    // { id: 6, name: "Platinum", value: "5", photo: "/events/event6.jpeg" },
    // { id: 7, name: "seva", value: "5", photo: "/events/event7.jpeg" },
    // { id: 8, name: "competent", value: "5", photo: "/events/event8.jpeg" },
    // { id: 9, name: "vipul", value: "5", photo: "/events/event9.jpeg" },
    // { id: 10, name: "rana", value: "5", photo: "/events/event10.jpeg" },
    // { id: 11, name: "pegasus", value: "5", photo: "/events/event11.jpeg" },
    // { id: 12, name: "rana", value: "5", photo: "/events/event12.jpeg" },
    // { id: 13, name: "pegasus", value: "5", photo: "/events/event13.jpeg" },
];


export default function Events() {
 

    return (
        <>
            <div className="p-2 grid grid-cols-12">
                <div className="flex  font-[frank] justify-center col-span-12">
                  Our Events
                </div>
                <div className="col-span-12 mt-4">
                    {/* Scroll container for product cards */}
                    <div className="scrolling-wrapper">
                        <div className="product-cards-right gap-10">
                            {/* {Produts.map((product) => (
                                <div 
                                    key={product.id} 
                                    className="p-4 border  transition-transform duration-300 ease-in-out cursor-pointer rounded shadow-md flex-shrink-0 w-48 sm:w-60 md:w-72 lg:w-80"
                                >
                                    <div className="flex flex-col items-center">
                                        <Image
                                            src={product.photo}
                                            alt={product.name}
                                            className="w-full h-48 object-cover rounded mb-2"
                                            width={192}
                                            height={192}
                                        />
                                    </div>
                                </div>
                            ))} */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
