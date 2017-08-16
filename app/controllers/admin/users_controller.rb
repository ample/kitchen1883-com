class Admin::UsersController < AmpleAdmin::AdminController

  set_model User

  protected

    def object_params
      params.require(object_name).permit(:first_name, :last_name, :email, :password, :password_confirmation).tap do |p|
        p.reject! { |k,v| k.include?('password') && v.blank? }
      end
    end

end