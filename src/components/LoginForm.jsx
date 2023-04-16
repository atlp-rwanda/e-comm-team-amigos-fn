import "./../assets/css/loginForm.css";

export default function LoginForm() {
  return (
    <div className="contacts-container mt-5">
      <div className="form form-login">
        <div>
          <h2>Login</h2>
        </div>
        <form action="" id="login-form">
          <div className="input input-login">
            <label htmlFor="email" className="">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 8L12 13L4 8V6L12 11L20 6M20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 4.89 21.1 4 20 4Z"
                  fill="#2F80ED"
                />
              </svg>
            </label>
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="input input-login">
            <label htmlFor="password" className="">
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.9993 19.8334C14.6182 19.8334 15.2117 19.5876 15.6493 19.15C16.0869 18.7124 16.3327 18.1189 16.3327 17.5001C16.3327 16.2051 15.2827 15.1667 13.9993 15.1667C13.3805 15.1667 12.787 15.4126 12.3494 15.8502C11.9118 16.2878 11.666 16.8812 11.666 17.5001C11.666 18.1189 11.9118 18.7124 12.3494 19.15C12.787 19.5876 13.3805 19.8334 13.9993 19.8334ZM20.9993 9.33341C21.6182 9.33341 22.2117 9.57925 22.6493 10.0168C23.0869 10.4544 23.3327 11.0479 23.3327 11.6667V23.3334C23.3327 23.9523 23.0869 24.5457 22.6493 24.9833C22.2117 25.4209 21.6182 25.6667 20.9993 25.6667H6.99935C6.38051 25.6667 5.78702 25.4209 5.34943 24.9833C4.91185 24.5457 4.66602 23.9523 4.66602 23.3334V11.6667C4.66602 10.3717 5.71602 9.33341 6.99935 9.33341H8.16602V7.00008C8.16602 5.45298 8.7806 3.96925 9.87456 2.87529C10.9685 1.78133 12.4523 1.16675 13.9993 1.16675C14.7654 1.16675 15.5239 1.31763 16.2317 1.61078C16.9394 1.90394 17.5825 2.33362 18.1241 2.87529C18.6658 3.41697 19.0955 4.06003 19.3886 4.76776C19.6818 5.47549 19.8327 6.23404 19.8327 7.00008V9.33341H20.9993ZM13.9993 3.50008C13.0711 3.50008 12.1809 3.86883 11.5245 4.52521C10.8681 5.18158 10.4993 6.07182 10.4993 7.00008V9.33341H17.4993V7.00008C17.4993 6.07182 17.1306 5.18158 16.4742 4.52521C15.8178 3.86883 14.9276 3.50008 13.9993 3.50008Z"
                  fill="#2F80ED"
                />
              </svg>
            </label>
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="form-footer">
            <a href="#" target="_blank" className="reset_password">
              Forgot Password?
            </a>
            <div className="form-btn">
              <button type="submit" className="contact-btn">
                Login
              </button>
              <a href="./register.html" className="contact-btn">
                Register
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
