import "./Success.css";
import mark from "../../assets/icon-thank-you.svg";
const Success = () => {
  return (
    <div className="success">
      <img src={mark} alt="mark" />
      <h2>Thank You</h2>
      <p>
        Thanks for confirming subscription! We hope you have fun using our
        platform if you ever need support. please feel to email us at
        support@loremgaming.com
      </p>
    </div>
  );
};
export default Success;
