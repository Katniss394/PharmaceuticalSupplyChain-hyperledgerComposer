/**
 * @param {org.mypharma.druginventory.Sell} Sell 
 * @transaction 
 */

function shipConsig(tx) {
    if (!tx.status.soldOrNot) {
        tx.status.soldOrNot = true;
      	tx.status.buyer = tx.buyer;
        return getAssetRegistry('org.mypharma.druginventory.ifSold')
            .then(function (assetRegistry) {
                return assetRegistry.update(tx.status);
            });
    }
}