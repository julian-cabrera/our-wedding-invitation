import Divider from "./Divider";
import LinkButton from "./LinkButton";

type Props = {
  text: string;
  highlightedText: string;
  btnText: string;
  btnLink: string;
  hasButton: boolean;
}

const ContentBlock : React.FC<Props> = ({text, highlightedText, hasButton, btnText, btnLink}) => {
  return (
    <>
      <p className="annie">
        {text}
        <span className="birthstone">{highlightedText}</span>
      </p>
      {hasButton ? <LinkButton text={btnText} link={btnLink} /> : null}
      <Divider />
    </>
  )
};
export default ContentBlock;