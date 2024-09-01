import Divider from "./Divider";

type Props = {
  namePath: string;
  alt: string;
  caption: string;
}
const Picture : React.FC<Props> = ({namePath, alt, caption}) => {
  return (
    <>
      <figure>
        <img className={namePath} alt={alt} />
        <figcaption className="birthstone">{caption}</figcaption>
      </figure>
      <Divider />
    </>
  );
};
export default Picture;
