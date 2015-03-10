StockMarketApplication = Ember.Application.create();

StockMarketApplication.CompanyAdapter = DS.FixtureAdapter;

StockMarketApplication.BuyOrderAdapter = DS.LSAdapter.extend({
    namespace: 'StockMarketApplication'
});
StockMarketApplication.SaleOrderAdapter = DS.LSAdapter.extend({
    namespace: 'StockMarketApplication'
});

