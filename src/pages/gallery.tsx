import React, { useState } from "react";
import Image from "next/image";
import Lightbox from "react-18-image-lightbox";
import "react-18-image-lightbox/style.css";
import Masonry from "react-masonry-css";
import Head from "next/head";

const Gallery: React.FC = () => {
  const imageData = [
    { src: "/images/b5.webp", alt: "Bubble tea" },
    { src: "/images/b2.webp", alt: "Bubble tea" },
    { src: "/images/b6.webp", alt: "Bubble tea" },
    { src: "/images/b1.webp", alt: "Bubble tea" },
    { src: "/images/b7.webp", alt: "Bubble tea" },
    { src: "/images/b8.webp", alt: "Bubble tea" },
    { src: "/images/b9.webp", alt: "Bubble tea" },
    { src: "/images/b10.webp", alt: "Bubble tea" },
    { src: "/images/b11.webp", alt: "Bubble tea" },
    { src: "/images/b12.webp", alt: "Bubble tea" },
    { src: "/images/b13.webp", alt: "Bubble tea" },
    { src: "/images/b14.webp", alt: "Bubble tea" },
    { src: "/images/p3.webp", alt: "People" },
    { src: "/images/p2.webp", alt: "People" },
    { src: "/images/p1.webp", alt: "People" },
    { src: "/images/p4.webp", alt: "People" },
    { src: "/images/p6.webp", alt: "People" },
    { src: "/images/p7.webp", alt: "People" },
    { src: "/images/p8.webp", alt: "People" },
    { src: "/images/pl1.webp", alt: "Bubble tea plushie" },
    { src: "/images/pl2.webp", alt: "Bubble tea plushie" },
    { src: "/images/pl3.webp", alt: "Bubble tea plushie" },
    { src: "/images/guelph.webp", alt: "Guelph location" },
    { src: "/images/oak.webp", alt: "Oakville location" },
    { src: "/images/thorn.webp", alt: "Thornhill location" },
    { src: "/images/mark.webp", alt: "Markham location" },
    { src: "/images/miss.webp", alt: "Mississauga location" },
    { src: "/images/trt.webp", alt: "Toronto location" },
    { src: "/images/king.webp", alt: "Kingston location" },
    // ... more images
  ];

  const [currentImage, setCurrentImage] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div>
      <Head>
        <title>Gallery - Gotcha Bubble Tea</title>
        <meta
          name="description"
          content="Explore our Gotcha Bubble Tea locations and our delicious bubble teas."
        />
      </Head>

      <main>
        {/* Gallery Banner Section */}
        <section
          className="text-center bg-cover bg-center p-8"
          // style={{ backgroundImage: "url(/images/gallery-banner.jpg)" }}
        >
          <div className="bg-banner">
            <h1 className="text-6xl font-extrabold text-white mb-3">
              Our Gallery
            </h1>
            <p className="text-2xl text-white">
              A glimpse into the vibrant world of Gotcha Bubble Tea.
            </p>
          </div>
        </section>

        {/* Image Gallery Grid */}
        <section className="container mx-auto">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {imageData.map((image, index) => (
              <div
                key={index}
                className="image-container"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={500}
                  height={300}
                  className="responsive-image"
                  />
              </div>
            ))}
          </Masonry>
          {lightboxOpen && (
            <Lightbox
              mainSrc={imageData[currentImage].src}
              nextSrc={imageData[(currentImage + 1) % imageData.length].src}
              prevSrc={
                imageData[
                  (currentImage + imageData.length - 1) % imageData.length
                ].src
              }
              onCloseRequest={() => setLightboxOpen(false)}
              onMovePrevRequest={() =>
                setCurrentImage(
                  (currentImage + imageData.length - 1) % imageData.length
                )
              }
              onMoveNextRequest={() =>
                setCurrentImage((currentImage + 1) % imageData.length)
              }
            />
          )}
        </section>

        {/* Other Sections as needed */}
      </main>
    </div>
  );
};

export default Gallery;
