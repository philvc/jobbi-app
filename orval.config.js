const faker = require("faker");

if (!process.env.CI) {
	require("dotenv").config({
		path: `.env`,
	});
}

module.exports = {
	"resource-api": {
		input: {
			target: "http://localhost:64594/swagger.json",
		},
		output: {
			mode: "tags-split",
			target: "src/services",
			schemas: "src/types/dtos",
			client: "react-query",
			mock: true,
			override: {
				mutator: {
					path: "src/services/config.ts",
					name: "customInstance",
				},
				mock: {
					properties: {
						firstName: () => faker.name.firstName(),
						lastName: () => faker.name.lastName(),
						language: () => "FR",
						city: () => faker.address.cityName(),
						address: () => faker.address.streetAddress(),
						email: () => faker.internet.email(),
						phoneNumber: () => faker.phone.phoneNumber("+32494######"),
						creationDate: () => faker.date.recent().toISOString(),
						modificationDate: () => faker.date.recent().toISOString(),
					},
					required: true,
				},
			},
		},
	},
};
