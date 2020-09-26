import random
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
    posts = Post.query.order_by(
        Post.date_posted.desc()).paginate(page=page, per_page=5)
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
def db_init_baseprice():
    pass  # UPLOAD ZILLOW HOUSE VALUE INDEX CSV'S MERGED
    existing_data = Baseprice.query.filter_by(RegionName='Denver').first()
    
    if existing_data:
        pass
        print('table data exists')
        return jsonify({
            'status': 'no upload necessary',
        })
    else:
        pass
        csv_url = 'https://gist.githubusercontent.com/attila5287/4dd95bed39c46a09fd76cbda1670ceb4/raw/aa07a33ad59875856505cd36be900d5c57812c5d/zhvi-dem0.csv'
        with requests.get(csv_url, stream=True) as r:
            pass
            lines = (line.decode('utf-8') for line in r.iter_lines())
            csv_dict = [row for row in csv.DictReader(lines)]
            base_prices = [
                Baseprice(**row) for row in csv_dict
            ]
            # print(inventory)
            db.session.add_all(base_prices)
            db.session.commit()

        return jsonify(csv_dict)

@main.route('/base/<int:round_no>')
def base_price(round_no):
    pass  # base prices are from Zillow House Value:City
    price_column = 'Round'+str(round_no)  # Round1,Round2

    base_prices = Baseprice.query.all()
    res = [
        {getattr(bp, 'BasePriceLabel'): 
            getattr(bp, price_column),
        }
            for bp in base_prices

    ]
    flat = {}
    
    for d in res:
        pass
        for k,v in d.items():
            pass
            flat[k] = v
    
    
    return jsonify(flat)
    # return jsonify(res)

@main.route('/desc')
def zillow_desc():
    pass  # API route for item desc
    # full name of the column
    base_prices = Baseprice.query.all()
    res = {
        bpL.BasePriceLabel:
        {
            'BasePriceLabel': bp.BasePriceLabel,
            'RegionName': bp.RegionName,
            'StateName': bp.StateName,
            'State': bp.State,
            'Metro': bp.Metro,
            'CountyName': bp.CountyName,
            'BedrmCt': bp.BedrmCt,
            'RegionID': bp.RegionID,
            'SizeRank': bp.SizeRank,
        } for (bpL, bp) in zip(base_prices, base_prices)
    }
#    print(res[0]['BR001RG0010181'])
    return jsonify(res)

@main.route('/spawn/<int:roundNo>')
def spawn_items(roundNo):
    pass
    web = 'http://regropoly.herokuapp.com'
    url_desc = web+'/desc'  # api route for desc
    # fetch all descriptions
    api_descriptions = requests.get(url_desc).json()
    # fetch all labels
    api_labels = [k[0] for k in api_descriptions.items()]
    # fetch base prices for the round
    api_baseprices = requests.get(web + '/base/'+str(roundNo)).json() 
    
    labels = [slot + random.choice(api_labels) for slot in ['']*5]
    
    descs = [api_descriptions[bp_label] for bp_label in labels]
    
    round_bps = [api_baseprices[bp_label] for bp_label in labels]
    
    bedroom_counts = [ # required to generate random img url
        dsc.get('BedrmCt',3)
        for dsc in descs
    ]
    img_ct = { # jpeg files per bedroom count
       '1' : 10, '2' : 10, '3' : 10, '4' : 10, '5': 10,
    }
    img_urls = [ #random by br-count
        {'img_url' : web
        +'/static/img/photos/'
        + str(br)
        +'-'
        +str(random.randint(0,img_ct[str(br)]-1))
        +'.jpeg'}
        for br in bedroom_counts
     ]
    
    objects = [
        {**desc, **imgURL, 'purchase_price':bp} for (desc, imgURL,bp) in zip(descs, img_urls, round_bps)
    ]

    # Normal distribution. mu is the mean,
    # return jsonify({'random': api_baseprices})
    # return jsonify({'random': round_bps })
    # return jsonify({'random': objects })
