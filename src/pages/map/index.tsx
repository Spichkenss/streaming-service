import YandexMap from "~/components/pages/Map";
import { useEffect, useState } from "react";

export interface GeoState {
  lat: number;
  long: number;
}

const MapPage = () => {
  const [currentGeo, setCurrentGeo] = useState<GeoState>({
    lat: 37.617734,
    long: 55.752004,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) =>
          setCurrentGeo({
            lat: position.coords.latitude,
            long: position.coords.longitude,
          }),

        (error) => {
          console.log(`Ошибка получения геолокации: ${error.message}`);
        }
      );
    } else {
      console.log("Геолокация не поддерживается браузером");
    }
  }, []);

  return <YandexMap center={currentGeo} />;
};

export default MapPage;
