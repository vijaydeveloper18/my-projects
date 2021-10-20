Python 3.9.7 (tags/v3.9.7:1016ef3, Aug 30 2021, 20:05:41) [MSC v.1929 32 bit (Intel)] on win32
Type "help", "copyright", "credits" or "license()" for more information.
>>> a="1234"
>>> a.isnumeric()
True
>>> string="  "
>>> string.isspace()
True
>>> 
>>> string="Front end developer"
>>> string.isupper()
False
>>> string.islower()
False
>>> string.istitle()
False
>>> 
>>> string.isalpha()
False
>>> string="front end developer"
>>> string.isalpha()
False
>>> string.islower()
True
>>> string.upper()
'FRONT END DEVELOPER'
>>> string.istitle()
False
>>> 