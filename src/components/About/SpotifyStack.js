import React from "react";
import { Col, Row } from "react-bootstrap";
import { Spotify } from "react-spotify-embed";

const spotifyLinks = [
  "https://open.spotify.com/album/1J8QW9qsMLx3staWaHpQmU?si=wDprgI_UQt-KcN203dZ2lQ",
  "https://open.spotify.com/album/3zVyMAtWiXugudXuCRiUjL?si=dgIBA5mvSRqTJji0b3S3UA",
  "https://open.spotify.com/album/7rSZXXHHvIhF4yUFdaOCy9?si=afiJjn0ZRdSZeRTxwn6VEg",
  "https://open.spotify.com/album/3T9UKU0jMIyrRD0PtKXqPJ?si=rvRpizC1RbePA5Z5_Z18LQ",
  "https://open.spotify.com/album/2yvR4wVM1XLEKVad6F3ja9?si=hUldDaZ0RbO8_TjcZrwwuw",
  "https://open.spotify.com/album/3AQgdwMNCiN7awXch5fAaG?si=n7-fkawtRnWvhyj_L0LWcA",
  "https://open.spotify.com/album/4fEjCLRwWqVjcrGLqnzhQr?si=IKVUWjlNQyOWC4-7DYvx8A",
  "https://open.spotify.com/album/3jmAE8agsRbOlKYfSILfny?si=wXnE4s93T1KrvW8pp5_lKA"
];

function SpotifyStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px"}}>
      {[...Array(spotifyLinks.length)].map((_, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={3} style={{padding: "10px"}}>
          <Spotify link={spotifyLinks[index]} />
        </Col>
      ))}
    </Row>
  );
}

export default SpotifyStack;
