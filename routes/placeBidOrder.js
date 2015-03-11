/**
 * Created by Abdelkader on 2015-02-03.
 */
StockMarketApplication.PlaceBidOrderRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render({
            outlet: 'buySell'
        });
    },
    model: function(params) {
        return this.store.find('company', params.company_id);
    }

});