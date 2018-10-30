Player1 = input('Player 1? ' )
Player2 = input('Player 2? ' )
rps = ['rock', 'paper', 'scissors']
if Player1 not in rps or Player2 not in rps:
    print('Error.')
else:
    if Player1 == Player2:
        print('Draw')
    elif Player1 == rps[0]:
        if Player2 == rps[1]:
            print('Player 2 wins.')
        else:
            print('Player 1 wins.')
    elif Player1 == rps[1]:
        if Player2 == rps[2]:
            print('Player 2 wins.')
        else:
            print('Player 1 wins.')
    elif Player1 == rps[2]:
        if Player2 == rps[0]:
            print('Player 2 wins.')
        else:
            print('Player 1 wins.')
