import React, { useEffect, useRef } from "react";
import axios from "axios";

function Viewer() {
  const videoRef = useRef();
  const peerRef = useRef();

  useEffect(() => {
    const init = async () => {
      const peer = createPeer();
      peer.addTransceiver("video", { direction: "recvonly" });
    };

    document.getElementById("my-button").onclick = init;
  }, []);

  const createPeer = () => {
    const peer = new RTCPeerConnection({
      iceServers: [
        {
          urls: "stun:stun.stunprotocol.org",
        },
      ],
    });
    peer.ontrack = handleTrackEvent;
    peer.onnegotiationneeded = () => handleNegotiationNeededEvent(peer);

    return peer;
  };

  const handleNegotiationNeededEvent = async (peer) => {
    const offer = await peer.createOffer();
    await peer.setLocalDescription(offer);
    const payload = {
      sdp: peer.localDescription,
    };

    const { data } = await axios.post(
      "http://localhost:5000/consumer",
      payload
    );
    const desc = new RTCSessionDescription(data.sdp);
    peer.setRemoteDescription(desc).catch((e) => console.log(e));
  };

  const handleTrackEvent = (e) => {
    videoRef.current.srcObject = e.streams[0];
  };

  return (
    <div>
      <h1>Viewer</h1>
      <video ref={videoRef} autoPlay></video>
      <button id="my-button">View Stream</button>
    </div>
  );
}

export default Viewer;
