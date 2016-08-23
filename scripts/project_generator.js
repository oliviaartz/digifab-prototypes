var faker = require('faker'),
		fs = require('fs')

var random_project = function (num) {
	return {
		"id": num + 1,
	  "name": faker.commerce.productName(),
	  "location": faker.fake("{{address.city}}, {{address.stateAbbr}}"),
	  "location_lat": faker.address.latitude(),
	  "location_lon": faker.address.longitude(),
	  "cost": parseInt(faker.commerce.price(20000, 500000)),
	  "description": faker.lorem.paragraph(),
	  "thumbnail": "images/projects/" + (num%12+1) + ".jpg"
	}
}

var projects = []

for (var i = 0; i < 500; i++)
	projects.push( random_project(i) )

console.log(projects)

fs.writeFile("../filtering/projects.json", JSON.stringify(projects, null, 2), function(err) {
  if(err)
    return console.log(err)

  console.log("The file was saved!")
})