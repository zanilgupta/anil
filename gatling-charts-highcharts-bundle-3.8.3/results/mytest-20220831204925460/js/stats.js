var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5000",
        "ok": "0",
        "ko": "5000"
    },
    "minResponseTime": {
        "total": "1099",
        "ok": "-",
        "ko": "1099"
    },
    "maxResponseTime": {
        "total": "12096",
        "ok": "-",
        "ko": "12096"
    },
    "meanResponseTime": {
        "total": "7217",
        "ok": "-",
        "ko": "7217"
    },
    "standardDeviation": {
        "total": "2119",
        "ok": "-",
        "ko": "2119"
    },
    "percentiles1": {
        "total": "7916",
        "ok": "-",
        "ko": "7916"
    },
    "percentiles2": {
        "total": "8299",
        "ok": "-",
        "ko": "8299"
    },
    "percentiles3": {
        "total": "10094",
        "ok": "-",
        "ko": "10094"
    },
    "percentiles4": {
        "total": "10732",
        "ok": "-",
        "ko": "10732"
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
    "count": 5000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "312.5",
        "ok": "-",
        "ko": "312.5"
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
        "ok": "0",
        "ko": "5000"
    },
    "minResponseTime": {
        "total": "1099",
        "ok": "-",
        "ko": "1099"
    },
    "maxResponseTime": {
        "total": "12096",
        "ok": "-",
        "ko": "12096"
    },
    "meanResponseTime": {
        "total": "7217",
        "ok": "-",
        "ko": "7217"
    },
    "standardDeviation": {
        "total": "2119",
        "ok": "-",
        "ko": "2119"
    },
    "percentiles1": {
        "total": "7916",
        "ok": "-",
        "ko": "7916"
    },
    "percentiles2": {
        "total": "8299",
        "ok": "-",
        "ko": "8299"
    },
    "percentiles3": {
        "total": "10094",
        "ok": "-",
        "ko": "10094"
    },
    "percentiles4": {
        "total": "10732",
        "ok": "-",
        "ko": "10732"
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
    "count": 5000,
    "percentage": 100
},
    "meanNumberOfRequestsPerSecond": {
        "total": "312.5",
        "ok": "-",
        "ko": "312.5"
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
