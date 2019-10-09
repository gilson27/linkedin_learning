# use recursion to implement a countdown counter


def countdown(x):
    if x == 0:
        return
    print("Counting ", x, " ...")
    countdown(x-1)

countdown(5)
