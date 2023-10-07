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
export const validateForm = (formData: FormData) => {
    const errors: Partial<FormData> = {};
  
    if (!formData.firstName) {
      errors.firstName = 'First name is required';
    }
  
    if (!formData.lastName) {
      errors.lastName = 'Last name is required';
    }
  
    if (!formData.emailAddress) {
      errors.emailAddress = 'Email address is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.emailAddress)
    ) {
      errors.emailAddress = 'Invalid email address';
    }
  
    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/i.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }
  
    if (!formData.birthday) {
      errors.birthday = 'Date of birth is required';
    }
  
    if (!formData.idPass) {
      errors.idPass = 'ID/Passport number is required';
    } else if (!/^[A-Z0-9]{8,}$/i.test(formData.idPass)) {
      errors.idPass = 'Invalid ID/Passport format';
    }
  
    if (!formData.moveInDate) {
      errors.moveInDate = 'Move-in date is required';
    } else {
      const currentDate = new Date().toISOString().split('T')[0];
      if (formData.moveInDate < currentDate) {
        errors.moveInDate = 'Move-in date cannot be in the past';
      }
    }
  
    if (!formData.address) {
      errors.address = 'Address is required';
    }
  
    // Add more validation rules as needed for other fields
  
    return errors;
  };