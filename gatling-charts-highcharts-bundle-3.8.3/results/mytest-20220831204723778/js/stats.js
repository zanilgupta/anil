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
        "total": "720",
        "ok": "-",
        "ko": "720"
    },
    "maxResponseTime": {
        "total": "13971",
        "ok": "-",
        "ko": "13971"
    },
    "meanResponseTime": {
        "total": "6379",
        "ok": "-",
        "ko": "6379"
    },
    "standardDeviation": {
        "total": "2474",
        "ok": "-",
        "ko": "2474"
    },
    "percentiles1": {
        "total": "7776",
        "ok": "-",
        "ko": "7776"
    },
    "percentiles2": {
        "total": "7794",
        "ok": "-",
        "ko": "7794"
    },
    "percentiles3": {
        "total": "10003",
        "ok": "-",
        "ko": "10003"
    },
    "percentiles4": {
        "total": "10005",
        "ok": "-",
        "ko": "10005"
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
        "total": "250",
        "ok": "-",
        "ko": "250"
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
        "total": "720",
        "ok": "-",
        "ko": "720"
    },
    "maxResponseTime": {
        "total": "13971",
        "ok": "-",
        "ko": "13971"
    },
    "meanResponseTime": {
        "total": "6379",
        "ok": "-",
        "ko": "6379"
    },
    "standardDeviation": {
        "total": "2474",
        "ok": "-",
        "ko": "2474"
    },
    "percentiles1": {
        "total": "7776",
        "ok": "-",
        "ko": "7776"
    },
    "percentiles2": {
        "total": "7794",
        "ok": "-",
        "ko": "7794"
    },
    "percentiles3": {
        "total": "10003",
        "ok": "-",
        "ko": "10003"
    },
    "percentiles4": {
        "total": "10005",
        "ok": "-",
        "ko": "10005"
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
        "total": "250",
        "ok": "-",
        "ko": "250"
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
