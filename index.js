// Code your solution in this file!

const returnFirstTwoDrivers = function (arr){
return arr.slice(0,2);
}
const returnLastTwoDrivers = function (arr){
    return arr.slice(arr.length-2,arr.length);
    }

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number){
    const funct = (fare) => number*fare;
    return funct;
}

function fareDoubler(fare){
    return createFareMultiplier(2)(fare);
}

function fareTripler(fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arr, cb){
return cb(arr);
}

