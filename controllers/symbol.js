
StockMarketApplication.SymbolController =Ember.ObjectController.extend({
    needs: ['marketDepth'],
    logoUrl: function() {
        var company = this.get('controllers.marketDepth.model');
        var symbol = company.get('symbolURL');
        return  symbol;

    }.property('controllers.marketDepth.model')
});

