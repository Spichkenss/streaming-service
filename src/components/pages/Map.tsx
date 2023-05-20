import {
  GeolocationControl,
  Map,
  Placemark,
  SearchControl,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";
import { type FC } from "react";
import { type GeoState } from "~/pages/map";

interface YandexMapProps {
  center: GeoState;
}

const YandexMap: FC<YandexMapProps> = ({ center }) => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [center.lat, center.long], zoom: 10 }}
        width="100%"
        height="100%"
      >
        <Placemark
          geometry={[center.lat, center.long]}
          options={{ preset: "islands#redCircleDotIcon" }}
        />
        <ZoomControl />
        <SearchControl />
        <GeolocationControl
          options={{ float: "right", position: { top: 10, right: 10 } }}
        />
      </Map>
    </YMaps>
  );
};

export default YandexMap;
