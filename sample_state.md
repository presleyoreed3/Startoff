``` js
{
entities: {
	projects: {
		1: {
			id: 1,
			title: "Luxury Ebonite Mechanical Pencil",
			description: "Made with 100% German machined Parts and Finest Ebonite, this is a Pencil to pass on to future generations",
			fundingPercentage: "28%",
			makerId: 4,
		},
		2: {
			id: 2,
			title: "KOKUSEN Sensu | Traditional Japanese Fans",
			description: "Fans using special traditional crafting techniques and dyeing methods comes to Kickstarter with a limited edition available!",
			fundingPercentage: "478%",
			makerId: 48,
		},
		3: {
			id: 3,
			title: "MAK Bread",
			description: "A small sourdough bakery in Coeur d'Alene, Idaho wants to expand its menu and open a storefront",
			fundingPercentage: "99%",
			makerId: 249,
		}
	},
	users: {
		22: {
			id: 22,
			username: "theBackerSupreme",
		}
	},
	
},

ui: {
    loading: true/false,
    modal: true/false
  },
  errors: {
    login: ["Incorrect username/password combination"],
    projectForm: ["Project must have a title, description, goal amount and completion date"],
  },
  session: { currentUserId: 22 }
}
```