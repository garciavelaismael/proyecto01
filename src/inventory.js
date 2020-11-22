db.inventory.drop()
db.inventory.insertMany([
	{"item":"Chickensplit Half","qty":80,"size":{"h":3.9,"w":6.3,"uom":"cm"}},
	{"item":"Soup - Campbells Chili Veg","qty":96,"size":{"h":3.6,"w":12.0,"uom":"cm"}},
	{"item":"Muffin - Banana Nut Individual","qty":96,"size":{"h":5.1,"w":2.7,"uom":"cm"}},
	{"item":"Paste - Black Olive","qty":86,"size":{"h":9.8,"w":8.4,"uom":"cm"}},
	{"item":"Sprouts - Pea","qty":88,"size":{"h":4.6,"w":15.0,"uom":"cm"}},
	{"item":"Wasabi Paste","qty":65,"size":{"h":9.0,"w":8.4,"uom":"cm"}},
	{"item":"Chicken - Base","qty":40,"size":{"h":1.8,"w":5.3,"uom":"cm"}},
	{"item":"Taro Root","qty":31,"size":{"h":3.4,"w":7.4,"uom":"cm"}},
	{"item":"Corn Kernels - Frozen","qty":59,"size":{"h":3.7,"w":7.7,"uom":"cm"}},
	{"item":"Wine - White, Pelee Island","qty":19,"size":{"h":3.2,"w":1.1,"uom":"cm"}, "alcohol":"true"},
	{"item":"Teriyaki Sauce","qty":22,"size":{"h":4.5,"w":14.4,"uom":"cm"}},
	{"item":"Appetizer - Tarragon Chicken","qty":38,"size":{"h":5.8,"w":14.5,"uom":"cm"}},
	{"item":"Energy - Boo - Koo","qty":5,"size":{"h":9.9,"w":14.3,"uom":"cm"}},
	{"item":"Lid - 3oz Med Rec","qty":11,"size":{"h":9.3,"w":6.5,"uom":"cm"}},
	{"item":"Longos - Penne With Pesto","qty":50,"size":{"h":3.6,"w":6.3,"uom":"cm"}}
]);
