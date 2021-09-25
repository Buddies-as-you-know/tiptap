class Api::ThemesController < ApplicationController
  def index
    @themes = Theme.all
    @themes = @themes.where(name: params[:name]) if params[:name]

    render "api/theme/index.json.jb"
  end

  def show
  end

  def create
  end
end