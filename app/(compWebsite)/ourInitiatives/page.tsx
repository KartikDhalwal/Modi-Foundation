"use client";
import { useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";

export default function OutInitiativesPage() {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div className="bg-[#f9fdfc] text-[#222] font-sans">
      <section className="max-w-5xl mx-auto px-4 py-10">
        <h2 className="inline-block bg-green-50 text-green-700 text-3xl font-semibold w-full px-6 py-4 rounded-lg mb-8 border-l-4 border-green-500">
          Our Initiatives
        </h2>
        <h3 className="text-xl sm:text-2xl font-semibold mb-4">Get Involved</h3>
        <p className="mb-4 leading-7 text-justify">
          Be a Part of Our Impactful Initiatives! At Mission of Dream India
          (MODI) Foundation, we believe everyone has a role to play in
          protecting the environment. Whether you're a student, a professional,
          or a concerned citizen, there are countless ways to get involved and
          contribute to creating a sustainable future. Together, we can make a
          lasting difference!
        </p>
        <p className="mb-4 leading-7 text-justify">
          A non-governmental organization committed to environmental
          conservation and promoting sustainable practices. At Mission of Dream
          India (MODI) Foundation, we believe in the strength of collective
          action to tackle critical environmental challenges and build a
          healthier, greener future for generations to come.
        </p>
        <p className="mb-4 leading-7 text-justify">
          Our mission at Mission of Dream India (MODI) Foundation is to protect
          and preserve the environment by fostering community engagement,
          driving advocacy, and implementing sustainable initiatives. We strive
          to raise awareness about critical environmental issues, promote
          conservation efforts, and inspire a global culture of environmental
          responsibility.
        </p>
        <p className="mb-10 leading-7 text-justify">
          MODI Foundation was founded by Manasi Jaiswal, a passionate
          environmentalist committed to creating a positive impact on the
          planet. Since its inception, the organization has steadily grown,
          earning support from individuals, businesses, and communities around
          the world. Our team comprises dedicated professionals with expertise
          in environmental science, conservation, advocacy, community outreach,
          and social welfare. Together, we work diligently to develop and
          execute effective solutions to environmental challenges while
          promoting sustainable living practices.
        </p>

        {/* Collaborators */}
        <div className="mb-8">
          <h4 className="text-lg font-semibold mb-4">COLLABORATORS</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <Image
                    src="/avatar.svg"
                    width={60}
                    height={60}
                    alt="Collaborator"
                    className="rounded-full border border-gray-300"
                  />
                  <p className="mt-2 text-sm font-medium text-center">
                    {i % 2 === 0 ? "Mr. Ashok Chabharwal" : "Mr. Kamlesh Jat"}
                  </p>
                </div>
              ))}
          </div>
        </div>

        {/* Bottom Image */}
        <div className="w-full mt-10">
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
        </div>

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
            📞 Call us for Enquiry: (+91) 1800 1800 1800 | ✉️
            support@modifoundation.com
          </p>
        </div>
      </section>
    </div>
  );
}
