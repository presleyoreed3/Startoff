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

project1 = Project.find(1)
project1.photo.attach(io: open("https://startoff-dev.s3.us-west-2.amazonaws.com/film.jpg"), filename: 'film.jpg')
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


rewards = Reward.create([
	{project_id: 1, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way. This thank you is all you get though"},
	{project_id: 1, tier_name: "Buy a Canister", price: 5, reward: "1 Film Canister", reward_description: "As a small token of my gratitude please take this single film canister as a momento"},
	{project_id: 1, tier_name: "Buy a square foot", price: 15, reward: "1 square foot", reward_description: "If you like that one tiny section of the mural this is your time to get it to hang on your wall"},
	{project_id: 1, tier_name: "Buy a ticket to the show", price: 25, reward: "1 show ticket", reward_description: "This is the best way to support me and will give you access to the art show upon completion"},
	{project_id: 1, tier_name: "Buy a square yard", price: 50, reward: "1 square yard", reward_description: "This is a bigger version of the square foot where you get a whole square yard (3x3 foot) of the whole mural"},
	{project_id: 1, tier_name: "Buy the whole mural", price: 3000, reward: "1 massive wall mural", reward_description: "Get the whole dang mural and put it somewhere. Its yours to do what you want with."},
	{project_id: 1, tier_name: "Buy the whole museum", price: 1000000, reward: "1 massive museum", reward_description: "I don't know if this one will actually work but I bet I could make a nice museum donation with this"},
	{project_id: 2, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 2, tier_name: "Buy a thank you", price: 10, reward: "1 Thank You", reward_description: "A thank you acknowledgment in the end of our comic"},
	{project_id: 2, tier_name: "Buy a Comix", price: 25, reward: "1 Comix", reward_description: "Get the first issue of the comix once its published"},
	{project_id: 2, tier_name: "Buy the whole Series", price: 100, reward: "10 Comix", reward_description: "Get the whole series of comix as they are published"},
	{project_id: 3, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 3, tier_name: "Test Drive", price: 100, reward: "A 1 hour test drive of the Drono", reward_description: "Test out the Drono early as one of our close Alpha-testers in a one hour walk around the greater houston area"},
	{project_id: 3, tier_name: "A Drono", price: 1500, reward: "A Drono of your very own", reward_description: "Take a drono with you home as your new companion for now and for always"},
	{project_id: 3, tier_name: "A Drono Fleet", price: 10000, reward: "A Fleet of 10 Dronos", reward_description: "Take an entire fleet of Dronos as your own personal army to help you conquer your enemies"},
	{project_id: 4, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 4, tier_name: "Box acknowledgment", price: 15, reward: "Your name on the box", reward_description: "Get a personal acknowledgment of your contribution on the back of our box for all time"},
	{project_id: 4, tier_name: "Domino Set", price: 25, reward: "1 Full Set", reward_description: "Enjoy a full set of our hand crafted dominos that will last a lifetime"},
	{project_id: 4, tier_name: "Custom Domino", price: 100, reward: "1 Full Set + Custom Domino", reward_description: "Get a full set of dominos along with a custom domino embossed with your name in gold leaf"},
	{project_id: 5, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 5, tier_name: "Acknowledgment", price: 10, reward: "An Acknowledgment in our Foreward", reward_description: "Get your name added to the other backers list as a thank you for your contribution"},
	{project_id: 5, tier_name: "First Issue", price: 25, reward: "The first issue of Swagger", reward_description: "Get the first ever issue of swagger as a limited first edtion printing"},
	{project_id: 5, tier_name: "Year Subscription", price: 200, reward: "A Years Subscription to Swagger", reward_description: "Get the first 12 issuse of swagger for a substatial discount along with a limited edtion first printing"},
	{project_id: 6, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 6, tier_name: "Dish Named After You", price: 50, reward: "1 Dish Named After You", reward_description: "Get a dish on Robin's menu named after yourself (you cannot select which dish it is)"},
	{project_id: 6, tier_name: "A Reservation", price: 150, reward: "A reservation and dinner for 2", reward_description: "A reservation for 2 at one of the world's finest micro restaurants complete with wine accompanyment"},
	{project_id: 6, tier_name: "A Night Out", price: 450, reward: "A private dining experience", reward_description: "Get a once in a lifetime private dining experience with Chef Robin making a private 10 course meal for 2"},
	{project_id: 7, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 7, tier_name: "Postcard", price: 10, reward: "1 Postcard", reward_description: "A Postcard from the gift shop of the museum where the event will be house. Not a postcard of the event itself just a random one"},
	{project_id: 7, tier_name: "Ticket to Exhibition", price: 45, reward: "1 Ticket to the Exhibit", reward_description: "Come and see the exhibit that everyone will be talking about once it opens"},
	{project_id: 7, tier_name: "Speak to the Green Man", price: 600, reward: "1 Ten Minute Conversation", reward_description: "Speak to the Green Man himself in a private 10 minute long converstaion. Ask him anything."},
	{project_id: 8, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 8, tier_name: "Donate a Cookie", price: 6, reward: "1 Cookie Donated", reward_description: "We will donate a cookie on your behalf to the local orphanage to help support the children of our area"},
	{project_id: 8, tier_name: "First Month", price: 35, reward: "1 Months Supply", reward_description: "Get your first box for a discounted price that will last you a whole month's worth of Gingerbread making"},
	{project_id: 8, tier_name: "First Year", price: 150, reward: "1 Years Supply", reward_description: "A monthly subscription delivered over the course of a year."},
	{project_id: 9, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 9, tier_name: "Acknowledgment", price: 12, reward: "Acknowledgment", reward_description: "An Acknowledgment in our endnote thank you for your donation"},
	{project_id: 9, tier_name: "First Issue", price: 22, reward: "1st Edition Printing", reward_description: "Get the limited edition first printing of issue #1 of the Peppermint magazine"},
	{project_id: 9, tier_name: "10 Years of Issues", price: 100, reward: "10 Year Subscription", reward_description: "Being a yearly publication means that every year for the next decade you will get a copy of Peppermint to enjoy"},
	{project_id: 10, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 10, tier_name: "Doodle of You", price: 18, reward: "1 Doodle of your Choice", reward_description: "One of our artists will take a photo of your choice and doodle it on a 5x3 card"},
	{project_id: 10, tier_name: "Major Character", price: 35, reward: "Character in the Comic", reward_description: "Get a character name and modeled after you in our abstract comic about nothing. He/She will be a major character I'm sure."},
	{project_id: 10, tier_name: "1st Edition", price: 100, reward: "Gold Foil First Edition", reward_description: "Be one of the few to enjoy this first editon, gold foiled, comic with your name embossed on the back cover"},
	{project_id: 11, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 11, tier_name: "First Wave", price: 250, reward: "Day 1 Implant", reward_description: "Be one of the earliest adopters of our technology and enjoy having electrodes implanted in your brain before anyone else"},
	{project_id: 11, tier_name: "Second Wave", price: 500, reward: "Post Beta Implant", reward_description: "Get the implant after the first wave once the kinks have been worked out of the system."},
	{project_id: 11, tier_name: "Third Wave", price: 1000, reward: "Retail Release", reward_description: "This will be the full release of the Mousy when I'm sure we will have gotten all the bugs out of the system. Probably..."},
	{project_id: 12, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 12, tier_name: "Blackbox Rent for a day", price: 75 , reward: "Satisfaction", reward_description: "Pay to have us be able to stay in the blackbox for another night"},
	{project_id: 12, tier_name: "Ticket to the show", price: 150, reward: "1 Show Ticket", reward_description: "A ticket to this exclusive show which will premier later this year."},
	{project_id: 12, tier_name: "Ticket to every show", price: 1000, reward: "1 Ticket to Every Show", reward_description: "This 1 ticket will be good for this, and any other show, that I do for the rest of my life"},
	{project_id: 13, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 13, tier_name: "Acknowledgment", price: 30, reward: "Acknowledgment on Front Flap", reward_description: "Get an acknowledgment in the front flap of the magazine as our sincere thank you"},
	{project_id: 13, tier_name: "1st Edition", price: 50, reward: "1st Edition of Trouve", reward_description: "Get the first ever printed edtion of Trouve to have and use to your heart's content"},
	{project_id: 13, tier_name: "1st Edition Gold", price: 100, reward: "1st Edition (Gold Embossed)", reward_description: "The first edtion embossed first printing of Trouve that will last until the fall of human civilization."},
	{project_id: 14, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 14, tier_name: "Credits", price: 55, reward: "Acknowledgment in The Credits", reward_description: "See your name fly by during the end credits of the film along with all the other backers"},
	{project_id: 14, tier_name: "Early Trailer", price: 75, reward: "Early Trailer Drop", reward_description: "Get early access to the trailer. 1 week before the world will see the trailer, you will be able to see the trailer."},
	{project_id: 14, tier_name: "Digital Download", price: 100, reward: "Full Movie (digital)", reward_description: "The full film released on the same day for digitial streaming and in theatres across the country."},
	{project_id: 15, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 15, tier_name: "Early Bird Controller", price: 60, reward: "1 Prototype Controller", reward_description: "1 Controller delivered fresh off of the 3D printer. Be among the first to test, and be banned after using this controler. "},
	{project_id: 15, tier_name: "Controller", price: 75, reward: "1st Run Production", reward_description: "The 1st edtion, full product complete with instructional booklet and guide on how to hack into ever game you could ever want to play"},
	{project_id: 15, tier_name: "Dual Controllers", price: 120, reward: "2 for 1ish", reward_description: "2 full first editon controllers for a steep dicsount limited to Startoff backers only"},
	{project_id: 16, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 16, tier_name: "A Tile", price: 7, reward: "1 Wooden Tile", reward_description: "Get a single wooden tile from our new Scramble game. Pick your choice of letter and hang it as a keychain or place it on your mantle"},
	{project_id: 16, tier_name: "Full Game", price: 19, reward: "Game Bag", reward_description: "Get our recycle burlap bag full of these wooden tiles along with a rule booklet"},
	{project_id: 16, tier_name: "Rule Named after you", price: 50, reward: "1 Rule in your Name", reward_description: "Get a full bag of tiles along with a rule named after you (we will pick the rule sorry)"},
	{project_id: 17, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 17, tier_name: "Thank you Placard", price: 50, reward: "1 Placard in the Museum Donation Sign", reward_description: "Get your name embossed on a golden placard that will live in the museum for the life of the exhibit"},
	{project_id: 17, tier_name: "Ticket to Exhibition", price: 75, reward: "1 Ticket to the Show", reward_description: "Get a ticket to the exhibit for 1 week before it opens to experience the horrors of history early "},
	{project_id: 17, tier_name: "Bust of Your Head", price: 400, reward: "1 Bust of your head", reward_description: "Hand carved marble bust of your head modelled after one of the many tyrants throughout history to commemorate your life and reign"},
	{project_id: 18, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 18, tier_name: "The Jar", price: 20, reward: "1 Pickling Jar", reward_description: "Pickle anything in our hand blown jars made out of high quality glass and strong metal for the lid"},
	{project_id: 18, tier_name: "The Jar Set", price: 60, reward: "4 Pickling Jars", reward_description: "Get a set of 4 pickling jars to allow for multiple pickling parties all at once"},
	{project_id: 18, tier_name: "The Jar Cupboard", price: 150, reward: "1 Cupboard + 4 Pickling Jars", reward_description: "Get a full wooden cupboard to store either your empty or full pickling jars out of the way of the rest of your kitchen"},
	{project_id: 19, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 19, tier_name: "Baby Set", price: 35, reward: "1 Pin and 1 Ball", reward_description: ""},
	{project_id: 19, tier_name: "Adult's Set", price: 85, reward: "6 Pins and 1 Ball", reward_description: "Full set of 6 pins and 1 ball. Use with your friends in the park and see who can get the most pins in a single bowl"},
	{project_id: 19, tier_name: "Champion's Set", price: 200, reward: "10 Pins and 2 Balls", reward_description: "A jumbo set for the true giant bowlers among you. Can you get a strike? How about a turkey? Next would the a perfect game? Good luck!"},
	{project_id: 20, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 20, tier_name: "Thank you Acknowledgment", price: 50, reward: "Credits Acknowledgment", reward_description: "Get a thank you in the credits of our game (we will make them unskippable so that everyone sees your contribution)"},
	{project_id: 20, tier_name: "Copy of Game(digital)", price: 60, reward: "1 Digital Download Code", reward_description: "A digital copy of this hit game plus the bonus fingerprint in-game pistol that one-shots everyone in the game."},
	{project_id: 20, tier_name: "Copy of Game(physical)", price: 70, reward: "1 Physical Copy", reward_description: "A phycial copy of the game in its own game case along with instuction manual and in game code for a fancy suite for bond to wear the whole game"},
	{project_id: 21, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 21, tier_name: "Credits Nod", price: 45, reward: "Name in the Credits", reward_description: "Get your name added to the credits of the movie as a specail thank you for helping make our dream come alive."},
	{project_id: 21, tier_name: "Early Trailer", price: 55, reward: "1 Month Trailer Preview", reward_description: "An email of the link to the private trailer delivered 1 month before the relase to the general public."},
	{project_id: 21, tier_name: "Digital Download", price: 70, reward: "1 Digital Download Code", reward_description: "A code to download the code for free off of whatever site you choose to watch 1 week before the streaming release"},
	{project_id: 22, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 22, tier_name: "Coffee For the Scientist", price: 7, reward: "1 Cup of Coffee", reward_description: "Be nice to our scientist who have been working so hard and buy them a cup of coffee for their trouble"},
	{project_id: 22, tier_name: "Honeycomb (raw)", price: 45, reward: "1 Cube of Raw Honeycomb", reward_description: "Get this honeycomb right off of our production line ready to be converted into literally anything you want"},
	{project_id: 22, tier_name: "Honeycomb (processed)", price: 80, reward: "1 Cube of Processed Honeycomb", reward_description: "Get one cube of hardened aluminum, the hardest material known to exist in the universe that will be basically useless but will also last longer than the eart."},
	{project_id: 23, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 23, tier_name: "Half-Kit", price: 25, reward: "1 Half-Kit", reward_description: "Just a kit with about half of the materials that are required to complete the project. Put your MacGyver skills to the test and try to complete it"},
	{project_id: 23, tier_name: "Full-Kit", price: 55, reward: "1 Full-Kit", reward_description: "Still no instructions in this one but at least all of the pieces come in the box so that should get you most of the way"},
	{project_id: 23, tier_name: "Full-Kit+", price: 75, reward: "1 Full-Kit + Mystery Box", reward_description: "A full kit complete with some encrypted instructions along with a mystery box to reveal the secret encyrption key in this one of a kind ARG"},
	{project_id: 24, tier_name: "Tip", price: 1, reward: "My eternal gratitude", reward_description: "Thank you so much for helping in any way"},
	{project_id: 24, tier_name: "CD of performance", price: 15, reward: "1 CD of Performance", reward_description: "Not able to come to the concert in person. Get the recorded version of the concert for less than half the cost of a normal ticket"},
	{project_id: 24, tier_name: "Ticket to performace", price: 45, reward: "1 Ticket to Show", reward_description: "Get a ticket to the show at Red Rock Ampitheater along with the recording that will be made of the concert"},
	{project_id: 24, tier_name: "Private Show", price: 100, reward: "1 Private Show", reward_description: "This comes with the ticket to the show along with an invitation to a private concert where I will play whatever you'd like for 2 hours"},

])








