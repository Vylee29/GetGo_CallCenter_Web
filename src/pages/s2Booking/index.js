import React, { useContext, useState } from "react";
import "./s2Booking.scss";
import GoogleMapReact from "google-map-react";
// import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import ItemTrip from "./itemTrip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import PlacesAutocomplete from "react-places-autocomplete";
import {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng,
} from "react-places-autocomplete";
import AuthContext, { TripContext } from "../../contexts/auth-context";
import axios, { Axios } from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const S2Booking = () => {
  const trip = useContext(AuthContext)
  console.log('trip');
  console.log(trip);
  const [data, setData] = useState([
    { user_phone: "0975220845", startAddress: "chuyen dungf 9", type: "3", id: '1111' },
    { user_phone: "0975220845", startAddress: "uyen dungf 9", type: "3", id: '' }])

  const [tripInfo, setTripInfo] = useState(() => {
    return { user_phone: "", startAddress: "", type: "", id: '' };
  });
  const handleChangeTripInformation = (tripInfo) => {
    setTripInfo(tripInfo);
  };

  // Auto complete

  const handleChangeAddress = (newAddress) => {
    const updatedTripInfo = { ...tripInfo, startAddress: newAddress };
    // Cập nhật state mới
    setTripInfo(updatedTripInfo);
  };
  const [coords, setCoords] = useState({
    lat: 10.99835602,
    lng: 77.01502627,
  });
  const handleSelect = (address) => {
    const updatedTripInfo = { ...tripInfo, startAddress: address };
    setTripInfo(updatedTripInfo);

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => console.log("Success", setCoords(latLng)))
      .catch((error) => console.error("Error", error));
  };
  const submitOrder = async () => {
    if (coords === {
      lat: 10.99835602,
      lng: 77.01502627,
    }) {

    } else {
      try {
        console.log({
          "trip_id": tripInfo.id,
          "start": {
            "place": tripInfo.startAddress,
            "lat": coords.lat,
            "lng": coords.lng
          }
        })
        const respond = await axios.post("http://localhost:3000/v1/booking/callcenters2", {
          "trip_id": tripInfo.id,
          "start": {
            "place": tripInfo.startAddress,
            "lat": coords.lat,
            "lng": coords.lng
          }
          
        })
        console.log(respond);
        if (respond.data.statusCode === 200) {
          toast.success("Điều phối chuyến đi thành công")
          trip.handleListTrip(tripInfo.id)
        }
      } catch (error) {
        toast.error("Điều phối chuyến đi thất bại")

        console.log(error);
      }

    }
  }
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };
  // const onChangeAddress = async (e) => {
  //   console.log(e.target.value);
  //   const result = await geocodeByAddress("quận");
  //   console.log(result);
  //   // const lnglat = await getLatLng(result[0])
  //   // setCoords(lnglat);
  // };

  return (
    <React.Fragment>
      <div className="nd-book-driver-page-callcenter-k45" id="877:5254">
        <p className="nh-v-li-thng-tin-a-ch-kyB" id="877:5255">
          ĐỊNH VỊ LẠI THÔNG TIN ĐỊA CHỈ
        </p>
        <div className="auto-group-wvdp-5nV" id="BCJyvZ66Prf11ZKvHCWVdP">
          <div className="auto-group-6mfb-ajF" id="BCJz9TtFNz1oyYqzNY6Mfb">
            <div className="search-oc1" id="880:6152">
              <div className="content-YJh" id="I880:6152;879:8702">
                <div className="magnifyingglass-Fiu" id="I880:6152;879:8703">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                  >
                    <path
                      d="M22.6872 19.885L18.2082 15.4067C18.006 15.2046 17.732 15.0923 17.4444 15.0923H16.7122C17.9521 13.5067 18.6889 11.5124 18.6889 9.34284C18.6889 4.18182 14.5063 0 9.34443 0C4.18253 0 0 4.18182 0 9.34284C0 14.5039 4.18253 18.6857 9.34443 18.6857C11.5143 18.6857 13.509 17.949 15.0949 16.7093V17.4415C15.0949 17.7289 15.2072 18.0029 15.4093 18.2051L19.8884 22.6833C20.3107 23.1056 20.9935 23.1056 21.4113 22.6833L22.6827 21.4122C23.105 20.9899 23.105 20.3072 22.6872 19.885ZM9.34443 15.0923C6.16822 15.0923 3.59401 12.523 3.59401 9.34284C3.59401 6.16717 6.16373 3.5934 9.34443 3.5934C12.5206 3.5934 15.0949 6.16268 15.0949 9.34284C15.0949 12.5185 12.5251 15.0923 9.34443 15.0923Z"
                      fill="#FBA348"
                    />
                  </svg>
                </div>
                <input
                  className="placeholder-label-t9b"
                  id="I880:6152;879:8704"
                  placeholder="Search"
                />
              </div>
            </div>
            {trip.listTrip.map((e) => {
              return <ItemTrip
                className={tripInfo.id === e.id ? 'select_trip' : ''}
                key={e.id}
                tripInfo={e}
                onClick={handleChangeTripInformation}
              />
            })}
            {/* <ItemTrip tripInfo={tripInfo} />
            <ItemTrip tripInfo={tripInfo} /> */}
          </div>
          <div className="auto-group-bk2q-Bt1" id="BCK2SUtwZpWzWsTXgVBk2q">
            <div className="section-header-82Z" id="877:5256">
              <p className="thng-tin-chung--TqX" id="877:5258">
                <span className="thng-tin-chung--TqX-sub-0">
                  Thông tin chung
                </span>
                <span className="thng-tin-chung--TqX-sub-1"> *</span>
              </p>
            </div>
            <div className="input-xZK" id="877:5260">
              <div className="frame-79-J7P" id="877:5261">
                <p className="s-in-thoi-3qf" id="877:5262">
                  Số điện thoại
                </p>
                <p className="website-jCh" id="877:5263">
                  {tripInfo.user_phone}
                </p>
              </div>
            </div>

            <div className="input-Ui1" id="877:5268">
              <div className="frame-79-1T3" id="877:5269">
                <p className="loi-xe-7W5" id="877:5270">
                  Loại xe
                </p>
                <p
                  className="available-products-at-our-website-pQV"
                  id="877:5271"
                >
                  {tripInfo.type}
                </p>
              </div>
            </div>

            <PlacesAutocomplete
              value={tripInfo.startAddress}
              onChange={handleChangeAddress}
              onSelect={handleSelect}
            >
              {({
                getInputProps,
                suggestions,
                getSuggestionItemProps,
                loading,
              }) => (
                <div>
                  {/* <input
                  className="available-products-at-our-website-znq"
                  placeholder="Nhập địa chỉ đã được định vị"
                  onChange={onChangeAddress}
                /> */}
                  <div className="input-1AD" id="877:5264">
                    <div className="frame-79-XuF" id="877:5265">
                      <p className="a-ch-n-gGM" id="877:5266">
                        Địa chỉ đón
                      </p>
                      <input
                        {...getInputProps({
                          placeholder: "Nhập địa chỉ đã được định vị",
                          className: "available-products-at-our-website-znq",
                        })}
                        value={tripInfo.startAddress}
                      />
                    </div>
                  </div>
                  <div className="autocomplete-dropdown-container ">
                    {loading && <div>Loading...</div>}
                    {suggestions.map((suggestion) => {
                      const className = suggestion.active
                        ? "suggestion-item--active"
                        : "suggestion-item";
                      // inline style for demonstration purpose
                      const style = suggestion.active
                        ? { backgroundColor: "#fafafa", cursor: "pointer" }
                        : { backgroundColor: "#f9fafb", cursor: "pointer" };
                      return (
                        <div
                          {...getSuggestionItemProps(suggestion, {
                            className,
                            style,
                          })}
                        >
                          {/* <span className="textSuggestion">11 </span> */}
                          <svg
                            className="iconSvg"
                            xmlns="http://www.w3.org/2000/svg"
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                          >
                            <circle
                              cx="12.5"
                              cy="12.5"
                              r="12.5"
                              fill="#FA8D1D"
                            />
                            <path
                              d="M12.176 18.4256C11.2989 17.7606 10.4859 17.0317 9.74549 16.2464C8.63438 15.067 7.31494 13.3105 7.31494 11.6368C7.31446 10.782 7.59932 9.94626 8.13348 9.2354C8.66763 8.52454 9.42707 7.97048 10.3157 7.64334C11.2043 7.31621 12.1821 7.2307 13.1254 7.39765C14.0687 7.56459 14.9351 7.97648 15.6149 8.58119C16.0675 8.98164 16.4263 9.45789 16.6704 9.98238C16.9145 10.5069 17.0392 11.0692 17.0371 11.6368C17.0371 13.3105 15.7177 15.067 14.6066 16.2464C13.8662 17.0317 13.0532 17.7606 12.176 18.4256ZM12.176 9.78527C11.6235 9.78527 11.0936 9.98034 10.7029 10.3276C10.3122 10.6748 10.0927 11.1457 10.0927 11.6368C10.0927 12.1278 10.3122 12.5987 10.7029 12.946C11.0936 13.2932 11.6235 13.4883 12.176 13.4883C12.7286 13.4883 13.2585 13.2932 13.6492 12.946C14.0399 12.5987 14.2594 12.1278 14.2594 11.6368C14.2594 11.1457 14.0399 10.6748 13.6492 10.3276C13.2585 9.98034 12.7286 9.78527 12.176 9.78527Z"
                              fill="white"
                            />
                          </svg>
                          <span className="textSuggestion">
                            {suggestion.description}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </PlacesAutocomplete>

            <div className="rectangle-1748-hjB" id="877:5273"></div>

            <div className="maps-zoom-levels-3-street-HSV">
              <GoogleMapReact
                bootstrapURLKeys={{
                  key: "AIzaSyBLAnygT3LzvYGdMD43t12_zw79CXC0O2w",
                }}
                center={coords}
                defaultZoom={18}
              >
                <AnyReactComponent
                  lat={coords.lat}
                  lng={coords.lng}
                  text={
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      style={{ color: "#ff0000", fontSize: "20" }}
                    />
                  }
                />
              </GoogleMapReact>
              <div onClick={submitOrder} className="input-qqP" id="877:5272">
                ĐIỀU PHỐI
              </div>
            </div>
          </div>
        </div>
        <div className="googleMapCSS"></div>
      </div>
    </React.Fragment>
  );
};
export default S2Booking;
