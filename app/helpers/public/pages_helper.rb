module Public::PagesHelper

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

  def render_feature(type)
    features = current_object.features_by_type(types: type).sort_by(&:id)
    render partial: "public/features/#{type}", collection: features
  end

end
