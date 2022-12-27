console.log('hello');

var a = 5;
var b = 6;

var c = a+b;
console.log(c);

var m = 3;
m-5;
console.log(m-4);

//check capital 
// check sapcess
// check number start 

function NameValedation(name=''){
    try{
        if(Number.isNaN(Number(Name[0]))== false) {throw 'name cannot start with number';}
        else if(name.length > 30) {throw 'name cannot be greater then 30';}
        else if(name.length < 4) {throw 'name cannot be less then 4';}
    
    }
    catch(err){
        console.error(err)
        console.log(err)
    }
    finally{
        console.log('finally is excuted');
    }
}

var Name = 'jhj';
// if ()
console.log(Number.isNaN(Number(Name[0])));
NameValedation(Name);