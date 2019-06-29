class Piece
  attr_reader :val, :color

  def initialize(color, val)
    @val = val
    @color = color
  end

  def to_symbol
    if @color == :black 
      @val.red 
    else
      @val.blue
    end
  end 

end
