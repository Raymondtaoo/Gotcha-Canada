import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGooglePlay,
  faAppStoreIos,
} from "@fortawesome/free-brands-svg-icons";

import GotchaMap from "@/components/GotchaMap";

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "";

const locations = [
  {
    id: 1,
    name: "Gotcha Oakville",
    address: "1011 Upper Middle Rd, Unit E4, Oakville, ON, L6H 4L3",
    phone: "(905) 845-8088",
    lat: 43.48211134588206,
    lng: -79.69605731106158,
  },
  {
    id: 2,
    name: "Gotcha Toronto",
    address: "402 Spadina Ave., Toronto, ON, M5T 2G7",
    phone: "(416) 596-1010",
    lat: 43.65597297086738,
    lng: -79.3995306126834,
  },
  {
    id: 3,
    name: "Gotcha Mississauga",
    address: "3525 Platinum Dr, Unit 121, Mississauga , ON, L5M 7N4",
    phone: "(905) 607-8688",
    lat: 43.53711455854843,
    lng: -79.72829308981629,
  },
  {
    id: 4,
    name: "Gotcha Markham",
    address: "5762 Hwy 7, Unit 1, Markham , ON, L3P 1B0",
    phone: "(289) 554-9789",
    lat: 43.87235353332224,
    lng: -79.26608314393098,
  },
  {
    id: 5,
    name: "Gotcha Guelph",
    address: "650 Scottsdale Dr, Unit 2C, Guelph, ON, N1G 3M2",
    phone: "(519) 288-6868",
    lat: 43.51477999389762,
    lng: -80.23758309498118,
  },
  {
    id: 6,
    name: "Gotcha Thornhill",
    address: "800 Steeles Ave W, Unit B21, Thornhill , ON, L4J 7L2",
    phone: "(905) 597-2188",
    lat: 43.793452866234816,
    lng: -79.44746549351676,
  },
  {
    id: 7,
    name: "Gotcha Kingston",
    address: "330 Princess St, Kingston, ON, K7L 1B6",
    phone: "",
    lat: 44.23253399610409,
    lng: -76.48972245292981,
  },
  // Add more locations as needed
];

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Gotcha Canada</title>
        <meta
          name="description"
          content="Welcome to Gotcha Canada - the best bubble tea in town!"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Main Section with Bubble Tea Background */}
      <main className="relative">
        {/* Background Image */}
        <Image
          src="/images/b4.webp" // Replace with the path to your image
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="Gotcha bubble tea selection"
          className="z-0"
        />
        {/* Overlay Content */}
        <div className="flex items-center justify-center h-screen z-10 relative">
          <div className="text-center p-4">
            <h1 className="text-6xl md:text-9xl font-semibold text-gray-800">
              Discover{" "}
              <span className="text-yellow-400 md:text-gray-800">your</span>{" "}
              <span className="md:text-yellow-400">Flavour</span>
            </h1>
            <p className="text-xl md:text-4xl text-gray-700 mt-4">
              Explore the sweet & tasty world of Gotcha bubble teas.
            </p>
          </div>
        </div>
      </main>

      {/* Locations Section */}
      <section className="container mx-auto p-4">
        <h2 className="text-5xl font-bold text-green-800 text-center my-4">
          Locations
        </h2>
        <div className="max-w-9xl mx-auto">
          {" "}
          {/* This div will control the width of the map */}
          <GotchaMap apiKey={apiKey} locations={locations} />
        </div>
      </section>

      {/* Rewards Program Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Join the Gotcha Rewards Program
          </h2>
          <p className="text-gray-600 mb-8">
            Sign up for our rewards program and start earning points with every
            purchase. Redeem points for free drinks, special discounts, and
            exclusive offers. Join now and get a free bubble tea on us!
          </p>
          <div className="flex justify-center items-center space-x-4">
            {/* App Store Button */}
            <a
              href="https://apps.apple.com/ca/app/gotcha/id6443395772"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-black py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faAppStoreIos} size="2x" />
              <span>App Store</span>
            </a>
            {/* Google Play Button */}
            <a
              href="https://play.google.com/store/apps/details?id=uni.UNIA3GOTCHA"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-black py-2 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-700 transition-colors duration-300"
            >
              <FontAwesomeIcon icon={faGooglePlay} size="2x" />
              <span>Google Play</span>
            </a>
          </div>
        </div>
      </section>

      {/* Franchise Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-6">
            Become a Gotcha Franchisee
          </h2>
          <p className="text-gray-600 mb-8">
            Start your journey with us and bring the Gotcha experience to your
            community.
          </p>
          <a
            href="https://gotchacanada.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-600 py-2 px-6 rounded-lg hover:bg-green-700 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
