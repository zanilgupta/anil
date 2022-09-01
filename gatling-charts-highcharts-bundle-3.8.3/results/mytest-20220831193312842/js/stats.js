var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "50000",
        "ok": "3077",
        "ko": "46923"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1616",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "327976",
        "ok": "87071",
        "ko": "327976"
    },
    "meanResponseTime": {
        "total": "28559",
        "ok": "16717",
        "ko": "29336"
    },
    "standardDeviation": {
        "total": "56689",
        "ok": "21888",
        "ko": "58165"
    },
    "percentiles1": {
        "total": "4073",
        "ok": "5938",
        "ko": "1"
    },
    "percentiles2": {
        "total": "33548",
        "ok": "18240",
        "ko": "36137"
    },
    "percentiles3": {
        "total": "104033",
        "ok": "73251",
        "ko": "104067"
    },
    "percentiles4": {
        "total": "281935",
        "ok": "86829",
        "ko": "281936"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 3077,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 46923,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "115.741",
        "ok": "7.123",
        "ko": "108.618"
    }
},
contents: {
"req_get-kv-f2b39": {
        type: "REQUEST",
        name: "get kv",
path: "get kv",
pathFormatted: "req_get-kv-f2b39",
stats: {
    "name": "get kv",
    "numberOfRequests": {
        "total": "50000",
        "ok": "3077",
        "ko": "46923"
    },
    "minResponseTime": {
        "total": "0",
        "ok": "1616",
        "ko": "0"
    },
    "maxResponseTime": {
        "total": "327976",
        "ok": "87071",
        "ko": "327976"
    },
    "meanResponseTime": {
        "total": "28559",
        "ok": "16717",
        "ko": "29336"
    },
    "standardDeviation": {
        "total": "56689",
        "ok": "21888",
        "ko": "58165"
    },
    "percentiles1": {
        "total": "4084",
        "ok": "5938",
        "ko": "1"
    },
    "percentiles2": {
        "total": "33619",
        "ok": "18240",
        "ko": "36137"
    },
    "percentiles3": {
        "total": "104033",
        "ok": "73251",
        "ko": "104069"
    },
    "percentiles4": {
        "total": "281935",
        "ok": "86829",
        "ko": "281936"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 3077,
    "percentage": 6
},
    "group4": {
    "name": "failed",
    "count": 46923,
    "percentage": 94
},
    "meanNumberOfRequestsPerSecond": {
        "total": "115.741",
        "ok": "7.123",
        "ko": "108.618"
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
