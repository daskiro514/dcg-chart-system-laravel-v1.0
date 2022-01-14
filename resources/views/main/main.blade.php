@extends('mainLayout')

@section('content')
<div class="chart-body d-flex ">
  <div class="algo-list" style="display:none">
    <div class="algo-list-header">
      IDEAS
    </div>
    <div class="algo-list-body">
      <div class="algo-list-content">
      </div>
    </div>
  </div>
  <div class="news-list" style="display:none">
    <div class="news-list-header">
      NEWS
    </div>
    <div class="news-list-body">
      <div class="news-list-content">
      </div>
    </div>
  </div>
  <div class="chart-panel" id="chartPanel">
  </div>
</div>

<!-- Modal -->
<div class="modal fade custom-modal" id="newsModal" tabindex="-1" role="dialog" aria-labelledby="newsModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="chartModalTitle">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body" id="modalchart">

      </div>
    </div>
  </div>
</div>

@endsection
@section('script')
<script type="text/javascript" src="{{asset('js/chart/js/socket.io.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/charting_library/charting_library.standalone.js')}}"></script>
<!-- <script type="text/javascript" src="{{asset('js/chart/datafeeds/udf/dist/bundle.js')}}"></script> -->
<script type="text/javascript" src="{{asset('js/chart/datafeeds/udf/datafeed.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/js/script.js?v=1.2')}}"></script>
<script type="text/javascript" src="{{asset('js/chart/js/master.js')}}"></script>
<script type="text/javascript" src="{{asset('js/chartpanel.js')}}"></script>
@endsection