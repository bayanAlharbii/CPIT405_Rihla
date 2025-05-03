// import "./styles.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useNavigate } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate();

  const markers = [
    {
      geocode: [21.3891, 39.8579],
      popUp: "Welcome to Makkah",
      url: "/city/Makkah",
    },
    {
      geocode: [24.4709, 39.6122],
      popUp: "Welcome to Madinah",
      url: "/city/Madinah",
    },
    {
      geocode: [24.7136, 46.6753],
      popUp: "Welcome to Riyadh",
      url: "/city/Riyadh",
    },
    {
      geocode: [21.5433, 39.1728],
      popUp: "Welcome to Jeddah",
      url: "/city/Jeddah",
    },
    {
      geocode: [26.6358, 37.1656],
      popUp: "Welcome to AlUla",
      url: "/city/AlUla",
    },
  ];

  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/128/2776/2776067.png",
    iconUrl: require("../images/location-pin.png"),
    iconSize: [38, 38], // reduced to a reasonable size
  });

  return (
    <MapContainer
      center={[23.8859, 45.0792]}
      zoom={6}
      style={{ height: "100vh" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup chunkedLoading>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            position={marker.geocode}
            icon={customIcon}
            eventHandlers={{
              click: () => {
                navigate(marker.url);
              },
            }}
          >
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))}
      </MarkerClusterGroup>{" "}
    </MapContainer>
  );
}
