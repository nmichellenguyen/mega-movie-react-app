def order_words(array):
    array = input()
    newArray = []
    for word, drow in array:
        if len(word) == len(drow):
            newArray = newArray.append(word).append(drow)
            



