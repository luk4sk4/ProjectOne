from modules.dics_iterator import iterar_dics

def main():
    dic_tienda = "0001"
    dic_tipos = "001"
    dic_generos = "0011"

    all_lists = iterar_dics(dic_tienda, dic_tipos, dic_generos)

    shoplist = all_lists[0]
    typelist = all_lists[1]
    genrelist = all_lists[2]

    print(shoplist, typelist, genrelist)


if __name__ == "__main__":
    main()



"""
set FLASK_APP=app.py
flask run --host=192.168.0.21 --port=5000 --debug
"""