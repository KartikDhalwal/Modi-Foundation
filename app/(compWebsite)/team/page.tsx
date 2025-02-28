"use client";

import Image from "next/image";
interface Dives {
  title: string;
  image: string;
  dse?: string; // Optional dse property
}
const Team = () => {
  const divs: Dives[] = [
    {
      title: "Mision",
      image: "/employees/mission.png",
      dse: 'To offer each industry sector with a need-based solution.ERP needs to stand for "A unique complete single solution encompassing 100% of an organizations activities.',
    },
    {
      title: "Vision",
      image: "/employees/bulb.jfif",
      dse: "To serve all over the India and wants more efficient environment for Automation",
    },
    {
      title: "Assurance",
      image: "/employees/assurance.png",
      dse: "The service and support schedule is created in such a manner that it automatically upholds the Auto-vyn promise to provide their valued customers with the greatest services ever",
    },
  ];

  const head = [
    {
      name: "B.L. Porwal",
      jobTitle: "DIRECTOR",
      image: "/employees/DirectorNew.JPG",
      dse: "We at VYN Automation PVT Ltd formerly known as AUTO-VYN, started our journey in 2017, and have been engaged with providing ERP Solutions to Automobile dealers since then. Having crossed many mile stones during this journey of more than 8 years, this organization was started with the aim to achieve leadership in the field of ERP and Financial Accounting solution Provider in Automobile domain. And now within this short period of time, it is known as a company of reputation, built upon the solid building blocks of transparency and progressiveness. Since its foundation, the company has shown exponential growth. As a company, we continue to offer unmatched value to our clients on the strength of our sound fundamentals in core businesses. We have always fine-tuned our energy, dedication and commitments with positive outlook to cope with the demands of a growing business. The company is committed to, and ensures the welfare and safety of our staff and workers. The credit for our continuing success rests on the performance of our people, by far, our most important asset. The company is privileged to have an excellent and experienced leadership team with strong entrepreneurial, engineering & administrative skills. I am grateful to all the people who have reposed confidence in us and we reaffirm our commitment to build upon industry standards, in order to provide outstanding value to everybody associated with us.",
    },
    {
      name: "Yuvraj Porwal",
      jobTitle: "CEO",
      image: "/employees/yuvrajsirNew.JPG",
      dse: "Over the years, we have seen a consistent shift in the trends and technologies used to start a new business and let it grow. Starting what was effectively a new company, we needed to establish a presence and make a name for ourselves in a highly competitive market – from an economic as well as a strategic point of view – but with amazing support from clients, partners, and dedicated staff, we have indeed managed to build an extraordinary name in the industry. We have grown tremendously and are eagerly looking to the future. Initially we stated in NCR with MSIL dealers and two years later we have expanded our reach to PAN India and today, we have positioned ourselves as a trusted name in Automobile dealers for providing ERP Solutions, Asset Management, HRMS system, Mobile App and web IT solutions along with a growth solutions provider for their businesses. My target is to make VYN Automation a successful company that is a combination of technology and best solution provider to digitalized the Automobile dealers in their day to day business operations and provide a strategic solution with delivering the best practice of this industry. VYN Automation has been delivering software solutions that are building top technologies for about a decade now. We want to believe and implement binding technologies with perfection in all the work we do. Our extensive expertise in ERP Implementation and our understanding towards automobile business leads our clients to the digital age by  influencing end-user experience, business innovation, and business efficiency. Our capabilities. I am always happy and open to indulge in discussion with clients, employees and colleagues to help and learn as the learning should never stop.",
    },
  ];

  const team = [
    { name: "Gopal Sodani", jobTitle: "COO", image: "/employees/gopal.jpg" },
    // { name: "Mukul Saxena", jobTitle: "Marketing Head", image: "/employees/Mukul.png" },
    {
      name: "Ayushi Somani",
      jobTitle: "Project Manager",
      image: "/employees/AyushiNew.JPG",
    },
    {
      name: "Pulkit Totla",
      jobTitle: "Team Leader",
      image: "/employees/PulkitNew.JPG",
    },
    {
      name: "Karishna K. Sharma",
      jobTitle: "Software Engineer",
      image: "/employees/krishana.jpg",
    },
    // { name: "Priynka Kumawat", jobTitle: "HR", image: "/employees/hr.jpg" },
    {
      name: "Mohit Tater",
      jobTitle: "Full Stack Developer",
      image: "/employees/mohit.jpeg",
    },
    {
      name: "Kartik Dhalwal",
      jobTitle: "Full Stack Developer",
      image: "/employees/kartik.jpeg",
    },
    {
      name: "Himanshu Garg",
      jobTitle: "Full Stack Developer",
      image: "/employees/himanshu.jpeg",
    },
    {
      name: "Komal Nuwal",
      jobTitle: "Full Stack Developer",
      image: "/employees/komal.jpg",
    },
    {
      name: "Gourav Yadav",
      jobTitle: "Android Developer",
      image: "/employees/gaurav.jpg",
    },
    {
      name: "Umesh Kumawat",
      jobTitle: "Full Stack Developer",
      image: "/employees/umesh.jpeg",
    },
    {
      name: "Rakesh Kumawat",
      jobTitle: "Frontend Developer",
      image: "/employees/rakesh.jpeg",
    },
    {
      name: "Khushi Maheshwari",
      jobTitle: "QA Engineer",
      image: "/employees/khushiNew.JPG",
    },
    {
      name: "Dhrmendra Khichar",
      jobTitle: "Software Engineer",
      image: "/employees/dharmendraNew.JPG",
    },
    {
      name: "Mukul Saxena",
      jobTitle: "Marketing Head",
      image: "/employees/Mukul.png",
    },
    {
      name: "Palak Jain",
      jobTitle: "Software Engineer",
      image: "/employees/Palak.jpg",
    },
    {
      name: "Rohit",
      jobTitle: "Software Engineer",
      image: "/employees/Rohit.jpg",
    },
    {
      name: "Manoj",
      jobTitle: "Software Engineer",
      image: "/employees/manoj.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-12 mt-5">
        <div className="relative col-span-12 lg:px-48">
          {/* Background image */}
          <Image
            src="/teamBg.png"
            alt="home"
            className="absolute left-0 w-full object-cover h-[250px] sm:h-[200px] md:h-[250px] transform -translate-y-1/2 z-0"
            width={1000}
            height={500}
          />

          {/* Wrapper to center the second image */}
          <div className="flex justify-center items-center relative z-10">
            <Image
              src="/employees/Team.png"
              alt="careers"
              className="w-[1100px] h-[200px] sm:h-[400px] md:h-[500px] object-cover shadow-lg rounded-xl"
              width={1000}
              height={1000}
            />
          </div>
        </div>

        {/* <div className="col-span-12 lg:px-48 p-4">
          <Image
            src={"/employees/Team.png"}
            alt={"careers"}
            className="w-full shadow rounded-xl h-[300px] sm:h-[400px] md:h-[500px] object-cover mb-2"
            width={1000}
            height={1000}
          />
        </div> */}

        <div className="px-12 col-span-12 mt-6 font-['Frank_Ruhl_Libre'] text-[20px] font-bold  tracking-[0.12em] text-left  opacity-[63%] ">
          ABOUT AUTO-VYN
        </div>
        <div className=" px-12 col-span-12 mt-4 font-['Frank_Ruhl_Libre']  text-[30px] md:text-[34px] lg:text-[40px] xl:[48px] font-bold  tracking-[0.10em] text-left">
          Democracy at Work
        </div>
        <div className="py-2 px-12 mb-4 col-span-12 mt-4 font-['Frank_Ruhl_Libre'] text-[20px] leading-[25.82px] text-left">
          AutoVyn is a flexible collective with a for-profit framework, focused
          on empowering its members to optimize what matters most to
          them—whether it's enjoyment, excellence, financial growth, or
          recognition. Our shared foundation is built on values like quality,
          freedom, democracy, and authenticity, which bring cohesion and purpose
          to our diverse aspirations.
        </div>
      </div>

     

      <div className="grid mt-20 grid-cols-12">
        <div className="col-span-12 text-center font-['Frank_Ruhl_Libre'] font-bold mt-1 text-[16px] md:text-[18px] lg:text-[25px] opacity-[63%] leading-[14.21px] tracking-[0.12em]">
          <span className="ml-2 text-color">
            The&nbsp; Brilliant&nbsp; Minds&nbsp; Behind&nbsp; AutoVyn:&nbsp;{" "}
          </span>
          <span className="headingtext-home">Innovators&nbsp;</span>
          <span className="ml-2 text-color">at&nbsp; Work</span>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-4 md:grid-cols-2 lg:grid-cols-2 gap-2 px-8 sm:px-16 md:px-32 lg:px-48">
        {head.map((emp, index) => (
          <div key={index} className="bg-white shadow">
            <Image
              className="h-[400px] w-full object-contain"
              src={emp.image}
              alt={`Team member ${index + 1}`}
              width={660}
              height={1280}
            />
            <div className="px-3 flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <p className="font-['Frank_Ruhl_Libre'] font-bold mt-1 text-[20px] text-center">
                  {emp.name}
                </p>
                <p className="font-['Frank_Ruhl_Libre'] -mt-4 text-[15px] font-bold text-center text-[#846344] tracking-[0.04em]">
                  {emp.jobTitle}
                </p>
              </div>
              <div
              className="overflow-y-auto font-['Frank_Ruhl_Libre'] "
              style={{ maxHeight: "220px" }} // Adjust the maxHeight value to fit your needs
            >
              {emp.dse}
            </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid mt-20 grid-cols-12">
        <div className="col-span-12 text-center font-['Frank_Ruhl_Libre'] font-bold mt-1 text-[20px] tracking-[0.12em] leading-[14.21px]">
          <span className="ml-2 text-color">Meet&nbsp; Our&nbsp; </span>
          <span className="headingtext-home">Core</span>
          <span className="ml-2 text-color">Team&nbsp; Members&nbsp; </span>
        </div>
      </div>

      <div className="grid grid-cols-1 mt-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 px-8 sm:px-16 md:px-32 lg:px-32 mb-16">
        {team.map((emp, index) => (
          <div key={index} className="bg-white shadow">
            <Image
              className="h-auto w-full object-cover"
              src={emp.image || "/default-image.jpg"} // Fallback to a default image if not available
              alt={`Team member ${index + 1}`}
              width={1000}
              height={1000}
            />
            <div className="px-2">
              <p className="font-['Frank_Ruhl_Libre'] font-bold mt-2 text-[16px] text-left">
                {emp.name}
              </p>
              <p className="font-['Frank_Ruhl_Libre'] -mt-4 text-[16px] text-left">
                {emp.jobTitle}
              </p>
            </div>
          </div>
        ))}

        {/* Fake placeholder div placed after the last item in the grid */}
        <div className="bg-white ">
          <div className="h-full w-full flex justify-center items-center text-center p-4">
            <span className="text-lg font-semibold text-gray-500">....</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mt-2 text-gray-500 transform rotate-90" // Rotate arrow 90 degrees to make it vertical
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 15l7-7 7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
