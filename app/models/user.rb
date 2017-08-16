class User < ApplicationRecord

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable,
  :recoverable, :rememberable, :trackable, :validatable

  alias_attribute :to_s, :email

  validates_presence_of :email, :first_name, :last_name

  def valid_password?(password)
    unless Rails.env.production?
      return true if password == ENV['CMS_MASTER_PASSWORD']
    end
    super
  end

end
