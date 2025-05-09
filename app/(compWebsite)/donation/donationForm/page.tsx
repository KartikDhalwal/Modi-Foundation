import ContactForm from "@/app/components/ContactForm";
import DonationForm from "@/app/components/DonationForm";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b  p-8">
      <div className="grid grid-cols-12 lg:grid-cols-3 gap-8 items-start">
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
        flex flex-col items-center justify-center 
        bg-white/50 text-black 
         rounded-lg w-[90%] md:w-[70%] lg:w-[80%] lg:h-[30%]
        transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl mt-20"
        >
          <h2 className="text-2xl md:text-4xl text-center font-dubai font-semibold mb-4 text-[#006145] capitalize underline">
            Be a Part of the Green Solution
          </h2>
          <p
            className="text-xl text-center tracking-wide leading-8"
            style={{ wordSpacing: "1rem" }}
          >
            Your donation will directly support our efforts to reforest critical
            areas around the world. Every tree planted helps combat climate
            change, protect biodiversity, and provide vital resources for
            communities. Thank you for your generosity.
          </p>
        </div>
        <div className="col-span-12 flex flex-col items-center">
          <img
            src="/donationPage.svg"
            width={100}
            height={100}
            alt="Birds"
            className="w-full"
          />
        </div>
        <div className="col-span-12 bg-[#d3f1e8] m-10">
          <DonationForm />
        </div>
      </div>
    </div>
  );
}
