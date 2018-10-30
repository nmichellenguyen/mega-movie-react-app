a = ''
b = '\n'.join(iter(input, a))
i = 0
for i in range(len(b.split('\n'))):
    if b.split('\n')[i] != '':
        i += 1
print(i)
