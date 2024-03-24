def find_longest_word(sentence):
    words = sentence.split()
    
    longest_word = ""
    max_length = 0
    
    for word in words:
        if len(word) > max_length:
            longest_word = word
            max_length = len(word)
    
    return longest_word

sentence = "Saya sangat senang mengerjakan soal algoritma"
longest_word = find_longest_word(sentence)
print(f'input:' + sentence)
print(f"Kata terpanjang adalah '{longest_word}' dengan {len(longest_word)} character")
