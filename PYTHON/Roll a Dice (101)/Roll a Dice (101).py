import random

print("Do you want to roll the dice?")
response = str(input("Press 'y' for Yes and 'n' for No -> "))

while response == 'y':
    d = random.randint(1, 6)

    if d == 1:
        print('-------')
        print('|     |')
        print('|  0  |')
        print('|     |')
        print('-------')
    elif d == 2:
        print('-------')
        print('|0    |')
        print('|     |')
        print('|    0|')
        print('-------')
    elif d == 3:
        print('-------')
        print('|0    |')
        print('|  0  |')
        print('|    0|')
        print('-------')
    elif d == 4:
        print('-------')
        print('|0   0|')
        print('|     |')
        print('|0   0|')
        print('-------')
    elif d == 5:
        print('-------')
        print('|0   0|')
        print('|  0  |')
        print('|0   0|')
        print('-------')
    elif d == 6:
        print('-------')
        print('|0   0|')
        print('|0   0|')
        print('|0   0|')
        print('-------')

    print("Do you want to roll the dice again?")
    response = str(input("Press 'y' to roll the dice again and 'n' to exit -> "))

if response == 'n':
    print("Thank you for rolling the dice")