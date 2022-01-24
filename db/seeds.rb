# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

users = User.create([
	{email: 'demo@startoff.com', password: 'demo-user', name: 'demo'},
	{email: "Presley", password: "Presley", name: "Presley Reed III"},
	{email: "Harsha", password: "Harsha", name: "Harsha Bandi"},
	{email: "Michelle", password: "Michelle", name: "Michelle Huang"},
	{email: "PerryXie", password: "PerryXie", name: "PerryXie"},
	{email: "JingJing", password: "JingJing", name: "Jing Jing"},
	{email: "Daniel", password: "Daniel", name: "Daniel Bai"},
	{email: "JackTomasick", password: "JackTomasick", name: "Jack Tomasick"},
])