class CreateAmpleAdminRevisions < ActiveRecord::Migration[5.1]
  def change
    create_table :ample_admin_revisions do |t|
      t.string   :item_type, :null => false
      t.integer  :item_id,   :null => false
      t.string   :event,     :null => false
      t.string   :whodunnit
      t.text     :object
      t.datetime :created_at
    end
    add_index :ample_admin_revisions, [:item_type, :item_id]
  end
end
