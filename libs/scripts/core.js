function _createChart(data) {
    var chartObj = {
        bindto: '#chartSection',
        data: {}
    };
    var columnData = [];
    $.each(data, function (i, item) {
        columnData.push(item);
    });
    chartObj.data.columns = columnData;
    var chart = c3.generate(chartObj);
}

//init Angular Code block
var app = angular.module('demoapp', []);
app.controller('chartwithTabController', function ($scope) {
    $scope.querySectionLabel = "No Query Data Available";
    $scope.queryParameter = "Select to Add Query Parameter";
    $scope.typeLabel = "Type Selection ";
    var source = [
        "Sample 001",
        "Sample 002",
        "Sample 003",
        "Sample 004"
        
    ];
        $scope.typeList = source;
        $scope.selectedName = source[0];
        $scope._queryClick=function(){
            console.log("Query Click");
        }
    
    var queryList = ["Select to Add Query Parameter"];
    $scope.queryList = queryList;
});


$(document).ready(function () {

    $.get("data/data.json", function (data, status) {
        _createChart(data);
    });



});