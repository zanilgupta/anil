var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12186",
        "ok": "12186",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8572",
        "ok": "8572",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2217",
        "ok": "2217",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8825",
        "ok": "8826",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10050",
        "ok": "10050",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11277",
        "ok": "11282",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11883",
        "ok": "11883",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 103,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 29893,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1500",
        "ok": "1500",
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
        "total": "30000",
        "ok": "30000",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "756",
        "ok": "756",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "12186",
        "ok": "12186",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "8572",
        "ok": "8572",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "2217",
        "ok": "2217",
        "ko": "-"
    },
    "percentiles1": {
        "total": "8827",
        "ok": "8827",
        "ko": "-"
    },
    "percentiles2": {
        "total": "10051",
        "ok": "10050",
        "ko": "-"
    },
    "percentiles3": {
        "total": "11277",
        "ok": "11277",
        "ko": "-"
    },
    "percentiles4": {
        "total": "11883",
        "ok": "11883",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 4,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 103,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 29893,
    "percentage": 100
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "1500",
        "ok": "1500",
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
