/**
 * Created by Abdelkader on 2015-01-31.
 */
StockMarketApplication.Router.map(function() {
    this.resource('stockStateSummary', {path: '/'},function(){
        this.resource('marketDepth', {path: 'marketDepth/:company_id'});
        this.resource('placeBidOrder', {path: 'placeBidOrder/:company_id'});
        this.resource('placeSellOrder', {path: 'placeSellOrder/:company_id'});
    });
});
