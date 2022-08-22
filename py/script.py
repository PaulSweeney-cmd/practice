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

# ! Conditionals and Control Flow -
