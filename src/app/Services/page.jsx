import React from 'react';

const Services = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-8">Our Services</h1>
        <p className="text-xl mb-16">
          We provide high-quality services to help you succeed in your digital journey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
            <p className="text-lg">
              We create stunning, responsive websites tailored to your needs. Whether it's a personal blog or an e-commerce platform, we bring your vision to life.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">UI/UX Design</h2>
            <p className="text-lg">
              Our UI/UX designers create intuitive, user-centered designs that ensure a seamless experience for your users across all devices.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">SEO Optimization</h2>
            <p className="text-lg">
              We help improve your website's visibility in search engines, driving more organic traffic and boosting your online presence.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-3xl font-semibold mb-4">Why Choose Us?</h3>
          <p className="text-xl max-w-2xl mx-auto">
            We are a team of passionate developers and designers committed to delivering results that exceed expectations. Our approach is collaborative, transparent, and focused on long-term success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
