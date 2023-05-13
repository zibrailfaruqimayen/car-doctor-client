import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        console.log(result.user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center space-x-4">
        <button className="btn btn-circle btn-outline border-0 bg-base-200">
          <FaFacebookF className="w-7 h-7 text-[#3B5998]"></FaFacebookF>
        </button>
        <button className="btn btn-circle btn-outline border-0 bg-base-200">
          <FaLinkedinIn className="w-7 h-7 text-[#0A66C2]"></FaLinkedinIn>
        </button>
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-circle btn-outline border-0 bg-base-200"
        >
          <FcGoogle className="w-7 h-7"></FcGoogle>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
