import { FONTS } from "../util/FontConstants";

type Props = {
  qr: string;
};

const QrLink: React.FC<Props> = ({ qr }) => {
  return (
    <>
      <p className={FONTS.ANNIE}>Scaneá este QR y compartinos las fotos que hayas tomado en en el festejo:</p>
      <img className={`qr qr-img ${qr}`} alt={`qr ${qr}`} />
      </>
  );
};
export default QrLink;
