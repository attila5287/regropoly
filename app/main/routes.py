import requests
import csv
from flask import render_template, request, Blueprint, jsonify
from app import db, bcrypt
from app.models import Post, Baseprice
from app.posts.forms import PostDemo

main = Blueprint('main', __name__)

@main.context_processor
def inject_PostDemoList():
    pass
    PostDemoList = [
        PostDemo(title=title, content=content) 
        for (title, content) in zip(
            [
                '01> welcome to python flask app!',
                '02> these are demo posts',
                '03> they only appear',
                '04> when there are no posts to show',
            ],
            [
                'A: post is a CRUD module',
                'B: create posts or delete yours',
                'C: read those created by others',
                'D: update your posts or preferences',
            ]
        )
    ]

    return dict(PostDemoList=PostDemoList)


@main.route("/home")
def home():
    page = request.args.get('page', 1, type=int)
    posts = Post.query.order_by(Post.date_posted.desc()).paginate(page=page, per_page=5)
    pass

    try:
        _ = [post for post in posts]
    except:
        posts = []


    return render_template('home.html', posts=posts)

@main.route("/about")
def about():
    return render_template('about.html', title='About')

@main.route("/about/developer")
def aboutdev():
    return render_template('aboutdev.html', title='About')

@main.route("/")
@main.route("/test")
def test():
    pass
    return render_template('test.html')

@main.route("/db/init/base")
def base_prices():
    pass
    csv_url = 'https://gist.githubusercontent.com/attila5287/4dd95bed39c46a09fd76cbda1670ceb4/raw/aa07a33ad59875856505cd36be900d5c57812c5d/zhvi-dem0.csv'
    with requests.get(csv_url, stream=True) as r:
        pass
        lines = (line.decode('utf-8') for line in r.iter_lines())
        csv_dict = [row for row in csv.DictReader(lines)]
        inventory = [
            Baseprice(**row) for row in csv_dict
        ]
        # print(inventory)
        db.session.add_all(inventory)
        db.session.commit()
        
    return jsonify(csv_dict)
