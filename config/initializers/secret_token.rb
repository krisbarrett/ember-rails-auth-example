# Be sure to restart your server when you modify this file.

# Your secret key is used for verifying the integrity of signed cookies.
# If you change this key, all old signed cookies will become invalid!

# Make sure the secret is at least 30 characters and all random,
# no regular words or you'll be exposed to dictionary attacks.
# You can use `rake secret` to generate a secure secret key.

# Make sure your secret_key_base is kept private
# if you're sharing your code publicly.
App::Application.config.secret_key_base = 'ee4b61350eacfd8ab593376985bff44057675642d243df2dbe7035cdd9cba5402102bd8576294d15b8b671ea607c5e694c52df3e09ad3acd0693be70b650fb54'
