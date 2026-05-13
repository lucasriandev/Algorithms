# Criando uma tabela hash vazia (Dicionário)
# O livro usa dict(), mas usar {} é o padrão mais moderno e comum!
caderno = {} 

# Adicionando os produtos (Chave) e os preços (Valor)
caderno["maçã"] = 0.67
caderno["leite"] = 1.49
caderno["abacate"] = 1.49

# Mostrando a tabela inteira
print(caderno) 
# Saída: {'maçã': 0.67, 'leite': 1.49, 'abacate': 1.49}

# Perguntando o preço de um item específico direto pela chave
print(caderno["abacate"]) 
# Saída: 1.49