
pyramizSize = int(input('What pyramid size do you want?\n'))
if pyramizSize > 1:
    for row in range(0, (pyramizSize+1)//2):
        numOfSpace = ' '*((pyramizSize-(2*row+1))//2)
        print(numOfSpace + '#'*(2*row + 1) + numOfSpace)
elif pyramizSize == 1:
    print('#')
else:
    print()
