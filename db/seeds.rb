# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require 'open-uri'

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    Review.destroy_all
    Business.destroy_all
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
    ApplicationRecord.connection.reset_pk_sequence!('businesses')
    ApplicationRecord.connection.reset_pk_sequence!('reviews')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      email: 'demo@user.io',
      first_name: "Demo",
      last_name: "Man",
      zip: 22222 ,
      password: 'password'
    )
  
    User.create!({
        email: Faker::Internet.unique.email,
        first_name: 'Willard',
        last_name: 'Pillard',
        zip: 12345,
        password: 'password'
    }) 

    User.create!({
        email: Faker::Internet.unique.email,
        first_name: 'Jeremy',
        last_name: 'Apples',
        zip: 86753,
        password: 'password'
    }) 

    User.create!({
        email: Faker::Internet.unique.email,
        first_name: 'Tony',
        last_name: 'Hawk',
        zip: 11221,
        password: 'password'
    }) 

    User.create!({
        email: Faker::Internet.unique.email,
        first_name: 'Johnny',
        last_name: 'Brightside',
        zip: 11226,
        password: 'password'
    }) 

    User.create!({
        email: Faker::Internet.unique.email,
        first_name: 'Augusta',
        last_name: 'Summers',
        zip: 27707,
        password: 'password'
    }) 

    User.create!({
        email: Faker::Internet.unique.email,
        first_name: 'Adam',
        last_name: 'Lindgren',
        zip: 38339,
        password: 'password'
    }) 

    User.create!({
        email: Faker::Internet.unique.email,
        first_name: 'Ken',
        last_name: 'Marth',
        zip: 27514,
        password: 'password'
    }) 

    puts "creating Businesses..."

    hans_aquarium = Business.create!(
      name: "Han's Aquarium",
      business_type: 'aquarium', #food
      street_address: '123 Pizza Place',
      city: 'New York',
      zip: 11111,
      state: 'NY'
    )
    daniels_aquarium = Business.create!(
      name: "Daniel's Aqua Party House",
      business_type: 'aquarium',
      street_address: '321 AppleJuice Lane',
      city: 'New York',
      zip: 11111,
      state: 'NY'
    )
    williams_aquarium = Business.create!(
      name: "William's School For Fishies",
      business_type: 'aquarium',
      street_address: '64 Duplicate Drive',
      city: 'New York',
      zip: 13245,
      state: 'NY'
    )

    freddys_aquarium = Business.create!(
      name: "Freddy's Fancy Fish",
      business_type: 'aquarium',
      street_address: '64 Demonic Drive',
      city: 'New York',
      zip: 11111,
      state: 'NY'
    )

    mays_seafood = Business.create!(
      name: "May's Seafood Shop",
      business_type: 'food', #auto
      street_address: 'The Planet Cybertron',
      city: 'Tron',
      zip: 99999,
      state: 'Cyber'
    )

    bens_seafood = Business.create!(
      name: "Ben's Baked Fish",
      business_type: 'food',
      street_address: '123 ABC Street',
      city: 'New York',
      zip: 54321,
      state: 'NY'
    )

    paytons_pier = Business.create!(
      name: "Payton's Perfect Pier",
      business_type: 'pier', #bar
      street_address: '2005 Flobots Avenue',
      city: 'New York',
      zip: 15243,
      state: 'NY'
    )

    ronnys_pier = Business.create!(
      name: "Ronny's Regular Pier",
      business_type: 'pier',
      street_address: '77 Food Bar Lane',
      city: 'New York',
      zip: 11651,
      state: 'NY'
    )

    kats_pier = Business.create!(
      name: "Kat's Krazy Pier",
      business_type: 'pier',
      street_address: ' 9876 Applejack Place',
      city: 'New York',
      zip: 12543,
      state: 'NY'
    )

    #Attaching Photos

    puts 'Attaching Photos...'

    hans_file = URI.open('https://kelpfsp-seeds.s3.amazonaws.com/Aqaurium.jpg')
    hans_aquarium.photo.attach(io: hans_file, filename: "aquarium.jpg")

    daniels_file = URI.open('https://kelpfsp-seeds.s3.amazonaws.com/aquarium2.jpg')
    daniels_aquarium.photo.attach(io: daniels_file, filename: "aquarium.jpg")

    freddys_file = URI.open('https://kelpfsp-seeds.s3.amazonaws.com/aquarium3.jpg')
    freddys_aquarium.photo.attach(io: freddys_file, filename: "aquarium.jpg")

    williams_file = URI.open('https://kelpfsp-seeds.s3.amazonaws.com/aquarium4.jpg')
    williams_aquarium.photo.attach(io: williams_file, filename: "aquarium.jpg")

    mays_file = URI.open('https://kelpfsp-seeds.s3.amazonaws.com/pier57.jpg')
    mays_seafood.photo.attach(io: mays_file, filename: "aquarium.jpg")

    bens_file = URI.open('https://kelpfsp-seeds.s3.amazonaws.com/pier97.jpg')
    bens_seafood.photo.attach(io: bens_file, filename: "aquarium.jpg")

    paytons_file = URI.open('https://kelpfsp-seeds.s3.amazonaws.com/seafood1.jpg')
    paytons_pier.photo.attach(io: paytons_file, filename: "aquarium.jpg")

    ronnys_file = URI.open('https://kelpfsp-seeds.s3.amazonaws.com/seafood2.jpg')
    ronnys_pier.photo.attach(io: ronnys_file, filename: "aquarium.jpg")

    kats_file = URI.open('https://kelpfsp-seeds.s3.amazonaws.com/Aqaurium.jpg')
    kats_pier.photo.attach(io: kats_file, filename: "aquarium.jpg")

    puts 'adding Reviews...'

    Review.create!(
      business_id: 1,
      user_id: 1,
      body: "Han's Aquarium was an amazing experience! I've never felt more IMMERSED in the world of ocean life until my experience here :)"
    )

    Review.create!(
      business_id: 1,
      user_id: 3,
      body: "One of the fish kept looking at my child and I funny. Had to spend half of the day consoling my child, somebody needs to teach these fish some proper respect. Will not be returning."
    )
  
    Review.create!(
      business_id: 1,
      user_id: 7,
      body: "Was visiting NYC and I heard I just HAD to go visit this aquarium. No regrets, one of the most memorable parts of the trip."
    )

    Review.create!(
      business_id: 7,
      user_id: 7,
      body: "I love this business! Very hip!"
    )

    Review.create!(
      business_id: 5,
      user_id: 6,
      body: "I'm allergic to fish and seawater, did NOT have a good time"
    )

    puts "Done!"

  end