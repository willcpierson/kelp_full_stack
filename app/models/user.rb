class User < ApplicationRecord
  has_secure_password

  before_validation :ensure_session_token

  validates :email, :session_token, uniqueness: true
  validates :email, length: { in: 4..255 }
  validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :password, length: { in: 8..50 }, allow_nil: true
  validates :session_token, presence: true

  def self.find_by_credentials(credential, password)

    if URI::MailTo::EMAIL_REGEXP.match(credential)
      user = User.find_by(email: credential)
    end

    if user&.authenticate(password)
      user
    else
      nil
    end

  end

  def generate_unique_session_token

    new_session_token = false

    while !new_session_token || User.exists?(session_token: new_session_token)
      new_session_token = SecureRandom.urlsafe_base64
    end

    return new_session_token
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end

  def reset_session_token!
    def reset_session_token!
      self.session_token = generate_unique_session_token
      self.save!
      self.session_token
    end
  end

end
