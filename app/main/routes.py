import random
import requests
import csv
from flask import render_template, request, Blueprint, jsonify
from app import db, bcrypt
from app.models import  Baseprice, Spawn, Purchased

main = Blueprint('main', __name__)

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


@main.route('/spawn/<int:spawnCount>/<int:roundNo>')
def spawn_items( spawnCount, roundNo ):
    pass
    web = 'http://regropoly.herokuapp.com'
    url_desc = web+'/desc'  # api route for desc
    # fetch all descriptions
    api_descriptions = requests.get(url_desc).json()
    # fetch all labels
    api_labels = [k[0] for k in api_descriptions.items()]
    # fetch base prices for the round
    api_baseprices = requests.get(web + '/base/'+str(roundNo)).json() 
    
    labels = [slot + random.choice(api_labels) for slot in ['']*spawnCount]
    
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
        {**desc, **imgURL, 'base_price': bp, 'purchase_price': round(random.normalvariate(bp, 10000)*.95), 'purchase_round': roundNo} for (desc, imgURL, bp, roundNo) in zip(descs, img_urls, round_bps, [roundNo]*10)
    ]
    
    houses = [
        Spawn(**obj) for obj in objects
    ]

    db.session.query(Spawn).delete()
    
    db.session.add_all(houses)
    db.session.commit()

    return jsonify( objects)

@main.route('/purchase/<int:spawnIndex>')
def purchase(spawnIndex):
   pass
   target = Spawn.query.get_or_404(spawnIndex)
#    fixed = target.__dict__.pop('_sa_instance_state')
   
   d = {c.name: getattr(target, c.name) for c in target.__table__.columns}
   d['forsale_price'] = round(random.normalvariate(d['base_price'], 10000))
   d['forsale_round'] = d['purchase_round']
   d.pop('id')
   db.session.add(Purchased(**d))
   db.session.commit()
   return jsonify( d )
