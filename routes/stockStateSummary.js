/**
 * Created by Abdelkader on 2015-02-03.
 */
StockMarketApplication.StockStateSummaryRoute = Ember.Route.extend({
    renderTemplate: function() {
        this.render('main', {
            outlet: 'main'
        });
    },
    model: function() {
        return this.store.find('company');
    }
});