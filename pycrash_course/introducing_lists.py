#!/usr/bin/python3

#3.1 Names: Store the names of a few of your friends in a list. print each person's name by accessing each element in the list, one at a time.
print('\nExcercises for Chapter 3; Introducting Lists')

print('\n3.1 Names \n- - - - - -')

names = ['Richard', 'John', 'Peter', 'Paul']
print(names[0])
print(names[1])
print(names[2])
print(names[-1])

#3.2 Greetings: Start with the list you used in 3.1, but instead of just printing each person's name, print a message to them. Each message should be personalized with the persons name.
print('\n3.2 Greetings \n- - - - - -')

names = ['Richard', 'John', 'Peter', 'Paul']
print('Hello ' + names[0] + ', how are you doing today?')
print('Alright ' + names[1] + ', you\'re looking well!')
print(names[2] +'! Get off the floor!')
print('Good afternoon '+ names[-1] + '.')

#3.3 Your Own List: Think of your favourite mode of transportation, and make a list that stores several examples. use your list to print a serires of statements about these items, such as 'I would like to own a ...'
