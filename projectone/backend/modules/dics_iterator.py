from modules.listas import tiendas, tipos, genres

def iterar_dics(dic_tienda, dic_tipos, dic_generos):
    lista_tiendas = []
    lista_tipos = []
    lista_generos = []

    def iterar_tiendas():
        index = 0
        for n in dic_tienda:
            if n == "1":
                lista_tiendas.append(tiendas[index])
            index +=1

    def iterar_tipos():
        index = 0
        for n in dic_tipos:
            if n == "1":
                lista_tipos.append(tipos[index])
            index +=1
    
    def iterar_generos():
        index = 0
        for n in dic_generos:
            if n == "1":
                lista_generos.append(genres[index])
            index +=1
    
    iterar_tipos()
    iterar_tiendas()
    iterar_generos()
    if lista_tiendas == []:
        lista_tiendas = tiendas
    if lista_tipos == []:
        lista_tipos = tipos
    if lista_generos == []:
        lista_generos = genres

    return(lista_tiendas, lista_tipos, lista_generos)
        

if __name__ == "__main__":
    iterar_dics()