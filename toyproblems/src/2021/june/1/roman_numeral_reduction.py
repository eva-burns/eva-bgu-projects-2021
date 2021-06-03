# Have the function RomanNumeralReduction(str) read str which will be a string of roman numerals in decreasing
# order. The numerals being used are: I for 1, V for 5, X for 10, L for 50, C for 100, D for 500 and M for 1000.
#
# Your program should return the same number given by str using a smaller set of roman numerals. For example:
# if str is "LLLXXXVVVV" this is 200, so your program should return CC because this is the shortest way to write
# 200 using the roman numeral system given above. If a string is given in its shortest form, just return that same string.

def roman_numeral_reduction(str):
    rom_to_num = {"I": 1, "V": 5, "X": 10,
                "L": 50, "C": 100, "D": 500, "M": 1000}
    num_to_rom = {v: k for k, v in rom_to_num.items()}
    num = 0
    for i in range(len(str)):
      num += rom_to_num[str[i]]
    ret_str = ""
    while num > 0:
      filtered = sorted(list(filter(lambda n: n <= num, rom_to_num.values())))[::-1]
      num -= filtered[0]
      ret_str += num_to_rom[filtered[0]]
    return ret_str
