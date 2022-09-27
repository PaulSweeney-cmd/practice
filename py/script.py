''' importing a module '''
from datetime import datetime
import math
# from math import sqrt
# from math import *
from random import randint


# ! PYTHON SYNTAX

# ! Print Statements
# allows the programme to have a conversation with the user
# Python2 syntax print statements have no parentheses, in Python3 they do

print('Hello and welcome back')

# ! Strings
# strings contain letters, numbers and symbols in a specific order
# strings are basically text
# strings can be encased in either single or double quotes

# you can also use an escaper if you needed to use another single quote
print('I am a string written with an escaper in paul\'s example')

# Combining or 'concatenating' strings
print("This string has been " + "concatenated")

# ! Errors

# * EOL error (End Of Line) - EOL while scanning a string literal
# Python Interpreter expected a particular character or set of characters
# It reached the end of the line when it tried to scan the string literal
# The string literals must be enclosed in single and double quotation marks.

# * NameError
# Python doesnt recognise the command due to it not being defined anywhere
# Occurs when you try to use a variable/function/module that doesn't exist

# * ValueError
# function receives an argument of the correct type but an inappropriate value
# occurs commonly in mathmatical operations

# ! Variables
# Defining things that are subject to change
# They are case sensitive
# They always include an underscore
# Python2 syntax = lowercase
# Python3 syntax = uppercase

# ! Updating Variables

DAYS_WORKED = 6
PARCELS_DELIVERED = 150

# updating the variable to calculate how many parcels in total were delivered
DAYS_WORKED *= PARCELS_DELIVERED
print(DAYS_WORKED)

# ! Arithmatic
# Operators + / * -
# MODULO OPERATOR (%) = returns a remainder after the division
# (to the power of) = 3 ** 4 is 3 multiplied by itself 4 times

# ! Numbers
# Variables can hold one of two numbers, FLOAT AND INTEGER
# Floats can be declared by adding a decimal to the end of an integer
# You can define a float using scientific notation by adding e2:

POWER_OF_TEN_FLOAT = 1.5e2  # 1.5 to the power of 10 (e2) = 150
print(POWER_OF_TEN_FLOAT)

# ! Two Types of Division
# you can divide numbers using conventional /
# you can add a decimal if you were dividing uneven numbers to get a float:

DIVIDE_FLOAT_ONE = 7/2
print(DIVIDE_FLOAT_ONE)
DIVIDE_FLOAT_TWO = 7/2.
print(DIVIDE_FLOAT_TWO)

QUOTIENT = float(10/3)
print(QUOTIENT)

# ! Data Conversion
# Methods to convert a data type are as follows

# EXAMPLE - converting a string to use the value in an arithmatic operation
FLOAT_DATA_TYPE = "2.1"
UPDATED_DATA_TYPE = float(FLOAT_DATA_TYPE)
print(FLOAT_DATA_TYPE)

# EXAMPLE - converting a string to use the value in an arithmatic operation
INTEGER_DATA_TYPE = "100"
UPDATED_INTEGER_DATA_TYPE = int(INTEGER_DATA_TYPE)
print(INTEGER_DATA_TYPE)

# EXAMPLE - conveerting a floating point number to an integer
# this will round the integer down to the number closer towards 0
FLOAT_TO_INTEGER = 22.5
UPDATED_FLOAT_TO_INTEGER = int(FLOAT_TO_INTEGER)
print(UPDATED_FLOAT_TO_INTEGER)  # prints 22

# EXAMPLE - converting an integer to a string to combine with another string
STRING_DATA_TYPE = 100
UPDATED_STRING_DATA_TYPE = str(STRING_DATA_TYPE)
print(STRING_DATA_TYPE)

# If you use int() on a float string value, it will raise a ValueError

FLOAT_1 = 0.25
FLOAT_2 = 40.0

PRODUCT = float(FLOAT_1) * float(FLOAT_2)
BIG_STRING = "The cost of the product was £" + str(PRODUCT) + "0"
print(BIG_STRING)

# ! Strings and console output

# ! DATA AND TIME

# importing a library to retrieve the current date & time
# * from datetime import datetime

# using the datetime.now function to retrieve the data
NOW = datetime.now()
print(NOW)

# breaking down the data to what you need
print(NOW.day)
print(NOW.month)
print(NOW.year)

# placing the data in to placeholders in a string
# 02d pads the day and month to two decimal places starting at 0
# 04d pads the year to 4 plcaes
# These decimal places can vary depending on what data you want to display

JLS_EXTRACT_VAR = "%02d/%02d/%04d"
print(JLS_EXTRACT_VAR % (NOW.day, NOW.month, NOW.year))

# ! Conditionals and Control Flow - Truthy or Falsy
# Conditionals and control flow is to access the outcome of a condition

# ! Conditionals and Control Flow - Boolean operators
# NOT = gives the opposite condition of the statement - gets evaluated first
# AND = checks if both statements are true - gets evaluated next
# OR = checks if at least one of the statements is true - gets evaluated last


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


# using a conditional stement in a function


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
# input accepts a string, prints it and then waits for the user to type


def users_input():
    '''a function to allow a user to enter a name'''
    enter_a_string = input('Hello, please enter your name: ')
    if len(enter_a_string) > 0:
        print('Paul')
    else:
        print('No name entered')


# users_input()

# ! PygLatin - .isalpha()
# .isalpha checks whether a given string contains alphabetic characters


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


# ! PygLatin - Translating to Pig Latin
# Rules for translation - move the first letter of the word to the end
# Rules for translation - you then add the ay suffix to the end


# ! Functions - Params & Args
# Can accept parameters and argumants
# Parameters are placeholders for arguments
# Inputs (or 'values') in to the functions are arguments

JLS_EXTRACT_VAR = "%d to the power of %d is %d."


def power(base, exponent):
    ''' A function to calculate the power '''
    result = base ** exponent
    print(JLS_EXTRACT_VAR % (base, exponent, result))


power(37, 4)


# ! Functions - FUNCTIONS CALLING FUNCTIONS

# * --------------------------------EXAMPLE ONE

def one_good_turn(num1):
    ''' Adds 1 to the argument in the function call '''
    return num1 + 1


print(one_good_turn(25))  # prints 26


def deserves_another(num1):
    ''' Calls the first function and carries
      on the calculation '''
    return one_good_turn(num1) + 2


print(deserves_another(25))  # prints 28

# * --------------------------------EXAMPLE TWO


def cube(num1):
    ''' calculating 10 to the power of 3 '''
    return num1 ** 3


print(cube(10))  # prints 1000 / 10 * 10 * 10


def by_three(num1):
    ''' passing in first function to produce a
    result based on outcome of conditional
    statement '''
    if num1 % 3 == 0:
        return cube(num1)
    else:
        return False


print(by_three(30))  # prints 27000 / 30 * 30 * 30

# ! Functions - MODULE IMPORTS (import math)
# A module (a file) contains definitions that include variables and functions
# Using the sqrt (square root) function from the math module

print(math.sqrt(25))

# ! Functions - FUNCTION IMPORTS (from math import sqrt)
# pulling a single function from a module is called a function import

# ! Functions - UNIVERSAL IMPORT (from math import *)

# a universal import is importing everything from a module
# this can be dangerous as everything gets imported and takes up space
# You may not need everything so just be specific on what you want to use
# This may lead to two functions with the same name and cause conflict

# ! Functions - BUILT IN FUNCTIONS
# Built in functions don't need importing

# - max() = returns the largest number
MAXIMUM = max(550, 456, 13456, 77)
print(MAXIMUM)

# - min() = returns the smallest number
MINIMUM = min(45, 657, 3, -1, 44)
print(MINIMUM)

# - abs() = returns the absolute value of a number
# - Takes only one argument
# - Takes the numbers distnce from zero
# - Always returns a positive value
ABSOLUTE = abs(-55)
print(ABSOLUTE)  # prints 55

# - type() = returns the type of data

print(type('hello'))  # <class 'str'>
print(type(44))  # <class 'int'>
print(type(10.5))  # <class 'float'>

# * --------------------------------


def hotel_cost(nights):
    '''
    A function to calculate the cost
    based on the amount of nights
    '''
    return 140 * nights


# prints 980
print(hotel_cost(7))

# * --------------------------------


def plane_ride_cost(city):
    '''
    A function to calculate the
    ticket cost for each destination
    '''
    if city == 'Charlotte':
        return 183
    elif city == 'Tampa':
        return 220
    elif city == 'Pittsburgh':
        return 222
    elif city == 'Los Angeles':
        return 475


# prints 220
print(plane_ride_cost('Tampa'))

# * --------------------------------


def rental_car_cost(days):
    '''
    Calculate the cost based on number of days the
    car is rented for and apply discounts if days
    are exceeded
    '''
    total = 40 * days
    if days >= 7:
        total -= 50
    elif days >= 3:
        total -= 20
    return total


# prints 180
print(rental_car_cost(5))

# * --------------------------------


def trip_cost(city, days, spending_money):
    '''
    Return all costs based
    on the calculations from each function
    '''
    return rental_car_cost(days) + hotel_cost(
      days - 1) + plane_ride_cost(city) + spending_money


# prints 1815
print(trip_cost('Los Angeles', 5, 600))

# ! Lists and Dictionaries -
# A data type used to store different pieces of information
# Lists have items - empty lists have ()
# Dictionaries have key : value pairs - empty dictionaries have {}

# ! Lists and Dictionaries - Indexing a single item in a list
LIST_ONE = 'Hellothisisasinglestring'

HELLO = LIST_ONE[:5]
print(HELLO)  # prints 'Hello'

THIS = LIST_ONE[5:9]
print(THIS)  # prints 'this

# ! Lists and Dictionaries - Indexing a list item
STRING_LIST = ['One', 'Two', 'Three', 'Four', 'Five']
BREAKDOWN_LIST = STRING_LIST[1:3]
print(BREAKDOWN_LIST)  # prints ['Two', 'Three']

# ! Lists and Dictionaries - Searching for an item in a list
ANIMALS = ["aardvark", "badger", "duck", "emu", "fennec fox"]
DUCK_INDEX = ANIMALS.index("duck")
print(DUCK_INDEX)  # assigns the index of 2 to the variable

# ! Lists and Dictionaries - Inserting an item in a list
ANIMALS.insert(DUCK_INDEX, 'Elephant')
print(ANIMALS)  # replaces 'duck' with 'elephant'

# ! Lists and Dictionaries - looping through each list item
my_list = [1, 9, 3, 8, 5, 7]

# this then multiplies each list item by 2
for number in my_list:
    print(2 * number)

# ! Lists and Dictionaries - Sorting through a list
# using te sort() method we can sort each item in alphabetical order

start_list = [5, 3, 1, 2, 4]
square_list = []

# iterating through each list item to perform an arithmatic operation
for number in start_list:
    # updating the empty list, multiplying each item by itself twice
    square_list.append(number ** 2)

square_list.sort()

print(square_list)
# [1, 4, 9, 16, 25]

# ! Lists and Dictionaries - Key : Value pairs
# here you can access the value by indexing the key
ANIMALS = {'Dog': 300, 'Cat': 301, 'Bird': 302, 'Turtle': 303}
print(ANIMALS['Cat'])

# ! Lists and Dictionaries - Adding a new dictionary entry
# an important thing to remember is dictionaries are mutable just like lists
# this means they can be changed after they're created

# creating an empty dictionary
DESTINATIONS = {}

# adding destinations and mileage
DESTINATIONS['Los Angeles'] = 1223
DESTINATIONS['New York'] = 2000
DESTINATIONS['Texas'] = 3444

print('The destnatons with mileage are: ' + str(DESTINATIONS))

# ! Lists and Dictionaries - Deleting a dictionary entry
ANIMALS = {'Dog': 300, 'Cat': 301, 'Bird': 302, 'Turtle': 303}

del ANIMALS['Bird']
print(ANIMALS)

# ! Lists and Dictionaries - Updating a dictionary entry
ANIMALS['Cat'] = 310
print(ANIMALS)

# ! Lists and Dictionaries - Removing a list item
backpack = ['xylophone', 'dagger', 'tent', 'bread loaf']
backpack.remove('dagger')

# ! Lists and Dictionaries - Dictionary values

DICTIONARY_WITH_DIFF_VALUES = {
  'list': ['this', 'is', 'a', 'list'],
  'integer': 1000,
  'string': 'This is a string value'
}
# example of accessing a value using indexing
print(DICTIONARY_WITH_DIFF_VALUES['list'][1])

# ! Lists and Dictionaries - Adding & sorting key / values
DICTIONARY_WITH_DIFF_VALUES['new_list'] = ['another', 'list', 'with', 'values']
DICTIONARY_WITH_DIFF_VALUES['list'].sort()
DICTIONARY_WITH_DIFF_VALUES['list'].remove('is')
DICTIONARY_WITH_DIFF_VALUES['integer'] += 2000

print(DICTIONARY_WITH_DIFF_VALUES)


def fizz_count(fizz_list):
    ''' a function to return the amount of
    times 'fizz' is found in a list '''
    counter = 0
    for items in fizz_list:
        if items == 'fizz':
            counter = counter + 1
    return counter


fizz = ["fizz", "cat", "fizz"]
RESULT = fizz_count(fizz)
print(RESULT)

# ! Lists and Functions - List element modification
n = [1, 3, 5]
# accessng the second element to modify the number
RESULT = n[1] * 5
# updating the second element
n[1] = RESULT
print(n)


n = [[1, 2, 3], [4, 5, 6, 7, 8, 9]]

# ? --------------------------------------------------------------------------


def flatten(lists):
    ''' an example of iterating nested
    list using nested for loops '''
    results = []
    # seperating the two lists with the first for loop
    for numbers in lists:
        # targeting all list elements
        for digits in numbers:
            # appending all elements to the empty list
            results.append(digits)
    return results


print(flatten(n))

# ! Loops - An Overview!
# While loop = runs a loop as long as the condition is met

hobbies = []

for i in range(3):
    hobby = input('Please enter a hobby: ')
    # updates the empty list with the input variable
    hobbies.append(hobby)
# loops thorugh the new index and prints list in order they were entered
print(hobbies)

# ? --------------------------------------------------------------------------

INCREMENT = 0

while INCREMENT < 10:
    INCREMENT += 1
    print(INCREMENT)

# Infinate Loop = prevents the condition from becoming false
# - runs if the condition cant become false

# ! Loops - Break Keyword
# means to exit a loop
COUNT = 0

while True:
    COUNT += 1
    print(COUNT)
    if COUNT >= 10:
        break

# ! Loops - While / Else
# similar to if/else BUT else will execute if a condition is false

random_number = randint(1, 10)

GUESSES_LEFT = 3
# Start your game!
while GUESSES_LEFT > 0:
    guess = int(input('Please enter your guess: '))
    if guess == random_number:
        print('You win')
        break
    GUESSES_LEFT -= 1
else:
    print('You lose.')

# ! Loops - String Manipulation
# Modifying content in a string

PHRASE = 'This is a sentence'

for i in PHRASE:
    if i == 'T' or i == 'e':
        # replaces both characters with the number 2
        # integer has to be converted to a string
        print(str(2))
    else:
        print(i)

# ! Loops - Looping over a dictionary
dic = {'a': 'one', 'b': 'two', 'c': 'three'}


for i in dic:
    print(i, dic[i])

# ! Loops - Iterating using enumerate()
# exaple of printing items with their index

FOOD_CHOICES = ['Steak', 'Chips', 'Peas', 'Onion rings']
print('Your choices for tonights meals are: ')

# enumerate function adds a counter to the item
for index, item in enumerate(FOOD_CHOICES):
    print(index + 1, '-', item)

# ! Loops - Iterating over two lists using zip()

LIST_ONE = [1, 2, 3, 4, 5, 6, 7, 8, 9]
LIST_TWO = [2, 4, 6, 8, 10, 12]

# using zip() function to assign two lists to two items
for one, two in zip(LIST_ONE, LIST_TWO):
    if one > two:
        print(one)
    else:
        print(two)

# ? --------------------------------------------------------------------------
# ! Loops - For / else
# else is executed after the for, only executes if the loop executes normally
# if a break keyword is used the else statement won't execute
# similar to if/else but instead else is indented at the same level as for


fruits = ['banana', 'apple', 'orange', 'tomato', 'pear', 'grape']

print('You have...')
for f in fruits:
    if f == 'tomato':
        # breaks off from the loop when the iteration reaches 'tomato'
        print('A tomato is not a fruit!')
        break
    print('A', f)  # prints off each item up until 'tomato'
else:
    # won't execute cause the loop breaks when tomato is detected
    print('A fine selection of fruits!')

# ? --------------------------------------------------------------------------

fruits = ['banana', 'apple', 'orange', 'tomato', 'pear', 'grape']

print('You have...')
for f in fruits:
    if f == 'satsuma':
        # entire block executes as normal and prints off all list items
        print('A tomato is not a fruit!')
        break
    print('A', f)
else:
    # this would execute because 'satsuma' wasn't found in the loop
    print('A fine selection of fruits!')

# ? --------------------------------------------------------------------------


def is_int(x):
    ''' function to check if args are integers '''
    # abs() returns an absolute value of a number
    result = abs(x)
    # round() returns float that is a rounded version of specified number
    rounded = round(result)
    return result - rounded == 0


print(is_int(20))
print(is_int(20.5))

# ? --------------------------------------------------------------------------


def digit_sum(numbers):
    '''
    function to convert numbers to strings,
    iterate over each and convert back to integers
    to add together
    '''
    total = 0
    string_n = str(numbers)  # str() to convert integers to string
    for char in string_n:  # iterate over each str item
        total += int(char)  # convert back to integers and do calculation
    return total  # return the result


print(digit_sum(1234))  # call function with arguments

# ? --------------------------------------------------------------------------
# ! Calculating the factorial of a non-negative integer

# multiplied with all the integers that lie between 1 and the number itself.
# It is repersented by !. so 5! = 5 x 4 x 3 x 2 x 1 = 120


def factorial(x):
    '''
    factorial calculation
    in a function
    '''
    total = 1  # starts the calculation at 1
    while x > 0:  # loops through all numbers contained in the argument
        total *= x  # multiplies 1 by each increment in the loop
        x -= 1  # reverses the loop so it starts at 5 and multiplies down
    return total  # arg x 4 x 3 x 2 x 1


print(factorial(5))  # 120

# ? --------------------------------------------------------------------------
# ! Prime Number
# A number that is only divisible by one and by itself
# no numbers less than 2 are prime numbers

number = int(input('Please enter a positive number: '))


def check_prime(num):
    '''
    a function to check if a number
    is a prime number
    '''
    if num <= 1:
        return False
    for indx in range(2, int(math.sqrt(num) + 1)):
        if num % indx == 0:
            return False
    return True


if check_prime(number):
    print('This is a prime number.')
else:
    print('This is NOT  prime number.')

# ? --------------------------------------------------------------------------


grades = [100, 100, 90, 40, 80, 100, 85, 70, 90, 65, 90, 85, 50.5]


def grades_sum(scores):
    '''
    a function to add all scores in
    the list and print the result
    '''
    total = 0
    for grade in scores:
        total += grade
    return total


print(grades_sum(grades))


def grades_average(grades_input):
    ''' a function to calculate the average score '''
    return grades_sum(grades_input) / float(len(grades_input))
    # divides the total from the first function by number of individual scores


print(grades_average(grades))


# ? --------------------------------------------------------------------------


# ! ADVANCED TOPICS - Iterators for Dictionaries
# Iterators are seperate items in a dictionary

MY_DICTIONARY = {
  'name': 'Paul Sweeney',
  'age': 37,
  'male': True
}


print(MY_DICTIONARY.items())
# dict_items([('name', 'Paul Sweeney'), ('age', 37), ('male', True)])

# ! ADVANCED TOPICS - keys / values
print(MY_DICTIONARY.keys())  # dict_keys(['name', 'age', 'male'])
print(MY_DICTIONARY.values())  # dict_values(['Paul Sweeney', 37, True])

# ! ADVANCED TOPICS - 'in' Operator
# used to iterate though a list or dictionary data etc
# assigns the word 'key' to each item in the list / dictionary etc
for key in MY_DICTIONARY:
    print(key, MY_DICTIONARY[key])

# ! ADVANCED TOPICS - List Comprehension
# list comprehension is inline code encased in []
# example of filtering even numbers from 1 to 50 and printing result in a list
evens_to_50 = [i for i in range(51) if i % 2 == 0]
print(evens_to_50)

# calculates the square root of each number from 1 to 11
even_squares = [x ** 2 for x in range(1, 12) if (x ** 2) % 2 == 0]
print(even_squares)

# calculating the cube of a number from 1 to 10
cubes_by_four = [x ** 3 for x in range(1, 11) if (x ** 3) % 4 == 0]
print(cubes_by_four)

# ! ADVANCED TOPICS - Index Striding in List Slicing
# skips each index by a specific space
# Below you're printing out all odd numbers ranging fronm 1 - 10
MY_LIST = range(1, 11)

# prints out each second decimal after 1
print(MY_LIST[::2])  # [1, 3, 5, 7, 9]

# List slicing using negative striding
print(MY_LIST[::-1])  # [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


# ! ADVANCED TOPICS - Anonymous Functions
# lambda is used to create an anonymous function
# an alternative to writing a normal function:

# normal version
def divide_by_three(x):
    ''' example one '''
    return x % 3 == 0


# anonymous version:
print(lambda x: x % 3 == 0)


my_list = range(16)
# using filter keyword to filter out all odd numbers from 1 - 16
# works similar to an inline function with an if statement
print(filter(lambda x: x % 3 == 0, my_list))

# a list of all squared numbers from 1 to 10
squares = [x ** 2 for x in range(1, 11)]
# filtering out all squared numbers between 30 and 70
print(filter(lambda x: x > 30 and x < 70, squares))

# filtering characters out of a string
GARBLED = "IXXX aXXmX aXXXnXoXXXXXtXhXeXXXXrX sXXXXeXcXXXrXeXt mXXeXsXXXsXaXXXXXXgXeX!XX"
MESSAGE = ''.join(filter(lambda x: x not in ["X"], GARBLED))
print(MESSAGE)

# ? --------------------------------------------------------------------------

# ! Classes - Introduction

# Python is object oriented programming which means it can manipulate objects
# Objects are data structures that contain data and functions
# Object functions are called methods

# A class is a way of organising & producing objects with attributes & methods
# A way to constuct a class would be the following:
# 1 - define your class and add the instances (data) you want to use
# 2 - define your functions to use for that data
# 3 - add a variable with the data you want to assign to those instances:
#       weekend_car = AnotherCar('DeLorean', 'silver', 88)

# ! Syntax


class AnimalOne(object):  # object class your class is inheriting from
    ''' syntax example '''
    # pass keyword acts as a placeholder you want to repla\ce with data

# ! __init__()


class AnimalTwo(object):
    ''' syntax example '''
    # self refers to the object being created
    def __init__(self):  # initializes the objects it creates
        pass

# ! Creating an object
# python will always use the first parameter (self) it recieves to refer to the object
# it's convetional to use 'self' as all programmers use this


class AnimalThree(object):
    ''' syntax example '''
    def __init__(self, name):  # passing in a parameter (name)
        self.name = name  # initializing the object

# ! Accessing attributes
# dot notation is used to access


class AnimalFour(object):
    ''' syntax example '''
    def __init__(self, name, colour, is_from_africa):
        self.name = name
        self.colour = colour
        self.is_from_africa = is_from_africa


# creating an instance of AnimalFour class
zebra = AnimalFour('Jeffrey', 'Black & White', True)
# printing the values
print(zebra.name)
print(zebra.colour)
print(zebra.is_from_africa)

# ! Functions
# Functions in classes are known as methods
# __init__() is a method to initialize an object

# ! Member variables
# These are variables that are available to all members of a class

# ! Example of adding a customer and items


class ShoppingCart(object):
    ''' creating a customer class '''

    def __init__(self, customer_name):
        self.customer_name = customer_name
        self.items_in_cart = {}

    def add_item(self, product, price):
        """Add product to the cart."""
        if product not in self.items_in_cart:
            self.items_in_cart[product] = price
            print(product + " added.")
        else:
            print(product + " is already in the cart.")


# creating instances and adding values
MY_CART = ShoppingCart('Paul')
MY_CART.add_item('Tshirt', 14.95)


# ! Inheritance!
# A class inherits the attributes & methods of another

# !a means of re-creating a method
# Inheriting another class and overriding attributes and methods

class Employee(object):
    """Models real-life employees!"""
    def __init__(self, employee_name):
        self.employee_name = employee_name

    def calculate_wage(self, hours):
        """ calculating hours """
        self.hours = hours
        return hours * 20.00


# overriding the calculate_wage in the base class


class PartTimeEmployee(Employee):
    """ overriding hours worked """
    def calculate_wage(self, hours):
        self.hours = hours
        return hours * 12.00

# ! super()
    # The function is used to give access to methods of a parent or sub class
    # returns an object that represents the parent class
    def full_time_wage(self, hours):
        ''' example of using super() '''
        return super(PartTimeEmployee, self).calculate_wage(hours)

# ! Instantiating an object


class Triangle(object):
    ''' Syntax '''
    def __init__(self, angle1, angle2, angle3):
        self.angle1 = angle1
        self.angle2 = angle2
        self.angle3 = angle3

    number_of_sides = 3

    def check_angles(self):
        ''' Syntax '''
        if self.angle1 + self.angle2 + self.angle3 == 180:
            return True
        else:
            return False


# Creating an instance opf a class is basically asigning a class to a variable
my_triangle = Triangle(90, 30, 60)
print(my_triangle.number_of_sides)
print(my_triangle.check_angles())

# ! Inheritance

# Inheriting from the Triangle class and setting new values to the object


class Equilateral(Triangle):
    ''' Syntax '''
    angle = 60

    def __init__(self):
        super().__init__(angle1, angle2, angle3)
        # These will now each have a value of 60
        self.angle1 = self.angle
        self.angle2 = self.angle
        self.angle3 = self.angle


# ! Classes - Class member variables
# storing information about each class object
# member variables cause they have information that belong to that class object

class Car(object):
    ''' syntax '''
    condition = "new"  # member variable


my_car = Car()
print(my_car.condition)  # calling class member variable

# ! Classes - Initializing a class with __init__()
# this gets called when you create a new instance of a class
# you override the default function by creating your own function
# you use this if you want to include more input variables


class NewCar(object):
    ''' syntax '''
    condition = "new"

    def __init__(self, model, color, mpg):
        # member variables
        self.model = model
        self.color = color
        self.mpg = mpg


# assigning values to the member variables like you would do with args & params
my_car = NewCar('DeLorean', 'silver', 88)

#  referring to a member variable for its value
print(my_car.condition)
print(my_car.model)
print(my_car.color)
print(my_car.mpg)

# ! Classes - Creating Class Methods
# remembering to use the self argument when creating a class method
# using self allows you to use the member variables created in the base class


class AnotherCar(object):
    ''' syntax '''
    condition = "brand new"

    def __init__(self, model, color, mpg):
        self.model = model
        self.color = color
        self.mpg = mpg

    # class method or 'function'
    def display_car(self):
        ''' syntax example '''
        print(f"This is a {self.color} {self.model} with {self.mpg} MPG.")


weekend_car = AnotherCar('DeLorean', 'silver', 88)

weekend_car.display_car()
