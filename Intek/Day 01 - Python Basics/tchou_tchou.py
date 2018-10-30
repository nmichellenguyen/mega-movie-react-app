string0 = ' _________________________  '
string1 = ' ______________________>__  '
string2 = '|]||[]_[]_[]|||[]_[]_[]||[| '
string3 = '\==o-o======o-o======o-o==/'
n = int(input('What is the size of your train? '))
if n > 0:
    print(string0*(n-1) + string1  + '\n' + string2*n + '\n' + (string3 + '-')*(n-1) + string3)
elif n == 0:
    print('')
else:
    print('Dont be so nagative')
