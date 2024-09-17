import Head from "next/head";
import Image from "next/image";
import React from "react";

const CalgaryStore: React.FC = () => {
  // Store details - ideally these would be fetched from a database or API
  const storeDetails = {
    name: "Gotcha Calgary",
    address: "751 3 St SW, Calgary, AB, T2P 4K8",
    phone: "(403) 454-0630",
    image: "/images/calgary.jpg",
    googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d156.77373902647474!2d-114.07124541959244!3d51.04607412119486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716f00607c4d91%3A0xaac228197fece027!2sGotcha%20Bubble%20Tea!5e0!3m2!1sen!2sca!4v1726612342581!5m2!1sen!2sca",
    doorDashUrl: "https://www.doordash.com/store/gotcha-bubble-tea-calgary-29922116/",
    googleOrderUrl:
      "https://food.google.com/chooseprovider?restaurantId=/g/11y7fyp89r&g2lbs&orderType=1&utm_source=share",
    // Add other delivery services and external links as needed
  };
  return (
    <div>
      <Head>
        <title>{storeDetails.name}</title>
        <meta
          name="description"
          content={`Visit ${storeDetails.name} for the finest bubble tea in Calgary.`}
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
                href={storeDetails.doorDashUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full text-center bg-orange-600 text-white py-3 px-4 rounded hover:bg-orange-700 transition-colors duration-300"
              >
                Order on DoorDash
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

export default CalgaryStore;
