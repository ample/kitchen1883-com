require 'azure/storage'

module Kitchen1883
  class Sitemap

    attr_accessor :client, :blobs, :filename

    def initialize(storage_access_key: nil, filename: 'sitemap.xml')
      @filename = filename
      @client = Azure::Storage::Client.create({
        storage_account_name: 'kitchen1883',
        storage_access_key: storage_access_key
      })
      @blobs = @client.blob_client
    end

    def run
      create
      upload
    end

    def create
      SitemapGenerator::Sitemap.filename = File.basename(@filename, '.xml').intern
      SitemapGenerator::Interpreter.run(config_file: File.join(Rails.root, 'config/sitemap.rb'), verbose: false)
    end

    def upload
      opts = {
        content_type: 'text/xml'
      }
      @blobs.create_block_blob(get_container_name, @filename, get_sitemap_contents, opts)
    end

    private

      def get_container_name
        "kitchen1883-#{::Rails.env}"
      end

      def get_sitemap_contents(dir='tmp')
        file = File.join(Rails.root, dir, @filename)
        File.open(file, 'rb') { |f| f.read }
      end

  end
end