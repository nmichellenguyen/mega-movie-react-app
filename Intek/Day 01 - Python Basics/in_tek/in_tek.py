n = int(input())
for i in range(1, n+1):
    if i % (9 * 5) == 0:
        print('Intek')
    elif i % 5 == 0:
        print('In')
    elif i % 9 == 0:
        print('Tek')
    else:
        print(i)
