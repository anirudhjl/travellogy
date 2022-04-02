import { useHistory } from "react-router-dom";

const Confirm = () => {
  let history = useHistory();
  return (
    <div>
      <br />
      <p>Please enter the verification code sent to your mail id:</p>
      <input
        type="text"
        minLength="6"
        maxLength="6"
        required
        className="form-control"
        style={{ width: "20%" }}
      />
      <br />
      <button
        className="btn btn-dark"
        onClick={() => {
          history.push("/signin");
        }}
      >
        Verify
      </button>{" "}
      <button
        type="reset"
        className="btn btn-primary"
        onClick={() => location.reload()}
      >
        Resend
      </button>
    </div>
  );
};

export default Confirm;
