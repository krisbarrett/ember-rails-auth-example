class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :body
end