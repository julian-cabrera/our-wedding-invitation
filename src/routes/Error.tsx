import { useRouteError } from "react-router-dom";
import { FONTS } from "../util/FontConstants";
import LinkButton from "../component/LinkButton";

const ErrorHandler = () => {
    const error: any = useRouteError();
    console.log(error);

    return (
        <div className="text-center">
            <h1 className={FONTS.BIRTHSTONE}>Oops!</h1>
            <p className={FONTS.ANNIE}>No se encontró esa página.</p>
            <LinkButton text="Volver" link="/.." />
        </div>
    );
};
export default ErrorHandler;