function validateSchema(obj, schema) {
   const errors = [];

  for (const key in schema) {
    if (Object.prototype.hasOwnProperty.call(schema, key)) {
      const expectedType = schema[key];
      
      // Check if the property is missing
      if (!(key in obj)) {
        errors.push(`${key}: missing property`);
      } 
      // Check if the type mismatches
      else if (typeof obj[key] !== expectedType) {
        errors.push(`${key}: expected ${expectedType}, got ${typeof obj[key]}`);
      }
    }
  }

  return errors;
}
const schema = { name: 'string', age: 'number', isAdmin: 'boolean' }
console.log(validateSchema({ name: 'Ada', age: 21, isAdmin: false }, schema))
// []
console.log(validateSchema({ name: 'Ada', age: '21' }, schema))
// ['age: expected number, got string', 'isAdmin: missing property']