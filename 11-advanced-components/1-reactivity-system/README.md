# 11-advanced-components

## 1-reactivity-system

```
node 
.load example.js
total 
# print 10
salePrice 
# print 4.5
data.price = 20
total
# print now 20 the reactive data has been updated
salePrice
# print now 18
data.quantity = 10
total
# print now 200 because of the updated quantity
```