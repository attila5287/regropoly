import random
import csv
import requests
from flask import render_template, url_for, flash, redirect, request, jsonify,Blueprint
from flask_login import login_user, current_user, logout_user, login_required
from app import db, bcrypt
from app.models import User, Nickname, Cityname
from app.users.forms import (
  RegistrationForm, LoginForm, UpdateAccountForm, RequestResetForm, ResetPasswordForm
)
from app.users.utils import save_picture

users = Blueprint('users', __name__)


# function that takes /register user input thru reg-form
@users.route("/regist3r", methods=['POST'])
def regist3r():
  pass
  hashed_password = bcrypt.generate_password_hash(
    request.form['password']).decode('utf-8')
  print('test pw')
  print(hashed_password)
  user = User(
    username=request.form['username'],
    email=request.form['email'],
    img_url= 0,
    password=hashed_password
  )
  db.session.add(user)
  db.session.commit()
  flash('Your account has been created! You are now able to log in', 'success')
  return redirect(url_for('users.login'))


# forms to register
@users.route("/register", methods=['GET', 'POST'])
def register():
  if current_user.is_authenticated:
    return redirect(url_for('main.display'))
  form = RegistrationForm()
  if form.validate_on_submit():
    hashed_password = bcrypt.generate_password_hash(
      form.password.data).decode('utf-8')
    user = User(
      username=form.username.data, 
      email=form.email.data, 
      img_url=form.img_url.data, 
      password=hashed_password,
          )
    db.session.add(user)
    db.session.commit()
    flash('Your account has been created! You are now able to log in', 'success')
    return redirect(url_for('users.login'))
  return render_template('register.html', title='Register', form=form)


@users.route("/login", methods=['GET', 'POST'])
def login():
  if current_user.is_authenticated:
    return redirect(url_for('main.display'))
  form = LoginForm()
  if form.validate_on_submit():
    pass
    user = User.query.filter_by(email=form.email.data).first()

    if user and bcrypt.check_password_hash(user.password, form.password.data):
      login_user(user, remember=form.remember.data)
      next_page = request.args.get('next')
      return redirect(next_page) if next_page else redirect(url_for('users.account'))
    else:
      flash('Login Unsuccessful. Please check email and password', 'danger')

  return render_template('login.html', title='Login', form=form)


@users.route("/logout")
def logout():
  logout_user()
  return redirect(url_for('main.display'))

# @users.route("/user/<string:username>")
# def user_posts(username):
#     page = request.args.get('page', 1, type=int)
#     user = User.query.filter_by(username=username).first_or_404()
#     posts = Post.query.filter_by(author=user)\
#         .order_by(Post.date_posted.desc())\
#         .paginate(page=page, per_page=5)
#     return render_template('user_posts.html', posts=posts, user=user)

@users.route("/user/<int:user_1d>/delete", methods=['GET', 'POST'])
def delete_user_by_ID(user_1d):
  pass

  User.query.filter_by(id=user_1d).delete()

  db.session.commit()

  flash('Test user have been deleted!', 'success')

  return redirect(url_for('main.display'))

@users.route("/account", methods=['GET', 'POST'])
@login_required
def account():
  pass
  form = UpdateAccountForm()
  form.img_url.data = random.choice(range(69))
  form.img_url.choices = [
      (n, 'suggested avatar #{} for: {}'.format(n,current_user.username)) for n in range(69)
  ]
  
  if request.method == 'POST':
    pass
    current_user.username = form.username.data
    current_user.email = form.email.data
    current_user.img_url = form.img_url.data
    print(form.img_url.data)
    db.session.commit()
    flash('Your account has been updated!', 'success')
    return redirect(url_for('users.account'))
  
  elif request.method == 'GET':
    form.username.data = current_user.username
    form.email.data = current_user.email
  
  return render_template('account.html', title='Account',
      form=form)

@users.route("/db/init/nicknames")
def db_init_nicknames():
    pass  # UPLOAD ZILLOW HOUSE VALUE INDEX CSV'S MERGED
    existing_data = Nickname.query.first()

    if existing_data:
        pass
        return jsonify({
            'status0': 'database exists',
            'status1': 'db init is one time only',
            'status2': 'no upload necessary',
        })
    else:
        pass
        csv_url = 'https://gist.githubusercontent.com/attila5287/0e5e9c50c942fa916a3f95f3b5aff6db/raw/65e78a999102d31268e20fb7fc736d2160e6afbb/nicknames.csv'

        with requests.get(csv_url, stream=True) as r:
            pass
            lines = (line.decode('utf-8') for line in r.iter_lines())
            csv_dict = [row for row in csv.DictReader(lines)]
            nicknames = [
                Nickname(**row) for row in csv_dict
            ]
            # print(inventory)
            db.session.add_all(nicknames)
            db.session.commit()

        return jsonify(csv_dict)

@users.route("/db/init/citynames")
def db_init_citynames():
    pass  # UPLOAD ZILLOW HOUSE VALUE INDEX CSV'S MERGED
    existing_data = Cityname.query.first()

    if existing_data:
        pass
        return jsonify({
            'status0': 'database exists',
            'status1': 'db init is one time only',
            'status2': 'no upload necessary',
        })
    else:
        pass
        csv_url = 'https://gist.githubusercontent.com/attila5287/fe989ea27010c473569caec860e6b169/raw/5de8b90f3d1b725fa76a7b2797ed4ab12024d764/co_cities.csv'

        with requests.get(csv_url, stream=True) as r:
            pass
            lines = (line.decode('utf-8') for line in r.iter_lines())
            csv_dict = [row for row in csv.DictReader(lines)]
            citynames = [
                Cityname(**row) for row in csv_dict
            ]
            # print(inventory)
            db.session.add_all(citynames)
            db.session.commit()

        return jsonify(csv_dict)

