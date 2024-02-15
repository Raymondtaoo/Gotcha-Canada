import Head from "next/head";
import React from "react";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div>
      <Head>
        <title>About Gotcha Bubble Tea</title>
        <meta
          name="description"
          content="Discover the story behind Gotcha Bubble Tea, a luxury bubble tea brand loved across Canada."
        />
      </Head>

      <main>
        {/* Banner Section with Background Image */}
        <section
          className="relative text-white p-8 text-center bg-cover bg-center"
          style={{ backgroundImage: "url(/images/b3.webp)" }}
        >
          <div className="bg-gray-500 bg-opacity-40">
            <div className="container mx-auto">
              <h1 className="text-6xl font-extrabold mb-3">About Gotcha</h1>
              <p className="text-2xl">
                Experience the finest tea time with Gotcha, Canada&apos;s first
                luxury bubble tea brand.
              </p>
            </div>
          </div>
        </section>

        {/* Introduction and History with Background Image */}
        <section
          className="py-8 px-4 bg-no-repeat bg-cover"
          style={{ backgroundImage: "url(/images/b1.webp)" }}
        >
          <div className="container mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              Our Story
            </h2>
            <p className="text-xl">
              Gotcha Bubble Tea began its journey with a vision to redefine &rsquo;tea
              time&rsquo; for tea enthusiasts. As the first luxury bubble tea
              dispensary in Canada, we&rsquo;ve become an international sensation.
            </p>
          </div>
          <div className="p-5"></div>
          <div className="container mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              Our Commitment to Quality
            </h2>
            <p className="text-xl">
              We pride ourselves on sourcing our teas directly from our own
              farms in Taiwan, ensuring each cup is not only delicious but also
              organically and sustainably produced. Our natural syrups and
              unique recipes set us apart as the purveyors of the finest teas
              available.
            </p>
          </div>
          <div className="p-5"></div>
          <div className="container mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              Signature Teas
            </h2>
            <p className="text-xl">
              At the heart of our success are our Signature Fruit Tea and
              Signature Milk Tea, both born from our unique recipes. We invite
              everyone to experience these exclusive flavors that define the
              essence of Gotcha Bubble Tea.
            </p>
          </div>
          <div className="p-5"></div>
          <div className="container mx-auto bg-white bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-bold text-green-700 mb-4">
              Our Philosophy
            </h2>
            <p className="text-xl">
              Gotcha Bubble Tea is more than just a tea brand; it&apos;s a
              destination for relaxation, socialization, and enjoying
              high-quality teas. Our locations welcome tea enthusiasts of all
              ages, offering a trendy and inclusive environment to enjoy our
              wide array of teas.
            </p>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="bg-green-100 py-8 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-green-600 mb-4">
              Testimonials
            </h2>
            <Testimonials />
          </div>
        </section>
        {/* Franchise Section */}
      <section className="bg-gray-100 pb-10 pt-3">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-4">
            Become a Gotcha Franchisee
          </h2>
          <div className="text-center pb-4">
            <Image
              src="/images/p5.webp" 
              alt="Master Franchise Owner"
              width={200}
              height={200}
              className="rounded-full mx-auto" 
            />
            <p className="text-lg mt-4">Master Franchise Owner</p>
          </div>
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
        {/* Visit Us Section with a bright background */}
        <section className="py-8 px-4 bg-green-600 text-white text-center">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold mb-4">Visit Us</h2>
            <p className="text-xl">
              Join us at any of our locations across Canada and discover the joy
              of tea time at Gotcha Bubble Tea.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default About;
