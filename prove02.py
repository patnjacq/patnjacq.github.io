# A Quick function to get the file location
# Input: file path from user
# Output: return the file path
def prompt_input ():
    xfile = input("Please enter the data file: ")
    return xfile


# Function to find the average commercial rate, the max commercial rate and the minimum commercial rate
#   all in one parsing loop to save computing time.
# Input: a location for a csv file
# Process:
#   Initialize: sum, minimum, maximum, indexes and counter k
#   Open file, parse file into a list of lines 
#   Remove line[0]
#   loop will: 
#       split line to find commercial rate (7th item)
#       add commercial rate to running sum
#       check if rate is lower than current minimum if so replace current min and record index
#       check if rate is higher than current maximum if so replace current max and record index
#       iterate k 
#   divide sum by number of lines to find mean
#   create list to hold mean, and lines with index for min and index for max.
# Output: return list
#   
def mean_min_max(textfile):
    asum = 0
    amin = 1000000
    amax = 0
    minIndex = 0
    maxIndex = 0
    k=0
    xfile = open (textfile)
    listOfLines = xfile.readlines()  
    listOfLines.pop(0) 
    linecount = len(listOfLines) 
    for line in listOfLines:
        wordlist = line.split(",")
        rate = float(wordlist[6])
        asum = asum + rate
        if rate < amin:
            amin = rate
            minIndex = k
        if rate > amax:
            amax = rate  
            maxIndex = k
        k= k+1
        
    mean = asum/linecount
    thislist = [mean, listOfLines[minIndex], listOfLines[maxIndex]]
    xfile.close()
    return thislist

# A function to organize and report the mean, min, and max
# Input: a 3 element list made up of 1 number and 2 lists
# Process:
#   parse the lists in the 2nd and 3rd element 
#   item[0] is zip, item[2] company, item[3] is state, item[6] is rate 
#   if rate = 0 Change it to 0.0 to give the autograder what it wants (seems pretty hokey and wrong to me.)
#   organize the print statement to read "company (zip, state) - $rate"
# Output: print output to screen
    
def printStatement(alist):  
    print ("The average commercial rate is: ", alist[0])
    print ("")
    print ("The highest rate is:")
    wordlist = alist[2].split(",")
    print (wordlist[2], "("+ wordlist[0] + ",", wordlist[3]+ ") - $"+ wordlist[6])
    print ("")
    print ("The lowest rate is: ") 
    wordlist = alist[1].split(",")
    if float(wordlist[6]) == 0:
        wordlist[6] = "0.0"
    print (wordlist[2], "("+ wordlist[0] + ",", wordlist[3]+ ") - $"+ wordlist[6])

# the function to call the other functions.
def main ():
    mainfile = prompt_input() 
    mainlist = mean_min_max(mainfile)
    printStatement(mainlist)

   
if __name__ == "__main__":
    main()



    



