function longestCommonPrefix(strs: string[]): string {
    let sorted = strs.sort((a,b)=>(a<b?-1:1));
    for (let i = 0; i<sorted[0].length; i++){
        if (sorted[0][i] !== sorted[sorted.length -1][i])
        return sorted[0].substring(0, i);
    }
    return sorted[0];
};