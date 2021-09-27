class Api::ThemesController < ApplicationController
  before_action :authenticate_api_user!
  def index
    @themes = Theme.all
    @themes = @themes.where('name like ?', "%#{params[:name]}%") if params[:name]

    render "api/theme/index.json.jb"
  end

  def show
  end

  def create
    @theme = Theme.create(theme_params)
    params[:rooms].each do |room_param|
      Room.create({theme_id: @theme.id, name: room_param[:name]})
    end
    @rooms = @theme.rooms
    render "api/theme/create.json.jb"
  end

  private

  def theme_params
    params.permit(:name, :rooms_num, :close_time).merge(user_id: current_api_user.id)
  end
end
