// LocationInput.js
import React from "react";
import styles from "./LocationInput.module.scss";
import { GoogleApiWrapper, Autocomplete } from "google-maps-react";

const LocationInput = ({ google }) => {
  const onPlaceChanged = () => {
    const place = autocomplete.getPlace();
    // Xử lý thông tin địa chỉ ở đây
  };

  let autocomplete;

  return (
    <div>
      <h1>LocationInput</h1>
      <Autocomplete
        onPlaceSelected={onPlaceChanged}
        types={["geocode"]}
        componentRestrictions={{ country: "vn" }}
        google={google}
        ref={(ref) => (autocomplete = ref)}
      />
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyBLAnygT3LzvYGdMD43t12_zw79CXC0O2w",
})(LocationInput);
