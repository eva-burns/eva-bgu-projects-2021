def solution(N, K):
    # write your code in Python 3.6
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", 
        "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
        "u", "v", "w", "x", "y", "z"]
    first_half = ""
    for i in range(int(N/2) + N%2):
        if(i < K):
            first_half += alphabet[i]
        else:
            first_half += alphabet[K-1]
    palin = ""
    if N%2 != 0:
        palin = first_half[0:-1]
        palin += first_half[::-1]
    else:
        palin = first_half
        palin += first_half[::-1]
    return palin