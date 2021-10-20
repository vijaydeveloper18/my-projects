team_A=set()
team_B=set()
print("enter to add the player team A:")
while(true):
    str=input()
    team_A.add(str)
    ch=input("add[y/n]?..")
    if ch in {'n','N'}:
         break
print("enter to add the player team B:")
while(true):
    str=input()
    team_B.add(str)
    ch=input("add[y/n]?..")
    if ch in {'n','N'}:
          break
print("\n team A players list:",team_A)
print("\n team B players list:",team_B)
print("team A:",team_A.difference(team_B))
print("team B:",team_B.difference(team_A))
print("both players:",team_A.intersection(team_B))
