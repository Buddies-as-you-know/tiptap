class Api::UsersController < ApplicationController
  before_action :authenticate_api_user!

  def myinfo
    @user = current_api_user

    render "api/user/myinfo.json.jb"
  end
end
