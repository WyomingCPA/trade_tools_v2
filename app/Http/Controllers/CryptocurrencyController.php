<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Carbon\Carbon;

use App\Models\Cryptocurrency;
use App\Models\Candle;
use App\Models\User;

class CryptocurrencyController extends Controller
{
    public function all(Request $request)
    {
        $favorite_ids = Auth::user()->favoritesCryptocurrency->pluck('id')->toArray();
        $objects = Cryptocurrency::whereNotIn('id', $favorite_ids);
        $count = $objects->count();
        $sort = $request->get('sort');
        $direction = $request->get('direction');
        $name = $request->get('symbol');
        $created_by = $request->get('created_by');
        $type = $request->get('type');
        $limit = 20;
        $page = (int) $request->get('page');
        $created_at = $request->get('created_at');
        if ($name !== null) {
            $objects->where('symbol', 'like', '%' . $name . '%');
        }
        $objects->offset($limit * ($page - 1))->limit($limit);
        if ($request->isMethod('post')) {
            return response()->json([
                'models' => $objects->get()->toArray(),
                'count' => $count
            ]);
        }
    }
    public function favoriteCryptocurrency(Request $request)
    {
        $rows = $request->post('selRows');
        $select = [];
        foreach ($rows as $value) {
            $select[] = $value['id'];
        }

        Auth::user()->favoritesCryptocurrency()->attach(array_values($select));

        return response()->json([
            'status' => true,
        ], 200);
    }

    public function favorite(Request $request)
    {
        $models = Auth::user()->favoritesCryptocurrency;
        return response([
            'models' => $models,
        ], 200);
    }
    public function saveUsdtCryptocurrency(Request $request)
    {
        $data = json_decode($request->post()[0], true);
        foreach ($data as $item) {
            //$test = $item["figi"];
            $model = Cryptocurrency::firstOrCreate(
                ['symbol' => $item,],
                [
                    'symbol' => $item,
                ]
            );
            $model->save();
        }

        return response()->json([
            'status' => true,
        ], 200);
    }
    public function saveCandle(Request $request)
    {
        $candles = json_decode($request->post()[0], true);

        foreach ($candles as $candle) {
            foreach ($candle as $item)
            {
                try {
                    $model = Candle::firstOrCreate(
                        ['tools_id' => $item['tools_id'], 'interval' => $item['interval'],  'tools_type' => $item['tools_type'], 'close' => $item['Close'], 'time' => $item['Time']],
                        [
                            'open' => $item['Open'],
                            'high' => $item['High'],
                            'low' => $item['Low'],
                            'volume' => $item['Volume'],                       
                        ]
                    );
                } catch (\Exception $e) {
                    echo $e->getMessage();
                }
            }
        }

        return response()->json([
            'status' => true,
        ], 200);
    }

    public function getFavoriteNotAuth(Request $request)
    {
        $user = User::select('id')->where('email', 'WyomingCPA@yandex.ru')->first();
        $models = $user->favoritesCryptocurrency;
        return response([
            'coins' => $models,
        ], 200);
    }
}
