var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "1500",
        "ok": "1500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "432",
        "ok": "432",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2673",
        "ok": "2673",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1390",
        "ok": "1390",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "320",
        "ok": "320",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1389",
        "ok": "1389",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1605",
        "ok": "1605",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1929",
        "ok": "1929",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2214",
        "ok": "2214",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 48,
    "percentage": 3
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 334,
    "percentage": 22
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 1118,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "214.286",
        "ok": "214.286",
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
        "total": "1500",
        "ok": "1500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "432",
        "ok": "432",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "2673",
        "ok": "2673",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "1390",
        "ok": "1390",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "320",
        "ok": "320",
        "ko": "-"
    },
    "percentiles1": {
        "total": "1389",
        "ok": "1389",
        "ko": "-"
    },
    "percentiles2": {
        "total": "1605",
        "ok": "1605",
        "ko": "-"
    },
    "percentiles3": {
        "total": "1929",
        "ok": "1929",
        "ko": "-"
    },
    "percentiles4": {
        "total": "2214",
        "ok": "2214",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 48,
    "percentage": 3
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 334,
    "percentage": 22
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 1118,
    "percentage": 75
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "214.286",
        "ok": "214.286",
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
