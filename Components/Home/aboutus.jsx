import React from "react";


const AboutUs = () => {
  return (
    <div className="px-8 py-12">
      <div className="flex justify-center items-center mt-16">
        <p className="text-4xl font-bold bg-slate-950 text-white px-4 py-1 rounded-md">
          About Us - Techie Warriors
        </p>
      </div>
      <div className="mt-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Founder Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Founder - Raushan Kumar</h2>
            <img
              src={
                "https://scontent.fdbd1-2.fna.fbcdn.net/v/t1.6435-9/142255318_413588999848505_1338876310924978598_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=mJGLDI7sHOEQ7kNvgHFFPLy&_nc_ht=scontent.fdbd1-2.fna&oh=00_AYDnMpqbi14HKzJZ9kEHk7X_J5wsZ7xd6n8fDzrOQO1Qhw&oe=66C0B4ED"
              }
              alt="Founder Raushan Kumar"
              className="rounded-lg mb-4"
            />
            <p className="text-gray-700">
              Raushan Kumar is the visionary founder of Alpha Tech Warriors.
              With a passion for technology and innovation, he established the
              company to provide cutting-edge IT solutions to businesses
              worldwide.
            </p>
          </div>

          {/* CEO Section */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">CEO - Raushan Kumar</h2>
            <img
              src={
                "https://scontent.fdbd1-2.fna.fbcdn.net/v/t1.6435-9/142255318_413588999848505_1338876310924978598_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=mJGLDI7sHOEQ7kNvgHFFPLy&_nc_ht=scontent.fdbd1-2.fna&oh=00_AYDnMpqbi14HKzJZ9kEHk7X_J5wsZ7xd6n8fDzrOQO1Qhw&oe=66C0B4ED"
              }
              alt="CEO Raushan Kumar"
              className="rounded-lg mb-4"
            />
            <p className="text-gray-700">
              As CEO, Raushan Kumar leads Alpha Tech Warriors with a focus on
              delivering exceptional client experiences and driving
              technological excellence. His leadership ensures that the company
              remains at the forefront of the industry.
            </p>
          </div>
        </div>

        {/* Company Overview */}
        <div className="mt-8 bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Company Overview</h2>
          <p className="text-gray-700 mb-4">
            Alpha Tech Warriors is a renowned IT solutions company based in
            India. Founded and led by Raushan Kumar, who also serves as the CEO,
            our company has been serving clients for over 7 years.
          </p>
          <p className="text-gray-700 mb-4">
            We specialize in providing comprehensive IT solutions, including
            website building starting from ₹3000, website and server
            maintenance, app development, and more.
          </p>
          <p className="text-gray-700 mb-4">
            Our mission is to deliver cutting-edge technology solutions that
            empower businesses and individuals to achieve their goals
            efficiently and effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
