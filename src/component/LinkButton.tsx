type Props = {
  text: string;
  link: string
}

const LinkButton : React.FC<Props> = ({text, link}) => {
  return (<a href={link}>
      <button className="annie">{text}</button>
    </a>);
};
export default LinkButton;