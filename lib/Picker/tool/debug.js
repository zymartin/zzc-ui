'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (opt) {

    var dufaultPickerTime = (0, _dateTool.setTime)(opt.pickupTime, opt.defaultTime),
        defaultReturnTime = (0, _dateTool.setTime)(opt.returnTime, opt.defaultTime);

    //验证取值范围和当前默认时间是不出错(小时和分钟)
    if (!opt.pickupTime && opt.timeRange && parseInt(opt.timeRange.start) > dufaultPickerTime.h) {
        console.error('\u5F53\u524DdefaultTime\u4E3A' + dufaultPickerTime.h + ':' + dufaultPickerTime.m);
        console.error('\u5F53\u524DtimeRange\u7684\u8303\u56F4\u4E3A:' + opt.timeRange.start + '~' + opt.timeRange.end);
        console.error('defaultTime的值不能少于timeRange.start的值');
        return true;
    }
    if (!opt.returnTime && opt.timeRange && parseInt(opt.timeRange.end) < defaultReturnTime.h) {
        console.error('\u5F53\u524DdefaultTime\u4E3A' + defaultReturnTime.h + ':' + defaultReturnTime.m);
        console.error('\u5F53\u524DtimeRange\u7684\u8303\u56F4\u4E3A:' + opt.timeRange.start + '~' + opt.timeRange.end);
        console.error('defaultTime的值不能大于timeRange.end的值');
        return true;
    }
    if (!opt.returnTime && opt.timeRange && defaultReturnTime.m != 0 && parseInt(opt.timeRange.end) == defaultReturnTime.h) {
        console.error('\u5F53\u524DdefaultTime\u4E3A' + defaultReturnTime.h + ':' + defaultReturnTime.m);
        console.error('\u5F53\u524DtimeRange\u7684\u8303\u56F4\u4E3A:' + opt.timeRange.start + '~' + opt.timeRange.end);
        console.error('defaultTime的值不能大于timeRange.end的值');
        return true;
    }

    //验证日历范围
    if (!opt.startTime instanceof Array) {
        console.error('startTime格式错误');
        console.error('[2017,1,1]  默认今天到明年今日');
        return true;
    }
    if (!opt.endTime instanceof Array) {
        console.error('endTime格式错误');
        console.error('[2017,1,1]  默认今天到明年今日');
        return true;
    }

    //验证事件
    if (!opt.closeEvent instanceof Function) {
        console.error('closeEvent事件必须传入');
        return true;
    }

    if (!opt.confirmEvent instanceof Function) {
        console.error('confirmEvent事件必须传入');
        return true;
    }

    return false;
};

var _dateTool = require('./dateTool');