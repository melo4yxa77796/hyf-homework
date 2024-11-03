"use client";
import React, { useRef, useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import { useRouter } from 'next/navigation'; 

const SignUpForm = () => {
 
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    phone: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
    setErrors((prevState) => ({ ...prevState, [name]: false }));
  };

  
  const handleKeyDown = (e, nextRef) => {
    if (e.key === 'Enter') {
      e.preventDefault(); 
      nextRef.current.focus(); 
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      firstName: !formData.firstName,
      lastName: !formData.lastName,
      email: !/\S+@\S+\.\S+/.test(formData.email),
      phone: !/^\d{10}$/.test(formData.phone)
    };

    setErrors(newErrors);
    for (const key in newErrors) {
      if (newErrors[key]) valid = false;
    }

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      router.push('/'); 
    }
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="First Name"
          name="firstName"
          variant="outlined"
          fullWidth
          margin="normal"
          inputRef={firstNameRef} 
          error={errors.firstName}
          helperText={errors.firstName && "First Name is required."}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e, lastNameRef)} 
        />
        <TextField
          label="Last Name"
          name="lastName"
          variant="outlined"
          fullWidth
          margin="normal"
          inputRef={lastNameRef} 
          error={errors.lastName}
          helperText={errors.lastName && "Last Name is required."}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e, emailRef)} 
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          fullWidth
          margin="normal"
          inputRef={emailRef} 
          error={errors.email}
          helperText={errors.email && "Enter a valid email."}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e, phoneRef)} 
        />
        <TextField
          label="Phone Number"
          name="phone"
          variant="outlined"
          fullWidth
          margin="normal"
          inputRef={phoneRef} 
          error={errors.phone}
          helperText={errors.phone && "Phone number must be 10 digits."}
          onChange={handleChange}
          onKeyDown={(e) => handleKeyDown(e, phoneRef)} 
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignUpForm;
