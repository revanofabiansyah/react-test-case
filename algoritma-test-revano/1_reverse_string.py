def reverse_alpha_chars(string):
    result = ''
    alpha_chars = ''
    
    for char in string:
        if char.isalpha():
            alpha_chars += char
    
    reversed_alpha_chars = alpha_chars[::-1]
    
    alpha_index = 0
    for char in string:
        if char.isalpha():
            if char.islower():
                result += reversed_alpha_chars[alpha_index].lower()
            else:
                result += reversed_alpha_chars[alpha_index].upper()
            alpha_index += 1
        else:
            result += char
    
    return result

input_string = "NEGIE1"
reversed_string = reverse_alpha_chars(input_string)
print('input: ' + input_string)
print('output: ' + reversed_string)
