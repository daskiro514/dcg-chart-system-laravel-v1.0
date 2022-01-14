/**dummy */
let human_idea_list = [
  {
    action: 'buy',
    symbol: 'EURUSD',
    price: 200,
    timeframe: 'M5',
    tp1: 1632442667672,
    tp2: 1632442667672,
    tp3: 1632442667672,
    sl: "",
    executiontype: "",
    tradetype: 'scalp',
    notes: '',
    agent: 'Drkathy'
  },
  {
    action: 'sell',
    symbol: 'EURUSD',
    price: 200,
    timeframe: 'M5',
    tp1: 1632442667672,
    tp2: 1632442667672,
    tp3: 1632442667672,
    sl: "",
    executiontype: "",
    tradetype: 'scalp',
    notes: '',
    agent: 'Drkathy'
  },
  {
    action: 'buy',
    symbol: 'EURUSD',
    price: 200,
    timeframe: 'M5',
    tp1: 1632442667672,
    tp2: 1632442667672,
    tp3: 1632442667672,
    sl: "",
    executiontype: "",
    tradetype: 'scalp',
    notes: '',
    agent: 'Drkathy'
  },
  {
    action: 'sell',
    symbol: 'EURUSD',
    price: 200,
    timeframe: 'M5',
    tp1: 1632442667672,
    tp2: 1632442667672,
    tp3: 1632442667672,
    sl: "",
    executiontype: "",
    tradetype: 'scalp',
    notes: '',
    agent: 'Drkathy'
  },
  {
    action: 'sell',
    symbol: 'EURUSD',
    price: 200,
    timeframe: 'M5',
    tp1: 1632442667672,
    tp2: 1632442667672,
    tp3: 1632442667672,
    sl: "",
    executiontype: "",
    tradetype: 'scalp',
    notes: '',
    agent: 'Drkathy'
  },
  {
    action: 'buy',
    symbol: 'EURUSD',
    price: 200,
    timeframe: 'M5',
    tp1: 1632442667672,
    tp2: 1632442667672,
    tp3: 1632442667672,
    sl: "",
    executiontype: "",
    tradetype: 'scalp',
    notes: '',
    agent: 'Drkathy'
  },
  {
    action: 'sell',
    symbol: 'EURUSD',
    price: 200,
    timeframe: 'M5',
    tp1: 1632442667672,
    tp2: 1632442667672,
    tp3: 1632442667672,
    sl: "",
    executiontype: "",
    tradetype: 'scalp',
    notes: '',
    agent: 'Drkathy'
  },
  {
    action: 'sell',
    symbol: 'EURUSD',
    price: 200,
    timeframe: 'M5',
    tp1: 1632442667672,
    tp2: 1632442667672,
    tp3: 1632442667672,
    sl: "",
    executiontype: "",
    tradetype: 'scalp',
    notes: '',
    agent: 'Drkathy'
  },
  {
    action: 'buy',
    symbol: 'EURUSD',
    price: 200,
    timeframe: 'M5',
    tp1: 1632442667672,
    tp2: 1632442667672,
    tp3: 1632442667672,
    sl: "",
    executiontype: "",
    tradetype: 'scalp',
    notes: '',
    agent: 'Drkathy'
  },
  {
    action: 'sell',
    symbol: 'EURUSD',
    price: 200,
    timeframe: 'M5',
    tp1: 1632442667672,
    tp2: 1632442667672,
    tp3: 1632442667672,
    sl: "",
    executiontype: "",
    tradetype: 'scalp',
    notes: '',
    agent: 'Drkathy'
  },
]
/**dumy-end */

let algoList = $(".algo-list")
let algoListContent = $(".algo-list-content")

let newsList = $(".news-list")
let newsListContent = $(".news-list-content")
let monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

$(".side-bar-item").click(function () {
  let curURL = window.location.href;
  console.log(curURL);

  if ($(this).hasClass('algo')) {
    if (algoList.is(":hidden")) {
      console.log('hide')
      let htmlstr = ''
      let items = human_idea_list;
      items.forEach((item, index) => {
        let itemColorClass = index % 2 ? "even" : "odd";
        htmlstr += `
          <div class="algo-list-item ${item.action} ${itemColorClass}">
            <div class="algo-list-item-symbol">
              ${item.symbol}(${item.timeframe})
            </div>
            <div class="algo-list-item-price">
              Price:${item.price}
            </div>
            <div class="algo-list-item-tp">
              TIME (UTC): 2021-08-11 13:00:07
            </div>
            <div class="algo-list-item-tp">
              TIME (UTC): 2021-08-11 13:00:07
            </div>
          </div>
                `
      })
      algoListContent.html(htmlstr)
    }
    algoList.toggle(100)
    if (!newsList.is(":hidden")) {
      newsList.toggle(100)
    }
  } else if ($(this).hasClass('news')) {
    if (newsList.is(":hidden")) {
      console.log('news panel');
      let htmlstr = ''

      // const RSS_URL = `https://dev.to/feed/geekgalgroks`;
      const RSS_URL = `https://finance.yahoo.com/news/rssindex`;

      $.ajax({
        type: 'GET',
        url: "https://api.rss2json.com/v1/api.json?rss_url=" + RSS_URL,
        dataType: 'jsonp',
        success: function (data) {
          console.log(data.feed.description);
          console.log(data);
          data.items.map((item, index) => {
            const pubDateStr = item.pubDate;
            console.log(pubDateStr);

            var t = pubDateStr.split(/[- :]/);
            var d = new Date(t[0], t[1] - 1, t[2], t[3], t[4], t[5]);
            var dateStr = new Date(d);
            // const dateStr = new Date(pubDateStr);
            console.log(dateStr);

            let newsTime = dateStr.getHours() + ':' + dateStr.getMinutes();
            console.log(newsTime);
            let newsDate = monthList[dateStr.getMonth()] + ' ' + dateStr.getDate();
            let newsTitle = item.title;
            let newsLink = item.link;
            let itemColorClass = index % 2 ? "even" : "odd";

            // "・" + 
            htmlstr += `
              <div class="newsItem ${itemColorClass}" data-url="${newsLink}" data-title="${newsTitle}">
                <div class="newsItem-Header">
                  <span>${newsTime}</span>
                  <span>${newsDate}</span>
                </div>
                <div class="newsItem-Title">
                  <span>${newsTitle}</span>
                  <span class="newslink">${newsLink}</span>
                </div>
              </div>
            `
          })
          newsListContent.html(htmlstr)
        }
      });
    }
    newsList.toggle(100)
    if (!algoList.is(":hidden")) {
      algoList.toggle(100)
    }
  }
})

$(document).on('click', '.news-list-content > .newsItem', function () {
  let ref = $(this).data('url');
  let title = $(this).data('title');

  $.ajax({
    url: '/news',
    method: 'get',
    data: {
      url: ref,
    },
    success: function (result) {
      $('#newsModal').find('.modal-body').html(result);
    },
    error: function (err) {
      $('#newsModal').find('.modal-body').html("Can't load news for now.");
    },
  });

  $('#newsModal').find('.modal-body').html("");
  $('#newsModal').find('.modal-title').text(title);
  $('#newsModal').modal('show');
});

$(document).on('click', '.side-bar-item', function () {
  let symbolName = $(this).attr('id');
  widget.chart().setSymbol(symbolName);
});
