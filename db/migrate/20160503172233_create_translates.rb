class CreateTranslates < ActiveRecord::Migration
  def change
    create_table :translates do |t|
      t.string :key
      t.string :value

      t.timestamps null: false
    end
  end
end
