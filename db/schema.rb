# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170816013704) do

  create_table "ample_admin_attachables", force: :cascade do |t|
    t.string "alt_text"
    t.string "owner_type"
    t.integer "owner_id"
    t.integer "attachment_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ample_admin_attachments", force: :cascade do |t|
    t.string "keywords"
    t.string "alt_text"
    t.string "file_file_name"
    t.string "file_content_type"
    t.integer "file_file_size"
    t.datetime "file_updated_at"
    t.text "file_meta"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ample_admin_features", force: :cascade do |t|
    t.string "title"
    t.string "permalink"
    t.text "blocks"
    t.string "feature_type"
    t.string "owner_type"
    t.string "region"
    t.integer "owner_id"
    t.integer "sort_order", default: 0
    t.string "ancestry"
    t.integer "ancestry_depth", default: 0
    t.boolean "active", default: false
    t.datetime "active_at"
    t.datetime "inactive_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ample_admin_links", force: :cascade do |t|
    t.string "title"
    t.string "href"
    t.string "icon"
    t.string "target"
    t.string "linkable_type"
    t.string "link_type", default: "Link"
    t.string "klass"
    t.string "ancestry"
    t.integer "ancestry_depth", default: 0
    t.integer "linkable_id"
    t.integer "menu_id"
    t.integer "sort_order", default: 0
    t.boolean "active"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ample_admin_menus", force: :cascade do |t|
    t.string "title"
    t.string "position"
    t.string "klass"
    t.boolean "display_title", default: false
    t.boolean "active", default: false
    t.integer "sort_order", default: 0
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ample_admin_pages", force: :cascade do |t|
    t.string "title"
    t.string "meta_keywords"
    t.string "meta_description"
    t.string "nav_name"
    t.string "permalink"
    t.string "template_filename"
    t.string "ancestry"
    t.integer "ancestry_depth", default: 0
    t.integer "created_by"
    t.integer "updated_by"
    t.text "body"
    t.text "blocks"
    t.integer "sort_order", default: 0
    t.boolean "active", default: false
    t.datetime "active_at"
    t.datetime "inactive_at"
    t.boolean "no_follow"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["permalink"], name: "index_ample_admin_pages_on_permalink"
  end

  create_table "ample_admin_posts", force: :cascade do |t|
    t.string "title"
    t.string "permalink"
    t.text "body"
    t.integer "sort_order", default: 0
    t.boolean "active", default: false
    t.datetime "active_at"
    t.datetime "inactive_at"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["permalink"], name: "index_ample_admin_posts_on_permalink"
  end

  create_table "ample_admin_publishes", force: :cascade do |t|
    t.string "owner_type"
    t.integer "owner_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ample_admin_revisions", force: :cascade do |t|
    t.string "item_type", null: false
    t.integer "item_id", null: false
    t.string "event", null: false
    t.string "whodunnit"
    t.text "object"
    t.datetime "created_at"
    t.index ["item_type", "item_id"], name: "index_ample_admin_revisions_on_item_type_and_item_id"
  end

  create_table "ample_admin_settings", force: :cascade do |t|
    t.string "owner_type"
    t.integer "owner_id"
    t.string "permalink"
    t.string "key"
    t.string "value"
    t.string "group"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "ample_admin_social_accounts", force: :cascade do |t|
    t.string "service"
    t.string "link"
    t.string "icon"
    t.boolean "active"
    t.integer "sort_order"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
