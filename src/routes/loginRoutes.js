const express = require('express');
const loginRouter =express.Router();

loginRouter.get('/' ,function(req,res){

    res.render('login',{
        nav : [{link : '/books', name : 'Add Books'},{link: '/author', name :'Author' }, {link : '/signup' , name:'SignUp'} ],
        head: 'Library',
        title : 'Library Application '
    } );
})

module.exports = loginRouter;