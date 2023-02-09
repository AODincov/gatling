var stats = {
    type: "GROUP",
name: "Global Information",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "Global Information",
    "numberOfRequests": {
        "total": "33000",
        "ok": "29503",
        "ko": "3497"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "12751",
        "ok": "11572",
        "ko": "12751"
    },
    "meanResponseTime": {
        "total": "1119",
        "ok": "398",
        "ko": "7204"
    },
    "standardDeviation": {
        "total": "2989",
        "ok": "1887",
        "ko": "3588"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "8295"
    },
    "percentiles2": {
        "total": "7",
        "ok": "6",
        "ko": "10459"
    },
    "percentiles3": {
        "total": "9875",
        "ok": "15",
        "ko": "11865"
    },
    "percentiles4": {
        "total": "11572",
        "ok": "10019",
        "ko": "12264"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28223,
    "percentage": 86
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1280,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 3497,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "471.429",
        "ok": "421.471",
        "ko": "49.957"
    }
},
contents: {
"req_get-token-29748": {
        type: "REQUEST",
        name: "get token",
path: "get token",
pathFormatted: "req_get-token-29748",
stats: {
    "name": "get token",
    "numberOfRequests": {
        "total": "33000",
        "ok": "29503",
        "ko": "3497"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "0",
        "ko": "40"
    },
    "maxResponseTime": {
        "total": "12751",
        "ok": "11572",
        "ko": "12751"
    },
    "meanResponseTime": {
        "total": "1119",
        "ok": "398",
        "ko": "7204"
    },
    "standardDeviation": {
        "total": "2989",
        "ok": "1887",
        "ko": "3588"
    },
    "percentiles1": {
        "total": "5",
        "ok": "5",
        "ko": "8295"
    },
    "percentiles2": {
        "total": "7",
        "ok": "6",
        "ko": "10459"
    },
    "percentiles3": {
        "total": "9875",
        "ok": "15",
        "ko": "11865"
    },
    "percentiles4": {
        "total": "11572",
        "ok": "10019",
        "ko": "12264"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 28223,
    "percentage": 86
},
    "group2": {
    "name": "800 ms < t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t > 1200 ms",
    "count": 1280,
    "percentage": 4
},
    "group4": {
    "name": "failed",
    "count": 3497,
    "percentage": 11
},
    "meanNumberOfRequestsPerSecond": {
        "total": "471.429",
        "ok": "421.471",
        "ko": "49.957"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}
