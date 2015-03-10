/**
 * Created by Abdelkader on 2015-02-03.
 */
StockMarketApplication.PlaceSellOrderRoute = Ember.Route.extend({
    renderTemplate: function(){
        this.render('placeSellOrder', {
            outlet: 'placeSellOrder',
            into: 'application'
        });
    },model: function(params) {
        return this.store.find('company', params.company_id);
    }
});