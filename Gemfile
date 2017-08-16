source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.3'
gem 'sqlite3'
gem 'puma', '~> 3.7'
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'ample_admin', git: 'https://kitchen1883:5950a043d18cd58a875bcfbde6a16875476b8c6e@github.com/ample/ample_admin.git'

gem 'coffee-rails', '~> 4.2'
gem 'turbolinks', '~> 5'
gem 'jbuilder', '~> 2.5'

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
end

group :development, :test do
  gem 'rspec-rails', '>= 3.5.0'
  gem 'pry-rails'
end

group :test do
  gem 'factory_girl_rails'
  gem 'guard-rspec'
  gem 'database_cleaner'
  gem 'launchy'
  gem 'capybara', '~> 2.13'
  gem 'selenium-webdriver'
  gem 'poltergeist', git: 'https://github.com/ample/poltergeist.git'
  gem 'shoulda-matchers', require: false
  gem 'vcr'
  gem 'webmock'
end