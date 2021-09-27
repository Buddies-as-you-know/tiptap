class Api::ThemesController < ApplicationController
  def index
    sorted_theme_ids = Room.order('sum_counts desc').group(:theme_id).sum(:counts).keys
    @themes = Theme.find(sorted_theme_ids)
    @themes = @themes.select { |t| t.name.include? params[:name] } if params[:name]
    @themes = @themes[0, 99]

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
