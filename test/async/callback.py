import time


def asyncTask():
    time.sleep(10)
    print("async task is done")


print("start")

def main(fun):
    fun()

print("end")

main(asyncTask)
