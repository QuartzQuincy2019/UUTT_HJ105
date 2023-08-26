//il.js
//Instructions & Layout
//2023/8/9
//从display.js和core.js分离

_title_.innerHTML = "★ UUTT " + _VERSION + " ★";
_author_.innerHTML = "GitHub: QuartzQuincy2019";
_author_.href = "https://github.com/QuartzQuincy2019";

clearTrl();
refreshLoadingInfoText();
refreshProgressText();
refreshKeyTip();

//位置固定
trl.style.left = "5px";
BUTTONAREA.style.right = "5px";
setInterval(function () {
    TYPINGAREA.style.top = menu.offsetHeight + 5 + "px";
    trl.style.bottom = footer.offsetHeight + 5 + "px";
    BUTTONAREA.style.bottom = footer.offsetHeight + 5 + "px";
}, 100);

setInterval(function () {
    timer.writeInTimer();
    refreshSpeedDisplay(typingCount, timer);
}, 100);

setInterval(() => {
    refreshTimerStatusText();
}, 200);




//设置字体大小
adjustIoAreaSize(true, __DEFAULT_IO_FONT_SIZE);

//望远镜弹性宽度显示功能 v7.0.0
telescope.style["font-size"] = __DEFAULT_TELESCOPE_FONT_SIZE + "px";
var telescopeFlexibleWidthAdjuster = setInterval(function () {
    var _mtc = __MAX_TELESCOPE_CHARACTER;
    var _em = getOneEm("telescope", true);//通过字体大小获取一个em的宽度
    //初始设置完毕
    var W = window.innerWidth;//px
    //var _w = TELESCOPEAREA.offsetWidth;//px
    var w = (_mtc + 1.6) * _em;//px，默认情况下的望远镜宽度
    var pct = (w / W) * 100;//默认百分比
    //console.log("默认宽度w=" + w + ", 实际宽度_w" + _w + ", 窗口总宽W=" + W + ", 默认比窗口pct=" + pct + "%");
    TELESCOPEAREA.style["flex-basis"] = pct + "%";
    KEYTIPAREA.style["flex-basis"] = (100 - pct) / 2 + "%";
    AUTHORAREA.style["flex-basis"] = (100 - pct) / 2 + "%";
}, 100);

//列表 v7.0.1
var trlStyle = window.getComputedStyle(trl);
var trl_em = getOneEm("typingRecordList", false);
var trl_innerHeight = __LIST_HEIGHT * trl_em;//px
var trl_pd_top = parseFloat(trlStyle.paddingTop);
var trl_pd_btm = parseFloat(trlStyle.paddingBottom);
trl.style["maxHeight"] = trl_pd_top + trl_pd_btm + trl_innerHeight + 12 + "px";
trl.style["height"] = trl.style["maxHeight"];

//设置字体
TITLEAREA.style["font-family"] = __DEFAULT_FONT_OTHER;
COUNTAREA.style["font-family"] = __DEFAULT_FONT_OTHER;
AUTHORAREA.style["font-family"] = __DEFAULT_FONT_OTHER;
SPEEDAREA.style["font-family"] = __DEFAULT_FONT_OTHER;
LISTAREA.style["font-family"] = __DEFAULT_FONT_OTHER;
KEYTIPAREA.style["font-family"] = __DEFAULT_FONT_OTHER;
progressCounter.style["font-family"] = __DEFAULT_FONT_OTHER;
//LISTAREA.style["font-size"] = "18px";
for (var i = 0; i < BUTTONAREA.children.length; i++) {
    BUTTONAREA.children[i].style["font-family"] = __DEFAULT_FONT_OTHER;
}

TYPINGAREA.style["font-family"] = __DEFAULT_FONT_TYPING;
telescope.style["font-family"] = __DEFAULT_FONT_TYPING;

//按钮说明
button_clearInputText.innerHTML = lang[__langcode]["_button_Clear_Restart"] + "[" + __FK_CLEAR + "]";
button_taskLauncher.innerHTML = lang[__langcode]["_button_Launch"] + "[" + __FK_LAUNCH_TASK + "]";
button_restartTimer.innerHTML = lang[__langcode]["_button_Restart"] + "[" + __FK_TIMER_RESTART + "]";
button_changeSkin.innerHTML = lang[__langcode]["_button_Change_Skin"] + "[" + __FK_MOVE_SKIN + "]";
button_defaultFontSize.innerHTML = lang[__langcode]["_button_Default_FontSize"] + "[" + __FK_DEFAULT_FONT_SIZE + "]";
button_trl.innerHTML = lang[__langcode]["_button_Trl"] + "[" + __FK_TRL_SWITCH + "]";

//显示进入网页的说明
inputElement.innerHTML = lang[__langcode]["instructions"];
