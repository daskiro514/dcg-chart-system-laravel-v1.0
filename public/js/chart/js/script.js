function getParameterByName(name) {
  name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
  return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
};

document.addEventListener("DOMContentLoaded", function (event) {
  window.chartReady = false;

  function timeframe(timeframe) {
    switch (timeframe) {
      case 'M1':
        return '1';
        break;
      case 'M5':
        return '5';
        break;
      case 'M15':
        return '15';
        break;
      case 'M30':
        return '30';
        break;
      case 'H1':
        return '60';
        break;
      case 'H4':
        return '240';
        break;
      case 'D1':
        return '1D';
        break;
    }
  }


  function get_symbol_name() {
    return widget
      .chart()
      .symbol()
      .split(':')
      .slice(-3)
      .join(':');
  }

  var first_time = true;
  var ticker = '';
  var host = "http://45.33.120.127";
  // var host = "http://127.0.0.1";
  var bar_list = [];
  var pattern_type = getParameterByName('type');

  window.socket = io(host, {
    path: '/api',
  });

  socket.emit('start_symbol', {
    type: pattern_type,
  })

  function transform_timezone(key) {
    var timezones = {
      '-3': 'America/Sao_Paulo',
      '-3': 'America/Argentina/Buenos_Aires',
      '-5': 'America/Bogota',
      '-5': 'America/New_York',
      '-5': 'America/Toronto',
      '0': 'UTC',
      '1': 'Europe/London',
      '1': 'Europe/Berlin',
      '1': 'Europe/Madrid',
      '1': 'Europe/Paris',
      '1': 'Europe/Warsaw',
      '1': 'Europe/Zurich',
      '2': 'Africa/Johannesburg',
      '2': 'Europe/Athens',
      '3': 'Europe/Moscow',
      '3': 'Europe/Istanbul',
      '3.30': 'Asia/Tehran',
      '4': 'America/Caracas',
      '4': 'Asia/Dubai',
      '5': 'Asia/Ashkhabad',
      '5.30': 'Asia/Kolkata',
      '5.45': 'Asia/Kathmandu',
      '6': 'America/Chicago',
      '6': 'America/El_Salvador',
      '6': 'America/Mexico_City',
      '6': 'Asia/Almaty',
      '7': 'America/Phoenix',
      '7': 'Asia/Bangkok',
      '7': 'US/Mountain',
      '8': 'America/Los_Angeles',
      '8': 'America/Vancouver',
      '8': 'Asia/Hong_Kong',
      '8': 'Asia/Shanghai',
      '8': 'Asia/Singapore',
      '8': 'Asia/Taipei',
      '9': 'Asia/Seoul',
      '9': 'Asia/Tokyo',
      '9.30': 'Australia/Adelaide',
      '10': 'Australia/Brisbane',
      '10': 'Australia/Sydney',
      '10': 'Pacific/Honolulu',
      '12': 'Pacific/Auckland',
      '12.45': 'Pacific/Chatham',
      '13': 'Pacific/Fakaofo',
    }
    return timezones[key];
  }

  function interval2timeframe(interval) {
    var timeframe = '';
    switch (interval) {
      case '5':
        timeframe = 'M5';
        break;
      case '15':
        timeframe = 'M15';
        break;
      case '30':
        timeframe = 'M30';
        break;
      case '60':
        timeframe = 'H1';
        break;
      case '240':
        timeframe = 'H4';
        break;
      case '1D':
        timeframe = 'D1';
        break;
    }

    return timeframe
  }

  socket.on('start_symbol', function (symbol) {
    if (symbol.ticker.indexOf('undefined') > -1) {
      setTimeout(function () {
        socket.emit('new_symbol');
      }, 1000);
      return;
    }
    ticker = symbol.ticker;
    window.pattern_id = symbol.id;
    var host = window.location.host;
    // symbol.name = symbol.name.split(':')[1];
    window.widget = new TradingView.widget({
      symbol: symbol.ticker,
      autosize: true,
      interval: timeframe(symbol.timeframe),
      timeframe: '60',
      timezone: transform_timezone('2'),
      symbol_search_request_delay: 500,
      container_id: "chartPanel",
      datafeed: new Datafeeds.UDFCompatibleDatafeed(socket, 10000),
      library_path: "js/chart/charting_library/",
      charts_storage_url: "/storage",
      charts_storage_api_version: "1.1",
      client_id: document.getElementById('project').innerText,
      user_id: document.getElementById('user_id').innerText,
      custom_indicators_getter: function (PineJS) {

        return Promise.resolve([{
          name: "My Customizing Indicators",
          metainfo: {
            "_metainfoVersion": 27,
            "id": "My Customizing Indicators@tv-basicstudies-1",
            "scriptIdPart": "",
            "name": "My Customizing Indicators",

            "description": "My Customizing Indicators",

            "shortDescription": "mycustomindi",

            "is_hidden_study": false,
            "is_price_study": true,
            "isCustomIndicator": true,

            isTVScript: !1,
            isTVScriptStub: !1,

            "plots": [
              { "id": "plot_0", "type": "line" },
              { "id": "plot_1", "type": "line" },
              { "id": "plot_2", "type": "line" },
              { "id": "plot_3", "type": "line" },
              { "id": "plot_4", "type": "line" },
            ],
            "defaults": {
              "styles": {
                "plot_0": { "linestyle": 0, "linewidth": 1, "plottype": 0, "trackPrice": !1, "transparency": 35, "visible": !0, "color": "#0845A0" },
                "plot_1": { "linestyle": 0, "linewidth": 1, "plottype": 0, "trackPrice": !1, "transparency": 35, "visible": !0, "color": "#C0C0C0" },
                "plot_2": { "linestyle": 0, "linewidth": 1, "plottype": 0, "trackPrice": !1, "transparency": 35, "visible": !0, "color": "#ADD8E6" },
                "plot_3": { "linestyle": 0, "linewidth": 1, "plottype": 0, "trackPrice": !1, "transparency": 35, "visible": !0, "color": "#FF0000" },
                "plot_4": { "linestyle": 0, "linewidth": 1, "plottype": 0, "trackPrice": !1, "transparency": 35, "visible": !0, "color": "#FFFF00" },
              },
              "precision": 4,
              "inputs": { "in_0": 9, "in_1": "close", "in_2": 0 },
            },
            "styles": {
              "plot_0": { "title": "800 Day EMA", "histogramBase": 0, "joinPoints": !1 },
              "plot_1": { "title": "200 Day EMA", "histogramBase": 0, "joinPoints": !1 },
              "plot_2": { "title": "50 Day EMA", "histogramBase": 0, "joinPoints": !1 },
              "plot_3": { "title": "13 Day EMA", "histogramBase": 0, "joinPoints": !1 },
              "plot_4": { "title": "5 Day EMA", "histogramBase": 0, "joinPoints": !1 },
            },
            "inputs": [
              { "id": "in_0", "name": "Length", "defval": 9, "type": "integer", "min": 1, "max": 1e4 },
              { "id": "in_1", "name": "Source", "defval": "close", "type": "source", "options": ["open", "high", "low", "close", "hl2", "hlc3", "ohlc4"] },
              { "id": "in_2", "name": "Offset", "defval": 0, "type": "integer", "min": -1e4, "max": 1e4 },
            ],
          },

          constructor: function () {

            this.main = function (context, inputCallback) {
              this._context = context;
              this._input = inputCallback;

              var i = PineJS.Std[this._input(1)](this._context);
              r = this._input(0);
              o = this._input(2);
              return [{ value: PineJS.Std.ema(this._context.new_var(i), 800, this._context), offset: o },
              { value: PineJS.Std.ema(this._context.new_var(i), 200, this._context), offset: o },
              { value: PineJS.Std.ema(this._context.new_var(i), 50, this._context), offset: o },
              { value: PineJS.Std.ema(this._context.new_var(i), 13, this._context), offset: o },
              { value: PineJS.Std.ema(this._context.new_var(i), 5, this._context), offset: o }];

            }
          }
        }, {
          name: "Wave System",
          metainfo: {
            _metainfoVersion: 41,
            isTVScript: !1,
            isTVScriptStub: !1,
            plots: [{
              id: "plot_0",
              type: "shapes"
            }, {
              id: "plot_1",
              type: "shapes"
            }, {
              id: "plot_2",
              type: "line"
            }, {
              id: "plot_3",
              type: "line"
            }, {
              id: "plot_4",
              type: "line"
            }, {
              id: "plot_5",
              type: "shapes"
            }, {
              id: "plot_6",
              type: "shapes"
            }, {
              id: "plot_7",
              type: "colorer",
              target: "filledAreaId1",
              palette: "paletteId1"
            }],
            filledAreas: [{
              id: "filledAreaId1",
              objAId: "plot_2",
              objBId: "plot_4",
              type: "plot_plot",
              title: "Over Background",
              palette: "paletteId1",
            },],
            palettes: {
              paletteId1: {
                valToIndex: {
                  0: 0,
                  1: 1,
                },
                colors: {
                  0: {
                    name: 'First color',
                  },
                  1: {
                    name: 'Second color',
                  },
                },
              },
            },
            defaults: {
              filledAreasStyle: {
                filledAreaId1: {
                  color: "yellow",
                  transparency: 90,
                  visible: !0
                },
              },
              palettes: {
                paletteId1: {
                  colors: {
                    0: {
                      color: '#F00000',
                      width: 3,
                      style: 1,
                    },
                    1: {
                      color: '#00F000',
                      width: 3,
                      style: 1,
                    },
                  },
                },
              },
              styles: {
                // Plot type:
                //    1 - Histogram
                //    2 - Line
                //    3 - Cross
                //    4 - Area
                //    5 - Columns
                //    6 - Circles
                //    7 - Line With Breaks
                //    8 - Area With Breaks
                plot_0: {
                  plottype: "shape_label_up",
                  text: "Long",
                  title: "Long",
                  color: "#008000",
                  textColor: "#ffffff",
                  location: "BelowBar",
                  size: "tiny",
                  transparency: 0,
                },
                plot_1: {
                  plottype: "shape_label_down",
                  text: "Short",
                  title: "Short",
                  color: "#ff0000",
                  textColor: "#ffffff",
                  location: "AboveBar",
                  size: "tiny",
                  transparency: 0,
                },
                plot_2: {
                  plottype: 2,
                  color: "#ffffff",
                  linestyle: 0,
                  linewidth: 1,
                  trackPrice: !1,
                  transparency: 75,
                  visible: !0,
                },
                plot_3: {
                  plottype: "line",
                  color: "#ffff00",
                  linestyle: 0,
                  linewidth: 2,
                  trackPrice: !1,
                  visible: !0,
                },
                plot_4: {
                  plottype: 2,
                  color: "#ff0000",
                  linestyle: 0,
                  linewidth: 2,
                  trackPrice: !1,
                  visible: !0,
                },
                plot_5: {
                  plottype: "shape_xcross",
                  text: "ES",
                  color: "#ffffff",
                  textColor: "#ffffff",
                  location: "BelowBar",
                  size: "tiny",
                  transparency: 0,
                },
                plot_6: {
                  plottype: "shape_xcross",
                  text: "EL",
                  color: "#ffffff",
                  textColor: "#ffffff",
                  location: "AboveBar",
                  size: "tiny",
                  transparency: 0,
                }
              },
              precision: 4,
              inputs: {
                in_0: 7,
                in_1: 50,
                in_2: 200,
                length: 22,
                mult: 3.0,
                in_5: 0.02,
                in_6: 0.02,
                in_7: 0.2,
                in_8: 0.02,
                in_9: 0.02,
                in_10: 0.2,
                adxlen: 14,
                dilen: 14,
                th: 25,
                in_14: 20,
                hi: "high",
                lo: "low",
                tp: "close",
                a: 4,
                c: 10,
                RSI_Period: 14,
                SF: 5,
                QQE: 4.238,
                ThreshHold: 10,
              }
            },
            styles: {
              plot_0: {
                title: "long",
                histogramBase: 0,
                joinPoints: !1,
                isHidden: !1
              },
              plot_1: {
                title: "short",
                histogramBase: 0,
                joinPoints: !1,
                isHidden: !1
              },
              plot_2: {
                title: "Fast",
                histogramBase: 0,
                joinPoints: !1,
                isHidden: !1
              },
              plot_3: {
                title: "Medium",
                histogramBase: 0,
                joinPoints: !1,
                isHidden: !1
              },
              plot_4: {
                title: "Slow",
                histogramBase: 0,
                joinPoints: !1,
                isHidden: !1
              },
              plot_5: {
                title: "exitShort",
                histogramBase: 0,
                joinPoints: !1,
                isHidden: !1
              },
              plot_6: {
                title: "exitLong",
                histogramBase: 0,
                joinPoints: !1,
                isHidden: !1
              }
            },
            description: "Wave System",
            shortDescription: "wave system",
            id: "wave_system@tv-basicstudies-1",
            inputs: [{
              id: "in_0",
              name: "maFastLength",
              defval: 7,
              type: "integer",
              min: 1,
            }, {
              id: "in_1",
              name: "maMedLength",
              defval: 50,
              type: "integer",
              min: 1,
            }, {
              id: "in_2",
              name: "maSlowLength",
              defval: 200,
              type: "integer",
              min: 1,
            }, {
              id: "length",
              name: "Supertrend ATR Period",
              defval: 22,
              type: "integer",
              min: 1,
            }, {
              id: "mult",
              name: "Supertrend ATR Multiplier",
              defval: 3.0,
              type: "float",
              step: .1,
            }, {
              id: "in_5",
              name: "AF_initial",
              defval: .02,
              type: "float",
            }, {
              id: "in_6",
              name: "AF_increment",
              defval: .02,
              type: "float",
            }, {
              id: "in_7",
              name: "AF_maximum",
              defval: .2,
              type: "float",
            }, {
              id: "in_8",
              name: "PSARstart",
              defval: .02,
              type: "float",
            }, {
              id: "in_9",
              name: "increment",
              defval: .02,
              type: "float",
            }, {
              id: "in_10",
              name: "maximum",
              defval: .2,
              type: "float",
            }, {
              id: "adxlen",
              name: "ADX smoothing",
              defval: 14,
              type: "integer",
            }, {
              id: "dilen",
              name: "DI length",
              defval: 14,
              type: "integer",
            }, {
              id: "th",
              name: "ADX threshold",
              defval: 25,
              type: "integer",
            }, {
              id: "in_14",
              name: "CCIlength",
              defval: 20,
              type: "integer",
              min: 1
            }, {
              id: "hi",
              name: "CCI high",
              defval: "high",
              type: "source",
            }, {
              id: "lo",
              name: "CCI low",
              defval: "low",
              type: "source",
            }, {
              id: "tp",
              name: "CCI TP",
              defval: "close",
              type: "source",
            }, {
              id: "a",
              name: "ATR sensitivity",
              defval: 4,
              type: "integer",
            }, {
              id: "c",
              name: "ATR period",
              defval: 10,
              type: "integer",
            }, {
              id: "RSI_Period",
              name: "QQE RSI length",
              defval: 14,
              type: "integer",
            }, {
              id: "SF",
              name: "QQE RSI smoothing",
              defval: 5,
              type: "integer",
            }, {
              id: "QQE",
              name: "Fast QQE factor",
              defval: 4.238,
              type: "float",
            }, {
              id: "ThreshHold",
              name: "QQE threshold",
              defval: 10,
              type: "integer",
            }],
            scriptIdPart: "",
            name: "Williams Fractals",
            isCustomIndicator: !0,
            is_hidden_study: false,
            is_price_study: true,
          },
          constructor: function () {
            this.crossover = function (inp, base, ctx) {
              if (isNaN(inp) || isNaN(base)) return !1;
              var n, r = ctx.new_var((n = inp - base) < 0 ? -1 : 0 === n ? 0 : 1);
              return !isNaN(r.get(1)) && r.get(1) < r.get()
            }, this.crossunder = function (inp, base, ctx) {
              if (isNaN(inp) || isNaN(base)) return !1;
              var n, r = ctx.new_var((n = inp - base) < 0 ? -1 : 0 === n ? 0 : 1);
              return !isNaN(r.get(1)) && r.get(1) > r.get()
            }, this.barssince = function (cond, ctx) {
              bar_list.push(cond);
              var cond_len = bar_list.length,
                cond_res = 0;
              // console.log(bar_list);
              if (cond_len > 1) {
                while ((cond_len - cond_res - 1) > 0) {
                  if (bar_list[cond_len - cond_res - 1] != cond) { // && !isNaN(l1[cond_len - cond_res -1])
                    return cond_res;
                  }
                  cond_res++;
                }
              }
              return cond_res;
            }, this.main = function (context, inputCallback) {
              this._context = context, this._input = inputCallback;
              var close = PineJS.Std.close(this._context),
                closeBuf = this._context.new_var(close);
              var high = PineJS.Std.high(this._context),
                highBuf = this._context.new_var(high);
              var low = PineJS.Std.low(this._context),
                lowBuf = this._context.new_var(low);
              var hl2 = PineJS.Std.hl2(this._context),
                hl2Buf = this._context.new_var(hl2);
              var hlc3 = PineJS.Std.hlc3(this._context),
                hlc3Buf = this._context.new_var(hlc3);
              var tr = PineJS.Std.tr(this._context),
                trBuf = this._context.new_var(tr);

              // EMAs
              var maFastLength = this._input(0),
                maMedLength = this._input(1),
                maSlowLength = this._input(2),
                maFast = PineJS.Std.ema(closeBuf, maFastLength, this._context),
                maMed = PineJS.Std.ema(closeBuf, maMedLength, this._context),
                maSlow = PineJS.Std.ema(closeBuf, maSlowLength, this._context);

              // Awesome Oscillator
              var AOfast = 0,
                AOslow = 0,
                b3 = PineJS.Std.sma(hl2Buf, 5, this._context),
                b5 = PineJS.Std.sma(hl2Buf, 34, this._context),
                ao = b3 - b5;

              //DI+ and DI-
              var DIlen = 10,
                DIup = PineJS.Std.change(highBuf),
                DIdown = -PineJS.Std.change(lowBuf),
                trur = PineJS.Std.rma(trBuf, DIlen, this._context),
                c8 = (DIup > DIdown && DIup > 0) ? DIup : 0,
                c9 = this._context.new_var(c8),
                c10 = PineJS.Std.rma(c9, DIlen, this._context),
                DIplus = PineJS.Std.fixnan(100 * c10 / trur, this._context),
                c11 = (DIdown > DIup && DIdown > 0) ? DIdown : 0,
                c12 = this._context.new_var(c11),
                c13 = PineJS.Std.rma(c12, DIlen, this._context),
                DIminus = PineJS.Std.fixnan(100 * c13 / trur, this._context),
                di = DIplus - DIminus;

              // Supertrend
              var length = this._input(3),
                mult = this._input(4),

                d1 = PineJS.Std.atr(length, this._context),
                atr = mult * d1,
                longStop = hl2 - atr,
                d3 = this._context.new_var(longStop),
                longStopPrev = PineJS.Std.nz(d3.get(1), longStop),
                longStop = closeBuf.get(1) > longStopPrev ? PineJS.Std.max(longStop, longStopPrev) : longStop;
                d3.set(longStop);

              var shortStop = hl2 + atr,
                d6 = this._context.new_var(shortStop),
                shortStopPrev = PineJS.Std.nz(d6.get(1), shortStop),
                shortStop = closeBuf.get(1) < shortStopPrev ? PineJS.Std.min(shortStop, shortStopPrev) : shortStop;
                d6.set(shortStop);

              var dir = 1,
                d7 = this._context.new_var(dir),
                dir = PineJS.Std.nz(d7.get(1), dir);
                d7.set(dir);
                dir = dir == -1 && close > shortStopPrev ? 1 : dir == 1 && close < longStopPrev ? -1 : dir;
                d7.set(dir);
                
              // Lucid SAR
              var AF_initial = this._input(5),
                AF_increment = this._input(6),
                AF_maximum = this._input(7),
                uptrend = !0,
                newtrend = !1,
                EP = high,
                SAR = low,
                AF = AF_initial,

                uptrdBuf = this._context.new_var(uptrend),
                uptrdBuftmp = uptrdBuf.get(2),
                newtrdBuf = this._context.new_var(newtrend),
                newtrdBuftmp = newtrdBuf.get(2),

                EPBuf = this._context.new_var(EP),
                eptmp = EPBuf.get(2),
                AFBuf = this._context.new_var(AF),
                aftmp = AFBuf.get(2),
                SARBuf = this._context.new_var(SAR),
                sartmp = SARBuf.get(2);
                lowtmp = lowBuf.get(2);
                hightmp = highBuf.get(2);

                if (PineJS.Std.na(uptrdBuf.get(1)) == 0 && PineJS.Std.na(newtrdBuf.get(1)) == 0) {
                  if (uptrdBuf.get(1)) {
                    EP = PineJS.Std.max(high, EPBuf.get(1));
                  } else {
                    EP = PineJS.Std.min(low, EPBuf.get(1));
                  }
                  EPBuf.set(EP);
                  if (newtrdBuf.get(1)) {
                    AF = AF_initial;
                  } else {
                    if (EP != EPBuf.get(1)) {
                      AF = PineJS.Std.min(AF_maximum, AFBuf.get(1) + AF_increment);
                    } else {
                      AF = AFBuf.get(1);
                    }
                  }
                  AFBuf.set(AF);
                  SAR = SARBuf.get(1) + AF * (EP - SARBuf.get(1));
                  SARBuf.set(SAR);

                  if (uptrdBuf.get(1)) {
                    if (newtrend) {
                      SAR = PineJS.Std.max(high, EPBuf.get(1));
                      EP = PineJS.Std.min(low, lowBuf.get(1));
                      SARBuf.set(SAR);
                      EPBuf.set(EP);
                    }
                    else {
                      SAR = PineJS.Std.min(SAR, lowBuf.get(1));
                      SARBuf.set(SAR);
                      var ls09 = lowBuf.get(2);
                      if (PineJS.Std.na(ls09) == 0) {
                        SAR = PineJS.Std.min(SAR, ls09);
                        SARBuf.set(SAR);
                      }
                      if (SAR > low) {
                        uptrend = !1;
                        uptrdBuf.set(uptrend);
                        newtrend = !0;
                        newtrdBuf.set(newtrend);
                        SAR = PineJS.Std.max(high, EPBuf.get(1));
                        SARBuf.set(SAR);
                        EP = PineJS.Std.min(low, lowBuf.get(1));
                        EPBuf.set(EP);
                      }
                      else {
                        uptrend = !0;
                        uptrdBuf.set(uptrend);
                        newtrend = !1;
                        newtrdBuf.set(newtrend);
                      }
                    }
                  }
                  else {
                    if (newtrend) {
                      SAR = PineJS.Std.min(low, EPBuf.get(1));
                      EP = PineJS.Std.max(high, highBuf.get(1));
                      SARBuf.set(SAR);
                      EPBuf.set(EP);
                    }
                    else {
                      SAR = PineJS.Std.max(SAR, highBuf.get(1));
                      SARBuf.set(SAR);
                      var ls14 = highBuf.get(2);
                      if (PineJS.Std.na(ls14) === 0) {
                        SAR = PineJS.Std.max(SAR, ls14);
                        SARBuf.set(SAR);
                      }
                      if (SAR < high) {
                        uptrend = !0;
                        uptrdBuf.set(uptrend);
                        newtrend = !0;
                        newtrdBuf.set(newtrend);
                        SAR = PineJS.Std.min(low, EPBuf.get(1));
                        EP = PineJS.Std.max(high, highBuf.get(1));
                        SARBuf.set(SAR);
                        EPBuf.set(EP);
                      }
                      else {
                        uptrend = !1;
                        uptrdBuf.set(uptrend);
                        newtrend = !1;
                        newtrdBuf.set(newtrend);
                      }
                    }
                  }
                }

              var x = close - SAR,
                lucidDir = x > 0 ? 1 : -1;

              //Parabolic SAR
              // var PSARstart = this._input(8),
              //   increment = this._input(9),
              //   maximum = this._input(10),
              //   psar = PineJS.Std.sar(PSARstart, increment, maximum, this._context),
              //   psarDir = psar < cls ? 1 : -1;

              // ADX
              var adxlen = this._input(11),
                dilen = this._input(12),
                th = this._input(13),
                up = PineJS.Std.change(highBuf),
                down = -PineJS.Std.change(lowBuf),
                plusDM = PineJS.Std.na(up) ? PineJS.Std.na() : up > down && up > 0 ? up : 0,
                minusDM = PineJS.Std.na(down) ? PineJS.Std.na() : down > up && down > 0 ? down : 0,
                truerange = PineJS.Std.rma(trBuf, dilen, this._context),
                plusdDMBuf = this._context.new_var(plusDM),
                pdbrma = PineJS.Std.rma(plusdDMBuf, dilen, this._context),
                plus = PineJS.Std.fixnan(100 * pdbrma / truerange, this._context),
                minusDMBuf = this._context.new_var(minusDM),
                mdbrma = PineJS.Std.rma(minusDMBuf, dilen, this._context),
                minus = PineJS.Std.fixnan(100 * mdbrma / truerange, this._context),
                sum = plus + minus,
                ls = PineJS.Std.abs(plus - minus) / (PineJS.Std.eq(sum, 0) ? 1 : sum),
                adx = this._context.new_var(ls),
                sig = 100 * PineJS.Std.rma(adx, adxlen, this._context);

              // CCI
              var CCIlength = this._input(14),
                ma = PineJS.Std.sma(hlc3Buf, CCIlength, this._context),
                cci3 = PineJS.Std.dev(hlc3Buf, CCIlength, this._context),
                cci4 = (hlc3 - ma) / (0.015 * cci3),
                CCIbull = cci4 > 100,
                CCIbear = cci4 < -100;

              // ATR
              var a = this._input(18),
                c = this._input(19),
                xATR = PineJS.Std.atr(c, this._context),
                nLoss = a * xATR,

                xATRTrailingStop = 0.0,
                p_xATRTS = this._context.new_var(xATRTrailingStop),
                xATRTrailingStop = PineJS.Std.iff(
                  close > PineJS.Std.nz(p_xATRTS.get(1), 0) && closeBuf.get(1) > PineJS.Std.nz(p_xATRTS.get(1), 0),
                  PineJS.Std.max(PineJS.Std.nz(p_xATRTS.get(1)), close - nLoss),
                  PineJS.Std.iff(
                    close < PineJS.Std.nz(p_xATRTS.get(1), 0) && closeBuf.get(1) < PineJS.Std.nz(p_xATRTS.get(1), 0),
                    PineJS.Std.min(PineJS.Std.nz(p_xATRTS.get(1)), close + nLoss),
                    PineJS.Std.iff(
                      close > PineJS.Std.nz(p_xATRTS.get(1), 0),
                      close - nLoss,
                      close + nLoss
                    )
                  )
                );
                p_xATRTS.set(xATRTrailingStop);

              var pos = 0,
                pPos = this._context.new_var(pos),
                pos = PineJS.Std.iff(
                  closeBuf.get(1) < PineJS.Std.nz(p_xATRTS.get(1), 0) && close > PineJS.Std.nz(p_xATRTS.get(1), 0),
                  1,
                  PineJS.Std.iff(
                    closeBuf.get(1) > PineJS.Std.nz(p_xATRTS.get(1), 0) && close < PineJS.Std.nz(p_xATRTS.get(1), 0),
                    -1,
                    PineJS.Std.nz(pPos.get(1), 0)
                  )
                );
                pPos.set(pos);

              var ema1 = PineJS.Std.ema(closeBuf, 1, this._context);

              var above = this.crossover(ema1, xATRTrailingStop, this._context),
                below = this.crossover(xATRTrailingStop, ema1, this._context);


              // var above = PineJS.Std.cross(ema1, xATRTrailingStop, this._context),
              //   below = PineJS.Std.cross(xATRTrailingStop, ema1, this._context);

              // QQE
              // var RSI_Period = this._input(20),
              //   SF = this._input(21),
              //   QQE = this._input(22),
              //   ThreshHold = this._input(23),
              //   Wilders_Period = RSI_Period * 2 - 1,
              //   // p_Wilders_Period = Wilders_Period,
              //   h1 = PineJS.Std.close(this._context),
              //   Rsi = PineJS.Std.rsi(h1, RSI_Period),
              //   p_rsi = this._context.new_var(Rsi),
              //   RsiMa = PineJS.Std.ema(p_rsi, SF, this._context),
              //   p_rsima = this._context.new_var(RsiMa),
              //   AtrRsi = PineJS.Std.abs(p_rsima.get(0) - RsiMa),
              //   p_atrrsi = this._context.new_var(AtrRsi),
              //   MaAtrRsi = PineJS.Std.ema(p_atrrsi, Wilders_Period, this._context),
              //   p_maatrrsi = this._context.new_var(MaAtrRsi),
              //   dar = PineJS.Std.ema(p_maatrrsi, Wilders_Period, this._context) * QQE,
              //   longband = 0.0,
              //   shortband = 0.0,
              //   trend = 0,
              //   DeltaFastAtrRsi = dar,
              //   RSIndex = RsiMa,
              //   newshortband = RSIndex + DeltaFastAtrRsi,
              //   newlongband = RSIndex - DeltaFastAtrRsi,
              //   // p_rsindex = this._context.new_var(RSIndex),
              //   p_rsindex = p_rsima,
              //   p_longband = this._context.new_var(longband),
              //   maxlongband = PineJS.Std.max(p_longband.get(0), newlongband),
              //   longband = p_rsindex.get(0) > p_longband.get(0) && RSIndex > p_longband.get(0) ? maxlongband : newlongband,

              //   p_shortband = this._context.new_var(shortband),
              //   minshortband = PineJS.Std.min(p_shortband.get(0), newshortband),
              //   shortband = p_rsindex.get(0) < p_shortband.get(0) && RSIndex < p_shortband.get(0) ? minshortband : newshortband,

              //   p_longband1 = this._context.new_var(longband),
              //   cross_1 = PineJS.Std.cross(p_longband1.get(0), RSIndex, this._context),

              //   p_shortband1 = this._context.new_var(shortband),
              //   p_trend = this._context.new_var(trend),
              //   pptrend = PineJS.Std.nz(p_trend.get(0), 1),

              //   trend = PineJS.Std.cross(RSIndex, p_shortband1.get(0), this._context) ? 1 : cross_1 ? -1 : pptrend,

              //   FastAtrRsiTL = trend == 1 ? longband : shortband,
              //   QQExlong = 0,
              //   p_qqexlong = this._context.new_var(QQExlong),
              //   QQExlong = PineJS.Std.nz(p_qqexlong.length > 2 ? p_qqexlong.get(0) : 0, 0),
              //   QQExshort = 0,
              //   p_qqexshort = this._context.new_var(QQExshort),
              //   QQExshort = PineJS.Std.nz(p_qqexshort.length > 2 ? p_qqexshort.get(0) : 0, 0),
              //   QQExlong = FastAtrRsiTL < RSIndex ? QQExlong + 1 : 0,
              //   QQExshort = FastAtrRsiTL > RSIndex ? QQExshort + 1 : 0,
              //   p_fastatrrsitl = this._context.new_var(FastAtrRsiTL),
              //   QQECrossLong = QQExlong == 1 ? p_fastatrrsitl.get(0) - 50 : PineJS.Std.na(),
              //   QQECrossShort = QQExshort == 1 ? p_fastatrrsitl.get(0) - 50 : PineJS.Std.na();


              // Supertrend conditions
              var p_dir = this._context.new_var(dir);
              var longSuper = (dir == 1) && (p_dir.get(1) == -1) && CCIbull,
                shortSuper = (dir == -1) && (p_dir.get(1) == 1) && CCIbear;

              // ATR conditions
              var longATR = (close > xATRTrailingStop) && above,
                shortATR = (close < xATRTrailingStop) && below;

              // Lucid conditions
              var lucidUp = this.crossover(x, 0, this._context),
                lucidDown = this.crossunder(x, 0, this._context),
                longLucid = lucidUp && (maFast > maSlow) && (maMed > maSlow) && (sig > th) && (di > 0) && (ao > 20),
                shortLucid = lucidDown && (maFast < maSlow) && (maMed < maSlow) && (sig > th) && (di < 0) && (ao < 20);

              // MA conditions
              var longMA = (this.crossover(maFast, maMed, this._context) || this.crossover(maFast, maSlow, this._context)) && ao > 0 && dir == 1,
                shortMA = (this.crossunder(maFast, maMed, this._context) || this.crossunder(maFast, maSlow, this._context)) && ao < 0 && dir == -1;

              // Combined signals
              var long = longSuper || longATR || longLucid || longMA,
                short = shortSuper || shortATR || shortLucid || shortMA;

              // Exits
              var pp1 = this.barssince(long, this._context) > 2,
                pp2 = this.barssince(short, this._context) > 2;
              var p_luciddir = this._context.new_var(lucidDir),
                exitLong = lucidDir == -1 && p_luciddir.get(1) == 1 && pp1 && dir == 1,
                exitShort = lucidDir == 1 && p_luciddir.get(1) == -1 && pp2 && dir == -1;

              var up = maFast > maSlow,
                down = maFast < maSlow,
                trendFill = up ? 1 : down ? 0 : PineJS.Std.na();

              return [long, short, maFast, maMed, maSlow, exitShort, exitLong, trendFill];
            }
          }
        }
        ]);
      },
      locale: getParameterByName('lang') || "en",
      enabled_features: [],
      disabled_features: ["header_compare", "border_around_the_chart"], // "header_symbol_search"
      snapshot_url: 'http://' + host + '/save_screenshot.php',

      overrides: {
        "symbolWatermarkProperties.color": "rgba(0, 0, 0, 0)",
        "paneProperties.vertGridProperties.color": "rgba(0, 0, 0, 0)",
        "paneProperties.horzGridProperties.color": "rgba(0, 0, 0, 0)",
        "paneProperties.legendProperties.showStudyTitles": false,
        "paneProperties.legendProperties.showStudyValues": false,
        "volumePaneSize": "small",
        "mainSeriesProperties.showCountdown": true,
        "mainSeriesProperties.candleStyle.upColor": "#4169e1",
        "mainSeriesProperties.candleStyle.borderUpColor": "#4169e1",
      },

      theme: 'dark',
      style: '1',
      drawings_access: {
        type: 'black',
        tools: [{
          name: "Regression Trend"
        }]
      },
    });

    widget.headerReady()
      .then(function () {
        var button = $(widget.createButton());
        var symbol_name = get_symbol_name();

        // button.text(symbol_name.split(',')[0].split(':')[1]);
      })

    widget.onChartReady(function () {

      widget
        .chart()
        .onIntervalChanged()
        .subscribe(null, function (interval, obj) {

          // change symbol to one with right timeframe
          var new_symbol_name = get_symbol_name()
            .split(':')
            .slice(-3)
            .slice(0, 2);

          new_symbol_name.push(interval2timeframe(interval))
          widget.chart().setSymbol(new_symbol_name.join(':'));
        })

      window.chartReady = true;

      // we don't need none-action button
      // var button = widget.createButton();
      // var symbol_name = get_symbol_name();
      // var btn_text = symbol_name.split(',')[0].split(':')[1];
      // button.text(btn_text);

      widget.chart().setResolution(timeframe(symbol.timeframe));
      window.get_patterns = function () {
        socket.emit('patterns', {
          symbol: get_symbol_name(),
          type: pattern_type,
          id: window.pattern_id,
        });
      }
      get_patterns();

      widget.chart().onDataLoaded().subscribe(null, function () {
        console.log('data loaded');

        get_patterns();
      });

      // при смене символа чистим массив с таймстампами предыдущего символа
      widget.chart().onSymbolChanged().subscribe(null, function (symbol) {
        ticker = symbol.ticker;
        first_time = true;
        // widget.chart().setResolution(timeframe(symbol_name.split(',')[0].split(':')[2]));
        // button.text(symbol_name.split(',')[0].split(':')[1]);
      });

      // widget.chart().createStudy('My Customizing Indicators', true, false);
      // widget.chart().createStudy('Wave System', true, false);

      if (getParameterByName('type') == 'Pick_Pocket') {
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [200],
          null, {
          'plot.color.0': '#bc59ff',
          'plot.linewidth': 3,

        }
        );
        widget.chart().createStudy('SuperTrend', false, false, [2], null, {
          'Color 0.color.0': '#4169e1'
        });
        widget.chart().createStudy('Williams Fractal', false, false, [2], null, {
          'Up Fractals.color.0': '#ff3b31',
          'Down Fractals.color.0': '#4169e1',
          'Down Fractals.plottype': 'Arrow Up'
        });

      } else if (getParameterByName('type') == 'Simple_Scalper') {
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [200],
          null, {
          'plot.color.0': '#bc59ff',
          'plot.linewidth': 3,

        }
        );
        widget.chart().createStudy('Stochastic', false, false, [5, 1, 1], null, {
          "%d.color": "#000000",
          "%k.color": "#000000",
          "upperlimit.color": "#ff3b31",
          "lowerlimit.color": "#4169e1",
          "lowerlimit.linewidth": 3,
          "upperlimit.linewidth": 3,
          "hlines background.color": "#ffffff"
        });
        widget.chart().createStudy('Relative Strength Index', false, false, [4], null, {
          "plot.color.0": "#000000",
          "upperlimit.color": "#ff3b31",
          "lowerlimit.color": "#4169e1",
          "lowerlimit.linewidth": 3,
          "upperlimit.linewidth": 3,
          "hlines background.color": "#ffffff"
        });
        widget.chart().createStudy('Bollinger Bands', false, false, [20], null, {
          'plot.color.0': '#D4AF37',
          'plot.linewidth': 6,
          'upper.color.0': '#ff3b31',
          'upper.linewidth': 6,
          'lower.color.0': '#4169e1',
          'lower.linewidth': 6,
          'plots background.color.0': '#ffffff'
        });
        widget.chart().createStudy('Parabolic SAR', false, false, [2], null, {
          'plot.color.0': '#bc59ff',
          'plot.linewidth': 2,
          'plot.plottype': 'circles'
        });
        widget.chart().createStudy('Volume', true, false, [1], null, {
          'volume.color.1': '#4169e1'
        });


      } else if (getParameterByName('type') == 'Web_Slinger') {
        widget.chart().createStudy(
          'Ichimoku Cloud', false, false, [4], null, {
          'plot.color.0': '#4169e1',
          'plot.linewidth': 3,
          'Plots Background[Color 1].color.1': '#4169e1'
        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [5],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,
        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [10],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [15],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [20],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [25],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 4,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [30],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [35],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [40],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [45],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [50],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 4,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [55],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [60],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [65],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [70],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [75],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 4,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [80],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [85],
          null, {
          'plot.color.0': '#000',
          'plot.linewidth': 1,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [90],
          null, {
          'plot.color.0': '#A231A2',
          'plot.linewidth': 5,

        });
        widget.chart().createStudy(
          'Moving Average Exponential',
          false,
          false, [9],
          null, {
          'plot.color.0': '#90EE90',
          'plot.linewidth': 5,

        });
        widget.chart().createStudy(
          'Moving Average',
          false,
          false, [9],
          null, {
          'plot.color.0': '#137B13',
          'plot.linewidth': 5,

        });
      } else {

      }

      var object_ids = [];

      function setRange(timeX, timeD) {
        var half = (timeD - timeX) / 2;
        var start = timeX - half;
        var end = timeD + half;

        widget.chart().setVisibleRange({
          from: start,
          to: end,
        });
      }

      function get_symbol_name() {
        var symbol_parts_array = widget.chart().symbol().split(':');
        // symbol_parts_array.shift();
        return symbol_parts_array.join(':');
      }

      socket.on('patterns', draw_pattern);

      function draw_pattern(response) {
        var symbol_name = get_symbol_name();
        if (!response.error && response.s == "ok") {
          // удалить паттерны 
          object_ids.forEach(function (id, i, array) {
            widget.chart().removeEntity(id);
          });

          object_ids = [];
        }
        var i = 0;
        response
          .expert
          .sort(function (a, b) {
            return b.time - a.time;
          })
          .forEach(function (point) {
            if (i >= 1) {
              return;
            }
            i++;

            var color = '#ff3b31'
            if (getParameterByName('type') == 'Web_Slinger') {
              var arrow = 0xf143; // down

              if (point.trend.indexOf('Buy') > -1) {
                arrow = 0xf143; // up
                var color = '#4169e1'
              }
            } else if (getParameterByName('type') == 'Pick_Pocket') {
              var arrow = 0xf0d6; // down
              var color = '#4169e1'
              if (point.trend.indexOf('Buy') > -1) {
                arrow = 0xf0d6; // up
                var color = '#ff3b31'
              }
            } else if (getParameterByName('type') == 'Simple_Scalper') {
              var arrow = 0xf05b; // down

              if (point.trend.indexOf('Buy') > -1) {
                arrow = 0xf05b; // up
                var color = '#4169e1'
              }
            } else {
              var arrow = 0xf063; // down

              if (point.trend.indexOf('Buy') > -1) {
                arrow = 0xf062; // up
                var color = '#4169e1'

              }
            }
            var arrow_id = widget.chart().createShape({
              time: point.time,
              price: point.price,
            }, {
              shape: 'icon',
              icon: arrow,
              zOrder: 'top',
              overrides: {
                color: color,
                backgroundColor: '#FF0000',
                size: 20,
              },
            });

            object_ids.push(arrow_id);
            var point2 = {
              time: point.time,
              price: point.price,
              channel: 'close'
            };

            var options = {
              shape: 'horizontal_line',
              text: point.price,
              lock: false,
              overrides: {
                linecolor: '#ffbf5f',
                linestyle: 1,
                linewidth: 1,
                horzLabelsAlign: "right",
                showPrice: true,
                showLabel: true,
                text: 'Entry Price ',
                textcolor: '#656565',
                fontsize: 14,
                vertLabelsAlign: 'bottom',
                zOrder: 'bottom',
              }
            };

            var line_id = widget.chart().createShape(point2, options);
            object_ids.push(line_id);
          });

        // patterns from admin
        var objects_for_shape = ['arrow_up', 'arrow_down', 'flag', 'vertical_line', 'horizontal_line'];
        response
          .master
          .forEach(function (pattern) {
            var line_id;
            if (object_ids.includes(pattern.type)) {
              line_id = widget.chart().createShape(pattern.points, {
                shape: pattern.type,
                overrides: pattern.overrides,
              });
            } else {
              line_id = widget.chart().createMultipointShape(pattern.points, {
                shape: pattern.type,
                overrides: pattern.overrides
              });
            }

            object_ids.push(line_id);
          });
      }
      setInterval(get_patterns, 10 * 1000); //setInterval(          
    }); // widget.onChartReady
  });
}); // document ready
