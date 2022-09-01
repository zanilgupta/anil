var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5000",
        "ok": "2947",
        "ko": "2053"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "189",
        "ko": "32"
    },
    "maxResponseTime": {
        "total": "4384",
        "ok": "4384",
        "ko": "1523"
    },
    "meanResponseTime": {
        "total": "1045",
        "ok": "1389",
        "ko": "552"
    },
    "standardDeviation": {
        "total": "745",
        "ok": "701",
        "ko": "484"
    },
    "percentiles1": {
        "total": "1122",
        "ok": "1552",
        "ko": "253"
    },
    "percentiles2": {
        "total": "1657",
        "ok": "1918",
        "ko": "1009"
    },
    "percentiles3": {
        "total": "2204",
        "ok": "2320",
        "ko": "1364"
    },
    "percentiles4": {
        "total": "2511",
        "ok": "2693",
        "ko": "1477"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 701,
    "percentage": 14
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 259,
    "percentage": 5
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 1987,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 2053,
    "percentage": 41
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "147.35",
        "ko": "102.65"
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
        "total": "5000",
        "ok": "2947",
        "ko": "2053"
    },
    "minResponseTime": {
        "total": "32",
        "ok": "189",
        "ko": "32"
    },
    "maxResponseTime": {
        "total": "4384",
        "ok": "4384",
        "ko": "1523"
    },
    "meanResponseTime": {
        "total": "1045",
        "ok": "1389",
        "ko": "552"
    },
    "standardDeviation": {
        "total": "745",
        "ok": "701",
        "ko": "484"
    },
    "percentiles1": {
        "total": "1122",
        "ok": "1552",
        "ko": "253"
    },
    "percentiles2": {
        "total": "1657",
        "ok": "1918",
        "ko": "1009"
    },
    "percentiles3": {
        "total": "2204",
        "ok": "2320",
        "ko": "1364"
    },
    "percentiles4": {
        "total": "2511",
        "ok": "2693",
        "ko": "1477"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 701,
    "percentage": 14
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 259,
    "percentage": 5
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 1987,
    "percentage": 40
},
    "group4": {
    "name": "failed",
    "count": 2053,
    "percentage": 41
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "147.35",
        "ko": "102.65"
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
