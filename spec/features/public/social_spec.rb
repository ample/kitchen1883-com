require 'rails_helper'

describe 'A user' do

  before do
    @page = create(:page)
  end

  context 'sharing a page on social media' do

    before do
    end

    it 'should see the jumbotron as the OG image' do
      @page.attachment = create(:attachment)
      visit @page.hierarchy_permalink
      expect(page).to have_meta('og:image', imgix_url(@page.jumbotron(:og)))
    end

    it 'should see logo as the default OG image' do
      visit @page.hierarchy_permalink
      expect(page).to have_meta('og:image', "http://app.example.com#{ActionController::Base.helpers.image_path('og_logo.png')}")
    end

  end

  def imgix_url(path)
    "https://#{ENV['IMGIX_SOURCE']}#{path}?ixlib=rails-2.1.4&auto=format%2Ccompress"
  end

end