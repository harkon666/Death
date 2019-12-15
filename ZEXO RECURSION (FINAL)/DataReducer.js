function dataReducer(data) {
    
}
console.log(dataReducer('abcdxefgh5wi')); // 'x,5,w'
console.log(dataReducer('opqrstu')); // ''  
console.log(dataReducer('acdefghij')); // 'c,d,e,f,g,h,i,j'
console.log(dataReducer('testu')); // 'e,s,t'