import Head from "next/head";
import Image from "next/image";
import React from "react";

const MarkhamStore: React.FC = () => {
  // Store details - ideally these would be fetched from a database or API
  const storeDetails = {
    name: "Gotcha Markham",
    address: "5762 Hwy 7, Unit 1, Markham , ON, L3P 1B0",
    phone: "(289) 554-9789",
    image: "/images/mark.webp",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46019.24241965274!2d-79.30728691641421!3d43.87235269946678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d7223460f757%3A0x89babd0964633813!2sGotcha%20Bubbletea%20Markham!5e0!3m2!1sen!2sca!4v1707979066338!5m2!1sen!2sca",
    uberEatsUrl:
      "https://www.ubereats.com/ca/store/gotcha-bubble-tea-markham/sUdfnFNkVtyt4ostdXngnw",
    googleOrderUrl:
      "https://food.google.com/chooseprovider?restaurantId=%2Fg%2F11rn70c8hm&orderType=1&utm_source=share",
    // Add other delivery services and external links as needed
  };
  return (
    <div>
      <Head>
        <title>{storeDetails.name}</title>
        <meta
          name="description"
          content={`Visit ${storeDetails.name} for the finest bubble tea in Markham.`}
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
              layout="responsive"
              objectFit="cover"
              className="rounded-lg"
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MarkhamStore;
