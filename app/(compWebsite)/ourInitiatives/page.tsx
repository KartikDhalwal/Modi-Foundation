"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

export default function OutInitiativesPage() {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));

  const initiatives = [
    {
      title: "Tree Plantation & Social Forestry",
      desc: `We organize large-scale tree plantation drives across urban and rural areas 
        to increase green cover, improve air quality, and restore degraded lands. Our social 
        forestry programs also engage local communities in nurturing and protecting these trees.`,
    },
    {
      title: "Environmental Education & Awareness",
      desc: `Through workshops, school programs, and public campaigns, we educate people—especially youth—on the 
        importance of biodiversity, climate action, and sustainable living. We believe that awareness is the 
        foundation of meaningful change.`,
    },
    {
      title: "Waste Management & Cleanliness Drives",
      desc: `We run zero-waste initiatives, plastic-free campaigns, and cleanliness drives to tackle the growing 
        problem of waste. Our programs promote segregation, recycling, composting, and responsible disposal practices.`,
    },
    {
      title: "Promotion of Renewable Energy",
      desc: `By organizing awareness rallies, model demonstrations, and knowledge sessions, we advocate for the adoption 
        of solar energy and other clean technologies to reduce dependence on fossil fuels.`,
    },
    {
      title: "Disaster Relief & Climate Resilience",
      desc: `In times of natural or human-made disasters, we provide immediate relief and long-term recovery support 
        to affected communities. We also work on building climate-resilient infrastructure and systems in vulnerable areas.`,
    },
    {
      title: "Advocacy & Policy Engagement",
      desc: `We actively engage in environmental advocacy by collaborating with local governments, NGOs, and civil society 
        to influence policies related to pollution control, afforestation, and sustainable development.`,
    },
    {
      title: "Sustainable Development Projects",
      desc: `From promoting organic farming and water conservation to supporting eco-friendly livelihoods, our sustainable 
        development projects balance environmental protection with economic and social growth.`,
    },
  ];

  return (
    <div className="bg-[#f9fdfc] text-[#222] font-sans">
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="inline-block bg-green-50 text-green-700 text-3xl font-semibold w-full px-6 py-4 rounded-lg mb-8 border-l-4 border-green-500">
          Our Initiatives
        </h2>

        

        {/* ===== Existing "Get Involved" Section Below ===== */}
        <h3 className="text-xl sm:text-2xl font-semibold mt-12 mb-4">
          Get Involved
        </h3>
        <p className="mb-4 leading-7 text-justify">
          MODI Foundation—short for Mission of Dream India Foundation—is a
          non-governmental organization passionately committed to environmental
          conservation and sustainable development. Founded with a vision to
          create a greener, cleaner, and more conscious world, we work at the
          grassroots level to drive meaningful change through education, action,
          and advocacy.
        </p>
        <p className="mb-4 leading-7 text-justify">
          Since our inception in 2019, we've launched a series of impactful
          initiatives focused on tree plantation, waste management, renewable
          energy, and community empowerment. We believe in the power of
          collective action and are driven by the idea that every individual has
          a role to play in shaping a sustainable future.
        </p>
        <p className="mb-4 leading-7 text-justify">
          Registered under NGO Darpan and Licence under section 8 (1) of the
          Companies Act, 2013, our work spans across rural and urban India,
          building awareness and implementing real-world solutions for
          environmental challenges.
        </p>
{/* 🌱 Initiatives with Animation */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          {initiatives.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 rounded-xl shadow-sm bg-white border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <h3 className="text-xl font-semibold text-green-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 leading-7 text-justify">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
        {/* Testimonials */}
        <div className="mb-8 mt-10">
          <h4 className="text-lg font-semibold mb-4">TESTIMONIALS</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Aarav Singh",
                role: "Local Resident",
                text: "MODI Foundation’s clean-up drives helped our community take pride in our surroundings.",
              },
              {
                name: "Reema Joshi",
                role: "Environmental Educator",
                text: "Their tree plantation efforts transformed a barren space into a thriving mini forest.",
              },
              {
                name: "Ananya Mehta",
                role: "Student Volunteer",
                text: "Volunteering here taught me how small actions can have a big environmental impact.",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center p-4 bg-gray-50 rounded-xl shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Image
                  src="/avatar.svg"
                  width={60}
                  height={60}
                  alt={testimonial.name}
                  className="rounded-full border border-gray-300"
                />
                <p className="mt-4 text-sm text-center italic text-gray-700">
                  “{testimonial.text}”
                </p>
                <p className="mt-2 text-sm font-medium text-center">
                  – {testimonial.name}, {testimonial.role}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Image */}
        <motion.div
          className="w-full mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/garbageCollectors.svg"
            width={800}
            height={400}
            alt="Team"
            className="w-full rounded-md"
          />
          <p className="mt-4 text-center text-sm italic text-gray-600">
            Collaborate with us and contribute high atmospheric temperatures and
            dryness (low humidity) offer favorable circumstance for a fire to
            start.
          </p>
        </motion.div>

        {/* Footer Links */}
        <div className="mt-10 text-sm text-center text-gray-700 space-y-1">
          <p>
            <a
              href="mailto:modifoundation.com"
              className="text-blue-600 underline"
            >
              modifoundation.com
            </a>{" "}
            |
            <a
              href="https://instagram.com"
              className="ml-2 text-blue-600 underline"
            >
              Follow on Instagram
            </a>
          </p>
          <p>
             📞 Call us for Enquiry: (+91) 90500 28885 | ✉️
            yourmodifoundation@gmail.com
          </p>
        </div>
      </section>
    </div>
  );
}
