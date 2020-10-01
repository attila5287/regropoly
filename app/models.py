from sqlalchemy import Table, Column, Integer, String, MetaData, ForeignKey
from datetime import datetime
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from flask import current_app
from app import db, login_manager
from flask_login import UserMixin

@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))


class User(db.Model, UserMixin):
    pass
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(20), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False,
                           default='default.png')
    password = db.Column(db.String(60), nullable=False)
    # posts = db.relationship('Post', backref='author', lazy=True)

    def __repr__(self):
        return f"User('{self.username}', '{self.email}', '{self.image_file}')"

class Baseprice(db.Model):
    pass
    id = db.Column(db.Integer, primary_key=True)
    BasePriceLabel = db.Column(db.String(256), nullable=False)
    RegionName = db.Column(db.String(64), nullable=False)
    StateName = db.Column(db.String(256), nullable=False)
    State = db.Column(db.String(2), nullable=False)
    Metro = db.Column(db.String(256), nullable=False)
    CountyName = db.Column(db.String(256), nullable=False)
    BedrmCt = db.Column(db.Integer, nullable=False)
    RegionID = db.Column(db.Integer, nullable=False)
    SizeRank = db.Column(db.Integer, nullable=False)
    Round1 = db.Column(db.Integer, nullable=False)
    Round2 = db.Column(db.Integer, nullable=False)
    Round3 = db.Column(db.Integer, nullable=False)
    Round4 = db.Column(db.Integer, nullable=False)
    Round5 = db.Column(db.Integer, nullable=False)
    Round6 = db.Column(db.Integer, nullable=False)
    Round7 = db.Column(db.Integer, nullable=False)
    Round8 = db.Column(db.Integer, nullable=False)
    Round9 = db.Column(db.Integer, nullable=False)
    Round10 = db.Column(db.Integer, nullable=False)
    Round11 = db.Column(db.Integer, nullable=False)
    Round12 = db.Column(db.Integer, nullable=False)
    Round13 = db.Column(db.Integer, nullable=False)
    Round14 = db.Column(db.Integer, nullable=False)
    Round15 = db.Column(db.Integer, nullable=False)
    Round16 = db.Column(db.Integer, nullable=False)
    Round17 = db.Column(db.Integer, nullable=False)
    Round18 = db.Column(db.Integer, nullable=False)
    Round19 = db.Column(db.Integer, nullable=False)
    Round20 = db.Column(db.Integer, nullable=False)
    Round21 = db.Column(db.Integer, nullable=False)
    Round22 = db.Column(db.Integer, nullable=False)
    Round23 = db.Column(db.Integer, nullable=False)
    Round24 = db.Column(db.Integer, nullable=False)
    Round25 = db.Column(db.Integer, nullable=False)
    Round26 = db.Column(db.Integer, nullable=False)
    Round27 = db.Column(db.Integer, nullable=False)
    Round28 = db.Column(db.Integer, nullable=False)
    Round29 = db.Column(db.Integer, nullable=False)
    Round30 = db.Column(db.Integer, nullable=False)
    Round31 = db.Column(db.Integer, nullable=False)
    Round32 = db.Column(db.Integer, nullable=False)
    Round33 = db.Column(db.Integer, nullable=False)
    Round34 = db.Column(db.Integer, nullable=False)
    Round35 = db.Column(db.Integer, nullable=False)
    Round36 = db.Column(db.Integer, nullable=False)
    Round37 = db.Column(db.Integer, nullable=False)
    Round38 = db.Column(db.Integer, nullable=False)
    Round39 = db.Column(db.Integer, nullable=False)
    Round40 = db.Column(db.Integer, nullable=False)
    Round41 = db.Column(db.Integer, nullable=False)
    Round42 = db.Column(db.Integer, nullable=False)
    Round43 = db.Column(db.Integer, nullable=False)
    Round44 = db.Column(db.Integer, nullable=False)
    Round45 = db.Column(db.Integer, nullable=False)
    Round46 = db.Column(db.Integer, nullable=False)
    Round47 = db.Column(db.Integer, nullable=False)
    Round48 = db.Column(db.Integer, nullable=False)
    Round49 = db.Column(db.Integer, nullable=False)
    Round50 = db.Column(db.Integer, nullable=False)
    Round51 = db.Column(db.Integer, nullable=False)
    Round52 = db.Column(db.Integer, nullable=False)
    Round53 = db.Column(db.Integer, nullable=False)
    Round54 = db.Column(db.Integer, nullable=False)
    Round55 = db.Column(db.Integer, nullable=False)
    Round56 = db.Column(db.Integer, nullable=False)
    Round57 = db.Column(db.Integer, nullable=False)
    Round58 = db.Column(db.Integer, nullable=False)
    Round59 = db.Column(db.Integer, nullable=False)
    Round60 = db.Column(db.Integer, nullable=False)
    Round61 = db.Column(db.Integer, nullable=False)
    Round62 = db.Column(db.Integer, nullable=False)
    Round63 = db.Column(db.Integer, nullable=False)
    Round64 = db.Column(db.Integer, nullable=False)
    Round65 = db.Column(db.Integer, nullable=False)
    Round66 = db.Column(db.Integer, nullable=False)
    Round67 = db.Column(db.Integer, nullable=False)
    Round68 = db.Column(db.Integer, nullable=False)
    Round69 = db.Column(db.Integer, nullable=False)
    Round70 = db.Column(db.Integer, nullable=False)
    Round71 = db.Column(db.Integer, nullable=False)
    Round72 = db.Column(db.Integer, nullable=False)
    Round73 = db.Column(db.Integer, nullable=False)
    Round74 = db.Column(db.Integer, nullable=False)
    Round75 = db.Column(db.Integer, nullable=False)
    Round76 = db.Column(db.Integer, nullable=False)
    Round77 = db.Column(db.Integer, nullable=False)
    Round78 = db.Column(db.Integer, nullable=False)
    Round79 = db.Column(db.Integer, nullable=False)
    Round80 = db.Column(db.Integer, nullable=False)
    Round81 = db.Column(db.Integer, nullable=False)
    Round82 = db.Column(db.Integer, nullable=False)
    Round83 = db.Column(db.Integer, nullable=False)
    Round84 = db.Column(db.Integer, nullable=False)
    Round85 = db.Column(db.Integer, nullable=False)
    Round86 = db.Column(db.Integer, nullable=False)
    Round87 = db.Column(db.Integer, nullable=False)
    Round88 = db.Column(db.Integer, nullable=False)
    Round89 = db.Column(db.Integer, nullable=False)
    Round90 = db.Column(db.Integer, nullable=False)
    Round91 = db.Column(db.Integer, nullable=False)
    Round92 = db.Column(db.Integer, nullable=False)
    Round93 = db.Column(db.Integer, nullable=False)
    Round94 = db.Column(db.Integer, nullable=False)
    Round95 = db.Column(db.Integer, nullable=False)
    Round96 = db.Column(db.Integer, nullable=False)
    Round97 = db.Column(db.Integer, nullable=False)
    Round98 = db.Column(db.Integer, nullable=False)
    Round99 = db.Column(db.Integer, nullable=False)
    Round100 = db.Column(db.Integer, nullable=False)
    Round101 = db.Column(db.Integer, nullable=False)
    Round102 = db.Column(db.Integer, nullable=False)
    Round103 = db.Column(db.Integer, nullable=False)
    Round104 = db.Column(db.Integer, nullable=False)
    Round105 = db.Column(db.Integer, nullable=False)
    Round106 = db.Column(db.Integer, nullable=False)
    Round107 = db.Column(db.Integer, nullable=False)
    Round108 = db.Column(db.Integer, nullable=False)
    Round109 = db.Column(db.Integer, nullable=False)
    Round110 = db.Column(db.Integer, nullable=False)
    Round111 = db.Column(db.Integer, nullable=False)
    Round112 = db.Column(db.Integer, nullable=False)
    Round113 = db.Column(db.Integer, nullable=False)
    Round114 = db.Column(db.Integer, nullable=False)
    Round115 = db.Column(db.Integer, nullable=False)
    Round116 = db.Column(db.Integer, nullable=False)
    Round117 = db.Column(db.Integer, nullable=False)
    Round118 = db.Column(db.Integer, nullable=False)
    Round119 = db.Column(db.Integer, nullable=False)
    Round120 = db.Column(db.Integer, nullable=False)
    Round121 = db.Column(db.Integer, nullable=False)
    Round122 = db.Column(db.Integer, nullable=False)
    Round123 = db.Column(db.Integer, nullable=False)
    Round124 = db.Column(db.Integer, nullable=False)
    Round125 = db.Column(db.Integer, nullable=False)
    Round126 = db.Column(db.Integer, nullable=False)
    Round127 = db.Column(db.Integer, nullable=False)
    Round128 = db.Column(db.Integer, nullable=False)
    Round129 = db.Column(db.Integer, nullable=False)
    Round130 = db.Column(db.Integer, nullable=False)
    Round131 = db.Column(db.Integer, nullable=False)
    Round132 = db.Column(db.Integer, nullable=False)
    Round133 = db.Column(db.Integer, nullable=False)
    Round134 = db.Column(db.Integer, nullable=False)
    Round135 = db.Column(db.Integer, nullable=False)
    Round136 = db.Column(db.Integer, nullable=False)
    Round137 = db.Column(db.Integer, nullable=False)
    Round138 = db.Column(db.Integer, nullable=False)
    Round139 = db.Column(db.Integer, nullable=False)
    Round140 = db.Column(db.Integer, nullable=False)
    Round141 = db.Column(db.Integer, nullable=False)
    Round142 = db.Column(db.Integer, nullable=False)
    Round143 = db.Column(db.Integer, nullable=False)
    Round144 = db.Column(db.Integer, nullable=False)
    Round145 = db.Column(db.Integer, nullable=False)
    Round146 = db.Column(db.Integer, nullable=False)
    Round147 = db.Column(db.Integer, nullable=False)
    Round148 = db.Column(db.Integer, nullable=False)
    Round149 = db.Column(db.Integer, nullable=False)
    Round150 = db.Column(db.Integer, nullable=False)
    Round151 = db.Column(db.Integer, nullable=False)
    Round152 = db.Column(db.Integer, nullable=False)
    Round153 = db.Column(db.Integer, nullable=False)
    Round154 = db.Column(db.Integer, nullable=False)
    Round155 = db.Column(db.Integer, nullable=False)
    Round156 = db.Column(db.Integer, nullable=False)
    Round157 = db.Column(db.Integer, nullable=False)
    Round158 = db.Column(db.Integer, nullable=False)
    Round159 = db.Column(db.Integer, nullable=False)
    Round160 = db.Column(db.Integer, nullable=False)
    Round161 = db.Column(db.Integer, nullable=False)
    Round162 = db.Column(db.Integer, nullable=False)
    Round163 = db.Column(db.Integer, nullable=False)
    Round164 = db.Column(db.Integer, nullable=False)
    Round165 = db.Column(db.Integer, nullable=False)
    Round166 = db.Column(db.Integer, nullable=False)
    Round167 = db.Column(db.Integer, nullable=False)
    Round168 = db.Column(db.Integer, nullable=False)
    Round169 = db.Column(db.Integer, nullable=False)
    Round170 = db.Column(db.Integer, nullable=False)
    Round171 = db.Column(db.Integer, nullable=False)
    Round172 = db.Column(db.Integer, nullable=False)
    Round173 = db.Column(db.Integer, nullable=False)
    Round174 = db.Column(db.Integer, nullable=False)
    Round175 = db.Column(db.Integer, nullable=False)
    Round176 = db.Column(db.Integer, nullable=False)
    Round177 = db.Column(db.Integer, nullable=False)
    Round178 = db.Column(db.Integer, nullable=False)
    Round179 = db.Column(db.Integer, nullable=False)
    Round180 = db.Column(db.Integer, nullable=False)
    Round181 = db.Column(db.Integer, nullable=False)
    Round182 = db.Column(db.Integer, nullable=False)
    Round183 = db.Column(db.Integer, nullable=False)
    Round184 = db.Column(db.Integer, nullable=False)
    Round185 = db.Column(db.Integer, nullable=False)
    Round186 = db.Column(db.Integer, nullable=False)
    Round187 = db.Column(db.Integer, nullable=False)
    Round188 = db.Column(db.Integer, nullable=False)
    Round189 = db.Column(db.Integer, nullable=False)
    Round190 = db.Column(db.Integer, nullable=False)
    Round191 = db.Column(db.Integer, nullable=False)
    Round192 = db.Column(db.Integer, nullable=False)
    Round193 = db.Column(db.Integer, nullable=False)
    Round194 = db.Column(db.Integer, nullable=False)
    Round195 = db.Column(db.Integer, nullable=False)
    Round196 = db.Column(db.Integer, nullable=False)
    Round197 = db.Column(db.Integer, nullable=False)
    Round198 = db.Column(db.Integer, nullable=False)
    Round199 = db.Column(db.Integer, nullable=False)
    Round200 = db.Column(db.Integer, nullable=False)
    Round201 = db.Column(db.Integer, nullable=False)
    Round202 = db.Column(db.Integer, nullable=False)
    Round203 = db.Column(db.Integer, nullable=False)
    Round204 = db.Column(db.Integer, nullable=False)
    Round205 = db.Column(db.Integer, nullable=False)
    Round206 = db.Column(db.Integer, nullable=False)
    Round207 = db.Column(db.Integer, nullable=False)
    Round208 = db.Column(db.Integer, nullable=False)
    Round209 = db.Column(db.Integer, nullable=False)
    Round210 = db.Column(db.Integer, nullable=False)
    Round211 = db.Column(db.Integer, nullable=False)
    Round212 = db.Column(db.Integer, nullable=False)
    Round213 = db.Column(db.Integer, nullable=False)
    Round214 = db.Column(db.Integer, nullable=False)
    Round215 = db.Column(db.Integer, nullable=False)
    Round216 = db.Column(db.Integer, nullable=False)
    Round217 = db.Column(db.Integer, nullable=False)
    Round218 = db.Column(db.Integer, nullable=False)
    Round219 = db.Column(db.Integer, nullable=False)
    Round220 = db.Column(db.Integer, nullable=False)
    Round221 = db.Column(db.Integer, nullable=False)
    Round222 = db.Column(db.Integer, nullable=False)
    Round223 = db.Column(db.Integer, nullable=False)
    Round224 = db.Column(db.Integer, nullable=False)
    Round225 = db.Column(db.Integer, nullable=False)
    Round226 = db.Column(db.Integer, nullable=False)
    Round227 = db.Column(db.Integer, nullable=False)
    Round228 = db.Column(db.Integer, nullable=False)
    Round229 = db.Column(db.Integer, nullable=False)
    Round230 = db.Column(db.Integer, nullable=False)
    Round231 = db.Column(db.Integer, nullable=False)
    Round232 = db.Column(db.Integer, nullable=False)
    Round233 = db.Column(db.Integer, nullable=False)
    Round234 = db.Column(db.Integer, nullable=False)
    Round235 = db.Column(db.Integer, nullable=False)
    Round236 = db.Column(db.Integer, nullable=False)
    Round237 = db.Column(db.Integer, nullable=False)
    Round238 = db.Column(db.Integer, nullable=False)
    Round239 = db.Column(db.Integer, nullable=False)
    Round240 = db.Column(db.Integer, nullable=False)
    Round241 = db.Column(db.Integer, nullable=False)
    Round242 = db.Column(db.Integer, nullable=False)
    Round243 = db.Column(db.Integer, nullable=False)
    Round244 = db.Column(db.Integer, nullable=False)
    Round245 = db.Column(db.Integer, nullable=False)
    Round246 = db.Column(db.Integer, nullable=False)
    Round247 = db.Column(db.Integer, nullable=False)
    Round248 = db.Column(db.Integer, nullable=False)


    def __repr__(self):
        return f"base prices created"


class Spawn(db.Model):
    pass
    img_url = db.Column(db.String(256), nullable=False)
    id = db.Column(db.Integer, primary_key=True)
    BasePriceLabel = db.Column(db.String(256), nullable=False)
    BedrmCt = db.Column(db.Integer, nullable=False)
    CountyName = db.Column(db.String(256), nullable=False)
    Metro = db.Column(db.String(256), nullable=False)
    RegionID = db.Column(db.Integer, nullable=False)
    RegionName = db.Column(db.String(256), nullable=False)
    SizeRank = db.Column(db.Integer, nullable=False)
    State = db.Column(db.String(256), nullable=False)
    StateName = db.Column(db.String(256), nullable=False)
    purchase_price = db.Column(db.Integer, nullable=False)
    purchase_round = db.Column(db.Integer, nullable=False)
    base_price = db.Column(db.Integer, nullable=False)
    base_price01 = db.Column(db.Integer, nullable=False)
    base_price02 = db.Column(db.Integer, nullable=False)
    base_price03 = db.Column(db.Integer, nullable=False)    

class Purchased(db.Model):
    pass
    id = db.Column(db.Integer, primary_key=True)
    BasePriceLabel = db.Column(db.String(256), nullable=False)
    BedrmCt = db.Column(db.Integer, nullable=False)
    CountyName = db.Column(db.String(256), nullable=False)
    Metro = db.Column(db.String(256), nullable=False)
    RegionID = db.Column(db.Integer, nullable=False)
    RegionName = db.Column(db.String(256), nullable=False)
    SizeRank = db.Column(db.Integer, nullable=False)
    State = db.Column(db.String(256), nullable=False)
    StateName = db.Column(db.String(256), nullable=False)
    img_url = db.Column(db.String(256), nullable=False)
    purchase_price = db.Column(db.Integer, nullable=False)
    purchase_round = db.Column(db.Integer, nullable=False)
    forsale_price = db.Column(db.Integer, nullable=False)
    forsale_round = db.Column(db.Integer, nullable=False)
    base_price = db.Column(db.Integer, nullable=False)
    base_price01 = db.Column(db.Integer, nullable=False)
    base_price02 = db.Column(db.Integer, nullable=False)
    base_price03 = db.Column(db.Integer, nullable=False)
    
class Player(db.Model):
    pass
    id = db.Column(db.Integer, primary_key=True)
    avatar_url =db.Column(db.String(256), nullable=False)
    player_name =db.Column(db.String(256), nullable=False)
    
    avlb_funds = db.Column(db.Integer, nullable=False)
    high_worth = db.Column(db.Integer, nullable=False)
    low_worth = db.Column(db.Integer, nullable=False)
    rtn_on_inv =db.Column(db.Integer, nullable=False)
    num_of_inv =db.Column(db.Integer, nullable=False)
    