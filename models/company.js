//need to add DS hasMany('buyOrder')
// DS belongsTO('company')
// We create a model of type StockMarketApplication.Company
StockMarketApplication.Company = DS.Model.extend({
    name: DS.attr(),
    openPrice: DS.attr(),
    symbolURL: DS.attr(),
    shareVolume: DS.attr(),
    changeDirection: DS.attr(),

    //relationships
    buyOrders: DS.hasMany('buyOrder'),
    sellOrders: DS.hasMany('sellOrder')
});