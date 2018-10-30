sizeOfSquare = int(input())
fiveCharacters = input()
if sizeOfSquare == 1:
    print(fiveCharacters[0])
elif sizeOfSquare > 1:
    topRow = fiveCharacters[0] + fiveCharacters[1]*(sizeOfSquare-2) + fiveCharacters[0]
    print(topRow)
    for character in range(0, sizeOfSquare-2):
        midRow = fiveCharacters[3] + ' '*(sizeOfSquare - 2) + fiveCharacters[4]
        print(midRow)
    botRow = fiveCharacters[0] + fiveCharacters[2]*(sizeOfSquare - 2) + fiveCharacters[0]
    print(botRow)
else:
    print('Invalid Value')
