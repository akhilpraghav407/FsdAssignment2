const express = require('express');
const signupRouter = express.Router();
signupRouter.get('/',function(req,res){
    res.render('signup',{
        nav : [{link : '/books', name : 'Add Books'},{link: '/author', name :'Author' },{link: '/login',name :'LogIn'} ],
        head: 'Library',
        title : 'Library Application '
       
    })
})

module.exports = signupRouter;