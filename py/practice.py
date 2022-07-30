
phonebook = {
    "John": 938477566,
    "Jack": 938377264,
    "Jill": 947662781
}

# adding an entry
phonebook["Jake"] = 938273443
# deleting an entry
del phonebook["Jill"]

# testing code
if "Jake" in phonebook:
    print("Jake is listed in the phonebook.")

if "Jill" not in phonebook:
    print("Jill is not listed in the phonebook.")

#########

import re

find_members = []

for member in dir(re):
    if "find" in member:
        find_members.append(member)

# printing the results alphabetically
print(sorted(find_members))

#########

# Create 2 new lists height and weight
height = [1.87,  1.87, 1.82, 1.91, 1.90, 1.85]
weight = [81.65, 97.52, 95.25, 92.98, 86.18, 88.45]

# Import the numpy package as np
import numpy as np

# Create 2 numpy arrays from height and weight
np_height = np.array(height)
np_weight = np.array(weight)

print(type(np_height))

#########

weight_kg = [81.65, 97.52, 95.25, 92.98, 86.18, 88.45]

import numpy as np

# Create a numpy array np_weight_kg from weight_kg
np_weight_kg = np.array(weight_kg)

# Create np_weight_lbs from np_weight_kg calculation using scalar conversion of 2.2lbs
np_weight_lbs = np_weight_kg / 2.2

# Print out np_weight_lbs
print(np_weight_lbs)