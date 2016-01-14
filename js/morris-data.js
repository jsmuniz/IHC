$(function() {

    Morris.Bar({
        element: 'morris-area-chart',
        data: [{
            period: '01/12',
            pessoas: 10000
        }, {
            period: '02/12',
            pessoas: 2500
        }, {
            period: '03/12',
            pessoas: 2440
        }, {
            period: '04/12',
            pessoas: 1000
        }, {
            period: '05/12',
            pessoas: 700
        }, {
            period: '05/12',
            pessoas: 2200
        }, {
            period: '06/12',
            pessoas: 2500
        }, {
            period: '07/12',
            pessoas: 3000
        }, {
            period: '08/12',
            pessoas: 1000
        }, {
            period: '09/12',
            pessoas: 2000
        }],
        xkey: 'period',
        parseTime: false,
        ykeys: ['pessoas'],
        labels: ['Pessoas'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

    Morris.Area({
        element: 'morris-area-chart2',
        data: [{
            period: '01/12',
            pessoas: 4565
        }, {
            period: '02/12',
            pessoas: 4545
        }, {
            period: '03/12',
            pessoas: 7535
        }, {
            period: '04/12',
            pessoas: 3353
        }, {
            period: '05/12',
            pessoas: 7383
        }, {
            period: '05/12',
            pessoas: 3577
        }, {
            period: '06/12',
            pessoas: 6841
        }, {
            period: '07/12',
            pessoas: 5419
        }, {
            period: '08/12',
            pessoas: 8152
        }, {
            period: '09/12',
            pessoas: 5251
        }],
        xkey: 'period',
        parseTime: false,
        ykeys: ['pessoas'],
        labels: ['Pessoas'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });

     Morris.Area({
        element: 'morris-area-chart3',
        data: [{
            period: '01/12',
            pessoas: 4565
        }, {
            period: '02/12',
            pessoas: 4545
        }, {
            period: '03/12',
            pessoas: 7535
        }, {
            period: '04/12',
            pessoas: 3353
        }, {
            period: '05/12',
            pessoas: 7383
        }, {
            period: '05/12',
            pessoas: 3577
        }, {
            period: '06/12',
            pessoas: 6841
        }, {
            period: '07/12',
            pessoas: 5419
        }, {
            period: '08/12',
            pessoas: 8152
        }, {
            period: '09/12',
            pessoas: 5251
        }],
        xkey: 'period',
        parseTime: false,
        ykeys: ['pessoas'],
        labels: ['Pessoas'],
        pointSize: 2,
        hideHover: 'auto',
        resize: true
    });


    Morris.Donut({
        element: 'morris-donut-chart',
        data: [{
            label: "Download Sales",
            value: 12
        }, {
            label: "In-Store Sales",
            value: 30
        }, {
            label: "Mail-Order Sales",
            value: 20
        }],
        resize: true
    });

    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: '2006',
            a: 100,
            b: 90
        }, {
            y: '2007',
            a: 75,
            b: 65
        }, {
            y: '2008',
            a: 50,
            b: 40
        }, {
            y: '2009',
            a: 75,
            b: 65
        }, {
            y: '2010',
            a: 50,
            b: 40
        }, {
            y: '2011',
            a: 75,
            b: 65
        }, {
            y: '2012',
            a: 100,
            b: 90
        }],
        xkey: 'y',
        ykeys: ['a', 'b'],
        labels: ['Series A', 'Series B'],
        hideHover: 'auto',
        resize: true
    });

});
