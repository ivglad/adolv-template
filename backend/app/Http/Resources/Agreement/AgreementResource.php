<?php

namespace App\Http\Resources\Agreement;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AgreementResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'number' => $this->number,
            'name' => $this->name,
        ];
    }
}
