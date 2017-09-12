module Public::ImagesHelper

  def icon(name, options = {})
    classes  = "icon icon-#{name} #{options[:size]} "
    classes += (options[:class]).to_s
    content_tag(:svg, class: classes, 'viewBox': '0 0 256 256') do
      href = "#{image_path('icons.svg')}##{name}"
      content_tag(:use, nil, 'xlink:href': href, 'xmlns:xlink': 'http://www.w3.org/1999/xlink')
    end
  end

end
