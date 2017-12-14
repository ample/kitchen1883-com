require 'rails_helper'
require 'kitchen1883/sitemap'

describe Kitchen1883::Sitemap do

  before do
    # NOTE – this key is no longer valid. If you need to regenerate the VCR cassette
    # you'll need to grab a valid key from Azure first.
    key = 'q2WLndzXVquCgyTLZDSqVOhH446N5amJ6FFozD/fidd7kCAMzJ/PC7rczYYqS8vmnzUyIlzBeVdNs73YdK+izQ=='

    @filename = 'sitemap-test.xml'
    @sitemap = Kitchen1883::Sitemap.new(storage_access_key: key, filename: @filename)
  end

  it 'should return container name' do
    expect(@sitemap.send(:get_container_name)).to eq('kitchen1883-test')
  end

  it 'should create the sitemap.xml file in /tmp' do
    path = File.join(::Rails.root, 'tmp', @filename)
    FileUtils.rm(path) if File.exists?(path)
    expect(File.exists?(path)).to be_falsey
    @sitemap.create
    expect(File.exists?(path)).to be_truthy
  end

  it 'should upload the sitemap.xml file to Azure' do
    VCR.use_cassette('azure/sitemap') do
      blob = @sitemap.run
      expect(blob).to be_a(Azure::Storage::Blob::Blob)
    end
  end

end