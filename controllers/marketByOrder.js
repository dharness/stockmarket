
StockMarketApplication.MarketByOrderController =Ember.ArrayController.extend({
    needs: ['marketDepth'],
    companyName: function () {
        var company = this.get('controllers.marketDepth.model');
        return company.get('name');
    }.property('controllers.marketDepth.model'),

    buyOrders: function(){
        var company = this.get('controllers.marketDepth.model');
        var buyOrders = company.get('buyOrders');
        return  buyOrders;
    }.property('controllers.marketDepth.model.buyOrders'),

    sellOrders: function() {
        var company = this.get('controllers.marketDepth.model');
        var sellOrders = company.get('sellOrders');
        return  sellOrders;
    }.property('controllers.marketDepth.model.sellOrders')
});