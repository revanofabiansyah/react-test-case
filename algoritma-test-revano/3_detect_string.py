def count_words_in_input(input_list, query_list):
    result = []

    word_count = {}
    for word in input_list:
        word_count[word] = word_count.get(word, 0) + 1

    for query in query_list:
        count = word_count.get(query, 0)
        if count == 0:
            result.append(f"Kata '{query}' tidak ada pada INPUT")
        elif count == 1:
            result.append(f"Kata '{query}' terdapat 1 pada INPUT")
        else:
            result.append(f"Kata '{query}' terdapat {count} pada INPUT")
    return result

INPUT = ['xc', 'dz', 'bbb', 'dz']
print(f"Input : {INPUT}")
QUERY = ['bbb', 'ac', 'dz']
print(f"Query : {QUERY}")
output = count_words_in_input(INPUT, QUERY)
for item in output:
    print(item)
