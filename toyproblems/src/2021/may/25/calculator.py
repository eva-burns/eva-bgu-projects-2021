# Have the function Calculator(str) take the str parameter being passed and evaluate the mathematical expression within in. For example, if str were "2+(3-1)*3" the output should be 8.
# Another example: if str were "(2-0)(6/2)" the output should be 6. There can be parenthesis within the string so you must evaluate it properly according to the rules of arithmetic.
# The string will contain the operators: +, -, /, *, (, and ). If you have a string like this: #/#*# or #+#(#)/#, then evaluate from left to right. So divide then multiply, and for the second one multiply, divide, then add. The evaluations will be such that there will not be any decimal operations, so you do not need to account for rounding and whatnot.

def calculator(str_in):
    nums = [""]
    for i in str_in:
        if i.isdigit() and nums[-1].isdigit():
            nums[-1] = nums[-1]+i
        else:
            nums.append(i)
    nums = nums[1:]
    while "(" in nums:
        start = nums.index("(")
        end = nums.index(")")
        nums[start] = do_math(nums[start+1: end])[0]
        for i in range(start+1, end + 1):
            nums.pop(start+1)
    j = 0
    while j < len(nums)-1:
        if nums[j].isdigit() and nums[j+1].isdigit():
            nums.insert(j+1, "*")
            j -= 1
        j += 1
    nums = do_math(nums)
    return int(nums[0])


def do_math(arr_in):
    nums = arr_in
    if "*" in nums or "/" in nums:
        j = 1
        while j < len(nums) - 1:
            if nums[j] == "*" and nums[j-1].lstrip('-').isdigit() and nums[j+1].lstrip('-').isdigit():
                nums[j-1] = str(int(nums[j-1]) * int(nums[j+1]))
                nums.pop(j)
                nums.pop(j)
                j -= 1
            elif nums[j] == "/" and nums[j-1].lstrip('-').isdigit() and nums[j+1].lstrip('-').isdigit():
                nums[j-1] = str(int(int(nums[j-1]) / int(nums[j+1])))
                nums.pop(j)
                nums.pop(j)
                j -= 1
            j += 1

    if "+" in nums or "-" in nums:
        j = 1
        while j < len(nums) - 1:
            if nums[j] == "+" and nums[j-1].lstrip('-').isdigit() and nums[j+1].lstrip('-').isdigit():
                nums[j-1] = str(int(nums[j-1]) + int(nums[j+1]))
                nums.pop(j)
                nums.pop(j)
                j -= 1
            elif nums[j] == "-" and nums[j-1].lstrip('-').isdigit() and nums[j+1].lstrip('-').isdigit():
                nums[j-1] = str(int(nums[j-1]) - int(nums[j+1]))
                nums.pop(j)
                nums.pop(j)
                j -= 1
            j += 1

    return nums
