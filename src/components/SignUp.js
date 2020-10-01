import React from 'react'
import './signup.css'
function SignUp() {
    return (
        <div className="back">
        <div className="signup-form">
            <form>
                <h2>Register</h2>
                <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                <div className="form-group">
                    <div className="row">
                        <div className="col-xs-6"><input type="text" className="form-control" name="first_name" placeholder="First Name" required /></div>
                        <div className="col-xs-6"><input type="text" className="form-control" name="last_name" placeholder="Last Name" required /></div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" name="email" placeholder="Email" required />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="password" placeholder="Password" required />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" name="confirm_password" placeholder="Confirm Password" required />
                </div>
                <div className="form-group">
                    <label className="checkbox-inline"><input type="checkbox" required /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-success btn-lg btn-block">Register Now</button>
                </div>
            </form>
            <div className="text-center">Already have an account? <a href="#" className="text-decoration-none">Sign in</a></div>
        </div>
        </div>
    )
}

export default SignUp
