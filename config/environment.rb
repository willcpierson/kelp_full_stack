# Load the Rails application.
require_relative "application"

# Initialize the Rails application.
Rails.application.initialize!

# Turn responses to camelCase
Jbuilder.key_format camelize: :lower
Jbuilder.deep_format_keys true

#adjust for syntax issue from frontend to backend