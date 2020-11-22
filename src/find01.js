//Muestra los empleados que tienen correo personal.
db.employees.find({
	"email.personal": {$ne:null} 
});

//Cuenta el número de aspirante que saben de Mongodb.
db.aspirants.fin({
	cv: {$regex:/mongo/}
}).count()

//Muestra los productos que tengas más de 3.4cm de alto.
db.inventory.find({ 
	"size.h": {$lt:3.4}, "size.uom": "cm"
});

//Muestra los productos que contengan alcohol
db.inventory.find({
	alcohol: {$exists: true}
});

//Muestra los empleados que le faltan el correo de la empresa.
db.employees.find({
	"email.company": {$eq:null}
});

//Clientes que son de Francia y tienen gmail.
db.clients.find({
	$and: [
		{"email.gmail":{$ne:null}}, {country: {$eq:"France"}}
	]
});

//Aspirantes contratados de Francia y Portugal.
db.aspirants.find({
    $and: [
        {$or:[{country:{$eq:"France"}}, {country:{$eq:"Portugal"}}]},
        {$or:[{hired:true}]}
    ]
});

//Muestra los productos que empiezan por A y que terminan por O.
db.inventory.find({
	$or: [{item:{$regex:/^A/}}, {item:{$regex:/O$/i}}]
});

//Muestra los productos que NO hayan más de 30 y no tengan alcohol. Sólo muestra el producto y la cantidad por la proyección.
db.inventory.find({
	$nor:[
		{qty:{$gt:30}}, {alcohol:{$exists:true}}
	]},
		{_id:0, item:1, qty:1})
//Muestra los aspirantes que sean de Francia o de Portugal y estén contratados o sean mujeres.
db.aspirants.find({
    $and: [
        {$or:[{country:{$eq:"France"}}, {country:{$eq:"Portugal"}}]},
        {$nor:[{hired:false}, {gender:{$eq:"M"}}]}
    ]
});
