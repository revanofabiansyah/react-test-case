def diagonal_difference(matrix):
    primary_sum = 0
    secondary_sum = 0
    
    for i in range(len(matrix)):
        primary_sum += matrix[i][i]
        secondary_sum += matrix[i][len(matrix) - i - 1]
    
    result = primary_sum - secondary_sum
    
    print("Input Matrix =", matrix)
    print(f"Hasil pengurangan diagonal: {result}")
    print("Diagonal pertama =", "+".join(str(matrix[i][i]) for i in range(len(matrix))), "=", primary_sum)
    print("Diagonal kedua =", "+".join(str(matrix[i][len(matrix) - i - 1]) for i in range(len(matrix))), "=", secondary_sum)
    print(f"Maka hasilnya adalah {primary_sum} - {secondary_sum} = {result}")
    return result

matrix = [[1, 2, 0], [4, 5, 6], [7, 8, 9]]

result = diagonal_difference(matrix)
