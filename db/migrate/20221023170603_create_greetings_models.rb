class CreateGreetingsModels < ActiveRecord::Migration[7.0]
  def change
    create_table :greetings_models do |t|
      t.string :message

      t.timestamps
    end
  end
end
