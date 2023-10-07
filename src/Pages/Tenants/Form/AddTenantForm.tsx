import React, { useState } from 'react';
import supabase from '../../../auth/supabase';
import { validateForm } from './Validation';
import FormInput from './FormInput';

interface FormData {
  idPass: string;
  moveInDate: string;
  firstName: string;
  lastName: string;
  emailAddress: string;
  phone: string;
  gender: string;
  birthday: string;
  address: string;
}
const AddNewTenantForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    idPass: '',
    moveInDate: '',
    firstName: '',
    lastName: '',
    emailAddress: '',
    phone: '',
    gender: 'Male', // Default value
    birthday: '',
    address: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormData>>({});
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear validation error for the changed field
    setFormErrors({ ...formErrors, [name]: undefined });
  };
  const handleSubmit = async () => {
    // Validate the form
    const errors = validateForm(formData);
    setFormErrors(errors);

    // Check if there are any validation errors
    if (Object.keys(errors).length === 0) {
      // Submit the formData to Supabase Tenants table
      const { data, error } = await supabase
        .from('Tenants')
        .insert([
          {
            name: formData.firstName + ' ' + formData.lastName,
            email: formData.emailAddress,
            gender: formData.gender,
            date_of_birth: formData.birthday,
            phone: formData.phone,
            address: formData.address,
          },
        ])
        .select();

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Form data submitted:', formData);
        // Reset the form and set submission status to true
        setFormData({
          idPass: '',
          moveInDate: '',
          firstName: '',
          lastName: '',
          emailAddress: '',
          phone: '',
          gender: 'Male', // Default value
          birthday: '',
          address: '',
        });
        setFormSubmitted(true);
      }
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header">Add New Tenant</div>
      <div className="card-body">
        <form>
          <div className="row gx-3 mb-3">
            <FormInput
              label="I.D No./Passport No."
              id="inputIdPass"
              type="text"
              placeholder="Enter your ID/Passport"
              name="idPass"
              value={formData.idPass}
              onChange={handleChange}
              error={formErrors.idPass || null}
            />
            <FormInput
              label="Move In Date"
              id="inputMooveIn"
              type="date"
              placeholder=""
              name="moveInDate"
              value={formData.moveInDate}
              onChange={handleChange}
              error={formErrors.moveInDate || null}
            />
          </div>

          <div className="row gx-3 mb-3">
            <FormInput
              label="First name"
              id="inputFirstName"
              type="text"
              placeholder="Enter your first name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              error={formErrors.firstName || null}
            />
            <FormInput
              label="Last name"
              id="inputLastName"
              type="text"
              placeholder="Enter your last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              error={formErrors.lastName || null}
            />
          </div>

          <div className="row gx-3 mb-3">
            <FormInput
              label="Email address"
              id="inputEmailAddress"
              type="email"
              placeholder="Enter your email address"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleChange}
              error={formErrors.emailAddress || null}
            />
            <FormInput
              label="Phone number"
              id="inputPhone"
              type="tel"
              placeholder="Enter your phone number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={formErrors.phone || null}
            />
          </div>

          <div className="row gx-3 mb-3">
            <div className="col-md-6">
              <label className="small mb-1" htmlFor="inputGender">
                Gender
              </label>
              <select
                className="form-control form-control-solid"
                id="inputGender"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <FormInput
              label="D.O.B"
              id="inputBirthday"
              type="text"
              placeholder="Enter your birthday"
              name="birthday"
              value={formData.birthday}
              onChange={handleChange}
              error={formErrors.birthday || null}
            />
          </div>

          <FormInput
            label="Address"
            id="inputAddress"
            type="text"
            placeholder="Enter your Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            error={formErrors.address || null}
          />

          <button
            className="mt-4 btn btn-primary"
            type="button"
            onClick={handleSubmit}
          >
            Save changes
          </button>

          {formSubmitted && (
            <div className="mt-3 alert alert-success">
              Submitted successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddNewTenantForm;
