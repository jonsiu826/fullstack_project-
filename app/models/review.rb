class Review < ApplicationRecord
    validates :description, :rating, :product_id, :user_id, presence: true


    belongs_to :product,
        foreign_key: :product_id,
        class_name: :Product

    belongs_to :user_id,
        foreign_key: :user_id,
        class_name: :User 

end