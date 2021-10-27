mat_A=[[1,2,3],[4,5,6]]
mat_B=[[1,2],[4,5],[8,9]]
mat_C=[[0,0],[0,0]]
for i in range(len(mat_A)):
    for j in range(len(mat_B[0])):
        for k in range(len(mat_B)):
            mat_C[i][j]=mat_C[i][j]+mat_A[i][k]*mat_B[k][j]
print("\n first matrix elements")
for i in mat_A:
    print(i)
print("\n second matrix elements")
for i in mat_B:
    print(i)
print("\n output matrix elements")
for i in mat_C:
    print(i)
            
