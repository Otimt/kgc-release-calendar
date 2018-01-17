"use strict";

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ReleaseEvent = function ReleaseEvent(title, start) {
	_classCallCheck(this, ReleaseEvent);

	this.title = title; //必须，事件在日历上显示的title
	this.start = start; //必须，事件的开始时间。
	this.allDay = false; //是否是全天事件
};
/**
 * 大版本发版事件
 */


var BigReleaseEvent = function (_ReleaseEvent) {
	_inherits(BigReleaseEvent, _ReleaseEvent);

	function BigReleaseEvent(title, start) {
		_classCallCheck(this, BigReleaseEvent);

		var _this = _possibleConstructorReturn(this, (BigReleaseEvent.__proto__ || Object.getPrototypeOf(BigReleaseEvent)).call(this, title, start));

		_this.id = "B_" + start + Math.random(); //可选，事件唯一标识，重复的事件具有相同的id
		_this.color = "#2E302C";
		_this.textColor = "#F5DB54"; //文本颜色。
		return _this;
	}

	return BigReleaseEvent;
}(ReleaseEvent);
/**
 * 小版本发版事件
 */


var SmallReleaseEvent = function (_ReleaseEvent2) {
	_inherits(SmallReleaseEvent, _ReleaseEvent2);

	function SmallReleaseEvent(title, start) {
		_classCallCheck(this, SmallReleaseEvent);

		var _this2 = _possibleConstructorReturn(this, (SmallReleaseEvent.__proto__ || Object.getPrototypeOf(SmallReleaseEvent)).call(this, title, start));

		_this2.id = "S_" + start + Math.random(); //可选，事件唯一标识，重复的事件具有相同的id
		_this2.color = "#008080";
		_this2.textColor = "#ffffff"; //文本颜色。
		return _this2;
	}

	return SmallReleaseEvent;
}(ReleaseEvent);
//发版周期


var ReleaseCycle = function ReleaseCycle(br0Date) {
	_classCallCheck(this, ReleaseCycle);

	var oneDayMs = 24 * 3600 * 1000; //一天毫秒数
	var br0DateTimestamp = br0Date.getTime();
	var br1Date = new Date(br0DateTimestamp + 28 * oneDayMs);

	var sr1Date = new Date(br0DateTimestamp + 7 * oneDayMs);
	var sr2Date = new Date(br0DateTimestamp + 14 * oneDayMs);
	var sr3Date = new Date(br0DateTimestamp + 21 * oneDayMs);

	var br0Name = getMonthDay(br0Date) + "大版本";
	var br1Name = getMonthDay(br1Date) + "大版本";
	var sr1Name = getMonthDay(sr1Date) + "小版本";
	var sr2Name = getMonthDay(sr2Date) + "小版本";
	var sr3Name = getMonthDay(sr3Date) + "小版本";

	function getMonthDay(date) {
		var month = date.getMonth() + 1;
		var day = date.getDate();
		return (month > 9 ? month : "0" + month) + "" + (day > 9 ? day : "0" + day);
	}

	this.list = [new BigReleaseEvent(br0Name + "发开始开发", new Date(br0DateTimestamp - 34 * oneDayMs)), //第1周 周四
	new BigReleaseEvent(br1Name + "需求评审", new Date(br0DateTimestamp + -12 * oneDayMs)), //第5周 周五
	new BigReleaseEvent(br0Name + "发test", new Date(br0DateTimestamp + -5 * oneDayMs)), //第5周 周五
	new BigReleaseEvent(br0Name + "发正式", br0Date), //第1周 周三
	new BigReleaseEvent(br1Name + "dev冒烟完毕", new Date(br0DateTimestamp + 16 * oneDayMs)), //第3周 周五

	new SmallReleaseEvent(sr1Name + "需求评审", new Date(br0DateTimestamp + -2 * oneDayMs + 1)), //第1周 周一
	new SmallReleaseEvent(sr1Name + "发开始开发", new Date(br0DateTimestamp + 1 * oneDayMs + 1)), //第1周 周四
	new SmallReleaseEvent(sr1Name + "发dev冒烟完毕", new Date(br0DateTimestamp + 2 * oneDayMs + 1)), //第1周 周五
	new SmallReleaseEvent(sr1Name + "发test", new Date(br0DateTimestamp + 6 * oneDayMs + 1)), //第2周 周二
	new SmallReleaseEvent(sr1Name + "发正式", new Date(br0DateTimestamp + 7 * oneDayMs + 1)), //第2周 周三

	new SmallReleaseEvent(sr2Name + "需求评审", new Date(br0DateTimestamp + 5 * oneDayMs + 1)), //第2周 周一
	new SmallReleaseEvent(sr2Name + "发开始开发", new Date(br0DateTimestamp + 8 * oneDayMs + 1)), //第2周 周四
	new SmallReleaseEvent(sr2Name + "发dev冒烟完毕", new Date(br0DateTimestamp + 9 * oneDayMs + 1)), //第2周 周五
	new SmallReleaseEvent(sr2Name + "发test", new Date(br0DateTimestamp + 13 * oneDayMs + 1)), //第3周 周二
	new SmallReleaseEvent(sr2Name + "发正式", new Date(br0DateTimestamp + 14 * oneDayMs + 1)), //第3周 周三

	new SmallReleaseEvent(sr3Name + "需求评审", new Date(br0DateTimestamp + 12 * oneDayMs + 1)), //第3周 周一
	new SmallReleaseEvent(sr3Name + "发开始开发", new Date(br0DateTimestamp + 15 * oneDayMs + 1)), //第3周 周四
	new SmallReleaseEvent(sr3Name + "发dev冒烟完毕", new Date(br0DateTimestamp + 16 * oneDayMs + 1)), //第3周 周五
	new SmallReleaseEvent(sr3Name + "发test", new Date(br0DateTimestamp + 20 * oneDayMs + 1)), //第4周 周二
	new SmallReleaseEvent(sr3Name + "发正式", new Date(br0DateTimestamp + 21 * oneDayMs + 1))];
};

$(function () {
	$('#kgc-release-calendar').fullCalendar({
		header: {
			right: 'prev,next today',
			center: 'title',
			left: 'month'
		},
		firstDay: 1,
		weekMode: "liquid",
		theme: true,
		editable: true,
		droppable: false,
		allDaySlot: false,
		weekends: false,
		//设置日历头部各按钮的显示文本信息
		buttonText: {
			prev: '上个月', // ‹
			next: '下个月', // ›
			today: '今天',
			month: '月'
		},
		//月份全称，默认：
		monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
		//月份名称简写
		monthNamesShort: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'],
		//星期全称，默认：
		dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
		//星期名称简写，默认：
		dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
		// events: function (start, end, callback) {
		// 	var events = [];
		// 	callback(events);
		// },
		events: new ReleaseCycle(new Date("2017-11-15")).list.concat(new ReleaseCycle(new Date("2017-12-13")).list, new ReleaseCycle(new Date("2018-01-10")).list, new ReleaseCycle(new Date("2018-02-28")).list, new ReleaseCycle(new Date("2018-03-21")).list, new ReleaseCycle(new Date("2018-04-18")).list, new ReleaseCycle(new Date("2018-05-16")).list, new ReleaseCycle(new Date("2018-06-13")).list, new ReleaseCycle(new Date("2018-07-11")).list)
		// 	[
		// 	// new SmallReleaseEvent("2018-01-03","0103小版本发布"),
		// 	// new BigReleaseEvent("2018-01-10","0110大版本发布")
		// ]
	});
	function destroy() {
		$('#kgc-release-calendar').fullCalendar('destroy');
	}

	/**
  * 向日历填充事件
  * @param initDate 已知大版本时间
  */
	function fillEventsIntoCalendar(initDateStr) {
		!initDateStr && (initDateStr = "2018-02-28");
		var initDate = new Date(initDateStr);
		for (var i = 0; i < 12; i++) {}
	}
});