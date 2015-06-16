exports.getData=function(func){
    var mysql = require('mysql');  
    var TEST_DATABASE = 'test_database';  
    var TEST_TABLE = 'test2';  
    
    //创建连接  
    var client = mysql.createConnection({  
        user: 'root',  
        password: '12345678',  
    });  

    // client.connect();
    // client.query("use " + TEST_DATABASE);

    // client.query(  
    //     'SELECT * FROM '+TEST_TABLE +" LIMIT 10",  
    //     function (err, results, fields) {  
    //         if (err) {  
    //             throw err;  
    //         }  
            
    //         if(results) {
    //             func(results);
    //         }    
    //         client.end();  
    //     }
    // );
}
