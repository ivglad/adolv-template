<?php

namespace App\Http\Resources\Handbook;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;

class CounterpartyCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @return array<int|string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection
        ];
    }
}