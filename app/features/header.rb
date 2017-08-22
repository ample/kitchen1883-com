AmpleAdmin::FeatureDefinition.define do
  factory :header do
    attribute :body, :text
    attribute :content_tag, ['H2', 'H3', 'H4']
    attribute :region, nil
  end
end

module Features
  class Header < AmpleAdmin::FeatureDecorator

  end
end