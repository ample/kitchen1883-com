AmpleAdmin::FeatureDefinition.define do
  factory :menu_item do
    attribute :region, nil
    attribute :description, :text
    attribute :vegan, :boolean
    attribute :gluten_free, :boolean
    attribute :price, :string
  end
end

module Features
  class MenuItem < AmpleAdmin::FeatureDecorator

  end
end