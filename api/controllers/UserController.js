/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  'new':function(req,res){
    res.view();
  },

  create: function(req,res,next){

    //  Create a User with the params sent from
    //  the sign-up form --> new.ejs
    User.create(  req.params.all(), function userCreated (err, user){
      //  If there's an error
      if(err) {
        console.log(err);
        req.session.flash = {
          err: err
        }

        //If error redirect back to sign-up page
        return res.redirect('/user/new');
      }

        //  After successfully creating the user
        //  redirect to the show action
        res.redirect('/user/show/'+user.id);

    });
  },

  show: function(req, res) {
    User.findOne(req.param('id'), function foundUser(err, user) {
      if (err || !user) return res.serverError(err);
      res.view({user: user});
    });
  }

};

