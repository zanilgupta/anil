var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5000",
        "ok": "2439",
        "ko": "2561"
    },
    "minResponseTime": {
        "total": "497",
        "ok": "497",
        "ko": "3536"
    },
    "maxResponseTime": {
        "total": "15399",
        "ok": "9852",
        "ko": "15399"
    },
    "meanResponseTime": {
        "total": "6761",
        "ok": "4700",
        "ko": "8724"
    },
    "standardDeviation": {
        "total": "2933",
        "ok": "2459",
        "ko": "1771"
    },
    "percentiles1": {
        "total": "7776",
        "ok": "4454",
        "ko": "7795"
    },
    "percentiles2": {
        "total": "9500",
        "ok": "6111",
        "ko": "10004"
    },
    "percentiles3": {
        "total": "10006",
        "ok": "9536",
        "ko": "10008"
    },
    "percentiles4": {
        "total": "14756",
        "ok": "9805",
        "ko": "15117"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 28,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 2406,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 2561,
    "percentage": 51
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "121.95",
        "ko": "128.05"
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
        "ok": "2439",
        "ko": "2561"
    },
    "minResponseTime": {
        "total": "497",
        "ok": "497",
        "ko": "3536"
    },
    "maxResponseTime": {
        "total": "15399",
        "ok": "9852",
        "ko": "15399"
    },
    "meanResponseTime": {
        "total": "6761",
        "ok": "4700",
        "ko": "8724"
    },
    "standardDeviation": {
        "total": "2933",
        "ok": "2459",
        "ko": "1771"
    },
    "percentiles1": {
        "total": "7776",
        "ok": "4454",
        "ko": "7795"
    },
    "percentiles2": {
        "total": "9500",
        "ok": "6111",
        "ko": "10004"
    },
    "percentiles3": {
        "total": "10006",
        "ok": "9536",
        "ko": "10008"
    },
    "percentiles4": {
        "total": "14756",
        "ok": "9805",
        "ko": "15117"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 5,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 28,
    "percentage": 1
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 2406,
    "percentage": 48
},
    "group4": {
    "name": "failed",
    "count": 2561,
    "percentage": 51
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "121.95",
        "ko": "128.05"
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
