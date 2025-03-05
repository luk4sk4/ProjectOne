from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from modules.dics_iterator import iterar_dics
from sqlalchemy import and_

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///userdata.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


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

class DataSchema(ma.Schema):
    class Meta: 
        fields = ('id', 'name', 'genre', 'watched_elements', 'liked_elements', 'disliked_elements', 'favorite_elements', 'postponed_elements')

onedata_schema = DataSchema()
alldata_schema = DataSchema(many=True)

@app.route('/', methods = ['GET'])
def get_all():
    all_dataset = User_data.query.all()
    results = alldata_schema.dump(all_dataset)
    return jsonify(results)

@app.route('/name', methods = ['GET'])
def post_details(name):
    onedata = User_data.query.get(name)
    return onedata_schema.jsonify(onedata)

@app.route('/watched_elements', methods=['GET'])
def get_watched_elements():
    specific_column = User_data.query.with_entities(User_data.watched_elements).all()
    results = [row.serial for row in specific_column]
    return jsonify(results)


@app.route('/add/<id>/watched/<serial>', methods = ['PUT'])  #this needs modify
def add_article(id, serial):
    serial_to_add = serial
    row = User_data.query.get(id)
    temp = row.watched_elements 
    row.watched_elements = temp.append(serial_to_add)
    db.session.commit()
    return onedata_schema.jsonify(row)


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
    app.run(host='192.168.0.21', port=3000)



"""
set FLASK_APP=app.py
flask run --host=192.168.0.21 --port=3000 --debug
"""