import random
def jeu ():
    find_nb = str(random.randint(1000,9998))
    user_nb = ""
    search_nb = {}
    while find_nb != user_nb:
       user_nb = input("rentre le nombre: ")
       if len(user_nb) == 4 and user_nb.isdigit():
           score = 0
           for i in range(len(find_nb)):
               if user_nb[i] == find_nb[i]:
                   score += 1
           search_nb[user_nb]=score
           print (f"vous avez trouver {score} chiffre corespondant")
           print(f"historique des nombres proposer: {search_nb}")
       else: 
           print("valeur non valide")
        
    return f"bravo vous avez gagné en {len(search_nb)} coup le nombre est bien {find_nb}"

print(jeu ())