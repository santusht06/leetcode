/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
    // 1. Fulfill the overlapping requirement: min(need1, need2)
    // We either buy type 3 items or a pair of type 1 + type 2 items.
    const common = Math.min(need1, need2);
    const pairCost = Math.min(costBoth, cost1 + cost2);
    
    // 2. Fulfill the remaining need1 (if any)
    // Even for a single requirement, type 3 might be cheaper than type 1.
    const rem1 = need1 - common;
    const singleCost1 = Math.min(cost1, costBoth);
    
    // 3. Fulfill the remaining need2 (if any)
    const rem2 = need2 - common;
    const singleCost2 = Math.min(cost2, costBoth);
    
    return (common * pairCost) + (rem1 * singleCost1) + (rem2 * singleCost2);
};