import ContentBlock from "./component/ContentBlock";
import Countdown from "./component/Countdown";
import Picture from "./component/Picture";

function App() {
  return ( 
    <>
    <Picture namePath="marriage-photo"
    alt="Foto Mirador Gutierrez"
    caption={"Angelina\ny\nJulián"}
    subCaption="02 de Noviembre" />
    <ContentBlock text={"CON MUCHA FELICIDAD\nTE INVITAMOS A NUESTRO"}
                  highlightedText="Casamiento"
                  hasButton={false}
                  btnText=""
                  btnLink="" />
    
    <Picture namePath="marriage-photo"
    alt="Foto Arroyo Blest"
    caption={"Sábado\n02\nNoviembre"}
    subCaption="21 : 15 HS" />
    <ContentBlock text={"ACOMPAÑANOS EN LA CEREMONIA\nDE NUESTRO GRAN DÍA\nLOS ESPERAMOS EN"}
                  highlightedText="Iglesia Sagrado Corazón"
                  hasButton={true}
                  btnText="VER EN EL MAPA"
                  btnLink="https://maps.app.goo.gl/2qSYKCuKoPFduVVr8" />
    <ContentBlock text={"Y POSTERIOR CELEBRACIÓN EN"}
                  highlightedText="Salón Coliseo"
                  hasButton={true}
                  btnText="VER EN EL MAPA"
                  btnLink="https://maps.app.goo.gl/zmnyLGartMDkGjmy7" />

    <Picture namePath="marriage-photo"
    alt="Foto Kayak Playa Sin Viento"
    caption=""
    subCaption="" />
    <ContentBlock text={"PODES CONFIRMARNOS ENVIÁNDONOS UN MENSAJE\nHASTA EL 02 DE OCTUBRE A\n343-4620007 (Juli)\n3444-626602 (Ange)"}
                  highlightedText=""
                  hasButton={true}
                  btnText="ENVIAR MENSAJE 📲"
                  btnLink="https://wa.me/5493444626602?text=Hola! Te confirmamos nuestra participación en tu casamiento!" />

    <ContentBlock text={"LO IMPORTANTE ES QUE VENGAS CON ILUSIÓN,\nALEGRÍA Y GANAS DE PASARLA BIEN.\nPERO SI ADEMÁS QUERÉS HACERNOS UN REGALO,\n¡SUMA KILÓMETROS A NUESTRA LUNA DE MIEL!"}
                  highlightedText=""
                  hasButton={true}
                  btnText="SUMAR KILÓMETROS 💝"
                  btnLink="" />

    <Picture namePath="marriage-photo"
    alt="Foto Amor Volcán Lanin"
    caption=""
    subCaption="" />

  <Countdown />
  <ContentBlock text="¡TE ESPERMOS!"
                highlightedText=""
                hasButton={false}
                btnText=""
                btnLink="" />

    </>
  );
}

export default App;
