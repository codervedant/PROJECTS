# -*- coding: utf-8 -*-
"""Simple Python Programs (97)

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1iksdjP8oalauFPRvN7st84igiBRV_7_Z
"""

y = int(input("Enter a year to check if it is a leap year or not -> "))
d = y%4

if y%4 == 0 and y%100 != 0:
  print(y, "is a leap year")
elif y%100 == 0 and y%400 == 0:
  print(y, "is a leap year.")
else:
  print(y, "is not a leap year")
  print("The next leap year will be", y + 4 - d)

def leapyear(year):
  d = year%4

if y%4 == 0 and y%100 != 0:
  print(y, "is a leap year")
elif y%100 == 0 and y%400 == 0:
  print(y, "is a leap year.")
else:
  print(y, "is not a leap year")
  print("The next leap year will be", y + 4 - d)

year = int(input("Enter a year to check if it is a leap year or not -> "))

leapyear(year)

h = float(input("Enter your height in centimetres -> "))
i = h*0.394
f = h*0.0328
m = h*0.01

print("Your height in inches is ", i)
print("Your height in feet is ", f)
print("Your height in metres is ", m)

def height(cm):
  i = cm*0.394
  f = cm*0.0328
  m = cm*0.01

  print("Your height in inches is ", i)
  print("Your height in feet is ", f)
  print("Your height in metres is ", m)

cm = float(input("Enter your height in centimetres -> "))

height(cm)