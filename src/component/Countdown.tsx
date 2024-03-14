import getRemainingDaysToWedding from "../util/DayCountdown";

const Countdown = () => {
  return (
  <p className="annie">FALTAN {getRemainingDaysToWedding()} DÍAS..</p>
  );
};
export default Countdown;