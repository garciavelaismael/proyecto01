db.clients.drop()
db.clients.insertMany([
	{"first_name":"Patty","last_name":"Overstall","email":{"gmail":null,"hotmail":"patty022@hotmail.com"},"gender":"F","country":"Poland"},
	{"first_name":"Humfrid","last_name":"Burtwistle","email":{"gmail":"burthumfrid@gmail.com","hotmail":"burthumfrid@hotmail.com"},"gender":"M","country":"France"},
	{"first_name":"Calley","last_name":"Silcox","email":{"gmail":null,"hotmail":"silcoxcalley@hotmail.com"},"gender":"F","country":"France"},
	{"first_name":"Ernaline","last_name":"Bladge","email":{"gmail":"ernalineuk@gmail.com","hotmail":"ernalineuk@hotmail.com"},"gender":"F","country":"United Kingdom"},
	{"first_name":"Ernestine","last_name":"Seeney","email":{"gmail":"seeneyerne01@gmail.com","hotmail":null},"gender":"F","country":"Portugal"},
	{"first_name":"Andre","last_name":"Garcia","email":{"gmail":"garcandre@gmail.es","hotmail":null},"gender":"M","country":"Spain"},
	{"first_name":"Jackelyn","last_name":"Soughton","email":{"gmail":"jacksough@gmail.com","hotmail":"jacksough12@hotmail.com"},"gender":"F","country":"Portugal"},
	{"first_name":"Isaiah","last_name":"Wylam","email":{"gmail":null,"hotmail":null},"gender":"M","country":"Portugal"},
	{"first_name":"Almeria","last_name":"Shawdforth","email":{"gmail":null,"hotmail":"almeria1112@hotmail.com"},"gender":"F","country":"France"},
	{"first_name":"Davide","last_name":"Darington","email":{"gmail":null,"hotmail":null},"gender":"M","country":"Portugal"}
]);
