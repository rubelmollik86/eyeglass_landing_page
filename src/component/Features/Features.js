import React from "react";
import Navber from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


function PressCoverage() {
  return (
      <div>
          <Navber/>
      <section className="p-4 md:p-8 mt-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-3xl font-bold">Press Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-5">
            <div className="col-span-1 md:col-span-1 p-2 rounded shadow-lg">
              <div className="press-item">
                <img src="press-img/amritabazar.png" alt="Press 1" />
                <p className="mt-8 ">
                  নতুন শিক্ষাক্রম নিয়ে ১৫ ‘ভুল তথ্য’–এর যে ব্যাখ্যা দিলেন
                  শিক্ষামন্ত্রী....
                </p>
                <a
                  className="bg-gray-600 p-1 hover:text-yellow-500 "
                  href="https://www.prothomalo.com/"
                >
                  Read More..
                </a>
              </div>
            </div>

            <div className="col-span-1 md:col-span-1 p-2 rounded shadow-lg">
              <div className="press-item">
                <img src="press-img/Bangladesh_Pratidin.png" alt="Press 2" />
                <p className="mt-8 hover:text-yellow-500">
                  বঙ্গবন্ধু টানেল উদ্বোধন আজ, শিল্পের নতুন দুয়ার খুলছে....
                </p>
                <a
                  className="bg-gray-600 p-1 "
                  href="https://www.kalerkantho.com/"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="col-span-1 md:col-span-1 p-2 rounded shadow-lg">
              <div className="press-item">
                <img src="press-img/Kaler-Kantho.png" alt="Press 3" />
                <p className="mt-8 hover:text-yellow-500">
                  দরিদ্র রোগীর চিকিৎসার টাকায় কর্মকর্তাদের সম্মানী....
                </p>
                <a
                  className="bg-gray-600 p-1 "
                  href="https://www.bd-pratidin.com/"
                >
                  Read More
                </a>
              </div>
            </div>

            <div className="col-span-1 md:col-span-1 p-2 rounded shadow-lg">
              <div className="press-item">
                <img src="press-img/prothom-alo.png" alt="Press 4" />
                <p className="mt-8 hover:text-yellow-500">
                  ইংল্যান্ড ওয়ানডেতে ‘চক্রপূরণের’ শেষ ধাপে দাঁড়িয়ে, বললেন
                  আথারটন....
                </p>
                <a
                  className="bg-gray-600 p-1 "
                  href="https://en.wikipedia.org/wiki/Amrita_Bazar_Patrika"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
          </section>
          <Footer/>
    </div>
  );
}

export default PressCoverage;
