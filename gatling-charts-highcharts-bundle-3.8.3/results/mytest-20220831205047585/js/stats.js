var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name-b06d1",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5000",
        "ok": "1032",
        "ko": "3968"
    },
    "minResponseTime": {
        "total": "1503",
        "ok": "1503",
        "ko": "7772"
    },
    "maxResponseTime": {
        "total": "13456",
        "ok": "10252",
        "ko": "13456"
    },
    "meanResponseTime": {
        "total": "7485",
        "ok": "4464",
        "ko": "8270"
    },
    "standardDeviation": {
        "total": "1927",
        "ok": "1981",
        "ko": "816"
    },
    "percentiles1": {
        "total": "7845",
        "ok": "3836",
        "ko": "7876"
    },
    "percentiles2": {
        "total": "7993",
        "ok": "5943",
        "ko": "8171"
    },
    "percentiles3": {
        "total": "10010",
        "ok": "7947",
        "ko": "10013"
    },
    "percentiles4": {
        "total": "10059",
        "ok": "10107",
        "ko": "10055"
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
    "count": 1032,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 3968,
    "percentage": 79
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "68.8",
        "ko": "264.533"
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
        "ok": "1032",
        "ko": "3968"
    },
    "minResponseTime": {
        "total": "1503",
        "ok": "1503",
        "ko": "7772"
    },
    "maxResponseTime": {
        "total": "13456",
        "ok": "10252",
        "ko": "13456"
    },
    "meanResponseTime": {
        "total": "7485",
        "ok": "4464",
        "ko": "8270"
    },
    "standardDeviation": {
        "total": "1927",
        "ok": "1981",
        "ko": "816"
    },
    "percentiles1": {
        "total": "7845",
        "ok": "3836",
        "ko": "7876"
    },
    "percentiles2": {
        "total": "7993",
        "ok": "5943",
        "ko": "8171"
    },
    "percentiles3": {
        "total": "10010",
        "ok": "7947",
        "ko": "10013"
    },
    "percentiles4": {
        "total": "10059",
        "ok": "10107",
        "ko": "10055"
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
    "count": 1032,
    "percentage": 21
},
    "group4": {
    "name": "failed",
    "count": 3968,
    "percentage": 79
},
    "meanNumberOfRequestsPerSecond": {
        "total": "333.333",
        "ok": "68.8",
        "ko": "264.533"
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
