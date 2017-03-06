x = range(60,101)
# print x
import random
score = random.sample(x,10)
# print score
def grade(score):
    for element in score:
        if score < 100:
            print "This is a score"
from random import randint
a = []
for _ in range(100):
    b = 0
    c = set()
    while len(c) < 5:
        c.add(randint(1,5))
        b += 1
    a.append(b)
d = round(sum(a)/len(a))
print("{}\nAverage loops: {}".format(c,d))



# def grade(arg):
#     for i in range(1,10)
#
#     pass
