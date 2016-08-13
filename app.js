var app = require('express')(),
    mobile = require('azure-mobile-apps')({ homePage: true }),
    glimpse = require('./glimpse')

glimpse.init()

mobile.tables.add('todoitem')
app.use(mobile)
app.listen(3000)