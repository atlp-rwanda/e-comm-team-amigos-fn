import React, { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { useSelector, useDispatch } from "react-redux";
import { viewUserProfile, editUserProfile } from '../redux/actions/userProfileEdit';
import './../assets/css/userUpdate.scss';
import '../assets/css/userUpdateError.scss';

const updateProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'FirstName must be at least 2 characters')
    .required('FirstName is required'),
  lastName: Yup.string()
    .min(2, 'LastName must be at least 2 characters')
    .required('LastName is required'),
  address: Yup.string().required('Address is required'),
  telephone: Yup.string()
    .matches(/^\d{10}$/, 'Invalid telephone')
    .required('Telephone is required'),
  preferredLanguage: Yup.string()
    .min(4, 'preferredLanguage must be at least 4 characters')
    .required('preferredLanguage is required'),
  preferredCurrency: Yup.string()
    .min(2, 'preferredCurrency must be at least 2 characters')
    .required('preferredCurrency is required'),
    billingAddress: Yup.string()
    .min(2, 'billingAddress must be at least 6 characters'),
  gender: Yup.string()
    .min(3, 'Gender must be at least 3 characters')
    .required('Gender is required'),
  birthdate: Yup.string().matches(/^\d{4}-\d{2}-\d{2}$/, 'Invalid date format (yyyy-MM-dd)')
  .required('Birthdate is required'),
});

function UpdateProfileForm() {
  const dispatch = useDispatch();
  const { profileViewSuccess } = useSelector(state => state.userProfile);
  
  useEffect(() => {
    dispatch(viewUserProfile());
  }, [dispatch]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    telephone: "",
    gender: "",
    preferredCurrency: "",
    preferredLanguage: "",
    birthdate: "",
    billingAddress: ""
  });
  const validateForm = async (data) => {
    try {
      await updateProfileSchema.validate(data, { abortEarly: false });
      return data;
    } catch (error) {
      throw error;
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'birthdate') {
      const formattedDate = new Date(value).toISOString().split('T')[0];
      setFormData({
        ...formData,
        [name]: formattedDate,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const validatedData = await validateForm(formData);
      dispatch(editUserProfile(validatedData));
      console.log(validatedData);
    } catch (error) {
      // Handle validation errors here
      console.error('Validation error:', error);
    }
  };

  useEffect(() => {
    if (profileViewSuccess) {
      const { birthdate } = profileViewSuccess;

      const formattedDate = birthdate ? new Date(birthdate).toISOString().split('T')[0] : "";
      
      setFormData({
        firstName: profileViewSuccess.firstName || "",
        lastName: profileViewSuccess.lastName || "",
        address: profileViewSuccess.address || "",
        telephone: profileViewSuccess.telephone || "",
        preferredCurrency: profileViewSuccess.preferredCurrency || "",
        gender: profileViewSuccess.gender || "",
        preferredLanguage: profileViewSuccess.preferredLanguage || "",
        birthdate: formattedDate || "",
        billingAddress: profileViewSuccess.billingAddress || "",
      });
    }
  }, [profileViewSuccess]);
  console.log(profileViewSuccess);

  return (
    <div className='container'>
      <h1>My Profile</h1>
      <form className='profile-form' onSubmit={handleSubmit}>
        <div className="profile-container">
          <div className="left-profile">
            <div className="inputs">
              <label htmlFor="firstName">FirstName</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName ? formData.firstName : ""} 
                id={formData.firstName ? "" : "input-error"}
                onChange={handleChange}
                className={profileViewSuccess.firstName ? "" : "input-error"}
              />
              {formData.firstName && profileViewSuccess.firstName ? null : (
                <div className="error-message">FirstName is required</div>
              )}
            </div>
            <div className="inputs">
              <label htmlFor="lastName">LastName</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={profileViewSuccess.lastName ? "" : "input-error"}
              />
              {profileViewSuccess.lastName && formData.lastName ? null : (
                <div className="error-message">LastName is required</div>
              )}
            </div>
            <div className="inputs">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={profileViewSuccess.address ? "" : "input-error"}
              />
              {profileViewSuccess.address && formData.address ? null : (
                <div className="error-message">Address is required</div>
              )}
            </div>
            <div className="inputs">
              <label htmlFor="telephone">Telephone</label>
              <input
                type="text"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className={profileViewSuccess.telephone ? "" : "input-error"}
              />
              {profileViewSuccess.telephone && formData.telephone ? null : (
                <div className="error-message">Telephone is required</div>
              )}
            </div>
            <div className="inputs">
              <label htmlFor="billingaddress">billingAddress</label>
              <input
                type="text"
                name="billingAddress"
                value={formData.billingAddress}
                onChange={handleChange}
                className={profileViewSuccess.billingAddress ? "" : "input-error"}
              />
              {profileViewSuccess.billingAddress && formData.billingAddress  ? null : (
                <div className="error-message">billingAddress is required</div>
              )}
            </div>
          </div>
          <div className="right-profile">
            <div className="inputs">
              <label htmlFor="preferredLanguage">Language</label>
              <input
                type="text"
                name="preferredLanguage"
                value={formData.preferredLanguage}
                onChange={handleChange}
                className={profileViewSuccess.preferredLanguage ? "" : "input-error"}
              />
              {profileViewSuccess.preferredLanguage && formData.preferredLanguage ? null : (
                <div className="error-message">preferredLanguage is required</div>
              )}
            </div>
            <div className="inputs">
              <label htmlFor="preferredCurrency">Currency</label>
              <input
                type="text"
                name="preferredCurrency"
                value={formData.preferredCurrency}
                onChange={handleChange}
                className={profileViewSuccess.preferredCurrency ? "" : "input-error"}
              />
              {profileViewSuccess.preferredCurrency && formData.preferredCurrency ? null : (
                <div className="error-message">preferredCurrency is required</div>
              )}
            </div>
            <div className="inputs">
              <label htmlFor="gender">Gender</label>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className={profileViewSuccess.gender ? "" : "input-error"}
              />
              {profileViewSuccess.gender && formData.gender ? null : (
                <div className="error-message">Gender is required</div>
              )}
            </div>
            <div className="inputs">
              <label htmlFor="birthdate">Birthdate</label>
              <input
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
                className={profileViewSuccess.birthdate ? "" : "input-error"}
              />
              {profileViewSuccess.birthdate && formData.birthdate ? null : (
                <div className="error-message">Birthdate is required</div>
              )}
            </div>
          </div>
        </div>
        <div className="profile-btn">
          <button type="submit">Submit changes</button>
        </div>
      </form>
    </div>
  );
}

export default UpdateProfileForm;
