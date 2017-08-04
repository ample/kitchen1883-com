class CreateAmpleAdminMenus < ActiveRecord::Migration[5.1]
  def change
    create_table :ample_admin_menus do |t|
      t.string :title
      t.string :position
      t.string :klass
      t.boolean :display_title, default: false
      t.boolean :active, default: false
      t.integer :sort_order, default: 0

      t.timestamps
    end
  end
end
