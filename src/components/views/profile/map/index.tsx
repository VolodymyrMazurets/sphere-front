import "./ProfileViewMap.scss";

import {
  EstimatedLocationType,
  InstagramLocationsType,
} from "../../../../services/http/types";
import { GoogleMap, Marker } from "@react-google-maps/api";
// import classNames from "classnames";
import { map, split, values } from "lodash";

import { ClassValue } from "classnames/types";
import React from "react";

interface ProfileViewMapProps {
  className?: ClassValue;
  EstimatedLocation?: EstimatedLocationType;
  Locations?: InstagramLocationsType;
}
const mapContainerStyle = {
  height: "220px",
  width: "100%",
};

export const ProfileViewMap: React.FC<ProfileViewMapProps> = ({
  EstimatedLocation,
  Locations,
}) => {
  const getCoordinates = (data?: string) => {
    const [lat, lng] = split(data, ",");

    return {
      lat: Number(lat),
      lng: Number(lng),
    };
  };

  const center = getCoordinates(EstimatedLocation?.Coordinates);

  return (
    <>
      <span className="ProfileViewMap__small-title">
        Heat Map of Tagged Locations
      </span>
      <div style={{ borderRadius: 20, overflow: "hidden" }}>
        {EstimatedLocation && Locations && (
          <GoogleMap
            options={{ disableDefaultUI: true, fullscreenControl: true }}
            id="marker-example"
            mapContainerStyle={mapContainerStyle}
            zoom={10}
            center={center}
          >
            {map(values(Locations), (e, idx) => (
              <Marker
                key={(e.PlaceId + String(idx)) as string}
                position={getCoordinates(e.Coordinates as string)}
                label={e.Occurrences as string}
                icon={e.Icon as string}
              />
            ))}
          </GoogleMap>
        )}
      </div>
    </>
  );
};
