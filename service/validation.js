const { body, validationResult } =require('express-validator');
const validateCustomerDetails = (req, res, next) => {
    
        const validationRules = [
            body('name').notEmpty().withMessage('name is not valid'),
            body('age').notEmpty().withMessage('age  is required'),
            body('description').notEmpty().withMessage('description is required')
          ]
          Promise.all(validationRules.map((rule) => rule.run(req))).then(() => {

            const errors = validationResult(req);
            if (errors.isEmpty()) {

                next();
            
              } else {
            
                // Validation errors, return error response
            
                res.status(422).json({ errors: errors.array() });
            
              }
            
            });
            
            };
            module.exports = {
              validateCustomerDetails,
            };
          
