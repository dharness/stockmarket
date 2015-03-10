/**
 * Created by Abdelkader on 2015-02-03.
 */
StockMarketApplication.MarketDepthRoute = Ember.Route.extend({
    renderTemplate: function(){
        this.render('marketDepth', {
            outlet: 'marketDepth'
        });
        this.render('marketByOrder', {
            into: "marketDepth",
            outlet: 'marketByOrder'
        });
        this.render('marketByPrice', {
            into: "marketDepth",
            outlet: 'marketByPrice'
        });
        this.render('symbol', {
            into: "marketDepth",
            outlet: 'symbol'
        });
    },
    model: function(params) {
        return this.store.find('company', params.company_id);
    }
});