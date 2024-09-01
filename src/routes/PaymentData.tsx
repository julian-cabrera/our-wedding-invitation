import CopyToClipboard from "../component/CopyToClipboard";
import LinkButton from "../component/LinkButton";
import { FONTS } from "../util/FontConstants";

const PaymentData = () => {
  return (
    <div className="text-center">
      <div className={`${FONTS.ANNIE_SMALL}`}>
        <div className="grid">
          <p className="orange bold">TITULAR</p>
          <p>Julián Exequiel Cabrera</p>
        </div>
        <hr />
        <div className="grid">
          <p className="orange bold">CUIT/CUIL</p>
          <p>20-35707094-6</p>
        </div>
        <hr />
        <div className="grid">
          <p className="orange bold">BANCO</p>
          <p>SANTANDER</p>
        </div>
        <hr />
        <div className="grid">
          <p className="orange bold">CBU</p>
          <p>0720192588000049601668</p>
          <CopyToClipboard text="0720192588000049601668" />
        </div>
        <hr />
        <div className="grid">
          <p className="orange bold">ALIAS</p>
          <p>J.CABRERA.SANTANDER</p>
          <CopyToClipboard text="J.CABRERA.SANTANDER" />
        </div>
        <hr />
      </div>

      <br />
      <LinkButton text="¡Felicidades!" link="/thanks" />

      <footer>
      <LinkButton text="Volver" link="/.." />
      </footer>
    </div>
  );
};
export default PaymentData;
