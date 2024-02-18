import Head from "next/head";
import Image from "next/image";
import React from "react";

const ThornhillStore: React.FC = () => {
  // Store details - ideally these would be fetched from a database or API
  const storeDetails = {
    name: "Gotcha Thornhill",
    address: "800 Steeles Ave W, Unit B21, Thornhill , ON, L4J 7L2",
    phone: "(905) 597-2188",
    image: "/images/thorn.webp",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2880.0079404810376!2d-79.45003982334303!3d43.79344827109574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b2dee92ae2c63%3A0xd1a9b35fe1a7ea56!2sGOTCHA%20Fresh%20Tea-%20Thornhill!5e0!3m2!1sen!2sca!4v1707979622792!5m2!1sen!2sca",
    uberEatsUrl:
      "https://www.ubereats.com/ca/store/gotcha-bubble-tea/w8ktJFSLSzWDBzs5KsMc7g",
    googleOrderUrl:
      "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11m46ttd0b&orderType=1&utm_source=share",
    // Add other delivery services and external links as needed
  };
  return (
    <div>
      <Head>
        <title>{storeDetails.name}</title>
        <meta
          name="description"
          content={`Visit ${storeDetails.name} for the finest bubble tea in Thornhill.`}
        />
      </Head>

      <main className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mb-6">
          {storeDetails.name}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Image container adjusted for portrait image */}
          <div className="w-full h-auto">
            <Image
              src={storeDetails.image}
              alt={`Image of ${storeDetails.name}`}
              width={600}
              height={800}
              className="responsive-cover-image"
            />
          </div>

          {/* Store Details */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold">Visit Us</h2>
              <p className="mb-2">{storeDetails.address}</p>
              <p className="mb-2">Phone: {storeDetails.phone}</p>
            </div>

            {/* Google Maps Embed */}
            <iframe
              src={storeDetails.googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen={false}
              loading="lazy"
              className="mb-4"
            ></iframe>

            {/* Delivery Link */}
            <div className="space-y-4">
              <a
                href={storeDetails.uberEatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-green-600 text-white py-3 px-4 rounded hover:bg-green-700 transition-colors duration-300"
              >
                Order on Uber Eats
              </a>
              <a
                href={storeDetails.googleOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-blue-600 text-white py-3 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
              >
                Order on Google Food
              </a>
              <a
                href={"https://gotchafreshtea-thornhill.business.site/"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-gray-400 text-white py-3 px-4 rounded hover:bg-gray-500 transition-colors duration-300"
              >
                Website
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ThornhillStore;
