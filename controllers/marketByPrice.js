
StockMarketApplication.MarketByPriceController =Ember.ArrayController.extend({

    needs: ['marketDepth'],
    companyName: function () {
        var company = this.get('controllers.marketDepth.model');
        return company.get('name');
    }.property('controllers.marketDepth.model'),

    buyOrders: function() {
        var company = this.get('controllers.marketDepth');
        var buyOrders = company.get('buyOrders');
        return  buyOrders;
    }.property('controllers.marketDepth.model.buyOrders'),

    sellOrders: function() {
        var company = this.get('controllers.marketDepth');
        var sellOrders = company.get('sellOrders');
        return  sellOrders;
    }.property('controllers.marketDepth.model.sellOrders'),

    numberBuyOrders: function () {
        var company = this.get('controllers.marketDepth.model');
        var buyOrders = company.get('buyOrders');
        console.log('maybe work');
        //var longSongs = this.filter(function(price) {
        //    console.log("in hereeee")
        //    return buyOrders.get('price') == 123;
        //})
        //console.log(longSongs);
        //return longSongs.get('length');

        //var temp = store.filter('buyOrder', function(post){
        //    return post.get('price')
        //});
        var temp = buyOrders.filter('buyOrders', function(record){
            return record.get('price') == 30;
        });

        console.log(temp);

    }.property('controllers.marketDepth.model.buyOrders')
});

//Ember.Handlebars.registerHelper('sumOrders', function(property, options) {
//
//    if (context > options.hash.compare)
//        return options.fn(this);
//    return options.inverse(this);
//});