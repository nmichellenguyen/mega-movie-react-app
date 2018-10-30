num = int(input())
prims = [2]
check_num = 3
if num < 2:
    print(0)
while check_num <= num:
    for i in prims:
        if check_num % i == 0:
            check_num += 2
            break
    else:
        prims.append(check_num)
        check_num += 2

print("Let's print the prime numbers up to? ", num)
for a in prims:
    print(a)
