require 'kitchen1883/sitemap'

namespace :kitchen1883 do
  namespace :sitemap do

    desc 'Create sitemap'
    task create: :environment do |t, args|
      sitemap = Kitchen1883::Sitemap.new(storage_access_key: ENV['AZURE_STORAGE_ACCESS_KEY'])
      sitemap.run
    end

  end
end
