import React, { useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

interface Location {
  id: number;
  name: string;
  address: string;
  phone: string;
  lat: number;
  lng: number;
}

const center = {
  lat: 43.65107,
  lng: -79.347015,
};

interface GotchaMapProps {
  apiKey: string;
  locations: Location[];
}

const GotchaMap: React.FC<GotchaMapProps> = ({ apiKey, locations }) => {
  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const handleActiveMarker = (markerId: number) => {
    if (markerId === activeMarker) {
      return;
    }
    setActiveMarker(markerId);
  };

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <div className="md:flex">
        <div className="md:w-72 bg-green-50 overflow-auto md:h-screen">
          {locations.map((location) => (
            <div
              key={location.id}
              onClick={() => handleActiveMarker(location.id)}
              className="p-4 hover:bg-green-100 cursor-pointer flex items-start text-sm border-b border-green-200"
            >
              <div className="flex-shrink-0 mt-1 text-2xl">📌</div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-green-800">
                  {location.name}
                </h3>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    location.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 hover:text-green-900"
                >
                  {location.address}
                </a>
                <a
                  href={`tel:${location.phone.replace(/\s/g, "")}`}
                  className="flex items-center text-green-600 hover:text-green-800"
                >
                  📞 {location.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="md:flex-1 h-80 md:h-screen">
          {" "}
          {/* Adjust the height for mobile */}
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "100%" }}
            center={center}
            zoom={10}
          >
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={{ lat: location.lat, lng: location.lng }}
                onClick={() => handleActiveMarker(location.id)}
              >
                {activeMarker === location.id ? (
                  <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                    <div className="p-2">
                      <h3 className="font-bold text-green-800">
                        {location.name}
                      </h3>
                      <p className="text-green-700">{location.address}</p>
                      <p className="flex items-center text-green-600">
                        📞 {location.phone}
                      </p>
                    </div>
                  </InfoWindow>
                ) : null}
              </Marker>
            ))}
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  );
};

export default React.memo(GotchaMap);
