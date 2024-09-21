import ContactBlock from "../component/ContactBlock";
import ContentBlock from "../component/ContentBlock";
import Countdown from "../component/Countdown";
import Picture from "../component/Picture";

function App() {
  return (
    <>
      <Picture
        namePath="pic-1"
        alt="1-sunset"
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
        namePath="pic-2"
        alt="2-outside"
        caption={"Sábado\n02\nNoviembre"}
      />
      <ContentBlock
        text={
          "¡ACOMPAÑANOS EN LA CEREMONIA\nDE NUESTRO GRAN DÍA!\n\nLOS ESPERAMOS A LAS 18:30 HS EN"
        }
        highlightedText="Iglesia Sagrado Corazón"
        hasButton={true}
        btnText="VER EN EL MAPA"
        btnLink="https://maps.app.goo.gl/2qSYKCuKoPFduVVr8"
        subText="Calle Enrique Carbó 461"
      />
      <ContentBlock
        text={"Y POSTERIOR CELEBRACIÓN A LAS 20:00 HS"}
        highlightedText="Salón Coliseo"
        hasButton={true}
        btnText="VER EN EL MAPA"
        btnLink="https://maps.app.goo.gl/zmnyLGartMDkGjmy7"
        subText={`Calle 25 de Mayo 16\n\nCOMPARTIREMOS A LAS 21:00 HS NUESTRA UNIÓN CIVIL CON USTEDES`}
      />

      <Picture namePath="pic-3" alt="3-backyard-path" caption="" />

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

      <Picture namePath="pic-4" alt="garden" caption="" />

      <Countdown />
      <ContentBlock
        text={""}
        highlightedText="¡Te esperamos!"
        hasButton={false}
        btnText=""
        btnLink=""
        subText="Ange & Juli"
      />

      <Picture namePath="pic-5" alt="5-back-sunset" caption="" />
    </>
  );
}

export default App;
