/**
 * Created by Abdelkader on 2015-02-03.
 */
StockMarketApplication.ApplicationRoute = Ember.Route.extend({
    model: function(params) {
        return this.store.find('post', params.post_id);
    }
    renderTemplate: function() {
        this._super();
        this.render('main', {
            outlet: 'main'
        });
    }

});