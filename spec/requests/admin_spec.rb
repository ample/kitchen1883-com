require "rails_helper"

describe "admin routes", type: :request do

  it 'should prevent unauthorized admin access' do
    admin_paths.each do |path|
      get path
      expect(response).to redirect_to('/users/sign_in')
    end
  end

  def admin_paths
    routes = Rails.application.routes.routes
    paths = routes.collect {|r| r.path.spec.to_s }
    paths.select do |path|
      path[0..6] == '/admin/'
    end.collect do |path|
      URI(path).path.split('/')[0..2].join('/')
    end.reject do |path|
      path[-10..path.length] == '(.:format)' || path == '/admin/templates'
    end.uniq
  end

end