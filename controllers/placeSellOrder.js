
StockMarketApplication.PlaceSellOrderController =Ember.ObjectController.extend({
    //needs: ['marketDepth'],
    logoUrl: function() {
        //TODO: whatever this first gets set to never changes. but should change when controllers.marketdepth.model changes :(
        var company = this.get('model'); //this.get('controllers.marketDepth.model');
        var symbol = company.get('symbolURL');
        return  symbol;
    }.property('controllers.marketDepth.model'),

    actions: {
        cancel: function(){
            this.transitionToRoute('stockStateSummary');
        },
        save: function() {

            var self = this;

            var newSellOrder = this.store.createRecord('sellOrder', {
                price: self.get('price'),
                volume: self.get('volume')
                //name: this.get('name')
            });
            newSellOrder.save();

            var company = self.get('model');
            company.get('sellOrders').pushObject(newSellOrder); //to add newBidOrder object to the company object
            company.save();

            console.log('just created and saved new sell order');
            this.transitionToRoute('stockStateSummary');
        }

    }//,
    //logoUrl: function() {
    //    var company = this.get('controllers.marketDepth.model');
    //    var symbol = company.get('symbolURL');
    //    return  symbol;
    //}.property('controllers.marketDepth.model')
});