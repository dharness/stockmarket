// We create a model of type StockMarketApplication.Company
StockMarketApplication.BuyOrder = DS.Model.extend({
    //relationships
    company: DS.belongsTo('company'),

    price: DS.attr('number', {
        defaultValue: 0
    }),
    volume: DS.attr('number', {
        defaultValue: 0
    })
});