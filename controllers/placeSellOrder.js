StockMarketApplication.PlaceSellOrderController = Ember.ObjectController.extend({
    //needs: ['marketDepth'],
    logoUrl: function() {
        //TODO: whatever this first gets set to never changes. but should change when controllers.marketdepth.model changes :(
        var company = this.get('model'); //this.get('controllers.marketDepth.model');
        var symbol = company.get('symbolURL');
        return symbol;
    }.property('controllers.marketDepth.model'),

    actions: {
        cancel: function() {
            this.transitionToRoute('stockStateSummary');
        },
        submit: function() {

            var price = parseFloat(this.get('price'));
            var volume = parseInt(this.get('volume'));

            this.store.createRecord('sellOrder', {
                price: price,
                volume: volume
            });

            var bids = this.get('model').get('buyOrders');
            console.log(bids);

            bids.forEach(function(item, index) {
                console.log(item);
            });




            if (volume > sharesVolume) {

                item.set('numberOfShares', volume - sharesVolume);
                var currentVolume = company.get('shareVolume');
                company.set('shareVolume', parseInt(currentVolume) + parseInt(sharesVolume));
                sharesVolume = 0;

            } else if (volume == sharesVolume) {

                var currentVolume = company.get('shareVolume');
                company.set('shareVolume', parseInt(currentVolume) + parseInt(sharesVolume));
                sharesVolume = 0;
                toDelete.push(item);

            } else if (volume < sharesVolume) {

                var currentVolume = company.get('shareVolume');
                company.set('shareVolume', parseInt(currentVolume) + parseInt(volume));
                sharesVolume = sharesVolume - volume;
                toDelete.push(item);

            }

        }

    }
});