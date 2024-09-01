type Props = {
  qr: string;
};

const QrLink: React.FC<Props> = ({ qr }) => {
  return (
      <img className={`qr ${qr}`} alt={`qr ${qr}`} />
  );
};
export default QrLink;
