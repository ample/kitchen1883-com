class CreateAmpleAdminPosts < ActiveRecord::Migration[5.1]
  def change
    create_table :ample_admin_posts do |t|
      t.string :title, :permalink
      t.text :body
      t.integer :sort_order, default: 0
      t.boolean :active, default: false
      t.datetime :active_at
      t.datetime :inactive_at
      t.timestamps
    end
    add_index :ample_admin_posts, :permalink
  end
end
