# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  name            :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

	validates :email, presence: true, uniqueness: true
	validates :password_digest, presence: true
	validates :session_token, presence: true, uniqueness: true
	validates :password, length: {minimum: 6, allow_nil: true}

	after_initialize :ensure_session_token
	attr_reader :password

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return nil unless user
		user.is_password?(password) ? user : nil
	end

	def password=(password)
		@password = password
		self.password_digest = BCrypt::Password.create(password)
	end

	def is_password?(password)
		password_object = BCrypt::Password.new(password_digest)
		password_object.is_password?(password)
	end

	def reset_session_token!
		self.session_token = SecureRandom::urlsafe_base64
		self.save!
		self.session_token
	end

	def ensure_session_token
		self.session_token ||= SecureRandom::urlsafe_base64
	end

end
