class Api::SessionsController < ApplicationController
  before_action :require_logged_in, only: [:destroy];
  def show
    if current_user
      @user = current_user
      render "api/users/show"
    else
      render json: {user: nil}
    end
  end

  def create
    @user = User.find_by_credentials(
      params[:credential],
      params[:password])

    p @user #test
    if @user
      login!(@user)
       render "api/users/show" 
    else
      render json: { errors: ['The email address or password you entered is incorrect']}, status: :unauthorized
    end
  end

  def destroy
    logout!
    render json: { message: 'Success!' }
  end
end
