FactoryGirl.define do

    factory :attachment, :class => AmpleAdmin::Attachment do
      file File.open(File.join(Rails.root, 'app/assets/images/fpo.jpg'))
    end

  end