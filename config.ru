require 'rack'
require 'rack/contrib/try_static'

# Serve files from the build directory
use Rack::TryStatic,
  root: 'build',
  urls: %w[/],
  try: ['.html', 'index.html', '/index.html']

run lambda{ |env|
  four_oh_four_page = File.expand_path("build/404.html", __FILE__)
  if File.exist?(four_oh_four_page)
    [ 404, { 'Content-Type'  => 'text/html'}, [File.read(four_oh_four_page)] ]
  else
    [ 404, { 'Content-Type'  => 'text/html' }, ['404 - page not found'] ]
  end
}