// InstagramEmbed.tsx
import React, { useEffect } from "react";

const InstagramEmbed: React.FC = () => {
  useEffect(() => {
    const addLightWidgetScript = () => {
      const script = document.createElement("script");
      script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
      script.async = true;
      document.body.appendChild(script);
    };

    addLightWidgetScript();
  }, []);

  return (
    <div className="mt-5 mb-2 mx-auto max-w-6xl">
      <h2 className="text-5xl font-bold text-center mb-9 text-green-800">
        Follow Us on Instagram
      </h2>
      <div className="rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="//lightwidget.com/widgets/728464479478563b94db2ce00fffbdde.html"
          allowTransparency={true}
          className="lightwidget-widget"
          style={{ width: "100%", border: 0, overflow: "hidden" }}
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
