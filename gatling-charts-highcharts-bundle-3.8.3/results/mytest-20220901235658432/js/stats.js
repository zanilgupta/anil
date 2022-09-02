var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "1884",
        "ok": "-",
        "ko": "1884"
    },
    "meanResponseTime": {
        "total": "587",
        "ok": "-",
        "ko": "587"
    },
    "standardDeviation": {
        "total": "564",
        "ok": "-",
        "ko": "564"
    },
    "percentiles1": {
        "total": "535",
        "ok": "-",
        "ko": "535"
    },
    "percentiles2": {
        "total": "1111",
        "ok": "-",
        "ko": "1111"
    },
    "percentiles3": {
        "total": "1529",
        "ok": "-",
        "ko": "1529"
    },
    "percentiles4": {
        "total": "1700",
        "ok": "-",
        "ko": "1700"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1000",
        "ok": "-",
        "ko": "1000"
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
        "ok": "0",
        "ko": "10000"
    },
    "minResponseTime": {
        "total": "4",
        "ok": "-",
        "ko": "4"
    },
    "maxResponseTime": {
        "total": "1884",
        "ok": "-",
        "ko": "1884"
    },
    "meanResponseTime": {
        "total": "587",
        "ok": "-",
        "ko": "587"
    },
    "standardDeviation": {
        "total": "564",
        "ok": "-",
        "ko": "564"
    },
    "percentiles1": {
        "total": "535",
        "ok": "-",
        "ko": "535"
    },
    "percentiles2": {
        "total": "1111",
        "ok": "-",
        "ko": "1111"
    },
    "percentiles3": {
        "total": "1529",
        "ok": "-",
        "ko": "1529"
    },
    "percentiles4": {
        "total": "1700",
        "ok": "-",
        "ko": "1700"
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
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 10000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1000",
        "ok": "-",
        "ko": "1000"
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
