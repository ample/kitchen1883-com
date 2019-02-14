module Public::StructuredDataHelper

  def menu_structured_data
    AmpleAdmin::Page.find_by(template_filename: 'menu').children.live
      .collect { |m|
        {
          '@type': 'Menu',
          name: m.title,
          url: request.base_url + m.hierarchy_permalink
        }
      }
      .to_json.html_safe
  end

  def menu_item_structured_data
    menu = []
    current_object.features_by_type(types: %w[header menu_item]).each do |f|
      case f.type
      when 'header'
        menu << { '@type': 'MenuSection', name: f.title, hasMenuItem: [] }
      when 'menu_item'
        if menu.empty?
          menu << { '@type': 'MenuSection', name: 'All', hasMenuItem: [] }
        end
        menu.last[:hasMenuItem] << {
          '@type': 'MenuItem',
          name: f.title,
          description: f.description,
          suitableForDiet: [
            f.vegan.to_bool ? 'http://schema.org/VeganDiet' : nil,
            f.gluten_free.to_bool ? 'http://schema.org/GlutenFreeDiet' : nil
          ].compact,
          offers: {
            '@type': 'offer',
            price: f.price.try(:to_f),
            priceCurrency: 'USD'
          }
        }
      end
    end
    menu.to_json.html_safe
  end

  def restaurant_image_url
    ix_image_url(AmpleAdmin::Page.find_by(permalink: 'index').attachment.file.path)
  end

  def restaurant_prices
    @restaurant_prices ||= AmpleAdmin::Feature.where(feature_type: 'menu_item').collect{ |f| f.blocks.price.to_s.to_f.round }.uniq.sort
  end

  def restaurant_price_range
    "$#{restaurant_prices.first} - $#{restaurant_prices.last}"
  end

end
