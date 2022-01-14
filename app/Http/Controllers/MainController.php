<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Market;
use App\Models\Chart;

use Carbon\Carbon;

class MainController extends Controller
{
  //
  public function index()
  {
    $markets = Market::all();
    return view('main.main')->with("markets", $markets);
  }

  public function storage(Request $request)
  {
    $method = $request->method();


    $user = $request->user;
    $client = $request->client;

    switch ($method) {
      case 'POST':
        $name = $request->name;
        $resolution = $request->resolution;
        $symbol = $request->symbol;
        $content = $request->content;

        $current_timestamp = Carbon::now()->timestamp;

        if ($request->query->has('chart')) {
          // update
          $id = $request->chart;
          Chart::where([
            ['id', $id],
            ['user', $user],
            ['client', $client]
          ])
            ->update([
              'name' => $name,
              'resolution' => $resolution,
              'symbol' => $symbol,
              'content' => $content,
            ]);

          echo '{"status":"ok"}';
        } else {
          // create
          $chartModel = new Chart;

          $chartModel->user = $user;
          $chartModel->client = $client;
          $chartModel->name = $name;
          $chartModel->resolution = $resolution;
          $chartModel->symbol = $symbol;
          $chartModel->content = $content;
          $chartModel->timestamp = $current_timestamp;

          $chartModel->save();
          echo '{"status":"ok","id":' . $chartModel->id . '}';
        }
        break;

      case 'GET':
        if ($request->query->has('chart')) {
          // getchart
          $chartId = $request->chart;
          $result = Chart::where([['user', $user], ['client', $client], ['id', $chartId]])->get()->first();
          $subset = [
            'id' => $result->id,
            'name' => $result->name,
            'timestamp' => (string)$result->timestamp,
            'content' => $result->content,
          ];
        } else {
          // getlist
          $result = Chart::where([['user', $user], ['client', $client]])->get();
          $subset = $result->map(function ($item) {
            return collect($item->toArray())
              ->only(['id', 'name', 'resolution', 'symbol', 'timestamp'])
              ->all();
          });
        }

        echo json_encode([
          'status' => 'ok',
          'data'   => $subset,
        ]);
        break;

      case 'DELETE':
        // delete
        if ($request->query->has('chart')) {
          $id = $request->chart;
          $deletedRows = Chart::where([['id', $id], ['user', $user], ['client', $client]])->delete();
          echo '{"status":"ok"}';
        } else {
          echo '{"status":"error request"}';
        }
        break;

      default:
        # code...
        break;
    }
  }

  public function getRSSFeedContent(Request $request)
  {
    $url = $request->url;

    $parse = parse_url($url);
    $hostname =  $parse['host'];

    // $html = file_get_contents($url);

    $url = $request->url;

    $c = curl_init($url);
    curl_setopt($c, CURLOPT_RETURNTRANSFER, true);
    $html = curl_exec($c);

    $doc = new \DOMDocument();
    // disable errors on invalid html
    libxml_use_internal_errors(true);
    $doc->loadHTML($html);
    $finder = new \DomXPath($doc);

    if (!strcmp($hostname, "finance.yahoo.com")) {
      foreach ($finder->query("//*[contains(@class, 'caas-content-wrapper')]") as $section) {
        $resHtml = $finder->query(".//div[@class='caas-body']", $section);
      }
    } else if (!strcmp($hostname, "www.marketwatch.com")) {
      $resHtml = $finder->query("//*[contains(@class, 'article__body')]");
    } else if (!strcmp($hostname, "www.investors.com")) {
      $resHtml = $finder->query("//*[contains(@class, 'single-post-content')]");
    } else if (!strcmp($hostname, "www.wsj.com")) {
      $resHtml = $finder->query("//*[contains(@class, 'wsj-snippet-body')]");
    } else if (!strcmp($hostname, "www.investopedia.com")) {
      $resHtml = $finder->query("//*[contains(@class, 'article-body-content')]");
    } else if (!strcmp($hostname, "www.barrons.com")) {
      $resHtml = $finder->query("//*[contains(@class, 'snippet__body')]");
    } else {
      $resHtml = $doc->getElementsByTagName("body");
    }

    print_r($doc->saveHTML($resHtml->item(0)));
  }
}
