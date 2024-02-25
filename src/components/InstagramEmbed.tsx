import React, { useEffect } from "react";

const InstagramEmbed: React.FC = () => {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.commoninja.com/sdk/latest/commonninja.js";
      script.async = true;
      document.body.appendChild(script);
    };

    addScript();
  }, []);

  return (
    <div className="mt-5 mb-2 mx-auto max-w-6xl">
      <h2 className="text-5xl font-bold text-center mb-9 text-green-800">
        Follow Us on Instagram
      </h2>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="//widgets.commoninja.com/347ffc1f-feba-4213-afbd-009fb6936fb0"
          allowTransparency={true}
          className="w-full"  
          style={{ height: "500px", border: 0 }}  // Set a fixed height or adjust as needed
        ></iframe>
      </div>
      <div className="text-center mt-5">
        <a
          href="https://www.instagram.com/gotchabubbletea_oakville/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full transition duration-300"
        >
          Follow Us
        </a>
      </div>
    </div>
  );
};

export default InstagramEmbed;
