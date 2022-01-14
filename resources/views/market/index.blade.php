@extends('mainLayout')
@section('content')
<div class="market-body flex">
  <div class="market-quotes flex flex-col">
    <div class="market-quotes-header">
      <div class="title">MARKET QUOTES</div>
    </div>
    <div class="market-quotes-button flex odd active" data-filter="crypto">
      <div class="broker-name">CRYPTO</div>
      <div class="broker-status">
        <label class="switch">
          <input type="checkbox" checked onclick="selectBroker(`crypto`)" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    <div class="market-quotes-button flex even active" data-filter="forex">
      <div class="broker-name">FOREX</div>
      <div class="broker-status">
        <label class="switch">
          <input type="checkbox" checked onclick="selectBroker(`forex`)" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
    <div class="market-quotes-button flex odd active" data-filter="indices">
      <div class="broker-name">INDICES</div>
      <div class="broker-status">
        <label class="switch">
          <input type="checkbox" checked onclick="selectBroker(`indices`)" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  </div>
  <div class="market-list">
    <div class="market-list-row">
      <!--OnePanel Start -->
      <div class="market-list-panel" data-panel="crypto">
        <div class="market-list-panel-header">
          CryptoCurrencies
        </div>
        <div class="market-list-panel-content">
          @foreach($markets as $symbol)
          @if ($symbol->type !== 0)
          @continue
          @endif
          <!--OneItem Start-->
          <div class="market-list-panel-item d-flex justify-content-between" id="{{$symbol->id}}">
            <div class="market-list-panel-item-title d-flex">
              <div class="market-list-panel-item-title-img">
                <img src="./assets/{{$symbol->imguri}}" />
              </div>
              <div class="market-list-panel-item-title-str">
                <div class="title">
                  {{$symbol->title}}
                </div>
                <div class="description">
                  {{$symbol->desc}}
                </div>
              </div>

            </div>
            <div class="market-list-panel-item-price">
              {{$symbol->price}}
            </div>
            <div class="market-list-panel-item-fav d-flex">
              <div class="market-list-panel-item-fav-check {{$symbol->favorite ? 'active' : ''}}">
              </div>
            </div>
          </div>
          <!--OneItem End-->
          @endforeach
        </div>
      </div>
      <!--OnePanel End -->
      <!--OnePanel Start -->
      <div class="market-list-panel" data-panel="forex" style="max-height: 100%;">
        <div class="market-list-panel-header">
          Forex
        </div>
        <div class="market-list-panel-content">
          @foreach($markets as $symbol)
          @if ($symbol->type !== 1)
          @continue
          @endif
          <!--OneItem Start-->
          <div class="market-list-panel-item d-flex justify-content-between" id="{{$symbol->id}}">
            <div class="market-list-panel-item-title d-flex">
              <div class="market-list-panel-item-title-img">
                <img src="./assets/{{$symbol->imguri}}" />
              </div>
              <div class="market-list-panel-item-title-str">
                <div class="title">
                  {{$symbol->title}}
                </div>
                <div class="description">
                  {{$symbol->desc}}
                </div>
              </div>
            </div>
            <div class="market-list-panel-item-price">
              {{$symbol->price}}
            </div>
            <div class="market-list-panel-item-fav d-flex">
              <div class="market-list-panel-item-fav-check {{$symbol->favorite ? 'active' : ''}}">
              </div>
            </div>
          </div>
          <!--OneItem End-->
          @endforeach
        </div>
      </div>
      <!--OnePanel End -->
      <!--OnePanel Start -->
      <div class="market-list-panel" data-panel="indices">
        <div class="market-list-panel-header">
          Indices
        </div>
        <div class="market-list-panel-content">
          @foreach($markets as $symbol)
          @if ($symbol->type !== 2)
          @continue
          @endif
          <!--OneItem Start-->
          <div class="market-list-panel-item d-flex justify-content-between" id="{{$symbol->id}}">
            <div class="market-list-panel-item-title d-flex">
              <div class="market-list-panel-item-title-img">
                <img src="./assets/{{$symbol->imguri}}" />
              </div>
              <div class="market-list-panel-item-title-str">
                <div class="title">
                  {{$symbol->title}}
                </div>
                <div class="description">
                  {{$symbol->desc}}
                </div>
              </div>
            </div>
            <div class="market-list-panel-item-price">
              {{$symbol->price}}
            </div>
            <div class="market-list-panel-item-fav d-flex">
              <div class="market-list-panel-item-fav-check {{$symbol->favorite ? 'active' : ''}}">
              </div>
            </div>
          </div>
          <!--OneItem End-->
          @endforeach
        </div>
      </div>
      <!--OnePanel End -->
    </div>
  </div>
</div>
@endsection
@section('script')
<script>
  function selectBroker(filter) {
    $('.market-list').find(".market-list-panel").each((i, elm) => {
      let panel = elm.dataset.panel;
      if (panel == filter) {
        elm.hidden = !elm.hidden;
      }
    });
  }

  $(document).ready(function() {
    $('.market-list-panel-item').click(function(e) {
      e.preventDefault();
      $.ajaxSetup({
        headers: {
          'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
      });
      let check = $(this).find('.market-list-panel-item-fav-check');
      if (check.hasClass('active')) {
        check.removeClass('active')
      } else {
        check.addClass('active')
      }
      $.ajax({
        url: "{{ url('/market/editsymbol') }}",
        method: 'post',
        data: {
          id: e.currentTarget.id,
          favorite: check.hasClass('active'),
        },
        success: function(result) {
          console.log(result);
          location.reload();
        }
      });
    });

    $(".side-bar-item").click(function() {
      let newUrl = "{{url('/dashboard')}}";
      window.location.replace(newUrl);
    });
  });
</script>
@endsection