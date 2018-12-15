def insertion_sort arr
        
    #outer loop (each or for)
    arr.each_with_index do |element, index|
        position = index    
        
    #nested shift and comparison conditional loop (i.e. while)
        while position > 0 and arr[position - 1] > element
            arr[position] = arr[position - 1]
            position -= 1                 
        end

    #drop the temp value into the gap (position)
        arr[position] = element
    end
end

#python version
# def insertion_sort(array):
#   for index in range(1, len(array)):
#     position = index
#     temp_value = array[index]

#   while position > 0 and array[position - 1] > temp_value:
#     array[position] = array[position - 1]
#     position = position - 1
#   array[position] = temp_value










very_small_random_array = 10.times.map { rand(30) }
# puts very_small_random_array.inspect

# puts (insertion_sort very_small_random_array).inspect

very_big_random_array = 10000.times.map { rand(20) }
# # 10,000,000,000
# insertion_sort very_big_random_array

p very_big_random_array
sorted_very_big_array = very_big_random_array.sort
almost_sorted_array = sorted_very_big_array + [2,1]
p almost_sorted_array
puts "sorted"

p (insertion_sort almost_sorted_array)

puts "done"