import Divider from "./Divider";

type Props = {
  namePath: string;
  alt: string;
  caption: string;
}

const Picture : React.FC<Props> = ({namePath, alt, caption}) => {
  const splitCaption = (caption: string): string[] => {
    return caption.split("_");
  }

  return (
    <>
      <figure>
        <img className={namePath} alt={alt} />
        <figcaption className="birthstone figcaption-1">{splitCaption(caption)[0]}</figcaption>
        <figcaption className="birthstone figcaption-2">{splitCaption(caption)[1]}</figcaption>
      </figure>
      <Divider />
    </>
  );
};
export default Picture;
