import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import { BackendService } from '@services/backend.service';
import { pipe, switchMap, tap } from 'rxjs';
import { BakedGood } from '@models/baked-good.model';

type BakedGoodStoreState = {
  bakedGoods: BakedGood[];
  isLoading: boolean;
};

const initialState: BakedGoodStoreState = {
  bakedGoods: [],
  isLoading: false,
};

export const BakedGoodsStore = signalStore(
  withState(initialState),
  withMethods((store, backendService = inject(BackendService)) => ({
    loadBakedGoods: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() => {
          return backendService.getBakedGoods().pipe(
            tapResponse({
              next: ({ bakedGoods }) =>
                patchState(store, { bakedGoods, isLoading: false }),
              error: (err) => {
                patchState(store, { isLoading: false });
                console.error(err);
              },
            }),
          );
        }),
      ),
    ),
  })),
);
