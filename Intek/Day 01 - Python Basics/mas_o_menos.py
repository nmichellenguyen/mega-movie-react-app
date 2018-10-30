result = int(input('What is the result? '))
print("OK, let's begin")
counter = 10
for i in range(10):
    guess = int(input('Your guess? (' + count +' left) ')
    counter = counter - 1
    if counter == 5:
        guess = int(input('Your guess? (Half way done) ')
    if counter == 0:
        guess = int(input('Your guess? (Last guess) ')
        if guess == result:
            print('Congrats !')
            return
        elif guess < result:
            if result - guess > 50:
                print("It's way more")
            else:
                print("It's more")
        else:
            if guess - result > 50:
                print("It's way less")
            else:
                print("It's less")
