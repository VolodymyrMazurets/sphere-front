import "./TheSearch.scss";

import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";
import React, { useState } from "react";

import { ClassValue } from "classnames/types";
import { Libraries } from "@react-google-maps/api/dist/utils/make-load-script-url";
import classNames from "classnames";

const library: Libraries = ["places"];

interface TheSearchProps {
  className?: ClassValue;
  onChange: (location?: google.maps.places.SearchBox) => void;
}
export const TheSearch: React.FC<TheSearchProps> = ({
  className,
  onChange,
}) => {
  const [location, setLocation] = useState<google.maps.places.SearchBox>();
  return (
    <LoadScript
      libraries={library}
      googleMapsApiKey="AIzaSyC3bq8jHl8N_nF_i2EJJpYX8JHbqa70t1g"
    >
      <StandaloneSearchBox
        onLoad={(e) => setLocation(e)}
        onPlacesChanged={() => onChange(location)}
      >
        <input
          type="text"
          placeholder="Ex: London or United States"
          className={classNames("TheInput", className)}
        />
      </StandaloneSearchBox>
    </LoadScript>
  );
};
