# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require "open-uri"

users = User.create([
	{email: 'demo@startoff.com', password: 'demo-user', name: 'demo'},
	{email: "Presley", password: "Presley", name: "Presley Reed III"},
	{email: "Harsha", password: "Harsha", name: "Harsha Bandi"},
	{email: "Michelle", password: "Michelle", name: "Michelle Huang"},
	{email: "PerryXie", password: "PerryXie", name: "Perry Xie"},
	{email: "JingJing", password: "JingJing", name: "Jing Jing"},
	{email: "Daniel", password: "Daniel", name: "Daniel Bai"},
	{email: "JackTomasick", password: "JackTomasick", name: "Jack Tomasick"},
	{email: "AnnKim", password: "AnnKim", name: "Ann Kim"},
	{email: "AlexCiminillo", password: "AlexCiminillo", name: "Alex Ciminillo"},
	{email: "AmandaChen", password: "AmandaChen", name: "Amanda Chen"},
	{email: "Arleen", password: "Arleen", name: "Arleen Pandher"},
	{email: "Charlie", password: "Charlie", name: "Charlie Sheppard"},
	{email: "ChrisPark", password: "ChrisPark", name: "Chris Park"},
	{email: "HelenEdwards", password: "HelenEdwards", name: "Helen Edwards"},
	{email: "BrianKo", password: "BrianKo", name: "Brian Ko"},
	{email: "EfremPorter", password: "EfremPorter", name: "Efrem Porter"},
	{email: "JerryPhan", password: "JerryPhan", name: "Jerry Phan"},
	{email: "KirtiHarode", password: "KirtiHarode", name: "Kirti Harode"},
	{email: "LaneyLuong", password: "LaneyLuong", name: "Laney Luong"},
	{email: "ZackAlsiday", password: "ZackAlsiday", name: "Zack Alsiday"},
	{email: "Spencer", password: "Spencer", name: "Spencer Iascone"},
	{email: "Darren", password: "Darren", name: "Darren Eid"},
	{email: "DiegoChavez", password: "DiegoChavez", name: "Diego Chavez"},
	{email: "AyceLacap", password: "AyceLacap", name: "Ayce Lacap"},
	{email: "YuHuan", password: "YuHuan", name: "YuHuan Wu"},



])

projects = Project.create([
	{project_name: "Film Canister: Wall Art from the Lost Age of Film", creator_id: 1 , description: "Have you ever wondered what a whole wall mural of film canisters would look like? Well ponder no longer as we embrace the lost artform of wall art embracing the lost use of mosaic film canisters", category: "Art", current_funding: 27, goal_amount: 400, deadline: "Feburary, 1, 2023"},
	{project_name: "Comix for Kids", creator_id: 2, description: "Welcome to a new world of comics made with kids in mind. Designed to help inspire the love of reading through the medium of comics, Comix can help grow your childs love of reading while fostering creativty and community.", category: "Publishing", current_funding: 847 , goal_amount: 2000 , deadline: "June, 25th, 2022"},
	{project_name: "Drono: Walk the Drone", creator_id: 3, description: "Is a dog too much for you to take care of in your busy life? Do you crave the need for outdoor exploration but no good excuse to go for a walk. The wait is over. Now embrace Drono, the drone that walks you! Take them out for walks and discover what adventures they will lead you to.", category: "Design & Tech", current_funding: 4000 , goal_amount: 2500, deadline: "May 27th, 2022"},
	{project_name: "Dominos", creator_id: 4, description: "The history of dominos is a long and valuable one to the history of the world. Embrace this history through a commemorative set of dominos inspired by the vast archelogical records of the origins of Dominos", category: "Games", current_funding: 0, goal_amount: 8000, deadline: "March 8th, 2022"},
	{project_name: "Swagger | A magazine to boost yours", creator_id: 5, description: "Swagger is a fashion forward zine with the focus on boosting everyone individual swagger identity. Find your passions and discover what makes you swagger.", category: "Publishing", current_funding: 1847, goal_amount: 4800, deadline: "December 25th, 2022"},
	{project_name: "Robin's Micro Dining Experience", creator_id: 6, description: "When you go to dinner and always leave too full then Robin's micro dinning is for you. Help grow this small business and be one of the first to experience the joy of food that barely fills up your plate", category: "Food & Craft", current_funding: 18, goal_amount: 10000, deadline: "Feburary, 18th, 2022"},
	{project_name: "Green Man on Wall", creator_id: 7, description: "Come and experience the green man on the wall, a performative art piece talking about the nature of consumerism and the joys of letting go", category: "Arts", current_funding: 1400, goal_amount: 999, deadline: "August 22, 2022"},
	{project_name: "Gingerbread Collective", creator_id: 8, description: "Do you have the best ideas ever for making gingerbread house but lack the proper skills to make the dough yourself. Come join our collective to receive a monthly subscription box full of gingerbread to skulp to your hearts deepest desire.", category: "Food & Craft", current_funding: 1234, goal_amount: 10000, deadline: "December 25th, 2022"},
	{project_name: "Peppermint Magazine", creator_id: 9, description: "Experience the beauty of all things peppermint in the newest publication from Random House. Never before has a publication focused its entire printing to the concept of peppermint until today. Learn the latest on growing, strains, extracts and candy making with this yearly publication.", category: "Publishing", current_funding: 19, goal_amount: 8000, deadline: "January 1, 2022"},
	{project_name: "Abstract Comics Publishing", creator_id: 10, description: "Most comics tend to lend themselves to a traditional story structure. At Abstract Comics we strive to bring as little coherent plot, and imagery as possible to brind forward the creativity of the reader to inspire their own stories.", category: "Publising", current_funding: 765, goal_amount: 1200, deadline: "September 9th, 2022"},
	{project_name: "Mousy, the self moving mouse", creator_id: 11, description: "Using Elon Musk\'s nero-link principle we have made a mouse that through dioads placed in the brain can control itself and do your bidding simply by thinking deeply about the action that you would like it to do. Never again will you need to touch the filthy mouse to control it and now the creativity of motion is always within your grasp(so to speak)", category: "Design & Tech", current_funding: 89100, goal_amount: 1000, deadline: "March 10th, 2022"},
	{project_name: "Paper Boats on Troubled Waters", creator_id: 12, description: "Bring the magic of contemplative plays to the beauty of a traditional blackbox theatre setting. Never before has this one woman show come to this city and with your help we can inspire the next generation of crafts and buildings", category: "Arts", current_funding: 789, goal_amount: 1000, deadline: "July 18th, 2021"},
	{project_name: "Trouve", creator_id: 13, description: "Trouve is a new magazine to help inspire a new type of creativity when it comes to interior design. While it may seem odd to place all of your furniture on your ceiling reading Truove will help so you the massive ergonomic difference it can make in your every day life. ", category: "Publishing", current_funding: 78, goal_amount: 12000, deadline: "June 9th, 2023"},
	{project_name: "Slow-Cubing", creator_id: 14, description: "You've seen the hit documentary on Netflix Speedcubing, but have you ever wondered about what happens to the worst cubers in the world? Wonder no longer as we explore the world of the cubing dropouts whose skills were simply not good enough to get them to qualify for the best speed cube competions in the world", category: "Film", current_funding: 98310, goal_amount: 100000, deadline: "July 4th, 2022"},
	{project_name: "StationPlay", creator_id: 15, description: "Always coming short in your 1v1s in Apex Legends, never able to buttom mash fast enough during those QTE, or just hate the ergonomics of other popular gaming controllers? Embrace the StationPlay controller and rid yourself of bad gaming with built in hacks and hidden buttons all over the controller making losing a thing of the past", category: "Design & Tech", current_funding: 7490, goal_amount: 10000, deadline: "October 28th, 2022"},
	{project_name: "Scramble", creator_id: 16 , description: "Scrabble has always been way to hard so the team at scramble have come up with a fun alternative to play with your friends. Scramble focuses on your ability to make up complete nonesense words to earn the most points. Can you make up the most garbage words in the time alotted or will you fall to your friends absurd makination?", category: "Games", current_funding: 79, goal_amount: 8000, deadline: "May 12th, 2023"},
	{project_name: "Tyrants: a Visual teardown", creator_id: 17, description: "The roots of tyranny exist in every culture and major civiliations throughout history. Through this unique art installation, learn about the ways in which the tyrants have shaped the modern world and the ways in which we will always fall to the horrors of tyranny if we don't learn the lessons of the past.", category: "Arts", current_funding: 8392, goal_amount: 10000, deadline: "April 1st, 2022"},
	{project_name: "Pickling: A hobby for everyone", creator_id: 18, description: "Pickling has a long and storied history dating back to the first civilizations of humanity. Grow in this rich tradition by making your own pickles in our hand blown jars. Never has something left in brine for months or even years tasted so good.", category: "Design & Tech", current_funding: 849, goal_amount: 600, deadline: "March 27th, 2022"},
	{project_name: "Giant Lawn Bowling", creator_id: 19, description: "Never before has lawn bowling been so big. With our new vaccum form technology we have been able to supersize the lawn bowling experience. Through this Staroff you can be one of the first to embrace the joys of giant lawn bowling and find the best team to start your own local park league. Can you bowl the perfect game?", category: "Games", current_funding: 2000, goal_amount: 18000, deadline: "November 24th, 2022"},
	{project_name: "Skyfall: PSVita Edition", creator_id: 20, description: "Play this fan made game of the highly acclaimed and exilerating movie Skyfall. Play as Bond, James Bond and try to stop the sky from falling. Despite having never seen the movie we strive for the highest level of realism and will bring the best possible gaming experience to the now retired PSVita system. Never again will you have to worry about not being able to play a James Bond game on your PSVita.", category: "Games", current_funding: 87432, goal_amount: 6000 , deadline: "January 1st, 2022"},
	{project_name: "Drifting to Nowhere", creator_id: 21, description: "Experience the beauty of drifting as an artform in this new documentary directed by the world famous Scott Pressman. Never before has the smell of burning rubber and diesel fumes been brought to the screen like this intimate look at what a tire goes through as it drifts along the road. Marvel at the amazing decay of rubber as a tire is worn to the bone and pushed to its ultimate breaking point. Your donations can make our dream a reality.", category: "Film", current_funding: 57 , goal_amount: 12000 , deadline: "August 27th, 2022"},
	{project_name: "Honeycomb Aluminum", creator_id: 22, description: "Through a new milling and minting process our team of advanced scientists have come up with a new way to structure and forge aluminum to be 12x more durable and 18x more heat resistant. While not cost or energy effecient at all, this new milling process will revolutionize the drinking can industry", category: "Design & Tech", current_funding: 80021, goal_amount: 10000000, deadline: "December 31st, 2022"},
	{project_name: "Making Toys Together", creator_id: 23, description: "Show the children in your life the wonder of making something new with their hands. Through the magic of 3D printing and the creative minds behind Bill Nye the Science Guy comes the monthly subscription box full of science and tech toys for your children. No instrucitons will be provided and it is up to the kids themselves to discover what fun and unqiue project they have to build. Can they solve it? Can you? ", category: "Games", current_funding: 1238 , goal_amount: 9800 , deadline: "May 5th, 2022"},
	{project_name: "Guitar: For the Love of the Solo", creator_id: 24, description: "This performative music piece performed and recorded live at the Ampetheater at Red Rocks Colorado focuses on the masterpiece of music from Solo: A Star Wars Story. Never before has a guitarist sat down and done solos to every song from this hit film and now these CDs can be yours. We need your help to get the recordings made and to bring this wonderful music to life.", category: "Music", current_funding: 80, goal_amount: 80000, deadline: "Feburary 12th, 2022"},

])

# project1 = Project.find(1)
# project1.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/film.jpg"), filename: 'film.jpg')
project2 = Project.find(2)
project2.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/comix.jpg"), filename: 'comix.jpg')
project3 = Project.find(3)
project3.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/drono.jpg"), filename: 'drono.jpg')
project4 = Project.find(4)
project4.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/dominos.jpg"), filename: 'dominos.jpg')
project5 = Project.find(5)
project5.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/swagger.jpg"), filename: 'swagger.jpg')
project6 = Project.find(6)
project6.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/micro.jpg"), filename: 'micro.jpg')
project7 = Project.find(7)
project7.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/green.jpg"), filename: 'green.jpg')
project8 = Project.find(8)
project8.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/gingerbread.jpg"), filename: 'gingerbread.jpg')
project9 = Project.find(9)
project9.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/peppermint.jpg"), filename: 'peppermint.jpg')
project10 = Project.find(10)
project10.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/abstract.jpg"), filename: 'abstract.jpg')
project11 = Project.find(11)
project11.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/mousy.jpg"), filename: 'mousy.jpg')
project12 = Project.find(12)
project12.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/boats.jpg"), filename: 'boats.jpg')
project13 = Project.find(13)
project13.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/trouve.jpg"), filename: 'trouve.jpg')
project14 = Project.find(14)
project14.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/cube.jpg"), filename: 'cube.jpg')
project15 = Project.find(15)
project15.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/stationplay.jpg"), filename: 'stationplay.jpg')
project16 = Project.find(16)
project16.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/scramble.jpg"), filename: 'scramble.jpg')
project17 = Project.find(17)
project17.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/tyrnanny.jpg"), filename: 'tyrnanny.jpg')
project18 = Project.find(18)
project18.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/pickles.jpg"), filename: 'pickles.jpg')
project19 = Project.find(19)
project19.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/lawn-bowling.jpg"), filename: 'lawn-bowling.jpg')
project20 = Project.find(20)
project20.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/skyfall.jpg"), filename: 'skyfall.jpg')
project21 = Project.find(21)
project21.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/drifting.jpg"), filename: 'drifting.jpg')
project22 = Project.find(22)
project22.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/honeycomb.jpg"), filename: 'honeycomb.jpg')
project23 = Project.find(23)
project23.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/making-toys.jpg"), filename: 'making-toys.jpg')
project24 = Project.find(24)
project24.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/guitar.jpg"), filename: 'guitar.jpg')


