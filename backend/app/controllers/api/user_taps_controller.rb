class Api::UserTapsController < ApplicationController
  before_action :authenticate_api_user!

  def create
    UserTap.create(user_taps_params)
    room = Room.find(params[:room_id])
    counts = params[:counts].to_i
    room.update(counts: room.counts + counts)
    current_api_user.update(counts: current_api_user.counts + counts)
    room.update(enthusiastic_close_time: Time.current.to_i + 60) if is_enthusiastic?(room)
  end

  private

  def user_taps_params
    params.permit(:room_id, :counts).merge(user_id: current_api_user.id)
  end

  def is_enthusiastic?(room)
    current_user_taps_num = UserTap.where(room_id: room.id, created_at: Time.current.ago(30.seconds)..Time.current).count
    current_user_taps_num > 90
  end
end
