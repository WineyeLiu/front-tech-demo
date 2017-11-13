$(function(){
    /**
     * 渲染表格
     */
    $('#heroTable').DataTable({
        //dom: '<"float_left"f>r<"float_right"l>tip',  
        language: {  
            'emptyTable': '没有数据',  
            'loadingRecords': '加载中...',  
            'processing': '查询中...',  
            'search': '检索:',  
            'lengthMenu': '每页 _MENU_ 件',  
            'zeroRecords': '没有数据',  
            'paginate': {  
                'first':      '第一页',  
                'last':       '最后一页',  
                'next':       '下一页',  
                'previous':   '上一页'  
            },  
            'info': '第 _PAGE_ 页 / 总 _PAGES_ 页',  
            'infoEmpty': '没有数据',  
            'infoFiltered': '(过滤总件数 _MAX_ 条)'  
        },
        ajax: {
            url: 'data/tableData.json',
            dataSrc:''
        },
        order: [[4,'desc']],
        columnDefs: [
            {
                targets: 0,
                data: 'title-CN',
                title: '中文称号',
                //render:function(){}
            },{
                targets: 1,
                data: 'name-CN',
                title: '英雄名称',
            },{
                targets: 2,
                data: 'damegeType',
                title: '英雄类型',
            },{
                targets: 3,
                data: 'position',
                title: '上场位置',
            },{
                targets: 4,
                data: 'attachRange',
                title: '攻击距离',
            }
        ]
    });

    /**
     * 添加英雄点击事件
     * 
     */
    $('#addHero').bind('click', function(){
        var html = '<ul class="addHeroUl"><li><lable>英雄名称：</lable> <input type="text" class="form-control" placeholder="请输入英雄名称"></li>'+
        '<span><li><lable>英雄手机：</lable> <input type="text" class="form-control" placeholder="请输入英雄名称">'+
        '<button onclick="add(this)" type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>'+
        '<button onclick="del(this)" type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button></li></span>'+
        '<li><lable>攻击距离：</lable> <input type="text" class="form-control" placeholder="请输入英雄名称"></li>'+
        '<li><lable>英雄位置：</lable> <input type="checkbox">上单 <input type="checkbox">中单 <input type="checkbox">打野 <input type="checkbox">ADC <input type="checkbox">辅助</li>'+
        '<li><lable>英雄类型：</lable> <input name="heroType" type="radio">AP <input name="heroType" type="radio">AD <input name="heroType" type="radio">TANK</li></ul>';
        var index= layer.open({
            type: 1,
            title: '添加英雄',
            area: ['650px', '600px'],
            content: html
        });
    });

});


function add(d) {
    var jqSp = $(d.parentElement.parentElement); // 获取当前元素的父级元素 即li元素
    console.log(jqSp);
    var html = '<li><lable>英雄手机：</lable> <input type="text" class="form-control" placeholder="请输入英雄名称">'+
    '<button onclick="add(this)" type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>'+
    '<button onclick="del(this)" type="button" class="btn btn-default" aria-label="Left Align"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button></li>';
    jqSp.append(html);

}

function del(d) {
    var jqLi = $(d.parentElement);
    console.log(jqLi);
    jqLi.remove();
}