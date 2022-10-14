# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

ApplicationRecord.transaction do 
    puts "Destroying tables..."
    # Unnecessary if using `rails db:seed:replant`
    User.destroy_all
  
    puts "Resetting primary keys..."
    # For easy testing, so that after seeding, the first `User` has `id` of 1
    ApplicationRecord.connection.reset_pk_sequence!('users')
  
    puts "Creating users..."
    # Create one user with an easy to remember username, email, and password:
    User.create!(
      email: 'demo@user.io',
      first_name: "Demo",
      last_name: "Man",
      zip: 22222 ,
      password: 'password'
    )
  
    # More users
    10.times do 
      User.create!({
        email: Faker::Internet.unique.email,
        first_name: 'Willard',
        last_name: 'Pillard',
        zip: 12345,
        password: 'password'
      }) 
    end

    Business.create!(
      name: "Han's Pizza",
      description: "New York's worst pizza",
      outdoor_seating: true,
      business_type: 'food',
      delivery: true,
      takeout: true,
      street_address: '123 Pizza Place',
      city: 'New York',
      zip: 11111,
      state: 'NY'
    )
    Business.create!(
      name: "Daniel's Pizza",
      description: "New York's best pizza. BONKERS good",
      business_type: 'food',
      outdoor_seating: true,
      delivery: true,
      takeout: true,
      street_address: '321 AppleJuice Lane',
      city: 'New York',
      zip: 11111,
      state: 'NY'
    )
    Business.create!(
      name: "William's Auto Repair",
      description: 'Mr. President will fix your car now',
      business_type: 'auto',
      outdoor_seating: false,
      delivery: false,
      takeout: false,
      street_address: '64 Duplicate Drive',
      city: 'New York',
      zip: 13245,
      state: 'NY'
    )

    Business.create!(
      name: "Freddy's Pizza",
      description: "New York's  second best pizza",
      business_type: 'food',
      outdoor_seating: true,
      delivery: true,
      takeout: true,
      street_address: '64 Demonic Drive',
      city: 'New York',
      zip: 11111,
      state: 'NY'
    )

    Business.create!(
      name: "May's Autobot Factory",
      description: "Are Autobots cars?",
      business_type: 'auto',
      outdoor_seating: false,
      delivery: false,
      takeout: false,
      street_address: 'The Planet Cybertron',
      city: 'Tron',
      zip: 99999,
      state: 'Cyber'
    )

    Business.create!(
      name: "Ben's Bike Shop",
      description: "Cars are overrated, buy a bike!",
      business_type: 'auto',
      outdoor_seating: false,
      delivery: false,
      takeout: false,
      street_address: '123 ABC Street',
      city: 'New York',
      zip: 54321,
      state: 'NY'
    )

    Business.create!(
      name: "Handle's Bar",
      description: "Bet you can't ride a bike without these",
      outdoor_seating: false,
      business_type: 'bar',
      delivery: false,
      takeout: false,
      street_address: '2005 Flobots Avenue',
      city: 'New York',
      zip: 15243,
      state: 'NY'
    )

    Business.create!(
      name: "Bar Be Queue",
      description: "Long line, but worth for the drinks and food!",
      business_type: 'bar',
      outdoor_seating: true,
      delivery: false,
      takeout: false,
      street_address: '77 Food Bar Lane',
      city: 'New York',
      zip: 11651,
      state: 'NY'
    )

    Business.create!(
      name: "Seedy Sam's",
      description: "Watermelon, Apple, you name it we got it",
      business_type: 'food',
      outdoor_seating: true,
      delivery: true,
      takeout: true,
      street_address: ' 9876 Applejack Place',
      city: 'New York',
      zip: 12543,
      state: 'NY'
    )
  
    puts "Done!"
  end