def solution(S):
    # write your code in Python 3.6
    L = []
    to_add = ""
    for i in range(len(S)):
        if (S[i] in to_add):
            L += [to_add]
            to_add = S[i]
        else:
            to_add += S[i]
    L += [to_add]
    print(L)
    return len(L)
    
print(solution('ggholagtseqkdduwxdwamuqsui'))