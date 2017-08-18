AmpleAdmin::FeatureDefinition.define do
  factory :header do
    attribute :body, :text
    attribute :region, nil
  end
end

module Features
  class Header < AmpleAdmin::FeatureDecorator

  end
end