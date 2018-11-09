package main

import (
	"fmt"
	"math/rand"
)

func makeUnsortedArray() {
	m1 := [100]int{}
	for i := 0; i < 100; i++ {
		m1[i] = rand.Int()
	}
	bubbleSort(m1)

}

func makeAlmostedSortedArray() {
	m1 := [100]int{}
	for i := 0; i < 98; i++ {
		m1[i] = i
	}
	m1[98] = 99
	m1[99] = 98
	fmt.Println("This is possibly a sorted array")
	result := bubbleSort(m1)
	fmt.Println(result)
}

func bubbleSort(input [100]int) [100]int {
	// n is the number of items in our list
	// n := 100
	swapped := true
	lengthOfN := len(input) - 1
	steps := 0
	for swapped {
		swapped = false
		for i := 0; i < lengthOfN; i++ {
			steps++
			if input[i] > input[i+1] {
				fmt.Println("Swapping")
				// swap values using Go's tuple assignment
				input[i], input[i+1] = input[i+1], input[i]
				swapped = true
			}
		}
		lengthOfN--	
	}
	fmt.Println(input)
	fmt.Println("Comparison steps:", steps)
	return input //make([]int, input)
}

func main() {
	fmt.Println("Hello Bubble Sort!!!")
	// makeUnsortedArray()
	makeAlmostedSortedArray()
}
