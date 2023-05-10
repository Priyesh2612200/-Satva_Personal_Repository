
export function validatecheck(req: any, res: any, next: any) {
  const { email, password } = req.body;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/;

  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({
      error: 'Invalid email'
    });
  }

  if (!password || !passwordRegex.test(password)) {
    return res.status(400).json({
      error: 'Invalid password',
      message: 'Please enter a password with at least 8 characters, including at least one uppercase letter, one lowercase letter, one digit, and one special character.',
    });
  }

  next();
}

const { body } = require('express-validator');

const  registerValidationRules = [
  
    body('name').notEmpty().withMessage("Name must not be empty"),
    body('email').notEmpty().withMessage("Email must not be empty"),
    body('password').notEmpty().withMessage("Password must not be empty"),
  ];

export default registerValidationRules





