class CreateAmpleAdminSocialAccounts < ActiveRecord::Migration[5.1]
  def change
    create_table :ample_admin_social_accounts do |t|
      t.string :service
      t.string :link
      t.string :icon
      t.boolean :active
      t.integer :sort_order

      t.timestamps
    end
  end
end
