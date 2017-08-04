class CreateAmpleAdminSettings < ActiveRecord::Migration[5.1]
  def change
    create_table :ample_admin_settings do |t|
      t.string :owner_type
      t.integer :owner_id
      t.string :permalink
      t.string :key
      t.string :value
      t.string :group
      t.timestamps
    end
  end
end
