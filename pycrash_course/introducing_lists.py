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

#You just heard that one of your guests can't make the dinner, so you need to send out a new set of invitations. You'll have to think of someone else to invite.'
print('\n3.5 Changing Guest List\n- - - - - -')

guest_list = ['Cookie Monster', 'Bert', 'Ernie', 'Forest Gump']
print(f'Dear {guest_list[0]}, please come to my party.')
print(f'Dear {guest_list[1]}, please come to my party.')
print(f'Dear {guest_list[2]}, please come to my party.')
print(f'Dear {guest_list[3]}, please come to my party.')

#add a print at the end of the last program stating the name of the guest who can't make it.
print(f'\nOh dear, it looks like {guest_list[3]} is busy and can\'t make it. That\'s a shame.')
guest_list[3] = 'The Count (ah ah ah ...)'
print(guest_list)

#Print a secocnd set of invitation messages, one for each person who is still in your list.
print(f'Dear {guest_list[0]}, please come to my party.')
print(f'Dear {guest_list[1]}, please come to my party.')
print(f'Dear {guest_list[2]}, please come to my party.')
print(f'Dear {guest_list[3]}, please come to my party.')

#3.6 You just found a bigger dinner table, so now more space is available, Think of three more guests to invite to dinner.
print('\n3.6 More Guests\n- - - - - -')
#Start with your program from previous eercise. Add a print() call to the end of your program, informing people that you found a bigger table.
print(f'Hey {guest_list[0]}, I\'ve found a bigger table so we can have a bigger party! Awesome.')
print(f'Hey {guest_list[1]}, I\'ve found a bigger table so we can have a bigger party! Awesome.')
print(f'Hey {guest_list[2]}, I\'ve found a bigger table so we can have a bigger party! Awesome.')
print(f'Hey {guest_list[3]}, I\'ve found a bigger table so we can have a bigger party! Awesome.')
#Use insert() to add one new guest to the beginning of your list.``
guest_list.insert(0, 'Danger Mouse')
print(guest_list)
#Use insert() to add one new guest list to the middle of your list.
guest_list.insert(2, 'Rick')
print(guest_list)
#Use append() to add a new guest to the end of your list.
guest_list.append('Dwayne "The Rock" Johnson')
print(guest_list)
#Print out a new set of invitations, one for each guest.
print(f'Hey {guest_list[0]}, please will you still come to me biggerer and betterer party?')
print(f'Hey {guest_list[1]}, please will you still come to me biggerer and betterer party?')
print(f'Hey {guest_list[2]}, please will you still come to me biggerer and betterer party?')
print(f'Hey {guest_list[3]}, please will you still come to me biggerer and betterer party?')
print(f'Hey {guest_list[4]}, please will you still come to me biggerer and betterer party?')
print(f'Hey {guest_list[5]}, please will you still come to me biggerer and betterer party?')
print(f'Hey {guest_list[6]}, please will you still come to me biggerer and betterer party?')

print('\n3.7 Shrinking Guest List\n- - - - - -')
#You just found out that your new dinner table won't arrive in time for dinner. so now you only have space for 2 guests.
#Start with your programe from 3.6 and add a new line that prints a message saying you can only invite 2 people to dinner.
print('Sorry, all, but my new table won\'t arrive in time so I\'ll only be able to have 2 of you over.')
print('')
#Use pop() to remove guests from your list one at a time until only two names remain in yoru list. Each time you pop a name from your list, print a message to that person letting them knowyou're sorry and can't invite them to dinner.

first_out = guest_list.pop(6)
print(f'Sorry {first_out}, but I can now only have 2 people to dinner, and you\'re just not cool enough any more!')
second_out = guest_list.pop(0)
print(f'Sorry {second_out}, but I can now only have 2 people to dinner, and you\'re just not cool enough any more!')
third_out = guest_list.pop(1)
print(f'Sorry {third_out}, but I can now only have 2 people to dinner, and you\'re just not cool enough any more!')
fourth_out = guest_list.pop(3)
print(f'Sorry {fourth_out}, but I can now only have 2 people to dinner, and you\'re just not cool enough any more!')
print('')

#Print a message to each of the last two people on your list, letting them know they are still invited.
print(f'Hey {guest_list [0]}, don\'t worry, you\'re obviously the coolest of the cool and can still come to play at my party!')
print(f'Hey {guest_list [1]}, don\'t worry, you\'re obviously the coolest of the cool and can still come to play at my party!')
print('')
#Use del to remove the last two names from your list so it's empty. Print your list to make sure you actually have an empty list at the end.
del guest_list[0]
del guest_list[0]
del guest_list[0]
print(guest_list)

print('\n3.8 Seeing The World\n- - - - - -')
# Think of at least five places in the world you'd like to visit.
#Store the locations in a list and make sure they're not in alphabetical order.

places_to_go = ['canada', 'iceland', 'norway', 'finland', 'kenya', 'australia']
print(places_to_go)

#Use sorted() to print your list in alphabetical order without modifying the actual list
print(sorted(places_to_go))

#Show that your list is still in its original order by printing it again.
print(places_to_go)

#Use reverse() to change the order of your list again. Print the list to show it's back to its original order.
places_to_go.reverse()
print(places_to_go)

#Use revers() again to put the list back to its original order, print the list again to make sure.
places_to_go.reverse()
print(places_to_go)

#Use sort() to orginaise your list in alphabetical order, then print it to show the order has been changed.
places_to_go.sort()
print(places_to_go)

#Use sort() to change your list so it's stored in reverse-alphabetical order.
#Print the list to show that its order has changed.
places_to_go.sort(reverse=True)
print(places_to_go)

print('\n3.9 Dinner Guests\n- - - - - -')
#Working with one of the programs from 3.4-3.7 above, use len() to print a message indicating the number of people 
#you're inviting to dinner.

guest_list = ['Cookie Monster', 'Bert', 'Ernie', 'Forest Gump']
print(f'There are {len(guest_list)} guests coming to dinner today')

