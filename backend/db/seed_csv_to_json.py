#D-1/backend/db行って，python seed_csv_to_json.pyで実行
import json
from collections import OrderedDict
import csv

users_json_list = []
users_keys = ('name', 'email', 'counts')
with open('./users.csv', 'r') as f:
    for row in csv.DictReader(f,users_keys):
        users_json_list.append(row)

with open('./users.json', 'w') as f:
    json.dump(users_json_list, f, ensure_ascii=False)

with open('./users.json', 'r') as f:
    json_output = json.load(f, object_pairs_hook=OrderedDict)

themes_json_list = []
themes_keys = ('user_id', 'name', 'rooms_num', 'close_time', 'is_closed')
with open('./themes.csv', 'r') as f:
    for row in csv.DictReader(f, themes_keys):
        themes_json_list.append(row)

with open('./themes.json', 'w') as f:
    json.dump(themes_json_list, f, ensure_ascii=False)

with open('./themes.json', 'r') as f:
    json_output = json.load(f, object_pairs_hook=OrderedDict)

user_taps_json_list = []
user_taps_keys = ('user_id', 'room_id', 'counts')
with open('./user_taps.csv', 'r') as f:
    for row in csv.DictReader(f, user_taps_keys):
        user_taps_json_list.append(row)

with open('./user_taps.json', 'w') as f:
    json.dump(user_taps_json_list, f, ensure_ascii=False)

with open('./user_taps.json', 'r') as f:
    json_output = json.load(f, object_pairs_hook=OrderedDict)

rooms_json_list = []
rooms_keys = ('theme_id', 'name')

with open('./rooms.csv', 'r') as f:
    for row in csv.DictReader(f, rooms_keys):
        rooms_json_list.append(row)

with open('./rooms.json', 'w') as f:
    json.dump(rooms_json_list, f, ensure_ascii=False)

with open('./rooms.json', 'r') as f:
    json_output = json.load(f, object_pairs_hook=OrderedDict)
