export function maximumProfit(stockPrices) {
    if(stockPrices.length === 0) return 0

    let runningProfit = 0
    let maxProfit = 0

    for(let i = 1; i < stockPrices.length; i++) {
        const dailyProfit = stockPrices[i] - stockPrices[i - 1]
        
        if(runningProfit + dailyProfit > 0) runningProfit += dailyProfit
        
        maxProfit = Math.max(runningProfit, maxProfit)
    }

    return maxProfit;
}