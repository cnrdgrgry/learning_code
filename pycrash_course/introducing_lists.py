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
print('\n3.3 Your Own List\n- - - - - -')

my_list = ['Grappler', '520', 'ISO', 'Krampus', 'Stache']
print('my list = ' + str(my_list))
message = f'my first bicycle was a {my_list[1]}, gravel bike.'
print(message)
print(f'I\'d really like a {my_list[-3]}, but I\'d settle for an {my_list[0]}.')

#If youu could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you'd like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.'
print('\n3.4 Guest List\n- - - - - -')
guest_list = ['Cookie Monster', 'Bert', 'Ernie', 'Forest Gump']

print(f'Dear {guest_list[0]}, please come to my party.')
print(f'Dear {guest_list[1]}, please come to my party.')
print(f'Dear {guest_list[2]}, please come to my party.')
print(f'Dear {guest_list[3]}, please come to my party.')
