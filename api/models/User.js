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

    encryptedPassword: 'string'
    //,
    //
    //toJSON: function(){
    //  var obj = this.toObject();
    //  delete obj.password;
    //  delete obj.confirmation;
    //  delete obj.encryptedPassword;
    //  delete obj._csrf;
    //  return obj;
    //}

  }

};

