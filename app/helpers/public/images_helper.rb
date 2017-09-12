module Public::ImagesHelper

  def icon_path(name)
    image_path("icons/#{name}")
  end

  def icon(name, options = {})
    classes  = "icon icon-#{name} color-#{options[:color]} #{options[:size]} "
    classes += (options[:class]).to_s
    content_tag(:svg, class: classes, 'viewBox': '0 0 32 32') do
      href = "#{image_path('icons.svg')}##{name}"
      content_tag(:use, nil, 'xlink:href': href, 'xmlns:xlink': 'http://www.w3.org/1999/xlink', height: '32', width: '32', 'data-img': icon_path("#{name}.png"))
    end
  end

end
