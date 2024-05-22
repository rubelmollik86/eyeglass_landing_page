import React from "react";
import "./About.css";
import Navber from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

function TwoColumnSection() {
  return (
    <div>
      <Navber />
      <section className="p-4 md:p-8 ">
        <div className="container mx-auto flex flex-wrap items-center">
          {/* First Column: Text and Button */}
          <div className="w-full md:w-1/2 mb-4 md:mb-0">
            <div className="p-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Get a <span className="text-yellow-600">Flexible Property</span>{" "}
                From Your Budget
              </h2>
              <p className="text-lg mt-4">
                Have questions or need assistance with your travel plans? Our
                team is here to help. Feel free to get in touch with us.
              </p>
              <button className="bg-gray-500 text-white py-2 px-4 mt-4 hover:bg-yellow-500 rounded-lg">
                Contact Us
              </button>
            </div>
          </div>

          {/* Second Column: Animated Image with Zoom Effect */}
          <div className="w-full md:w-1/2 relative">
            <img
              src="/dicount-images/person-1.jpeg"
              alt="Contact Us"
              className="w-full h-auto rounded-lg image-animation zoom-effect"
            />
          </div>
        </div>
      </section>

      {/* Second section */}
      <section className="p-4 md:p-8 ">
        <div className="container mx-auto flex flex-wrap items-center">
          {/* Second Column: Animated Image with Zoom Effect */}
          <div className="w-full md:w-1/3 relative">
            <img
              src="/dicount-images/person-2.jpeg"
              alt="Contact Us"
              className="w-full h-auto rounded-lg image-animation zoom-effect"
            />
          </div>

          {/* First Column: Text and Button */}
          <div className="w-full md:w-2/3 mb-4 md:mb-0">
            <div className="p-4 ml-4">
              <h2 className="text-2xl md:text-3xl font-bold">
                Learn More About Us
              </h2>
              <p className="text-lg mt-4 ">
                "On the other hand, we denounce with righteous indignation and
                dislike men who are so beguiled and demoralized by the charms of
                pleasure of the moment, so blinded by desire, that they cannot
                foresee the pain and trouble that are bound to ensue; and equal
                blame belongs to those who fail in their duty through weakness
                of will, which is the same as saying through shrinking from toil
                and pain. These cases are perfectly simple and easy to
                distinguish. In a free hour, when our power of choice is
                untrammelled and when nothing prevents our being able to do what
                we like best, every pleasure is to be welcomed and every pain
                avoided. But in certain circumstances and owing to the claims of
                duty or the obligations of business it will frequently occur
                that pleasures have to be repudiated and annoyances accepted.
                The wise man therefore always holds in these matters to this
                principle of selection: he rejects pleasures to secure other
                greater pleasures, or else he endures pains to avoid worse pains
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* third section */}
      <section className="p-4 md:p-8 ">
        <div className="container mx-auto flex flex-wrap items-center">
          {/* First Column: Text and Button */}
          <div className="w-full md:w-2/3 mb-4 md:mb-0">
            <div className="mr-5">
              <h2 className="text-2xl md:text-3xl font-bold">Our Commitment</h2>
              <p className="text-lg mt-4 ">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
            </div>
          </div>

          {/* Second Column: Animated Image with Zoom Effect */}
          <div className="w-full md:w-1/3 relative ">
            <img
              src="/dicount-images/person-3.jpeg"
              alt="Contact Us"
              className="w-full h-auto rounded-lg image-animation zoom-effect"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default TwoColumnSection;
