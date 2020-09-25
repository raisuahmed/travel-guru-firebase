import React from "react";

const LoginWithOthers = (props) => {
	return (
		<div>
			<div className="form-divider text-center">
				<p style={{textAlign:"center"}} >or</p>
			</div>

			<div className="tg-third party-login" >
				<button className="btn btn-secondary" style={{margin:"10px"}}  onClick={props.facebook}>
					<span>
						<img src={require("../../Icon/fb.png")} style={{ maxWidth: "25px" }} alt="fb logo" />
					</span>
					<span>Continue with Facebook</span>
				</button>
				<button className="btn btn-secondary" onClick={props.google}>
					<span>
						<img src={require("../../Icon/google.png")} style={{ maxWidth: "25px" }} alt="fb logo" />
					</span>
					<span>Continue with Google</span>
				</button>
			</div>
		</div>
	);
};

export default LoginWithOthers;
