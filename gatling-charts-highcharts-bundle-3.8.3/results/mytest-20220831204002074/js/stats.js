var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1000",
        "ok": "432",
        "ko": "568"
    },
    "minResponseTime": {
        "total": "6957",
        "ok": "7048",
        "ko": "6957"
    },
    "maxResponseTime": {
        "total": "11443",
        "ok": "11426",
        "ko": "11443"
    },
    "meanResponseTime": {
        "total": "9505",
        "ok": "9395",
        "ko": "9589"
    },
    "standardDeviation": {
        "total": "1258",
        "ok": "1138",
        "ko": "1335"
    },
    "percentiles1": {
        "total": "9953",
        "ok": "8956",
        "ko": "10076"
    },
    "percentiles2": {
        "total": "10596",
        "ok": "10500",
        "ko": "10641"
    },
    "percentiles3": {
        "total": "11228",
        "ok": "11245",
        "ko": "11214"
    },
    "percentiles4": {
        "total": "11381",
        "ok": "11381",
        "ko": "11369"
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
    "count": 432,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 568,
    "percentage": 57
},
    "meanNumberOfRequestsPerSecond": {
        "total": "76.923",
        "ok": "33.231",
        "ko": "43.692"
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
        "total": "1000",
        "ok": "432",
        "ko": "568"
    },
    "minResponseTime": {
        "total": "6957",
        "ok": "7048",
        "ko": "6957"
    },
    "maxResponseTime": {
        "total": "11443",
        "ok": "11426",
        "ko": "11443"
    },
    "meanResponseTime": {
        "total": "9505",
        "ok": "9395",
        "ko": "9589"
    },
    "standardDeviation": {
        "total": "1258",
        "ok": "1138",
        "ko": "1335"
    },
    "percentiles1": {
        "total": "9951",
        "ok": "8956",
        "ko": "10076"
    },
    "percentiles2": {
        "total": "10596",
        "ok": "10500",
        "ko": "10641"
    },
    "percentiles3": {
        "total": "11228",
        "ok": "11245",
        "ko": "11214"
    },
    "percentiles4": {
        "total": "11381",
        "ok": "11381",
        "ko": "11369"
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
    "count": 432,
    "percentage": 43
},
    "group4": {
    "name": "failed",
    "count": 568,
    "percentage": 57
},
    "meanNumberOfRequestsPerSecond": {
        "total": "76.923",
        "ok": "33.231",
        "ko": "43.692"
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
