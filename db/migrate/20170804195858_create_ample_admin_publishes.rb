class CreateAmpleAdminPublishes < ActiveRecord::Migration[5.1]
  def change
    create_table :ample_admin_publishes do |t|
      t.string :owner_type
      t.integer :owner_id
      t.timestamps
    end
  end
end
