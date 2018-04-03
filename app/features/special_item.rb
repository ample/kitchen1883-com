AmpleAdmin::FeatureDefinition.define do
  factory :special_item do
    attribute :region, nil
    attribute :day, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    attribute :description, :text
    attribute :attachment, :image
    attribute :alt_text, :string
  end
end

module Features
  class SpecialItem < AmpleAdmin::FeatureDecorator
    def image_path(size='original')
      if media = @feature.blocks[:attachment].try(:attachment)
        media.file.path(size)
      end
    end
  end
end