from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from modules.dics_iterator import iterar_dics
from sqlalchemy import and_

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///alldata.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


class All_data(db.Model):
    serial = db.Column(db.Integer, primary_key=True)
    shop = db.Column(db.String(100))
    genre = db.Column(db.String(10))
    name = db.Column(db.String(100))
    url = db.Column(db.String(100))
    imagen1 = db.Column(db.String(100))
    imagen2 = db.Column(db.String(100))
    imagen3 = db.Column(db.String(100))
    imagen4 = db.Column(db.String(100))
    precio = db.Column(db.String(100))
    tipo = db.Column(db.String(100))

    def __init__(self, shop, genre, tipo, name, url, imagen1, imagen2, imagen3, imagen4, precio):
        self.shop = shop
        self.genre = genre
        self.name = name
        self.url = url
        self.imagen1 = imagen1
        self.imagen2 = imagen2
        self.imagen3 = imagen3
        self.imagen4 = imagen4
        self.precio = precio
        self.type = tipo

class DataSchema(ma.Schema):
    class Meta: 
        fields = ('serial', 'shop', 'genre', 'name', 'url', 'imagen1', 'imagen2', 'imagen3', 'imagen4', 'precio', 'tipo')

onedata_schema = DataSchema()
alldata_schema = DataSchema(many=True)

@app.route('/', methods = ['GET'])
def get_all():
    all_dataset = All_data.query.all()
    results = alldata_schema.dump(all_dataset)
    return jsonify(results)

@app.route('/serial/<serial>/', methods = ['GET'])
def post_details(serial):
    onedata = All_data.query.get(serial)
    return onedata_schema.jsonify(onedata)

@app.route('/serials', methods=['GET'])
def get_serials_column():
    specific_column = All_data.query.with_entities(All_data.serial).all()
    results = [row.serial for row in specific_column]
    return jsonify(results)

@app.route('/tiendas', methods=['GET'])
def get_shops_column():
    specific_column = All_data.query.with_entities(All_data.shop).all()
    results = [row.shop for row in specific_column]
    return jsonify(results)

@app.route('/types', methods=['GET'])
def get_types_column():
    specific_column = All_data.query.with_entities(All_data.tipo).all()
    results = [row.tipo for row in specific_column]
    return jsonify(results)

@app.route('/genres', methods=['GET'])
def get_genres_column():
    specific_column = All_data.query.with_entities(All_data.genre).all()
    results = [row.genre for row in specific_column]
    return jsonify(results)

@app.route('/filtered/<dic_tienda>/<dic_tipos>/<dic_generos>/', methods = ['GET'])
def filter_by_everything(dic_tienda, dic_tipos, dic_generos):
    all_lists = iterar_dics(dic_tienda, dic_tipos, dic_generos)

    shoplist = all_lists[0]
    typelist = all_lists[1]
    genrelist = all_lists[2]
    print(shoplist, typelist, genrelist)

    filtered_data = All_data.query.filter(
        and_(
            All_data.shop.in_(shoplist),
            All_data.tipo.in_(typelist),
            All_data.genre.in_(genrelist)
        )
    ).all()
    results = [row.serial for row in filtered_data]
    return jsonify(results)


class User_data(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100))
    genre = db.Column(db.String(10))
    watched_elements = db.Column(db.String(100))
    liked_elements = db.Column(db.String(100))
    disliked_elements = db.Column(db.String(100))
    favorite_elements = db.Column(db.String(100))
    postponed_elements = db.Column(db.String(100))

    def __init__(self, name, genre, watched_elements, liked_elements, disliked_elements, favorite_elements, postponed_elements):
        self.name = name
        self.genre = genre
        self.watched_elements = watched_elements
        self.liked_elements = liked_elements
        self.disliked_elements = disliked_elements
        self.favorite_elements = favorite_elements
        self.postponed_elements = postponed_elements

class userDataSchema(ma.Schema):
    class Meta: 
        fields = ('id', 'name', 'genre', 'watched_elements', 'liked_elements', 'disliked_elements', 'favorite_elements', 'postponed_elements')

useronedata_schema = userDataSchema()
useralldata_schema = userDataSchema(many=True)

@app.route('/user', methods = ['GET'])
def user_get_all():
    all_dataset = User_data.query.all()
    results = useralldata_schema.dump(all_dataset)
    return jsonify(results)

@app.route('/user/<id>', methods = ['GET'])
def user_post_details(id):
    onedata = User_data.query.get(id)
    return useronedata_schema.jsonify(onedata)

@app.route('/user/<id>/watched', methods = ['GET'])
def user_post_de5tails(id):
    onedata = User_data.query.get(id)
    data = onedata.watched_elements
    return jsonify(data)

@app.route('/user/add/<id>/watched/<serial>', methods=['PUT'])
def user_add_article(id, serial):
    serial_to_add = serial
    user = User_data.query.get(id)
    checki = user.watched_elements

    if checki == "":
        checki = serial_to_add
    else:
        checki = checki + "." + serial_to_add

    user.watched_elements = checki

    db.session.commit()
    return useronedata_schema.jsonify(user)

@app.route('/user/add/<id>/liked/<serial>', methods=['PUT'])
def user_add_2article(id, serial):
    serial_to_add = serial
    user = User_data.query.get(id)
    checki = user.liked_elements

    if checki == "":
        checki = serial_to_add
    else:
        checki = checki + "." + serial_to_add

    user.liked_elements = checki

    db.session.commit()
    return useronedata_schema.jsonify(user)

@app.route('/user/add/<id>/postponed/<serial>', methods=['PUT'])
def user_add_3article(id, serial):
    serial_to_add = serial
    user = User_data.query.get(id)
    checki = user.postponed_elements

    if checki == "":
        checki = serial_to_add
    else:
        checki = checki + "." + serial_to_add

    user.postponed_elements = checki

    db.session.commit()
    return useronedata_schema.jsonify(user)

@app.route('/user/add/<id>/favorite/<serial>', methods=['PUT'])
def user_add_4article(id, serial):
    serial_to_add = serial
    user = User_data.query.get(id)
    checki = user.favorite_elements

    if checki == "":
        checki = serial_to_add
    else:
        checki = checki + "." + serial_to_add

    user.favorite_elements = checki

    db.session.commit()
    return useronedata_schema.jsonify(user)


@app.route('/user/add/<id>/disliked/<serial>', methods=['PUT'])
def user_add_5article(id, serial):
    serial_to_add = serial
    user = User_data.query.get(id)
    checki = user.disliked_elements

    if checki == "":
        checki = serial_to_add
    else:
        checki = checki + "." + serial_to_add

    user.disliked_elements = checki

    db.session.commit()
    return useronedata_schema.jsonify(user)






#@app.route('/add', methods = ['POST'])  #this needs modify
#def add_article():
#    title = request.json['title']
#    description = request.json['description']
#
 #   articles = All_data(title, description)
 #   db.session.add(articles)
 #   db.session.commit()
 #   return onedata_schema.jsonify(articles)

#@app.route('/update/<id>/', methods = ['PUT'])
#def update_article(id):
 #   article = All_data.query.get(id)
  #  
  #  title = request.json['title']
  #  description = request.json['description']
#
  ##  article.title = title
   # article.description = description
#
   # db.session.commit()
   # return onedata_schema.jsonify(article)


#@app.route('/delete/<id>/', methods = ['DELETE'])
#def delete_article(id):
 #   article = All_data.query.get(id)
#
  #  db.session.delete(article)
#
   # db.session.commit()
  #  return onedata_schema.jsonify(article)


if __name__ == "__main__":
    app.run(host='192.168.0.21', port=5000)



"""
set FLASK_APP=app.py
flask run --host=192.168.0.21 --port=5000 --debug
"""