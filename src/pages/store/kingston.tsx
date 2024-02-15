import Head from "next/head";
import Image from "next/image";
import React from "react";

const KingstonStore: React.FC = () => {
  // Store details - ideally these would be fetched from a database or API
  const storeDetails = {
    name: "Gotcha Kingston",
    address: "330 Princess St, Kingston, ON, K7L 1B6",
    image: "/images/king.webp",
    googleMapsUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1429.3816016227074!2d-76.49101026103222!3d44.23253339277019!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cd2abd0ec8f4f87%3A0xac92fddf4baa0302!2sGotcha%20Bubble%20Tea!5e0!3m2!1sen!2sca!4v1707980083188!5m2!1sen!2sca",
    uberEatsUrl:
      "https://www.ubereats.com/ca/store/gotcha-bubble-tea/FSsGWtJnUAizXPC7_wiQOA",
    googleOrderUrl: "https://food.google.com/chooseprovider?restaurantId=/g/11sycfvk87&g2lbs=AIQllVxuXJjNCulMtqjX5yZAteonk-IEcBrO9r2_uiVMQieJ51N9E9oyrmaSrdYXXz5UTFu2RvLMvE1f0NNNWLgIjmH-Z_rjUX8Hhr5itIoxRzR4TI43cfF3u7KMqRoUKAWReFj6oOkJIaxz5mDCO9gayNUJ9XTGYg%3D%3D&hl=en-CA&gl=ca&cs=1&ssta=1&fo_m=MfohQo559jFvMUOzJVpjPL1YMfZ3bInYwBDuMfaXTPp5KXh-&utm_source=search&gei=GLXNZcqUNZD-ptQP-tGZuA8&ei=GLXNZcqUNZD-ptQP-tGZuA8&fo_s=OA&opi=89978449",
    // Add other delivery services and external links as needed
  };
  return (
    <div>
      <Head>
        <title>{storeDetails.name}</title>
        <meta
          name="description"
          content={`Visit ${storeDetails.name} for the finest bubble tea in Kingston.`}
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

export default KingstonStore;
