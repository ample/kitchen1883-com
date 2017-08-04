class CreateAmpleAdminLinks < ActiveRecord::Migration[5.1]
  def change
    create_table :ample_admin_links do |t|
      t.string :title
      t.string :href
      t.string :icon
      t.string :target
      t.string :linkable_type
      t.string :link_type, default: AmpleAdmin::Link::TYPES.first
      t.string :klass
      t.string :ancestry
      t.integer :ancestry_depth, default: 0
      t.integer :linkable_id
      t.integer :menu_id
      t.integer :sort_order, default: 0
      t.boolean :active
      t.timestamps
    end
  end
end
