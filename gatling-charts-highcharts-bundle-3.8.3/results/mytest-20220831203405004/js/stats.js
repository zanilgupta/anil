var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1012",
        "ok": "1012",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles1": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles2": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "percentiles3": {
        "total": "185",
        "ok": "185",
        "ko": "-"
    },
    "percentiles4": {
        "total": "684",
        "ok": "684",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 495,
    "percentage": 99
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 5,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.197",
        "ok": "8.197",
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
        "total": "500",
        "ok": "500",
        "ko": "0"
    },
    "minResponseTime": {
        "total": "112",
        "ok": "112",
        "ko": "-"
    },
    "maxResponseTime": {
        "total": "1012",
        "ok": "1012",
        "ko": "-"
    },
    "meanResponseTime": {
        "total": "147",
        "ok": "147",
        "ko": "-"
    },
    "standardDeviation": {
        "total": "89",
        "ok": "89",
        "ko": "-"
    },
    "percentiles1": {
        "total": "131",
        "ok": "131",
        "ko": "-"
    },
    "percentiles2": {
        "total": "140",
        "ok": "140",
        "ko": "-"
    },
    "percentiles3": {
        "total": "185",
        "ok": "185",
        "ko": "-"
    },
    "percentiles4": {
        "total": "684",
        "ok": "684",
        "ko": "-"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 495,
    "percentage": 99
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 5,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 0,
    "percentage": 0
},
    "group4": {
    "name": "failed",
    "count": 0,
    "percentage": 0
},
    "meanNumberOfRequestsPerSecond": {
        "total": "8.197",
        "ok": "8.197",
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
