type Props = {
  remainingDays: number;
}

const Countdown : React.FC<Props> = ({remainingDays}) => {
  return (
  <p className="annie">FALTAN {remainingDays} DÍAS..</p>
  );
};
export default Countdown;