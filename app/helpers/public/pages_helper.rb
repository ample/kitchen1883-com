module Public::PagesHelper

  def current_social_accounts
    Rails.cache.fetch('social_accounts') do
      AmpleAdmin::SocialAccount.all
    end
  end

  def menu_link(link, position:nil, children:nil)
    classes = [link.icon]
    if link.computed_href.remove('/') == params[:permalink] ||
       (link.is_root? && children.any? {|x| x.computed_href.remove('/') == params[:permalink] }) ||
       (link.is_root? && request.path == '/' && link.computed_href == '/')
      classes.push('active')
    end
    classes.push('nav-link')
    content = link.computed_title
    unless children.empty?
      content += '&nbsp;<i class="fa fa-sort-desc" aria-hidden="true"></i>'
      classes.push('dropdown-toggle')
      data = { toggle: 'dropdown' }
    end
    link_to content.html_safe, link.computed_href, target: link.target || '_self', class: classes.join(' '), data: data || nil
  end

  def global_nav
    @global_nav ||= begin
      Rails.cache.fetch('global_nav') do
        AmpleAdmin::Menu.includes(:links).where(ample_admin_links: { ancestry: nil }).active.in_position(:global)[0]
      end
    end
  end

  def current_subnav
    @current_nav_items ||= begin
      Rails.cache.fetch([current_object, 'subnav']) do
        if current_object.has_children?
          current_object.children
        else
          current_object.siblings
        end
      end
    end
  end

  def current_parent
    @current_parent ||= begin
      Rails.cache.fetch([current_object, 'parent']) do
        if current_object.has_parent?
          current_object.parent
        else
          current_object
        end
      end
    end
  end

  def bg_img(options = {})
    return if current_object.try(:attachment).blank?
    img_url = ix_image_url(
      current_object.attachment.file.path(:jumbotron),
      auto: 'format,compress'
    )
    "style=\"background-image: url('#{img_url}')\"".html_safe
  end

  def fallback(value, *fallbacks)
    return value if value.present?
    fallbacks.each { |fallback| return fallback if fallback.present? }
    nil
  end

  def template_filename
    return unless defined?(current_object)
    current_object.try(:template).try(:filename)
  end

end
