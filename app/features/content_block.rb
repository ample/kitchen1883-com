AmpleAdmin::FeatureDefinition.define do
  factory :content_block do
    attribute :body, :text
    attribute :region, nil
  end
end

module Features
  class ContentBlock < AmpleAdmin::FeatureDecorator

  end
end