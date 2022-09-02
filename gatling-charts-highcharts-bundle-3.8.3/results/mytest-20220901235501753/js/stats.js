var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2036",
        "ok": "2036",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "617",
        "ok": "617",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "554",
        "ok": "554",
        "ko": "-"
    },
    "percentiles1": {
        "total": "632",
        "ok": "632",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1112",
        "ok": "1112",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1481",
        "ok": "1481",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1701",
        "ok": "1701",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5672,
    "percentage": 57
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2384,
    "percentage": 24
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 1944,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1000",
        "ok": "1000",
        "ko": "-"
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
        "total": "10000",
        "ok": "10000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "4",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2036",
        "ok": "2036",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "617",
        "ok": "617",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "554",
        "ok": "554",
        "ko": "-"
    },
    "percentiles1": {
        "total": "632",
        "ok": "632",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1112",
        "ok": "1112",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1481",
        "ok": "1481",
        "ko": "-"
    },
    "percentiles4": {
        "total": "1701",
        "ok": "1701",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5672,
    "percentage": 57
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2384,
    "percentage": 24
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 1944,
    "percentage": 19
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1000",
        "ok": "1000",
        "ko": "-"
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
