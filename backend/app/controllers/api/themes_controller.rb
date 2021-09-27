class Api::ThemesController < ApplicationController
  before_action :authenticate_api_user!, only: [:create, :show]
  def index
    sorted_theme_ids = Room.order('sum_counts desc').group(:theme_id).sum(:counts).keys
    @themes = Theme.find(sorted_theme_ids)
    @themes = @themes.select { |t| t.name.include? params[:name] } if params[:name]
    @themes = @themes[0, 99]

    render "api/theme/index.json.jb"
  end

  def show
    @theme = Theme.find(params[:id])
    @rooms = @theme.rooms
    @rooms.each do |room|
      #user_room_total_tapsはroom attr_accessorに持たせたい
      @user_room_total_taps = UserTap.where(user_id: 1, room_id: 1).sum(:counts)
      # room.user_room_total_taps = UserTap.find_by(user_id: current_api_user.id, room_id: room.id).sum(:counts)
    end
    # if Time.now < @theme.close_time
    #   @rooms = @theme.rooms
    render "api/theme/show.json.jb"
  end

  def create
    @theme = Theme.create(theme_params.except(:duration))
    @theme.update(close_time: @theme.created_at.to_i + params[:duration].to_i)
    params[:rooms].each do |room_param|
      Room.create({theme_id: @theme.id, name: room_param[:name]})
    end
    @rooms = @theme.rooms
    render "api/theme/create.json.jb"
  end

  private

  def theme_params
    params.permit(:name, :rooms_num, :duration).merge(user_id: current_api_user.id)
  end

end
