import LinkButton from "../component/LinkButton";
import { FONTS } from "../util/FontConstants";

const ThankYou = () => {
  return (
    <div className="text-center">
      <h1 className={FONTS.BIRTHSTONE}>¡Gracias!</h1>
      <p className={FONTS.ANNIE}>
        Gracias por ser partícipe de nuestro sueño y de contribuir a nuestro
        festejo.
      </p>
      <LinkButton text="Volver" link="/.." />
    </div>
  );
};
export default ThankYou;
