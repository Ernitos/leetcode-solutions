type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val){
    const trueValue = val
    return{
        toBe: function(newVal){
            if(newVal!== trueValue){
                throw new Error("Not Equal")
            } else return true
        },
        notToBe: function(newVal){
            if(val===newVal){ 
                throw new Error("Equal")
            
            }
            return true
        } 
          
        
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */