class Linter 
  attr_reader :error  
  
  OPENING_BRACE = ["(", "[", "{"] 
  CLOSING_BRACE = [")", "]", "}"]
  OPENING_BRACE_DICT = {
    ")" => "(",
    "]" => "[",
    "}" => "{"
  }  

  def initialize
    @stack = []
  end
  
  def lint(text)
    text.each_char.with_index do |char, index|
      if opening_brace?(char)
        @stack.push(char)
      elsif closing_brace?(char)
        if closes_most_recent_opening_brace?(char)
          @stack.pop
        else 
          @error = "Incorrect closing brace: #{char} at #{index}"              
          return
        end
      end
    end    
    @error = "#{@stack.last} does not have a closing brace" if @stack.any?
  end          

  
  

private
  def closing_brace?(char)
    CLOSING_BRACE.include?(char)
  end
  
  def opening_brace?(char)
    OPENING_BRACE.include?(char)            
  end

  def opening_brace_of(char)
   OPENING_BRACE_DICT[char]
  end 

  def most_recent_opening_brace 
    @stack.last
  end

  def closes_most_recent_opening_brace?(char)
    opening_brace_of(char) == most_recent_opening_brace
  end               
end

linter = Linter.new
linter.lint("( var x = { y: [1, {1: 1}, {1}], } )")
puts linter.error
linter2 = Linter.new
linter2.lint("( var x = { y: [1, 2, 3] ) }")
puts linter2.error

linter3 = Linter.new
linter3.lint("( var x = { y: [1, 2, 3] }")
puts linter3.error