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
      state: 'NY',
      lat: 40.766487,
      lng: -73.983467
    )
    daniels_aquarium = Business.create!(
      name: "Daniel's Aqua Party House",
      business_type: 'aquarium',
      street_address: '321 AppleJuice Lane',
      city: 'New York',
      zip: 11111,
      state: 'NY',
      lat: 40.753288,
      lng: -73.979601
    )
    williams_aquarium = Business.create!(
      name: "William's School For Fishies",
      business_type: 'aquarium',
      street_address: '64 Duplicate Drive',
      city: 'New York',
      zip: 13245,
      state: 'NY',
      lat: 40.760296,
      lng: -73.995682
    )

    freddys_aquarium = Business.create!(
      name: "Freddy's Fancy Fish",
      business_type: 'aquarium',
      street_address: '64 Demonic Drive',
      city: 'New York',
      zip: 11111,
      state: 'NY',
      lat: 40.743021,
      lng: -73.980637
    )

    mays_seafood = Business.create!(
      name: "May's Seafood Shop",
      business_type: 'food', #auto
      street_address: '987 Fish Lane',
      city: 'New York',
      zip: 99999,
      state: 'NY',
      lat: 40.734869,
      lng: -73.998457
    )

    bens_seafood = Business.create!(
      name: "Ben's Baked Fish",
      business_type: 'food',
      street_address: '123 ABC Street',
      city: 'New York',
      zip: 54321,
      state: 'NY',
      lat: 40.718238,
      lng: -73.995239
    )

    paytons_pier = Business.create!(
      name: "Payton's Perfect Pier",
      business_type: 'pier', #bar
      street_address: '2005 Flobots Avenue',
      city: 'New York',
      zip: 15243,
      state: 'NY',
      lat: 40.721237,
      lng: -74.013843
    )

    ronnys_pier = Business.create!(
      name: "Ronny's Regular Pier",
      business_type: 'pier',
      street_address: '77 Food Bar Lane',
      city: 'New York',
      zip: 11651,
      state: 'NY',
      lat: 40.733144,
      lng: -74.011828
    )

    kats_pier = Business.create!(
      name: "Kat's Krazy Pier",
      business_type: 'pier',
      street_address: ' 9876 Applejack Place',
      city: 'New York',
      zip: 12543,
      state: 'NY',
      lat: 40.705380,
      lng: -74.001440
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
      body: "Han's Aquarium was an amazing experience! I've never felt more IMMERSED in the world of ocean life until my experience here.
      walking through the underwater tunnels, seeing fish swim above our heads, truly an memory I will never forget.
      The concessions were definitely a little bit on the expensive side however. Cost $4 for a bottle of water!"
    )

    Review.create!(
      business_id: 2,
      user_id: 2,
      body: "To be honest I wasn't sure what to expect when I saw the sign for 'Daniel's Aqua Party House'... but I was
      not disappointed! Lots of festivities, hands on exhibits with the sea creatures, and a nifty little gift shop at the end
      of the tour! Pro Tip: Try the fish sticks in the dining area; a great taste for an even greater price!"
    )

    Review.create!(
      business_id: 3,
      user_id: 3,
      body: "This 'business' is terribly advertised. The name would lead you to believe this was a fish school, where you could
      teach your fish to do cool tricks and such, but in REALITY it's just a dingy little aquarium! Fish owners beware, security
        wouldn't even let me take my darling clown fish through. Will not be returning."
    )

    Review.create!(
      business_id: 5,
      user_id: 5,
      body: "I've been looking for a romantic seafood restaurant where I could take my fiance. A couple of friends recommended this
      hidden gem, and I'm happy to say I'll definitely be a regular from here on in! My husband got the popcorn shrimp, and I decided
      I would go with the seared lobster. We shared plates and loved both entrees. Can't wait to be back and try the rest of the food
      options, they look delicious!"
    )

    Review.create!(
      business_id: 6,
      user_id: 6,
      body: "I'm not a picky eater, and I've been known to have an iron stomach. But this 'restaurant', if you can call it that,
      has really tested the limits of what I can handle. My family of 5 and I have all had food poisoning since coming here, and it
      wasn't until halfway through the meal, when I had to use the restroom, did I notice the 'D' level grade they had for cleanliness,
      hidden behind the mini aquarium. I don't even know if that's legal. Any future newcomers, heed this warning and DO NOT SUPPORT THIS
      BUSINESS!"
    )

    Review.create!(
      business_id: 1,
      user_id: 3,
      body: "One of the fish kept looking at my child and I funny. Had to spend half of the day consoling my child,
       somebody needs to teach these fish some proper respect. Tried talking to management about their fish's horrible conduct (not professional)
       but they kept requesting that I 'leave the premises'. Will not be returning."
    )
  
    Review.create!(
      business_id: 1,
      user_id: 7,
      body: "Was visiting NYC and I heard I just HAD to go visit this aquarium. I've loved clown fish ever since I saw
      the movie 'Finding Nemo'. Thankfully they had a beautiful clown fish exhibit, hundreds of them! Made me feel like a kid again,
      very happy I chose to come here."
    )

    Review.create!(
      business_id: 7,
      user_id: 7,
      body: "I love this business! Very hip! There were traveling performers doing a show by the end of the pier,
      and my son was enamored by it! I though the carousel was the cherry on top, little Sally (my daughter) couldn't wait
      to get on, and thankfully the line wasn't too long! Will definitely be returning and telling my friends this is a MUST see
      attraction in New York!"
    )

    Review.create!(
      business_id: 5,
      user_id: 6,
      body: "I'm allergic to fish and seawater, did NOT have a good time."
    )

    puts "Done!"

  end