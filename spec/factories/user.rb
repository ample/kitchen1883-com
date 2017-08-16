FactoryGirl.define do

    factory :user do
      first_name 'John'
      last_name 'Doe'
      sequence(:email) { |n| "john#{n}@somewhere.com" }
      password 'something'
      password_confirmation 'something'
    end

  end