import { inject } from '@angular/core';
import { patchState, signalStore, withHooks, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { pipe, switchMap, tap } from 'rxjs';
import { BakedGood, BakedGoodListSchema } from '@models/baked-good.model';
import { BakedGoodService } from '@services/baked-goods.service';
import { parseResponse } from '../shared/parse-response.operator';

type BakedGoodStoreState = {
  bakedGoods: BakedGood[];
  isLoading: boolean;
};

const initialState: BakedGoodStoreState = {
  bakedGoods: [],
  isLoading: false,
};

export const BakedGoodStore = signalStore(
  withState(initialState),
  withHooks((store, bakedGoodService = inject(BakedGoodService)) => ({
    /**
     * Loads all baked goods from backend.
     */
    onInit: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return bakedGoodService.getAllBakedGoods().pipe(
            parseResponse(BakedGoodListSchema),
            tapResponse({
              next: (bakedGoods) =>
                patchState(store, { bakedGoods, isLoading: false }),
              error: (err) => {
                patchState(store, { isLoading: false });
                console.error('Failed to load baked goods!', err);
              },
            }),
          );
        }),
      ),
    ),
  })),
);
