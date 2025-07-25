"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// 👇 helper hook to detect when the stats section is visible
function useInView(threshold = 0.3) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const WhoWeAre: React.FC = () => {
  const { ref, inView } = useInView(0.2);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    if (inView) {
      const duration = 1500; // ms
      const frameRate = 30; // fps
      const totalFrames = Math.round((duration / 1000) * frameRate);
      let frame = 0;
      const interval = setInterval(() => {
        frame++;
        setCount1((prev) =>
          prev + 150 / totalFrames >= 150 ? 150 : prev + 150 / totalFrames
        );
        setCount2((prev) =>
          prev + 120 / totalFrames >= 120 ? 120 : prev + 120 / totalFrames
        );
        if (frame >= totalFrames) clearInterval(interval);
      }, 1000 / frameRate);
    }
  }, [inView]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      {/* About Us Header */}
      <div className="mb-6">
        <h2 className="inline-block bg-green-50 text-green-700 text-3xl font-semibold w-full px-6 py-4 rounded-lg mb-8 border-l-4 border-green-500">
          About Us
        </h2>
      </div>
 <div
        ref={ref}
        className="grid grid-cols-2 gap-4 text-center mt-10 max-w-md mx-auto"
      >
        <motion.div
          className="border rounded p-6 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-3xl font-bold text-green-700">{Math.round(count1)}+</p>
          <p className="text-sm text-gray-600">Total Programs</p>
        </motion.div>

        <motion.div
          className="border rounded p-6 shadow-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-3xl font-bold text-green-700">{Math.round(count2)}+</p>
          <p className="text-sm text-gray-600">Total Donations</p>
        </motion.div>
      </div>
      {/* Who We Are Section */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-4">Who we are?</h3>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          At MODI Foundation, we harness the power of community engagement,
          climate advocacy, and hands-on conservation to create lasting
          environmental impact across India. From large-scale tree plantation
          drives to zero-waste campaigns, our grassroots initiatives empower
          thousands to live and lead sustainably.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          Our motto, "Be the voice of those who don't," is aimed at giving voice
          to the voiceless—be it endangered animals, polluted rivers, or
          deforested lands.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h3 className="text-lg font-bold text-center mb-10">Meet Our Team</h3>
        {/* Team Member 1 */}
        <div className="flex items-start mb-10 gap-6">
          <div>
            <h4 className="text-green-600 font-bold text-md">SANDEEP KUMAR</h4>
            <p className="text-sm text-gray-500 mb-2">Founder</p>
            <p className="text-sm text-gray-700 mb-1">
              A passionate leader with a deep commitment to environmental
              sustainability, Sandeep Kumar brings years of experience in
              grassroots activism and social development. His vision has been
              central to shaping the foundation’s mission and expanding its
              impact.
            </p>
          </div>
        </div>
        {/* Team Member 2 */}
        <div className="flex items-start mb-10 gap-6 flex-col md:flex-row">
          <div>
            <h4 className="text-green-600 font-bold text-md">JABRA RAM PATEL</h4>
            <p className="text-sm text-gray-500 mb-2">Co-Founder & Director</p>
            <p className="text-sm text-gray-700 mb-1">
              Driven by a lifelong dedication to public welfare and ecological
              balance, Jabra Ram Patel plays a key role in planning and
              executing the foundation's community initiatives. His hands-on
              approach and strategic leadership continue to inspire change at
              every level.
            </p>
          </div>
          <div className="w-24 h-24 border border-green-400 rounded-full md:ml-auto" />
        </div>
      </div>

      {/* Statistics with animation */}
     
    </div>
  );
};

export default WhoWeAre;
