import React, { useContext, useEffect, useState } from "react";
import "./s3Booking.scss";
// import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';
import ItemTrip from "../s2Booking/itemTrip";
import AuthContext from "../../contexts/auth-context";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const S3Booking = () => {
  const trip = useContext(AuthContext)
  console.log(trip.tripInfor)
  // const [tripInfo, setTripInfo] = useState(null);
  // console.log(trip)
  // useEffect(() => {
  //   console.log(trip.listTrip[0])
  //   setTripInfo(trip.listTrip[0]);
  // }, [])
  const handleChangeTripInformation = (tripInfo) => {
    console.log("HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
    // setTripInfo(tripInfo);
    console.log(tripInfo);
    trip.handleTripInfor(tripInfo)
  };

  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };


  return (
    <React.Fragment>
      <div className="nd-book-driver-page-callcenter-k45" id="877:5254">
        <p className="nh-v-li-thng-tin-a-ch-kyB" id="877:5255">
          ĐỊNH VỊ LẠI THÔNG TIN ĐỊA CHỈ
        </p>
        {trip.tripInfor !== null && <div className="auto-group-wvdp-5nV" id="BCJyvZ66Prf11ZKvHCWVdP">
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
                key={e.id}
                className={trip.tripInfor.id === e.id ? 'select_trip' : ''}

                tripInfo={e}
                onClick={handleChangeTripInformation}
              />
            })}
            {/* <ItemTrip tripInfo={tripInfo} />
            <ItemTrip tripInfo={tripInfo} /> */}
          </div>
          <div className="frame-1329-Vhq" id="974:6281">

            <div className="auto-group-b2bh-9cb" id="32zEhDiykvfrYmy3sUb2bh">
              <div className="driver-info-tq5" id="974:6318">
                TRIP DETAILS
                {" "}
              </div>
            </div>
            <div className="group-38392-FXD d-flex justify-content-start" id="974:6317">
              <div className="auto-group-mb7d-dpb" id="32zF73NcvAd6ErKMu6MB7D">
                <div className="st-aE3" id="974:6322">
                  ID CHUYẾN ĐI
                </div>
                <div className="item-0974220702-gns" id="974:6323">
                  TRPAA{trip.tripInfo?.id}

                </div>
              </div>
              <div className="auto-group-mb7d-dpb mx-20" id="32zF73NcvAd6ErKMu6MB7D">
                <div className="st-aE3" id="974:6322">
                  CÁCH THỨC ĐẶT XE
                </div>
                <div className="item-0974220702-gns" id="974:6323">
                  TỪ KHÁCH HÀNG
                </div>
              </div>
              <div className="auto-group-yvkh-osV" id="32zFCCtgWcmR2Svb8pyvKh">
                <div className="nh-gi-YaB" id="974:6324">
                  ĐI NGAY
                </div>
                <div className="khng-54K" id="974:6325">
                  Có

                </div>
              </div>
            </div>

            <div className="group-38392-FXD  d-flex justify-content-start" id="974:6317">
              <div className="auto-group-mb7d-dpb" id="32zF73NcvAd6ErKMu6MB7D">
                <div className="st-aE3" id="974:6322">
                  ĐÓN TẠI
                </div>
                <span className="item-0974220702-gns width-100" id="974:6323">
                  {trip?.tripInfor?.startAddress}
                </span>
              </div>
              <div className="auto-group-mb7d-dpb mx-10" id="32zF73NcvAd6ErKMu6MB7D">
                <div className="st-aE3" id="974:6322">
                  TRẢ TẠI
                </div>
                <div className="item-0974220702-gns width-100" id="974:6323">
                  {trip?.tripInfor?.endAddress}

                </div>
              </div>
            </div>
            <hr className="mx-5" />
            <div className="auto-group-b2bh-9cb" id="32zEhDiykvfrYmy3sUb2bh">
              <div className="driver-info-tq5" id="974:6318">
                DRIVER INFO{" "}
              </div>
            </div>

            <div className="group-38392-FXD" id="974:6317">
              <div className="group_driver">
                <div className="auto-group-x9wd-DcT " id="32zEp8h8K1jWo3RdVdx9wD">
                  <img
                    className="item-70-AGo"
                    src="https://d1hjkbq40fs2x4.cloudfront.net/2017-08-21/files/landscape-photography_1645.jpg"
                    id="974:6319"
                    alt=""
                  />

                </div>
                <div className="auto-group-mb7d-dpb " id="32zF73NcvAd6ErKMu6MB7D">
                  <div className="st-aE3" id="974:6322">
                    ID TÀI XẾ

                  </div>
                  <div className="item-0974220702-gns" id="974:6323">
                    driver{trip.tripInfor.driver_id}


                  </div>
                </div>
              </div>

              <div className="auto-group-mb7d-dpb" id="32zF73NcvAd6ErKMu6MB7D">
                <div className="st-aE3" id="974:6322">
                  SĐT
                </div>
                <div className="item-0974220702-gns" id="974:6323">
                  {trip.tripInfor.driver?.phone}

                </div>
              </div>

              <div className="auto-group-yvkh-osV" id="32zFCCtgWcmR2Svb8pyvKh">
                <div className="nh-gi-YaB" id="974:6324">
                  ĐÁNH GIÁ
                </div>
                <div className="khng-54K" id="974:6325">
                  {trip.tripInfor?.driver_stats?.starResult}

                </div>
              </div>

              <div className="auto-group-yvkh-osV" id="32zFCCtgWcmR2Svb8pyvKh">
                <div className="nh-gi-YaB" id="974:6324">
                  SỐ CHUYẾN XE
                </div>
                <div className="khng-54K" id="974:6325">
                  {trip.tripInfor?.driver_stats?.number_of_trips}

                </div>
              </div>
              {/* <div className="auto-group-vsew-c4F" id="32zFHCkMY9gNdDeAXUVsEw">
                <div className="email-kAT" id="974:6326">
                  EMAIL
                </div>
                <div className="manhtu220702gmailcom-Fsu" id="974:6327">
                  manhtu220702@gmail.com
                </div>
              </div> */}
              {/* <div className="auto-group-k2nj-xGX" id="32zFMCdhABD9731pqbK2Nj">
                <div className="s-chuyn-xe-67q" id="974:6328">
                  SỐ CHUYẾN XE
                </div>
                <div className="item-10-1kb" id="974:6329">
                  10
                </div>
              </div> */}
            </div>
            <hr className="mx-5" />


            <div className="auto-group-b2bh-9cb" id="32zEhDiykvfrYmy3sUb2bh">
              <div className="driver-info-tq5" id="974:6318">
                VEHICLE DETAILS
                {" "}
              </div>
            </div>
            <div className="group-38392-FXD d-flex justify-content-start" id="974:6317">
              <div className="auto-group-mb7d-dpb " id="32zF73NcvAd6ErKMu6MB7D">
                <div className="st-aE3" id="974:6322">
                  TÊN PHƯƠNG TIỆN
                </div>
                <div className="item-0974220702-gns" id="974:6323">
                  {trip.tripInfor.driver?.driver_vehicle?.name}


                </div>
              </div>
              <div className="auto-group-mb7d-dpb mx-20" id="32zF73NcvAd6ErKMu6MB7D">
                <div className="st-aE3" id="974:6322">
                  BIỂN SỐ
                </div>
                <div className="item-0974220702-gns" id="974:6323">
                  {trip.tripInfor.driver?.driver_vehicle?.license_plate}

                </div>
              </div>
              <div className="auto-group-yvkh-osV" id="32zFCCtgWcmR2Svb8pyvKh">
                <div className="nh-gi-YaB" id="974:6324">
                  SỐ CHỖ
                </div>
                <div className="khng-54K" id="974:6325">
                  {trip.tripInfor.driver?.driver_vehicle?.vehicle_type?.name}


                </div>
              </div>
            </div>

          </div>
        </div>}
        <div className="googleMapCSS"></div>
      </div>
    </React.Fragment>
  );
};
export default S3Booking;
