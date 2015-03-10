StockMarketApplication.PlaceBidOrderController = Ember.ObjectController.extend({
    //needs: ['marketDepth'],
    logoUrl: function() {
        //TODO: whatever this first gets set to never changes. but should change when controllers.marketdepth.model changes :(
        var company = this.get('model'); //this.get('controllers.marketDepth.model');
        var symbol = company.get('symbolURL');
        return symbol;
    }.property('model'), //no need for controllers.marketDepth.model

    actions: {

        cancel: function() {
            this.transitionToRoute('stockStateSummary');
        },

        submit: function() {

            var price = parseFloat(this.get('price'));
            var volume = parseInt(this.get('volume'));

            var store = this.store;

            store.createRecord('buyOrder', {
                price: price,
                volume: volume
            });

        }
    }
});