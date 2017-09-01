AmpleAdmin::FeatureDefinition.define do
  factory :image do
    attribute :attachment, :image
    attribute :grid_width, :string
    attribute :grid_height, :string
    attribute :region, nil
  end
end

module Features
  class Image < AmpleAdmin::FeatureDecorator
    def image_path(size='original')
      if media = @feature.blocks[:attachment].try(:attachment)
        media.file.path(size)
      end
    end
  end
end