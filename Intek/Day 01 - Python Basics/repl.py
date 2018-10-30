replString = input()
letter = 'aeiou'
for i in range(len(replString) + 1):
    if replString[0] in letter[0:4]:
        print(replString[1:4]*4)
    elif replString =='quit':
        break
    elif replString == 'ls' or replString == 'cat' or replString =='rev' or replString =='pwd':
        print('I know the command ', replString,' !!' )
    elif len(replString) == 6:
        print('My length is ', len(replString))
    elif



if the string you read is 'quit', you quit
if the length of string you read is 6, display My length is 6
if the first letter of the string is a, e, i, o or u, display 4 times the 2nde, 3rd and 4th letter of the string (see the example)
if the string is one of "ls", "cat", "rev" or "pwd", display I know the command XXX !! (replace XXX by the name of the command)
if the string starts with a 0 and doesn't end with a 9, display all the numbers present in the string
else do nothing
