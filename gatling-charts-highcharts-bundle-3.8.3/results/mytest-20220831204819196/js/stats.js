var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5000",
        "ok": "2181",
        "ko": "2819"
    },
    "minResponseTime": {
        "total": "773",
        "ok": "773",
        "ko": "7770"
    },
    "maxResponseTime": {
        "total": "16153",
        "ok": "9993",
        "ko": "16153"
    },
    "meanResponseTime": {
        "total": "6484",
        "ok": "4439",
        "ko": "8066"
    },
    "standardDeviation": {
        "total": "2317",
        "ok": "2030",
        "ko": "768"
    },
    "percentiles1": {
        "total": "7775",
        "ok": "4026",
        "ko": "7783"
    },
    "percentiles2": {
        "total": "7796",
        "ok": "5055",
        "ko": "7837"
    },
    "percentiles3": {
        "total": "10003",
        "ok": "9476",
        "ko": "10004"
    },
    "percentiles4": {
        "total": "10005",
        "ok": "9538",
        "ko": "10006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 2178,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 2819,
    "percentage": 56
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "109.05",
        "ko": "140.95"
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
        "ok": "2181",
        "ko": "2819"
    },
    "minResponseTime": {
        "total": "773",
        "ok": "773",
        "ko": "7770"
    },
    "maxResponseTime": {
        "total": "16153",
        "ok": "9993",
        "ko": "16153"
    },
    "meanResponseTime": {
        "total": "6484",
        "ok": "4439",
        "ko": "8066"
    },
    "standardDeviation": {
        "total": "2317",
        "ok": "2030",
        "ko": "768"
    },
    "percentiles1": {
        "total": "7775",
        "ok": "4026",
        "ko": "7783"
    },
    "percentiles2": {
        "total": "7796",
        "ok": "5055",
        "ko": "7837"
    },
    "percentiles3": {
        "total": "10003",
        "ok": "9476",
        "ko": "10004"
    },
    "percentiles4": {
        "total": "10005",
        "ok": "9538",
        "ko": "10006"
    },
    "group1": {
    "name": "t < 800 ms",
    "count": 1,
    "percentage": 0
},
    "group2": {
    "name": "t ≥ 800 ms <br> t < 1200 ms",
    "count": 2,
    "percentage": 0
},
    "group3": {
    "name": "t ≥ 1200 ms",
    "count": 2178,
    "percentage": 44
},
    "group4": {
    "name": "failed",
    "count": 2819,
    "percentage": 56
},
    "meanNumberOfRequestsPerSecond": {
        "total": "250",
        "ok": "109.05",
        "ko": "140.95"
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
