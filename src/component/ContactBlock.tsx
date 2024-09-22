import Divider from "./Divider";
import LinkButton from "./LinkButton";
  
const ContactBlock : React.FC = () => {
return (
  <>
    <p className="annie">
      CONFIRMANOS TU ASISTENCIA ENVIÁNDONOS UN MENSAJE
      <br />
      HASTA EL 09 DE OCTUBRE
      <LinkButton
        text={"ENVIAR MENSAJE A JULI\n📲 343-4620007"}
        link={
          "https://wa.me/5493434620007?text=Hola! Te confirmamos nuestra participación en tu casamiento!"
        }
      />
      <br />
      <LinkButton
        text={"ENVIAR MENSAJE A ANGE\n📲 3444-626602"}
        link={
          "https://wa.me/5493444626602?text=Hola! Te confirmamos nuestra participación en tu casamiento!"
        }
      />
    </p>
    <Divider />
  </>
);
};
export default ContactBlock;