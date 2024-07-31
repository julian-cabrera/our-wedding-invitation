import Divider from "./Divider";
import LinkButton from "./LinkButton";
  
const ContactBlock : React.FC = () => {
return (
    <>
    <p className="annie">
        PODES CONFIRMARNOS ENVIÁNDONOS UN MENSAJE
        <br />
        HASTA EL 02 DE OCTUBRE
        <LinkButton text={"ENVIAR MENSAJE A JULI\n📲 343-4620007"}
                    link={"https://wa.me/5493434620007?text=Hola! Te confirmamos nuestra participación en tu casamiento!"} />
        <br />
        <LinkButton text={"ENVIAR MENSAJE A ANGE\n📲 3444-626602"}
                    link={"https://wa.me/5493444626602?text=Hola! Te confirmamos nuestra participación en tu casamiento!"} />
    </p>
    <Divider />
    </>
)
};
export default ContactBlock;