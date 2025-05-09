import React from 'react';

const WhoWeAre: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 font-sans">
      {/* About Us Header */}
      <div className="mb-6">
        <h2 className="inline-block bg-green-100 text-sm font-semibold text-green-800 px-3 py-1 rounded">
          About Us
        </h2>
      </div>

      {/* Who We Are Section */}
      <div className="mb-12">
        <h3 className="text-xl font-bold mb-4">Who we are?</h3>
        <p className="text-gray-700 mb-4 text-sm leading-relaxed">
          NGOH initiative was founded by Mathew Steve, a passionate environmentalist committed to creating a positive impact on the planet. Since its inception, the organization has been actively involved in numerous environmental campaigns, projects, and awareness drives. NGOH believes in the power of community and education to bring about sustainable change. Whether it's tree plantation drives, cleanliness campaigns, wildlife conservation efforts, or spreading awareness about climate change, NGOH is always at the forefront. Our mission is to protect the environment for future generations by empowering communities, advocating for sustainable practices, and collaborating with like-minded organizations and individuals.
        </p>
        <p className="text-gray-700 text-sm leading-relaxed">
          Our motto, "Be the voice of those who don't," is aimed at giving voice to the voiceless—be it endangered animals, polluted rivers, or deforested lands.
        </p>
      </div>

      {/* Team Section */}
      <div className="mb-16">
        <h3 className="text-lg font-bold text-center mb-10">Meet Our Team</h3>

        {/* Team Member 1 */}
        <div className="flex items-start mb-10 gap-6">
          <div className="w-24 h-24 border border-green-400 rounded-full" />
          <div>
            <h4 className="text-green-600 font-bold text-md">MATHEW STEVE</h4>
            <p className="text-sm text-gray-500 mb-2">from 6 years</p>
            <p className="text-sm text-gray-700 mb-1">
              Mathew is a passionate environmentalist and founder of NGOH. He started this organization to bring sustainable awareness to society.
            </p>
            <p className="text-xs text-gray-400 mt-1">CEO</p>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="flex items-start mb-10 gap-6 flex-col md:flex-row">
          <div>
            <h4 className="text-green-600 font-bold text-md">DIVYA SRIWSAS</h4>
            <p className="text-sm text-gray-500 mb-2">from 4 years</p>
            <p className="text-sm text-gray-700 mb-1">
              Divya joined NGOH to be a part of something meaningful. She strongly believes in making a difference through education and involvement.
            </p>
            <p className="text-xs text-gray-400 mt-1">COO</p>
          </div>
          <div className="w-24 h-24 border border-green-400 rounded-full md:ml-auto" />
        </div>

        {/* Team Member 3 */}
        <div className="flex items-start gap-6">
          <div className="w-24 h-24 border border-green-400 rounded-full" />
          <div>
            <h4 className="text-green-600 font-bold text-md">MATHEW STEVE</h4>
            <p className="text-sm text-gray-500 mb-2">from 5 years</p>
            <p className="text-sm text-gray-700 mb-1">
              He’s been actively involved in several forest clean-up projects and awareness seminars. His leadership has transformed many local efforts.
            </p>
            <p className="text-xs text-gray-400 mt-1">CEO</p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-2 gap-4 text-center">
        <div className="border rounded p-6">
          <p className="text-2xl font-bold">150+</p>
          <p className="text-sm text-gray-600">Total Programs</p>
        </div>
        <div className="border rounded p-6">
          <p className="text-2xl font-bold">120+</p>
          <p className="text-sm text-gray-600">Total Donations</p>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
