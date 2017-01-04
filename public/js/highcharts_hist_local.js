///////////// Make hist functions ///////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function make_hist_cafe() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.1','0.3','0.5','0.7','0.9','1.1','1.3','1.5','1.7','1.9','2.1','2.3','2.5','2.7','2.9','3.1','3.3','3.5']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#9FC54D',
    name:'cafe',
        data: [0.12,0.208,0.512,0.92,1.04,1.024,0.6,0.344,0.112,0.056,0.04,0,0.00800000000000001,0,0.00800000000000001,0,0,0.00800000000000001]
    }]
});
} 
function make_hist_coffee() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.1','0.3','0.5','0.7','0.9','1.1','1.3','1.5','1.7','1.9','2.1','2.3','2.5','2.7','2.9','3.1','3.3','3.5','3.7','3.9','4.1','4.3','4.5','4.7','4.9','5.1','5.3']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#75C156',
    name:'coffee',
        data: [0.864,0.576,0.68,0.552,0.552,0.496,0.384,0.296,0.216,0.112,0.112,0.024,0.016,0.016,0.00800000000000001,0.032,0,0.016,0,0.00800000000000001,0,0.016,0.00799999999999999,0,0,0.00799999999999999,0.00799999999999999]
    }]
});
} 
function make_hist_wine() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.1','0.3','0.5','0.7','0.9','1.1','1.3','1.5','1.7','1.9','2.1','2.3','2.5','2.7','2.9','3.1','3.3','3.5','3.7','3.9','4.1','4.3']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#33A457',
    name:'wine',
        data: [0.28,0.296,0.464,0.776,0.608,0.711999999999999,0.544,0.48,0.288,0.16,0.0959999999999999,0.104,0.0800000000000001,0.024,0.0400000000000001,0.024,0.016,0,0,0,0,0.00799999999999999]
    }]
});
} 
function make_hist_pizza() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.1','0.3','0.5','0.7','0.9','1.1','1.3','1.5','1.7','1.9','2.1','2.3','2.5','2.7','2.9','3.1','3.3','3.5','3.7','3.9','4.1','4.3','4.5','4.7']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#1EA86C',
    name:'pizza',
        data: [0.464,0.288,0.464,0.752,0.712,0.648,0.448,0.288,0.24,0.248,0.112,0.0640000000000001,0.0799999999999999,0.048,0.0480000000000001,0.00799999999999999,0.016,0.0400000000000001,0.00799999999999999,0.00799999999999999,0,0,0.00800000000000003,0.00799999999999999]
    }]
});
} 
function make_hist_grill() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.5','1.5','2.5','3.5','4.5','5.5','6.5','7.5','8.5','9.5','10.5','11.5','12.5','13.5','14.5','15.5']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#71B67B',
    name:'grill',
        data: [0.776,0.128,0.0528,0.016,0.0128,0,0.008,0.0032,0,0,0,0,0.0016,0,0,0.0016]
    }]
});
}
function make_hist_sushi() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.25','0.75','1.25','1.75','2.25','2.75','3.25','3.75','4.25','4.75','5.25','5.75','6.25']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#61BDF0',
    name:'sushi',
        data: [1.1264,0.224,0.2112,0.112,0.0928,0.0896,0.0672,0.0224,0.0224,0.016,0.0128,0,0.0032]
    }]
});
}
function make_hist_thai() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.1','0.3','0.5','0.7','0.9','1.1','1.3','1.5','1.7','1.9','2.1','2.3','2.5','2.7','2.9','3.1','3.3','3.5','3.7','3.9','4.1','4.3','4.5','4.7','4.9','5.1','5.3']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#1E71B8',
    name:'thai',
        data: [0.824,0.552,0.52,0.544,0.392,0.384,0.32,0.4,0.28,0.208,0.192,0.0639999999999999,0.136,0.032,0.024,0.032,0.024,0.032,0.00799999999999999,0,0.00799999999999999,0.00799999999999999,0,0.00799999999999999,0,0,0.00799999999999999]
    }]
});
}
function make_hist_chicken() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.25','0.75','1.25','1.75','2.25','2.75','3.25','3.75','4.25','4.75','5.25','5.75','6.25','6.75']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#E03C00',
    name:'chicken',
        data: [1.0048,0.3008,0.2464,0.1536,0.0928,0.0864,0.0576,0.0192,0.0096,0.0096,0.0096,0.0032,0.0032,0.0032]
    }]
});
}
function make_hist_fried() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.25','0.75','1.25','1.75','2.25','2.75','3.25','3.75','4.25','4.75','5.25','5.75']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#E56000',
    name:'fried',
        data: [0.3424,0.5728,0.5472,0.2272,0.144,0.0832,0.0352,0.0256,0.016,0.0032,0,0.0032]
    }]
});
}
function make_hist_fish() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.1','0.3','0.5','0.7','0.9','1.1','1.3','1.5','1.7','1.9','2.1','2.3','2.5','2.7','2.9','3.1','3.3','3.5','3.7','3.9','4.1','4.3','4.5','4.7','4.9']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#F08C00',
    name:'fish',
        data: [0.664,0.368,0.496,0.512,0.472,0.44,0.384,0.336,0.304,0.208,0.16,0.112,0.152,0.0799999999999999,0.112,0.0559999999999999,0.024,0.032,0.00799999999999999,0.016,0.024,0.00799999999999999,0.016,0.00799999999999999,0.00800000000000003]
    }]
});
}
function make_hist_kebab() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.25','0.75','1.25','1.75','2.25','2.75','3.25','3.75','4.25','4.75','5.25','5.75','6.25','6.75','7.25','7.75','8.25','8.75','9.25','9.75','10.25','10.75','11.25','11.75','12.25','12.75','13.25','13.75']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#FFEA00',
    name:'kebab',
        data: [0.9376,0.2944,0.2144,0.1504,0.1088,0.0768,0.0576,0.0352,0.0256,0.016,0.0096,0.0096,0.0096,0.0128,0.0064,0.0096,0.0032,0.0032,0,0.0032,0.0064,0,0,0.0032,0,0.0032,0,0.0032]
    }]
});
}
function make_hist_waitrose() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['1','3','5','7','9','11','13','15','17','19','21','23','25','27','29']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#729F1E',
    name:'waitrose',
        data: [0.4048,0.0584,0.0184,0.0056,0.0056,0.0032,0.0024,0,0.0008,0,0,0,0,0,0.0008]
    }]
});
}
function make_hist_tesco() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['1','3','5','7','9','11','13','15','17','19','21','23','25','27','29','31','33','35','37','39','41','43','45','47','49','51']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#EE7A01',
    name:'tesco',
        data: [0.4136,0.0344,0.0224,0.0128,0.0072,0.0024,0.0032,0.0008,0.0008,0,0,0,0.0008,0,0,0,0,0,0,0.0008,0,0,0,0,0,0.0008]
    }]
});
}
function make_hist_sainsbury() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.25','0.75','1.25','1.75','2.25','2.75','3.25','3.75','4.25','4.75','5.25','5.75','6.25','6.75','7.25','7.75','8.25','8.75','9.25']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#0053A0',
    name:'sainsbury',
        data: [0.5056,0.6496,0.4384,0.1984,0.0896,0.0512,0.032,0.016,0.0032,0.0064,0,0,0,0.0032,0,0.0032,0,0,0.0032]
    }]
});
}
function make_hist_costcutter() {
Highcharts.chart('graph_dist',
    {
    chart: {
        type: 'column'
    },
	title: {
            text: 'Histogram of appearance per ward'
        },
        yAxis: {
            title: {
                text: "Probability Density"
            }
        },
    xAxis: {
        categories: ['0.25','0.75','1.25','1.75','2.25','2.75','3.25','3.75','4.25','4.75','5.25','5.75','6.25','6.75','7.25','7.75','8.25','8.75','9.25','9.75','10.25','10.75','11.25','11.75','12.25']
    },
    
    plotOptions: {
        column: {
            groupPadding: 0,
            pointPadding: 0,
            borderWidth: 0
        }
    },

    series: [{
    color:'#02C070',
    name:'costcutter',
        data: [0.7584,0.448,0.3776,0.1888,0.1152,0.0384,0.0352,0.0064,0.016,0.0064,0.0032,0,0.0032,0,0,0,0,0,0,0,0,0,0,0,0.0032]
    }]
});
}