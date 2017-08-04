class CreateAmpleAdminFeatures < ActiveRecord::Migration[5.1]
  def change
    create_table :ample_admin_features do |t|
      t.string :title
      t.string :permalink
      t.text :blocks
      t.string :feature_type
      t.string :owner_type
      t.string :region
      t.integer :owner_id
      t.integer :sort_order, default: 0
      t.string :ancestry
      t.integer :ancestry_depth, default: 0
      t.boolean :active, default: false
      t.datetime :active_at
      t.datetime :inactive_at
      t.timestamps
    end
  end
end
