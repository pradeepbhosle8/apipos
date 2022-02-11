## Validations & Constraints
# Validations: Validations are checks performed in the Sequelize level, in pure JavaScript. They can be arbitrarily complex if you provide a custom validator function, or can be one of the built-in validators offered by Sequelize. 
# Constraints : constraints are rules defined at SQL level. The most basic example of constraint is an Unique Constraint. 

eg. 
    const User = sequelize.define("user", {
      username: {
        type: DataTypes.TEXT,
        allowNull: false,
        unique: true
      },
      hashedPassword: {
        type: DataTypes.STRING(64),
        validate: {
          is: /^[0-9a-f]{64}$/i
        }
      }
    });


    /++++++++++++++++++++++ Validation Constrains +++++++++++++/
  validate: {
    is: /^[a-z]+$/i,          // matches this RegExp
    is: ["^[a-z]+$",'i'],     // same as above, but constructing the RegExp from a string
    not: /^[a-z]+$/i,         // does not match this RegExp
    not: ["^[a-z]+$",'i'],    // same as above, but constructing the RegExp from a string
    isEmail: true,            // checks for email format (foo@bar.com)
    isUrl: true,              // checks for url format (http://foo.com)
    isIP: true,               // checks for IPv4 (129.89.23.1) or IPv6 format
    isIPv4: true,             // checks for IPv4 (129.89.23.1)
    isIPv6: true,             // checks for IPv6 format
    isAlpha: true,            // will only allow letters
    isAlphanumeric: true,     // will only allow alphanumeric characters, so "_abc" will fail
    isNumeric: true,          // will only allow numbers
    isInt: true,              // checks for valid integers
    isFloat: true,            // checks for valid floating point numbers
    isDecimal: true,          // checks for any numbers
    isLowercase: true,        // checks for lowercase
    isUppercase: true,        // checks for uppercase
    notNull: true,            // won't allow null
    isNull: true,             // only allows null
    notEmpty: true,           // don't allow empty strings
    equals: 'specific value', // only allow a specific value
    contains: 'foo',          // force specific substrings
    notIn: [['foo', 'bar']],  // check the value is not one of these
    isIn: [['foo', 'bar']],   // check the value is one of these
    notContains: 'bar',       // don't allow specific substrings
    len: [2,10],              // only allow values with length between 2 and 10
    isUUID: 4,                // only allow uuids
    isDate: true,             // only allow date strings
    isAfter: "2011-11-05",    // only allow date strings after a specific date
    isBefore: "2011-11-05",   // only allow date strings before a specific date
    max: 23,                  // only allow values <= 23
    min: 23,                  // only allow values >= 23
    isCreditCard: true,       // check for valid credit card numbers

    // Examples of custom validators:
    isEven(value) {
      if (parseInt(value) % 2 !== 0) {
        throw new Error('Only even values are allowed!');
      }
  }


or if arguments need to also be passed add an args property:
  isIn: {
  args: [['en', 'zh']],
  msg: "Must be English or Chinese"
}

You also can conditionally allow null values, with a custom validator, since it won't be skipped:
User.init({
  age: Sequelize.INTEGER,
  name: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      customValidator(value) {
        if (value === null && this.age !== 10) {
          throw new Error("name can't be null unless age is 10");
        }
      })
    }
  }
}, { sequelize });

You can customize allowNull error message by setting the notNull validator:
class User extends Model {}
User.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: {
        msg: 'Please enter your name'
      }
    }
  }
}, { sequelize });