import React from 'react';

const About = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen py-16">
            <div className="max-w-7xl mx-auto text-center">
                <h1 className="text-4xl font-extrabold mb-8">About Us</h1>
                <p className="text-xl mb-16">
                    We are a dedicated team of developers and designers with a passion for creating innovative digital experiences.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Team Member 1 */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <img
                            className="w-32 h-32 mx-auto rounded-full mb-4"
                            src="https://i.ibb.co.com/vkycbfs/1675254905006.jpg"
                            alt="Team Member 1"
                        />
                        <h2 className="text-2xl font-semibold mb-2">John Doe</h2>
                        <p className="text-lg">CEO & Founder</p>
                        <p className="text-md mt-4">
                            John is a visionary leader with a passion for technology and innovation. He brings years of experience in the tech industry and guides our team to success.
                        </p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <img
                            className="w-32 h-32 mx-auto rounded-full mb-4"
                            src="https://i.ibb.co.com/vkycbfs/1675254905006.jpg"
                            alt="Team Member 2"
                        />
                        <h2 className="text-2xl font-semibold mb-2">Jane Smith</h2>
                        <p className="text-lg">Lead Developer</p>
                        <p className="text-md mt-4">
                            Jane is a skilled developer who loves solving complex problems. Her expertise in full-stack development ensures that our projects are built to last.
                        </p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
                        <img
                            className="w-32 h-32 mx-auto rounded-full mb-4"
                            src="https://i.ibb.co.com/vkycbfs/1675254905006.jpg"
                            alt="Team Member 3"
                        />
                        <h2 className="text-2xl font-semibold mb-2">Alex Johnson</h2>
                        <p className="text-lg">UI/UX Designer</p>
                        <p className="text-md mt-4">
                            Alex creates beautiful and intuitive designs. His focus on user experience ensures that our websites are not only functional but also enjoyable to use.
                        </p>
                    </div>
                </div>

                <div className="mt-16">
                    <h3 className="text-3xl font-semibold mb-4">Our Mission</h3>
                    <p className="text-xl max-w-2xl mx-auto">
                        Our mission is to empower businesses with the tools they need to succeed in the digital world. Through innovative design and development, we help our clients achieve their goals and stand out in a competitive market.
                    </p>
                </div>

                <div className="mt-16">
                    <h3 className="text-3xl font-semibold mb-4">Our Values</h3>
                    <ul className="list-disc list-inside text-xl max-w-2xl mx-auto">
                        <li>Innovation: We continuously push boundaries and explore new ideas.</li>
                        <li>Integrity: We are committed to delivering quality and value with honesty.</li>
                        <li>Collaboration: We believe in working together to achieve the best results.</li>
                        <li>Customer-Centric: Our clients' needs are always our top priority.</li>

                    </ul>


                </div>

                <div className='mt-10'> 
                    <a
                        href="/Contact"
                        className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                    >
                        Contact Me
                    </a>
                </div>
            </div>


        </div>
    );
};

export default About;


