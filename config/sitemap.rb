SitemapGenerator::Sitemap.default_host = "https://www.kitchen1883.com"
SitemapGenerator::Sitemap.compress = false
SitemapGenerator::Sitemap.public_path = 'tmp/'

SitemapGenerator::Sitemap.create do
  AmpleAdmin::Page.live.find_each do |page|
    add page.hierarchy_permalink, :lastmod => page.updated_at
  end
end
