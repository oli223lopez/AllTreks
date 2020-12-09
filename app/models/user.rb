# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null

# require 'bcrypt'
#

class User < ApplicationRecord

    validates :username, :email, :session_token, :password_digest, presence: true
    validates :session_token, uniqueness: true
    validates :email, uniqueness: true
    validates :username, uniqueness: true
    validates :password, length: {minimum: 6}, allow_nil: true

    attr_reader :password

    after_initialize :ensure_session_token
   

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email) 

        if @user && @user.is_password?(email)
            @user
        else
            nil
        end
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end
    

    def is_password?(password)
        BCrypt::Password.new(self.password_digest) == password
    end

    def reset_session_token
        self.session_token = SecureRandom.urlsafe_base64 
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end

end