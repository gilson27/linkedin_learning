# demonstrate hashtable usage


# TODO: create a hashtable all at once
items1 = dict({"k1": 1, "k2": 2, "k3": "three"})
print(items1)
# TODO: create a hashtable progressively
item2 = {}
item2["k1"] = 1
item2["k2"] = "two"
item2["k3"] = 3
print(item2)
# TODO: try to access a nonexistent key
# print(item2[3])

# TODO: replace an item
item2["k2"] = 56
print(item2)

# TODO: iterate the keys and values in the dictionary
for k,v in item2.items():
    print("Key ", k, ":Val ", v)