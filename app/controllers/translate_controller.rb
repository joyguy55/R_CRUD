class TranslateController < ApplicationController
  before_action :set_translate, only: [:show, :edit, :update, :destroy]

  def index
    @translations = Translate.all
  end

  def show
    @translate = Translate.find params[:id]
    @allval = @translate.value
  end

  def new
    @translate = Translate.new
  end

  def create
    @translate = Translate.new params[:translate]
    if @translate.save
      redirect_to :action => 'show', :id => @translate.id
    else
      render :action => 'new'
    end
  end

  def destroy
    @translate = Translate.find params[:id]
    @translate.destroy
  end

  def edit
    @translate = Translate.find params[:id]
  end

  def update
    respond_to do |format|
      if @translate.update(translate_params)
        format.html { redirect_to @translate, notice: 'Status was successfully updated.' }
        format.json { render :show, status: :ok, location: @translate }
      else
        format.html { render :edit }
        format.json { render json: @status.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    def set_translate
      @translate = Translate.find(params[:id])
    end

    def translate_params
      params.require(:translate).permit(:key, :value)
    end
  end

  # def filter
  #   result = @translatations.select do |search|
  # end
