function createChart(data){
    var chartObj={
        bindto: '#chartSection',
        data: {}
};
var columnData=[];
$.each(data,function(i,item){
columnData.push(item);
});
chartObj.data.columns=columnData;
var chart = c3.generate(chartObj);
}


$(document).ready(function () {

        $.get("data.json", function (data, status) {
            createChart(data);
        });

    });