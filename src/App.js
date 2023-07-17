import { useRef, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Publisher from "./components/Publisher";
import Viewer from "./components/Viewer";

function App() {
  // const localVideoRef = useRef();
  // const remoteVideoRef = useRef();
  // const pc = useRef(null);
  // const textRef = useRef();

  // useEffect(() => {
  //   const constraints = {
  //     audio: false,
  //     video: true,
  //   };

  //   navigator.mediaDevices
  //     .getUserMedia(constraints)
  //     .then((stream) => {
  //       localVideoRef.current.srcObject = stream;
  //       stream.getTracks().forEach((track) => {
  //         pc.current.addTrack(track, stream);
  //       });
  //     })
  //     .catch((e) => {
  //       console.log("Error occurred while accessing media");
  //     });

  //   pc.current = new RTCPeerConnection(null);

  //   pc.current.onicecandidate = (e) => {
  //     // send the candidates to the remote peer
  //     // see addCandidate below to be triggered on the remote peer
  //     if (e.candidate) {
  //       console.log(JSON.stringify(e.candidate));
  //       // this.sendToPeer('candidate', e.candidate)
  //     }
  //   };

  //   pc.current.oniceconnectionstatechange = (e) => {
  //     console.log(e);
  //   };

  //   pc.current.ontrack = (e) => {
  //     // we get remote stream
  //     remoteVideoRef.current.srcObject = e.streams[0];
  //   };
  // }, []);

  // const getUserMedia = () => {
  //   // on streaming
  // };

  // const createOffer = () => {
  //   console.log("Offer");

  //   pc.current.createOffer({ offerToReceiveVideo: 1 })
  //     .then((sdp) => {
  //       console.log(JSON.stringify(sdp));

  //       // set offer sdp as local description
  //       pc.current.setLocalDescription(sdp);

  //       // this.sendToPeer('offerOrAnswer', sdp)
  //     });
  // };

  // const setRemoteDescription = () => {
  //   const sdp = JSON.parse(textRef.current.value);
  //   console.log(sdp);

  //   pc.current.setRemoteDescription(new RTCSessionDescription(sdp));
  // };

  // const addCandidate = () => {
  //   const candidate = JSON.parse(textRef.current.value);
  //   console.log(candidate);

  //   pc.current.addIceCandidate(new RTCIceCandidate(candidate));
  // };

  // const createAnswer = () => {
  //   pc.current.createAnswer({})
  //     .then((sdp) => {
  //       console.log(JSON.stringify(sdp));
  //       pc.current.setLocalDescription(sdp);
  //     })
  //     .catch((e) => console.log(e));
  // };

  return (
    // <div className="App" style={{ margin: 10 }}>
      // <button onClick={() => getUserMedia()}>Get Access to camera and microphone</button>
      // <br />
      // <video
      //   style={{ width: 240, height: 240, margin: 5, backgroundColor: "black" }}
      //   ref={localVideoRef}
      //   autoPlay
      // ></video>
      // <video
      //   style={{ width: 240, height: 240, margin: 5, backgroundColor: "black" }}
      //   ref={remoteVideoRef}
      //   autoPlay
      // ></video>
      // <br />
      // <button onClick={createOffer}>Create Offer</button>
      // <button onClick={createAnswer}>Create Answer</button>
      // <br />
      // <textarea ref={textRef}></textarea>
      // <br />
      // <button onClick={setRemoteDescription}>Set Remote Description</button>
      // <button onClick={addCandidate}>Add Candidates</button>
    // </div>
    <div>
      <Routes>
        <Route path="/" element={<Publisher />} />
        <Route path="/viewer" element={<Viewer />} />
      </Routes>
    </div>
  );
}

export default App;
