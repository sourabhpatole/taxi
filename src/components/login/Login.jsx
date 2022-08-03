import "./login.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
const Login = ({ closeModal }) => {
  return (
    <div className="loginCard">
      <div className="main-box">
        <div className="modal-btn">
          <button
            onClick={() => {
              closeModal(closeModal(false));
            }}
          >
            X
          </button>
        </div>
        <img
          className="image-tag"
          src="https://thumbs.dreamstime.com/b/taxi-icon-taxi-logo-taxi-icon-taxi-logo-vector-icon-172647004.jpg"
          alt="logo"
        />
        <div className="main-contain">
          <h3>Login or Create account</h3>
          <p>Compare prices and access exclusive offers</p>
        </div>
        <div className="continue-btn">
          <button>compare with your mobile no</button>
        </div>
        <hr />
        <div className="option-btn">
          <button style={{ backgroundColor: "#36609f", color: "#fff" }}>
            <FacebookIcon />
            facebook
          </button>
          <button style={{ backgroundColor: "#d9372c", color: "#fff" }}>
            <GoogleIcon />
            Google
          </button>
        </div>
        <footer>By registering you should confirm terms and condition</footer>
      </div>
    </div>
  );
};

export default Login;
