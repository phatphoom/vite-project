import { GoogleLogin } from "@react-oauth/google";
import { gapi } from "gapi-script";
const Login = () => {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => console.log("login failed")}
      />
    </div>
  );
};
export default Login;
