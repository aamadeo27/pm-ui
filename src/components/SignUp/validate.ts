import Joi from 'joi'

export const formSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'Name should have at least 2 characters',
    'string.max': 'Name should have at most 50 characters',
  }),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Email must be a valid email address',
    }),

  password: Joi.string().min(10).required().messages({
    'string.empty': 'Password is required',
    'string.min': 'Password should have at least 10 characters',
  }),

  password2: Joi.string().required().messages({
    'string.empty': 'Password Confirmation is required',
  }),
})
