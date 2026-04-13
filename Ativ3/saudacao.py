def fat(x):
    # CASO-BASE: Se chegou no 1, pare e devolva 1.
    if x == 1:
        return 1
    # CASO RECURSIVO: Se não é 1, multiplique o x pelo fatorial do próximo número.
    else:
        return x * fat(x - 1)

print(fat(3)) # Vai imprimir 6