class CreateAmpleAdminAttachments < ActiveRecord::Migration[5.1]
  def change
    create_table :ample_admin_attachments do |t|
      t.string :keywords
      t.string :alt_text
      t.attachment :file
      t.text :file_meta
      t.timestamps
    end
    add_column :ample_admin_pages, :attachment_id, :integer
  end
end
