//01.Muestra los empleados que tienen correo personal.
db.employees.find({
	"email.personal": {$ne:null} 
});

/*
{ "_id" : ObjectId("5faec10c7acc3bb82f8d8c74"), "first_name" : "Allys", "last_name" : "Passingham", "email" : { "personal" : "allyspass10@hotmail.com", "company" : "pallys@shop.es" }, "birth_date" : "23/07/1961", "hiring_date" : "16/09/2020", "gender" : "F", "country" : "France", "phone" : "+33 902 897 7012" }
{ "_id" : ObjectId("5faec10c7acc3bb82f8d8c75"), "first_name" : "Pate", "last_name" : "Partener", "email" : { "personal" : "partenerpate@gmail.com", "company" : "ppate@shop.es" }, "birth_date" : "25/08/1973", "hiring_date" : "23/01/2002", "gender" : "M", "country" : "Portugal", "phone" : "+351 805 849 5400" }
{ "_id" : ObjectId("5faec10c7acc3bb82f8d8c76"), "first_name" : "Austina", "last_name" : "Slopier", "email" : { "personal" : "slopierautinnnn@hotmail.com", "company" : "saustina@shop.es" }, "birth_date" : "21/01/1974", "hiring_date" : "03/05/2007", "gender" : "F", "country" : "Poland", "phone" : "+48 306 365 4020" }
{ "_id" : ObjectId("5faec10c7acc3bb82f8d8c78"), "first_name" : "Gorden", "last_name" : "Symcox", "email" : { "personal" : "symgorden1961@gmail.com", "company" : "sgorden@shop.es" }, "birth_date" : "15/07/1961", "hiring_date" : "19/08/2002", "gender" : "M", "country" : "France", "phone" : "+33 798 402 0130" }
{ "_id" : ObjectId("5faec10c7acc3bb82f8d8c7a"), "first_name" : "Carine", "last_name" : "Crosland", "email" : { "personal" : "crosland18@gmail.com", "company" : "ccarine@shop.com" }, "birth_date" : "18/09/1965", "hiring_date" : "07/06/2010", "gender" : "F", "country" : "Portugal", "phone" : "+351 218 956 2958" }
{ "_id" : ObjectId("5faec10c7acc3bb82f8d8c7c"), "first_name" : "Sandi", "last_name" : "Monier", "email" : { "personal" : "sandimonier@hotmail.com", "company" : "msandi@shop.es" }, "birth_date" : "24/04/1962", "hiring_date" : "10/06/2015", "gender" : "F", "country" : "France", "phone" : "+33 536 250 7542" }
*/

//02.Cuenta el número de aspirante que saben de Mongodb.
db.aspirants.fin({
	cv: {$regex:/mongo/}
}).count()

/*
1
*/

//03.Muestra los productos que tengas más de 3.4cm de alto.
db.inventory.find({ 
	"size.h": {$lt:3.4}, "size.uom": "cm"
});

/*{ "_id" : ObjectId("5fba6ccd8a5b7a1d4cb65dee"), "item" : "Chicken - Base", "qty" : 40, "size" : { "h" : 1.8, "w" : 5.3, "uom" : "cm" } }
{ "_id" : ObjectId("5fba6ccd8a5b7a1d4cb65df1"), "item" : "Wine - White, Pelee Island", "qty" : 19, "size" : { "h" : 3.2, "w" : 1.1, "uom" : "cm" }, "alcohol" : "true" }
*/

//04.Muestra los productos que contengan alcohol
db.inventory.find({
	alcohol: {$exists: true}
});

/*
{ "_id" : ObjectId("5fba6ccd8a5b7a1d4cb65df1"), "item" : "Wine - White, Pelee Island", "qty" : 19, "size" : { "h" : 3.2, "w" : 1.1, "uom" : "cm" }, "alcohol" : "true" }
*/

//05.Muestra los empleados que le faltan el correo de la empresa.
db.employees.find({
	"email.company": {$eq:null}}, 
	{_id:0})

/*
{ "first_name" : "Natasha", "last_name" : "Garretson", "email" : { "personal" : null, "company" : null }, "birth_date" : "18/09/1962", "hiring_date" : "21/04/2019", "gender" : "F", "country" : "France", "phone" : "+33 533 704 7521" }
{ "first_name" : "Sarine", "last_name" : "Derwin", "email" : { "personal" : null, "company" : null }, "birth_date" : "18/01/1966", "hiring_date" : "05/05/2020", "gender" : "F", "country" : "Germany", "phone" : "+49 413 120 6446" }
*/

//06.Clientes que son de Francia y tienen gmail.
db.clients.find({
	$and: [
		{"email.gmail":{$ne:null}}, {country: {$eq:"France"}}
	]
});

/*
{ "_id" : ObjectId("5faec1087acc3bb82f8d8c6a"), "first_name" : "Humfrid", "last_name" : "Burtwistle", "email" : { "gmail" : "burthumfrid@gmail.com", "hotmail" : "burthumfrid@hotmail.com" }, "gender" : "M", "country" : "France" }
*/

//07.Aspirantes contratados de Francia y Portugal.
db.aspirants.find({
    $and: [
        {$or:[{country:{$eq:"France"}}, {country:{$eq:"Portugal"}}]},
        {$or:[{hired:true}]}
    ]
});

/*
{ "_id" : ObjectId("5faec1037acc3bb82f8d8c63"), "first_name" : "Quent", "last_name" : "Taffurelli", "email" : "qtaffurelli0@harvard.edu", "gender" : "M", "country" : "Portugal", "phone" : "+351 696 600 4712", "cv" : "Sabe lenguaje de programación python", "hired" : true }
{ "_id" : ObjectId("5faec1037acc3bb82f8d8c66"), "first_name" : "Nananne", "last_name" : "Buick", "email" : "nbuick3@google.fr", "gender" : "F", "country" : "France", "phone" : "+33 884 805 9013", "cv" : "Ingeniero de telecomunicaciones", "hired" : true }
{ "_id" : ObjectId("5faec1037acc3bb82f8d8c68"), "first_name" : "Renae", "last_name" : "Whyborne", "email" : "rwhyborne5@mit.edu", "gender" : "F", "country" : "France", "phone" : "+33 608 231 6205", "cv" : "Conocimientos de mongodb", "hired" : true }

*/


//08.Muestra los productos que empiezan por A y que terminan por O.
db.inventory.find({
	$or: [{item:{$regex:/^A/}}, {item:{$regex:/O$/i}}]
});

/*
{ "_id" : ObjectId("5fba6ccd8a5b7a1d4cb65df3"), "item" : "Appetizer - Tarragon Chicken", "qty" : 38, "size" : { "h" : 5.8, "w" : 14.5, "uom" : "cm" } }
{ "_id" : ObjectId("5fba6ccd8a5b7a1d4cb65df4"), "item" : "Energy - Boo - Koo", "qty" : 5, "size" : { "h" : 9.9, "w" : 14.3, "uom" : "cm" } }
{ "_id" : ObjectId("5fba6ccd8a5b7a1d4cb65df6"), "item" : "Longos - Penne With Pesto", "qty" : 50, "size" : { "h" : 3.6, "w" : 6.3, "uom" : "cm" } }
*/

//09.Muestra los productos que NO hayan más de 30 y no tengan alcohol. Sólo muestra el producto y la cantidad por la proyección.
db.inventory.find({
	$nor:[
		{qty:{$gt:30}}, {alcohol:{$exists:true}}
	]},
		{_id:0, item:1, qty:1})

/*
{ "item" : "Teriyaki Sauce", "qty" : 22 }
{ "item" : "Energy - Boo - Koo", "qty" : 5 }
{ "item" : "Lid - 3oz Med Rec", "qty" : 11 }
*/

//10.Muestra los aspirantes que sean de Francia o de Portugal y estén contratados o sean mujeres.
db.aspirants.find({
    $and: [
        {$or:[{country:{$eq:"France"}}, {country:{$eq:"Portugal"}}]},
        {$nor:[{hired:false}, {gender:{$eq:"M"}}]}
    ]
});

/*
{ "_id" : ObjectId("5faec1037acc3bb82f8d8c66"), "first_name" : "Nananne", "last_name" : "Buick", "email" : "nbuick3@google.fr", "gender" : "F", "country" : "France", "phone" : "+33 884 805 9013", "cv" : "Ingeniero de telecomunicaciones", "hired" : true }
{ "_id" : ObjectId("5faec1037acc3bb82f8d8c68"), "first_name" : "Renae", "last_name" : "Whyborne", "email" : "rwhyborne5@mit.edu", "gender" : "F", "country" : "France", "phone" : "+33 608 231 6205", "cv" : "Conocimientos de mongodb", "hired" : true }
*/
