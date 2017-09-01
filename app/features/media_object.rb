AmpleAdmin::FeatureDefinition.define do
  factory :media_object do
    attribute :body, :text
    attribute :link, :string
    attribute :attachment, :image
    attribute :header_above_image, :boolean
    attribute :small_image, :boolean
    attribute :region, nil
  end
end

module Features
  class MediaObject < AmpleAdmin::FeatureDecorator
    def image_path(size='original')
      if media = @feature.blocks[:attachment].try(:attachment)
        media.file.path(size)
      end
    end
  end
end