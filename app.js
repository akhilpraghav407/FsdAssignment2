const express = require('express');
const app = express();

const nav = [{link : '/books', name : 'Add Books'},{link: '/author', name :'Author' },{link: '/login',name :'LogIn'}, {link : '/signup' , name:'SignUp'}]
const authorRouter = require('./src/routes/authorRoutes')(nav)
const loginRouter = require('./src/routes/loginRoutes');
const signupRouter = require('./src/routes/signupRoutes');
const addRouter=require('./src/routes/addRoutes');

app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/author',authorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/books',addRouter);

app.get('/',function(req,res){

    res.render('index',
    {
        nav ,
        head: 'Library',
        title : 'Library Application '
    } );
})






app.listen('3700')