class CreateAmpleAdminPages < ActiveRecord::Migration[5.1]
  def change
    create_table :ample_admin_pages do |t|
      t.string :title
      t.string :meta_keywords
      t.string :meta_description
      t.string :nav_name
      t.string :permalink
      t.string :template_filename
      t.string :ancestry
      t.integer :ancestry_depth, default: 0
      t.integer :created_by
      t.integer :updated_by
      t.text :body
      t.text :blocks
      t.integer :sort_order, default: 0
      t.boolean :active, default: false
      t.datetime :active_at
      t.datetime :inactive_at
      t.boolean :no_follow
      t.timestamps
    end
    add_index :ample_admin_pages, :permalink
  end
end
