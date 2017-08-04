AmpleAdmin::FeatureDefinition.define do
  factory :media_object do
    attribute :body, :text
    attribute :link, :string
    attribute :attachment, :image
    attribute :region, nil
  end
end

module Features
  class MediaObject < AmpleAdmin::FeatureDecorator
    def image_url(size='original')
      if media = @feature.blocks[:attachment].try(:attachment)
        media.file.url(size)
      end
    end
  end
end