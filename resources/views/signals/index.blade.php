@extends('mainLayout')
@section('content')
<div class="signal-board flex">
  <div class="signal-view">
    <!-- <form method="POST" action="{{route('new-signal')}}"> -->
    <form >
      <div class="signal-header">NEW SIGNAL</div>
      <div class="signal-panel flex">
        <div class="signal-panel-left col-md-6 col-sm-6 col-xs-12">
          <div class="form-group">
            <label for="formCtlSelAgent">Agent</label>
            <select class="form-control" id="formCtlSelAgent">
              <option>Ken Johnson</option>
              <option>Mariam Kimeridze</option>
              <option>Hans Wang</option>
            </select>
          </div>
          <div class="form-group">
            <label for="formCtlSelSymbol">Symbol</label>
            <input type="text" class="form-control" id="formCtlSelSymbol" placeholder="">
          </div>
          <div class="form-group">
            <label for="formCtlSelAction">Action (Buy/Sell)</label>
            <select class="form-control" id="formCtlSelAction">
              <option>Buy</option>
              <option>Sell</option>
            </select>
          </div>
          <div class="form-group">
            <label for="formCtlSelPrice">Price</label>
            <input type="text" class="form-control" id="formCtlSelPrice" placeholder="">
          </div>
          <div class="form-group">
            <label for="formCtlSelTimeframe">Timeframe</label>
            <select class="form-control" id="formCtlSelTimeframe">
              <option>M1</option>
              <option>M5</option>
              <option>M15</option>
              <option>M30</option>
              <option>H1</option>
              <option>H4</option>
              <option>D1</option>
            </select>
          </div>
          <div class="form-group">
            <label for="formCtlSelTradetype">Trade Type</label>
            <select class="form-control" id="formCtlSelAction">
              <option>Scalp</option>
              <option>Intraday</option>
              <option>Swing</option>
            </select>
          </div>
          <div class="form-group">
            <label for="formCtlSelNotes">Notes</label>
            <textarea class="form-control" id="formCtlSelNotes" rows="3"></textarea>
          </div>
        </div>
        <div class="signal-panel-right col-md-6 col-sm-6 col-xs-12">
          <div class="form-group">
            <label for="formCtlSelExectype">Execution Type</label>
            <select class="form-control" id="formCtlSelExectype">
              <option>Market Execution</option>
              <option>Limit</option>
              <option>Stop</option>
            </select>
          </div>
          <div class="form-group">
            <label for="formCtlSelTp1">Tp1</label>
            <input type="text" class="form-control" id="formCtlSelTp1" placeholder="">
          </div>
          <div class="form-group">
            <label for="formCtlSelTp2">Tp2</label>
            <input type="text" class="form-control" id="formCtlSelTp2" placeholder="">
          </div>
          <div class="form-group">
            <label for="formCtlSelTp3">Tp3</label>
            <input type="text" class="form-control" id="formCtlSelTp3" placeholder="">
          </div>
          <div class="form-group">
            <label for="formCtlSelSl">SL</label>
            <input type="text" class="form-control" id="formCtlSelSl" placeholder="">
          </div>
        </div>
      </div>
      <div class="signal-footer">
        <button type="submit" class="btn btn-secondary mb-2">Submit</button>
      </div>
    </form>
  </div>
</div>
@endsection
@section('script')
<script>
  $(document).ready(function() {});
</script>
@endsection