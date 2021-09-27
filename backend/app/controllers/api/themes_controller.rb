class Api::ThemesController < ApplicationController
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
    params.permit(:user_id, :name, :rooms_num, :close_time)
  end
end
