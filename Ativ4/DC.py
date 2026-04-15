def soma(lista):
    if lista == []: # 1. Caso-base: array vazio
        return 0
    else:
        # 2. Caso recursivo: O primeiro item (lista[0]) + a soma do resto da lista (lista[1:])
        return lista[0] + soma(lista[1:])

print(soma([2, 4, 6])) # Saída: 12