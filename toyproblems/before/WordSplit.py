def solution(S):
    # write your code in Python 3.6
    L = [S]
    for i in range(len(S)):
        clean = True
        for j in range(len(L)):
            idx = idx_to_split(L[j])
            if idx != -1:
                clean = False
                new_list = split(L[j], idx)
                L = L[0:j] + new_list + L[j+1::]
                if idx_to_split(L[j-1] + L[j]) == -1:
                    L = join(L, j-1)
                elif idx_to_split(L[j] + L[j+1]) == -1:
                    L = join(L, j)
                break
        if clean:
            for j in range(len(L)-1):
                if idx_to_split(L[j] + L[j+1]) == -1:
                    L = join(L, j)
                    j = j-1
            print(L)
            return len(L)
    print(L)
    return len(L)
def idx_to_split(S):
    for i in range(len(S)-1):
        idx = len(S) - S[::-1].index(S[i]) - 1
        if idx != i:
            return idx
    return -1
def split(S, idx):
    return [S[0:idx], S[idx::]]
def join(L, idx):
    elem = L[idx] + L[idx+1]
    arr = L[0:idx] + [elem] + L[idx+2::]
    return arr

print(solution('ggholagtseqkdduwxdwamuqsui'))