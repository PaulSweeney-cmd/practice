"""The old pond,
A frog jumps in:
Plop!
"""
# ! Python Syntax - PRINT STATEMENTS
# ? allows the programme to have a conversation with the user
# ? python-2 syntax print statements have no parentheses, in python-3 they do

print('Hello and welcome back')

# ! Python Syntax - STRINGS
# ? strings contain letters, numbers and symbols in a specific order
# ? strings are basically text
# ? strings can be encased in either single or double quotes

# ? you can also use an escaper if you needed to use another single quote
print('I am a string written with an escaper in paul\'s example')

# * Combining or 'concatenating' strings
print("This string has been " + "concatenated")

# * EOL error (End Of Line) - EOL while scanning a string literal
# ? Python interpreter expected a particular character or set of characters

# * NameError
# ? Python doesnt recognise the command due to it not being defined anywhere

# ! Python Syntax - VARIABLES
# ? Defining things that are subject to change
# ? they are case sensitive
# ? They always include an underscore

# ! Python Syntax - UPDATING VARIABLES

DAYS_WORKED = 6
PARCELS_DELIVERED = 150

# * updating the variable to calculate how many parcels in total were delivered
DAYS_WORKED *= PARCELS_DELIVERED
print(DAYS_WORKED)

# ! Python Syntax - ARITHMATIC
# ? Operators + / * -
# ? MODULO OPERATOR (%) = returns a remainder after the division
# ? **(to the power of) = 3 ** 4 is 3 multiplied by itself 4 times

# ! Python Syntax - NUMBERS
# ? Variables can hold one of two numbers, FLOAT AND INTEGER
# ? Floats can be declared by adding a decimal t the end of an integer too
# ? You can define a float using scientific notation by adding e2:

POWER_OF_TEN_FLOAT = 1.5e2  # * 1.5 to the power of 10 (e2) = 150
print(POWER_OF_TEN_FLOAT)

# ! Python Syntax - TWO TYPES OF DIVISION
# ? you can divide numbers using conventional /
# ? you can add a decimal if you were dividing uneven numbers to get a float:

DIVIDE_FLOAT_ONE = 7/2
print(DIVIDE_FLOAT_ONE)
DIVIDE_FLOAT_TWO = 7/2.
print(DIVIDE_FLOAT_TWO)

QUOTIENT = float(10/3)
print(QUOTIENT)

# ! Python Syntax - DATA CONVERSION
# ? Methods to convert a data type are as follows

# ? EXAMPLE - converting a string to use the value in an arithmatic operation
FLOAT_DATA_TYPE = "2.1"
UPDATED_DATA_TYPE = float(FLOAT_DATA_TYPE)
print(FLOAT_DATA_TYPE)

# ? EXAMPLE - converting a string to use the value in an arithmatic operation
INTEGER_DATA_TYPE = "100"
UPDATED_INTEGER_DATA_TYPE = int(INTEGER_DATA_TYPE)
print(INTEGER_DATA_TYPE)

# ? EXAMPLE - conveerting a floating point number to an integer
# ? this will round the integer down to the number closer towards 0
FLOAT_TO_INTEGER = 22.5
UPDATED_FLOAT_TO_INTEGER = int(FLOAT_TO_INTEGER)
print(UPDATED_FLOAT_TO_INTEGER)  # prints 22

# ? EXAMPLE - converting an integer to a string to combine with another string
STRING_DATA_TYPE = 100
UPDATED_STRING_DATA_TYPE = str(STRING_DATA_TYPE)
print(STRING_DATA_TYPE)

# ? If you use int() on a float string value, it will raise a ValueError

FLOAT_1 = 0.25
FLOAT_2 = 40.0

PRODUCT = float(FLOAT_1) * float(FLOAT_2)
BIG_STRING = "The cost of the product was £" + str(PRODUCT) + "0"
print(BIG_STRING)

# ! Strings and console output - DATA AND TIME

# importing a library to retrieve the current date & time
from datetime import datetime

# using the datetime.now function to retrieve the data
NOW = datetime.now()
print(NOW)

# breaking down the data to what you need
print(NOW.day)
print(NOW.month)
print(NOW.year)

# placing the data in to placeholders in a string
# ? 02d pads the day and month to two decimal places starting at 0
# ? 04d pads the year to 4 plcaes
# ? These decimal places can vary depending on what data you want to display
print("%02d/%02d/%04d" % (NOW.day, NOW.month, NOW.year))

# ! Conditionals and Control Flow - Truthy or Falsy
# ? Conditionals and control flow is to access the outcome of a condition

# ! Conditionals and Control Flow - Boolean operators
# ? NOT = gives the opposite condition of the statement - gets evaluated first
# ? AND = checks if both statements are true - gets evaluated next
# ? OR = checks if at least one of the statements is true - gets evaluated last


# * not False  # returns True
# * True and not True  # returns False
# * False or not False  # returns True

# ! Conditionals and Control Flow - Conditional statements

VALUE_ONE = 10
VALUE_TWO = 'Hello'

if VALUE_ONE == 10 or VALUE_TWO == 'Hello':
    print('Good job')
else:
    print('Bad job!')


# ? using a conditional stement in a function


def stating_true():
    '''a function to return a truthy result'''
    if 22 - 10 == 12:
        print('This is true')
    else:
        print('This un-true')


def stating_true_again():
    '''a function to return a truthy result'''
    if 10 % 3 == 1:
        print('This is also true')
    else:
        print('This is also un-true')


stating_true()
stating_true_again()


def func_with_args(result):
    '''a function with params and args'''
    if result > 10:
        print('This is the first number')
    elif result > 12:
        print('This is the second answer')
    else:
        print('There was no result')


func_with_args(10)

# ! PygLatin - input('a string')
# ? input accepts a string, prints it and then waits for the user to type


def users_input():
    '''a function to allow a user to enter a name'''
    enter_a_string = input('Hello, please enter your name: ')
    if len(enter_a_string) > 0:
        print('Paul')
    else:
        print('No name entered')


users_input()

# # ! PygLatin - .isalpha()
# # ? .isalpha checks whether a given string contains alphabetic characters only


def check_alpha_character():
    '''a function to check alphabetic characters in a string'''
    new_string = input('Hello, please enter your location: ')
    new_location = new_string
    if len(new_string) > 0 and new_string.isalpha():
        print('Your location is ' + new_location)
    else:
        print('No result found')


check_alpha_character()

NEW_INPUT = input('Hello, please enter your name: ')
NEW_LOCATION = input('Please enter your location: ')

if len(NEW_INPUT) > 0:
    # using index notation to slice the first letter off each word
    NAME = NEW_INPUT[1:len(NEW_INPUT)]
    CITY = NEW_LOCATION[1:len(NEW_LOCATION)]
    print('Your name is, ' + NAME + ' and you\'re from ' + CITY + '.')
else:
    print('Not found.')


# ! PygLatin - translating to Pig Latin
# ? Rules for translation - move the first letter of the word to the end
# ? Rules for translation - you then add the ay suffix to the end
