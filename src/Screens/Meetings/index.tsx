import { useEffect, useState } from "react";
import { ZoomMtg } from "@zoomus/websdk";
import axios from "axios";
import "./styles.css";
import { KJUR } from "jsrsasign";
import { Recordings } from "../Recordings";
import { UpComingMeetings } from "../UpComingMeetings";

enum Screens {
  Meetings = "Meetings",
  Recordings = "Recordings",
}

export const Meetings = () => {
  const [screen, setScreen] = useState(Screens.Meetings);

  return (
    <>
      <div className="tab" style={{ marginBottom: "2rem" }}>
        <button
          className="tablinks"
          onClick={() => setScreen(Screens.Meetings)}
        >
          Meetings
        </button>
        <button
          className="tablinks"
          onClick={() => setScreen(Screens.Recordings)}
        >
          Recordings
        </button>
      </div>

      {/* <!-- Tab content --> */}
      {
        {
          [Screens.Recordings]: <Recordings />,
          [Screens.Meetings]: <UpComingMeetings />,
        }[screen]
      }
    </>
  );
};

// https://www.npmjs.com/package/jsrsasign

// function generateSignature(
//   key: any,
//   secret: any,
//   meetingNumber: any,
//   role: any
// ) {
//   return new Promise((resolve, rejection) => {
//     // Prevent time sync issue between client signature generation and zoom
//     const iat = Math.round(new Date().getTime() / 1000) - 30;
//     const exp = iat + 60 * 60 * 2;
//     const oHeader = { alg: "HS256", typ: "JWT" };

//     const oPayload = {
//       sdkKey: key,
//       appKey: key,
//       mn: meetingNumber,
//       role: role,
//       iat: iat,
//       exp: exp,
//       tokenExp: exp,
//     };

//     const sHeader = JSON.stringify(oHeader);
//     const sPayload = JSON.stringify(oPayload);
//     const sdkJWT = KJUR.jws.JWS.sign("HS256", sHeader, sPayload, secret);

//     resolve(sdkJWT);
//   });
// }

// // console.log(
// //   generateSignature(
// //     process.env.ZOOM_MEETING_SDK_KEY_OR_CLIENT_ID,
// //     process.env.ZOOM_MEETING_SDK_SECRET_OR_CLIENT_SECRET,
// //     123456789,
// //     0
// //   )
// // );
// // https://zoom.us/oauth/authorize?client_id=PJ2tPfRmy9vXOVf5zjg&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F
// const secretToken = "2nr7dPq0TH21202stBaVdQ";
// const verificationToken = "GMq9A--nRISK1ACzKuXgMQ";
// var authEndpoint = "http://localhost:4000";
// var apiKey = "JWT_API_KEY";
// var apiSecret = "";
// const clientID = "PJ2tPfRmy9vXOVf5zjg";
// const clientSecret = "lhphyAmnxcSqCicm6KYoXVnRWVRhirg8";
// var sdkKey = "abc123";
// var meetingNumber = "123456789";
// var passWord = "";
// var role = 0;
// var userName = "React";
// var userEmail = "";
// var registrantToken = "";
// var zakToken = "";
// var leaveUrl = "http://localhost:3000"; // redirecting url

// var signature = "";
// generateSignature(apiKey, apiSecret, meetingNumber, role).then((res: any) => {
//   signature = res;
// }); // will be generated based on meeting id

// const ZoomScreen = () => {
//   // loading zoom libraries on screen load
//   useEffect(() => {
//     // ZoomMtg.setZoomJSLib("node_modules/@zoomus/websdk/dist/lib", "/av");
//     // for global use of zoom.us
//     ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.0/lib", "/av");
//     ZoomMtg.preLoadWasm();
//     showZoomDiv();
//   }, []);

//   const showZoomDiv = () => {
//     const zoomDiv = document.getElementById("zmmtg-root");
//     if (!zoomDiv) return;

//     zoomDiv.style.display = "block";
//   };

//   const initiateMeeting = () => {
//     ZoomMtg.init({
//       leaveUrl: leaveUrl,
//       patchJsMedia: true,
//       success: (success: any) => {
//         console.log(success);
//         ZoomMtg.join({
//           signature: signature,
//           meetingNumber: meetingNumber,
//           userName: userName,
//           sdkKey: sdkKey,
//           userEmail: userEmail,
//           passWord: passWord,
//           success: (success: any) => {
//             console.log(success);
//           },
//           error: (error: any) => {
//             console.log(error);
//           },
//         });
//       },
//       error: (error: any) => {
//         console.log(error);
//       },
//     });
//   };
//   return <></>;
// };

// const createZoomMeeting = async (meetingDetails: any) => {
//   try {
//     const token = "2h2HWo7GTmeR6nXZzEbCQg";
//     const response = await axios.post(
//       "https://api.zoom.us/v2/users/me/meetings",
//       meetingDetails,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     return response.data;
//   } catch (error) {
//     console.error("Error creating Zoom meeting:", error);
//     throw error;
//   }
// };

// const ZoomMeetingButton = () => {
//   const [isLoading, setIsLoading] = useState(false);

//   const handleClick = async () => {
//     setIsLoading(true);
//     try {
//       console.log("here!");
//       // Call the function to create a Zoom meeting
//       const meetingDetails = {
//         topic: "New Zoom Meeting",
//         type: 2, // Scheduled meeting
//       };
//       const meeting = await createZoomMeeting(meetingDetails);
//       console.log("Zoom Meeting created:", meeting);

//       // Optionally, you can redirect the user to the meeting URL or display meeting details
//     } catch (error) {
//       console.error("Error creating Zoom meeting:", error);
//       // Handle error (e.g., display error message to the user)
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <button onClick={handleClick} disabled={isLoading}>
//       {isLoading ? "Creating Meeting..." : "Generate Zoom Meeting"}
//     </button>
//   );
// };

// export default ZoomMeetingButton;
