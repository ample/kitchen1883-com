require 'rexml/document'

desc 'Combine all SVG icons into a single SVG'
task :build_svg do
  icons_dir = Rails.root.join('app', 'assets', 'images', 'icons')

  svg_content = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\
<svg width=\"256px\" height=\"256px\" viewBox=\"0 0 256 256\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">"

  Dir.glob("#{icons_dir}/*.svg").each do |file|
    doc = Nokogiri::XML(File.read(file))
    icon_name = doc.css('#Page-1 > g')[0]['id']
    content = doc.css('#Page-1 g').to_s
    svg_content += "<svg width=\"256px\" height=\"256px\" viewBox=\"0 0 256 256\" id=\"#{icon_name}\">\
  #{content.gsub(/[id]+=\"[a-zA-Z0-9\-\#]+\"/, '')}\
</svg>"
  end
  svg_content += '</svg>'

  icons_file = Rails.root.join('app', 'assets', 'images', 'icons.svg')



  doc = REXML::Document.new(svg_content)
  output = ''
  doc.write(output, 2)

  File.open(icons_file, 'w+') { |file| file.write(output.to_s) }
end
