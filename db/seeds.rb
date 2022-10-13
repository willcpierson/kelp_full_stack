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
      name: "Tony's Pizza",
      description: "New York's best pizza",
      food: true,
      auto: false,
      bar: false,
      outdoor_seating: true,
      delivery: true,
      takeout: true,
      street_address: '123 Pizza Place',
      city: 'New York',
      zip: 11111,
      state: 'NY'
    )
    Business.create!(
      name: "Daniel's Pizza",
      description: "New York's worst pizza",
      food: true,
      auto: false,
      bar: false,
      outdoor_seating: true,
      delivery: true,
      takeout: true,
      street_address: '321 AppleJuice Lane',
      city: 'New York',
      zip: 11111,
      state: 'NY'
    )
    Business.create!(
      name: "Freddy's Pizza",
      description: "New York's  second best pizza",
      food: true,
      auto: false,
      bar: false,
      outdoor_seating: true,
      delivery: true,
      takeout: true,
      street_address: '64 Demonic Drive',
      city: 'New York',
      zip: 11111,
      state: 'NY'
    )
  
    puts "Done!"
  end