require_relative 'piece'
require_relative './modules/stepable'
require 'colorize'

class King < Piece 
  include Stepable 
  attr_accessor :val, :color

  def initialize(color, val)
    super(color, val) 
  end
  
end