mata=[[1,2,3],[4,5,6]]
trans=[[0,0],[0,0],[0,0]]
for i in range(len(mata)):
    for j in range(len(mata[0])):
            trans[j][i]=mata[i][j]
print("\n actual matrix elements")
for i in mata:
    print(i)
print("\n transpose matrix elements")
for i in trans:
    print(i)
