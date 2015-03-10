StockMarketApplication.StockStateSummaryController = Ember.Controller.extend({

    sortProperties: [],
    sortedCompanies: Ember.computed.sort('model', 'sortProperties'),

    init: function() {
        // alert('casey');
    },

    actions: {

        buy: function(params) {
            this.transitionToRoute('placeBidOrder', params);
        },
        sell: function(params) {
            this.transitionToRoute('placeSellOrder', params);
        },
        sortBy: function(property) {
            console.log('Sorting Most Active by Volume');
            this.set('model', this.store.find('company'));
            this.set('sortProperties', [property]);
        },
        gainersSort: function() {
            alert('gainers sort');
        },
        losersSort: function() {
            alert('losers sort');
        }
    }
});

//needs. the controller to communicate from another controller