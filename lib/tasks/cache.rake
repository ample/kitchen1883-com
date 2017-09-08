namespace :kitchen1883 do
  namespace :cache do

    desc 'Clear site cache'
    task clear: :environment do |t, args|
      ActionController::Base.cache_store.clear
    end

  end
end
