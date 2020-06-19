const express = require('express');
const authorRouter = express.Router();

function router(nav){
        authors = [
                {name:'Vaikom Muhammed Basheer'} ,
                {name:'M.T Vasudevan'},
                {name:'O.V Vijayan'},
                {name:'Thakazhi'},
                {name:'M. Mukundan'},
                {name:'O. N. V. Kurup'},
                {name:'Kadammanitta Ramakrishnan'},
                {name:'Kakkanadan'},
                {name:'Kovilan'},
                {name:'K. N. Panicker'},
                {name:'V. K. N'},
                {name:'Vayalar Ramavarma'},
                {name:'Vallathol Narayana Menon'},
                {name:'Unnayi Warrier'},
                {name:'Ulloor S. Parameswara Iyer'},
                {name:'U. K. Kumaran'},
                {name:'N. N. Kakkad'},
                {name:'Uroob'},
             ]
            
            authorRouter.get('/',function(req,res){
                    res.render('author',{
                    nav,
                    head: 'Authors',
                    title : 'Library Application ',
                    authors
                    })
            })
            return authorRouter;

}


module.exports = router;
