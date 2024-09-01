import ContactBlock from "../component/ContactBlock";
import ContentBlock from "../component/ContentBlock";
import Countdown from "../component/Countdown";
import Picture from "../component/Picture";

function App() {
  return (
    <>
      <Picture
        namePath="marriage-photo"
        alt="Foto Mirador Gutierrez"
        caption={"Angelina\ny\nJulián"}
      />
      <ContentBlock
        text={"CON MUCHA FELICIDAD\nTE INVITAMOS A NUESTRO"}
        highlightedText="Casamiento"
        hasButton={false}
        btnText=""
        btnLink=""
        subText=""
      />

      <Picture
        namePath="marriage-photo"
        alt=""
        caption={"Sábado\n02\nNoviembre"}
      />
      <ContentBlock
        text={
          "¡ACOMPAÑANOS EN LA CEREMONIA\nDE NUESTRO GRAN DÍA!\n\nLOS ESPERAMOS A LAS 19:00 HS EN"
        }
        highlightedText="Iglesia Sagrado Corazón"
        hasButton={true}
        btnText="VER EN EL MAPA"
        btnLink="https://maps.app.goo.gl/2qSYKCuKoPFduVVr8"
        subText=""
      />
      <ContentBlock
        text={"Y POSTERIOR CELEBRACIÓN A LAS 20:00 HS"}
        highlightedText="Salón Coliseo"
        hasButton={true}
        btnText="VER EN EL MAPA"
        btnLink="https://maps.app.goo.gl/zmnyLGartMDkGjmy7"
        subText="COMPARTIREMOS A LAS 21:00 HS NUESTRO CIVIL CON USTEDES"
      />

      <Picture namePath="marriage-photo" alt="" caption="" />

      <ContactBlock />

      <ContentBlock
        text={
          "LO IMPORTANTE ES QUE VENGAS CON ILUSIÓN,\nALEGRÍA Y GANAS DE FESTEJAR CON NOSOTROS.\nPERO SI ADEMÁS QUERÉS HACERNOS UN REGALO,\n¡SUMA KILÓMETROS A NUESTRA LUNA DE MIEL!"
        }
        highlightedText=""
        hasButton={true}
        btnText="DATOS BANCARIOS"
        btnLink="/paymentdata"
        subText=""
      />

      <Picture namePath="marriage-photo" alt="" caption="" />

      <Countdown />
      <ContentBlock
        text={""}
        highlightedText="¡Te esperamos!"
        hasButton={false}
        btnText=""
        btnLink=""
        subText="Ange & Juli"
      />
    </>
  );
}

export default App;
