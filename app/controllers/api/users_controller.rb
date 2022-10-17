class Api::UsersController < ApplicationController
  
  wrap_parameters include: User.attribute_names + ['password', 'firstName', 'lastName'] # add camelCase words here that are added to DB

  def create
    @user = User.new(user_params)
    print @user
    if @user.save!
      login!(@user)
      render :show  #   same as api/views/show
    else
      render json: { errors: @user.errors.full_messages }, status: :unprocessable_entity #change to url later? TBD
    end
  end

  def index
    @users = User.all

    render json: @users
  end

  def show
      @user = User.find(params[:id])

      render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name, :zip)
  end

end
