def factorial(number)
    if number == 1
         1
    else
        x = number * factorial(number -1)
    end
end

puts factorial 5