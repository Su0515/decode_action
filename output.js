//Mon Jul 01 2024 08:10:36 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const sudojia_d = require("./utils/env");
const sudojia_e = new sudojia_d("稀土掘金");
const sudojia_f = sudojia_e.isNode() ? require("./utils/sendNotify") : "";
const sudojia_g = require("./utils/getRandomWait");
const sudojia_h = require("axios").default;
const sudojia_i = require("moment");
const sudojia_j = require("./utils/introduction");
let sudojia_k = process.env.JUEJIN_COOKIE ? process.env.JUEJIN_COOKIE.split("&") : [],
  sudojia_l = "";
const sudojia_m = "1.3.7";
const sudojia_n = {
  JUEJIN_API: "https://api.juejin.cn",
  ENABLE_TEN_DRAW: process.env.ENABLE_TEN_DRAW || false,
  TEN_DRAW_NUM: parseInt(process.env.TEN_DRAW_NUM) || 1,
  COOKIE: ""
};
!(async () => {
  await sudojia_j(sudojia_e.name, sudojia_m, sudojia_f, sudojia_k);
  for (let f = 0; f < sudojia_k.length; f++) {
    sudojia_n.COOKIE = sudojia_k[f];
    const g = f + 1;
    console.log("\n*****第[" + g + "]个" + sudojia_e.name + "账号*****");
    sudojia_l += "📣====" + sudojia_e.name + "账号[" + g + "]====📣\n";
    try {
      if (403 === (await sudojia_N())) {
        await sudojia_f.sendNotify("「" + sudojia_e.name + "Cookie失效通知」", sudojia_e.name + "账号" + g + " Cookie 已失效，请重新登录获取 Cookie");
        continue;
      }
      await sudojia_p(g);
    } catch (k) {
      console.error("账号" + g + "发生异常: " + k);
    } finally {
      await sudojia_e.wait(sudojia_g(4800, 5300));
    }
  }
  if (sudojia_l) {
    await sudojia_f.sendNotify("「" + sudojia_e.name + "」", "" + sudojia_l);
  }
})().catch(a => sudojia_e.logErr(a)).finally(() => sudojia_e.done());
async function sudojia_p(b) {
  sudojia_l += "「社区活跃任务详情」\n";
  console.log("开始做社区活跃任务...");
  console.log("时间稍长、请耐心等待");
  const f = new Date().getTime();
  await sudojia_q();
  const g = new Date().getTime();
  const h = g - f;
  const j = Math.floor(h / 1000);
  const k = Math.floor(j / 60);
  const l = j % 60;
  console.log("社区活跃任务已完成\n共耗时：" + k + "分" + l + "秒\n等待五秒左右...");
  await sudojia_r();
  await sudojia_e.wait(sudojia_g(4900, 5500));
  await sudojia_P();
  await sudojia_e.wait(sudojia_g(2300, 2700));
  console.log("开始做每日签到任务...");
  await sudojia_O();
  await sudojia_e.wait(sudojia_g(3000, 3500));
  const m = await sudojia_Q();
  sudojia_l += "【总矿石数】" + m + " 矿石\n";
  await sudojia_S();
  await sudojia_e.wait(sudojia_g(2200, 2600));
  const n = await sudojia_R();
  if (n === 0) {
    console.log("白嫖次数已用尽~暂不抽奖\n");
    sudojia_l += "【抽奖信息】白嫖次数已用尽~\n";
  } else {
    await sudojia_T();
  }
  await sudojia_e.wait(sudojia_g(2300, 2800));
  const o = await sudojia_U();
  sudojia_l += "【当前幸运值】" + o + "/6000\n";
  console.log("开始执行十连抽...");
  sudojia_l += "【十连抽详情】\n";
  if (!sudojia_n.ENABLE_TEN_DRAW) {
    sudojia_l += "检测到未配置十连抽环境变量，取消十连抽...\n如需执行十连抽请配置环境变量【ENABLE_TEN_DRAW】为 true\n\n";
    console.log("检测到未配置十连抽环境变量，取消十连抽...\n如需执行十连抽请配置环境变量【ENABLE_TEN_DRAW】为 true");
    return;
  }
  console.log("检测到你已开启十连抽，正在为你执行十连抽...\n请等待两秒...");
  await sudojia_e.wait(sudojia_g(2100, 2500));
  if (2000 > m) {
    sudojia_l += "妈的，全部身家加起来矿石都不足 2000，还想十连抽???\n\n";
    console.log("妈的，全部身家加起来矿石都不足 2000，还想十连抽???");
    return;
  }
  console.log("十连抽次数默认为 " + sudojia_n.TEN_DRAW_NUM + " 次\n如需修改，请设置环境变量【TEN_DRAW_NUM】");
  for (let t = 0; t < sudojia_n.TEN_DRAW_NUM; t++) {
    await sudojia_V();
    if (o >= 6000) {
      await sudojia_W(b);
    }
    if (sudojia_n.TEN_DRAW_NUM > 1) {
      await sudojia_e.wait(sudojia_g(2000, 3000));
    }
  }
}
async function sudojia_q() {
  const g = {
    growth_type: 1
  };
  let h = await sudojia_X(sudojia_n.JUEJIN_API + "/growth_api/v1/user_growth/task_list", "post", g);
  let i = h.data.growth_tasks;
  let j = i["5"].filter(k => ![4, 5].includes(k.task_id));
  for (const k of j) {
    if (k.done >= k.limit) {
      await sudojia_e.wait(sudojia_g(1000, 2000));
      console.log("【" + k.title + "】任务已完成，跳过...");
      continue;
    }
    let l = k.done;
    console.log("开始执行【" + k.title + "】任务...");
    while (l !== k.limit) {
      await sudojia_s(k);
      await sudojia_e.wait(sudojia_g(2000, 3000));
      const o = {
        growth_type: 1
      };
      h = await sudojia_X(sudojia_n.JUEJIN_API + "/growth_api/v1/user_growth/task_list", "post", o);
      i = h.data.growth_tasks;
      j = i["5"].filter(q => ![4, 5].includes(q.task_id));
      const p = j.find(q => q.task_id === k.task_id);
      if (p) {
        l = p.done;
      }
    }
  }
}
async function sudojia_r() {
  const f = {
    growth_type: 1
  };
  const g = await sudojia_X(sudojia_n.JUEJIN_API + "/growth_api/v1/user_growth/task_list", "post", f);
  const h = g.data.growth_tasks;
  let i = h["5"].filter(j => ![4, 5].includes(j.task_id));
  for (const j of i) {
    if (j.done === j.limit) {
      sudojia_l += "【" + j.title + "】已完成" + j.done + "/" + j.limit + "\n";
    }
  }
  sudojia_l += "【今日掘友分】+" + g.data.today_jscore + "\n";
  sudojia_e.getEveryDayJscore = g.data.today_jscore;
}
async function sudojia_s(b) {
  const f = await sudojia_y();
  const g = await sudojia_B();
  switch (b.task_id) {
    case 6:
      await sudojia_t();
      break;
    case 7:
      await sudojia_u(f);
      break;
    case 8:
      await sudojia_u(g, false);
      break;
    case 9:
      await sudojia_v(f);
      break;
    case 10:
      await sudojia_v(g, false);
      break;
    case 11:
      await sudojia_w();
      break;
    case 12:
      await sudojia_x(f);
      break;
  }
}
async function sudojia_t() {
  await sudojia_e.wait(sudojia_g(1800, 2200));
}
async function sudojia_u(b, d = true) {
  await sudojia_e.wait(sudojia_g(1500, 2500));
}
async function sudojia_v(b, d = true) {
  await sudojia_e.wait(sudojia_g(1500, 2500));
  if (d) {
    await sudojia_H(b, 2);
  } else {
    await sudojia_H(b, 4);
  }
}
async function sudojia_w() {
  await sudojia_e.wait(sudojia_g(3400, 4000));
  const e = await sudojia_I();
  await sudojia_e.wait(sudojia_g(1300, 2200));
  await sudojia_J(e);
}
async function sudojia_x(b) {
  await sudojia_e.wait(sudojia_g(4800, 5200));
  const f = await sudojia_K(b);
  await sudojia_e.wait(sudojia_g(1300, 2200));
  await sudojia_L(b, f);
}
async function sudojia_y() {
  const e = await sudojia_z();
  if (e.length === 0) {
    console.log("分类列表为空");
    return;
  }
  const f = Math.floor(Math.random() * e.length);
  const g = e[f];
  const h = await sudojia_A(g);
  if (h.length === 0) {
    console.log("文章列表为空");
    return;
  }
  return h[Math.floor(Math.random() * 20) + 1];
}
async function sudojia_z() {
  const e = await sudojia_X(sudojia_n.JUEJIN_API + "/tag_api/v1/query_category_briefs", "get", {});
  const f = [];
  if ("success" === e.err_msg) {
    for (let g of e.data) {
      f.push(g.category_id);
    }
  }
  return f;
}
async function sudojia_A(d) {
  const g = [];
  const h = {
    id_type: 2,
    sort_type: 200,
    cate_id: d,
    cursor: "0",
    limit: 20
  };
  const i = await sudojia_X(sudojia_n.JUEJIN_API + "/recommend_api/v1/article/recommend_cate_feed", "post", h);
  if ("success" === i.err_msg) {
    for (let j of i.data) {
      g.push(j.article_id);
    }
  }
  return g;
}
async function sudojia_B() {
  const f = [];
  const g = {
    id_type: 4,
    sort_type: 300,
    cursor: "0",
    limit: 20
  };
  const h = await sudojia_X(sudojia_n.JUEJIN_API + "/recommend_api/v1/short_msg/recommend", "post", g);
  for (let i of h.data) {
    f.push(i.msg_id);
  }
  return f[Math.floor(Math.random() * 20) + 1];
}
async function sudojia_C() {
  const e = await sudojia_h.get("https://api.vvhan.com/api/text/joke?type=json");
  return e.data.data.content;
}
async function sudojia_D(d, e = 0) {
  const h = {
    content: d,
    mentions: [],
    sync_to_org: false
  };
  const i = await sudojia_X(sudojia_n.JUEJIN_API + "/content_api/v1/short_msg/publish", "post", h);
  if (2002 === i.err_no && e < 5) {
    console.log("沸点内容过少，正在重新生成文案重新发布...\n重试第" + (e + 1) + "次");
    return sudojia_D(d, e + 1);
  }
  if ("success" === i.err_msg) {
    return i.data.msg_id;
  }
  return -1;
}
async function sudojia_E(d) {}
async function sudojia_F(d) {}
async function sudojia_G(d, e = 2) {
  const h = "6";
  const i = {
    client_type: 2608,
    item_id: d,
    item_type: e,
    comment_content: h,
    comment_pics: []
  };
  const j = await sudojia_X(sudojia_n.JUEJIN_API + "/interact_api/v1/comment/publish", "post", i);
  if ("success" === j.err_msg) {
    return j.data.comment_id;
  }
}
async function sudojia_H(e, f = 2, g = true) {
  const j = g ? "/save" : "/cancel";
  const k = ["7370164020869791771", "7370244444282880026"];
  const l = k[Math.floor(Math.random() * k.length)];
  try {
    const m = {
      item_id: l,
      item_type: f,
      client_type: 2608
    };
    let n = await sudojia_X(sudojia_n.JUEJIN_API + "/interact_api/v1/digg/" + j, "post", m);
    await sudojia_e.wait(sudojia_g(1000, 1500));
    if (3001 === n.err_no) {
      const o = {
        item_id: e,
        item_type: f,
        client_type: 2608
      };
      n = await sudojia_X(sudojia_n.JUEJIN_API + "/interact_api/v1/digg/" + j, "post", o);
    }
  } catch (p) {
    console.error("请求失败: " + (g ? "save" : "cancel save") + ":", p);
    throw p;
  }
}
async function sudojia_I() {
  const e = [];
  const f = await sudojia_X(sudojia_n.JUEJIN_API + "/user_api/v1/author/recommend?limit=20", "get");
  for (let g of f.data) {
    e.push(g.user_id);
  }
  return e[Math.floor(Math.random() * 20) + 1];
}
async function sudojia_J(d, e = 0) {
  let h = e === 1 ? "/interact_api/v1/follow/undo" : "/interact_api/v1/follow/do";
  let i = await sudojia_X(sudojia_n.JUEJIN_API + h, "post", {
    id: "1865203238058110",
    type: 1
  });
  if (3002 === i.err_no || 6 === i.err_no) {
    const j = {
      id: d,
      type: 1
    };
    i = await sudojia_X(sudojia_n.JUEJIN_API + h, "post", j);
  }
}
async function sudojia_K(d) {
  const g = {
    limit: 10,
    cursor: "0",
    article_id: d
  };
  const h = await sudojia_X(sudojia_n.JUEJIN_API + "/interact_api/v2/collectionset/list", "post", g);
  return h.data[0].collection_id;
}
async function sudojia_L(d, e) {}
async function sudojia_M(d) {}
async function sudojia_N() {
  const e = await sudojia_X(sudojia_n.JUEJIN_API + "/growth_api/v1/get_today_status", "get", "");
  return e.data.err_no;
}
async function sudojia_O() {
  const e = await sudojia_X(sudojia_n.JUEJIN_API + "/growth_api/v1/check_in", "post", "");
  if (15001 === e.err_no) {
    console.log(e.err_msg);
    sudojia_l += "【签到信息】" + e.err_msg + "\n";
    return;
  }
  sudojia_l += "【签到信息】签到成功, 获得 " + e.data.incr_point + " 矿石\n";
  console.log("签到成功，获得 " + e.data.incr_point + " 矿石");
}
async function sudojia_P() {
  const e = await sudojia_X(sudojia_n.JUEJIN_API + "/user_api/v1/user/get", "get", "");
  const f = e.data.user_name;
  const g = e.data.user_growth_info.jscore_level;
  const h = e.data.user_growth_info.jscore_title;
  const i = e.data.user_growth_info.jscore_next_level_score;
  const j = e.data.user_growth_info.jscore;
  const k = Math.round((i - j) * 10) / 10;
  const l = Math.ceil(k / sudojia_e.getEveryDayJscore);
  if (g === 8) {
    sudojia_l += "【账号昵称】" + f + "\n【等级详情】满级大佬\n";
    return;
  }
  sudojia_l += "【账号昵称】" + f + "\n【等级详情】" + h + "(" + g + "级), 掘友分: " + j + ", 还需" + k + "分可升至掘友" + (g + 1) + "级\n【升级天数】还需 " + l + " 天\n";
}
async function sudojia_Q() {
  const e = await sudojia_X(sudojia_n.JUEJIN_API + "/growth_api/v1/get_cur_point", "get", "");
  return e.data;
}
async function sudojia_R() {
  const e = await sudojia_X(sudojia_n.JUEJIN_API + "/growth_api/v1/lottery_config/get", "get", "");
  return e.data.free_count;
}
async function sudojia_S() {
  const e = await sudojia_X(sudojia_n.JUEJIN_API + "/growth_api/v1/get_counts", "get", "");
  sudojia_l += "【签到统计】已连续签到" + e.data.cont_count + "天、累计签到" + e.data.sum_count + "天\n";
}
async function sudojia_T() {
  const e = await sudojia_X(sudojia_n.JUEJIN_API + "/growth_api/v1/lottery/draw", "post", "");
  sudojia_l += "【抽奖信息】抽中了" + e.data.lottery_name + "\n";
}
async function sudojia_U() {
  const e = await sudojia_X(sudojia_n.JUEJIN_API + "/growth_api/v1/lottery_lucky/my_lucky", "post", {});
  if ("success" === e.err_msg) {
    return e.data.total_value;
  }
}
async function sudojia_V() {
  const e = await sudojia_X(sudojia_n.JUEJIN_API + "/growth_api/v1/lottery/ten_draw", "post", "");
  console.log("本次十连抽共消耗 2000 矿石数\n十连抽奖励为: ");
  sudojia_e.lotteryBases = e.data.LotteryBases;
  for (let j of sudojia_e.lotteryBases) {
    sudojia_l += "抽中了" + j.lottery_name + "\n";
    console.log("抽中了" + j.lottery_name);
    await sudojia_e.wait(sudojia_g(2300, 2700));
  }
  let f = e.data.total_lucky_value;
  let g = (6000 - f) / 100 * 2000;
  let h = 6000 - f;
  let i = Math.round(h / 100);
  sudojia_l += "本次十连抽加" + e.data.draw_lucky_value + "幸运值，当前幸运值为" + f + "，离满格还差" + h + "幸运值，所需" + g + "矿石数，还需十连抽" + i + "次\n\n";
  console.log("本次十连抽加" + e.data.draw_lucky_value + "幸运值");
  console.log("当前幸运值为" + f);
  console.log("离幸运值满格还差" + h + "幸运值，所需" + g + "矿石数，还需十连抽" + h / 100 + "次");
}
async function sudojia_W(b) {
  const f = await sudojia_X(sudojia_n.JUEJIN_API + "/growth_api/v1/lottery_history/obj_by_page", "post", {});
  if (f.data.lottery_histories.length === 0) {
    console.log("暂无实物奖励, 请手动打开官网确认！");
    return;
  }
  const g = f.data.lottery_histories[0];
  g.ctime = sudojia_i.unix(g.ctime).format("YYYY-MM-DD HH:mm:ss");
  for (let h = 0; h < 3; h++) {
    await sudojia_f.sendNotify("「获得实物推送」", "掘金账号【" + b + "】抽中实物奖励: " + g.lottery_name + " 获得时间: " + g.ctime + "\n请速去填写地址获取！！！\n\n");
  }
}
async function sudojia_X(e, f, g = {}) {
  const j = {
    Accept: "*/*",
    "Content-type": "application/json",
    Referer: "" + sudojia_n.JUEJIN_API,
    Cookie: "sessionid=" + sudojia_n.COOKIE,
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.82 Safari/537.36"
  };
  const k = {
    method: f,
    url: e,
    headers: j,
    data: g
  };
  try {
    const m = await sudojia_h(k);
    return m.data;
  } catch (n) {
    console.error("请求失败: " + n);
    throw n;
  }
}