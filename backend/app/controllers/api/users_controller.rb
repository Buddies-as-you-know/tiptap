class Api::UsersController < ApplicationController
  def create
  end

  def show
    @user = User.find_by(params[:id])

    render "api/user/show.json.jb"
  end
end
