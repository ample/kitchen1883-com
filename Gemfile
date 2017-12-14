source 'https://rubygems.org'

ruby '2.3.1'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

# ---------------------------------------- | Base

gem 'rails', '~> 5.1.3'

gem 'pg'
gem 'puma', '~> 3.7'

# ---------------------------------------- | Assets

gem 'autoprefixer-rails'
gem 'bootstrap'
gem 'coffee-rails', '~> 4.2'
gem 'font-awesome-sass', '~> 4.7.0'
gem 'imgix-rails'
gem 'jquery-rails'
gem 'popper_js'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'azure-storage'

# ---------------------------------------- | Utilities

# gem 'ample_admin', path: File.join(File.dirname(__FILE__), '../ample_admin')
gem 'ample_admin', git: 'https://kitchen1883:5950a043d18cd58a875bcfbde6a16875476b8c6e@github.com/ample/ample_admin.git'
gem 'dalli'
gem 'devise'
gem 'figaro'
gem 'jbuilder', '~> 2.5'
gem 'paperclip-azure', '~> 1.0'
gem 'rollbar'
gem 'sprig', '~> 0.3.0', git: 'https://github.com/vigetlabs/sprig.git'
gem 'sitemap_generator', '~> 5.2.0'

group :staging, :production do
  gem 'heroku-deflater'
  gem 'rails_12factor'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

# ---------------------------------------- | Testing / Debugging

group :development, :test do
  gem 'pry-rails'
  gem 'rspec-rails', '>= 3.5.0'
end

group :test do
  gem 'capybara', '~> 2.13'
  gem 'database_cleaner'
  gem 'factory_girl_rails'
  gem 'guard-rspec'
  gem 'launchy'
  gem 'poltergeist', git: 'https://github.com/ample/poltergeist.git'
  gem 'selenium-webdriver'
  gem 'shoulda-matchers', require: false
  gem 'vcr'
  gem 'webmock'
end
