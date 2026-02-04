import React from "react";
import "./Member.css";
import profile from "../../../public/pictures/profile.png";


const Member = ()=>{
    return(
        <><div className="members" name="About_us" id="members">

            {/* <!-- Header Section --> */}
            <header className="bg-green-600/30 text-white py-6">
                <div className="container px-4 text-center">
                <h1 className="text-4xl font-bold">About Animal Aid Alliance</h1>
                <p className="mt-2 text-lg text-gray-500">Conserving Wildlifes, Spreading Awareness, Saving biodiversity, Transforming Lives</p>
                </div>
            </header>

            {/* <!-- NGO Information Section --> */}
            <section className="py-12">
                <div className="container px-4">
                <h2 className="text-3xl font-semibold text-center mb-8 text-blue-500">Who We Are</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4 text-center text-cyan-900">Our Mission</h3>
                    <p className="text-gray-700 justify-center text-justify">
                        Our NGO is dedicated to uplifting underprivileged communities through education, healthcare, and sustainable development. We strive to create a world where everyone has access to opportunities for growth and well-being.
                    </p>
                    </div>
                    <div className="md:w-1/2">
                    <h3 className="text-2xl font-bold mb-4 text-center text-amber-700">Our Vision</h3>
                    <p className="text-gray-700 justify-center text-justify">
                        We envision a future where every individual, regardless of their background, can live with dignity, access quality education, and contribute to a sustainable and inclusive society.
                    </p>
                    </div>
                </div>
                <div className="mt-8">
                    <h3 className="text-2xl font-bold mb-4 text-center text-cyan-900">Our History</h3>
                    <p className="text-gray-700 justify-center text-justify">
                    Founded in 2010, our NGO has grown from a small group of passionate individuals to a global network of changemakers. Over the years, we’ve impacted thousands of lives through our programs in education, healthcare, and environmental sustainability.
                    </p>
                </div>
                </div>
            </section>

            {/* <!-- Team Members Section --> */}
            <section className="bg-white py-12">
                <div className="container px-4">
                <h2 className="text-5xl font-semibold text-center mb-8 text-blue-600/50">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {/* <!-- Member 1 --> */}
                    <div className="Cards member-card bg-gray-100 p-6 rounded-lg text-center">
                        <img src={profile} alt="Member 1" className="w-24 h-24 rounded-full mx-auto mb-4" lazy="true"/>
                        <h3 className="text-xl font-semibold m-name">John Doe</h3>
                        <p className="text-gray-600">Founder</p>
                        <p className="text-gray-700 mt-2">"Together, we can build a brighter future for those in need."</p>
                    </div>
                    {/* <!-- Member 2 --> */}
                    <div className="Cards member-card bg-gray-100 p-6 rounded-lg text-center">
                        <img src={profile} alt="Member 2" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold m-name">Jane Smith</h3>
                        <p className="text-gray-600">Program Director</p>
                        <p className="text-gray-700 mt-2">"Empowering communities is at the heart of our mission."</p>
                    </div>
                    {/* <!-- Member 3 --> */}
                    <div className="Cards member-card bg-gray-100 p-6 rounded-lg text-center">
                        <img src={profile} alt="Member 3" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold m-name">Emily Johnson</h3>
                        <p className="text-gray-600">Education Lead</p>
                        <p className="text-gray-700 mt-2">"Education is the key to unlocking potential."</p>
                    </div>
                    {/* <!-- Member 4 --> */}
                    <div className="Cards member-card bg-gray-100 p-6 rounded-lg text-center">
                        <img src={profile} alt="Member 4" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold m-name">Michael Brown</h3>
                        <p className="text-gray-600">Healthcare Coordinator</p>
                        <p className="text-gray-700 mt-2">"Healthcare access is a right, not a privilege."</p>
                    </div>
                    {/* <!-- Member 5 --> */}
                    <div className="Cards member-card bg-gray-100 p-6 rounded-lg text-center">
                        <img src={profile} alt="Member 5" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold m-name">Sarah Davis</h3>
                        <p className="text-gray-600">Community Outreach</p>
                        <p className="text-gray-700 mt-2">"Connecting with communities drives real change."</p>
                    </div>
                    {/* <!-- Member 6 --> */}
                    <div className="Cards member-card bg-gray-100 p-6 rounded-lg text-center">
                        <img src={profile} alt="Member 6" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold m-name">David Wilson</h3>
                        <p className="text-gray-600">Fundraising Manager</p>
                        <p className="text-gray-700 mt-2">"Every donation fuels our mission."</p>
                    </div>
                    {/* <!-- Member 7 --> */}
                    <div className="Cards member-card bg-gray-100 p-6 rounded-lg text-center">
                        <img src={profile} alt="Member 7" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold m-name">Laura Martinez</h3>
                        <p className="text-gray-600">Volunteer Coordinator</p>
                        <p className="text-gray-700 mt-2">"Volunteers are the backbone of our work."</p>
                    </div>
                    {/* <!-- Member 8 --> */}
                    <div className="Cards member-card bg-gray-100 p-6 rounded-lg text-center">
                        <img src={profile} alt="Member 8" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold m-name">Chris Lee</h3>
                        <p className="text-gray-600">Environmental Lead</p>
                        <p className="text-gray-700 mt-2">"Sustainability is our commitment to the planet."</p>
                    </div>
                    {/* <!-- Member 9 --> */}
                    <div className="Cards member-card bg-gray-100 p-6 rounded-lg text-center">
                        <img src={profile} alt="Member 9" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold m-name">Anna Taylor</h3>
                        <p className="text-gray-600">Communications Head</p>
                        <p className="text-gray-700 mt-2">"Spreading our message inspires action."</p>
                    </div>
                    {/* <!-- Member 10 --> */}
                    <div className="Cards member-card bg-gray-100 p-6 rounded-lg text-center">
                        <img src={profile} alt="Member 10" className="w-24 h-24 rounded-full mx-auto mb-4"/>
                        <h3 className="text-xl font-semibold m-name">Robert Clark</h3>
                        <p className="text-gray-600">Finance Director</p>
                        <p className="text-gray-700 mt-2">"Transparency in finances builds trust."</p>
                    </div>
                </div>
                </div>
            </section>

            {/* <!-- Contact Section --> */}
            <section className="py-2 bg-green-900/50 text-white">
                <div className="container mx-auto px-4 text-center">
                <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
                <p className="text-lg mb-6">Join us in our mission to make a difference. Contact us or volunteer today!</p>
                <button id="contactBtn" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200">
                    Contact Us
                </button>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <footer className="bg-gray-800 text-white py-1">
                <div className="container mx-auto px-4 text-center">
                <p className="text-xs">&copy; 2025 Our NGO. All rights reserved.</p>
                </div>
            </footer>
            </div>
        </>
    )
}

export default Member;