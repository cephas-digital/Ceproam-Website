// Map.tsx
import { useState } from "react";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default marker icon paths (Leaflet + bundlers issue)
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
const orangeIcon = new L.Icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  className: "hue-rotate-[290deg]", // quick way to tint it orange
});

interface HQLocation {
  lat: number;
  lng: number;
  name: string;
  address: string;
}

const hq: HQLocation = {
  lat: 6.6155,
  lng: 3.3183,
  name: "Headquarters",
  address: "Agege, Lagos State",
};

export default function OfficeMap() {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative w-full h-[400px] rounded-xl overflow-hidden shadow-lg">
      <MapContainer
        center={[hq.lat, hq.lng]}
        zoom={12}
        scrollWheelZoom={false}
        className="w-full h-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={[hq.lat, hq.lng]}
          icon={orangeIcon}
          eventHandlers={{ click: () => setOpen(true) }}
        />
      </MapContainer>

      {open && (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1000] bg-white rounded-xl shadow-xl p-5 w-64 text-center pointer-events-auto">
          <div className="flex justify-center mb-2">
            <span className="inline-flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full text-white">
              📍
            </span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">{hq.name}</h3>
          <p className="text-sm text-slate-600 mb-3">{hq.address}</p>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${hq.lat},${hq.lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 font-semibold text-sm hover:underline"
          >
            Get Directions
          </a>
        </div>
      )}
    </div>
  );
}
