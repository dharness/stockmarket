
StockMarketApplication.PlaceBidOrderController =Ember.ObjectController.extend({
    //needs: ['marketDepth'],
    logoUrl: function() {
        //TODO: whatever this first gets set to never changes. but should change when controllers.marketdepth.model changes :(
        var company = this.get('model'); //this.get('controllers.marketDepth.model');
        var symbol = company.get('symbolURL');
        return  symbol;
    }.property('model'), //no need for controllers.marketDepth.model

    actions: {
        cancel: function () {
            this.transitionToRoute('stockStateSummary');
        },
        save: function () {

            var self = this; //to maintain the scope of this.

            // ============== New Buy Order Record ============== //
            var newBidOrder = self.store.createRecord('buyOrder', {
                price: self.get('price'),
                volume: self.get('volume')
      //          name: self.get('name') ???
            });
            newBidOrder.save();

            var company = self.get('model');
            company.get('buyOrders').pushObject(newBidOrder); //to add newBidOrder object to the company object
            company.save();

            console.log('just created and saved new buy order');

            // ============== Update Daily Volume ============== //
            var updatingVolume = this.get('model');
            updatingVolume.set('shareVolume', updatingVolume.get('shareVolume') + parseFloat(this.get('volume')));
            console.log('Purchased: ' + parseFloat(this.get('volume')) + " many shares");

            this.transitionToRoute('stockStateSummary');
        }
    }//,
    //logoUrl: function() {
    //    var company = this.get('controllers.marketDepth.model');
    //    var symbol = company.get('symbolURL');
    //    return  symbol;
    //}.property('controllers.marketDepth.model')
});