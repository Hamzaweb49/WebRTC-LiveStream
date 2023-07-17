import React, { useEffect, useRef } from "react";
import axios from "axios";

function Publisher() {
  const videoRef = useRef();
  const peerRef = useRef();

  useEffect(() => {
    const init = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      const peer = createPeer();
      stream.getTracks().forEach((track) => peer.addTrack(track, stream));
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
      "http://localhost:5000/broadcast",
      payload
    );
    const desc = new RTCSessionDescription(data.sdp);
    peer.setRemoteDescription(desc).catch((e) => console.log(e));
  };

  return (
    <div>
      <button id="my-button">Start Stream</button>
      <video ref={videoRef} autoPlay></video>
    </div>
  );
}

export default Publisher;
