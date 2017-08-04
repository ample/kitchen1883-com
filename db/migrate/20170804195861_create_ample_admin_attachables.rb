class CreateAmpleAdminAttachables < ActiveRecord::Migration[5.1]
  def up
    create_table :ample_admin_attachables do |t|
      t.string :alt_text
      t.string :owner_type
      t.integer :owner_id
      t.integer :attachment_id
      t.timestamps
    end
    remove_column :ample_admin_pages, :attachment_id
  end
  def down
    add_column :ample_admin_pages, :attachment_id, :integer
    drop_table :ample_admin_attachables
  end
end
