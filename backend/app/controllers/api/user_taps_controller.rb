class Api::UserTapsController < ApplicationController
  before_action :authenticate_api_user!

  def create
    UserTap.create(user_taps_params)
    room = Room.find(params[:room_id])
    counts = params[:counts].to_i
    room.update(counts: room.counts + counts)
    current_api_user.update(counts: current_api_user.counts + counts)
  end

  private

  def user_taps_params
    params.permit(:room_id, :counts).merge(user_id: current_api_user.id)
  end
end