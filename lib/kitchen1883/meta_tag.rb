module Kitchen1883
  class MetaTag
    include ActionView::Helpers::TagHelper

    attr_accessor :key, :value, :object

    def initialize(obj)
      @object = obj
      @key = @object[:key]
      @value = @object[:value]
    end

    def to_s
      attr = 'name'
      attr = 'property' if @key =~ /^(og|fb):/
      "<meta #{attr}=\"#{@key}\" content=\"#{@value}\" />".html_safe
    end
  end
end