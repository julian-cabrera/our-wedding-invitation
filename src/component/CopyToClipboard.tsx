import { useEffect, useState } from "react";

type Props = {
    text: string
}

const CopyToClipboard: React.FC<Props> = ({text}) => {
    const [isClicked, setIsClicked] = useState(false);
  
    const clickHandler = () => {
      setIsClicked(true);
      navigator.clipboard.writeText(text);
    };
  
    useEffect(() => {
      const timer = setTimeout(() => setIsClicked(false), 1500);
      return () => {
        clearTimeout(timer);
      };
    }, [isClicked]);
  
    return (
      <>
        {isClicked && <div className="popup">'¡Copiado!</div>}
        <div className="copy-icon" onClick={clickHandler}></div>
      </>
    );
  };
  export default CopyToClipboard;