import "./TheSearch.scss";

import React, { useState } from "react";

import { ClassValue } from "classnames/types";
import { StandaloneSearchBox } from "@react-google-maps/api";
import classNames from "classnames";

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
  );
};
