import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { DisableUser, EnableUser } from "../../redux/actions/auth";
import * as Yup from "yup";
import { handleDisableResponse } from "../../utils/handleDisableResponse";
import { handleEnableResponse } from "../../utils/handleEnableResponse";
import { useFormik } from "formik";

import "./disableAccount.style.scss";
import "./../../App.css";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  reason: Yup.string().required("Specify the reason, please!"),
});

const DisableAccount = () => {
  const { disableSuccess, disableStart } = useSelector(
    (state) => state.disableUserState
  );
  const { enableSuccess, enableStart } = useSelector(
    (state) => state.enableUserState
  );
  const dispatch = useDispatch();
  console.log(enableSuccess);
  useEffect(() => {
    handleEnableResponse(enableSuccess, toast);
  }, [enableSuccess]);

  useEffect(() => {
    handleDisableResponse(disableSuccess, toast);
    return () => {
      dispatch({ type: "DISABLE_SUCCESS", payload: null });
    };
  }, [disableSuccess, dispatch]);
  const formik = useFormik({
    initialValues: {
      email: "",
      reason: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      dispatch(DisableUser(values.email, values.reason));
    },
  });
  
  const handleEnable = () => {
      dispatch(EnableUser(formik.values.email));
  };

  return (
    <div className="formContainer">
      <h3>Disable Account</h3>
      <form className="disableform" onSubmit={formik.handleSubmit}>
        <div className="disableDivContainer">
          <div className="disableMail">
            <label htmlFor="email">Account email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="inputFieldEmail"
            />
            {formik.errors.email && formik.touched.email && (
              <div className="error">{formik.errors.email}</div>
            )}
          </div>
          <div className="disableReason">
            <label htmlFor="reason">Type the reason</label>
            <input
              type="text"
              id="reason"
              name="reason"
              onChange={formik.handleChange}
              value={formik.values.reason}
              className="inputFieldReason"
            />
            {formik.errors.reason && formik.touched.reason && (
              <div className="error">{formik.errors.reason}</div>
            )}
          </div>
        </div>
        <div className="disableBtn">
          <button className="submitBtn1" type="submit" disabled={disableStart}>
            {disableStart ? "Loading..." : "Disable"}
          </button>
          <button className="submitBtn2" type="button" disabled={enableStart} onClick={handleEnable}>
            {enableStart ? "Loading..." : "Enable"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default DisableAccount;
