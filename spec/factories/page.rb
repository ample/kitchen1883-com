FactoryGirl.define do

    factory :page, :class => AmpleAdmin::Page do
      title 'Something'
      active true
      sequence(:permalink){|n| "permalink-#{n}" }
    end

  end