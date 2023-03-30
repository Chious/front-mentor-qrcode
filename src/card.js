import "./card.css";
import Qrcode from "./image-qr-code.png";

export default function Card() {
  return (
    <>
      <div className="card">
        <div
          className="qrcode"
          style={{
            background: `url(${Qrcode})`
          }}
        ></div>
        <div className="card-description">
          Scan the QR code to visit Fronted Mentor and take your coding skills
          to the next level!
        </div>
        <div className="card-text">
          Improve your font-end skills by building projects
        </div>
        <div className="background"></div>
      </div>
    </>
  );
}
