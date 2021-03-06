/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  //only save the below fields into the database
  schema: true,

  attributes: {

    name: {
      type:'string',
      required:'true'
    },

    title: 'string',

    email: {
      type:'string',
      email:'true',
      required:'true',
      unique:'true'
    },

    encryptedPassword: 'string',
    
    toJSON: function() {
      console.log('toJSON');
      var obj = this.toObject();
      delete obj.encryptedPassword;
      return obj;
    }
  },
  
  beforeCreate: function (values, next) {
    // This checks to make sure the password and password confirmation match before creating record
    if (!values.password || values.password != values.confirmation) {
      return next({err: ["Password doesn't match password confirmation."]});
    }
    require('bcrypt').hash(values.password, 10, function passwordEncrypted(err, encryptedPassword) {
      if (err) return next(err);
      values.encryptedPassword = encryptedPassword;
      next();
    });
  }

};

