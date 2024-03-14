import Divider from "./Divider";

type Props = {
  namePath: string;
  alt: string;
  caption: string;
  subCaption: string;
}
const Picture : React.FC<Props> = ({namePath, alt, caption, subCaption}) => {
  return (
    <>
    <figure>
      <img className={`image ${namePath}`} alt={alt} />
      <figcaption className="birthstone">{caption}</figcaption>
      <figcaption className="annie sub-caption">{subCaption}</figcaption>
    </figure>
    <Divider />
    </>
  )
};
export default Picture;
