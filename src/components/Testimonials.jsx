import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const testimonials = [
  {
    id: 1,
    name: "Jonathan Duong",
    title: "Gotcha Oakville",
    content: "Great new bubble tea shop in Oakville. I ordered a mango slush and really enjoyed it. I also like how you can adjust the ice and sugar levels for all the drinks, I usually don’t like very sugary drinks. The team here is very friendly and welcoming, I’ll definitely be coming back soon!"
  },
  {
    id: 2,
    name: "E Sayed",
    title: "Gotcha Oakville",
    content: "A must try bubble tea place that has fruit based tapioca or bubbles that don’t stick to your tooth and a great combo to fizz with bubble tea flavoured naturally and amazing color. I had been there with a friend to just taste it and ended up buying 2-3 of it. I tried the peach soda tea and the blueberry lime soda tea which both tasted amazing. Definitely recommend you to not to add extra sugar as it is naturally sweet cuz of the sweetener they add in the beginning. Interiors are cute and nice to hang out with 4-5 of friends. Overall amazing place"
  },
  {
    id: 3,
    name: "April Hatle",
    title: "Gotcha Toronto",
    content: "Cute bubble tea shop with great teas to choose from! I got one of my usual favourites (taro milk tea with coconut jelly) and it was both bursting with flavour and the perfect amount of sweet. Gotcha Tea is definitely a favourite chain of mine that I’ll be on the lookout for in the future."
  },
  {
    id: 4,
    name: "Alexa Mahabir",
    title: "Gotcha Toronto",
    content: "Passed by here while I was at Kensington Market. Cool tea flavours! I recommend the Maple Sugar Pearl Milk Tea - something unique!"
  },
  {
    id: 5,
    name: "Savy Harrah",
    title: "Gotcha Mississauga",
    content: "The store looks aesthetic and is IG-worthy. I ordered Crème Brûlée milk tea and it was really delicious! The server, Analyn, is also very friendly and helpful. Will definitely visit again. :)"
  },
  {
    id: 6,
    name: "Chihiro H",
    title: "Gotcha Mississauga",
    content: "This is by far the best semi-sweet brown sugar bubble tea I ever had. The tapioca are soft yet bouncy, sugar lever is perfect. I could taste the light black tea flavor without having the thickness of cream flavor which I usually hate. I know many stores use heavy cream to make it taste smooth. After all, 1st time being here, I’m so glad to discover this place. The store is very pinky and pretty, and very spacious!"
  },
  {
    id: 7,
    name: "Kateri",
    title: "Gotcha Markham",
    content: "Really cute bubble tea shop. Went on a Monday night and it was really quite so it made a good study spot. The staff was very kind as well! Their drinks are definitely on the sweeter side so I would recommend getting 30% sugar or no sugar."
  },
  {
    id: 8,
    name: "Anna",
    title: "Gotcha Guelph",
    content: "Gotcha was great! sooo many different drinks and customization was really good. I got the taro milk tea and it was delicious. Prices weren’t too bad either even though we got an X-large drink (which is huge and cost around 7.50). Big cafe with lots of seating and there are also board games. Definitely one of the best boba places in guelph. Can really taste the tea, only wish is that pearls were a little softer!"
  },
  {
    id: 9,
    name: "Lumi Rhodes",
    title: "Gotcha Thornhill",
    content: "They have amazing collagen tea - peach and aloe vera are my favourites (with no sugar added) and the matcha red bean slush (%30 sugar)! And they often have nice promos when you buy a few drinks - so also a great place to visit with friends around! (Or if you just want multiple bubble teas for yourself hehe). Also the people who work here are always very friendly to me as well, always smiling and welcoming! 10/10 recommend! :)"
  },
  {
    id: 10,
    name: "sloane rosen",
    title: "Gotcha Kingston",
    content: "Beautiful store with lots of unique combos and flavours. It's truly something new for Kingston. Giving it a 4 stars currently as the staff seemed pretty new (taking a long time to take orders and make drinks, and they told me the wrong ingredients in the drink) but I think with a bit more training they will get to 5 stars! Will come back :)"
  }
];

const Testimonials = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={6100}
      className="text-center mx-auto w-full lg:w-3/4 xl:w-1/2"
    >
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="my-8">
          <blockquote className="mx-auto text-lg font-medium text-gray-700 bg-white px-8 py-4 shadow rounded border border-gray-200">
            <p className="leading-relaxed mb-6">"{testimonial.content}"</p>
            <cite className="not-italic font-bold">{testimonial.name}</cite>
            <span className="block text-sm text-gray-500">{testimonial.title}</span>
          </blockquote>
        </div>
      ))}
    </Carousel>
  );
};

export default Testimonials;
