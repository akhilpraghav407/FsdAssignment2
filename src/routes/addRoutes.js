const express = require('express');
const addRouter = express.Router();
addRouter.get('/',function(req,res){
    res.render('books',{
        nav : [{link : '/books', name : 'Add Books'},{link: '/author', name :'Author' },{link: '/login',name :'LogIn'} ],
        head: 'Library',
        title : 'Library Application '
       
    })
})

module.exports = addRouter;