require 'rake'

AmpleAdmin::Publish.class_eval do

  # --------------------------------- Callbacks

  after_create do
    Kitchen1883Com::Application.load_tasks
    Rake::Task['kitchen1883:cache:clear'].execute()
  end

end
