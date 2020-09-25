import React from "react";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
	const { toggleUser, validation, submit, errors } = props;

	return (
		<div className="form login">
			<h3>Sign In</h3>

			<form onSubmit={submit}>
				<div className="form-group col-8"style={{marginLeft:"170px"}}>
                    <input type="email" className="form-control" placeholder="Email" name="email" required
                     onBlur={validation} />
					{errors.email.length > 0 && <p className="error-msg">{errors.email}</p>}
				</div>

				<div className="form-group col-8" style={{marginLeft:"170px"}}>
                    <input type="password"className="form-control"placeholder="Password"name="password"
                    onBlur={validation}
					/>
					{errors.password.length > 0 && <p className="error-msg">{errors.password}</p>}
				</div>

				<div className=" form-group forgot-pass">
					<div className="custom-control custom-checkbox mr-sm-2">
						<input type="checkbox" className="custom-control-input" id="rememberUser" />
						<label className="custom-control-label" htmlFor="rememberUser">
							Save
						</label>
					</div>
					<Link to="/" className="forgot-password">
						Forgot Password
					</Link>
				</div>

				<button type="submit" className="btn btn-secondary tg-primary btn-block col-7 " style={{marginLeft:"200px"}}>
					Sign In
				</button>
			</form>

			<div className="register-login">
				Don’t have an account?{" "}
				<button className="btn btn-logintoggle" onClick={toggleUser}>
					Create An Account
				</button>
			</div>
		</div>
	);
};

export default LoginForm;
